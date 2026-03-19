"use client";
import { supabase } from "@/lib/supabase/client";
import { type ProductForm, ProductFormProps } from "@/types/product";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, useCallback, useEffect, useState } from "react"

export default function ProductForm({ mode, initialData }: ProductFormProps) {

    const router = useRouter();
    const { id, type } = useParams();
    const [submitLoading, setSubmitLoading] = useState<boolean>(false);

    const isUpload = mode === "upload";
    const isEdit = mode === "edit";

    const [form, setForm] = useState<ProductForm>({
        name: initialData?.name ?? "",
        category: initialData?.category ?? "",
        thumbnail: null,
        images: []
    });

    useEffect(() => {
        if (initialData) {
            setForm(prev => ({
                ...prev,
                name: initialData.name ?? "",
                category: initialData.category ?? "",
            }));
        }
    }, [initialData]);

    // 이미지 상태관리
    const [existingImages, setExistingImages] = useState<string[]>(initialData?.images ?? []);
    const [newImageFiles, setNewImageFiles] = useState<File[]>([]);

    // initialData가 들어올 때 기존 이미지 주소 세팅
    useEffect(() => {
        if (initialData) {
            setExistingImages(initialData.images || []);

        }
    }, [initialData]);

    const onChangeForm = useCallback((e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }, []);

    const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (!files || files.length === 0) return;

        const fileArray = Array.from(files);
        
        if (name === "thumbnail") {
            setForm(prev => ({ ...prev, thumbnail: files[0] }));
        } else if (name === "images") {
            setForm(prev => ({ ...prev, images: Array.from(files) }));
            setNewImageFiles(fileArray);
        }
    };

    // 이미지 삭제 (기존 이미지 중 삭제)
    const onRemoveExistingImage = (url: string) => {
        setExistingImages(prev => prev.filter(item => item !== url));
    };

    // 취소
    const onClickCancel = () => {
        setForm({
            name: initialData?.name ?? "",
            category: initialData?.category ?? "",
            thumbnail: null,
            images: []
        });
        router.back();
    };

    // 등록&수정
    const onSubmitForm = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (submitLoading) return;

        // 1. 유효성 검증
        if (!form.name.trim()) {
            alert("제품명을 입력해주세요.");
            return;
        }

        if (!form.category.trim()) {
            alert("카테고리를 선택해주세요.");
            return;
        }

        if (isUpload && !form.thumbnail) {
            alert("제품 대표 이미지를 등록해주세요.");
            return;
        }

        if (isEdit && !form.thumbnail && !initialData?.thumbnail) {
            alert("제품 대표 이미지를 등록해주세요.");
            return;
        }

        // 상세 이미지 유효성 검사 (새 파일 + 기존 유지 파일 합쳐서 최소 1장)
        if (form.images.length === 0 && existingImages.length === 0) {
            alert("제품 이미지는 최소 1장 이상 등록해주세요.");
            return;
        }

        try {
            setSubmitLoading(true);

            // [A] 이미지 직접 업로드 헬퍼 함수
            const uploadFile = async (file: File, bucket: string, folder: string) => {
                const ext = file.name.split(".").pop();
                const fileName = `${Date.now()}_${crypto.randomUUID()}.${ext}`;
                const path = `${folder}/${fileName}`;

                const { data, error } = await supabase.storage
                    .from(bucket)
                    .upload(path, file, {
                        upsert: true,
                        cacheControl: '3600'
                    });

                if (error) throw error;

                const { data: urlData } = supabase.storage
                    .from(bucket)
                    .getPublicUrl(path);

                return urlData.publicUrl;
            };

            // 카테고리에 따른 버킷 결정
            const unitCategories = ["small", "medium", "large"];
            const targetBucket = unitCategories.includes(form.category) ? "units" : "others";

            // [B] 대표 이미지 처리 (새 파일이 들어온 경우만 업로드)
            let finalThumbnailUrl = initialData?.thumbnail || "";
            if (form.thumbnail instanceof File) {
                finalThumbnailUrl = await uploadFile(form.thumbnail, targetBucket, "thumbnail");
            }

            // [C] 상세 이미지 업로드 (새로 선택한 파일들만)
            const newUploadedUrls = await Promise.all(
                form.images.map(file => uploadFile(file, targetBucket, "images"))
            );

            // 최종 이미지 배열 (기존 유지 이미지 + 새로 업로드된 이미지 URL)
            const finalImagesUrls = [...existingImages, ...newUploadedUrls];

            // [D] 서버 API 전송 (파일 데이터 없이 URL 정보만 JSON으로 전송)
            const payload = {
                name: form.name,
                category: form.category,
                thumbnail: finalThumbnailUrl,
                images: finalImagesUrls,
                // 수정 시 스토리지 청소를 위해 기존 데이터 정보 포함
                oldThumbnail: initialData?.thumbnail || "",
                oldImages: initialData?.images || []
            };

            const res = await fetch(isUpload ? "/api/product" : `/api/product/${type}/${id}`, {
                method: isUpload ? "POST" : "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload),
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.error || "제품 등록을 실패했습니다.");
            }

            alert(result.message || "처리가 완료되었습니다.");
            router.push("/admin");
            router.refresh();

        } catch (err: any) {
            console.error("전송 에러:", err);
            alert(err.message || "오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
        } finally {
            setSubmitLoading(false);
        }

    }, [form, existingImages, initialData, id, type, isUpload, router, supabase, submitLoading]);

    return (
        <form onSubmit={onSubmitForm} className="product-form">
            <div className="fm-name">
                <label htmlFor="name">
                    <h3 className="required">제품명</h3>
                </label>
                <input type="text" id="name" name="name" placeholder="제품명을 입력해주세요." onChange={onChangeForm} value={form.name} />
            </div>
            <div className="fm-category">
                <label htmlFor="category">
                    <h3 className="required">카테고리</h3>
                </label>
                <select id="category" name="category" onChange={onChangeForm} value={form.category}>
                    <option value="">카테고리를 선택해주세요</option>
                    <option value="small">유압 유니트 - 소형</option>
                    <option value="medium">유압 유니트 - 중형</option>
                    <option value="large">유압 유니트 - 대형</option>
                    <option value="extra">유압 유니트 - 특수형</option>
                    <option value="other">기타 유압 기기</option>
                </select>
            </div>
            <div className="fm-thumbnail">
                <label htmlFor="thumbnail">
                    <h3 className="required">대표 이미지</h3>
                    <p>이미지는 가로 1000px 이상의 크기, 가로형 이미지를 권장합니다.<br />이미지의 크기가 작거나 세로형 이미지를 업로드하실 경우, 화질이 낮거나 잘릴 수 있습니다.</p>
                </label>
                <input type="file" id="thumbnail" name="thumbnail" accept=".jpg,.jpeg, .png" onChange={onChangeFile} />
                <div className="fm-thumbnail-img">
                    {isEdit && initialData?.thumbnail && !form.thumbnail && (
                        <Image src={initialData.thumbnail} alt="image" width={1000} height={619} />
                    )}
                </div>
            </div>
            <div className="fm-images">
                <label htmlFor="images">
                    <h3 className="required">상세 이미지</h3>
                    <p>이미지는 가로 1000px 이상의 크기, 가로형 이미지를 권장합니다.<br />이미지의 크기가 작거나 세로형 이미지를 업로드하실 경우, 화질이 낮거나 잘릴 수 있습니다.</p>
                </label>
                <input
                    type="file"
                    id="images"
                    name="images"
                    accept=".jpg,.jpeg,.png"
                    multiple
                    onChange={onChangeFile}
                />
                <div className="display-flex-flow">
                    {existingImages.map((url, idx) => (
                        <div key={idx} style={{ position: 'relative' }}>
                            <Image src={url} alt="image" width={1000} height={619} />
                            {
                                <button type="button" onClick={() => onRemoveExistingImage(url)}>
                                    삭제
                                </button>
                            }
                        </div>
                    ))}
                </div>
                <div className="fm-detail-add">
                    <h5>추가 이미지</h5>
                    <div className="display-flex-flow">
                        {newImageFiles.map((file, idx) => (
                            <div key={`new-${idx}`}>
                                <Image
                                    src={URL.createObjectURL(file)}
                                    alt="새 이미지"
                                    width={1000} height={619}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            {(isUpload || isEdit) && (
                <div className="display-flex">
                    <button type="submit">{submitLoading
                        ? "등록중..."
                        : isUpload
                            ? "등록"
                            : "수정"}</button>
                    <button type="button" onClick={onClickCancel}>취소</button>
                </div>
            )}
        </form>
    )
}