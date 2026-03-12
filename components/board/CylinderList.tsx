'use client';
import { CYLINDER_DATA } from "@/data/cylinder";
import Pagination from "../Pagination";
import { usePagination } from "@/hooks/usePagination";
import Image from "next/image";
import Link from "next/link";

export default function CylinderList() {
    const { currentPage, currentItems, totalCount, onPageChange, } = usePagination(CYLINDER_DATA, 12);

    return (
        <>
        <div className="product-list display-flex-flow">
                {CYLINDER_DATA.map(c =>
                    <section key={c.id}>
                        <Link href={`/product/cylinder/${c.id}`}>
                            <Image src={c.thumbnail} alt={c.name} width={500} height={500} />
                        </Link>
                        <div>
                            <h4>{c.name} TYPE
                            </h4>
                           <p>{c.type}</p>
                        </div>
                    </section>
                )}
            </div>
            <Pagination
                dataPerPage={12}
                currentPage={currentPage}
                totalCount={totalCount}
                onPageChange={onPageChange} />
        </>
    )
}