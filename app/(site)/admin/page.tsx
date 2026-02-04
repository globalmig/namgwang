"use client";
import AuthForm from "@/components/form/AuthForm";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";

export default function AdminPage() {

    const router = useRouter();
    const [isAuth, setIsAuth] = useState<boolean>(false);

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