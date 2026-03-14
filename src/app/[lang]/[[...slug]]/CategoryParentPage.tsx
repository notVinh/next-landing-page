"use client";

import { LocalizedLink } from "@/components/LocalizedLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCategoriesStore } from "@/lib/zustand/useCategoriesStore";

interface ProductItem {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
}

export function CategoryParentPage({ categoryName }: { categoryName: string }) {
  const { t, language } = useLanguage();

  const { categories, setCategories } = useCategoriesStore();

  const currentCategory: any = categories.find((item: any) => {
    const translateItem = item?.translations?.find(
      (trans: any) => trans.languageCode === language,
    );
    return item.level === 1 && translateItem?.slug === categoryName;
  });

  const currentCategoryItem = currentCategory?.translations.find(
    (t: any) => t.languageCode === language,
  );

  const subCat = categories.filter(
    (item) => item.parentId === currentCategory?.id,
  );
  // Dữ liệu mẫu giả lập từ ảnh bạn gửi
  const products: ProductItem[] = [
    {
      id: "1",
      name: "Digitizing Board",
      description:
        "High-precision digitizing equipment for patterns and templates, supporting design and production.",
      image: "/images/products/digitizer.png",
      tags: ["High precision", "Computer connection", "Software included"],
    },
    {
      id: "2",
      name: "Pattern Printer",
      description:
        "Large format marker printing machine, fast printing, saving ink and paper.",
      image: "/images/products/printer.png",
      tags: ["Large format", "High speed", "Cost saving"],
    },
    // ... thêm các sản phẩm khác tương tự ảnh
  ];

  console.log(currentCategoryItem);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Header Banner Section */}
      <div
        className="relative bg-blue-600 py-16 sm:px-6 lg:px-8 text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.8)), url('/images/banner_product/gtg_bgr_detail.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10 px-10">
          <nav className="text-sm mb-4 text-blue-200">
            {t("nav.products") as string} /{" "}
            <span className="text-white font-medium">
              {currentCategoryItem?.name}
            </span>
          </nav>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            {currentCategoryItem?.name}
          </h1>
          {/* <p className="mt-4 text-xl text-blue-100 max-w-3xl">
            Modern equipment for production preparation: digitizing patterns,
            printing markers, spreading and automatic fabric cutting with high
            precision.
          </p> */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* 2. Overview Section Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-12">
          {/* <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t("productCategories.overview")}
          </h2> */}
          {/* <p className="text-gray-600 mb-4">
            {currentCategoryItem?.description}
          </p> */}
          <div
            className="prose max-w-none description-content font-light leading-relaxed mb-5 line-clamp-4 flex flex-col gap-3"
            dangerouslySetInnerHTML={{
              __html: currentCategoryItem?.description || "",
            }}
          />
          {/* <p className="text-gray-600 mb-4">
            {t("pages.productsPage.solutionDesc2")}
          </p> */}
        </div>

        {/* 3. Equipment Types Grid */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          {t("pages.productsPage.categoryTitle")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subCat.map((product: any) => {
            const currentItemLang = product.translations.find(
              (i: any) => i.languageCode === language,
            );

            console.log(currentItemLang);
            return (
              <LocalizedLink
                key={product.id}
                href={
                  "san-pham/" +
                  currentCategoryItem?.slug +
                  `/${product.translations.find((i: any) => i.languageCode === language).slug}`
                }
                className="flex flex-col rounded-lg overflow-hidden shadow hover-lift"
              >
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col border border-gray-50 min-h-120"
                >
                  {/* Image Container */}
                  <div className="h-64 bg-white p-6 flex items-center justify-center">
                    <img
                      src={
                        product.image ||
                        "images/danhmuc/he thong may cadcam.png"
                      }
                      alt={product.id}
                      className="max-h-full max-w-full object-contain transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-grow flex flex-col border-t border-gray-50 ">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {currentItemLang.name}
                    </h3>
                    <div
                      className="prose max-w-none description-content font-light leading-relaxed line-clamp-4"
                      dangerouslySetInnerHTML={{
                        __html: currentItemLang.description
                          .replace(/<img[^>]*>/g, "")
                          .trim(),
                      }}
                    />

                    {/* Tags */}
                    {/* <div className="flex flex-wrap gap-2 mb-6">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-medium rounded border border-blue-100 uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div> */}

                    {/* View Details Link */}
                    <div className="mt-auto">
                      {/* <a
                      href={``}
                      className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors group"
                    >
                      View products
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
                    </a> */}

                      {/* <LocalizedLink
                        key={product.id}
                        href={
                          "san-pham/" +
                          currentCategoryItem?.slug +
                          `/${product.translations.find((i: any) => i.languageCode === language).slug}`
                        }
                        className="flex flex-col bg-white rounded-lg overflow-hidden shadow hover-lift"
                      > */}
                      <div className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors group p-2">
                        {t("productCategories.viewProducts")}
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
                      </div>
                      {/* </LocalizedLink> */}
                    </div>
                  </div>
                </div>
              </LocalizedLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
