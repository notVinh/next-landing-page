"use client";

import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";
import { getProductSlug } from "../utils/slugUtils";
import { LocalizedLink } from "./LocalizedLink";

interface Machine {
  id: string | number;
  name?: string;
  nameVi?: string;
  nameZh?: string;
  models: string[];
  productId?: string;
  productIds?: string[];
  productLink?: string;
}

interface MachineListTableProps {
  machines: Machine[];
  allProducts: any;
  colorClasses?: {
    gradient: string;
    bgLight: string;
    text: string;
    border: string;
  };
  title?: string;
}

export default function MachineListTable({
  machines,
  allProducts,
  colorClasses,
  title,
}: MachineListTableProps) {
  const { language } = useLanguage();

  if (!machines || machines.length === 0) return null;

  // Màu mặc định nếu không truyền colorClasses từ solutionData
  const defaultColors = {
    gradient: "from-cyan-500 to-cyan-700",
    bgLight: "bg-cyan-100",
    text: "text-cyan-600",
    border: "border-cyan-200",
  };

  const colors = colorClasses || defaultColors;

  const getMachineName = (machine: Machine) => {
    if (language === "zh") return machine.nameZh || machine.name;
    if (language === "en") return machine.name;
    return machine.nameVi || machine.name;
  };

  const getProductInfo = (machine: Machine) => {
    const productIdList =
      machine.productIds || (machine.productId ? [machine.productId] : []);
    return productIdList.map((id) => allProducts?.[id]).filter(Boolean);
  };

  const getProductName = (product: any) => {
    if (!product) return null;
    if (language === "zh") return product.nameZh;
    if (language === "en") return product.nameEn;
    return product.name;
  };

  const getProductLink = (product: any) => {
    if (!product) return "#";
    const slug = getProductSlug(product, language);
    // Đường dẫn chuẩn Next.js
    return `/san-pham/may-may-lap-trinh/kho-lon/${slug}`;
  };

  return (
    <div className="bg-white p-4 md:p-8 shadow-xl rounded-xl mb-12 border border-gray-100">
      {title && (
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center italic uppercase tracking-wider">
          {title}
        </h2>
      )}

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full border-collapse min-w-[700px]">
          <thead>
            <tr className={`bg-gradient-to-r ${colors.gradient} text-white`}>
              <th className="px-4 py-4 text-left text-xs md:text-sm font-bold w-16">
                {language === "zh" ? "序号" : language === "en" ? "No." : "STT"}
              </th>
              <th className="px-4 py-4 text-left text-xs md:text-sm font-bold min-w-[150px]">
                {language === "zh"
                  ? "工序名称"
                  : language === "en"
                    ? "Process Name"
                    : "Tên công đoạn"}
              </th>
              <th className="px-4 py-4 text-left text-xs md:text-sm font-bold w-32 text-center">
                {language === "zh"
                  ? "图片"
                  : language === "en"
                    ? "Image"
                    : "Hình ảnh"}
              </th>
              <th className="px-4 py-4 text-left text-xs md:text-sm font-bold">
                {language === "zh"
                  ? "推荐型号"
                  : language === "en"
                    ? "Recommended Models"
                    : "Mã máy"}
              </th>
              <th className="px-4 py-4 text-left text-xs md:text-sm font-bold">
                {language === "zh"
                  ? "产品详情"
                  : language === "en"
                    ? "Product Details"
                    : "Chi tiết"}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {machines.map((machine, idx) => {
              const products = getProductInfo(machine);
              const firstProduct = products[0];
              const productImage = firstProduct?.images?.[0];

              return (
                <tr
                  key={machine.id}
                  className="hover:bg-blue-50/30 transition-all duration-200"
                >
                  <td className="px-4 py-4 text-gray-500 font-mono text-xs md:text-sm">
                    {String(idx + 1).padStart(2, "0")}
                  </td>
                  <td className="px-4 py-4">
                    <span className="font-semibold text-gray-800 text-xs md:text-sm block leading-tight">
                      {getMachineName(machine)}
                    </span>
                  </td>
                  <td className="px-4 py-4 flex justify-center">
                    {productImage ? (
                      <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white p-1 rounded-md border border-gray-100 shadow-sm">
                        <Image
                          src={productImage}
                          alt={getMachineName(machine) || "Machine"}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 64px, 80px"
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-16 h-16 md:w-20 md:h-20 ${colors.bgLight} rounded flex items-center justify-center`}
                      >
                        <span className={`${colors.text} text-[10px] italic`}>
                          No Image
                        </span>
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-wrap gap-1.5">
                      {machine.models.map(
                        (model, midx) =>
                          model && (
                            <span
                              key={midx}
                              className={`text-[10px] md:text-xs font-bold ${colors.bgLight} ${colors.text} px-2 py-1 rounded-full border border-current/20`}
                            >
                              {model}
                            </span>
                          ),
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    {products.length > 0 ? (
                      <div className="flex flex-col gap-2">
                        {products.map((product, pidx) => (
                          <LocalizedLink
                            key={pidx}
                            href={getProductLink(product)}
                            className={`text-xs md:text-sm ${colors.text} hover:opacity-70 font-bold flex items-center gap-1 group`}
                          >
                            <span className="border-b border-current leading-none">
                              {getProductName(product)}
                            </span>
                            <span className="group-hover:translate-x-1 transition-transform">
                              →
                            </span>
                          </LocalizedLink>
                        ))}
                      </div>
                    ) : machine.productLink ? (
                      <LocalizedLink
                        href={machine.productLink}
                        className={`text-xs md:text-sm ${colors.text} hover:opacity-70 font-bold italic`}
                      >
                        {language === "zh"
                          ? "查看详情"
                          : language === "en"
                            ? "View Details"
                            : "Xem chi tiết"}{" "}
                        →
                      </LocalizedLink>
                    ) : (
                      <span className="text-xs text-gray-400 italic">
                        {language === "zh"
                          ? "更新中..."
                          : language === "en"
                            ? "Updating..."
                            : "Đang cập nhật..."}
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
