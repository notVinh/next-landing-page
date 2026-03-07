"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { translations } from "@/i18n/translations";
import { getPageIdBySlug, routeAliases } from "@/data/routeAliases";
import { useCategoriesStore } from "@/lib/zustand/useCategoriesStore";
import { getTargetCategorySlug } from "@/utils/categoryHelpers";
import { solutions } from "@/data/solutionData";

// --- 1. ĐỊNH NGHĨA TYPE CHẶT CHẼ ---
type SupportedLanguage = "vi" | "en" | "zh";

interface LanguageContextType {
  language: SupportedLanguage; // Đổi từ string thành SupportedLanguage
  setLanguage: (lang: string) => void;
  t: (key: string, options?: { returnObjects?: boolean }) => any;
  availableLanguages: { code: SupportedLanguage; name: string; flag: string }[];
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const SUPPORTED_LANGUAGES: SupportedLanguage[] = ["vi", "en", "zh"];

const PRODUCT_PREFIXES: Record<SupportedLanguage, string> = {
  vi: "san-pham",
  en: "products",
  zh: "chan-pin",
};

const SOLUTION_PREFIXES: Record<SupportedLanguage, string> = {
  vi: "giai-phap",
  en: "solutions",
  zh: "jie-jue-fang-an",
};

function getNestedValue(obj: any, keys: string[]): any {
  return keys.reduce((prev, curr) => {
    return prev && prev[curr] !== undefined ? prev[curr] : undefined;
  }, obj);
}

export function LanguageProvider({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { categories } = useCategoriesStore();

  // Ép kiểu cho lang ban đầu
  const [language, setLanguageState] = useState<SupportedLanguage>(
    lang as SupportedLanguage,
  );

  useEffect(() => {
    if (
      SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage) &&
      lang !== language
    ) {
      setLanguageState(lang as SupportedLanguage);
    }
  }, [lang, language]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = useCallback(
    (key: string) => {
      const keys = key.split(".");
      // Fix lỗi Index Signature bằng cách ép kiểu translations
      const typedTranslations = translations as Record<SupportedLanguage, any>;
      const value = getNestedValue(typedTranslations[language], keys);
      return value ?? key;
    },
    [language],
  );

  const switchLanguage = useCallback(
    (newLangRaw: string) => {
      const newLang = newLangRaw as SupportedLanguage;
      if (!SUPPORTED_LANGUAGES.includes(newLang) || newLang === language)
        return;

      localStorage.setItem("userSelectedLanguage", newLang);

      const segments = pathname.split("/"); // ["", "vi", "san-pham", "may-may"]
      const firstSegment = segments[2];

      // 1. Xử lý route Giải pháp
      const isSolutionRoute =
        Object.values(SOLUTION_PREFIXES).includes(firstSegment);
      if (isSolutionRoute) {
        segments[2] = SOLUTION_PREFIXES[newLang];

        if (segments[3]) {
          const foundSolution = solutions.find((s) =>
            s.translations.some((tr) => tr.slug === segments[3]),
          );
          if (foundSolution) {
            const translatedSlug = foundSolution.translations.find(
              (tr) => tr.languageCode === newLang,
            )?.slug;
            if (translatedSlug) segments[3] = translatedSlug;
          }
        }
      }

      // 2. Xử lý route Sản phẩm
      const isProductRoute =
        Object.values(PRODUCT_PREFIXES).includes(firstSegment);
      if (isProductRoute) {
        segments[2] = PRODUCT_PREFIXES[newLang];

        if (segments[3]) {
          segments[3] = getTargetCategorySlug(categories, segments[3], newLang);
        }
        if (segments[4]) {
          segments[4] = getTargetCategorySlug(categories, segments[4], newLang);
        }
      }

      // 3. Xử lý trang tĩnh (About, Contact...)
      if (!isSolutionRoute && !isProductRoute) {
        const pageId = getPageIdBySlug(firstSegment);
        if (pageId) {
          // Ép kiểu routeAliases để truy cập động
          const typedAliases = routeAliases as Record<
            string,
            Record<SupportedLanguage, string>
          >;
          segments[2] = typedAliases[pageId][newLang];
        }
      }

      // Cập nhật mã ngôn ngữ ở đầu URL
      segments[1] = newLang;
      const newPath = segments.join("/");
      router.push(newPath);
    },
    [language, pathname, router, categories],
  );

  const availableLanguages: {
    code: SupportedLanguage;
    name: string;
    flag: string;
  }[] = [
    { code: "vi", name: "Tiếng Việt", flag: "/images/national_flag/vi.jpg" },
    { code: "en", name: "English", flag: "/images/national_flag/en.jpg" },
    { code: "zh", name: "中文", flag: "/images/national_flag/cn.jpg" },
  ];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: switchLanguage,
        t,
        availableLanguages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
