import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Footer } from "@/components/layout/Footer/Footer";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { ToastContainer } from "react-toastify";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  // const res = await fetch(`${process.env.BACKEND_URL}/api/categories`, {
  //   next: { revalidate: 60 },
  // });
  // const categories = await res.json();

  return (
    <LanguageProvider>
      <div className="font-sans">
        {/* <Navbar data={categories} /> */}
        <Navbar data={[]} />
        <main className="pt-16">{children}</main>
        <Footer />
        <FloatingContactButtons />
      </div>
      <ToastContainer />
    </LanguageProvider>
  );
}
