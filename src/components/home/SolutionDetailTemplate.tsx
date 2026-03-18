"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { getSolutionBySlug } from "@/data/solutionData";
import { useState, useMemo, useEffect } from "react";
import MachineListTable from "../MachineListTable";
import SolutionBenefits from "./SolutionBenefits";
import EmptySolution from "./EmptySolution";
import ProductTooltip from "../ProductTooltip";

type SupportedLanguage = "vi" | "en" | "zh";

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
  const { t, language: rawLanguage } = useLanguage();
  const language = rawLanguage as SupportedLanguage;

  const [activeHotspot, setActiveHotspot] = useState<string | number | null>(
    null,
  );
  const [activeSubIdx, setActiveSubIdx] = useState(0);

  // --- STATE KHO DỮ LIỆU DÙNG CHUNG ---
  const [productsData, setProductsData] = useState<Record<string, any>>({});
  const [isDataLoading, setIsDataLoading] = useState(true);

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

  // --- LOGIC FETCH DỮ LIỆU TỔNG HỢP ---
  useEffect(() => {
    const fetchSolutionProducts = async () => {
      if (!displayData?.machinePositions) return;

      setIsDataLoading(true);
      const allIds = new Set<string>();
      displayData.machinePositions.forEach((pos) => {
        if (pos.productId) allIds.add(pos.productId);
        pos.productIds?.forEach((id) => allIds.add(id));
      });

      if (allIds.size === 0) {
        setIsDataLoading(false);
        return;
      }

      try {
        const idsQuery = Array.from(allIds).join(",");
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/batch?ids=${idsQuery}`,
        );
        const data = await response.json();

        const productsMap = data.reduce((acc: any, prod: any) => {
          if (prod && prod.id) acc[prod.id] = prod;
          return acc;
        }, {});

        setProductsData(productsMap);
      } catch (error) {
        console.error("Failed to fetch products for solution", error);
      } finally {
        setIsDataLoading(false);
      }
    };

    fetchSolutionProducts();
  }, [displayData]);

  if (!solutionData || !displayData) return <EmptySolution />;

  const { config, id: solutionId } = solutionData;
  const { colorClasses, benefitIcons, hasInteractiveDiagram } = config;
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
        {/* Overview */}
        <div className="bg-white p-10 shadow-xl mb-16 rounded-[2.5rem] border border-slate-100">
          <h2 className="text-2xl font-black mb-6 uppercase tracking-tight">
            {t("solutionPages.solutionOverview")}
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
            <p>{(solutionData.overview as any)?.[language] ?? ""}</p>
            <p>{(solutionData.overview2 as any)?.[language] ?? ""}</p>
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
        <div className="bg-white p-8 md:p-12 shadow-2xl mb-16 relative z-10 rounded-[3rem] overflow-visible min-h-[400px] flex items-center justify-center border border-slate-50">
          {hasInteractiveDiagram && displayData.diagramImage ? (
            <div className="flex justify-center overflow-visible w-full">
              <div
                className={`relative w-full ${displayData.diagramMaxWidth || "max-w-4xl"}`}
              >
                <img
                  src={displayData.diagramImage}
                  alt="Diagram"
                  className="w-full h-auto"
                />

                {displayData.machinePositions?.map((pos: MachinePosition) => (
                  <div
                    key={pos.id}
                    className="absolute cursor-pointer"
                    style={{
                      left: `${pos.x}%`,
                      top: `${pos.y}%`,
                      transform: "translate(-50%, -50%)",
                      // Z-index 100 khi hover để Tooltip luôn đè lên các nút khác
                      zIndex: activeHotspot === pos.id ? 100 : 10,
                    }}
                    onMouseEnter={() => setActiveHotspot(pos.id)}
                    onMouseLeave={() => setActiveHotspot(null)}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-4 border-white shadow-lg transition-all duration-300 ${
                        activeHotspot === pos.id
                          ? "bg-orange-500 scale-150 rotate-45"
                          : "bg-blue-600"
                      }`}
                    />

                    {activeHotspot === pos.id && (
                      <ProductTooltip
                        productId={pos.productId}
                        productsData={productsData} // Bơm data đã fetch sẵn vào đây
                        language={language}
                        pos={pos}
                        colorClasses={colorClasses}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <EmptySolution />
          )}
        </div>

        {/* Machine List Table */}
        {displayData.machinePositions && (
          <MachineListTable
            machines={displayData.machinePositions}
            productsData={productsData} // Kho dữ liệu chung
            isLoading={isDataLoading} // Trạng thái loading chung
            // colorClasses={colorClasses} // Màu sắc theo Solution
            title={
              language === "zh"
                ? "工序清单"
                : language === "en"
                  ? "Process List"
                  : "Danh Sách Công Đoạn"
            }
          />
        )}

        {/* Video & Benefits... */}
        {solutionData?.diagramVideo && (
          <div className="bg-white p-8 shadow-xl rounded-[2.5rem] mb-12 border border-slate-50 overflow-hidden">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center uppercase">
              {language === "zh"
                ? "演示视频"
                : language === "en"
                  ? "Video"
                  : "Video Minh Họa"}
            </h2>
            <div className="aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src={solutionData.diagramVideo}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
        )}

        <SolutionBenefits solutionKey={solutionData.solutionKey} />
      </div>
    </div>
  );
}

export default SolutionTemplate;
