import ProductDetailDesc from "@/components/ProductDetailDesc";
import QuoteModal from "@/components/QuoteModal";
import { getProductById } from "@/lib/queries/product";
import {
  CheckCircleIcon,
  LightbulbIcon,
  PlayIcon,
  TableIcon,
  Settings2,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { notFound } from "next/navigation";

const translationDetail = {
  vi: {
    opening1: "Phản hồi",
    openDesc1: "Nhanh",
    opening2: "Công nghệ",
    openDesc2: "Tiên tiến",
    opening3: "Bảo hành",
    openDesc3: "24 Tháng",
    spec: "Thông số",
    feature: "Đặc điểm",
    contact: "Cần hỗ trợ ngay?",
    contactDesc: "Liên hệ với kỹ thuật GTG",
  },
  en: {
    opening1: "Response",
    openDesc1: "Fast",
    opening2: "Technology",
    openDesc2: "Advanced",
    opening3: "Guarantee",
    openDesc3: "24 Month",
    spec: "Specifications",
    feature: "Key Features",
    contact: "Help Now?",
    contactDesc: "Contact GTG technical support",
  },
  zh: {
    opening1: "反馈",
    openDesc1: "快速地",
    opening2: "技术",
    openDesc2: "先进的",
    opening3: "保证",
    openDesc3: "24个月",
    spec: "规格",
    feature: "主要特点",
    contact: "需要立即帮助吗？",
    contactDesc: "请联系 GTG 技术支持",
  },
};

export default async function ProductDetailPage({
  productSlug,
  lang = "vi",
}: {
  productSlug: string;
  lang: string;
}) {
  if (!productSlug) return notFound();

  let product;
  try {
    product = await getProductById(productSlug);
    if (!product || !product.id) return notFound();
  } catch (error) {
    console.error("SEO Error Fetching Product:", error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        Lỗi tải dữ liệu...
      </div>
    );
  }

  const currentProduct = product.translations?.find(
    (trans: any) => trans.languageCode === lang,
  );
  if (!currentProduct) return notFound();

  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1: HERO BANNER (Giống ảnh mẫu Hikari) */}
      <div className="relative bg-blue-600 (hoặc bg-slate-900) pt-20 pb-20 overflow-hidden text-white min-h-170">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-14">
            {/* Nội dung bên trái */}
            <div className="w-full md:w-3/5 space-y-6">
              <nav className="flex text-sm text-blue-200 gap-2 mb-4">
                {/* <span>{t("nav.home") as string}</span> / <span>Products</span> /{" "} */}
                {/* <span className="text-white font-bold">{product.brand}</span> */}
              </nav>
              <h1 className="text-4xl md:text-5xl font-black leading-tight uppercase tracking-tighter">
                {currentProduct.name}
              </h1>
              <div
                className="prose max-w-none description-content font-light leading-relaxed line-clamp-4"
                dangerouslySetInnerHTML={{
                  __html: currentProduct.description
                    .replace(/<img[^>]*>/g, "")
                    .trim(),
                }}
              />
              {/* <p className="text-xl text-blue-100 max-w-xl ">
                {t.description}
              </p> */}

              <div className="flex flex-wrap gap-4 pt-4 ">
                <QuoteModal
                  productName={currentProduct.name}
                  productId={product.id}
                  lang={lang}
                />
                {/* <button className="border-2 border-white/30 hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full font-bold transition-all uppercase text-sm">
                  Download Brochure
                </button> */}
              </div>
            </div>

            {/* Ảnh sản phẩm bên phải (Tràn lề) */}
            <div className="w-full md:w-2/5 relative">
              <div className="relative z-20 transform hover:scale-105 transition-transform duration-500">
                <img
                  src={product.images[0] || "/placeholder.png"}
                  alt={currentProduct.name}
                  className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
                />
              </div>
              {/* Vòng tròn sáng phía sau ảnh */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 rounded-full blur-[100px]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: QUICK SPECS BAR (Các icon đặc điểm nhanh) */}
      <div className="bg-slate-100 border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white rounded-2xl shadow-sm text-blue-600">
                <Zap size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500">
                  {
                    translationDetail[lang as keyof typeof translationDetail]
                      .opening1
                  }
                </p>
                <p className="font-bold">
                  {
                    translationDetail[lang as keyof typeof translationDetail]
                      .openDesc1
                  }
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white rounded-2xl shadow-sm text-blue-600">
                <Settings2 size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500">
                  {
                    translationDetail[lang as keyof typeof translationDetail]
                      .opening2
                  }
                </p>
                <p className="font-bold">
                  {
                    translationDetail[lang as keyof typeof translationDetail]
                      .openDesc2
                  }
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white rounded-2xl shadow-sm text-blue-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500">
                  {
                    translationDetail[lang as keyof typeof translationDetail]
                      .opening3
                  }
                </p>
                <p className="font-bold">
                  {
                    translationDetail[lang as keyof typeof translationDetail]
                      .openDesc3
                  }
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white rounded-2xl shadow-sm text-blue-600">
                <TableIcon size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500">Model</p>
                <p className="font-bold">{product.id}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: THÔNG SỐ CHI TIẾT & TÍNH NĂNG */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-16"> */}
        <div className="flex flex-col gap-16">
          {/* Cột trái: Bảng thông số */}
          <div className="lg:col-span-2">
            {currentProduct.specs?.length > 0 && (
              <div>
                <h2 className="text-3xl font-black mb-10 flex items-center gap-4 uppercase">
                  <span className="w-12 h-1 bg-blue-600"></span>
                  {
                    translationDetail[lang as keyof typeof translationDetail]
                      .spec
                  }
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {currentProduct.specs?.map((spec: any, idx: number) => (
                    <div
                      key={idx}
                      className="flex justify-between py-4 border-b border-slate-100 hover:bg-slate-50 transition px-2"
                    >
                      <span className="text-slate-500 font-medium">
                        {spec.label}
                      </span>
                      <span className="text-slate-900 font-bold">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* Cột phải: Features & Support */}
            <div className=" mt-10">
              {currentProduct.features?.length > 0 && (
                <div className="bg-slate-900 rounded-[2rem] p-10 text-white shadow-2xl relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <LightbulbIcon className="text-yellow-400" />
                      {
                        translationDetail[
                          lang as keyof typeof translationDetail
                        ].feature
                      }
                    </h3>
                    <ul className="space-y-5">
                      {currentProduct.features.map((f: string, i: number) => (
                        <li
                          key={i}
                          className="flex gap-4 items-start text-slate-300 text-sm"
                        >
                          <CheckCircleIcon className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/20 blur-[50px]"></div>
                </div>
              )}

              {/* <div className="p-1 border-2 border-slate-100 rounded-[2rem]">
                <div className="bg-blue-50 rounded-[1.9rem] p-8 text-center">
                  <p className="text-blue-600 font-bold mb-2 text-sm uppercase">
                    {
                      translationDetail[lang as keyof typeof translationDetail]
                        .contact
                    }
                  </p>
                  <h4 className="text-2xl font-black text-slate-900 mb-4">
                    Hotline: 09xx.xxx.xxx
                  </h4>
                  <a href="tel:0961230808">
                    <button className="w-full bg-white border border-blue-200 py-3 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                      {
                        translationDetail[
                          lang as keyof typeof translationDetail
                        ].contactDesc
                      }
                    </button>
                  </a>
                </div>
              </div> */}
            </div>

            {/* SECTION 4: DETAILED DESCRIPTION CONTENT */}
            <ProductDetailDesc
              name={currentProduct.name}
              desc={currentProduct.description}
              imgList={product.images}
              videoList={product.videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
