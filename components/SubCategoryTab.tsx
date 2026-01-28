'use client';
import { ADMIN_SUBCATEGORY, CYLINDER_SUBCATEGORY, UNIT_SUBCATEGORY } from "@/data/category";
import { useRouter, useSearchParams, useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function SubCategoryTab() {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { category: mainCategory } = useParams();

  const [tabList, setTabList] = useState<{ name: string, category: string }[]>([]);
  const isAdmin = pathname.startsWith('/admin');
  const isPerformance = pathname.includes("/performance");

  useEffect(()=> {
    if (isAdmin) {
    setTabList(ADMIN_SUBCATEGORY);
  } else {
    if (mainCategory === "cylinder" || mainCategory === "performance") {
      setTabList(CYLINDER_SUBCATEGORY);
    } else if (mainCategory === "unit") {
      setTabList(UNIT_SUBCATEGORY);
    } else {
      setTabList([]);
    }
  }
  },[pathname, mainCategory]);

  const subParams = searchParams.get("sub");
  const currentBoard = isAdmin ? (pathname.split('/').pop()) : (isPerformance ? "performance" : (subParams || tabList[0]?.category));;

const onClickTab = (category: string) => {
  if (isAdmin) {
    router.push(`/admin/board/${category}`);
  } else {
    if (category === "performance") {
      router.push(`/product/performance`);
    } else {
      const targetMain = (mainCategory === "performance") ? "cylinder" : mainCategory;
      router.push(`/product/${targetMain}?sub=${category}`);
    }
  }
}

  if (tabList.length === 0) return null;

  return (
    <div className="tab-menu">
      <ul className="display-flex-flow">
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