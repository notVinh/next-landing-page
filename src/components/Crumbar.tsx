"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCategoriesStore } from "@/lib/zustand/useCategoriesStore";
import React from "react";
import { LocalizedLink } from "./LocalizedLink";
interface Translation {
  languageCode: string;
  slug: string;
  name: string;
}

interface Category {
  id: string | number;
  translations: Translation[];
  // các thuộc tính khác của category nếu có
}

const Crumbar = ({ parent, child }: { parent: string; child: string }) => {
  const { t, language } = useLanguage();
  const { categories } = useCategoriesStore();

  const getTranslation = (slug: string) => {
    const category = (categories as any[]).find((cat) =>
      cat.translations?.some(
        (t: any) => t.languageCode === language && t.slug === slug,
      ),
    );

    return category?.translations?.find(
      (t: any) => t.languageCode === language && t.slug === slug,
    )?.name;
  };

  const parentDisplayName = getTranslation(parent);
  const childDisplayName = getTranslation(child);

  return (
    <div className="relative z-20 max-w-7xl mx-auto w-full md:flex md:flex-col border-b md:border-none pb-1 mb-6">
      <nav className="md:flex items-center text-[13px] text-gray-300 space-x-2 flex-wrap">
        <LocalizedLink href={"/"}>
          <span className="flex items-center">
            <i className="fas fa-home mr-1"></i> {t("nav.home") as string}
          </span>
        </LocalizedLink>
        <span>/</span>
        <LocalizedLink href={`san-pham`}>
          <span className="">{t("nav.products") as string}</span>
        </LocalizedLink>
        <span>/</span>
        <LocalizedLink href={`san-pham/${parent}`}>
          <span className="">{parentDisplayName}</span>
        </LocalizedLink>
        <span>/</span>
        <LocalizedLink href={`san-pham/${parent}/${child}`}>
          <span className="text-white  ">{childDisplayName}</span>
        </LocalizedLink>
      </nav>
    </div>
  );
};

export default Crumbar;
