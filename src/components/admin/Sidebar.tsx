"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion"; // Thêm Framer Motion
import {
  LayoutDashboard,
  Factory,
  Settings,
  CalendarCheck,
  FileText,
  ChevronRight,
  ChevronLeft,
  PieChart,
  Database,
  Box,
  Receipt,
  ChevronDown,
} from "lucide-react";

export default function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      href: "/admin/dashboard",
    },
    {
      name: "Quản lý nhà máy",
      icon: <Factory size={20} />,
      href: "/admin/factory",
    },
    {
      name: "Nhà máy của tôi",
      icon: <Settings size={20} />,
      href: "/admin/nha-may-cua-toi",
      // Thêm subItems để giống ảnh bạn gửi
      subItems: [
        { name: "Thông tin nhà máy", href: "/admin/nha-may-cua-toi/thong-tin" },
        { name: "Phòng ban", href: "/admin/nha-may-cua-toi/phong-ban" },
        { name: "Nhân viên", href: "/admin/nha-may-cua-toi/nhan-vien" },
        { name: "Nhân viên", href: "/admin/nha-may-cua-toi/nhan-vien" },
      ],
    },
    {
      name: "Chấm công",
      icon: <CalendarCheck size={20} />,
      href: "/admin/cham-cong",
    },
    {
      name: "Quản lý đơn từ",
      icon: <FileText size={20} />,
      href: "/admin/quan-ly-don-tu",
    },
    { name: "Lương", icon: <PieChart size={20} />, href: "/admin/luong" },
    {
      name: "Dữ liệu từ MISA",
      icon: <Database size={20} />,
      href: "/admin/dulieu-misa",
    },
    { name: "Sản phẩm", icon: <Box size={20} />, href: "/admin/san-pham" },
    { name: "Báo giá", icon: <Receipt size={20} />, href: "/admin/bao-gia" },
  ];
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleSubMenu = (name: string) => {
    setOpenMenus((prev) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name],
    );
  };

  return (
    <motion.aside
      animate={{ width: isCollapsed ? 80 : 256 }} // Animation co giãn mượt mà
      className="border-r bg-white flex flex-col h-screen sticky top-0 shadow-sm"
    >
      {/* Logo Area */}
      <div className="p-6 h-20 flex items-center overflow-hidden">
        <motion.div
          animate={{ opacity: isCollapsed ? 0 : 1 }}
          className="text-2xl font-bold text-blue-700 whitespace-nowrap"
        >
          GTG
        </motion.div>
      </div>

      <nav className="flex-1 px-3 space-y-1 overflow-y-auto no-scrollbar">
        {menuItems.map((item) => {
          const hasSub = !!item.subItems;
          const isOpen = openMenus.includes(item.name);
          const isActive = pathname.startsWith(item.href);

          return (
            <div key={item.name} className="mb-1">
              {/* Menu Item Chính */}
              <button
                onClick={() => (hasSub ? toggleSubMenu(item.name) : null)}
                className="w-full"
              >
                <Link
                  href={hasSub ? "#" : item.href}
                  className={`flex items-center justify-between p-3 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                      : "text-gray-500 hover:bg-gray-50 hover:text-blue-600"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {item.icon}
                    </motion.div>
                    {!isCollapsed && (
                      <span className="text-sm font-medium whitespace-nowrap">
                        {item.name}
                      </span>
                    )}
                  </div>

                  {!isCollapsed && hasSub && (
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={14} />
                    </motion.div>
                  )}
                </Link>
              </button>

              {/* Submenu với Animation trượt xuống */}
              <AnimatePresence>
                {!isCollapsed && hasSub && isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden ml-9 flex flex-col border-l border-gray-100 mt-1"
                  >
                    {item.subItems?.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className={`py-2 px-4 text-sm transition-colors relative ${
                          pathname === sub.href
                            ? "text-blue-600 font-semibold"
                            : "text-gray-400 hover:text-gray-700"
                        }`}
                      >
                        {pathname === sub.href && (
                          <motion.div
                            layoutId="activeSub"
                            className="absolute left-0 w-1 h-4 bg-blue-600 rounded-r-full"
                          />
                        )}
                        {sub.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>

      {/* Nút Thu nhỏ với hiệu ứng Glassmorphism nhẹ */}
      <div className="p-4 border-t bg-gray-50/50">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex items-center justify-center gap-2 text-gray-400 hover:text-blue-600 w-full p-2 rounded-lg hover:bg-white transition-all duration-300 shadow-sm hover:shadow"
        >
          {isCollapsed ? (
            <ChevronRight size={20} />
          ) : (
            <div className="flex items-center gap-2">
              <ChevronLeft size={20} />
              <span className="text-sm font-medium">Thu nhỏ</span>
            </div>
          )}
        </button>
      </div>
    </motion.aside>
  );
}

// Giữ nguyên menuItems của bạn bên dưới...
