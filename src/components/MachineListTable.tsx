"use client";

import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";
import { getProductSlug } from "../utils/slugUtils";
import { LocalizedLink } from "./LocalizedLink";
import { useCategoriesStore } from "@/lib/zustand/useCategoriesStore";

interface Machine {
  id: string | number;
  name?: string;
  nameVi?: string;
  nameEn?: string;
  nameZh?: string;
  models: string[];
  productId?: string;
  productIds?: string[];
  productLink?: string;
}

interface MachineListTableProps {
  machines: Machine[];
  productsData: Record<string, any>; // Nhận từ SolutionTemplate
  isLoading?: boolean; // Nhận từ SolutionTemplate
  colorClasses?: {
    gradient: string;
    bgLight: string;
    text: string;
    border: string;
  };
  title?: string;
}

// Giả định các Interface này đã được khai báo ở trên hoặc import vào
interface Translation {
  languageCode: string;
  slug: string;
}

interface Category {
  id: string;
  parentId?: string | null;
  translations: Translation[];
}

interface Product {
  id: string;
  category: {
    id: string;
  };
  // translations: Translation[]; // Mở comment nếu bạn cần dùng slug của sản phẩm
}

export default function MachineListTable({
  machines,
  productsData,
  isLoading,
  colorClasses,
  title,
}: MachineListTableProps) {
  const { language } = useLanguage();
  const { categories } = useCategoriesStore();

  if (!machines || machines.length === 0) return null;

  const colors = colorClasses || {
    gradient: "from-cyan-500 to-cyan-700",
    bgLight: "bg-cyan-100",
    text: "text-cyan-600",
    border: "border-cyan-200",
  };

  // --- HELPERS ---
  const getMachineName = (machine: Machine) => {
    if (language === "zh") return machine.nameZh || machine.name;
    if (language === "en") return machine.nameEn;
    return machine.nameVi || machine.name;
  };

  const getProductInfo = (machine: Machine) => {
    const productIdList =
      machine.productIds || (machine.productId ? [machine.productId] : []);
    return productIdList.map((id) => productsData?.[id]).filter(Boolean);
  };

  const getProductName = (product: any) => {
    if (!product?.translations) return "";
    // Tìm tên theo ngôn ngữ trong mảng translations từ Backend
    const trans = product.translations.find(
      (t: any) => t.languageCode === language,
    );
    return trans?.name || product.id;
  };

  // const getProductLink = (product: any) => {
  //   const currentParrentItem = categories.find(
  //     (i) => i.id === product.category.id,
  //   );
  //   const currentParrentslug = currentParrentItem?.translations.find(
  //     (i) => i.languageCode === language,
  //   ).slug;
  //   console.log(currentParrentslug);
  //   if (!product) return "/san-pham";
  //   const slug = getProductSlug(product, language);
  //   return `/san-pham/${slug}`;
  // };

  // const getProductLink = (product: any) => {
  //   if (!product) return "/san-pham";

  //   // 1. Tìm danh mục CHA (Parent)
  //   const parentCategory = categories.find(
  //     (cat) => cat.id === product.category.id,
  //   );

  //   // 2. Tìm danh mục ÔNG NỘI (Grandparent) dựa vào parentId của cha
  //   const grandparentCategory = categories.find(
  //     (cat) => cat.id === parentCategory?.parentId,
  //   );

  //   // 3. Lấy Slug của CHA theo ngôn ngữ hiện tại
  //   const parentSlug = parentCategory?.translations?.find(
  //     (t: any) => t.languageCode === language,
  //   )?.slug;

  //   // 4. Lấy Slug của ÔNG NỘI theo ngôn ngữ hiện tại
  //   const grandparentSlug = grandparentCategory?.translations?.find(
  //     (t: any) => t.languageCode === language,
  //   )?.slug;

  //   // 5. Lấy Slug của chính SẢN PHẨM
  //   // const productSlug = getProductSlug(product, language);
  //   // const productSlug = product.translations.find(
  //   //   (i) => i.languageCode === language,
  //   // ).slug;

  //   // 6. Xây dựng URL (Giả sử cấu trúc: /san-pham/ong-noi/cha/san-pham)
  //   // Bạn có thể thêm điều kiện check nếu không có ông nội thì bỏ qua segment đó
  //   if (grandparentSlug && parentSlug) {
  //     return `/san-pham/${grandparentSlug}/${parentSlug}/${product.id}`;
  //   } else if (parentSlug) {
  //     return `/san-pham/${parentSlug}/${product.id}`;
  //   }

  //   return `/san-pham/${product.id}`;
  // };

  const getProductLink = (product: Product | null | undefined): string => {
    if (!product) return "/san-pham";

    // 1. Tìm danh mục CHA (Parent)
    // categories và language lúc này được lấy trực tiếp từ scope bên ngoài
    const parentCategory = categories.find(
      (cat: any) => cat.id === product.category.id,
    );

    // 2. Tìm danh mục ÔNG NỘI (Grandparent)
    const grandparentCategory = categories.find(
      (cat: any) => cat.id === parentCategory?.parentId,
    );

    // 3. Helper lấy slug theo ngôn ngữ hiện tại (biến language từ scope ngoài)
    const getSlug = (cat?: any): string | undefined =>
      cat?.translations?.find((t: any) => t.languageCode === language)?.slug;

    const parentSlug = getSlug(parentCategory);
    const grandparentSlug = getSlug(grandparentCategory);

    // 4. Xây dựng URL dựa trên số cấp tìm thấy
    if (grandparentSlug && parentSlug) {
      return `/san-pham/${grandparentSlug}/${parentSlug}/${product.id}`;
    }

    if (parentSlug) {
      return `/san-pham/${parentSlug}/${product.id}`;
    }

    return `/san-pham/${product.id}`;
  };

  return (
    <div className="bg-white p-4 md:p-8 shadow-xl rounded-[2.5rem] mb-12 border border-slate-100 relative overflow-hidden">
      {/* Hiệu ứng loading phủ lên bảng khi đang fetch */}
      {isLoading && (
        <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] z-30 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {title && (
        <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-8 text-center uppercase tracking-widest italic">
          {title}
        </h2>
      )}

      <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm">
        <table className="w-full border-collapse min-w-[750px]">
          <thead>
            <tr className={`bg-gradient-to-r ${colors.gradient} text-white`}>
              <th className="px-6 py-4 text-left text-xs font-black uppercase w-16">
                {language === "zh" ? "序号" : language === "en" ? "No." : "STT"}
              </th>
              <th className="px-6 py-4 text-left text-xs font-black uppercase min-w-[200px]">
                {language === "zh"
                  ? "工序名称"
                  : language === "en"
                    ? "Process Name"
                    : "Tên công đoạn"}
              </th>
              <th className="px-6 py-4 text-center text-xs font-black uppercase w-32">
                {language === "zh"
                  ? "图片"
                  : language === "en"
                    ? "Image"
                    : "Hình ảnh"}
              </th>
              <th className="px-6 py-4 text-left text-xs font-black uppercase">
                {language === "zh"
                  ? "推荐型号"
                  : language === "en"
                    ? "Recommended Models"
                    : "Mã máy"}
              </th>
              <th className="px-6 py-4 text-left text-xs font-black uppercase">
                {language === "zh"
                  ? "详情"
                  : language === "en"
                    ? "Details"
                    : "Chi tiết"}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {machines.map((machine, idx) => {
              const products = getProductInfo(machine);
              const hasProducts = products.length > 0;
              const firstProduct = products[0];
              const productImage = firstProduct?.images?.[0];

              return (
                <tr
                  key={machine.id}
                  className="group hover:bg-slate-50/80 transition-all duration-200"
                >
                  <td className="px-6 py-5 text-slate-400 font-mono text-sm">
                    {String(idx + 1).padStart(2, "0")}
                  </td>
                  <td className="px-6 py-5">
                    <span className="font-bold text-slate-800 text-sm block leading-tight group-hover:text-blue-600 transition-colors">
                      {getMachineName(machine)}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex justify-center">
                      {hasProducts && productImage ? (
                        <div className="relative w-20 h-20 bg-white p-1 rounded-xl border border-slate-100 shadow-sm group-hover:scale-110 transition-transform">
                          <Image
                            src={productImage}
                            alt="Machine"
                            fill
                            className="object-contain p-1"
                            sizes="80px"
                          />
                        </div>
                      ) : (
                        <div
                          className={`w-20 h-20 ${colors.bgLight} rounded-xl flex items-center justify-center border border-dashed border-slate-200`}
                        >
                          <span className="text-[10px] text-slate-400 italic text-center px-2 font-medium">
                            {language === "zh"
                              ? "更新中"
                              : language === "en"
                                ? "Updating"
                                : "Đang cập nhật"}
                          </span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-wrap gap-1.5">
                      {machine.models.map((model, midx) => (
                        <span
                          key={midx}
                          className={`text-[10px] font-black px-2.5 py-1 rounded-md border border-current/10 ${colors.bgLight} ${colors.text} uppercase tracking-tighter`}
                        >
                          {model}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    {hasProducts ? (
                      <div className="flex flex-col gap-2">
                        {products.map((p, pidx) => (
                          <LocalizedLink
                            key={pidx}
                            href={getProductLink(p)}
                            className={`text-sm font-black ${colors.text} hover:opacity-70 flex items-center gap-1 group/link`}
                          >
                            <span className="border-b-2 border-current leading-none pb-0.5">
                              {getProductName(p)}
                            </span>
                            <span className="group-hover/link:translate-x-1 transition-transform">
                              →
                            </span>
                          </LocalizedLink>
                        ))}
                      </div>
                    ) : (
                      <span className="text-xs text-slate-400 italic">
                        {language === "zh"
                          ? "资料正在完善..."
                          : language === "en"
                            ? "Coming soon..."
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
