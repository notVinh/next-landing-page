// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import {
//   Building2,
//   MapPin,
//   Phone,
//   Users,
//   Plus,
//   Search,
//   Edit,
//   Trash2,
// } from "lucide-react";
// import { useFactories } from "@/hooks/useFactories";

// // import Pagination from "@/components/commons/Pagination";

// export default function FactoryList() {
//   const [page, setPage] = useState(1);
//   const [limit, setLimit] = useState(10);
//   const [search, setSearch] = useState("");

//   const { data, isLoading } = useFactories(page, limit, search);

//   const items = data?.data ?? [];
//   const total = data?.meta?.total ?? 0;

//   const formatWorkDays = (days?: number[]) => {
//     if (!days?.length) return "Chưa cấu hình";
//     const names = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
//     return days.map((d) => names[d]).join(", ");
//   };

//   if (isLoading) return <div className="p-6">Loading...</div>;

//   return (
//     <div className="p-6 space-y-6">
//       <div className="flex justify-between items-center">
//         <div className="flex gap-2 items-center">
//           <Building2 />
//           <h1 className="text-xl font-bold">Quản lý nhà máy</h1>
//         </div>
//         <span>Tổng: {total}</span>
//       </div>

//       <input
//         placeholder="Tìm kiếm..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="border p-2 rounded"
//       />

//       <Link
//         href="/admin/factories/create"
//         className="inline-flex items-center gap-2 bg-green-600 text-white px-3 py-2 rounded"
//       >
//         <Plus size={16} />
//         Tạo mới
//       </Link>

//       <div className="space-y-3">
//         {items.map((f) => (
//           <div key={f.id} className="border p-4 rounded flex justify-between">
//             <div>
//               <div className="font-semibold">{f.name}</div>
//               <div className="text-sm text-gray-500 flex gap-4">
//                 <span>
//                   <Phone size={14} /> {f.phone}
//                 </span>
//                 <span>
//                   <MapPin size={14} /> {f.address}
//                 </span>
//                 <span>
//                   <Users size={14} /> {f.maxEmployees}
//                 </span>
//               </div>
//               <div className="text-xs">
//                 Ngày làm việc: {formatWorkDays(f.workDays)}
//               </div>
//             </div>

//             <div className="flex gap-2">
//               <Link href={`/admin/factories/${f.id}/edit`}>
//                 <Edit size={16} />
//               </Link>
//               <Trash2 size={16} />
//             </div>
//           </div>
//         ))}
//       </div>
//       {/*
//       <Pagination
//         page={page}
//         limit={limit}
//         total={total}
//         onPageChange={setPage}
//         onLimitChange={setLimit}
//       /> */}
//     </div>
//   );
// }
