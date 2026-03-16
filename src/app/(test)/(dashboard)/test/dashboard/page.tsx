"use client";
// app/dashboard/page.tsx
import { StatCard } from "@/components/admin/StatCard";
import {
  Factory,
  Users,
  TrendingUp,
  Briefcase,
  DollarSign,
  Calendar,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"; // Thêm Recharts

// Dữ liệu giả định cho biểu đồ
const monthlyData = [
  { name: "Tháng 1", users: 4000 },
  { name: "Tháng 2", users: 3000 },
  { name: "Tháng 3", users: 2000 },
  { name: "Tháng 4", users: 2780 },
  { name: "Tháng 5", users: 1890 },
  { name: "Tháng 6", users: 2390 },
];

export default function DashboardPage() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {" "}
      {/* Thêm bg-gray-50 cho nền nhẹ */}
      <div className="flex items-center gap-2 mb-8 border-b pb-4 border-gray-200">
        <Factory className="text-blue-700" size={32} />
        <h1 className="text-3xl font-extrabold text-gray-900">
          Tổng Quan Hệ Thống
        </h1>
      </div>
      {/* Phần Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard
          icon={Factory}
          value="1"
          label="Tổng Nhà Máy"
          iconBgColor="bg-blue-100"
          iconColor="text-blue-700"
        />
        <StatCard
          icon={Users}
          value="72"
          label="Tổng Nhân Viên"
          iconBgColor="bg-green-100"
          iconColor="text-green-700"
        />
        <StatCard
          icon={TrendingUp}
          value="72"
          label="TB NV/Nhà Máy"
          iconBgColor="bg-purple-100"
          iconColor="text-purple-700"
        />
        <StatCard
          icon={Briefcase}
          value="12"
          label="Dự Án Đang Chạy"
          iconBgColor="bg-yellow-100"
          iconColor="text-yellow-700"
        />
      </div>
      {/* Phần biểu đồ và hoạt động gần đây */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Biểu đồ */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Lưu Lượng Truy Cập
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={monthlyData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Hoạt động gần đây */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Hoạt Động Gần Đây
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-700">
              <Calendar size={18} className="text-blue-500" />
              <span>
                **Đinh Hùng** thêm 1 nhà máy mới.{" "}
                <span className="text-xs text-gray-500">2 phút trước</span>
              </span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <DollarSign size={18} className="text-green-500" />
              <span>
                **Nguyễn Nga** cập nhật lương nhân viên.{" "}
                <span className="text-xs text-gray-500">1 giờ trước</span>
              </span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <Users size={18} className="text-purple-500" />
              <span>
                **Lê Văn** duyệt đơn nghỉ phép.{" "}
                <span className="text-xs text-gray-500">Hôm qua</span>
              </span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <Factory size={18} className="text-orange-500" />
              <span>
                **Phạm Thuận** sửa thông tin nhà máy.{" "}
                <span className="text-xs text-gray-500">2 ngày trước</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
