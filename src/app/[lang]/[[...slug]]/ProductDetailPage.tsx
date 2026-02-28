import QuoteModal from "@/components/QuoteModal";
import { getProductById } from "@/lib/queries/product";
import {
  CheckCircleIcon,
  LightbulbIcon,
  PlayIcon,
  TableIcon,
} from "lucide-react";
import { notFound } from "next/navigation";

export default async function ProductDetailPage({
  productSlug,
  lang = "vi",
}: {
  productSlug: string;
  lang: string;
}) {
  console.log(productSlug);
  // / 1. Kiểm tra slug ngay lập tức
  if (!productSlug) {
    return notFound();
  }

  let product;
  try {
    // 2. Gọi API tại Server
    product = await getProductById(productSlug);

    // Nếu API trả về null hoặc không có ID, kích hoạt trang 404
    if (!product || !product.id) {
      return notFound();
    }
  } catch (error) {
    console.error("SEO Error Fetching Product:", error);
    // Trả về một giao diện thông báo lỗi nhẹ nhàng thay vì sập cả trang
    return (
      <div className="min-h-screen flex items-center justify-center">
        Đã xảy ra lỗi khi tải sản phẩm. Vui lòng thử lại sau.
      </div>
    );
  }

  // 3. Xử lý bản dịch an toàn
  const t = product.translations?.find(
    (trans: { languageCode: string }) => trans.languageCode === lang,
  );

  if (!t) return notFound();

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION 1: HEADER & OVERVIEW */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden mb-8">
          <div className="p-8 md:p-12 flex flex-col md:flex-row gap-12">
            {/* Gallery bên trái */}
            <div className="w-full md:w-1/2 space-y-4">
              <div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden border">
                <img
                  src={product.images[0] || "/placeholder-image.png"}
                  alt={t.name || "Product Image"}
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.slice(1, 5).map((img: string, idx: number) => (
                  <div
                    key={idx}
                    className="aspect-square bg-white border rounded-xl overflow-hidden hover:border-blue-500 cursor-pointer transition"
                  >
                    <img src={img} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Thông tin chính bên phải */}
            <div className="w-full md:w-1/2 space-y-6">
              <div>
                <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">
                  {product.brand}
                </span>
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 mt-2 leading-tight">
                  {t.name}
                </h1>
              </div>

              <p className="text-slate-600 leading-relaxed text-lg italic">
                {t.description}
              </p>

              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-black text-blue-600">
                  {t.price}
                </span>
                <span className="text-slate-400 text-sm italic">
                  (Giá có thể thay đổi tùy cấu hình)
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                <QuoteModal
                  productName={t.name}
                  productId={product.id}
                  lang={lang}
                />
                <button className="bg-slate-900 hover:bg-black text-white font-bold py-4 px-6 rounded-2xl transition-all">
                  Brochure (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: SPECS & FEATURES */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cột trái: Thông số kỹ thuật (Bảng) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-2">
                <TableIcon className="text-blue-600" />
                {lang === "vi"
                  ? "Thông số kỹ thuật"
                  : lang === "en"
                    ? "Technical Specifications"
                    : "技术规格"}
              </h3>
              <div className="overflow-hidden border rounded-2xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="p-4 text-sm font-bold text-slate-500 border-b w-1/3 italic">
                        Hạng mục
                      </th>
                      <th className="p-4 text-sm font-bold text-slate-900 border-b">
                        Thông số chi tiết
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {t.specs?.map(
                      (spec: { label: string; value: string }, idx: number) => (
                        <tr
                          key={idx}
                          className="hover:bg-slate-50/50 transition"
                        >
                          <td className="p-4 text-sm text-slate-500 font-medium">
                            {spec.label}
                          </td>
                          <td className="p-4 text-sm text-slate-900 font-bold">
                            {spec.value}
                          </td>
                        </tr>
                      ),
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Video Demo */}
            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <PlayIcon className="fill-blue-500 text-blue-500" />
                  Video vận hành thực tế
                </h3>
                <div className="aspect-video bg-black/40 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-blue-500 transition cursor-pointer">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                    <PlayIcon className="fill-white" />
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] -z-0"></div>
            </div>
          </div>

          {/* Cột phải: Đặc điểm nổi bật (Features) */}
          <div className="space-y-8">
            <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-xl shadow-blue-100">
              <h3 className="text-xl font-black mb-6 flex items-center gap-2">
                <LightbulbIcon />
                {lang === "vi"
                  ? "Tính năng ưu việt"
                  : lang === "en"
                    ? "Key Features"
                    : "主要特点"}
              </h3>
              <ul className="space-y-4">
                {t.features.map((feature: string, idx: number) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-sm leading-relaxed items-start"
                  >
                    <CheckCircleIcon className="w-5 h-5 text-blue-200 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Box */}
            <div className="bg-white rounded-3xl p-8 border-2 border-dashed border-slate-200">
              <h4 className="font-bold text-slate-800 mb-2">
                Hỗ trợ kỹ thuật 24/7
              </h4>
              <p className="text-sm text-slate-500 mb-4">
                Mọi vấn đề về lắp đặt và vận hành GT-9012 sẽ được kỹ sư GTG hỗ
                trợ ngay lập tức.
              </p>
              <div className="text-blue-600 font-black text-xl">
                Hotline: 09xx.xxx.xxx
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
