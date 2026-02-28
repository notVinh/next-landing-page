import Sidebar from "@/components/admin/Sidebar";
import QueryProvider from "@/lib/react-query/QueryProvider";
import { Bell, RotateCw, Settings, User } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b px-8 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500">Dashboard</span>
          <div className="flex items-center gap-5 text-gray-400">
            <RotateCw
              size={18}
              className="cursor-pointer hover:text-blue-600"
            />
            <div className="relative">
              <Bell size={18} className="cursor-pointer hover:text-blue-600" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
            <Settings
              size={18}
              className="cursor-pointer hover:text-blue-600"
            />
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
              <User size={16} />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <QueryProvider>
          {" "}
          <main className="flex-1 overflow-y-auto p-8">{children}</main>
        </QueryProvider>
      </div>
    </div>
  );
}
