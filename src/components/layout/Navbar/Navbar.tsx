"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LocalizedLink } from "@/components/LocalizedLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { NavbarProductDropdown } from "./NavbarProductDropdown";
import { NavbarSolutionsDropdown } from "./NavbarSolutionsDropdown";
import { NavbarCompanyDropdown } from "./NavbarCompanyDropdown";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useCategoriesStore } from "@/lib/zustand/useCategoriesStore";
import { NavbarTestDropdown } from "./NavbarTestDropdown";

function getPathWithoutLang(pathname: string | null): string {
  if (!pathname) return "/";
  return pathname.replace(/^\/(vi|en|zh)/, "") || "/";
}

export function Navbar({ data }: { data: any[] }) {
  // const { categories, setCategories } = useCategoriesStore();

  // useEffect(() => {
  //   // chỉ set một lần khi mount
  //   if (categories.length === 0) {
  //     setCategories(data);
  //   }
  // }, [data, categories, setCategories]);

  const [testOpen, setTestOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const pathname = usePathname();
  const { t, language } = useLanguage();
  const currentPath = getPathWithoutLang(pathname);
  const isHomePage = currentPath === "/" || currentPath === "";

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/" || currentPath === "";
    return currentPath.startsWith(path);
  };

  const getMenuClass = (path: string) => {
    const base = "transition flex items-center py-5 border-b-2";
    const active = "text-blue-600 border-blue-600 font-medium";
    const inactive =
      "text-gray-700 border-transparent hover:text-blue-600 hover:border-blue-600";
    return `${base} ${isActive(path) ? active : inactive}`;
  };

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between h-16">
          <LocalizedLink href="/" className="flex-shrink-0 flex items-center">
            <img src="/logo.png" alt="GTG Logo" className="h-8" />
          </LocalizedLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {isHomePage ? (
              <a
                href="#home"
                onClick={() => scrollToSection("home")}
                className={`${getMenuClass("/")} cursor-pointer`}
              >
                {t("nav.home") as string}
              </a>
            ) : (
              <LocalizedLink href="/" className={getMenuClass("/")}>
                {t("nav.home") as string}
              </LocalizedLink>
            )}

            {/* Products Dropdown */}
            {/* <div
              className="relative group"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <LocalizedLink
                href="/san-pham"
                className={getMenuClass("/san-pham")}
              >
                {t("nav.products") as string}
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </LocalizedLink>
              {productsOpen && <NavbarProductDropdown />}
            </div> */}

            <div
              className="relative group"
              onMouseEnter={() => setTestOpen(true)}
              onMouseLeave={() => setTestOpen(false)}
            >
              <LocalizedLink
                href="/san-pham"
                className={getMenuClass("/san-pham")}
              >
                {t("nav.products") as string}
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${testOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </LocalizedLink>
              {testOpen && <NavbarTestDropdown />}
            </div>

            <LocalizedLink href="/catalog" className={getMenuClass("/catalog")}>
              Catalog
            </LocalizedLink>

            {/* Solutions Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <LocalizedLink
                href="/giai-phap"
                className={getMenuClass("/giai-phap")}
              >
                {t("nav.solutions") as string}
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${solutionsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </LocalizedLink>
              {solutionsOpen && <NavbarSolutionsDropdown />}
            </div>

            {/* Company Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <LocalizedLink
                href="/thong-tin-cong-ty"
                className={`transition flex items-center py-5 border-b-2 ${
                  isActive("/thong-tin-cong-ty") ||
                  isActive("/ho-so-cong-ty") ||
                  isActive("/lich-su") ||
                  isActive("/dich-vu")
                    ? "text-blue-600 border-blue-600 font-medium"
                    : "text-gray-700 border-transparent hover:text-blue-600 hover:border-blue-600"
                }`}
              >
                {t("nav.company") as string}
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${companyOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </LocalizedLink>
              {companyOpen && <NavbarCompanyDropdown />}
            </div>

            <LocalizedLink href="/lien-he" className={getMenuClass("/lien-he")}>
              {t("nav.contact") as string}
            </LocalizedLink>

            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <LocalizedLink
                href="/"
                className="block px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.home") as string}
              </LocalizedLink>
              <LocalizedLink
                href="/san-pham"
                className="block px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.products") as string}
              </LocalizedLink>
              <LocalizedLink
                href="/catalog"
                className="block px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                Catalog
              </LocalizedLink>
              <LocalizedLink
                href="/giai-phap"
                className="block px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.solutions") as string}
              </LocalizedLink>
              <LocalizedLink
                href="/thong-tin-cong-ty"
                className="block px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.company") as string}
              </LocalizedLink>
              <LocalizedLink
                href="/lien-he"
                className="block px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.contact") as string}
              </LocalizedLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
