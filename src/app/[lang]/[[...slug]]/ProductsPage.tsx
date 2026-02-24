"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { LocalizedLink } from "@/components/LocalizedLink";

const categories = [
  {
    id: "may-in-phay-trai-cat",
    titleKey: "products.printCutSpread",
    descKey: "products.printCutSpreadDesc",
    image: "/images/danhmuc/he thong may cadcam.png",
    link: "/san-pham/may-in-phay-trai-cat",
  },
  {
    id: "may-tu-dong-xuong-may",
    titleKey: "products.automation",
    descKey: "products.automationDesc",
    image: "/images/danhmuc/he thong may tu dong.png",
    link: "/san-pham/may-tu-dong-xuong-may",
  },
  {
    id: "may-may-lap-trinh",
    titleKey: "products.programmable",
    descKey: "products.programmableDesc",
    image: "/images/danhmuc/may may tu dong.png",
    link: "/san-pham/may-may-lap-trinh",
  },
  {
    id: "may-may-cong-nghiep",
    titleKey: "products.industrial",
    descKey: "products.industrialDesc",
    image: "/images/danhmuc/may may cong nghiep.png",
    link: "/san-pham/may-may-cong-nghiep",
  },
  {
    id: "may-phu-tro",
    titleKey: "products.auxiliary",
    descKey: "products.auxiliaryDesc",
    image: "/images/danhmuc/May phu tro.png",
    link: "/san-pham/may-phu-tro",
  },
  {
    id: "phan-mem-quan-ly",
    titleKey: "products.software",
    descKey: "products.softwareDesc",
    image: "/images/danhmuc/phan mem quan ly du lieu tong hop.png",
    link: "/san-pham/phan-mem-quan-ly",
  },
];

export function ProductsPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
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
          {categories.map((cat) => (
            <LocalizedLink
              key={cat.id}
              href={cat.link}
              className="flex flex-col bg-white rounded-lg overflow-hidden shadow hover-lift"
            >
              <div className="h-48 md:h-64 bg-gray-100 flex items-center justify-center">
                <img
                  src={cat.image}
                  alt={t(cat.titleKey) as string}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {t(cat.titleKey) as string}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {t(cat.descKey) as string}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-blue-600 mt-2">
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
          ))}
        </div>
      </div>
    </div>
  );
}
