import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    
    const name = formData.get("name") as string;
    const imgUrl = formData.get("img") as string;

    if (!name || !imgUrl) {
      return NextResponse.json({ error: "인증서명과 이미지를 등록해주세요." }, { status: 400 });
    }

    const { error: dbError } = await supabaseServer
    .from("certifications")
    .insert({
      name,
      img: imgUrl,
    });

    if (dbError) throw dbError;

    return NextResponse.json({ message: "인증서가 등록되었습니다." });
  } catch (err: any) {
    console.error("API ERROR:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}