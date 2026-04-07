import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const title = formData.get("title") as string;
    const contents = formData.get("contents") as string;
    const imgUrl = formData.get("img") as string;

    // 데이터 검증
    if (!title || !contents || !imgUrl) {
      return NextResponse.json(
        { error: "기사 제목, 내용, 이미지를 모두 입력해주세요." },
        { status: 400 }
      );
    }

    /* ---------- DB 저장 ---------- */
    const { error: dbError } = await supabaseServer
      .from("news") 
      .insert({
        title,
        contents,
        img: imgUrl, // URL 문자열 그대로 저장
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