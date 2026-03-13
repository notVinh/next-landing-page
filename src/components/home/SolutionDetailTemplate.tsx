"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { allProducts, getSolutionBySlug } from "@/data/solutionData";
import { useState, useMemo } from "react";
import MachineListTable from "../MachineListTable";
import SolutionBenefits from "./SolutionBenefits";
import EmptySolution from "./EmptySolution";

// --- 1. ĐỊNH NGHĨA TYPES ĐỂ FIX LỖI INDEX SIGNATURE ---
type SupportedLanguage = "vi" | "en" | "zh";

// Định nghĩa cấu trúc Product để khớp với dữ liệu từ data
interface Product {
  name: string;
  nameEn: string;
  nameZh: string;
  images: string[];
}

// Fix lỗi dòng 184: Ép kiểu allProducts thành Record để cho phép truy cập bằng biến string
const typedAllProducts = allProducts as Record<string, Product>;

interface MachinePosition {
  id: string | number;
  x: number;
  y: number;
  side?: "left" | "right";
  productIds?: string[];
  productId?: string;
  nameZh?: string;
  name?: string;
  nameVi?: string;
  models: string[];
}

interface SubSolution {
  id: string | number;
  tabName: Record<string, string>;
  diagramImage: string;
  machinePositions: MachinePosition[];
  diagramMaxWidth?: string;
}

interface SolutionTemplateProps {
  slug: string;
}

function SolutionTemplate({ slug }: SolutionTemplateProps) {
  // Lấy language và ép kiểu để TypeScript hiểu đây là key hợp lệ
  const { t, language: rawLanguage } = useLanguage();
  const language = rawLanguage as SupportedLanguage;

  const [activeHotspot, setActiveHotspot] = useState<string | number | null>(
    null,
  );
  const [activeSubIdx, setActiveSubIdx] = useState(0);

  const solutionData = getSolutionBySlug(slug);

  const hasSubTabs = !!(
    solutionData?.config?.subSolutions &&
    solutionData.config.subSolutions.length > 0
  );

  const displayData = useMemo(() => {
    if (!solutionData) return null;
    if (hasSubTabs && solutionData.config.subSolutions) {
      return solutionData.config.subSolutions[activeSubIdx] as SubSolution;
    }
    return {
      diagramImage: solutionData.config.diagramImage,
      machinePositions: solutionData.config.machinePositions,
      diagramMaxWidth: solutionData.config.diagramMaxWidth,
      tabName: {},
    } as Partial<SubSolution>;
  }, [hasSubTabs, activeSubIdx, solutionData]);

  if (!solutionData || !displayData) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <h1 className="text-xl font-bold">
          {language === "zh"
            ? "未找到"
            : language === "en"
              ? "Not Found"
              : "Không tìm thấy"}
        </h1>
      </div>
    );
  }

  const { config, id: solutionId } = solutionData;
  const { colorClasses, benefitIcons, hasInteractiveDiagram } = config;

  const translationKey = `solutionPages.${solutionId}`;
  const rawBenefits = t(`${translationKey}.benefits`);
  const benefits = Array.isArray(rawBenefits)
    ? rawBenefits.map((b: any, idx: number) => ({
        ...b,
        icon: benefitIcons[idx] || benefitIcons[0],
      }))
    : [];

  const renderIcon = (iconString: string) => (
    <div dangerouslySetInnerHTML={{ __html: iconString }} />
  );
  const nameRelu = solutionData.translations?.find(
    (i) => i.languageCode === language,
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px] w-full flex items-center overflow-hidden bg-[#1a1a1a]">
        <div className="absolute inset-0 bg-blue-900/40 z-10" />
        <img
          src="/gtg_bg.png"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
          alt="Banner"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-white">
          <h1 className="text-4xl md:text-5xl font-black uppercase border-l-8 border-blue-600 pl-8">
            {nameRelu?.title}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* FIX LỖI DÒNG 108: ÉP KIỂU RECORD CHO OVERVIEW */}
        <div className="bg-white p-10 shadow-xl mb-16 rounded-[2.5rem] border border-slate-100">
          <h2 className="text-2xl font-black mb-6 uppercase">
            {t("solutionPages.solutionOverview")}
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
            <p>
              {(solutionData.overview as Record<SupportedLanguage, string>)?.[
                language
              ] ?? ""}
            </p>
            <p>
              {(solutionData.overview2 as Record<SupportedLanguage, string>)?.[
                language
              ] ?? ""}
            </p>
          </div>
        </div>

        {/* Tab Selection */}
        {hasSubTabs && config.subSolutions && (
          <div className="flex flex-wrap justify-center gap-4 mb-12 border-b">
            {config.subSolutions.map((sub: any, idx: number) => (
              <button
                key={sub.id}
                onClick={() => {
                  setActiveSubIdx(idx);
                  setActiveHotspot(null);
                }}
                className={`px-8 py-4 text-sm font-black uppercase transition-all border-b-4 -mb-[2px] ${
                  activeSubIdx === idx
                    ? `${colorClasses.text} border-current`
                    : "text-slate-400 border-transparent"
                }`}
              >
                {sub.tabName[language] || sub.tabName["vi"]}
              </button>
            ))}
          </div>
        )}

        {/* Interactive Diagram Section */}
        <div className="bg-white p-8 md:p-12 shadow-2xl mb-16 relative z-10 rounded-[3rem] overflow-visible min-h-[400px] flex items-center justify-center">
          {hasInteractiveDiagram && displayData.diagramImage ? (
            /* TRƯỜNG HỢP CÓ SƠ ĐỒ */
            <div className="flex justify-center overflow-visible w-full">
              <div
                className={`relative w-full ${displayData.diagramMaxWidth || "max-w-4xl"}`}
              >
                <img
                  src={displayData.diagramImage}
                  alt="Diagram"
                  className="w-full h-auto"
                />

                {displayData.machinePositions?.map((pos: MachinePosition) => {
                  const productIdList =
                    pos.productIds || (pos.productId ? [pos.productId] : []);

                  const products = productIdList
                    .map((id) => typedAllProducts[id])
                    .filter(Boolean);

                  const firstProduct = products[0];

                  return (
                    <div
                      key={pos.id}
                      className="absolute cursor-pointer"
                      style={{
                        left: `${pos.x}%`,
                        top: `${pos.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      onMouseEnter={() => setActiveHotspot(pos.id)}
                      onMouseLeave={() => setActiveHotspot(null)}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-4 border-white shadow-lg transition-all ${
                          activeHotspot === pos.id
                            ? "bg-orange-500 scale-150"
                            : "bg-blue-600"
                        }`}
                      />

                      {/* Tooltip Content */}
                      {/* {activeHotspot === pos.id && (
                        <div
                          className={`absolute z-[100] top-full mt-4 w-72 bg-white rounded-2xl shadow-2xl border p-4 ${
                            pos.side === "left" ? "left-0" : "right-0"
                          }`}
                        >
                          {firstProduct?.images?.[0] && (
                            <img
                              src={firstProduct.images[0]}
                              className="w-full h-32 object-contain mb-3"
                              alt=""
                            />
                          )}
                          <h4 className="font-bold text-slate-900 text-sm mb-2">
                            {firstProduct
                              ? language === "zh"
                                ? firstProduct.nameZh
                                : language === "en"
                                  ? firstProduct.nameEn
                                  : firstProduct.name
                              : pos.nameVi}
                          </h4>
                          <div className="pt-2 border-t">
                            <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">
                              Model đề xuất:
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {pos.models.map((m, i) => (
                                <span
                                  key={i}
                                  className={`text-[10px] px-2 py-0.5 rounded font-bold ${colorClasses.bgLight} ${colorClasses.text}`}
                                >
                                  {m}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )} */}
                      {/* Tooltip Content */}
                      {activeHotspot === pos.id && (
                        <div
                          className={`absolute z-[100] top-full mt-4 w-72 bg-white rounded-2xl shadow-2xl border p-4 
      ${pos.side === "left" ? "left-0" : "right-0"}
      
      /* Lớp đệm vô hình kết nối Node và Tooltip */
      before:content-[''] before:absolute before:w-full before:h-6 before:-top-6 before:left-0`}
                        >
                          {/* ... giữ nguyên nội dung bên trong (images, h4, models) ... */}
                          {firstProduct?.images?.[0] && (
                            <img
                              src={firstProduct.images[0]}
                              className="w-full h-32 object-contain mb-3"
                              alt=""
                            />
                          )}
                          <h4 className="font-bold text-slate-900 text-sm mb-2">
                            {firstProduct
                              ? language === "zh"
                                ? firstProduct.nameZh
                                : language === "en"
                                  ? firstProduct.nameEn
                                  : firstProduct.name
                              : pos.nameVi}
                          </h4>
                          <div className="pt-2 border-t">
                            <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">
                              Model đề xuất:
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {pos.models.map((m, i) => (
                                <span
                                  key={i}
                                  className={`text-[10px] px-2 py-0.5 rounded font-bold ${colorClasses.bgLight} ${colorClasses.text}`}
                                >
                                  {m}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* TRƯỜNG HỢP KHÔNG CÓ SƠ ĐỒ - HIỆN COMPONENT TRỐNG */
            <EmptySolution />
          )}
        </div>

        {/* Machine List Table */}
        {displayData.machinePositions && (
          <MachineListTable
            machines={displayData.machinePositions}
            allProducts={typedAllProducts as any}
            // colorClasses={colorClasses}
            title={
              language === "zh"
                ? "工序清单"
                : language === "en"
                  ? "Process List"
                  : "Danh Sách Công Đoạn"
            }
          />
        )}
        {solutionData?.diagramVideo && (
          <div className="bg-white p-6 md:p-8 shadow-lg mb-12 animate-on-scroll animate-from-bottom">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {language === "zh"
                ? "演示视频"
                : language === "en"
                  ? "Demonstration Video"
                  : "Video Minh Họa"}
            </h2>
            <div className="flex justify-center">
              <div className="w-full max-w-4xl aspect-video">
                <iframe
                  src={solutionData?.diagramVideo}
                  title="Demonstration Video"
                  className="w-full h-full rounded-lg shadow-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}

        <SolutionBenefits solutionKey={solutionData.solutionKey} />
      </div>
    </div>
  );
}

export default SolutionTemplate;
