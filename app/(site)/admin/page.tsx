"use client";
import AuthForm from "@/components/form/AuthForm";
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react";

export default function AdminPage() {

    const router = useRouter();
    const pathname = usePathname();
    const [isAuth, setIsAuth] = useState<boolean>(true);

    useEffect(() => {
        if (isAuth) {
            router.push("/admin/board/performance");
        }
    }, [isAuth, router]);

    return (
        <article className="auth">
            <div>
                <div>
                    <h2 className="page-title">로그인</h2>
                </div>
                <AuthForm setIsAuth={setIsAuth} />
            </div>
        </article>
    )
}