"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Building2,
  CheckCircle2,
  ChevronRight,
  Factory,
  Mail,
  MapPin,
  Microscope,
  Phone,
  ShieldCheck,
} from "lucide-react";

function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [activeOffice, setActiveOffice] = useState(0);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(t("pages.contactPage.thankYou"));
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const offices = [
    {
      regionKey: "pages.contactPage.north",
      nameKey: "pages.contactPage.headquarters",
      address: "TT03-03 số 190 Sài Đồng, Long Biên, Hà Nội",
      phone: "+84 0961.230.808",
      email: "kinhdoanh@maymaygiangthanh.com",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.924403914!2d105.914!3d21.035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDAyJzA2LjAiTiAxMDXCsDU0JzUwLjQiRQ!5e0!3m2!1svi!2svn!4v123456789",
    },
    {
      regionKey: "pages.contactPage.central",
      nameKey: "pages.contactPage.branchQN",
      address: "968 Trần Thủ Độ, Thị Xã Điện Bàn, Quảng Nam",
      phone: "+84 0961.230.808",
      email: "kinhdoanh@maymaygiangthanh.com",
      mapUrl: "https://www.google.com/maps/embed?pb=...",
    },
    {
      regionKey: "pages.contactPage.south",
      nameKey: "pages.contactPage.branchHCM",
      address: "330 Bùi Văn Ngữ, P.Hiệp Thành, Q.12, TP.HCM",
      phone: "+84 0961.230.808",
      email: "kinhdoanh@maymaygiangthanh.com",
      mapUrl: "https://www.google.com/maps/embed?pb=...",
    },
  ];

  const branchKeys = [
    {
      id: "vietnamOffice",
      icon: <Building2 className="w-6 h-6 text-blue-600" />,
      color: "border-blue-500",
    },
    {
      id: "vietnamFactory",
      icon: <Factory className="w-6 h-6 text-orange-600" />,
      color: "border-orange-500",
    },
    {
      id: "chinaRnD",
      icon: <Microscope className="w-6 h-6 text-green-600" />,
      color: "border-green-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t("pages.contactPage.hero.title")}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {t("pages.contactPage.hero.description")}
          </p>
          <div className="mt-8 flex justify-center">
            <div className="h-1 w-24 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Quick Contact Bar */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-800 py-6 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-white">
            <a
              href="tel:+84961230808"
              className="flex items-center gap-3 hover:text-blue-200 transition-all group"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition">
                <svg
                  className="w-6 h-6"
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
              </div>
              <span className="font-bold text-lg">+84 0961.230.808</span>
            </a>
            <a
              href="mailto:kinhdoanh@maymaygiangthanh.com"
              className="flex items-center gap-3 hover:text-blue-200 transition-all group"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="font-semibold">
                kinhdoanh@maymaygiangthanh.com
              </span>
            </a>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="font-semibold">
                {t("pages.contactPage.workingHours")}
              </span>
            </div>
          </div>
        </div>
      </div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Cột trái: Tiêu đề và dẫn dắt */}
            <div className="lg:w-1/3">
              <div className="space-y-4">
                {/* <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm">
                  Lợi thế cạnh tranh
                </span> */}
                <h2 className="text-4xl font-black text-gray-950 leading-[1.1]">
                  {t("pages.contactPage.whyContact.title")}
                </h2>
                <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
                <p className="text-gray-600 text-lg pt-4 leading-relaxed">
                  {/* {t("pages.contactPage.whyContact.subtitle")} */}
                </p>

                {/* <div className="pt-6">
                  <button className="flex items-center gap-2 font-bold text-gray-900 hover:text-blue-600 transition group">
                    Khám phá năng lực sản xuất
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div> */}
              </div>
            </div>

            {/* Cột phải: Grid các lý do với Icon bên trong */}
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
              {Array.isArray(t("pages.contactPage.whyContact.reasons")) &&
                t("pages.contactPage.whyContact.reasons").map(
                  (reason: string, index: number) => (
                    <div
                      key={index}
                      className="group p-8 bg-gray-50 rounded-[2rem] border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col items-start"
                    >
                      {/* Icon nằm bên trong Card */}
                      {/* <div className={`mb-6 p-4 rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${reasonIcons[index]?.bg || 'bg-gray-100'}`}>
                  {reasonIcons[index]?.icon || <ShieldCheck className="w-6 h-6 text-blue-600" />}
                </div> */}

                      <div className="space-y-2">
                        <p className="text-lg font-bold text-gray-900 leading-snug">
                          {reason}
                        </p>
                        <div className="w-0 group-hover:w-12 h-1 bg-blue-500 transition-all duration-500 rounded-full"></div>
                      </div>
                    </div>
                  ),
                )}
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {branchKeys.map((branch) => {
              // Truy xuất dữ liệu từ t() dựa trên ID
              const title = t(`pages.contactPage.locations.${branch.id}.title`);
              const name = t(`pages.contactPage.locations.${branch.id}.name`);
              const address = t(
                `pages.contactPage.locations.${branch.id}.address`,
              );
              const hotline = t(
                `pages.contactPage.locations.${branch.id}.hotline`,
              );
              const email = t(`pages.contactPage.locations.${branch.id}.email`);
              const functions = t(
                `pages.contactPage.locations.${branch.id}.functions`,
              );

              return (
                <div
                  key={branch.id}
                  className={`bg-white rounded-2xl shadow-lg border-t-4 ${branch.color} p-6 flex flex-col h-full hover:-translate-y-1 transition-all duration-300`}
                >
                  {/* Header: Icon + Loại cơ sở */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gray-50 rounded-xl shadow-sm">
                      {branch.icon}
                    </div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      {name}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight min-h-[50px]">
                    {title}
                  </h3>

                  {/* Thông tin liên hệ */}
                  <div className="space-y-4 mb-6 flex-grow">
                    <div className="flex gap-3 text-sm text-gray-600">
                      <MapPin className="w-5 h-5 shrink-0 text-blue-500/50" />
                      <span>{address}</span>
                    </div>
                    <a
                      href={`tel:${hotline}`}
                      className="flex gap-3 text-sm font-bold text-gray-800 hover:text-blue-600"
                    >
                      <Phone className="w-5 h-5 shrink-0 text-blue-600" />
                      <span>{hotline}</span>
                    </a>
                    {/* {email && (
                      <div className="flex gap-3 text-sm text-gray-600">
                        <Mail className="w-5 h-5 shrink-0 text-blue-500/50" />
                        <span className="truncate">{email}</span>
                      </div>
                    )} */}
                  </div>

                  {/* Danh sách chức năng (Dùng mảng từ JSON) */}
                  <div className="pt-5 border-t border-gray-100">
                    <h4 className="text-[11px] font-black text-gray-400 uppercase mb-3 tracking-wider">
                      {t("pages.contactPage.missionTitle")}
                    </h4>
                    <ul className="space-y-2">
                      {Array.isArray(functions) &&
                        functions.map((fn: string, i: number) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-[13px] text-gray-700 font-medium"
                          >
                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                            <span>{fn}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Office Tabs */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {t("pages.contactPage.branchSystem")}
            </h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {offices.map((office, idx) => (
              <button
                key={idx}
                onClick={() => setActiveOffice(idx)}
                className={`px-8 py-4 font-bold text-lg rounded-xl transition-all duration-300 transform ${
                  activeOffice === idx
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl"
                }`}
              >
                {t(office.regionKey)}
              </button>
            ))}
          </div>
        </div>

        {/* Active Office Details + Map */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
            <div className="relative">
              <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 font-bold rounded-xl mb-6 shadow-lg">
                {t(offices[activeOffice].regionKey)} -{" "}
                {t(offices[activeOffice].nameKey)}
              </div>

              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {t("pages.contactPage.address")}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {offices[activeOffice].address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg
                      className="w-7 h-7 text-white"
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
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {t("pages.contactPage.phone")}
                    </h4>
                    <a
                      href={`tel:${offices[activeOffice].phone.replace(/\./g, "")}`}
                      className="text-blue-600 font-bold text-lg hover:text-blue-700 transition"
                    >
                      {offices[activeOffice].phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {t("pages.contactPage.email")}
                    </h4>
                    <a
                      href={`mailto:${offices[activeOffice].email}`}
                      className="text-blue-600 hover:text-blue-700 transition break-all"
                    >
                      {offices[activeOffice].email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {t("pages.contactPage.workingTime")}
                    </h4>
                    <p className="text-gray-600">
                      {t("pages.contactPage.workingTimeValue")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="tel:+84961230808"
                  className="w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 font-bold text-lg rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <svg
                    className="w-6 h-6 mr-2"
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
                  {t("pages.contactPage.callNow")}: +84 0961.230.808
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
            <div className="h-full min-h-[450px]">
              <iframe
                src={offices[activeOffice].mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                // allowFullScreen=
                loading="lazy"
                title={`Map ${t(offices[activeOffice].nameKey)}`}
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* All Offices Cards */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {t("pages.contactPage.allBranches")}
            </h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {offices.map((office, idx) => (
              <div
                key={idx}
                className={`bg-white p-6 md:p-8 shadow-xl rounded-xl cursor-pointer transition-all duration-300 ${
                  activeOffice === idx
                    ? "ring-4 ring-blue-500 ring-opacity-50"
                    : ""
                }`}
                onClick={() => setActiveOffice(idx)}
              >
                <div
                  className={`inline-block px-4 py-2 text-sm font-bold rounded-lg mb-4 ${
                    activeOffice === idx
                      ? "bg-blue-600 text-white"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {t(office.regionKey)}
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">
                  {t(office.nameKey)}
                </h3>
                <div className="flex items-start mb-4">
                  <svg
                    className="w-5 h-5 text-blue-600 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      strokeWidth={2}
                    />
                  </svg>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {office.address}
                  </p>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-blue-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      strokeWidth={2}
                    />
                  </svg>
                  <span className="text-blue-600 font-bold">
                    {office.phone}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About & Form Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t("pages.contactPage.aboutGT")}
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">
                    {t("pages.contactPage.company")}
                  </h4>
                  <p className="text-gray-600">
                    {t("pages.contactPage.companyName")}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">
                    {/* {t("pages.contactPage.company")} */}
                    Website
                  </h4>
                  <p className="text-gray-600">
                    {/* {t("pages.contactPage.companyName")} */}
                    GTGSEW.COM
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {t("pages.contactPage.aboutDesc")}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-5 bg-blue-50 rounded-xl  shadow">
                  <div className="text-3xl font-bold text-blue-600">13+</div>
                  <div className="text-sm font-semibold text-gray-600">
                    {t("pages.contactPage.yearsExp")}
                  </div>
                </div>
                <div className="text-center p-5 bg-green-50 rounded-xl shadow">
                  <div className="text-3xl font-bold text-green-600">5</div>
                  <div className="text-sm font-semibold text-gray-600">
                    {t("pages.contactPage.branches")}
                  </div>
                </div>
                <div className="text-center p-5 bg-purple-50 rounded-xl shadow">
                  <div className="text-3xl font-bold text-purple-600 ">
                    750+
                  </div>
                  <div className="text-sm font-semibold text-gray-600">
                    {t("pages.contactPage.customers")}
                  </div>
                </div>{" "}
                <div className="text-center p-5 bg-orange-50 rounded-xl shadow">
                  <div className="text-3xl font-bold text-orange-600">24/7</div>
                  <div className="text-sm font-semibold text-gray-600">
                    {t("pages.contactPage.techSupport")}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t("pages.contactPage.sendRequest")}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  {t("pages.contactPage.fullName")} *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
                  placeholder={t("pages.contactPage.fullNamePlaceholder")}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    {t("pages.contactPage.email")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
                    placeholder={t("pages.contactPage.emailPlaceholder")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    {t("pages.contactPage.phone")} *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
                    placeholder={t("pages.contactPage.phonePlaceholder")}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  {t("pages.contactPage.content")} *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
                  placeholder={t("pages.contactPage.contentPlaceholder")}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 font-bold rounded-lg hover:bg-blue-700 transition shadow-lg"
              >
                {t("pages.contactPage.submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
