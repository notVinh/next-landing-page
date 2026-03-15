"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { ShieldCheck } from "lucide-react";
import SlideUi from "./SlideUi";

const ProductDetailDesc = ({
  name,
  desc,
  imgList,
  videoList,
}: {
  name: string;
  desc: string;
  imgList: [];
  videoList: [];
}) => {
  const { t } = useLanguage();

  const cleanHtmlContent = (html: string) => {
    if (!html) return "";

    // Regex này tìm link Google Presentation (có thể nằm trong thẻ <a> hoặc là text thuần)
    // Nó sẽ xóa toàn bộ cụm đó đi
    const regex =
      /<a[^>]*href="https:\/\/docs\.google\.com\/presentation\/d\/[^"]*"[^>]*>.*?<\/a>|https:\/\/docs\.google\.com\/presentation\/d\/[a-zA-Z0-9_-]+[^\s<]*/g;

    return html.replace(regex, "").trim();
  };

  return (
    <div className="  mt-6 rounded-xl">
      <div className=" mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight mb-4">
            {/* {t("productSubcategories.detailText") as string} */}
          </h2>
          {/* <p className="mb-6  font-medium text-blue-400">
            {t("productSubcategories.detailEnd") as string} -{` `}
            {name}
          </p>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div> */}
        </div>

        {/* Nội dung Rich Text từ Editor */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-slate-100">
          <article
            className="overflow-hidden wrap-break-words prose prose-lg prose-blue max-w-none 
                prose-headings:font-black prose-headings:text-slate-900
                prose-p:text-slate-600 prose-p:leading-relaxed
                prose-img:rounded-[2rem] prose-img:shadow-2xl prose-img:mx-auto prose-img:border-8 prose-img:border-slate-50
                prose-strong:text-blue-700
                prose-a:text-blue-600 hover:prose-a:text-blue-800"
            dangerouslySetInnerHTML={{
              __html: cleanHtmlContent(desc),
            }}
          />
        </div>

        {imgList?.length > 1 && (
          <div className="flex flex-col items-center justify-center mt-20">
            {/* Tiêu đề */}
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight mb-4 text-center">
              {"Hình ảnh sản phẩm"}
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-10"></div>

            {/* Lưới hình ảnh - CHỈ 2 ITEM MỖI DÒNG */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 w-full max-w-6xl">
              {/* Item ảnh 1 */}
              {imgList?.slice(1)?.map((i, index) => (
                <div
                  key={index}
                  className="aspect-[16/10] overflow-hidden rounded-2xl shadow-md border-4 border-white bg-white transition-transform hover:scale-[1.02]"
                >
                  <img
                    src={i || "/placeholder.png"}
                    alt={"anh san pham"}
                    className="w-full h-full object-cover" // Giúp ảnh lấp đầy khung mà không bị méo
                  />
                </div>
              ))}

              {/* Nếu sau này bạn dùng vòng lặp, các ảnh tiếp theo sẽ tự động xuống dòng và vẫn giữ 2 ảnh/dòng */}
            </div>
          </div>
        )}

        {videoList?.length > 0 && (
          <div className="flex flex-col items-center justify-center mt-20">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight mb-4">
              {"Video sản phẩm"}
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
            {videoList?.map((video, index) => (
              <div className="w-full max-w-4xl aspect-video mt-5" key={index}>
                <iframe
                  src={video}
                  title="Demonstration Video"
                  className="w-full h-full rounded-lg shadow-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        )}

        <SlideUi htmlContent={desc} />

        {/* CTA Footer nhỏ bên dưới nội dung */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-100 text-blue-700 rounded-full font-bold text-sm">
            <ShieldCheck size={18} />
            {t("productSubcategories.detailEnd") as string}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailDesc;
