import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const category = formData.get("category") as string;

    const thumnail = formData.get("thumnail") as File | null;
    if (!thumnail) throw new Error("대표 이미지 없음");

    const imagesFiles = formData.getAll("images") as File[];
    if (imagesFiles.length === 0) throw new Error("상세 이미지 없음");

    /* ---------- 대표 이미지 업로드 ---------- */
    function safeFileName(originalName: string) {
      const ext = originalName.split(".").pop();
      return `${Date.now()}_${crypto.randomUUID()}.${ext}`;
    }

    const thumnailBuffer = await thumnail.arrayBuffer();
    const safeName = safeFileName(thumnail.name);
    const thumnailPath = `products/thumnail/${safeName}`;

    const { error: thumError } = await supabaseServer.storage
      .from("products")
      .upload(thumnailPath, thumnailBuffer, {
        contentType: thumnail.type,
      });

    if (thumError) throw thumError;

    const { data: thumUrl } = supabaseServer.storage
      .from("products")
      .getPublicUrl(thumnailPath);

    /* ---------- 상세 이미지 업로드 ---------- */
    const imagesUrls: string[] = [];

    for (const file of imagesFiles) {
      const buffer = await file.arrayBuffer();
      const safeName = safeFileName(file.name);
      const path = `products/images/${safeName}`;

      const { error } = await supabaseServer.storage
        .from("products")
        .upload(path, buffer, { contentType: file.type });

      if (error) throw error;

      const { data } = supabaseServer.storage
        .from("products")
        .getPublicUrl(path);

      imagesUrls.push(data.publicUrl);
    }

    /* ---------- DB 저장 ---------- */
    const { error: dbError } = await supabaseServer.from("products").insert({
      name,
      category,
      thumnail: thumUrl.publicUrl,
      images: imagesUrls,
    });

    if (dbError) throw dbError;

    return NextResponse.json({ message: "제품이 등록되었습니다." });

  } catch (err: any) {
    console.error("PRODUCT POST ERROR", err);
    return NextResponse.json(
      { error: err.message || "제품 등록을 실패했습니다. 다시 시도해주세요." },
      { status: 500 }
    );
  }
}
