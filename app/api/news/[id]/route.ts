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

        const { data: currentNews } = await supabaseServer
            .from("news")
            .select("img")
            .eq("id", id)
            .single();

        let imgUrl = formData.get("img");
        const imgFile = formData.get("img") as File | null;

        if (imgFile instanceof File && imgFile.size > 0) {

            const oldimgUrl = currentNews?.img;
            if (oldimgUrl) {
                const oldPath = oldimgUrl.split("/public/news/")[1];
                if (oldPath) {
                    await supabaseServer.storage.from("news").remove([oldPath]);
                }
            }

            const buffer = await imgFile.arrayBuffer();
            const ext = imgFile.name.split(".").pop();
            const newPath = `images/${Date.now()}_${crypto.randomUUID()}.${ext}`;

            const { error: uploadError } = await supabaseServer.storage
                .from("news")
                .upload(newPath, buffer, {
                    contentType: imgFile.type,
                    upsert: true
                });

            if (uploadError) {
                console.error("이미지 업로드 에러:", uploadError);
                throw new Error("이미지 업로드를 실패했습니다.");
            }

            const { data: urlData } = supabaseServer.storage
                .from("news")
                .getPublicUrl(newPath);

            imgUrl = urlData.publicUrl;
        }

        const { error: dbError } = await supabaseServer
            .from("news")
            .update({
                title: formData.get("title"),
                contents: formData.get("contents"),
                img: imgUrl,
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

        const { data: news, error: fetchError } = await supabaseServer
            .from("news")
            .select("img")
            .eq("id", id)
            .single();

        if (fetchError || !news) {
            return NextResponse.json({ error: "삭제할 기사를 찾을 수 없습니다." }, { status: 404 });
        }

        const pathsToDelete: string[] = [];

        if (news.img) {
            const imgPath = news.img.split("/public/news/")[1];
            if (imgPath) pathsToDelete.push(imgPath);
        }

        if (pathsToDelete.length > 0) {
            const { error: storageError } = await supabaseServer.storage
                .from("news")
                .remove(pathsToDelete);

            if (storageError) {
                console.error("storage file delete error:", storageError.message);
            }
        }

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