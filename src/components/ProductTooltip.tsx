"use client";

import Image from "next/image";

interface ProductTooltipProps {
  productId?: string;
  productsData: Record<string, any>; // Nhận kho dữ liệu từ cha
  language: "vi" | "en" | "zh";
  pos: any;
  colorClasses: any;
}

const ProductTooltip = ({
  productId,
  productsData,
  language,
  pos,
  colorClasses,
}: ProductTooltipProps) => {
  // Lấy dữ liệu từ kho chung
  const product = productId ? productsData[productId] : null;

  // CSS dùng chung cho khung Tooltip (có hỗ trợ đuôi nhọn trỏ lên)
  const wrapperClasses = `
    absolute z-[100] top-full mt-4 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 
    animate-in fade-in zoom-in duration-200
    ${pos.side === "left" ? "left-0" : "right-0"}
    before:content-[''] before:absolute before:w-full before:h-6 before:-top-6 before:left-0
  `;

  // 1. TRƯỜNG HỢP: ID không tồn tại trong Database (Hiển thị Đang cập nhật)
  if (!product) {
    return (
      <div className={wrapperClasses}>
        <div className="flex flex-col items-center justify-center py-6">
          <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-3 border border-dashed border-slate-200">
            <span className="text-xl opacity-50">🛠️</span>
          </div>
          <p className="text-xs text-slate-400 italic font-medium">
            {language === "zh"
              ? "资料正在完善中..."
              : language === "en"
                ? "Product info coming soon..."
                : "Thông tin đang cập nhật..."}
          </p>
        </div>

        {/* Vẫn hiện Model đề xuất để người dùng có thông tin sơ bộ */}
        <div className="pt-3 border-t border-slate-50">
          <div className="flex flex-wrap gap-1">
            {pos.models.map((m: string, i: number) => (
              <span
                key={i}
                className={`text-[9px] px-2 py-0.5 rounded font-bold ${colorClasses.bgLight} ${colorClasses.text} uppercase`}
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 2. TRƯỜNG HỢP: Đã có dữ liệu sản phẩm
  const getProductName = () => {
    if (!product.translations) return product.id;
    const trans = product.translations.find(
      (t: any) => t.languageCode === language,
    );
    return trans?.name || product.id;
  };

  const productName = getProductName();
  const productImage = product.images?.[0];

  return (
    <div className={wrapperClasses}>
      {/* Ảnh sản phẩm */}
      {productImage ? (
        <div className="relative w-full h-36 bg-slate-50 rounded-xl mb-3 border border-slate-50 overflow-hidden flex items-center justify-center">
          <img
            src={productImage}
            alt={productName}
            className="object-contain p-2 h-40 "
            // sizes="280px"
          />
        </div>
      ) : (
        <div className="w-full h-36 bg-slate-50 rounded-xl mb-3 flex items-center justify-center border border-dashed border-slate-200">
          <span className="text-[10px] text-slate-300 italic">No image</span>
        </div>
      )}

      {/* Tên sản phẩm */}
      <h4 className="font-black text-slate-900 text-sm mb-3 leading-tight decoration-blue-600/30 underline-offset-4">
        {productName}
      </h4>

      {/* Danh sách Model */}
      <div className="pt-3 border-t border-slate-50">
        <p className="text-[9px] font-black text-slate-400 uppercase mb-2 tracking-wider">
          {language === "zh"
            ? "推荐型号"
            : language === "en"
              ? "Recommended Models"
              : "Model đề xuất"}
          :
        </p>
        <div className="flex flex-wrap gap-1.5">
          {pos.models.map((m: string, i: number) => (
            <span
              key={i}
              className={`text-[10px] px-2.5 py-1 rounded-md font-black shadow-sm border border-current/5 ${colorClasses.bgLight} ${colorClasses.text} uppercase`}
            >
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* Mẹo: Thêm một dòng nhỏ nhắc nhở người dùng click */}
      <div className="mt-3 text-center">
        <span className="text-[9px] text-blue-500 font-bold animate-pulse">
          {language === "zh"
            ? "点击表格查看详情"
            : language === "en"
              ? "See details in table below"
              : "Xem chi tiết ở bảng bên dưới"}{" "}
          ↓
        </span>
      </div>
    </div>
  );
};

export default ProductTooltip;
