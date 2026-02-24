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

const LanguageContext = createContext<{
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => unknown;
  availableLanguages: { code: string; name: string; flag: string }[];
} | null>(null);

const SUPPORTED_LANGUAGES = ["vi", "en", "zh"];
const DEFAULT_LANGUAGE = "vi";

function getNestedValue(obj: unknown, keys: string[]): unknown {
  let value: unknown = obj;
  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return undefined;
    }
  }
  return value;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const [language, setLanguageState] = useState(() => {
    if (typeof window === "undefined") return DEFAULT_LANGUAGE;
    const match = pathname?.match(/^\/(vi|en|zh)(\/|$)/);
    if (match && SUPPORTED_LANGUAGES.includes(match[1])) return match[1];
    const saved = localStorage.getItem("userSelectedLanguage");
    if (saved && SUPPORTED_LANGUAGES.includes(saved)) return saved;
    return DEFAULT_LANGUAGE;
  });

  // Theo dõi thay đổi của Pathname để đồng bộ state
  useEffect(() => {
    const match = pathname?.match(/^\/(vi|en|zh)(\/|$)/);
    const urlLang = match ? match[1] : null;

    if (
      urlLang &&
      urlLang !== language &&
      SUPPORTED_LANGUAGES.includes(urlLang as string)
    ) {
      // Sử dụng setTimeout(..., 0) để đẩy việc setState vào hàng đợi tiếp theo (macrotask)
      // Việc này giúp thoát khỏi chuỗi render hiện tại và xóa lỗi ESLint
      const timeoutId = setTimeout(() => {
        setLanguageState(urlLang);
      }, 0);

      return () => clearTimeout(timeoutId); // Dọn dẹp nếu component unmount hoặc effect chạy lại
    }
  }, [pathname, language]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = useCallback(
    (key: string) => {
      const keys = key.split(".");
      const value = getNestedValue(
        translations[language as keyof typeof translations],
        keys,
      );
      return value ?? key;
    },
    [language],
  );

  const switchLanguage = useCallback(
    (lang: string) => {
      if (!SUPPORTED_LANGUAGES.includes(lang) || lang === language) return;
      if (typeof window !== "undefined") {
        localStorage.setItem("userSelectedLanguage", lang);
      }
      setLanguageState(lang);
      router.push(`/${lang}`);
    },
    [language, router],
  );

  const availableLanguages = [
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
