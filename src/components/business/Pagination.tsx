"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const getPaginationRange = (currentPage: number, totalPages: number) => {
  const delta = 2; // Số lượng trang hiển thị quanh trang hiện tại
  const range = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - delta && i <= currentPage + delta)
    ) {
      range.push(i);
    } else if (range[range.length - 1] !== "...") {
      range.push("...");
    }
  }
  return range;
};

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const handlePageChange = (page: number | string) => {
    if (typeof page !== "number") return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const paginationRange = getPaginationRange(currentPage, totalPages);

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 py-6 border-t border-gray-100 bg-gray-50/50">
      {/* Nút Previous */}
      <button
        disabled={currentPage <= 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className="p-2 rounded-lg border bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Danh sách các số trang */}
      <div className="flex items-center gap-1">
        {paginationRange.map((page, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(page)}
            disabled={page === "..."}
            className={`min-w-[40px] h-10 rounded-lg text-sm font-medium transition-all ${
              page === currentPage
                ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                : page === "..."
                  ? "cursor-default text-gray-400"
                  : "bg-white border text-gray-600 hover:border-blue-400 hover:text-blue-600"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Nút Next */}
      <button
        disabled={currentPage >= totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className="p-2 rounded-lg border bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};
export default Pagination;
