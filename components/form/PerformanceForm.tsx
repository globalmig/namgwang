"use client";
import { type PerformanceForm, PerformanceFormProps } from "@/types/performance";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, useCallback, useEffect, useState } from "react"

export default function PerformanceForm({ mode, initialData }: PerformanceFormProps) {

    const router = useRouter();
    const { id } = useParams();

    const isUpload = mode === "upload";
    const isEdit = mode === "edit";

    const [form, setForm] = useState<PerformanceForm>({
        name: initialData?.name ?? "",
        spec: initialData?.spec ?? "",
        img: null
    });

    useEffect(() => {
        if (initialData) {
            setForm(prev => ({
                ...prev,
                name: initialData.name ?? "",
                spec: initialData.spec ?? "",
            }));
        }
    }, [initialData]);

    const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (!files) return;
        if (name === "img") {
            setForm(prev => ({ ...prev, img: files[0] }));
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
            spec: initialData?.spec ?? "",
            img: null,
        });
        router.back();
    };

    // 등록&수정
    const onSubmitForm = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();

        // 유효성 검증
        if (!form.name.trim()) {
            alert("프로젝트명을 입력해주세요.")
            return;
        }

        if (!form.spec.trim()) {
            alert("SPEC을 입력해주세요.")
            return;
        }

        if (isUpload && !form.img) {
            alert("이미지를 등록해주세요.");
            return;
        }

        if (isEdit && !form.img && !initialData?.img) {
            alert("이미지를 등록해주세요.");
            return;
        }

        if (form.img) {
            const ext = form.img.name.split('.').pop()?.toLowerCase() ?? "";
            const allowedExtensions = ["jpg", "jpeg", "png"];

            if (!allowedExtensions.includes(ext)) {
                alert("이미지는 JPG, JPEG, PNG 파일만 업로드 가능합니다.");
                return;
            }
        }

        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("spec", form.spec);

        if (form.img) {
            // 사용자가 파일을 새로 선택한 경우
            formData.append("img", form.img);
        } else if (initialData?.img) {
            // 파일을 선택하지 않았지만 기존 데이터가 있는 경우 (수정 시 유지)
            formData.append("img", initialData.img);
        }

        try {
            const res = await fetch(isUpload ? "/api/performance" : `/api/performance/${id}`, {
                method: isUpload ? "POST" : "PATCH",
                body: formData,
            });

            const result = await res.json();

            if (!res.ok) {
                alert(result.error || "실적 등록에 실패했습니다. 다시 시도해주세요.");
                return;
            }

            alert(result.message);
            router.push("/admin");
            router.refresh();

        } catch (err: any) {
            alert(err.message);
        }

    }, [form, initialData, id, isUpload, router]);

    return (
        <form onSubmit={onSubmitForm}>
            <div>
                <label htmlFor="name">
                    <h3 className="required">프로젝트명</h3>
                </label>
                <input type="text" id="name" name="name" placeholder="프로젝트명을 입력해주세요." onChange={onChangeForm} value={form.name} />
            </div>
            <div>
                <label htmlFor="spec">
                    <h3 className="required">SPEC</h3>
                </label>
                <input type="text" id="spec" name="spec" placeholder="SPEC을 입력해주세요." onChange={onChangeForm} value={form.spec} />
            </div>
            <div>
                <label htmlFor="img">
                    <h3 className="required">첨부파일</h3>
                    <p>이미지는 가로 1000px 이상의 크기, 가로형 이미지를 권장합니다.<br />이미지의 크기가 작거나 세로형 이미지를 업로드하실 경우, 화질이 낮거나 잘릴 수 있습니다.</p>
                </label>
                <input type="file" id="img" name="img" accept=".jpg,.jpeg, .png" onChange={onChangeFile} />
                <div className="fm-img-img">
                    {isEdit && initialData?.img && !form.img && (
                        <Image src={initialData.img} alt="image" width={1000} height={619} />
                    )}
                </div>
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