import { Suspense } from "react";
import DepartmentTable from "@/components/admin/factory/DepartmentTable";
import { SkeletonTable } from "@/components/admin/factory/SkeletonTable";
import DepartmentStats from "@/components/admin/factory/DepartmentStats";
import { apiRequest } from "@/lib/api-client";

export default async function DepartmentPage() {
  // Giả sử đây là hàm gọi API từ Server
  // const departments = await getDepartmentsAction();

  // Lấy danh sách nhà máy
  const res = await apiRequest(`/departments?factoryId=1`);
  const departments = res.data || [];

  // Nếu đang ở mode edit, lấy thêm dữ liệu của nhà máy đó để truyền vào Modal
  // let factoryToEdit = null;
  // if (mode === "edit" && id) {
  //   const detailRes = await apiRequest(`/factory/${id}`);
  //   factoryToEdit = detailRes.data;
  // }

  return (
    <div className="p-6 bg-slate-50/50 min-h-screen space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Cấu trúc Tổ chức
          </h1>
          <p className="text-slate-500 mt-1">
            Quản lý và tối ưu hóa nhân sự theo từng phòng ban
          </p>
        </div>
        {/* Button thêm phòng ban có thể nằm ở Client Component bên dưới */}
      </div>

      <DepartmentStats />

      <Suspense fallback={<SkeletonTable />}>
        <DepartmentTable departmentsData={departments?.reverse()} />
      </Suspense>
    </div>
  );
}
