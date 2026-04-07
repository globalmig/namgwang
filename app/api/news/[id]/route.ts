import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    const { data: currentData, error } = await supabaseServer
        .from("news")
        .select("*")
        .eq("id", id)
        .maybeSingle();

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!currentData) {
        return NextResponse.json({ error: "기사 내용을 찾을 수 없습니다." }, { status: 404 });
    }

    const { data: prev } = await supabaseServer
        .from("news")
        .select("id, title")
        .lt("created_at", currentData.created_at)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();

    const { data: next } = await supabaseServer
        .from("news")
        .select("id, title")
        .gt("created_at", currentData.created_at)
        .order("created_at", { ascending: true })
        .limit(1)
        .maybeSingle();


    return NextResponse.json({
        ...currentData,
        prev: prev || null,
        next: next || null
    });

}

export async function PATCH(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const formData = await req.formData();
        const { id } = await params;

        const title = formData.get("title") as string;
        const contents = formData.get("contents") as string;
        const newImgUrl = formData.get("img") as string;

        // 1. 기존 데이터 조회
        const { data: currentNews } = await supabaseServer
            .from("news")
            .select("img")
            .eq("id", id)
            .single();

        // 새 이미지 URL이 기존과 다를 경우 (이미지가 교체된 경우) 기존 파일 삭제
        if (currentNews?.img && newImgUrl && currentNews.img !== newImgUrl) {
            // URL에서 스토리지 내부 경로 추출 (버킷명 'news' 이후의 경로)
            const oldPath = currentNews.img.split("/storage/v1/object/public/news/")[1];
            if (oldPath) {
                await supabaseServer.storage.from("news").remove([oldPath]);
            }
        }

        // 2. DB 업데이트
        const { error: dbError } = await supabaseServer
            .from("news")
            .update({
                title,
                contents,
                img: newImgUrl, // 교체되었거나 유지된 URL 저장
                updated_at: new Date().toISOString(),
            })
            .eq("id", id);

        if (dbError) throw dbError;

        return NextResponse.json({ message: "기사 내용이 수정되었습니다." });
    } catch (err: any) {
        console.error("PATCH ERROR:", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        // 1. 삭제할 기사의 이미지 정보 먼저 조회
        const { data: news, error: fetchError } = await supabaseServer
            .from("news")
            .select("img")
            .eq("id", id)
            .single();

        if (fetchError || !news) {
            return NextResponse.json({ error: "삭제할 기사를 찾을 수 없습니다." }, { status: 404 });
        }

        // 2. 스토리지 파일 삭제 진행
        if (news.img) {
            const imgPath = news.img.split("/storage/v1/object/public/news/")[1];
            if (imgPath) {
                const { error: storageError } = await supabaseServer.storage
                    .from("news")
                    .remove([imgPath]);
                
                if (storageError) {
                    console.error("Storage delete error:", storageError.message);
                }
            }
        }

        // 3. DB 데이터 삭제
        const { error: dbError } = await supabaseServer
            .from("news")
            .delete()
            .eq("id", id);

        if (dbError) throw dbError;

        return NextResponse.json({ message: "기사가 삭제되었습니다." });

    } catch (err: any) {
        console.error("NEWS DELETE ERROR:", err);
        return NextResponse.json(
            { error: err.message || "삭제 중 오류가 발생했습니다." },
            { status: 500 }
        );
    }
}