import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "GTG Giang Thành | Máy May Công Nghiệp, Thiết Bị Ngành May Hàng Đầu Việt Nam",
  description:
    "GTG Giang Thành - Nhà cung cấp máy may công nghiệp, máy may lập trình, máy cắt vải tự động, thiết bị ngành may hàng đầu Việt Nam.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
