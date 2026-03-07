"use client";

import { useState } from "react";
import Image from "next/image";
import { catalogCategories } from "@/data/catalogCategories";
import CatalogModal from "@/components/CatalogModal";

export default function CatalogPage() {
  const [selectedCatalog, setSelectedCatalog] = useState<any>(null);

  return (
    <div className="pt-28 min-h-screen bg-slate-50 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-slate-900 mb-12 uppercase tracking-tighter">
          Danh Mục Catalog
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {catalogCategories.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCatalog(item)} // Khi click thì set dữ liệu vào state
              className="group cursor-pointer bg-white rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 transform hover:-translate-y-2"
            >
              <div className="relative h-48 bg-slate-200">
                <Image
                  src="/images/catalog/shot.jpg"
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-duration-700"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xs font-black text-slate-800 uppercase line-clamp-2">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Truyền State và hàm đóng vào Modal */}
      <CatalogModal
        isOpen={!!selectedCatalog}
        onClose={() => setSelectedCatalog(null)}
        catalog={selectedCatalog}
      />
    </div>
  );
}
