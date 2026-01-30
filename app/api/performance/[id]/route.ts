import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const { data, error } = await supabaseServer
    .from("performances")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (!data) {
    return NextResponse.json({ error: "실적 없음" }, { status: 404 });
  }

  return NextResponse.json(data);
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const formData = await req.formData();
    const { id } = await params;

    // [기존 데이터 조회] 삭제된 파일 찾기
    const { data: currentPerformance } = await supabaseServer
      .from("performances")
      .select("img")
      .eq("id", id)
      .single();

    // 1. 이미지 처리
    let imgUrl = formData.get("img"); // 클라이언트가 보낸 값 (파일 혹은 기존 URL)
    const imgFile = formData.get("img") as File | null;

    // [추가] 새 파일 추가한 경우, 기존 이미지는 스토리지에서 삭제
    if (imgFile instanceof File && imgFile.size > 0) {

      // A. 기존 이미지 URL: 스토리지에서 삭제
      // currentPerformance: 이전의 select("img")로 가져온 기존 DB
      const oldimgUrl = currentPerformance?.img;
      if (oldimgUrl) {
        // URL에서 스토리지 경로(path) 추출 (예: performances/images/...)
        const oldPath = oldimgUrl.split("/public/performances/")[1];
        if (oldPath) {
          await supabaseServer.storage.from("performances").remove([oldPath]);
        }
      }

      // B. 새 이미지 파일 업로드
      const buffer = await imgFile.arrayBuffer();
      const ext = imgFile.name.split(".").pop();
      const newPath = `performances/images/${Date.now()}_${crypto.randomUUID()}.${ext}`;

      const { error: uploadError } = await supabaseServer.storage
        .from("performances")
        .upload(newPath, buffer, {
          contentType: imgFile.type,
          upsert: true
        });

      if (uploadError) {
        console.error("이미지 업로드 에러:", uploadError);
        throw new Error("이미지 업로드를 실패했습니다.");
      }

      // C. 새 URL 발급
      const { data: urlData } = supabaseServer.storage
        .from("performances")
        .getPublicUrl(newPath);

      imgUrl = urlData.publicUrl;
    }

    // 3. DB 업데이트
    const { error: dbError } = await supabaseServer
      .from("performances")
      .update({
        name: formData.get("name"),
        spec: formData.get("spec"),
        img: imgUrl,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (dbError) throw dbError;
 
    return NextResponse.json({ message: "실적이 수정되었습니다." });
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

    // 해당 상품의 이미지 URL 정보 조회
    const { data: performance, error: fetchError } = await supabaseServer
      .from("performances")
      .select("img")
      .eq("id", id)
      .single();

    if (fetchError || !performance) {
      return NextResponse.json({ error: "삭제할 실적을 찾을 수 없습니다." }, { status: 404 });
    }

    // 삭제할 파일 경로 리스트 생성
    const pathsToDelete: string[] = [];

    // 이미지 경로 추출
    if (performance.img) {
      const imgPath = performance.img.split("/public/performances/")[1];
      if (imgPath) pathsToDelete.push(imgPath);
    }

    // 스토리지에서 파일 삭제 (파일이 있을 때만 실행)
    if (pathsToDelete.length > 0) {
      const { error: storageError } = await supabaseServer.storage
        .from("performances")
        .remove(pathsToDelete);

      if (storageError) {
        console.error("storage file delete error:", storageError.message);
      }
    }

    // 4. DB 삭제
    const { error: dbError } = await supabaseServer
      .from("performances")
      .delete()
      .eq("id", id);

    if (dbError) throw dbError;

    return NextResponse.json({ message: "실적이 삭제되었습니다." });

  } catch (err: any) {
    console.error("DELETE ERROR:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}