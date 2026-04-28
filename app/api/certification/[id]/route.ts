import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const { data, error } = await supabaseServer
      .from("certifications")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!data) {
      return NextResponse.json({ error: "인증서 없음" }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "서버 오류";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const formData = await req.formData();
    const { id } = await params;

    const name = formData.get("name") as string;
    const newImgUrl = formData.get("img") as string; // 프론트에서 보낸 새 URL

    // 1. 기존 데이터 조회 (기존 이미지 삭제를 위해)
    const { data: current } = await supabaseServer
      .from("certifications")
      .select("img")
      .eq("id", id)
      .single();

    /**
     * 기존 이미지와 새로 들어온 이미지 URL이 다르다면 (사용자가 이미지를 교체했다면)
     * 기존 스토리지에 있는 파일 삭제
     */
    if (current?.img && newImgUrl && current.img !== newImgUrl) {
      // URL에서 파일명(경로) 추출
      const oldPath = current.img.split("/storage/v1/object/public/certifications/")[1];
      if (oldPath) {
        await supabaseServer.storage.from("certifications").remove([oldPath]);
      }
    }

    // 2. DB 업데이트
    const { error: dbError } = await supabaseServer
      .from("certifications")
      .update({
        name,
        img: newImgUrl,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (dbError) throw dbError;

    return NextResponse.json({ message: "인증서가 수정되었습니다." });
  } catch (err: any) {
    console.error("PATCH ERROR:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// DELETE: 삭제
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // 1. 삭제할 데이터의 이미지 경로 조회
    const { data: certification } = await supabaseServer
      .from("certifications")
      .select("img")
      .eq("id", id)
      .single();

    // 2. 스토리지 파일 삭제
    if (certification?.img) {
      const imgPath = certification.img.split("/storage/v1/object/public/certifications/")[1];
      if (imgPath) {
        await supabaseServer.storage.from("certifications").remove([imgPath]);
      }
    }

    // 3. DB 데이터 삭제
    const { error: dbError } = await supabaseServer
      .from("certifications")
      .delete()
      .eq("id", id);

    if (dbError) throw dbError;

    return NextResponse.json({ message: "인증서가 삭제되었습니다." });
  } catch (err: any) {
    console.error("DELETE ERROR:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}