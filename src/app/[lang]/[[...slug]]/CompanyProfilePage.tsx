"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { LocalizedLink } from "@/components/LocalizedLink"; // Đảm bảo đúng path

export function CompanyProfilePage() {
  const { t, language } = useLanguage();

  const coreValues = [
    {
      titleKey: "companyProfilePage.quality",
      descKey: "companyProfilePage.qualityDesc",
      gradient: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
    },
    {
      titleKey: "companyProfilePage.reputation",
      descKey: "companyProfilePage.reputationDesc",
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      titleKey: "companyProfilePage.dedication",
      descKey: "companyProfilePage.dedicationDesc",
      gradient: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      titleKey: "companyProfilePage.development",
      descKey: "companyProfilePage.developmentDesc",
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            {t("companyProfilePage.title")}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
            {t("companyProfilePage.heroDesc")}
          </p>
          <div className="mt-10 flex justify-center">
            <div className="h-1.5 w-24 bg-white/30 rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-white animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction Section */}
        <section className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden border border-gray-100">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mt-32 opacity-40 blur-3xl"></div>
          <div className="relative">
            <div className="flex items-center mb-8">
              <div className="w-1.5 h-12 bg-blue-600 rounded-full mr-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                {t("companyProfilePage.introduction")}
              </h2>
            </div>
            <div className="space-y-6 text-gray-600 leading-loose text-lg">
              <p>
                <span className="text-blue-600 font-bold text-xl block mb-2">
                  Công ty Cổ Phần Đầu Tư Phát Triển Giang Thành
                </span>
                {t("companyProfilePage.introDesc1")}
              </p>
              <p>
                {t("companyProfilePage.introDesc2")}
                <strong className="text-blue-700 font-semibold mx-1">
                  GTG
                </strong>
                {t("companyProfilePage.introDesc3")}
              </p>
              <p className="italic border-l-4 border-blue-100 pl-4 py-2 bg-blue-50/30">
                {t("companyProfilePage.introDesc4")}
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="group bg-white hover:bg-blue-600 transition-all duration-500 shadow-xl rounded-3xl p-10 border border-gray-100 relative overflow-hidden">
            <div className="relative z-10 text-gray-900 group-hover:text-white transition-colors duration-500">
              <div className="w-16 h-16 bg-blue-100 group-hover:bg-blue-400/30 rounded-2xl flex items-center justify-center mb-8 shadow-inner transition-colors">
                <svg
                  className="w-8 h-8 text-blue-600 group-hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {t("companyProfilePage.vision")}
              </h2>
              <p className="leading-relaxed text-lg opacity-90">
                {t("companyProfilePage.visionDesc")}
              </p>
            </div>
          </div>

          <div className="group bg-white hover:bg-green-600 transition-all duration-500 shadow-xl rounded-3xl p-10 border border-gray-100 relative overflow-hidden">
            <div className="relative z-10 text-gray-900 group-hover:text-white transition-colors duration-500">
              <div className="w-16 h-16 bg-green-100 group-hover:bg-green-400/30 rounded-2xl flex items-center justify-center mb-8 shadow-inner transition-colors">
                <svg
                  className="w-8 h-8 text-green-600 group-hover:text-white"
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
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {t("companyProfilePage.mission")}
              </h2>
              <p className="leading-relaxed text-lg opacity-90">
                {t("companyProfilePage.missionDesc")}
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <section className="bg-white shadow-xl rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("companyProfilePage.coreValues")}
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, idx) => (
              <div
                key={idx}
                className="group text-center p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                >
                  {value.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">
                  {t(value.titleKey)}
                </h3>
                <p
                  className={`text-sm ${value.iconColor} font-medium leading-relaxed`}
                >
                  {t(value.descKey)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            {
              label: t("companyProfilePage.yearFounded"),
              val: "2013",
              col: "from-blue-500 to-blue-700",
            },
            {
              label: t("companyProfilePage.branches"),
              val: "05",
              col: "from-green-500 to-green-700",
            },
            {
              label: t("companyProfilePage.customers"),
              val: "750+",
              col: "from-purple-500 to-purple-700",
            },
            {
              label: t("companyProfilePage.techSupport"),
              val: "24/7",
              col: "from-orange-500 to-orange-700",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${stat.col} text-white p-8 text-center rounded-3xl shadow-lg transition-transform hover:-translate-y-2`}
            >
              <div className="text-3xl md:text-5xl font-black mb-3 tabular-nums">
                {stat.val}
              </div>
              <div className="text-white/80 text-xs md:text-sm font-bold uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Contact Section */}
        <section className="relative bg-gray-900 rounded-3xl p-10 md:p-20 text-white text-center overflow-hidden shadow-2xl">
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23 11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
              {t("companyProfilePage.contactUs")}
            </h3>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-xl font-light">
              {t("companyProfilePage.contactDesc")}
            </p>
            <a
              href="tel:0961230808"
              className="inline-flex items-center bg-white text-gray-900 px-10 py-5 font-black text-lg rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-2xl transform hover:scale-105 active:scale-95"
            >
              <svg
                className="w-6 h-6 mr-3 animate-bounce"
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
              {t("companyProfilePage.callNow")}: 0961.230.808
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
