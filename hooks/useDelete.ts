import { useRouter } from "next/navigation";
import { useState } from "react";

export function useDelete(apiUrl: string) {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const remove = async (id: string | number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    if (isPending) return;

    try {
      setIsPending(true);
      const res = await fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "삭제 실패했습니다.");

      alert("삭제되었습니다.");
      router.refresh();
    } catch (err: any) {
      alert(err.message);
    } finally {
      setIsPending(false);
    }
  };

  return { remove, isPending };
}