import { useEffect, useState } from 'react';

export function usePagination<T>(data: T[], dataPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  const totalCount = data.length;
  const indexOfLastItem = currentPage * dataPerPage;
  const indexOfFirstItem = indexOfLastItem - dataPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    currentItems,
    totalCount,
    onPageChange,
    setCurrentPage,
  };
}
