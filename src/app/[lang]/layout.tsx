// import { LanguageProvider } from "@/contexts/LanguageContext";
// import { Navbar } from "@/components/layout/Navbar/Navbar";
// import { Footer } from "@/components/layout/Footer/Footer";
// import { FloatingContactButtons } from "@/components/FloatingContactButtons";
// import { ToastContainer } from "react-toastify";

// export async function generateStaticParams() {
//   // Trả về danh sách các ngôn ngữ bạn hỗ trợ
//   return [{ lang: "vi" }, { lang: "en" }, { lang: "zh" }];
// }

// export default async function LangLayout({
//   children,
//   params,
// }: {
//   children: React.ReactNode;
//   params: Promise<{ lang: string }>;
// }) {
//   const { lang } = await params;

//   // const res = await fetch(`${process.env.BACKEND_URL}/categories`, {
//   //   next: { revalidate: 60 },
//   // });
//   // const categories = await res.json();
//   // const products = () => {
//   //   const filtered = categories.data?.reverse();

//   //   // 2. Sắp xếp: Nếu id là 42 thì đẩy lên đầu (-1), ngược lại giữ nguyên (0)
//   //   return [...filtered].sort((a, b) => {
//   //     if (a.id === 42) return -1;
//   //     if (b.id === 42) return 1;
//   //     return 0;
//   //   });
//   // };

//   let sortedProducts = [];
//   try {
//     const res = await fetch(`${process.env.BACKEND_URL}/categories`, {
//       next: { revalidate: 20 },
//     });
//     const categories = await res.json();

//     // 1. Lấy mảng thô từ API
//     const rawData = categories?.data || [];

//     // 2. Sắp xếp theo sortOrder (từ nhỏ đến lớn)
//     // Không cần .reverse() hay lọc ID 42 thủ công nữa
//     sortedProducts = [...rawData].sort((a, b) => {
//       const orderA = a.order ?? 0;
//       const orderB = b.order ?? 0;
//       return orderA - orderB;
//     });
//   } catch (error) {
//     console.error("Fetch categories failed:", error);
//     sortedProducts = [];
//   }

//   return (
//     <LanguageProvider lang={lang}>
//       <div className="font-sans">
//         <Navbar data={sortedProducts} />
//         {/* <Navbar data={[]} /> */}
//         <main className="pt-16">{children}</main>
//         <Footer />
//         <FloatingContactButtons />
//       </div>
//       <ToastContainer />
//     </LanguageProvider>
//   );
// }

import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Footer } from "@/components/layout/Footer/Footer";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { ToastContainer } from "react-toastify";
import { Metadata } from "next";

type Props = {
  params: Promise<{ lang: string }>;
};

// GIẢI PHÁP CHO METADATA ĐA NGÔN NGỮ
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;

  const translations: Record<string, { title: string }> = {
    vi: {
      title: "GTG Giải pháp nhà máy may thông minh",
      // desc: "GTG - Giang Thành - Nhà cung cấp máy may công nghiệp, máy may lập trình, máy cắt vải tự động hàng đầu Việt Nam.",
    },
    en: {
      title: "GTG Smart Garment Factory Solution",
      // desc: "Leading provider of industrial sewing machines and automated garment equipment in Vietnam.",
    },
    zh: {
      title: "GTG 智能服装工厂解决方案",
      // desc: "越南领先工业缝纫机及自动化服装设备供应商。",
    },
  };

  const t = translations[lang] || translations.vi;

  return {
    title: t.title,
    // description: t.desc,
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      title: t.title,
      // description: t.desc,
      images: [
        "/images/anhcty/z7357057865754_32e8b0dfead67aaba6e79ba81571bcf0.jpg",
      ],
    },
  };
}

export async function generateStaticParams() {
  return [{ lang: "vi" }, { lang: "en" }, { lang: "zh" }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  let sortedProducts = [];
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/categories`, {
      next: { revalidate: 20 }, // Metadata của bạn cũng sẽ được hưởng lợi từ việc cache này
    });
    const categories = await res.json();
    const rawData = categories?.data || [];

    sortedProducts = [...rawData].sort((a, b) => {
      const orderA = a.order ?? 0;
      const orderB = b.order ?? 0;
      return orderA - orderB;
    });
  } catch (error) {
    console.error("Fetch categories failed:", error);
    sortedProducts = [];
  }

  return (
    <LanguageProvider lang={lang}>
      <div className="font-sans">
        <Navbar data={sortedProducts} />
        <main className="pt-16">{children}</main>
        <Footer />
        <FloatingContactButtons />
      </div>
      <ToastContainer />
    </LanguageProvider>
  );
}
