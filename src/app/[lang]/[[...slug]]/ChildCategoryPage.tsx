"use client";

import { LocalizedLink } from "@/components/LocalizedLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCategoriesStore } from "@/lib/zustand/useCategoriesStore";
import axios from "axios";
import { useEffect, useState } from "react";

interface ProductModel {
  id: string;
  name: string;
  subName: string;
  image: string;
  features: string[];
  translations: [
    {
      language_code: string;
      name: string;
      description: string;
      specs: { label: string; value: string }[];
    },
  ];
}

export function ChildCategoryPage({
  parent,
  child,
  subCategoryName,
}: {
  parent: string;
  child: string;
  subCategoryName: string;
}) {
  const { t, language } = useLanguage();

  const { categories } = useCategoriesStore();

  // 1. Tìm thông tin danh mục hiện tại (con1) dựa trên props đã có
  // Chúng ta tìm item có name khớp với 'child' và có cấp độ là level 2
  const currentCategory = categories.find(
    (item: { level: number }) => item.level === 2,
  );

  // 2. Lấy ID
  const currentId = currentCategory?.id;

  // Debug để kiểm tra
  //   console.log("ID tìm được từ Zustand:", currentId);
  // Dữ liệu mẫu dựa trên ảnh Digitizing Board bạn gửi

  // Sử dụng state để lưu dữ liệu từ API
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Chỉ fetch khi đã tìm thấy currentId
    if (!currentId) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        // Dùng template string để đưa currentId vào URL
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories/${currentId}/products`,
        );

        // Axios trả về data nằm trong property .data
        // console.log("Dữ liệu sản phẩm thật:", response.data.products);
        setProducts(response.data.products);
      } catch (error) {
        console.error("Lỗi khi fetch sản phẩm:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentId]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Header Blue Section */}
      <div className="bg-[#2b5a9e] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="text-sm text-blue-200 mb-2">
            Products / Print, Mill, Spread, Cut /{" "}
            <span className="text-white">{subCategoryName}</span>
          </nav>
          <h1 className="text-4xl font-bold mb-3">{subCategoryName}</h1>
          <p className="text-lg text-blue-100">
            High-precision pattern and template digitizing equipment.
          </p>
        </div>
      </div>

      {/* 2. Product List Section */}
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        {products.map((item) => {
          const matchLanguageItem = item.translations.find(
            (i) => i.language_code === language,
          );
          return (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row items-center gap-8 hover:shadow-md transition-shadow"
            >
              {/* Ảnh sản phẩm */}
              <div className="w-full md:w-1/3 flex justify-center">
                <img
                  src={item.image}
                  alt={matchLanguageItem?.name}
                  className="max-h-48 object-contain"
                />
              </div>

              {/* Thông tin sản phẩm */}
              <div className="flex-grow">
                <h3 className="text-[#2b5a9e] text-xl font-bold mb-1 italic">
                  {matchLanguageItem?.name}
                </h3>
                <p className="text-gray-500 mb-4">
                  {matchLanguageItem?.description}
                </p>

                {/* Thông số (Features) */}
                <div className="flex flex-wrap gap-3">
                  {matchLanguageItem?.specs?.map((feature) => (
                    <div
                      key={feature.label}
                      className="flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded text-sm border border-blue-100"
                    >
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature.value}
                    </div>
                  ))}
                </div>
              </div>

              {/* Cột Action (Contact/Details) */}
              <div className="flex flex-col items-center md:items-end justify-between min-w-[120px]">
                {/* Nút Contact có thể mở Modal hoặc dẫn đến trang liên hệ */}
                <button className="text-[#2b5a9e] font-bold text-xl mb-4 hover:underline">
                  {language === "vi"
                    ? "Liên hệ"
                    : language === "zh"
                      ? "联系"
                      : "Contact"}
                </button>

                {/* Nút View Details - Điều hướng sang trang chi tiết */}
                <LocalizedLink
                  href={`/san-pham/${parent}/${child}/${item.id}`}
                  className="flex items-center text-gray-600 hover:text-[#2b5a9e] transition-colors text-sm group font-medium"
                >
                  {t("products.viewDetails") as string}
                  <svg
                    className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </LocalizedLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
