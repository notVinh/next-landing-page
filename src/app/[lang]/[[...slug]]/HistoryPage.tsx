"use client";

import { useLanguage } from "@/contexts/LanguageContext";

function HistoryPage() {
  const { t } = useLanguage();

  // Đảm bảo milestones luôn là một mảng để tránh lỗi .map()
  const milestones = t("historyPage.milestones") || [];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* --- Hero Section --- */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 animate-fade-in uppercase tracking-tight">
            {t("historyPage.title")}
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed italic">
            {t("historyPage.subtitle")}
          </p>
          <div className="mt-8 flex justify-center">
            <div className="h-1.5 w-24 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* --- Visual Intro Block --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2 min-h-[450px] border border-gray-100">
          {/* Image Collage with Next.js Image */}
          <div className="relative h-80 md:h-auto group overflow-hidden">
            <img
              src="/images/anhcty/z6319478886667_b8c73c692930441dcb8fa4e53c1cabfa.jpg"
              alt="Hành trình phát triển GTG"
              // fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              // placeholder="blur" // Tự động tạo blur nếu bạn import ảnh tĩnh như trên
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Text Content */}
          <div className="p-8 md:p-14 flex flex-col justify-center bg-white">
            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 rounded-full w-fit">
              Since 2013
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
              {t("historyPage.descTitle")} <br />
              <span className="text-blue-600">{t("historyPage.brand")}</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
              <p>{t("historyPage.desc1")}</p>
              <p>{t("historyPage.desc2")}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="border-l-4 border-blue-600 pl-4">
                <div className="text-2xl font-black text-gray-900">
                  2013 - {new Date().getFullYear()}
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  {t("historyPage.desc3")}
                </div>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <div className="text-2xl font-black text-gray-900">
                  {t("historyPage.descTitle4")}
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  {t("historyPage.desc4")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Timeline Section --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-100 via-blue-400 to-blue-100"></div>

          {Array.isArray(milestones) &&
            milestones.map((milestone, index) => (
              <div
                key={milestone.year || index}
                className={`flex flex-col md:flex-row items-center mb-16 md:mb-24 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}
                >
                  <div
                    className={`bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-50 group hover:-translate-y-2
                      ${index % 2 === 0 ? "md:rounded-tr-none" : "md:rounded-tl-none"}
                    `}
                  >
                    <div
                      className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : "flex-row"}`}
                    >
                      <span className="flex-shrink-0 w-14 h-14 rounded-2xl bg-blue-600 text-white font-black text-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                        {milestone.year}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                      {milestone.desc}
                    </p>
                  </div>
                </div>

                {/* Center Dot Indicator */}
                <div className="hidden md:flex w-2/12 justify-center relative">
                  <div className="z-20 w-8 h-8 bg-white border-4 border-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]"></div>
                  <div className="absolute top-4 w-full h-px bg-blue-200 -z-10"></div>
                </div>

                {/* Empty space for grid alignment */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
        </div>

        {/* --- Call to Action (CTA) --- */}
        <div className="mt-24 relative rounded-3xl overflow-hidden bg-blue-900 text-white shadow-2xl">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full filter blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600 rounded-full filter blur-[100px] opacity-30 translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative px-8 py-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
              {t("historyPage.continueJourney")}
            </h2>
            <p className="max-w-2xl mx-auto text-blue-100 text-lg md:text-xl mb-10 opacity-90">
              {t("historyPage.continueDesc")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:0961230808"
                className="inline-flex items-center justify-center bg-white text-blue-900 px-8 py-4 font-black rounded-2xl shadow-xl hover:bg-blue-50 transition-all hover:scale-105 active:scale-95"
              >
                <svg
                  className="w-6 h-6 mr-3"
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
                Hotline: 0961.230.808
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HistoryPage;
