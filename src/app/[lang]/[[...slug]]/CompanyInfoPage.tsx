"use client";

import { LocalizedLink } from "@/components/LocalizedLink";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

// --- Imports Assets ---

const CompanyInfoPage = () => {
  const { t } = useLanguage();

  // --- Data Sections ---
  const companyPages = [
    {
      titleKey: "companyInfoPage.companyProfile",
      descKey: "companyInfoPage.companyProfileDesc",
      link: "/ho-so-cong-ty",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    },
    {
      titleKey: "companyInfoPage.historyTitle",
      descKey: "companyInfoPage.historyDesc",
      link: "/lich-su",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      titleKey: "companyInfoPage.servicesTitle",
      descKey: "companyInfoPage.servicesDesc",
      link: "/dich-vu",
      icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
  ];

  const services = [
    {
      titleKey: "companyInfoPage.machineSales",
      descKey: "companyInfoPage.machineSalesDesc",
      img: "/images/anhcty/z7357057851643_e5ed4819b4fea88be99ec5d5e8222d82.jpg",
      path: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    },
    {
      titleKey: "companyInfoPage.highTech",
      descKey: "companyInfoPage.highTechDesc",
      img: "/images/anhcty/z7357057858841_8c02e50cd28264575081aceabc7dada2.jpg",
      path: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
      titleKey: "companyInfoPage.rental",
      descKey: "companyInfoPage.rentalDesc",
      img: "/images/anhcty/z7357057880459_819d8354366dc28559d7e52aca2e0239.jpg",
      path: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },
    {
      titleKey: "companyInfoPage.techSupportTitle",
      descKey: "companyInfoPage.techSupportDesc",
      img: "/images/anhcty/z7357057851643_e5ed4819b4fea88be99ec5d5e8222d82.jpg",
      path: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
    },
  ];

  const coreValues = [
    {
      titleKey: "companyInfoPage.qualityTitle",
      descKey: "companyInfoPage.qualityDesc",
      path: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      titleKey: "companyInfoPage.innovationTitle",
      descKey: "companyInfoPage.innovationDesc",
      path: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      titleKey: "companyInfoPage.trustTitle",
      descKey: "companyInfoPage.trustDesc",
      path: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    },
    {
      titleKey: "companyInfoPage.professionalTitle",
      descKey: "companyInfoPage.professionalDesc",
      path: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* --- Hero Section --- */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;...')]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            {t("companyInfoPage.title")}
          </h1>
          <p className="text-base sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {t("companyInfoPage.heroDesc")}
          </p>
          <div className="mt-8 flex justify-center">
            <div className="h-1.5 w-24 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* --- Main Navigation Grid --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyPages.map((page, index) => (
            <LocalizedLink
              key={index}
              href={page.link}
              className="bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group rounded-2xl border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d={page.icon}
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {t(page.titleKey)}
              </h2>
              <p className="text-gray-600 mb-6 text-sm">{t(page.descKey)}</p>
              <span className="text-blue-600 font-semibold inline-flex items-center text-sm">
                {t("companyInfoPage.viewDetails")}
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </LocalizedLink>
          ))}
        </div>

        {/* --- About GTG Detail --- */}
        <div className="mt-20 bg-white p-6 md:p-12 shadow-2xl rounded-3xl overflow-hidden border border-gray-50">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                  {t("companyInfoPage.aboutGT")}
                </h2>
                <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                    text: <>{t("companyInfoPage.aboutDesc1")}</>,
                  },
                  {
                    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04",
                    text: (
                      <>
                        {t("companyInfoPage.aboutDesc2")}{" "}
                        <strong className="text-blue-600 font-bold">GTG</strong>{" "}
                        {t("companyInfoPage.aboutDesc3")}
                      </>
                    ),
                  },
                  {
                    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
                    text: t("companyInfoPage.aboutDesc4"),
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-5 items-start bg-gray-50 p-4 rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-white shadow-md rounded-lg flex items-center justify-center text-blue-600">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={item.icon}
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base pt-2">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Images & Stats Layer */}
            <div className="relative h-[500px] w-full group">
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={
                    "/images/anhcty/z7357057873138_f5d9301a5985ee9a734b6cafc275579a.jpg"
                  }
                  alt="GTG"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"></div>
              </div>

              {/* Floating Stat Grid */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
                {[
                  { n: "2015", l: t("companyInfoPage.yearFounded") },
                  { n: "3", l: t("companyInfoPage.branches") },
                  { n: "500+", l: t("companyInfoPage.customers") },
                  { n: "24/7", l: t("companyInfoPage.techSupport") },
                ].map((s, idx) => (
                  <div
                    key={idx}
                    className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl text-center"
                  >
                    <div className="text-2xl font-black text-blue-700">
                      {s.n}
                    </div>
                    <div className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- Business Areas (Services) --- */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("companyInfoPage.businessAreas")}
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={service.img}
                    alt={t(service.titleKey)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/40 transition-colors"></div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-white shadow-xl rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={service.path}
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-8 pt-10 text-center">
                  <h3 className="font-bold text-gray-900 mb-3 group-hover:text-blue-600">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {t(service.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Core Values --- */}
        <div className="mt-24 bg-blue-50 py-16 px-6 rounded-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("companyInfoPage.coreValues")}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {t("companyInfoPage.coreValuesDesc")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {coreValues.map((v, i) => (
              <div key={i} className="space-y-4 group">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-3xl flex items-center justify-center mx-auto shadow-lg group-hover:rotate-6 transition-transform">
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
                      d={v.path}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {t(v.titleKey)}
                </h3>
                <p className="text-gray-500 text-sm">{t(v.descKey)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Branch System --- */}
        <div className="mt-24 relative rounded-3xl overflow-hidden bg-gray-900 text-white p-8 md:p-16">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600 -skew-x-12 translate-x-1/4 opacity-20"></div>
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              {t("companyInfoPage.branchSystem")}
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  name: t("companyInfoPage.northHeadquarters"),
                  addr: "TT03-03 số 190 Sài Đồng, Long Biên, Hà Nội",
                },
                {
                  name: t("companyInfoPage.central"),
                  addr: "968 Trần Thủ Độ, TX. Điện Bàn, Quảng Nam",
                },
                {
                  name: t("companyInfoPage.south"),
                  addr: "330 Bùi Văn Ngữ, P. Hiệp Thành, Q.12, TP.HCM",
                },
              ].map((branch, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-xl mb-6 flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{branch.name}</h3>
                  <p className="text-gray-400 text-sm leading-loose mb-6">
                    {branch.addr}
                  </p>
                  <a
                    href="tel:+84961230808"
                    className="text-blue-400 font-bold hover:text-blue-300"
                  >
                    +84 0961.230.808
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- Final CTA --- */}
        <div className="mt-24 text-center space-y-8 bg-gradient-to-b from-white to-blue-50 py-20 rounded-3xl border border-blue-100 shadow-sm">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
            {t("companyInfoPage.needConsult")}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t("companyInfoPage.needConsultDesc")}
          </p>
          <a
            href="tel:+84961230808"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-200 transition-all hover:scale-105 active:scale-95"
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
            {t("companyInfoPage.callNow")}: 0961.230.808
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfoPage;
