import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const img = formData.get("img") as File | null;
    if (!img) throw new Error("이미지 없음");
    
    /* ---------- 이미지 업로드 ---------- */
    function safeFileName(originalName: string) {
      const ext = originalName.split(".").pop();
      return `${Date.now()}_${crypto.randomUUID()}.${ext}`;
    }

    const imgBuffer = await img.arrayBuffer();
    const safeName = safeFileName(img.name);
    const imgPath = `${safeName}`;

    const { error: thumError } = await supabaseServer.storage
      .from("certifications")
      .upload(imgPath, imgBuffer, {
        contentType: img.type,
      });

    if (thumError) throw thumError;

    const { data: thumUrl } = supabaseServer.storage
      .from("certifications")
      .getPublicUrl(imgPath);

    /* ---------- DB 저장 ---------- */
    const { error: dbError } = await supabaseServer.from("certifications").insert({
      name,
      img: thumUrl.publicUrl,
    });

    if (dbError) throw dbError;

    return NextResponse.json({ message: "인증서가 등록되었습니다." });

  } catch (err: any) {
    console.error("certification POST ERROR", err);
    return NextResponse.json(
      { error: err.message || "인증서 정보 등록을 실패했습니다. 다시 시도해주세요." },
      { status: 500 }
    );
  }
}
