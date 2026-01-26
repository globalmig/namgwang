"use client";
import ProductList from "@/components/board/ProductList";
import AuthForm from "@/components/form/AuthForm";
import Pagination from "@/components/Pagination";
import SubCategoryTab from "@/components/SubCategoryTab"
import Link from "next/link";
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react";

interface Unit {
    name: string;
    category: string;
    thumnail: string;
    images: string[];
}

interface Other {
    name: string;
    thumnail: string;
    images: string[];
}

const adminSubCategory = [
    "실적 게시판",
    "제품 게시판"
]

export default function AdminPage() {

    const pathname = usePathname();
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [unitProduct, setUnitProduct] = useState<Unit[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const dataPerPage = 10;

    useEffect(() => {
        return () => {
            if (!window.location.pathname.startsWith('/admin')) {
                sessionStorage.removeItem("isAdminAuthenticated");
            }
        }
    }, [pathname]);

    // fetch data
    useEffect(() => {

    }, []);

    const indexOfLastItem = currentPage * dataPerPage;
    const indexOfFirstItem = indexOfLastItem - dataPerPage;
    // pathname에 따라서 product 변경
    const currentItems = unitProduct.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
            {!isAuth ?
                <article className="auth">
                    <div>
                        <div>
                            <h2>로그인</h2>
                        </div>
                        <AuthForm setIsAuth={setIsAuth} />
                    </div>
                </article>
                :
                <article className="admin">
                    <div>
                        <div>
                            <h2>관리자 페이지</h2>
                            <SubCategoryTab />
                        </div>
                        <div>
                            {/* productList + 등록 */}
                            {/* performanceList + 등록 */}
                            {/* pagination */}
                            <div>
                                <button>
                                    <Link href="/admin/upload">등록</Link>
                                </button>
                            </div>
                        </div>
                        <Pagination />
                    </div>
                </article>
            }
        </>
    )
}