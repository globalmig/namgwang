import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ category: string; id: string }> }
) {
  try {
    const { category, id } = await params; 

    const tableName = `${category}s`;

    const { data, error } = await supabaseServer
      .from(tableName)
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error) throw error;
    if (!data) return NextResponse.json({ error: "제품 없음" }, { status: 404 });

    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

const isUnit = (cat: string) => ["small", "medium", "large", "extra", "unit"].includes(cat);

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string, category: string }> }
) {
  try {
    const { id, category: oldCategory } = await params;
    const formData = await req.formData();
    const newCategory = formData.get("category") as string;

    const oldTable = isUnit(oldCategory) ? "units" : "others";
    const newTable = isUnit(newCategory) ? "units" : "others";

    // [기존 데이터 조회] 삭제된 파일 찾기
    const { data: currentProduct } = await supabaseServer
      .from(oldTable)
      .select("images, thumbnail")
      .eq("id", id)
      .single();
    const oldImagesUrls: string[] = currentProduct?.images || [];

    // 1. 썸네일 처리
    let thumbnailUrl = formData.get("thumbnail"); // 클라이언트가 보낸 값 (파일 혹은 기존 URL)
    const thumbnailFile = formData.get("thumbnail") as File | null;

    // [추가] 새 파일 추가한 경우, 기존 썸네일은 스토리지에서 삭제
    if (thumbnailFile instanceof File && thumbnailFile.size > 0) {

      // A. 기존 썸네일 URL: 스토리지에서 삭제
      // currentProduct: 이전의 select("thumbnail")로 가져온 기존 DB
      const oldThumbnailUrl = currentProduct?.thumbnail;
      if (oldThumbnailUrl) {
        // URL에서 스토리지 경로(path) 추출 (예: products/thumbnail/...)
        const oldPath = oldThumbnailUrl.split("/public/products/")[1];
        if (oldPath) {
          await supabaseServer.storage.from(oldTable).remove([oldPath]);
        }
      }

      // B. 새 썸네일 파일 업로드
      const buffer = await thumbnailFile.arrayBuffer();
      const ext = thumbnailFile.name.split(".").pop();
      const newPath = `products/thumbnail/${Date.now()}_${crypto.randomUUID()}.${ext}`;

      const { error: uploadError } = await supabaseServer.storage
        .from(newTable)
        .upload(newPath, buffer, {
          contentType: thumbnailFile.type,
          upsert: true
        });

      if (uploadError) {
        console.error("대표 이미지 업로드 에러:", uploadError);
        throw new Error("대표 이미지 업로드를 실패했습니다.");
      }

      // C. 새 URL 발급
      const { data: urlData } = supabaseServer.storage
        .from(newTable)
        .getPublicUrl(newPath);

      thumbnailUrl = urlData.publicUrl;
    }

    // 2. 상세 이미지 처리
    const existingImages: string[] = JSON.parse(formData.get("existingImages") as string || "[]");

    // [삭제] 기존에 있었지만 existingImages에 없는 파일은 스토리지에서 삭제
    const toDelete = oldImagesUrls.filter(url => !existingImages.includes(url));
    for (const url of toDelete) {
      const path = url.split("/public/products/")[1];
      if (path) await supabaseServer.storage.from(oldTable).remove([path]);
    }

    // [추가] 새로 넘어온 파일들 업로드
    const imageFiles = formData.getAll("images").filter(f => f instanceof File) as File[];
    const newUrls: string[] = [];

    for (const file of imageFiles) {
      const path = `products/images/${Date.now()}_${crypto.randomUUID()}`;
      const { error: err } = await supabaseServer.storage
        .from(newTable)
        .upload(path, await file.arrayBuffer(), { contentType: file.type });

      if (!err) {
        newUrls.push(supabaseServer.storage.from(newTable).getPublicUrl(path).data.publicUrl);
      } else {
        console.error("파일 업로드 오류:", err.message);
      }
    }

    const finalImages = [...existingImages, ...newUrls];

    // 3. DB 업데이트
    const { error: dbError } = await supabaseServer
      .from(newTable)
      .update({
        name: formData.get("name"),
        category: formData.get("category"),
        thumbnail: thumbnailUrl,
        images: finalImages,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (dbError) throw dbError;

    return NextResponse.json({ message: "제품이 수정되었습니다." });
  } catch (err: any) {
    console.error("PATCH ERROR:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string, category: string }> }
) {
  try {
    const { id, category } = await params;
    const table = category === "unit" ? "units" : "others";

    // 해당 상품의 이미지 URL 정보 조회
    const { data: product, error: fetchError } = await supabaseServer
      .from(table)
      .select("thumbnail, images")
      .eq("id", id)
      .single();

    if (fetchError || !product) {
      return NextResponse.json({ error: "삭제할 제품을 찾을 수 없습니다." }, { status: 404 });
    }

    // 삭제할 파일 경로 리스트 생성
    const pathsToDelete: string[] = [];

    // 썸네일 경로 추출
    if (product.thumbnail) {
      const thumbPath = product.thumbnail.split("/public/products/")[1];
      if (thumbPath) pathsToDelete.push(thumbPath);
    }

    // 상세 이미지 경로 추출
    if (product.images && Array.isArray(product.images)) {
      product.images.forEach((url: string) => {
        const detailPath = url.split("/public/products/")[1];
        if (detailPath) pathsToDelete.push(detailPath);
      });
    }

    // 3. 스토리지에서 파일 삭제 (파일이 있을 때만 실행)
    if (pathsToDelete.length > 0) {
      const { error: storageError } = await supabaseServer.storage
        .from(table)
        .remove(pathsToDelete);

      if (storageError) {
        console.error("storage file delete error:", storageError.message);
      }
    }

    // 4. DB 삭제
    const { error: dbError } = await supabaseServer
      .from(table)
      .delete()
      .eq("id", id);

    if (dbError) throw dbError;

    return NextResponse.json({ message: "제품이 삭제되었습니다." });

  } catch (err: any) {
    console.error("DELETE ERROR:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}