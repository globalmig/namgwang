import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  try {
    // formData() 대신 json()을 사용합니다.
    const body = await req.json();
    const { name, category, thumbnail, images } = body;

    const unitCategories = ["small", "medium", "large"];
    const targetTable = unitCategories.includes(category) ? "units" : "others";

    // DB 저장 (스토리지 업로드는 클라이언트에서 완료)
    const { error: dbError } = await supabaseServer.from("products").insert({
      name,
      category,
      thumbnail, // URL 문자열
      images,    // URL 배열
    });

    if (dbError) throw dbError;

    return NextResponse.json({ message: "제품이 성공적으로 등록되었습니다." });

  } catch (err: any) {
    console.error("API ERROR", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}