"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, useCallback, useEffect, useState } from "react"

type ProductFormMode = "upload" | "edit";

interface InitialDataProps { // 등록된 데이터
    id: string;
    name: string;
    category: string;
    thumnail: string;
    images: string[];
}

interface ProductForm {
    name: string, // 제품명
    category: string, // 카테고리
    thumnail: File | null, // 대표이미지
    images: File[], // 제품 이미지
}

interface ProductFormProps {
    mode: ProductFormMode; // upload OR edit
    initialData?: InitialDataProps; // edit data (등록된 데이터)
}

export default function ProductForm({ mode, initialData }: ProductFormProps) {

    const router = useRouter();
    const { id } = useParams();

    const isUpload = mode === "upload";
    const isEdit = mode === "edit";

    const [form, setForm] = useState<ProductForm>({
        name: initialData?.name ?? "",
        category: initialData?.category ?? "",
        thumnail: null,
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

    // 이미지 삭제 (기존 이미지 중 삭제)
    const onRemoveExistingImage = (url: string) => {
        setExistingImages(prev => prev.filter(item => item !== url));
    };

    const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (!files) return;
        if (name === "thumnail") {
            setForm(prev => ({ ...prev, thumnail: files[0] }));
        }
        if (name === "images") {
            setForm(prev => ({ ...prev, images: Array.from(files) }));
        }
    };

    const onChangeForm = useCallback((e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (type === "file") {
            const fileInput = e.target as HTMLInputElement;
            const file = fileInput.files?.[0] ?? null;
            setForm(prev => ({ ...prev, file }));
            return;
        }
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }, []);

    // 취소
    const onClickCancel = () => {
        setForm({
            name: initialData?.name ?? "",
            category: initialData?.category ?? "",
            thumnail: null,
            images: []
        });
        router.back();
    };

    // 등록&수정
    const onSubmitForm = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();

        // 유효성 검증
        if (!form.name.trim()) {
            alert("제품명을 입력해주세요.")
            return;
        }

        if (!form.category.trim()) {
            alert("카테고리를 선택해주세요.")
            return;
        }

        if (isUpload && !form.thumnail) {
            alert("제품 대표 이미지를 등록해주세요.");
            return;
        }

        if (isEdit && !form.thumnail && !initialData?.thumnail) {
            alert("제품 대표 이미지를 등록해주세요.");
            return;
        }

        if (form.thumnail) {
            const ext = form.thumnail.name.split('.').pop()?.toLowerCase() ?? "";
            const allowedExtensions = ["jpg", "jpeg", "png"];

            if (!allowedExtensions.includes(ext)) {
                alert("이미지는 JPG, JPEG, PNG 파일만 업로드 가능합니다.");
                return;
            }
        }

        // 상세 이미지 유효성 검사
        // newImageFiles: 새로 input으로 넣은 파일 배열 / existingImages: 화면에 표시되고 있는 기존 URL 배열
        if (newImageFiles.length === 0 && existingImages.length === 0) {
            alert("제품 이미지는 최소 1장 이상 등록해주세요.");
            return;
        }

        for (const file of form.images) {
            const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
            const allowedExtensions = ["jpg", "jpeg", "png"];
            if (!allowedExtensions.includes(ext)) {
                alert("이미지는 JPG, JPEG, PNG 파일만 업로드 가능합니다.");
                return;
            }
        }

        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("category", form.category);

        if (form.thumnail) {
            // 사용자가 파일을 새로 선택한 경우
            formData.append("thumnail", form.thumnail);
        } else if (initialData?.thumnail) {
            // 파일을 선택하지 않았지만 기존 데이터가 있는 경우 (수정 시 유지)
            formData.append("thumnail", initialData.thumnail);
        }

        // 상세 이미지 처리
        formData.append("existingImages", JSON.stringify(existingImages));
        // 새로 추가할 파일들 전송
        newImageFiles.forEach((file) => {
            formData.append("images", file);
        });

        try {
            const res = await fetch(isUpload ? "/api/product" : `/api/product/${id}`, {
                method: isUpload ? "POST" : "PATCH",
                body: formData,
            });

            const result = await res.json();

            if (!res.ok) {
                alert(result.error || "제품 등록에 실패했습니다. 다시 시도해주세요.");
                return;
            }

            alert(result.message);
            router.push("/admin");
            router.refresh();

        } catch (err: any) {
            alert(err.message);
        }

    }, [form, existingImages, newImageFiles, initialData, id, isUpload, router]);

    // 삭제
    const onProductDelete = async () => {
        if (!initialData) return;
        if (!confirm("제품을 삭제하시겠습니까?")) return;
        try {
            const res = await fetch(`/api/product/${initialData.id}`, { method: "DELETE" });
            const result = await res.json();
            if (!res.ok) throw new Error(result.error || "제품 삭제를 실패했습니다. 다시 시도해주세요.");

            alert(result.message);
            router.push("/admin");
            router.refresh();
        } catch (err: any) {
            alert(err.message);
        }
    };

    const goEdit = (id: string) => {
        router.push(`/admin/write/product/${id}/edit`);
    };

    return (
            <form onSubmit={onSubmitForm}>
                <div className="fm-name">
                    <label htmlFor="name">
                        <h3>제품명</h3>
                    </label>
                    <input type="text" id="name" name="name" placeholder="제품명을 입력해주세요." onChange={onChangeForm} value={form.name}/>
                </div>
                <div className="fm-category">
                    <label htmlFor="category">
                        <h3>카테고리</h3>
                    </label>
                    <select id="category" name="category" onChange={onChangeForm} value={form.category}>
                        <option value="">카테고리를 선택해주세요</option>
                        <option value="small">소형 유니트</option>
                        <option value="medium">중형 유니트</option>
                        <option value="large">대형 유니트</option>
                        <option value="extra">특수형 유니트</option>
                        <option value="other">기타 기기</option>
                    </select>
                </div>
                <div className="fm-thumnail">
                    <label htmlFor="thumnail">
                        <h3>대표 이미지</h3>
                        <p>이미지는 가로 1000px 이상의 크기, 가로형 이미지를 권장합니다.<br />이미지의 크기가 작거나 세로형 이미지를 업로드하실 경우, 화질이 낮거나 잘릴 수 있습니다.</p>
                    </label>
                    <input type="file" id="thumnail" name="thumnail" accept=".jpg,.jpeg, .png" onChange={onChangeFile} />
                    <div className="fm-thumnail-img">
                        {isEdit && initialData?.thumnail && !form.thumnail && (
                            <Image src={initialData.thumnail} alt="image" width={1000} height={619} />
                        )}
                    </div>
                </div>
                <div className="fm-images">
                    <label htmlFor="images">
                        <h3>상세 이미지</h3>
                        <p>이미지는 가로 1000px 이상의 크기, 가로형 이미지를 권장합니다.<br />이미지의 크기가 작거나 세로형 이미지를 업로드하실 경우, 화질이 낮거나 잘릴 수 있습니다.</p>
                    </label>

                    <input
                        type="file"
                        id="images"
                        name="images"
                        accept=".jpg,.jpeg,.png"
                        multiple
                        onChange={(e) => setNewImageFiles(Array.from(e.target.files || []))}
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
                    {isEdit &&
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
                    }
                </div>
                {(isUpload || isEdit) && (
                    <div className="display-flex">
                        <button type="submit">{isUpload ? "등록" : "수정"}</button>
                        <button type="button" onClick={onClickCancel}>취소</button>
                    </div>
                )}
            </form>
    )
}