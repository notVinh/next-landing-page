// @/app/[lang]/[[...slug]]/page.tsx
import { routeAliases, getPageIdBySlug } from "@/data/routeAliases";
import { notFound } from "next/navigation";
import { HomePage } from "./HomePage";
import { ProductsPage } from "./ProductsPage";
import { CategoryParentPage } from "./CategoryParentPage";
import { ChildCategoryPage } from "./ChildCategoryPage";
import ProductDetailPage from "./ProductDetailPage";
import { SolutionsPage } from "./SolutionsPage";
import SolutionDetailTemplate from "@/components/home/SolutionDetailTemplate";
import { solutions } from "@/data/solutionData";
import { CompanyProfilePage } from "./CompanyProfilePage";
import HistoryPage from "./HistoryPage";
import CompanyInfoPage from "./CompanyInfoPage";
import ServicesPage from "./ServicesPage";
import ContactPage from "./ContactPage";
import CatalogPage from "./CatalogPage";

const componentMap: Record<string, React.ComponentType> = {
  home: HomePage,
  contact: ContactPage,
  services: ServicesPage,
  products: ProductsPage, // Prefix cho sản
  history: HistoryPage,
  profile: CompanyProfilePage,
  info: CompanyInfoPage,
  catalog: CatalogPage,
};

interface PageProps {
  params: Promise<{
    lang: string; // Từ thư mục [lang]
    slug?: string[]; // Từ thư mục [[...slug]], dấu ? vì nó là Optional
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>; // Nếu bạn cần dùng query string (?key=value)
}

export default async function SlugPage({ params }: PageProps) {
  const { slug, lang } = await params;
  const pathSegments = slug || [];

  // Trường hợp Trang chủ: /vi hoặc /en
  if (pathSegments.length === 0) return <HomePage />;

  const firstSegment = pathSegments[0];

  const SOLUTION_PREFIXES: Record<string, string> = {
    vi: "giai-phap",
    en: "solutions",
    zh: "jie-jue-fang-an",
  };
  const solutionBase = SOLUTION_PREFIXES[lang] || "giai-phap";

  // Case: /giai-phap (Trang danh sách giải pháp)
  if (pathSegments.length === 1 && pathSegments[0] === solutionBase) {
    return <SolutionsPage />;
  }

  // Case: /giai-phap/giai-phap-may-quan-jean (Trang chi tiết giải pháp)
  if (pathSegments.length === 2 && pathSegments[0] === solutionBase) {
    const currentSolutionSlug = pathSegments[1];
    // Tìm ID gốc của giải pháp để truyền vào component
    const solutionData = solutions.find((s) =>
      s.translations?.some((t) => t.slug === currentSolutionSlug),
    );

    return <SolutionDetailTemplate slug={currentSolutionSlug} />;
  }

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
      <ChildCategoryPage parent={pathSegments[1]} child={pathSegments[2]} />
    );
  }

  if (pathSegments.length === 4 && pathSegments[0] === productBase) {
    return (
      <ProductDetailPage
        lang={lang}
        parent={pathSegments[1]}
        child={pathSegments[2]}
        productSlug={pathSegments[3]}
      />
    );
  }

  // 2. Kiểm tra các trang tĩnh (Contact, Services...)
  const pageId = getPageIdBySlug(firstSegment);
  if (pageId && componentMap[pageId]) {
    const PageComponent = componentMap[pageId];
    return <PageComponent />;
  }

  notFound();
}
