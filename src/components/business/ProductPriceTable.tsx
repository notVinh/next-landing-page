"use client";
import { Search, Monitor, Filter, ArrowUpDown, LogOutIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

const ProductPriceTable = ({
  products,
  cateMenu,
  totalPages,
}: {
  products: any[];
  cateMenu: any[];
  totalPages: number;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const searchItem = searchParams.get("search");
  const cateItem = searchParams.get("cate");

  // const [cateMenu, setCateMemu] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${process.env.NEXT_PUBLIC_BACKEND_URL}/categories`,
  //       );
  //       const getChild = response.data.data.filter((i) => i.level === 2);

  //       setCateMemu(getChild);
  //     } catch (error) {
  //       console.error("Lỗi fetch:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // Lấy giá trị search từ URL làm giá trị khởi tạo cho input
  const [inputValue, setInputValue] = useState(
    searchParams.get("search") || "",
  );

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const params = new URLSearchParams(searchParams);

      if (inputValue) {
        params.set("search", inputValue);
        params.delete("page"); // Reset về trang 1 khi search mới
      } else {
        params.delete("search");
      }

      // Đẩy params lên URL. Next.js sẽ tự động re-fetch Server Component
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }, 500); // Đợi 500ms sau khi ngừng gõ mới gọi API

    return () => clearTimeout(delayDebounceFn);
  }, [inputValue]);

  const formattedPrice = (price: number) => {
    // Ép kiểu về số nguyên để loại bỏ hoàn toàn phần thập phân .00
    const number = Math.floor(Number(price));

    // Sử dụng format cơ bản để lấy dấu chấm ngăn cách hàng nghìn
    return new Intl.NumberFormat("vi-VN").format(number);
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans pb-10">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 w-full text-center py-6">
        Bảng giá sản phẩm
      </h1>

      <div className="max-w-6xl mx-auto bg-white md:rounded-xl shadow-sm border-y md:border border-gray-200">
        {/* Header: Search & Filter - Stack trên Mobile */}
        <div className="p-4 md:p-6 border-b border-gray-100 flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col sm:flex-row flex-1 gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                type="text"
                placeholder="Tìm theo tên, model..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm"
              />
            </div>

            {/* Dropdown Categories */}
            <div className="relative min-w-full sm:min-w-[200px]">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <select
                value={searchParams.get("cate") || ""}
                onChange={(e) => {
                  const selectedId = e.target.value;
                  const params = new URLSearchParams(searchParams.toString());
                  if (selectedId) params.set("cate", selectedId);
                  else params.delete("cate");
                  params.delete("page");
                  router.push(`${pathname}?${params.toString()}`);
                }}
                className="w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer text-gray-700"
              >
                <option value="">Tất cả danh mục</option>
                {cateMenu.map((cat: any) => {
                  const currentName = cat.translations.find(
                    (i: any) => i.languageCode === "vi",
                  );
                  return (
                    <option key={cat.id} value={cat.id}>
                      {currentName.name}
                    </option>
                  );
                })}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <ArrowUpDown className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>

        {/* Table: Hiện bảng ở PC, hiện Card ở Mobile */}
        <div className="block md:hidden">
          {/* Giao diện MOBILE (Card) */}
          <div className="divide-y divide-gray-100">
            {products.map((item) => (
              <div key={item.id} className="p-4 flex gap-4 active:bg-gray-50">
                <div className="w-20 h-20 bg-gray-50 rounded-lg flex-shrink-0 flex items-center justify-center border border-gray-100">
                  {item.images?.[0] ? (
                    <img
                      src={item.images[0]}
                      alt={item.displayName}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <Monitor className="text-gray-300" size={30} />
                  )}
                </div>
                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <div className="font-bold text-gray-800 text-sm line-clamp-2 uppercase">
                      {item.displayName}
                    </div>
                    <div className="text-[10px] text-gray-400 mt-1 uppercase font-mono">
                      ID: {item.id} | Model: {item.model}
                    </div>
                  </div>
                  <div className="text-blue-600 font-bold text-lg mt-2 flex items-baseline gap-1">
                    {formattedPrice(item.originalPrice)}
                    <span className="text-[10px] text-gray-400 font-medium">
                      VNĐ
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Giao diện DESKTOP (Table) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-600 uppercase text-[11px] font-bold tracking-wider">
                <th className="px-6 py-4 border-b">ID</th>
                <th className="px-6 py-4 border-b">Hình ảnh</th>
                <th className="px-6 py-4 border-b">Thông tin máy</th>
                <th className="px-6 py-4 border-b text-right">Giá</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-blue-50/50 transition-colors group"
                >
                  <td className="px-6 py-4 font-mono text-xs text-gray-400 italic">
                    {item.id}
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 group-hover:scale-105 transition-transform">
                      {item.images?.[0] ? (
                        <img
                          src={item.images[0]}
                          alt=""
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <Monitor size={24} className="text-gray-300" />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-gray-800 uppercase text-sm">
                      {item.displayName}
                    </div>
                    <div className="text-[11px] text-gray-500 uppercase mt-1 tracking-wider font-medium">
                      Model: {item.model}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="text-blue-600 font-black text-xl">
                      {formattedPrice(item.originalPrice)}
                      <span className="text-xs font-medium ml-1 text-gray-400 uppercase">
                        VNĐ
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        <div className="p-4 border-t border-gray-100">
          <Pagination totalPages={totalPages} />
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50/30 border-t border-gray-100 text-center">
          <p className="text-[10px] text-gray-400 uppercase font-medium tracking-widest">
            Cập nhật: {new Date().toLocaleDateString("vi-VN")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPriceTable;
