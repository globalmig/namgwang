import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '4mb',
    },
  },
};

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const category = formData.get("category") as string;

    const unitCategories = ["small", "medium", "large"]; // 프로젝트에 맞게 리스트업
    const targetStorage = unitCategories.includes(category) ? "units" : "others";


    const thumbnail = formData.get("thumbnail") as File | null;
    if (!thumbnail) throw new Error("대표 이미지 없음");

    const imagesFiles = formData.getAll("images") as File[];
    if (imagesFiles.length === 0) throw new Error("상세 이미지 없음");

    
    /* ---------- 파일 크기 제한 ---------- */
    let totalSize = (thumbnail?.size || 0);
    imagesFiles.forEach(file => totalSize += file.size);

    if (totalSize > 4.5 * 1024 * 1024) { // 4.5MB 기준
      return NextResponse.json({ error: "Vercel 제한으로 인해 전체 용량은 4.5MB를 넘을 수 없습니다." }, { status: 413 });
    }
 
    /* ---------- 대표 이미지 업로드 ---------- */
    function safeFileName(originalName: string) {
      const ext = originalName.split(".").pop();
      return `${Date.now()}_${crypto.randomUUID()}.${ext}`;
    }

    const thumSafeName = safeFileName(thumbnail.name);
    const thumbnailPath = `${targetStorage}/thumbnail/${thumSafeName}`;

    const { error: thumError } = await supabaseServer.storage
      .from(targetStorage)
      .upload(thumbnailPath, thumbnail, { // buffer 변환 없이 직접 전달
        contentType: thumbnail.type,
        upsert: false, // 동일 파일명 덮어쓰기 방지
      });

    if (thumError) throw thumError;

    const { data: thumUrlData } = supabaseServer.storage
      .from(targetStorage)
      .getPublicUrl(thumbnailPath);

    /* ---------- 상세 이미지 업로드 ---------- */
    const imagesUrls: string[] = [];

    for (const file of imagesFiles) {
      const buffer = await file.arrayBuffer();
      const safeName = safeFileName(file.name);
      const path = `${targetStorage}/images/${safeName}`;

      const { error } = await supabaseServer.storage
        .from(targetStorage)
        .upload(path, buffer, {
          contentType: file.type,
          upsert: false
        });

      if (error) throw error;

      const { data } = supabaseServer.storage
        .from(targetStorage)
        .getPublicUrl(path);

      imagesUrls.push(data.publicUrl);
    }

    /* ---------- DB 저장 ---------- */
    const { error: dbError } = await supabaseServer.from("products").insert({
      name,
      category,
      thumbnail: thumUrlData.publicUrl,
      images: imagesUrls,
    })

    if (dbError) throw dbError;

    return NextResponse.json({ message: "제품이 등록되었습니다." });

  } catch (err: any) {
    console.error("PRODUCT POST ERROR", err);

    // if (err.message?.includes("Payload Too Large") || err.status === 413) {
    //   return NextResponse.json(
    //     { error: "파일 용량이 너무 큽니다. (최대 약 4MB)" },
    //     { status: 413 }
    //   );
    // }

    return NextResponse.json(
      { error: err.message || "제품 등록을 실패했습니다." },
      { status: 500 }
    );

  }
}
