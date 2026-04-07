import { useState } from "react";
import { useRouter } from "next/navigation";

export function useCreate(apiUrl: string, redirectUrl: string) {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false); // 진행중 여부

  const create = async (formData: FormData) => {
    if (isPending) return;
    try {
      setIsPending(true);
      const res = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "등록에 실패했습니다.");

      alert("등록되었습니다.");
      router.push(redirectUrl);
      router.refresh();
    } catch (err: any) {
      alert(err.message);
    } finally {
      setIsPending(false);
    }
  };

  return { create, isPending };
}