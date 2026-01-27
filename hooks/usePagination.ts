import { useState } from 'react';

export function usePagination<T>(data: T[], dataPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalCount = data.length;
  const indexOfLastItem = currentPage * dataPerPage;
  const indexOfFirstItem = indexOfLastItem - dataPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경 시 스크롤 상단 이동
  const onPageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); 
  };

  return {
    currentPage,
    currentItems,
    totalCount,
    onPageChange,
    setCurrentPage, // 카테고리 변경 시 1페이지로 리셋
  };
}