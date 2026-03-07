import { SkeletonTable } from "@/components/admin/factory/SkeletonTable";
import OrderTable from "@/components/admin/misa/OrderTable";
import { apiRequest } from "@/lib/api-client";
import React, { Suspense } from "react";

export default async function MisaOrderPage({ searchParams }: any) {
  const params = await searchParams;
  const page = params.page || "1";
  const limit = "10";
  //   const search = params.search || "";
  //   const status = params.status || "";
  const res = await apiRequest(
    `/misa-data-source/sa-orders/list?page=${page}&limit=${limit}`,
  );
  const order = res.data || [];

  return (
    <div className="p-6 bg-slate-50/50 min-h-screen space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Quản lý đơn hàng
          </h1>
          {/* <p className="text-slate-500 mt-1">
            Quản lý và tối ưu hóa nhân sự theo từng phòng ban
          </p> */}
        </div>
        {/* Button thêm phòng ban có thể nằm ở Client Component bên dưới */}
      </div>

      <Suspense fallback={<SkeletonTable />}>
        <OrderTable initialData={order.data} pageInfo={order.meta} />
      </Suspense>
    </div>
  );
}
