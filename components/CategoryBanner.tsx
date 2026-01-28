'use client';
import { CATEGORY_MAP } from "@/data/category";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function CategoryBanner() {
    const pathname = usePathname();
    const pathnameSplit = pathname.split('/').filter(Boolean);
    const categoryKey = pathnameSplit[0];
    const category = CATEGORY_MAP[categoryKey];

    return (
        <main className="category-main">
            <div>
                <div>
                    <Image src={category.banner.mo} alt={category.title} className="mo" width={720} height={700} />
                    <Image src={category.banner.pc} alt={category.title} className="pc" width={720} height={700} />
                </div>
                <h2>{category.title}</h2>
            </div>
        </main>
    )
}