'use client';
import { ADMIN_SUBCATEGORY, CYLINDER_SUBCATEGORY, UNIT_SUBCATEGORY } from "@/data/category";
import { useRouter, useSearchParams, useParams, usePathname } from "next/navigation";
import { useState } from "react";

export default function SubCategoryTab() {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { category: mainCategory } = useParams();

  const [tabList, setTabList] = useState<{ name: string, category: string }[]>([]);
  const [currentBoard, setCurrentBoard] = useState<String>("");
  const isAdmin = pathname.startsWith('/admin');

  if (isAdmin) {
    setTabList(ADMIN_SUBCATEGORY);
    setCurrentBoard("performance");
  } else {
    if (mainCategory === "cylinder") {
      setTabList(CYLINDER_SUBCATEGORY);
    } else if (mainCategory === "unit") {
      setTabList(UNIT_SUBCATEGORY);
    }
    setCurrentBoard(searchParams.get("sub") || tabList[0]?.category);
  }

  const onClickTab = (category: string) => {
    if (isAdmin) {
      router.push(`/admin/board/${category}`);
    } else {
      router.push(`${pathname}?sub=${category}`);
      // ex: /product/cylinder?=sub=standard
    }
  }

  if (tabList.length === 0) return null;

  return (
    <div className="tab-menu">
      <ul>
        {tabList.map(tab => {
          const isFocus = currentBoard === tab.category;
          return (
            <li key={tab.name} className={isFocus ? "focus" : ""}
              onClick={()=> onClickTab(tab.category)}>
              {tab.name}
            </li>)
        })}
      </ul>
    </div>
  );
}