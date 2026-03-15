"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import {
  Box,
  Cpu,
  Globe,
  History,
  Laptop,
  ShieldCheck,
  Target,
  ChevronRight,
  Award,
  Zap,
  Activity,
} from "lucide-react";

export function CompanyProfilePage() {
  const { t } = useLanguage();
  const prefix = "companyProfilePage.";

  // Dữ liệu cho Giá trị cốt lõi (Core Values)
  const coreValues = [
    {
      title: "quality",
      desc: "qualityDesc",
      color: "text-green-600",
      bg: "bg-green-50",
      grad: "from-green-500 to-green-600",
      icon: <Award />,
    },
    {
      title: "reputation",
      desc: "reputationDesc",
      color: "text-blue-600",
      bg: "bg-blue-50",
      grad: "from-blue-500 to-blue-600",
      icon: <ShieldCheck />,
    },
    {
      title: "dedication",
      desc: "dedicationDesc",
      color: "text-red-600",
      bg: "bg-red-50",
      grad: "from-red-500 to-red-600",
      icon: <Zap />,
    },
    {
      title: "development",
      desc: "developmentDesc",
      color: "text-purple-600",
      bg: "bg-purple-50",
      grad: "from-purple-500 to-purple-600",
      icon: <Activity />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION - Tối giản & Hiện đại */}
      <section className="relative bg-blue-600 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30L0 0h60L30 30z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          {/* <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase bg-blue-600/20 text-blue-400 rounded-full border border-blue-500/30">
            Establish Since 2013
          </span> */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            {t(`${prefix}title`)}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            {t(`${prefix}heroDesc`)}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        {/* 2. TỔNG QUAN THƯƠNG HIỆU - Thiết kế Card nổi */}
        <section className="bg-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-[2.5rem] p-8 md:p-16 border border-gray-100">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <div className="flex items-center mb-6">
                <div className="w-2 h-8 bg-blue-600 rounded-full mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {t(`${prefix}brandTitle`)}
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-loose mb-8">
                <strong className="text-blue-600">Giang Thành (GTG)</strong>{" "}
                {t(`${prefix}brandIntroduction`)}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex items-center p-4 bg-gray-50 rounded-2xl border border-gray-100 group hover:bg-blue-50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-blue-600 mr-4 group-hover:scale-110 transition-transform">
                      <ShieldCheck size={20} />
                    </div>
                    <span className="font-semibold text-gray-800">
                      {t(`${prefix}brandBenefit${i}`)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-blue-600 rounded-[2rem] p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10 -mr-16 -mt-16">
                <Globe size={240} />
              </div>
              <h3 className="text-xl font-bold mb-6 relative z-10">
                {t(`${prefix}brandModelTitle`)}
              </h3>
              <ul className="space-y-6 relative z-10">
                {[
                  { icon: <Cpu />, key: "brandModelRnd" },
                  { icon: <Laptop />, key: "brandModelMarket" },
                  { icon: <Globe />, key: "brandModelNetwork" },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="mt-1 mr-4 p-2 bg-white/20 rounded-lg">
                      {item.icon}
                    </div>
                    <p className="text-blue-50 leading-snug">
                      {t(`${prefix}${item.key}`)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 3. LỊCH SỬ & HỆ SINH THÁI - Layout 2 cột */}
        <div className="grid lg:grid-cols-2 gap-8 my-16">
          <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-200">
            <h3 className="text-2xl font-bold mb-8 flex items-center text-gray-900">
              <History className="mr-3 text-blue-600" />{" "}
              {t(`${prefix}historyTitle`)}
            </h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[13px] before:w-0.5 before:bg-blue-200">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative pl-10">
                  <div className="absolute left-0 w-7 h-7 bg-white border-4 border-blue-500 rounded-full z-10"></div>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    {t(`${prefix}historyMilestone${i}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#f8fafc] p-10 rounded-[2.5rem] border border-blue-100 shadow-inner">
            <h3 className="text-2xl font-bold mb-8 flex items-center text-gray-900">
              <Cpu className="mr-3 text-blue-600" />{" "}
              {t(`${prefix}ecosystemTitle`)}
            </h3>
            <div className="space-y-8">
              {["RnD", "Prod", "Sol"].map((group) => (
                <div key={group} className="bg-white p-6 rounded-2xl shadow-sm">
                  <span className="text-xs font-black text-blue-500 uppercase tracking-widest mb-3 block">
                    {t(`${prefix}ecosystem${group}Title`)}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3].map((n) => (
                      <span
                        key={n}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-sm font-medium"
                      >
                        {t(`${prefix}ecosystem${group}${n}`)}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. DANH MỤC SẢN PHẨM - Grid Cards */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t(`${prefix}productGroup1`)} & {t(`${prefix}productGroup2`)}
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              {t(`${prefix}introDesc18`)}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((g) => (
              <div
                key={g}
                className="group p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Box size={24} />
                </div>
                <h4 className="font-bold text-gray-900 text-xl mb-6 leading-tight">
                  {t(`${prefix}productGroup${g}`)}
                </h4>
                <ul className="space-y-3">
                  {[1, 2, 3, 4].map((i) => {
                    const itemText = t(`${prefix}productGroup${g}Item${i}`);
                    if (itemText.includes("Item")) return null;
                    return (
                      <li
                        key={i}
                        className="flex items-center text-gray-500 text-sm group-hover:text-gray-700"
                      >
                        <ChevronRight
                          size={14}
                          className="mr-2 text-blue-400"
                        />{" "}
                        {itemText}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 5. SMART FACTORY - High-tech Banner */}
        <section className="bg-gradient-to-br from-blue-900 via-indigo-950 to-black text-white rounded-[3rem] p-10 md:p-20 relative overflow-hidden mb-20 shadow-2xl">
          <div className="absolute top-0 right-0 w-full h-full opacity-20">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0 100 L100 0 L100 100 Z"
                fill="rgba(59, 130, 246, 0.2)"
              />
            </svg>
          </div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                {t(`${prefix}solutionTitle`)}
              </h2>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="flex items-center p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-4 text-xs font-bold">
                      {i}
                    </div>
                    <span className="text-blue-100">
                      {t(`${prefix}solutionItem${i}`)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 text-center lg:text-right">
              {/* <div className="inline-block p-12 border-2 border-dashed border-blue-500/50 rounded-full animate-[spin_20s_linear_infinite]"> */}
              <div className="inline-block p-12 border-2 border-dashed border-blue-500/50 rounded-full">
                <Laptop size={120} className="text-blue-400" />
              </div>
              <p className="mt-8 text-2xl font-light tracking-[0.3em] uppercase text-blue-300">
                Industry 4.0 Ready
              </p>
            </div>
          </div>
        </section>

        {/* 6. VISION & MISSION - Optimized */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <section className="p-12 bg-blue-600 text-white rounded-[3rem] shadow-xl hover:scale-[1.02] transition-transform relative overflow-hidden group">
            <Target className="absolute -bottom-10 -right-10 w-64 h-64 text-white/10 group-hover:rotate-12 transition-transform duration-700" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                {t(`${prefix}visionTitle`)}
              </h3>
              <p className="text-xl text-blue-100 leading-relaxed font-light">
                {t(`${prefix}visionContent`)}
              </p>
            </div>
          </section>

          <section className="p-12 bg-gray-900 text-white rounded-[3rem] shadow-xl hover:scale-[1.02] transition-transform relative overflow-hidden group">
            <ShieldCheck className="absolute -bottom-10 -right-10 w-64 h-64 text-white/10 group-hover:-rotate-12 transition-transform duration-700" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                {t(`${prefix}missionTitle`)}
              </h3>
              <p className="text-xl text-gray-400 leading-relaxed font-light">
                {t(`${prefix}missionContent`)}
              </p>
            </div>
          </section>
        </div>
        {/* Core Values Section - Phong cách giống ảnh 2 */}
        <section className="bg-white shadow-xl rounded-[2rem] p-8 md:p-16 mb-16 border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t(`${prefix}coreValues`)}
            </h2>
            <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, idx) => (
              <div key={idx} className="text-center group">
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 ${
                    idx === 0
                      ? "bg-[#00c853]"
                      : idx === 1
                        ? "bg-[#1e88e5]"
                        : idx === 2
                          ? "bg-[#f44336]"
                          : "bg-[#9c27b0]"
                  }`}
                >
                  {/* Thay thế bằng icon thực tế từ Lucide hoặc SVG của bạn */}
                  {value.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">
                  {t(`${prefix}${value.title}`)}
                </h3>
                <p
                  className={`text-sm leading-relaxed px-4 ${
                    idx === 0
                      ? "text-[#00c853]"
                      : idx === 1
                        ? "text-[#1e88e5]"
                        : idx === 2
                          ? "text-[#f44336]"
                          : "text-[#9c27b0]"
                  }`}
                >
                  {t(`${prefix}${value.desc}`)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section - Phong cách giống ảnh 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { label: "yearFounded", val: "2013", bg: "bg-[#2962ff]" },
            { label: "branches", val: "05", bg: "bg-[#00c853]" },
            { label: "customers", val: "750+", bg: "bg-[#9c27b0]" },
            { label: "techSupport", val: "24/7", bg: "bg-[#ff6d00]" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`${stat.bg} text-white p-8 text-center rounded-3xl shadow-lg transition-transform hover:-translate-y-2`}
            >
              <div className="text-4xl md:text-5xl font-black mb-3">
                {stat.val}
              </div>
              <div className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-90">
                {t(`${prefix}${stat.label}`)}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Contact Section - Phong cách giống ảnh 1 */}
        <section className="relative bg-[#4672da] rounded-[2rem] p-10 md:p-20 text-white text-center overflow-hidden shadow-2xl">
          {/* Pattern chấm bi chìm (Dot pattern) */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          ></div>

          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              {t(`${prefix}contactUs`)}
            </h3>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
              {t(`${prefix}contactDesc`)}
            </p>
            <a
              href="tel:+84961230808"
              className="inline-flex items-center bg-white text-gray-900 px-8 py-4 font-bold text-lg rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-xl transform active:scale-95"
            >
              <svg
                className="w-6 h-6 mr-3 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {t(`${prefix}callNow`)}: 0961.230.808
            </a>
          </div>
        </section>
      </div>
      <div className="h-20" />
    </div>
  );
}
