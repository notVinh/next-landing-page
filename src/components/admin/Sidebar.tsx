import Link from "next/link";
import {
  LayoutDashboard,
  Factory,
  Settings,
  CalendarCheck,
  FileText,
  ChevronRight,
  ChevronLeft,
  PieChart,
} from "lucide-react";

export default function Sidebar() {
  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, active: true },
    { name: "Quản lý nhà máy", icon: <Factory size={20} />, active: false },
    { name: "Nhà máy của tôi", icon: <Settings size={20} />, hasSub: true },
    { name: "Chấm công", icon: <CalendarCheck size={20} />, hasSub: true },
    { name: "Quản lý đơn từ", icon: <FileText size={20} />, hasSub: true },
    { name: "Lương", icon: <PieChart size={20} />, hasSub: true },
  ];

  return (
    <aside className="w-64 border-r bg-white flex flex-col h-screen">
      <div className="p-6 text-2xl font-bold text-blue-700">GTG</div>
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href="#"
            className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
              item.active
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span className="text-sm font-medium">{item.name}</span>
            </div>
            {item.hasSub && <ChevronRight size={14} />}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t">
        <button className="flex items-center gap-2 text-gray-500 text-sm hover:text-black">
          <ChevronLeft size={18} /> Thu nhỏ
        </button>
      </div>
    </aside>
  );
}
