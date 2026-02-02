'use client';
import { CATEGORY_MAP } from "@/data/category";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isOpenSub, setIsOpenSub] = useState<String>("");
    const [isSelect, setIsSelect] = useState<String>("");

    return (
        <header>
            <div className="display-flex">
                <div>
                    <Link href="/" onClick={()=> {setIsOpenSub(""); setIsSelect("")}}>
                        <Image src="/icons/logo.png" alt="남광유압" width={95} height={40} />
                    </Link>
                </div>
                <nav className={isOpen ? "open-menu" : ""}>
                        <div className="mo">
                            <Image onClick={()=> setIsOpen(false)} src="/icons/nav-close.png" alt="메뉴 닫기" width={30} height={30} />
                        </div>
                    <ul>
                        {Object.entries(CATEGORY_MAP).filter(([key]) => key !== "admin").map(([key, c]) =>
                            <li key={key}>
                                <div className={`display-flex ${isOpenSub === key ? "open-sub" : ""}`} onClick={() => setIsOpenSub(key)}>
                                    <h3>{c.title}</h3>
                                    <Image className="mo" src="/icons/arrow.png" alt="서브메뉴 열기" width={26} height={15}/>
                                </div>
                                {c.categories &&
                                    <ul className={isOpenSub === key ? "open-sub" : ""}>
                                        {c.categories.map(sub =>
                                            <li key={sub.name} onClick={()=> {setIsOpen(false); setIsSelect(sub.name)}} className={isSelect === sub.name ? "select" : ""}>
                                                <Link href={`/${key}/${sub.url}`}>{sub.name}</Link>
                                            </li>)}
                                    </ul>}
                            </li>
                        )}
                    </ul>
                </nav>
                <div className="mo">
                    <Image onClick={()=> setIsOpen(true)} src="/icons/nav.png" alt="메뉴 열기" width={21} height={21} />
                </div>
            </div>
        </header>
    )
}