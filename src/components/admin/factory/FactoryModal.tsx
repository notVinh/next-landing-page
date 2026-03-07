"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { X } from "lucide-react";
import FactoryForm from "./FactoryForm";

export default function FactoryModal({ initialData }: { initialData?: any }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const mode = searchParams.get("mode"); // 'create' hoặc 'edit'
  const isOpen = mode === "create" || (mode === "edit" && initialData);

  if (!isOpen) return null;

  const closeModal = () => {
    // Để đóng modal, ta chỉ cần xóa các params trên URL
    router.push("/admin/factory/overview");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-200">
        {/* Header Modal */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-bold">
            {mode === "edit" ? "Chỉnh sửa nhà máy" : "Thêm nhà máy mới"}
          </h2>
          <button
            onClick={closeModal}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body Modal - Chứa Form */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          <FactoryForm initialData={initialData} onSuccess={closeModal} />
        </div>
      </div>
    </div>
  );
}
