import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Footer } from "@/components/layout/Footer/Footer";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { ToastContainer } from "react-toastify";

export async function generateStaticParams() {
  // Trả về danh sách các ngôn ngữ bạn hỗ trợ
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

  // const res = await fetch(`${process.env.BACKEND_URL}/categories`, {
  //   next: { revalidate: 60 },
  // });
  // const categories = await res.json();
  // const products = () => {
  //   const filtered = categories.data?.reverse();

  //   // 2. Sắp xếp: Nếu id là 42 thì đẩy lên đầu (-1), ngược lại giữ nguyên (0)
  //   return [...filtered].sort((a, b) => {
  //     if (a.id === 42) return -1;
  //     if (b.id === 42) return 1;
  //     return 0;
  //   });
  // };

  let sortedProducts = [];
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/categories`, {
      next: { revalidate: 20 },
    });
    const categories = await res.json();

    // 1. Lấy mảng thô từ API
    const rawData = categories?.data || [];

    // 2. Sắp xếp theo sortOrder (từ nhỏ đến lớn)
    // Không cần .reverse() hay lọc ID 42 thủ công nữa
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
        {/* <Navbar data={[]} /> */}
        <main className="pt-16">{children}</main>
        <Footer />
        <FloatingContactButtons />
      </div>
      <ToastContainer />
    </LanguageProvider>
  );
}
