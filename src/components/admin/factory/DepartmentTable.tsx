"use client";

import React, {
  useTransition,
  useState,
  useEffect,
  useActionState,
  useMemo,
} from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  Search,
  ShieldCheck,
  Edit3,
  Trash2,
  Plus,
  X,
  ChevronDown,
  Briefcase,
  MapPin,
  Building2,
} from "lucide-react";
import {
  deleteDepartmentAction,
  handleDepartmentAction,
} from "@/app/(test)/(dashboard)/admin_test/factory/department/action";

export default function DepartmentTable({
  departmentsData = [],
  factories = [],
}: any) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isPending, startTransition] = useTransition();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFactory, setSelectedFactory] = useState("all");

  // State quản lý các dòng đang mở rộng (Accordion)
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const toggleRow = (id: number) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((rid) => rid !== id) : [...prev, id],
    );
  };

  // 1. LOGIC LỌC DỮ LIỆU: SEARCH + FACTORY
  const filteredData = useMemo(() => {
    return departmentsData.filter((dept: any) => {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch =
        dept.name?.toLowerCase().includes(searchLower) ||
        dept.id?.toString().includes(searchLower);

      const matchesFactory =
        selectedFactory === "all" ||
        dept.factoryId?.toString() === selectedFactory;

      return matchesSearch && matchesFactory;
    });
  }, [searchTerm, selectedFactory, departmentsData]);

  // --- LOGIC URL CONTROL (MODAL) ---
  const action = searchParams.get("action");
  const editId = searchParams.get("id");
  const isModalOpen = action === "create" || action === "edit";

  const currentDept = useMemo(
    () =>
      editId
        ? departmentsData.find((d: any) => d.id.toString() === editId)
        : null,
    [editId, departmentsData],
  );

  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [deptToDelete, setDeptToDelete] = useState<any>(null);

  const openCreateModal = () => router.push(`${pathname}?action=create`);
  const openEditModal = (id: string) =>
    router.push(`${pathname}?action=edit&id=${id}`);
  const closeModal = () => router.push(pathname);

  const [state, formAction, isPendingAction] = useActionState(
    handleDepartmentAction,
    null,
  );

  useEffect(() => {
    if (state?.success) closeModal();
  }, [state]);

  const handleDelete = async () => {
    await deleteDepartmentAction(deptToDelete?.id);
    setIsDeleteConfirmOpen(false);
    setDeptToDelete(null);
  };

  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
      {/* HEADER SECTION: Search + Filter + Add Button */}
      <div className="p-6 border-b border-slate-100 flex flex-col lg:flex-row items-center gap-4 justify-between bg-white/50 backdrop-blur-md sticky top-0 z-20">
        <div className="flex flex-1 items-center gap-3 w-full max-w-3xl">
          {/* Ô TÌM KIẾM */}
          <div className="relative flex-[2]">
            <Search
              className={`absolute left-4 top-1/2 -translate-y-1/2 ${isPending ? "text-blue-500 animate-pulse" : "text-slate-400"}`}
              size={20}
            />
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm mã hoặc tên phòng..."
              className="w-full pl-12 pr-4 py-3 bg-slate-100/50 border-transparent focus:bg-white focus:ring-4 focus:ring-blue-500/10 rounded-2xl outline-none transition-all text-sm font-medium"
            />
          </div>

          {/* BỘ CHỌN CHI NHÁNH */}
          <div className="relative flex-1 min-w-[200px]">
            <MapPin
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <select
              value={selectedFactory}
              onChange={(e) => setSelectedFactory(e.target.value)}
              className="w-full pl-11 pr-10 py-3 bg-slate-100/50 border-transparent focus:bg-white focus:ring-4 focus:ring-blue-500/10 rounded-2xl outline-none appearance-none transition-all text-sm font-bold text-slate-700 cursor-pointer"
            >
              <option value="all">Tất cả chi nhánh</option>
              {/* Nếu bạn có dữ liệu factories truyền từ server */}
              {factories.map((f: any) => (
                <option key={f.id} value={f.id}>
                  {f.name}
                </option>
              ))}
              {/* Demo fallback nếu factories rỗng */}
              {factories.length === 0 && (
                <>
                  <option value="1">Chi nhánh Miền Bắc</option>
                  <option value="2">Chi nhánh Miền Trung</option>
                  <option value="3">Chi nhánh Miền Nam</option>
                </>
              )}
            </select>
            <ChevronDown
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              size={16}
            />
          </div>
        </div>

        <button
          onClick={openCreateModal}
          className="bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold hover:bg-blue-600 transition-all flex items-center gap-2 text-sm shrink-0 shadow-lg shadow-slate-200 w-full lg:w-auto justify-center"
        >
          <Plus size={18} /> Thêm phòng ban
        </button>
      </div>

      {/* TABLE SECTION */}
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-0">
          <thead>
            <tr className="text-left bg-slate-50/50">
              <th className="w-12 px-4 py-5 text-center">#</th>
              <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
                Phòng ban
              </th>
              <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
                Vị trí
              </th>
              <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
                Trạng thái
              </th>
              <th className="px-8 py-5 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">
                Hành động
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {filteredData.map((dept: any) => {
              const isExpanded = expandedRows.includes(dept.id);
              return (
                <React.Fragment key={dept.id}>
                  <tr
                    className={`hover:bg-blue-50/40 transition-all group ${isExpanded ? "bg-blue-50/20" : ""}`}
                  >
                    <td className="px-4 py-6 text-center">
                      <button
                        onClick={() => toggleRow(dept.id)}
                        className={`p-1.5 rounded-lg hover:bg-slate-200 transition-all ${isExpanded ? "rotate-180 text-blue-600" : "text-slate-400"}`}
                      >
                        <ChevronDown size={20} />
                      </button>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                          <Building2 size={22} />
                        </div>
                        <div>
                          <p className="font-bold text-slate-800 text-base">
                            {dept.name}
                          </p>
                          <p className="text-xs text-slate-400 font-medium italic">
                            Mã: {dept.id}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 flex items-center gap-2 w-fit">
                        <Briefcase size={14} /> {dept.positions?.length || 0} vị
                        trí
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2">
                        <span
                          className={`h-2 w-2 rounded-full ${dept.status === "active" ? "bg-green-500 animate-pulse" : "bg-red-500"}`}
                        />
                        <span
                          className={`text-sm font-bold ${dept.status === "active" ? "text-green-700" : "text-red-700"}`}
                        >
                          {dept.status === "active" ? "Hoạt động" : "Tạm dừng"}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => openEditModal(dept.id)}
                          className="p-2.5 bg-white text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl border border-slate-100 transition-all shadow-sm"
                        >
                          <Edit3 size={18} />
                        </button>
                        <button
                          onClick={() => {
                            setDeptToDelete(dept);
                            setIsDeleteConfirmOpen(true);
                          }}
                          className="p-2.5 bg-white text-red-500 hover:bg-red-500 hover:text-white rounded-xl border border-slate-100 transition-all shadow-sm"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* VỊ TRÍ CHI TIẾT (ACCORDION) */}
                  {isExpanded && (
                    <tr className="bg-slate-50/50 animate-in slide-in-from-top-2 duration-300">
                      <td
                        colSpan={5}
                        className="px-12 py-6 border-l-4 border-l-blue-500"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {dept.positions && dept.positions.length > 0 ? (
                            dept.positions.map((pos: any) => (
                              <div
                                key={pos.id}
                                className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:border-blue-300 transition-all group/pos"
                              >
                                <div className="p-2 bg-blue-50 rounded-xl text-blue-500 group-hover/pos:bg-blue-500 group-hover/pos:text-white transition-colors">
                                  <Briefcase size={16} />
                                </div>
                                <div>
                                  <p className="text-sm font-bold text-slate-700">
                                    {pos.name}
                                  </p>
                                  <p className="text-[10px] text-slate-400 font-medium">
                                    ID: {pos.id}
                                  </p>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="col-span-full py-4 text-center text-slate-400 text-sm italic">
                              Chưa có vị trí nào.
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* MODAL FORM (CREATE/EDIT) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-black text-slate-900">
                  {action === "edit"
                    ? "Cập nhật phòng ban"
                    : "Thêm phòng ban mới"}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-slate-400 hover:text-slate-600 p-2"
                >
                  <X size={24} />
                </button>
              </div>
              <form className="space-y-6" action={formAction}>
                {action === "edit" && editId && (
                  <input type="hidden" name="id" value={editId} />
                )}
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">
                    Tên phòng ban *
                  </label>
                  <input
                    name="name"
                    defaultValue={currentDept?.name || ""}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3 outline-none focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all font-bold"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">
                    Chi nhánh *
                  </label>
                  <select
                    name="factoryId"
                    defaultValue={currentDept?.factoryId || ""}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3 outline-none focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all font-bold"
                  >
                    {factories.map((f: any) => (
                      <option key={f.id} value={f.id}>
                        {f.name}
                      </option>
                    ))}
                    <option value="1">Miền Bắc</option>
                    <option value="2">Miền Trung</option>
                    <option value="3">Miền Nam</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">
                    Mô tả
                  </label>
                  <textarea
                    name="description"
                    defaultValue={currentDept?.description || ""}
                    rows={3}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3 outline-none focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2">
                    Trạng thái
                  </label>
                  <select
                    name="status"
                    defaultValue={currentDept?.status || "active"}
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-3 outline-none focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all font-bold"
                  >
                    <option value="active">Hoạt động</option>
                    <option value="inactive">Tạm dừng</option>
                  </select>
                </div>
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex-1 px-6 py-4 rounded-2xl font-bold text-slate-500 bg-slate-100"
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    disabled={isPendingAction}
                    className="flex-1 px-6 py-4 rounded-2xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all disabled:opacity-50"
                  >
                    {isPendingAction
                      ? "Đang xử lý..."
                      : action === "edit"
                        ? "Lưu thay đổi"
                        : "Tạo phòng ban"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* DELETE DIALOG */}
      {isDeleteConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 text-center">
          <div className="bg-white rounded-[2rem] p-8 max-w-sm w-full shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="w-20 h-20 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Trash2 size={40} />
            </div>
            <h4 className="text-xl font-black text-slate-900 mb-2">
              Xác nhận xóa?
            </h4>
            <p className="text-slate-500 mb-8 font-medium">
              Xóa phòng ban{" "}
              <span className="font-bold text-slate-900">
                "{deptToDelete?.name}"
              </span>
              ?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setIsDeleteConfirmOpen(false)}
                className="flex-1 py-4 rounded-2xl font-bold text-slate-500 bg-slate-100"
              >
                Hủy
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 py-4 rounded-2xl font-bold text-white bg-red-500 hover:bg-red-600"
              >
                Xóa ngay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
