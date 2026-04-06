import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
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
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const formData = await req.formData();
    const { id } = await params;

    const { data: currentcertification } = await supabaseServer
      .from("certifications")
      .select("img")
      .eq("id", id)
      .single();

    let imgUrl = formData.get("img");
    const imgFile = formData.get("img") as File | null;

    if (imgFile instanceof File && imgFile.size > 0) {

      const oldimgUrl = currentcertification?.img;
      if (oldimgUrl) {
        const oldPath = oldimgUrl.split("/public/certifications/")[1];
        if (oldPath) {
          await supabaseServer.storage.from("certifications").remove([oldPath]);
        }
      }

      const buffer = await imgFile.arrayBuffer();
      const ext = imgFile.name.split(".").pop();
      const newPath = `certifications/images/${Date.now()}_${crypto.randomUUID()}.${ext}`;

      const { error: uploadError } = await supabaseServer.storage
        .from("certifications")
        .upload(newPath, buffer, {
          contentType: imgFile.type,
          upsert: true
        });

      if (uploadError) {
        console.error("이미지 업로드 에러:", uploadError);
        throw new Error("이미지 업로드를 실패했습니다.");
      }

      const { data: urlData } = supabaseServer.storage
        .from("certifications")
        .getPublicUrl(newPath);

      imgUrl = urlData.publicUrl;
    }

    const { error: dbError } = await supabaseServer
      .from("certifications")
      .update({
        name: formData.get("name"),
        img: imgUrl,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (dbError) throw dbError;
 
    return NextResponse.json({ message: "인증서이 수정되었습니다." });
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

    const { data: certification, error: fetchError } = await supabaseServer
      .from("certifications")
      .select("img")
      .eq("id", id)
      .single();

    if (fetchError || !certification) {
      return NextResponse.json({ error: "삭제할 인증서를 찾을 수 없습니다." }, { status: 404 });
    }

    const pathsToDelete: string[] = [];

    if (certification.img) {
      const imgPath = certification.img.split("/public/certifications/")[1];
      if (imgPath) pathsToDelete.push(imgPath);
    }

    if (pathsToDelete.length > 0) {
      const { error: storageError } = await supabaseServer.storage
        .from("certifications")
        .remove(pathsToDelete);

      if (storageError) {
        console.error("storage file delete error:", storageError.message);
      }
    }

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