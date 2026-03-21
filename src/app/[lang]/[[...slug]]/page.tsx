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
import { Metadata } from "next";

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

// @/app/[lang]/[[...slug]]/page.tsx

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug, lang } = await params;
  const pathSegments = slug || [];
  const domain = "https://gtgsew.com";

  // 1. Khai báo các bản dịch mặc định (Trang chủ/Chung)
  const translations: Record<string, { title: string; desc: string }> = {
    vi: {
      title: "GTG - Giải pháp nhà máy may thông minh",
      desc: "Nhà cung cấp hàng đầu máy may công nghiệp và thiết bị may mặc tự động tại Việt Nam.",
    },
    en: {
      title: "GTG - Smart Garment Factory Solution",
      desc: "Leading provider of industrial sewing machines and automated garment equipment in Vietnam.",
    },
    zh: {
      title: "GTG - 智能服装工厂解决方案",
      desc: "越南领先工业缝纫机及自动化服装设备供应商。",
    },
  };

  const t = translations[lang] || translations.vi;
  const currentUrl = `${domain}/${lang}${pathSegments.length > 0 ? "/" + pathSegments.join("/") : ""}`;

  // Các tiền tố nhận diện
  const PRODUCT_SLUGS: Record<string, string> = {
    vi: "san-pham",
    en: "products",
    zh: "chan-pin",
  };
  const SOLUTION_SLUGS: Record<string, string> = {
    vi: "giai-phap",
    en: "solutions",
    zh: "jie-jue-fang-an",
  };
  const productBase = PRODUCT_SLUGS[lang] || "san-pham";
  const solutionBase = SOLUTION_SLUGS[lang] || "giai-phap";

  // Các giá trị mặc định để đổ vào Metadata cuối cùng
  let finalTitle = t.title;
  let finalDesc = t.desc;
  let finalImage =
    "https://gtgsew.com/images/anhcty/z7357057865754_32e8b0dfead67aaba6e79ba81571bcf0.jpg";

  // --- LOGIC PHÂN TÍCH ROUTE ĐỂ GHI ĐÈ SEO ---

  // A. Nếu là CHI TIẾT SẢN PHẨM (Ví dụ: /vi/san-pham/may-may/may-1-kim/ten-san-pham)
  if (pathSegments.length === 4 && pathSegments[0] === productBase) {
    const productSlug = pathSegments[3];

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${productSlug}`,
    )
      .then((res) => res.json())
      .catch(() => null);
    const currentProduct = res.translations.find(
      (i: any) => i.languageCode === lang,
    );

    // Chỗ này bạn có thể map slug để lấy tên đẹp hơn, tạm thời để uppercase slug
    finalTitle = `${currentProduct.name.toUpperCase()} | GTG Smart Garment`;
    finalDesc =
      lang === "vi"
        ? `Thông tin chi tiết sản phẩm ${currentProduct.name} chính hãng tại GTG.`
        : lang === "zh"
          ? `GTG 官方提供的 ${currentProduct.name} 产品详细信息。`
          : `Details for ${currentProduct.name} genuine products at GTG.`;
    finalImage = res.images[0]; // Nếu có data sản phẩm hãy thay vào đây
  }

  // B. Nếu là CHI TIẾT GIẢI PHÁP (Ví dụ: /vi/giai-phap/ten-giai-phap)
  // else if (pathSegments.length === 2 && pathSegments[0] === solutionBase) {
  //   const currentSolutionSlug = pathSegments[1];
  //   const solutionData = solutions.find((s) =>
  //     s.translations?.some((trans) => trans.slug === currentSolutionSlug),
  //   );

  //   if (solutionData) {
  //     const trans = solutionData.translations?.find(
  //       (it) => it.slug === currentSolutionSlug,
  //     );
  //     finalTitle = trans?.title || finalTitle;
  //     finalDesc = trans?.description || finalDesc;
  //     finalImage = solutionData.image || finalImage;
  //   }
  // }

  // 2. Trả về Metadata theo chuẩn Zalo/Facebook/Google
  return {
    title: finalTitle,
    description: finalDesc,
    icons: { icon: "/favicon.ico" },
    openGraph: {
      title: finalTitle,
      description: finalDesc,
      url: currentUrl,
      siteName: "GTG Smart Garment",
      images: [
        {
          url: finalImage,
          width: 600,
          height: 315,
          alt: finalTitle,
        },
      ],
      locale: lang === "vi" ? "vi_VN" : lang === "zh" ? "zh_CN" : "en_US",
      type: "website",
    },
  };
}

// @/app/[lang]/[[...slug]]/page.tsx

// export async function generateMetadata({
//   params,
// }: PageProps): Promise<Metadata> {
//   const { slug, lang } = await params;
//   const pathSegments = slug || [];
//   const domain = "https://gtgsew.com"; // Thay bằng domain thật của bạn

//   // 1. SEO cho Trang chủ
//   if (pathSegments.length === 0) {
//     return {
//       title: "Trang Chủ | Tên Công Ty",
//       description: "Mô tả ngắn gọn về công ty của bạn",
//       openGraph: { images: [`${domain}/og-home.jpg`] },
//     };
//   }

//   const PRODUCT_SLUGS: Record<string, string> = {
//     vi: "san-pham",
//     en: "products",
//     zh: "chan-pin",
//   };
//   const productBase = PRODUCT_SLUGS[lang] || "san-pham";

//   // 2. SEO cho CHI TIẾT SẢN PHẨM (Trường hợp length === 4)
//   if (pathSegments.length === 4 && pathSegments[0] === productBase) {
//     const productSlug = pathSegments[3];

//     // GIẢ SỬ: Bạn có một hàm lấy data sản phẩm từ database/file data
//     // const product = await getProductBySlug(productSlug, lang);

//     return {
//       title: `Sản phẩm: ${productSlug}`, // Nên dùng tên thật từ DB
//       description: `Thông tin chi tiết về ${productSlug}`,
//       openGraph: {
//         title: `Mua ngay ${productSlug}`,
//         description: "Sản phẩm chính hãng, chất lượng cao tại...",
//         url: `${domain}/${lang}/${pathSegments.join("/")}`,
//         type: "website",
//         images: [
//           {
//             url: `${domain}/api/og?title=${productSlug}`, // Hoặc link ảnh thật của sản phẩm
//             width: 1200,
//             height: 630,
//           },
//         ],
//       },
//     };
//   }

//   // 3. SEO cho CHI TIẾT GIẢI PHÁP (Trường hợp length === 2)
//   const SOLUTION_PREFIXES: Record<string, string> = {
//     vi: "giai-phap",
//     en: "solutions",
//     zh: "jie-jue-fang-an",
//   };
//   const solutionBase = SOLUTION_PREFIXES[lang] || "giai-phap";

//   if (pathSegments.length === 2 && pathSegments[0] === solutionBase) {
//     const solutionSlug = pathSegments[1];
//     return {
//       title: `Giải pháp: ${solutionSlug}`,
//       openGraph: {
//         images: [`${domain}/og-solutions.jpg`],
//       },
//     };
//   }

//   // Mặc định cho các trang khác
//   return {
//     title: "Tên Công Ty",
//     description: "Mô tả công ty",
//   };
// }

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
