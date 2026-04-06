"use client";
import { useCreate } from "@/hooks/useCreate";
import { useUpdate } from "@/hooks/useUpdate";
import { NewsFormProps, type NewsForm } from "@/types/common";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, useCallback, useEffect, useState } from "react"

export default function UseFormHookTest({ mode, initialData }: NewsFormProps) {

    const router = useRouter();
    const { id } = useParams();

    const { create, isPending: isCreating } = useCreate("/api/news", "/admin/board/new");
    const { update, isPending: isUpdating } = useUpdate("/api/news", "/admin/board/new");
    const isLoading = isCreating || isUpdating;

    const isUpload = mode === "upload";
    const isEdit = mode === "edit";

    const [form, setForm] = useState<NewsForm>({
        title: initialData?.title ?? "",
        contents: initialData?.contents ?? "",
        img: null
    });

    useEffect(() => {
        if (initialData) {
            setForm(prev => ({
                ...prev,
                title: initialData?.title ?? "",
                contents: initialData?.contents ?? "",
            }));
        }
    }, [initialData]);

    const onChangeForm = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        if (type === "file") {
            const files = (e.target as HTMLInputElement).files;
            if (files) setForm((prev) => ({ ...prev, [name]: files[0] }));
        } else {
            setForm((prev) => ({ ...prev, [name]: value }));
        }
    }, []);

    // 취소
    const onClickCancel = () => {
        setForm({
            title: initialData?.title ?? "",
            contents: initialData?.contents ?? "",
            img: null
        });
        router.back();
    };

    // 등록&수정
    const onSubmitForm = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();

        // 유효성 검증
        if (!form.title.trim()) {
            alert("기사 제목을 입력해주세요.")
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
        formData.append("title", form.title);
        formData.append("contents", form.contents);

        if (form.img) {
            formData.append("img", form.img);
        } else if (initialData?.img) {
            formData.append("img", initialData.img);
        }

        if (isUpload) {
            await create(formData);
        } else {
            await update(String(id), formData);
        }

    }, [form, initialData, id, isUpload]);

    return (
        <form onSubmit={onSubmitForm}>
            <div>
                <label htmlFor="title">
                    <h3 className="required">기사 제목</h3>
                </label>
                <input type="text" id="title" name="title" placeholder="기사 제목을 입력해주세요." onChange={onChangeForm} value={form.title} />
            </div>
            <div>
                <label htmlFor="contents">
                    <h3 className="required">기사 내용</h3>
                </label>
                <textarea name="contents" placeholder="기사 내용을 입력해주세요." cols={20} rows={10} onChange={onChangeForm} value={form.contents} />
            </div>
            <div>
                <label htmlFor="img">
                    <h3 className="required">첨부파일</h3>
                    <p>이미지는 가로 1000px 이상의 크기, 가로형 이미지를 권장합니다.<br />이미지의 크기가 작거나 세로형 이미지를 업로드하실 경우, 화질이 낮거나 잘릴 수 있습니다.</p>
                </label>
                <input type="file" id="img" name="img" accept=".jpg,.jpeg, .png" onChange={onChangeForm} />
                <div className="fm-img-img">
                    {isEdit && initialData?.img && !form.img && (
                        <Image src={initialData.img} alt="image" width={1000} height={619} />
                    )}
                </div>
            </div>
            {(isUpload || isEdit) && (
                <div className="display-flex">
                    <button type="submit">{isLoading
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