import { normalizePathToBase } from "@/utils/routeSlugs";
import { HomePage } from "./HomePage";
import { ProductsPage } from "./ProductsPage";
import { SolutionsPage } from "./SolutionsPage";
import { ServicesPage } from "./ServicesPage";
import { ContactPage } from "./ContactPage";
import { CatalogPage } from "./CatalogPage";
import { CompanyInfoPage } from "./CompanyInfoPage";
import { CompanyProfilePage } from "./CompanyProfilePage";
import { HistoryPage } from "./HistoryPage";
import { notFound } from "next/navigation";
import { TestPage } from "./TestPage";
import { CategoryParentPage } from "./CategoryParentPage";
import { ChildCategoryPage } from "./ChildCategoryPage";
import ProductDetailPage from "./ProductDetailPage";

const routeMap: Record<string, React.ComponentType> = {
  "/": HomePage,
  "/san-pham": ProductsPage,
  "/giai-phap": SolutionsPage,
  "/dich-vu": ServicesPage,
  "/lien-he": ContactPage,
  "/catalog": CatalogPage,
  "/thong-tin-cong-ty": CompanyInfoPage,
  "/ho-so-cong-ty": CompanyProfilePage,
  "/lich-su": HistoryPage,
  "/test": TestPage,
};

export default async function SlugPage({
  params,
}: {
  params: Promise<{ lang: string; slug?: string[] }>;
}) {
  const { slug, lang } = await params;
  const pathSegments = slug || [];

  const PRODUCT_SLUGS: Record<string, string> = {
    vi: "san-pham",
    en: "products",
    zh: "chan-pin", // hoặc từ tương ứng của bạn
  };

  const productBase = PRODUCT_SLUGS[lang] || "san-pham";

  // Trường hợp 1: /san-pham (Trang chủ sản phẩm - Hiện 6 danh mục lớn)
  if (pathSegments.length === 1 && pathSegments[0] === productBase) {
    return <ProductsPage />;
  }

  // Trường hợp 2: /san-pham/may-may-cong-nghiep (Danh mục cha)
  if (pathSegments.length === 2 && pathSegments[0] === productBase) {
    return <CategoryParentPage categoryName={pathSegments[1]} />;
  }

  // Trường hợp 3: /san-pham/may-may-cong-nghiep/may-1-kim (Lớp cuối bạn muốn)
  if (pathSegments.length === 3 && pathSegments[0] === productBase) {
    // Render giao diện catecon riêng biệt ở đây
    return (
      <ChildCategoryPage
        parent={pathSegments[1]}
        child={pathSegments[2]}
        subCategoryName={pathSegments[2]}
      />
    );
  }

  if (pathSegments.length === 4 && pathSegments[0] === productBase) {
    return (
      <ProductDetailPage
        lang={lang}
        // parent={pathSegments[1]}
        // child={pathSegments[2]}
        productSlug={pathSegments[3]}
      />
    );
  }
  const rawPath = "/" + pathSegments.join("/");
  const normalizedPath = normalizePathToBase(rawPath);

  const PageComponent = routeMap[normalizedPath];
  if (!PageComponent) {
    notFound();
  }

  return <PageComponent />;
}
