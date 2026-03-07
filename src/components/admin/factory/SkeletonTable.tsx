"use client";

export function SkeletonTable() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden animate-pulse">
      {/* Header Skeleton */}
      <div className="p-5 border-b border-slate-100 flex items-center justify-between">
        <div className="h-10 w-64 bg-slate-200 rounded-xl"></div>
        <div className="flex gap-2">
          <div className="h-10 w-10 bg-slate-200 rounded-xl"></div>
          <div className="h-10 w-32 bg-slate-200 rounded-xl"></div>
        </div>
      </div>

      {/* Table Body Skeleton */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50/50">
              {[1, 2, 3, 4].map((i) => (
                <th key={i} className="px-8 py-5">
                  <div className="h-3 w-20 bg-slate-200 rounded-full"></div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {[1, 2, 3, 4, 5].map((row) => (
              <tr key={row}>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-200 rounded-2xl"></div>
                    <div className="space-y-2">
                      <div className="h-4 w-32 bg-slate-200 rounded-lg"></div>
                      <div className="h-3 w-20 bg-slate-100 rounded-lg"></div>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full bg-slate-200 border-2 border-white"></div>
                    <div className="w-7 h-7 rounded-full bg-slate-200 border-2 border-white"></div>
                    <div className="w-7 h-7 rounded-full bg-slate-100 border-2 border-white"></div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="h-6 w-24 bg-slate-100 rounded-full"></div>
                </td>
                <td className="px-8 py-6 text-right">
                  <div className="h-8 w-8 bg-slate-100 rounded-lg ml-auto"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
