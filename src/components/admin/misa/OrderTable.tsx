"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Eye,
  ChevronLeft,
  ChevronRight,
  Filter,
  Calendar,
  ChevronDown,
  Tag,
  Clock,
  AlertCircle,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formatDateTime } from "@/config/formatDateTime";
import OrderDetailModal from "./OrderDetailModal"; // Import component modal

const STATUS_STYLES: any = {
  "Tất cả": "bg-slate-100 text-slate-600 border-slate-200",
  "Chờ nhập thông tin": "bg-amber-50 text-amber-600 border-amber-200",
  "Chờ duyệt": "bg-blue-50 text-blue-600 border-blue-200",
  "BGĐ Đã duyệt": "bg-emerald-50 text-emerald-600 border-emerald-200",
  "Chờ xuất kho": "bg-purple-50 text-purple-600 border-purple-200",
  "Đang giao hàng": "bg-cyan-50 text-cyan-600 border-cyan-200",
  "Hoàn thành": "bg-green-100 text-green-700 border-green-300",
  "Đã hủy": "bg-red-50 text-red-600 border-red-200",
};

export default function OrderTable({
  initialData,
  pageInfo,
}: {
  initialData: any;
  pageInfo: any;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const currentSaleType = searchParams.get("saleType") || "all";

  // State cho Filter
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

  // State quản lý Modal
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    if (name !== "page") params.set("page", "1");
    return params.toString();
  };

  const handlePageChange = (newPage: number) => {
    router.push(`${pathname}?${createQueryString("page", newPage.toString())}`);
  };

  const updateFilters = (updates: any) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([key, value]: [string, any]) => {
      params.set(key, value);
    });
    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`);
  };

  // Logic Lọc Dữ Liệu (giữ nguyên logic gốc của bạn)
  const filteredOrders = useMemo(() => {
    return initialData.filter((order: any) => {
      const matchesSearch =
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "all" || order.localDeliveryStatus === statusFilter;
      const matchesPriority =
        priorityFilter === "all" || order.priority === priorityFilter;
      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [initialData, searchTerm, statusFilter, priorityFilter]);

  const openDetail = (order: any) => {
    setSelectedOrder(order);
    setIsDetailOpen(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans p-4">
      {/* HEADER SECTION: Search + Filters */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-4 bg-white p-4 rounded-[2rem] border border-slate-200 shadow-sm">
          <div className="relative flex-1 min-w-[300px]">
            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm mã đơn hoặc khách hàng..."
              className="w-full pl-14 pr-6 py-3.5 bg-slate-50 border-transparent focus:bg-white focus:ring-4 focus:ring-blue-500/10 rounded-2xl outline-none transition-all font-medium text-sm"
            />
          </div>

          <div className="relative min-w-[160px]">
            <Tag
              className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500"
              size={16}
            />
            <select
              value={currentSaleType}
              onChange={(e) => updateFilters({ saleType: e.target.value })}
              className="w-full pl-10 pr-10 py-3.5 bg-slate-50 rounded-2xl outline-none appearance-none font-bold text-slate-700 text-xs cursor-pointer"
            >
              <option value="all">Tất cả loại hình</option>
              <option value="Bán">Bán hàng</option>
              <option value="Thuê">Cho thuê</option>
              <option value="Mượn">Cho mượn</option>
            </select>
            <ChevronDown
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              size={14}
            />
          </div>

          <div className="relative min-w-[180px]">
            <Filter
              className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500"
              size={16}
            />
            <select
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full pl-10 pr-10 py-3.5 bg-slate-50 border-transparent rounded-2xl outline-none appearance-none font-bold text-slate-700 text-sm cursor-pointer focus:bg-white transition-all"
            >
              <option value="all">Tất cả trạng thái</option>
              {Object.keys(STATUS_STYLES).map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            <ChevronDown
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              size={16}
            />
          </div>

          <div className="relative min-w-[180px]">
            <AlertCircle
              className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500"
              size={16}
            />
            <select
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="w-full pl-10 pr-10 py-3.5 bg-slate-50 border-transparent rounded-2xl outline-none appearance-none font-bold text-slate-700 text-sm cursor-pointer focus:bg-white transition-all"
            >
              <option value="all">Độ ưu tiên</option>
              <option value="Thường">Thường</option>
              <option value="Gấp">Gấp</option>
              <option value="Rất gấp">Rất gấp</option>
            </select>
            <ChevronDown
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              size={16}
            />
          </div>
        </div>
      </div>

      {/* TABLE SECTION: FULL 100% COLUMNS */}
      <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-0">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                  Ngày tạo
                </th>
                <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                  Mã đơn
                </th>
                <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                  Người tạo
                </th>
                <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                  Loại
                </th>
                <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                  Trạng thái
                </th>
                <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                  Độ ưu tiên
                </th>
                <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">
                  Hành động
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredOrders.map((order: any) => (
                <tr
                  key={order.id}
                  className="hover:bg-blue-50/40 transition-all group"
                >
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2 text-slate-600 font-medium text-sm">
                      <Calendar size={14} className="text-slate-400" />{" "}
                      {formatDateTime(order.createdAt)}
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="font-black text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg">
                      #{order.refNo}
                    </span>
                  </td>
                  <td className="px-8 py-6 font-bold text-slate-700 text-sm">
                    {order.createdBy}
                  </td>
                  <td className="px-8 py-6 font-bold text-slate-700 text-sm">
                    {order.saleType}
                  </td>
                  <td className="px-8 py-6">
                    <span
                      className={`w-fit px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter border ${
                        order.localDeliveryStatus === "Trạng thái chưa xác định"
                          ? "bg-amber-50 text-amber-600 border-amber-100"
                          : "bg-green-50 text-green-600 border-green-100"
                      }`}
                    >
                      {order.localDeliveryStatus || "Chờ nhập thông tin"}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="flex items-center gap-1 text-[11px] font-bold text-slate-400">
                      <Clock size={12} /> {order.priority || "Chưa đặt"}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button
                      onClick={() => openDetail(order)}
                      className="p-3 bg-white text-blue-600 hover:bg-blue-600 hover:text-white rounded-2xl border border-slate-100 transition-all shadow-sm group-hover:scale-110"
                    >
                      <Eye size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="p-6 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
          <p className="text-sm font-bold text-slate-500">
            Hiển thị{" "}
            <span className="text-slate-900">
              {(currentPage - 1) * pageInfo.limit + 1}-
              {Math.min(currentPage * pageInfo.limit, pageInfo.total)}
            </span>{" "}
            trên <span className="text-slate-900">{pageInfo.total}</span> đơn
          </p>
          <div className="flex gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="p-2.5 rounded-xl border bg-white disabled:opacity-30"
            >
              <ChevronLeft size={20} />
            </button>
            {[...Array(pageInfo.totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`w-10 h-10 rounded-xl font-bold ${currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-white border"}`}
              >
                {i + 1}
              </button>
            ))}
            <button
              disabled={currentPage === pageInfo.totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="p-2.5 rounded-xl border bg-white disabled:opacity-30"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isDetailOpen && (
        <OrderDetailModal
          order={selectedOrder}
          onClose={() => setIsDetailOpen(false)}
        />
      )}
    </div>
  );
}
