"use client";

import { LocalizedLink } from "@/components/LocalizedLink";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesPage = () => {
  const { t } = useLanguage();

  // --- Data Configuration ---
  const services = [
    {
      titleKey: "services.machinesSales",
      descKey: "services.machinesSalesDesc",
      featureKeys: [
        "pages.servicesPage.newMachines",
        "pages.servicesPage.usedMachines",
        "pages.servicesPage.genuineParts",
        "pages.servicesPage.diverseBrands",
      ],
      gradient: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      path: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    },
    {
      titleKey: "pages.servicesPage.highTechEquip",
      descKey: "pages.servicesPage.highTechDesc",
      featureKeys: [
        "pages.servicesPage.patternPrinter",
        "pages.servicesPage.autoSpreader",
        "pages.servicesPage.cncCutter",
        "pages.servicesPage.productionManagement",
      ],
      gradient: "from-purple-600 to-purple-800",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      path: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
      titleKey: "pages.servicesPage.equipRental",
      descKey: "pages.servicesPage.equipRentalDesc",
      featureKeys: [
        "pages.servicesPage.shortTermRental",
        "pages.servicesPage.longTermRental",
        "pages.servicesPage.flexibleQuantity",
        "pages.servicesPage.includeMaintenance",
      ],
      gradient: "from-green-600 to-green-800",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      path: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },
    {
      titleKey: "pages.servicesPage.installTraining",
      descKey: "pages.servicesPage.installTrainingDesc",
      featureKeys: [
        "pages.servicesPage.onSiteInstall",
        "pages.servicesPage.testRun",
        "pages.servicesPage.operationTraining",
        "pages.servicesPage.maintenanceGuide",
      ],
      gradient: "from-orange-600 to-orange-800",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      path: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    },
    {
      titleKey: "pages.servicesPage.techSupport247",
      descKey: "pages.servicesPage.techSupport247Desc",
      featureKeys: [
        "pages.servicesPage.hotline247",
        "pages.servicesPage.remoteSupport",
        "pages.servicesPage.fastDispatch",
        "pages.servicesPage.onSiteTech",
      ],
      gradient: "from-indigo-600 to-indigo-800",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      path: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
    },
  ];

  const benefits = [
    {
      title: "services.subnavTitle2",
      desc: "services.desc2",
      path: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
    {
      title: "services.subnavTitle3",
      desc: "services.desc3",
      path: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      title: "services.subnavTitle4",
      desc: "services.desc4",

      path: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
      title: "services.subnavTitle5",
      desc: "services.desc5",

      path: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* --- Hero Section --- */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-8 animate-fade-in tracking-tight">
            {t("pages.servicesPage.title")}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
            {t("pages.servicesPage.heroDesc")}
          </p>
          <div className="mt-10 flex justify-center">
            <div className="h-1.5 w-32 bg-white rounded-full opacity-50"></div>
          </div>
        </div>
      </section>

      {/* --- Main Services Grid --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
            {t("services.navTitle1")}
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            {t("services.subnavTitle1")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white shadow-xl rounded-3xl overflow-hidden group hover:-translate-y-3 transition-all duration-500 border border-gray-100"
            >
              <div
                className={`h-40 bg-gradient-to-br ${service.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-20 scale-150">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-2H0v20h20v-2H0v-2h20v-2H0v-2h20v-2H0v-2h20z'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  ></div>
                </div>
                <div className="relative text-white transform group-hover:scale-110 transition-transform duration-500">
                  <svg
                    className="w-16 h-16"
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

              <div className="p-10">
                <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                  {t(service.titleKey)}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-base min-h-[60px]">
                  {t(service.descKey)}
                </p>
                <ul className="space-y-4">
                  {service.featureKeys.map((featureKey, fidx) => (
                    <li
                      key={fidx}
                      className="flex items-start text-gray-700 group/item"
                    >
                      <div
                        className={`mt-1 w-6 h-6 ${service.bgColor} rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover/item:scale-110 transition-transform`}
                      >
                        <svg
                          className={`w-4 h-4 ${service.iconColor}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">
                        {t(featureKey)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- GTG Benefits Section --- */}
      <section className="bg-gradient-to-b from-gray-50 to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
              {t("services.navTitle2")}
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 group border border-gray-50"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl flex items-center justify-center mx-auto mb-6 text-white group-hover:rotate-6 transition-all shadow-xl shadow-blue-100">
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
                      d={benefit.path}
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-4 text-xl">
                  {t(benefit.title)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t(benefit.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Action Call Section (CTA) --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative bg-blue-900 rounded-[3rem] p-12 md:p-24 text-white text-center overflow-hidden shadow-2xl">
          {/* Abstract background blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
              {t("pages.servicesPage.ctaTitle")}
            </h2>
            <p className="max-w-2xl mx-auto mb-12 text-blue-100 text-lg md:text-xl opacity-90">
              {t("pages.servicesPage.ctaDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:+84961230808"
                className="inline-flex items-center justify-center bg-white text-blue-900 px-12 py-5 rounded-2xl font-black text-lg shadow-xl hover:bg-blue-50 transition-all hover:scale-105 active:scale-95"
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
              <LocalizedLink
                href="/vi/lien-he"
                className="inline-flex items-center justify-center border-2 border-white/30 backdrop-blur-sm text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
              >
                {t("pages.servicesPage.sendRequest")}
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
