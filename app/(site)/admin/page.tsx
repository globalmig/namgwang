"use client";
import AuthForm from "@/components/form/AuthForm";
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react";

export default function AdminPage() {

    const router = useRouter();
    const pathname = usePathname();
    const [isAuth, setIsAuth] = useState<boolean>(false);

    useEffect(() => {
        return () => {
            if (!window.location.pathname.startsWith('/admin')) {
                sessionStorage.removeItem("isAdminAuthenticated");
            }
        }
    }, [pathname]);

    return (
        <>
            {!isAuth ?
                <article className="auth">
                    <div>
                        <div>
                            <h2 className="page-title">로그인</h2>
                        </div>
                        <AuthForm setIsAuth={setIsAuth} />
                    </div>
                </article>
                : router.push("/admin/board/performance")
            }
        </>
    )
}