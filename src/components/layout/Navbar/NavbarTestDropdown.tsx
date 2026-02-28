"use client";

import { LocalizedLink } from "@/components/LocalizedLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { buildMenu } from "@/lib/cateBuilder";
import { useCategoriesStore } from "@/lib/zustand/useCategoriesStore";

export function NavbarTestDropdown() {
  const { categories, setCategories } = useCategoriesStore();

  const { t, language } = useLanguage();
  const submenus = buildMenu(categories, language);

  // const submenus = [
  //   {
  //     title: t("products.printCutSpread") as string,
  //     href: "/san-pham/may-in-phay-trai-cat",
  //     items: [
  //       {
  //         label: t("products.digitizingBoard"),
  //         href: "/san-pham/may-in-phay-trai-cat/bang-so-hoa",
  //       },
  //       {
  //         label: t("products.patternPrinter"),
  //         href: "/san-pham/may-in-phay-trai-cat/may-in-so-do",
  //       },
  //       {
  //         label: t("products.paperCutter"),
  //         href: "/san-pham/may-in-phay-trai-cat/may-cat-bia-giay",
  //       },
  //       {
  //         label: t("products.micaRouter"),
  //         href: "/san-pham/may-in-phay-trai-cat/may-phay-mica",
  //       },
  //       {
  //         label: t("products.autoSpreader"),
  //         href: "/san-pham/may-in-phay-trai-cat/may-trai-vai-tu-dong",
  //       },
  //       {
  //         label: t("products.autoCutter"),
  //         href: "/san-pham/may-in-phay-trai-cat/may-cat-vai-tu-dong",
  //       },
  //       {
  //         label: t("products.autoNumbering"),
  //         href: "/san-pham/may-in-phay-trai-cat/may-danh-so-tu-dong",
  //       },
  //       {
  //         label: t("products.autoLabeling"),
  //         href: "/san-pham/may-in-phay-trai-cat/may-dan-tem-tu-dong",
  //       },
  //     ],
  //   },
  //   {
  //     title: t("products.automation") as string,
  //     href: "/san-pham/may-tu-dong-xuong-may",
  //     items: [
  //       {
  //         label: t("products.featherFilling"),
  //         href: "/san-pham/may-tu-dong-xuong-may/may-nhoi-long-vu-bong",
  //       },
  //       {
  //         label: t("products.seamSealing"),
  //         href: "/san-pham/may-tu-dong-xuong-may/may-dan-seam",
  //       },
  //       {
  //         label: t("products.elasticJoining"),
  //         href: "/san-pham/may-tu-dong-xuong-may/may-noi-chun-tu-dong",
  //       },
  //       {
  //         label: t("products.autoEdgeCutter"),
  //         href: "/san-pham/may-tu-dong-xuong-may/may-cat-vien-tu-dong",
  //       },
  //       {
  //         label: t("products.smartManagement"),
  //         href: "/san-pham/may-tu-dong-xuong-may/he-thong-quan-ly-thong-minh",
  //       },
  //       {
  //         label: t("products.otherAuto"),
  //         href: "/san-pham/may-tu-dong-xuong-may/may-tu-dong-khac",
  //       },
  //       {
  //         label: t("products.overheadConveyor"),
  //         href: "/san-pham/may-tu-dong-xuong-may/chuyen-treo-tu-dong",
  //       },
  //     ],
  //   },
  //   {
  //     title: t("products.programmable") as string,
  //     href: "/san-pham/may-may-lap-trinh",
  //     items: [
  //       {
  //         label: t("products.smallField"),
  //         href: "/san-pham/may-may-lap-trinh/kho-nho",
  //       },
  //       {
  //         label: t("products.largeField"),
  //         href: "/san-pham/may-may-lap-trinh/kho-lon",
  //       },
  //       {
  //         label: t("products.automaticQuarantine"),
  //         href: "/san-pham/may-may-lap-trinh/tu-dong-quan",
  //       },
  //     ],
  //   },
  //   {
  //     title: t("products.industrial") as string,
  //     href: "/san-pham/may-may-cong-nghiep",
  //     items: [
  //       {
  //         label: t("products.singleNeedle"),
  //         href: "/san-pham/may-may-cong-nghiep/may-may-1-kim",
  //       },
  //       {
  //         label: t("products.bartack"),
  //         href: "/san-pham/may-may-cong-nghiep/may-di-bo",
  //       },
  //       {
  //         label: t("products.doubleNeedle"),
  //         href: "/san-pham/may-may-cong-nghiep/may-may-2-kim",
  //       },
  //       {
  //         label: t("products.overlock"),
  //         href: "/san-pham/may-may-cong-nghiep/may-vat-so",
  //       },
  //       {
  //         label: t("products.buttonhole"),
  //         href: "/san-pham/may-may-cong-nghiep/may-thua-khuy",
  //       },
  //       {
  //         label: t("products.coverStitch"),
  //         href: "/san-pham/may-may-cong-nghiep/may-tran-de",
  //       },
  //       {
  //         label: t("products.buttonSew"),
  //         href: "/san-pham/may-may-cong-nghiep/may-dinh-nut",
  //       },
  //     ],
  //   },
  //   {
  //     title: t("products.auxiliary") as string,
  //     href: "/san-pham/may-phu-tro",
  //     items: [
  //       {
  //         label: t("products.finishing"),
  //         href: "/san-pham/may-phu-tro/thiet-bi-hoan-tat",
  //       },
  //       {
  //         label: t("products.heatPress"),
  //         href: "/san-pham/may-phu-tro/may-ep-nhiet",
  //       },
  //       {
  //         label: t("products.cuttingEquipment"),
  //         href: "/san-pham/may-phu-tro/thiet-bi-to-cat",
  //       },
  //     ],
  //   },
  // ];

  return (
    <div className="absolute top-full left-0 w-64 bg-white shadow-lg py-2 transition-all duration-200">
      {submenus.map((sub) => (
        <div key={sub.href} className="relative group/sub">
          <LocalizedLink
            href={sub.href}
            className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
          >
            {sub.title}
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </LocalizedLink>
          <div className="absolute left-full top-0 w-56 bg-white shadow-lg py-2 opacity-0 invisible -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-0 transition-all duration-200">
            {sub?.items?.map((item) => (
              <LocalizedLink
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                {item.label as string}
              </LocalizedLink>
            ))}
          </div>
        </div>
      ))}
      {/* <LocalizedLink
        href="/san-pham/phan-mem-quan-ly"
        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
      >
        {t("products.dataManagementSoftware") as string}
      </LocalizedLink> */}
    </div>
  );
}
