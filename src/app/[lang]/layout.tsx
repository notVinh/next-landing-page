import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Footer } from "@/components/layout/Footer/Footer";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { ToastContainer } from "react-toastify";
import { Metadata } from "next";

type Props = {
  params: Promise<{ lang: string }>;
};

// GIẢI PHÁP CHO METADATA ĐA NGÔN NGỮ & SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;

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

  return {
    title: t.title,
    description: t.desc, // PHẢI CÓ để sửa lỗi SEO "Document does not have a meta description"
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      title: t.title,
      description: t.desc, // Thêm description vào đây để Zalo hiện nội dung
      url: `https://gtgsew.com/${lang}`,
      siteName: "GTG Smart Garment",
      images: [
        {
          url: "https://gtgsew.com/images/anhcty/z7357057865754_32e8b0dfead67aaba6e79ba81571bcf0.jpg",
          width: 600,
          height: 315,
          alt: t.title,
        },
      ],
      locale: lang === "vi" ? "vi_VN" : lang === "zh" ? "zh_CN" : "en_US",
      type: "website",
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
      next: { revalidate: 20 },
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
