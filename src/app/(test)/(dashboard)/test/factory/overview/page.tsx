import { apiRequest } from "@/lib/api-client";
import {
  Building2,
  Plus,
  Search,
  MapPin,
  Phone,
  Users,
  Calendar,
  MoreVertical,
  Edit3,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import DeleteButton from "@/components/admin/DeleteButton";
import FactoryModal from "@/components/admin/factory/FactoryModal";

export default async function FactoryManagement({ searchParams }: any) {
  const params = await searchParams;
  const { mode, id } = params;

  // Lấy danh sách nhà máy
  const res = await apiRequest(
    `/factory?page=${params.page || 1}&limit=10&search=${params.search || ""}`,
  );
  const factories = res.data.data || [];

  // Nếu đang ở mode edit, lấy thêm dữ liệu của nhà máy đó để truyền vào Modal
  let factoryToEdit = null;
  if (mode === "edit" && id) {
    const detailRes = await apiRequest(`/factory/${id}`);
    factoryToEdit = detailRes.data;
  }

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-4">
          <div className="bg-blue-600/10 p-3 rounded-2xl">
            <Building2 className="text-blue-600 h-8 w-8" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">
              Quản lý nhà máy
            </h1>
            <p className="text-gray-500 text-sm font-medium">
              Tổng số hệ thống:{" "}
              <span className="text-blue-600">{factories.length}</span>
            </p>
          </div>
        </div>

        <Link
          href="?mode=create"
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-blue-200 transition-all active:scale-95"
        >
          <Plus size={20} /> Tạo nhà máy mới
        </Link>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex gap-4">
        <div className="relative flex-1 group">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors"
            size={20}
          />
          <input
            placeholder="Tìm kiếm theo tên hoặc mã nhà máy..."
            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Factories Grid */}
      <div className="grid grid-cols-1 gap-6">
        {factories.map((factory: any) => (
          <div
            key={factory.id}
            className="group bg-white border border-gray-100 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 relative overflow-hidden"
          >
            {/* Trang trí góc card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-[100px] -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />

            <div className="relative flex flex-col lg:flex-row justify-between gap-6">
              <div className="space-y-4 flex-1">
                <div className="space-y-1">
                  <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors uppercase">
                    {factory.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                    <Calendar size={14} />
                    <span>Ngày tạo: {factory.createdAt || "27/11/2025"}</span>
                    <span className="mx-2">•</span>
                    <span>Làm việc: T2, T3, T4, T5, T6, T7</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="p-2 bg-gray-50 rounded-lg">
                      <Phone size={16} className="text-blue-500" />
                    </div>
                    <span className="text-sm font-semibold">
                      {factory.phone}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 lg:col-span-2">
                    <div className="p-2 bg-gray-50 rounded-lg">
                      <MapPin size={16} className="text-red-500" />
                    </div>
                    <span className="text-sm truncate">{factory.address}</span>
                  </div>
                </div>
                {factory.branchLocations &&
                  factory.branchLocations.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-dashed border-gray-100">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1 h-4 bg-blue-600 rounded-full" />
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                          Chi nhánh trực thuộc ({factory.branchLocations.length}
                          )
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {factory.branchLocations.map((branch: any) => (
                          <div
                            key={branch.name}
                            className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-xl group/branch hover:bg-white hover:border-blue-200 hover:shadow-sm transition-all cursor-default"
                          >
                            <MapPin size={12} className="text-blue-500" />
                            <span className="text-xs font-semibold text-gray-600 group-hover/branch:text-blue-600">
                              {branch.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
              </div>

              <div className="flex flex-row lg:flex-col items-center justify-between border-t lg:border-t-0 lg:border-l border-gray-100 pt-4 lg:pt-0 lg:pl-8 gap-4">
                <div className="text-center">
                  <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">
                    Nhân sự
                  </div>
                  <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-black">
                    <Users size={16} />
                    Tối đa: {factory.maxEmployees || 500}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link
                    href={`?mode=edit&id=${factory.id}`}
                    className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                  >
                    <Edit3 size={18} />
                  </Link>
                  <DeleteButton id={factory.id} factoryName={factory.name} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <FactoryModal initialData={factoryToEdit} />
    </div>
  );
}
