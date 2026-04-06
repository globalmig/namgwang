import { useRouter } from "next/navigation";
import { useState } from "react";

export function useUpdate(apiUrl: string, redirectUrl: string) {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const update = async (id: string | string[], formData: FormData) => {
    if (isPending) return;
    try {
      setIsPending(true);
      const res = await fetch(`${apiUrl}/${id}`, {
        method: "PATCH",
        body: formData,
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "수정에 실패했습니다.");

      alert("수정되었습니다.");
      router.push(redirectUrl);
      router.refresh();
    } catch (err: any) {
      alert(err.message);
    } finally {
      setIsPending(false);
    }
  };

  return { update, isPending };
}