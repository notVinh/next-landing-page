"use client";

import { Building2, Users2, Activity, PieChart } from "lucide-react";

export default function DepartmentStats() {
  // Trong thực tế, bạn sẽ dùng use(promise) hoặc truyền data từ Server Component xuống
  const stats = [
    {
      label: "Tổng phòng ban",
      value: "12",
      change: "+2 tháng này",
      icon: Building2,
      color: "blue",
    },
    {
      label: "Nhân sự định biên",
      value: "156",
      change: "85% công suất",
      icon: Users2,
      color: "indigo",
    },
    {
      label: "Đang hoạt động",
      value: "10",
      change: "2 phòng tạm dừng",
      icon: Activity,
      color: "green",
    },
    {
      label: "Hiệu suất vận hành",
      value: "94%",
      change: "+4.1% so với quý trước",
      icon: PieChart,
      color: "orange",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="group relative bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 overflow-hidden"
        >
          {/* Background Decor */}
          <div
            className={`absolute -right-4 -top-4 w-24 h-24 bg-${stat.color}-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500`}
          />

          <div className="relative z-10 flex flex-col gap-4">
            <div
              className={`w-12 h-12 bg-${stat.color}-100 text-${stat.color}-600 rounded-2xl flex items-center justify-center shadow-inner`}
            >
              <stat.icon size={24} />
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-500">
                {stat.label}
              </p>
              <div className="flex items-baseline gap-2 mt-1">
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                  {stat.value}
                </h3>
              </div>
              <p className="text-[11px] font-bold text-slate-400 mt-2 flex items-center gap-1 uppercase tracking-wider">
                <span
                  className={`w-1 h-1 rounded-full bg-${stat.color}-400 animate-pulse`}
                />
                {stat.change}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
