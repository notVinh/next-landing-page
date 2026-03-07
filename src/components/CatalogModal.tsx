"use client";

import { X } from "lucide-react"; // Đảm bảo Vinh đã cài lucide-react

interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  catalog: { name: string; pdfUrl?: string } | null;
}

export default function CatalogModal({
  isOpen,
  onClose,
  catalog,
}: CatalogModalProps) {
  if (!isOpen || !catalog) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
      {/* Click ra ngoài để đóng */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl relative z-10 overflow-hidden">
        <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-black uppercase text-slate-800 tracking-tight">
            {catalog.name}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-10 text-center">
          <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner">
            <span className="text-3xl">📄</span>
          </div>
          <p className="text-slate-500 text-sm mb-8 leading-relaxed">
            Nhấp vào nút bên dưới để xem chi tiết thông số kỹ thuật và hướng dẫn
            vận hành của dòng máy này.
          </p>

          <button
            onClick={() =>
              catalog.pdfUrl && window.open(catalog.pdfUrl, "_blank")
            }
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg transition-all uppercase text-xs tracking-widest"
          >
            Mở file PDF ngay
          </button>
        </div>
      </div>
    </div>
  );
}
