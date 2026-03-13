"use client";

import { LocalizedLink } from "@/components/LocalizedLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCategoriesStore } from "@/lib/zustand/useCategoriesStore";
import axios from "axios";
import { useEffect, useState } from "react";

interface ProductModel {
  id: string;
  images: string[];
  translations: {
    languageCode: string;
    name: string;
    description: string;
    specs: { label: string; value: string }[];
  }[];
}

export function ChildCategoryPage({
  parent,
  child,
}: {
  parent: string;
  child: string;
}) {
  const { t, language } = useLanguage();
  const { categories } = useCategoriesStore();
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [loading, setLoading] = useState(true);

  const currentCategory: any = categories.find((item: any) => {
    const translateItem = item?.translations?.find(
      (trans: any) => trans.languageCode === language,
    );
    return item.level === 2 && translateItem?.slug === child;
  });

  const currentId = currentCategory?.id;

  useEffect(() => {
    if (!currentId) return;
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/categories/${currentId}/products`,
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Lỗi fetch:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentId]);

  console.log(currentCategory);

  const categoryName = currentCategory?.translations.find(
    (t: any) => t.languageCode === language,
  )?.name;

  return (
    <div className="min-h-screen bg-white font-sans text-[#333]">
      {/* 1. Hero Section - Tone đen/xám chuyên nghiệp */}
      <div className="relative h-[220px] w-full flex items-center overflow-hidden bg-[#1e619d] px-32">
        {/* Lớp phủ Overlay tối để chữ trắng nổi bật */}
        <div className="absolute inset-0 bg-blue/50 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <nav className="flex items-center text-[13px] text-gray-300 mb-4 space-x-2">
            <span className="flex items-center">
              <i className="fas fa-home mr-1"></i> {t("nav.home") as string}
            </span>
            <span>/</span>
            <span className="uppercase">{t("nav.products") as string}</span>
            <span>/</span>
            <span className="text-white font-semibold uppercase">
              {categoryName}
            </span>
          </nav>

          <div className="text-sm md:text-[26px] font-bold text-white tracking-wide uppercase leading-tight border-l-4 border-blue-600 pl-6">
            {categoryName}
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={currentCategory?.image || "/gtg_bg.png"}
            // className="absolute inset-0 w-full object-cover z-0 opacity-60"
            className="w-fit"
            alt="Banner"
          />
        </div>
        <img
          src={"/gtg_bg.png"}
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-45"
          alt="Banner"
        />
      </div>

      {/* 2. Intro Section - White Background */}
      {/* <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/2">
            <img
              src="/images/machine-main.jpg"
              alt="Detail"
              className="w-full h-auto shadow-sm border border-gray-100"
            />
          </div>
          <div className="w-full md:w-1/2 text-gray-600 leading-relaxed text-[16px] space-y-6 pt-2">
            <p>
              Our <strong>{categoryName}</strong> is a versatile and commonly
              used sewing equipment that ensures smooth and efficient
              straight-line stitching for various fabrics and garments.
            </p>
            <p>
              At Hikari, we offer a wide selection of machines to cater to your
              specific requirements, including intelligent models with oil-free
              thread trimmers and high-speed direct drive.
            </p>
          </div>
        </div>
      </div> */}

      {/* 3. Product List Section - Gray Background */}
      <div className="bg-[#f8f9fa] py-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-700"></div>
            </div>
          ) : (
            products.map((item) => {
              const matchTrans = item.translations.find(
                (i) => i.languageCode === language,
              );
              return (
                <div
                  key={item.id}
                  className="group bg-white flex flex-col md:flex-row shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm overflow-hidden"
                >
                  {/* Left: Product Image */}
                  <div className="w-full md:w-[40%] p-10 flex items-center justify-center bg-white border-r border-gray-50">
                    <img
                      src={item.images[0]}
                      alt={matchTrans?.name}
                      className="max-h-60 object-contain group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Right: Product Details */}
                  <div className="w-full md:w-[60%] p-10 flex flex-col justify-center relative">
                    <h3 className="text-[24px] font-medium text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {matchTrans?.name}
                    </h3>
                    <div
                      className="prose max-w-none description-content font-light leading-relaxed mb-5 line-clamp-4"
                      dangerouslySetInnerHTML={{
                        __html: (matchTrans?.description || "")
                          .replace(/<[^>]*>/g, "")
                          .trim(),
                      }}
                    />

                    {/* <p className="text-blue-600 text-[17px] font-normal mb-4" 
                    >
                      ({matchTrans?.description})
                    </p> */}

                    <div className="text-gray-500 text-[15px] leading-relaxed mb-8 border-t border-gray-100 pt-4">
                      {matchTrans?.specs?.slice(0, 3).map((s, idx) => (
                        <div key={idx} className="mb-1">
                          <span className="text-gray-400">•</span> {s.label}:{" "}
                          <span className="text-gray-700">{s.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Circle Arrow Button - Giống ảnh mẫu */}

                    <LocalizedLink
                      href={`/san-pham/${parent}/${child}/${item.id}`}
                      className="flex items-center gap-2"
                    >
                      <div className=" h-10 p-2 gap-2 rounded-full bg-gray-400 text-white flex items-center justify-center group-hover:bg-blue-600 transition-all self-start">
                        <div className="">{t("products.viewDetails")}</div>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </LocalizedLink>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
