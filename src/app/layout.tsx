import type { Metadata } from "next";
import "./globals.css";

type Props = {
  params: { lang: string };
};

// Chuyển từ "export const metadata" sang hàm "generateMetadata"
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = params.lang;

  // Định nghĩa nội dung theo ngôn ngữ (Bạn có thể gọi API từ NestJS ở đây)
  const translations: Record<string, { title: string; desc?: string }> = {
    vi: {
      title: "Giải pháp nhà máy may thông minh GTG",
      // desc: "GTG - Giang Thành - Nhà cung cấp máy may công nghiệp hàng đầu Việt Nam.",
    },
    en: {
      title: "GTG Smart Garment Factory Solution",
      // desc: "GTG - Giang Thành - Leading supplier of industrial sewing machines in Vietnam.",
    },
    zh: {
      title: "GTG 智能服装工厂解决方案",
      // Nếu không muốn hiện description ở tiếng Trung, chỉ cần không khai báo desc ở đây
    },
  };

  const current = translations[lang] || translations.vi;

  return {
    title: current.title,
    description: current.desc || "", // Nếu không có desc sẽ để trống, giúp ẩn mô tả trên preview
    icons: {
      icon: "/favicon.ico",
    },
    // Quan trọng cho hiển thị trên Zalo/Facebook
    // openGraph: {
    //   title: current.title,
    //   description: current.desc || "",
    //   images: ["/og-image.jpg"], // Thay bằng ảnh thực tế của bạn
    // },
  };
}

export default function RootLayout({
  children,
  params, // Thêm params vào đây
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    // Thay "vi" bằng params.lang để trình duyệt hiểu đúng ngôn ngữ trang
    <html lang={params.lang || "vi"} suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
