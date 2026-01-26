'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProductItemProps {

}

export default function ProductItem() {

    const [isHover, setIsHover] = useState<String>("");


    return (
        // 제품 리스트 디자인은 동일..
        // 유압 실린더, 유니트, 기타기기
        // `/${category}/${id}`
        // section className={isHover === id ? "" : ""}
        
        <section>
            <Link href={""}>
                <Image src={""} alt={""} width={400} height={400}/>
            </Link>
            <div></div>
        </section>
    )
}