"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { LocalizedLink } from "@/components/LocalizedLink";
import { useCategoriesStore } from "@/lib/zustand/useCategoriesStore";

export function ProductsPage() {
  const { t, language } = useLanguage();
  const { categories, setCategories } = useCategoriesStore();

  const allCategories = categories.filter((item) => item.level === 1);
  console.log(categories);

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="text-white py-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/banner_product/gtg_bgr_detail.png)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">
            {t("products.title") as string}
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            {t("products.subtitle") as string}
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {allCategories.map((cat: any) => {
            const childItem = categories.filter((i) => i.parentId === cat.id);
            const currentItemLang = cat?.translations?.find(
              (i: any) => i.languageCode === language,
            );
            console.log(cat.image);
            return (
              <LocalizedLink
                key={cat.id}
                href={"san-pham/" + currentItemLang.slug}
                className="flex flex-col bg-white rounded-lg overflow-hidden shadow hover-lift"
              >
                <div className="h-48 md:h-64  flex items-center justify-center">
                  <img
                    src={cat.image || "images/danhmuc/he thong may cadcam.png"}
                    alt={cat?.id}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {currentItemLang.name}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 my-2">
                    {currentItemLang.description}
                  </p>
                  <div className="flex gap-2 mt-2">
                    {childItem.length > 0 && (
                      <>
                        {/* Chỉ map qua 3 item đầu tiên */}
                        {childItem?.slice(0, 3).map((item: any) => (
                          <div key={item.id}>
                            <div className="bg-blue-100 block py-1 px-2 text-blue-600 text-xs">
                              {
                                item?.translations?.find(
                                  (i: any) => i.languageCode === language,
                                )?.name
                              }
                            </div>
                          </div>
                        ))}

                        {/* Hiển thị số lượng còn dư nếu danh sách dài hơn 3 */}
                        {childItem.length > 3 && (
                          <div className="bg-gray-100 block py-1 px-2 text-gray-600 text-xs">
                            + {childItem.length - 3}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                  <span className="inline-flex items-center text-sm font-semibold text-blue-600 mt-8">
                    {t("products.viewDetails") as string}
                    <svg
                      className="w-4 h-4 ml-2"
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
                  </span>
                </div>
              </LocalizedLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// function CatSub(data) {
//   const { language } = useLanguage();
//   const { categories, setCategories } = useCategoriesStore();
//   const childCat = categories.filter((i) => i.parentId === 28);
//   console.log(childCat);
//   return (
//     <div className="flex gap-2">
//       {childCat.map((item) => (
//         <div key={item.id}>
//           <div className="bg-blue-100 block p-2 text-blue-600">
//             {item.translations.find((i) => i.languageCode === language).name}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
