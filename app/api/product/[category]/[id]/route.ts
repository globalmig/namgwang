import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string; category: string }> }
) {
  try {
    const { id, category } = await params;

    // 1. 테이블 이름 결정 로직 수정
    // unit과 other는 통합 테이블인 'products'를 사용합니다.
    let tableName = "";
    if (category === "unit" || category === "other") {
        tableName = "products";
    } else {
        tableName = `${category}s`; // cylinder -> cylinders 등 기존 규칙
    }

    const { data: currentData, error: currentError } = await supabaseServer
      .from(tableName)
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (currentError) throw currentError;
    
    // 데이터가 없는 경우를 대비한 방어 코드
    if (!currentData) {
      return NextResponse.json({ error: "제품을 찾을 수 없습니다." }, { status: 404 });
    }

    const productCategory = currentData.category;

    // 2. 이전/다음 데이터 가져오기 (결정된 tableName 사용)
    const { data: prevData } = await supabaseServer
      .from(tableName)
      .select("id, name")
      .lt("created_at", currentData.created_at)
      .eq("category", productCategory)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    const { data: nextData } = await supabaseServer
      .from(tableName)
      .select("id, name")
      .gt("created_at", currentData.created_at)
      .eq("category", productCategory)
      .order("created_at", { ascending: true })
      .limit(1)
      .maybeSingle();

    return NextResponse.json({
      currentData,
      prev: prevData || null,
      next: nextData || null,
    });

  } catch (err: any) {
    console.error("API Route Error:", err.message); // 서버 터미널에서 확인용
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string; category: string }> } // type은 units/others 구분용
) {
  try {
    const { id, category: urlCategory } = await params;
    const body = await req.json(); // formData() 대신 json() 사용
    const { name, category, thumbnail, images, oldImages, oldThumbnail } = body;

    const editTable = "products"; // 테이블명이 products 하나라면 고정, 아니라면 map 함수 사용
    const bucketName = urlCategory; // URL 파라미터에서 넘어온 버킷명 (units 또는 others)

    // [파일 정리 1] 썸네일이 변경되었다면 기존 파일 삭제
    if (oldThumbnail && oldThumbnail !== thumbnail) {
      const oldPath = oldThumbnail.split(`/public/${bucketName}/`)[1];
      if (oldPath) await supabaseServer.storage.from(bucketName).remove([oldPath]);
    }

    // [파일 정리 2] 상세 이미지 중 삭제된 것들 스토리지에서 제거
    const toDelete = oldImages.filter((url: string) => !images.includes(url));
    for (const url of toDelete) {
      const path = url.split(`/public/${bucketName}/`)[1];
      if (path) await supabaseServer.storage.from(bucketName).remove([path]);
    }

    // [DB 업데이트]
    const { data: updatedData, error: dbError } = await supabaseServer
      .from(editTable)
      .update({
        name,
        category,
        thumbnail, // 이미 업로드 완료된 URL
        images,    // 이미 업로드 완료된 URL 배열
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single();

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

    // 1. DB 테이블명 및 스토리지 버킷명 결정
    // category가 'unit'이면 'units', 'other'이면 'others'
    const tableName = "products"; // 통합 테이블 사용 시
    const bucketName = category.endsWith('s') ? category : `${category}s`;

    // 해당 상품 정보 조회
    const { data: product, error: fetchError } = await supabaseServer
      .from(tableName)
      .select("thumbnail, images")
      .eq("id", id)
      .maybeSingle();

    if (fetchError || !product) {
      return NextResponse.json({ error: "삭제할 제품을 찾을 수 없습니다." }, { status: 404 });
    }

    // 2. 삭제할 파일 경로 리스트 생성
    const pathsToDelete: string[] = [];

    /**
     * URL에서 스토리지 내부 경로(Path)만 안전하게 추출하는 함수
     * 예: .../storage/v1/object/public/units/thumbnail/123.jpg -> thumbnail/123.jpg
     */
    const extractPath = (url: string) => {
      if (!url || typeof url !== 'string') return null;
      // 버킷명 다음의 경로만 가져오기 위함
      const identifier = `/public/${bucketName}/`;
      if (!url.includes(identifier)) return null;
      return url.split(identifier)[1];
    };

    // 대표 이미지 경로 추가
    if (product.thumbnail) {
      const thumbPath = extractPath(product.thumbnail);
      if (thumbPath) pathsToDelete.push(thumbPath);
    }

    // 상세 이미지 경로들 추가
    if (product.images && Array.isArray(product.images)) {
      product.images.forEach((url: string) => {
        const detailPath = extractPath(url);
        if (detailPath) pathsToDelete.push(detailPath);
      });
    }

    // 3. 스토리지에서 파일 먼저 삭제
    if (pathsToDelete.length > 0) {
      const { error: storageError } = await supabaseServer.storage
        .from(bucketName)
        .remove(pathsToDelete);

      if (storageError) {
        // 파일 삭제 실패가 전체 프로세스를 중단시키지 않도록 로깅만 함
        console.error(`Storage delete error (${bucketName}):`, storageError.message);
      }
    }

    // 4. DB에서 데이터 삭제 (참조 무결성을 위해 파일 삭제 후 수행)
    const { error: dbError } = await supabaseServer
      .from(tableName)
      .delete()
      .eq("id", id);

    if (dbError) throw dbError;

    return NextResponse.json({ message: "제품과 관련 파일이 성공적으로 삭제되었습니다." });

  } catch (err: any) {
    console.error("DELETE ERROR:", err);
    return NextResponse.json({ error: err.message || "삭제 중 오류가 발생했습니다." }, { status: 500 });
  }
}