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
  { params }: { params: Promise<{ id: string; category: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { 
      name, 
      category, 
      thumbnail,      // 새 대표 이미지 URL (또는 유지된 기존 URL)
      images,         // 새 상세 이미지 URL 배열 (기존 유지분 포함)
      oldThumbnail,   // 수정 전 DB에 있던 기존 대표 이미지 URL
      oldImages       // 수정 전 DB에 있던 기존 상세 이미지 URL 배열
    } = body;

    const tableName = "products";
    const bucketName = "products"; // 단일 버킷 사용

    // [헬퍼 함수] URL에서 스토리지 내부 경로(path) 추출
    const extractPath = (url: string) => {
      if (!url || typeof url !== 'string') return null;
      const identifier = `/public/${bucketName}/`;
      const parts = url.split(identifier);
      return parts.length >= 2 ? parts[1] : null;
    };

    // --- 1. 대표 이미지 청소 (Cleanup) ---
    // 기존 이미지가 있고, 새 이미지 URL과 다르다면 기존 파일 삭제
    if (oldThumbnail && oldThumbnail !== thumbnail) {
      const oldPath = extractPath(oldThumbnail);
      if (oldPath) {
        await supabaseServer.storage.from(bucketName).remove([oldPath]);
      }
    }

    // --- 2. 상세 이미지 청소 (Cleanup) ---
    // 기존 이미지 배열(oldImages) 중 새 이미지 배열(images)에 포함되지 않은 것들만 삭제
    if (oldImages && Array.isArray(oldImages)) {
      const imagesToDelete = oldImages.filter((oldUrl: string) => !images.includes(oldUrl));
      
      const pathsToDelete = imagesToDelete
        .map((url: string) => extractPath(url))
        .filter((p: string | null): p is string => p !== null);

      if (pathsToDelete.length > 0) {
        await supabaseServer.storage.from(bucketName).remove(pathsToDelete);
      }
    }

    // --- 3. DB 업데이트 ---
    const { data: updatedData, error: dbError } = await supabaseServer
      .from(tableName)
      .update({
        name,
        category,
        thumbnail,
        images,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single();

    if (dbError) throw dbError;

    return NextResponse.json({ message: "제품 정보가 수정되었습니다." });

  } catch (err: any) {
    console.error("PATCH ERROR:", err);
    return NextResponse.json({ error: err.message || "수정 중 오류 발생" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string; category: string }> }
) {
  try {
    const { id } = await params;

    const tableName = "products";
    const bucketName = "products";

    // 삭제 전 DB에서 이미지 URL들 미리 확보
    const { data: product, error: fetchError } = await supabaseServer
      .from(tableName)
      .select("thumbnail, images")
      .eq("id", id)
      .single();

    if (fetchError || !product) {
      return NextResponse.json({ error: "삭제할 제품 정보를 찾을 수 없습니다." }, { status: 404 });
    }

    // 3. 삭제할 파일 경로(Path) 추출 로직 개선
    const pathsToDelete: string[] = [];

    const extractPath = (url: string) => {
      if (!url) return null;
      try {
        const parts = url.split(`/public/${bucketName}/`);
        if (parts.length < 2) return null;
        return parts[1];
      } catch (e) {
        return null;
      }
    };

    // 대표 이미지 경로 추가
    const thumbPath = extractPath(product.thumbnail);
    if (thumbPath) pathsToDelete.push(thumbPath);

    // 상세 이미지 경로들 추가
    if (product.images && Array.isArray(product.images)) {
      product.images.forEach((url: string) => {
        const p = extractPath(url);
        if (p) pathsToDelete.push(p);
      });
    }

    // 4. 스토리지 파일 먼저 삭제
    if (pathsToDelete.length > 0) {
      // remove 함수는 배열을 받으므로 한 번에 처리 가능합니다.
      const { error: storageError } = await supabaseServer.storage
        .from(bucketName)
        .remove(pathsToDelete);

      if (storageError) {
        console.error("스토리지 파일 삭제 실패:", storageError.message);
        // 파일 삭제 실패해도 DB 삭제는 진행하도록 error를 throw하지 않음
      }
    }

    // 5. 마지막으로 DB 레코드 삭제
    const { error: dbError } = await supabaseServer
      .from(tableName)
      .delete()
      .eq("id", id);

    if (dbError) throw dbError;

    return NextResponse.json({ message: "제품 정보가 삭제되었습니다." });

  } catch (err: any) {
    console.error("DELETE ERROR:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}