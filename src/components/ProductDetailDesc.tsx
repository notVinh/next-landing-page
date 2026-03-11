"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { ShieldCheck } from "lucide-react";

const ProductDetailDesc = ({ name, desc }: { name: string; desc: string }) => {
  const { t } = useLanguage();
  return (
    <div className="bg-slate-50 border-t border-slate-100 py-20 mt-6 rounded-xl">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight mb-4">
            {t("productSubcategories.detailText") as string}
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-500 font-medium">
            {t("productSubcategories.detailEnd") as string}
            {name}`
          </p>
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
              __html: desc,
            }}
          />
        </div>

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
