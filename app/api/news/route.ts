import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const title = formData.get("title") as string;
    const contents = formData.get("contents") as string;
    const img = formData.get("img") as File | null;
    if (!img) throw new Error("이미지를 등록해주세요.");


    if (!title || !contents) {
      return NextResponse.json(
        { error: "기사제목과 URL를 모두 입력해주세요." },
        { status: 400 }
      );
    }

    /* ---------- 이미지 업로드 ---------- */
    function safeFileName(originalName: string) {
      const ext = originalName.split(".").pop();
      return `${Date.now()}_${crypto.randomUUID()}.${ext}`;
    }

    const imgBuffer = await img.arrayBuffer();
    const safeName = safeFileName(img.name);
    const imgPath = `${safeName}`;

    const { error: thumError } = await supabaseServer.storage
      .from("news")
      .upload(imgPath, imgBuffer, {
        contentType: img.type,
      });

    if (thumError) throw thumError;

    const { data: thumUrl } = supabaseServer.storage
      .from("news")
      .getPublicUrl(imgPath);

    /* ---------- DB 저장 ---------- */
    
    const { error: dbError } = await supabaseServer
      .from("news") 
      .insert({
        title,
        contents,
        img: thumUrl.publicUrl,
      });

    if (dbError) throw dbError;

    return NextResponse.json({ message: "기사가 등록되었습니다." });

  } catch (err: any) {
    console.error("NEWS POST ERROR", err);
    return NextResponse.json(
      { error: err.message || "기사 등록에 실패했습니다. 다시 시도해주세요." },
      { status: 500 }
    );
  }
}