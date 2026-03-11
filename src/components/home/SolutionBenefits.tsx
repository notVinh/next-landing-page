import { useLanguage } from "@/contexts/LanguageContext";
import React from "react";

const benefitIcons = [
  <svg
    key="icon-1"
    className="w-8 h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-7 1h.01"
    />
  </svg>,
  <svg
    key="icon-2"
    className="w-8 h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 011 1V4z"
    />
  </svg>,
  <svg
    key="icon-3"
    className="w-8 h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>,
  <svg
    key="icon-4"
    className="w-8 h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>,
];

const SolutionBenefits = ({ solutionKey }: { solutionKey: string }) => {
  const { t } = useLanguage();

  const benefitData = t(`solutionPages.${solutionKey}.benefits`) || [];

  const benefits = Array.isArray(benefitData)
    ? benefitData.map((b, idx) => ({
        ...b,
        icon: benefitIcons[idx] || benefitIcons[0],
      }))
    : [];

  return (
    <section className="pb-5 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tiêu đề */}
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-left">
          {t("solutionPages.benefits") as string}
        </h2>

        {/* Grid Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center border-b-2 border-transparent hover:border-blue-500"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-sm flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-blue-500 rounded-sm p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("solutionPages.needConsult") as string}
            </h2>
            <p className="text-lg opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed">
              {t("solutionPages.consultDesc") as string}
            </p>
            <button className="bg-white text-blue-500 font-bold py-4 px-10 rounded-sm hover:bg-gray-100 transition-colors uppercase tracking-wider">
              {t("common.contactUs") as string}
            </button>
          </div>

          {/* Trang trí nhẹ phía sau (tùy chọn) */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
        </div>
      </div>
    </section>
  );
};

export default SolutionBenefits;
