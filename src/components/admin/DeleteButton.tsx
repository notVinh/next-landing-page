"use client";

import { useState } from "react";
import { Trash2, Loader2 } from "lucide-react";
import { toast } from "react-toastify"; // Hoặc thư viện thông báo bạn đang dùng
import { deleteFactoryAction } from "@/app/(test)/(dashboard)/test/factory/overview/action";

interface DeleteButtonProps {
  id: number;
  factoryName: string;
}

export default function DeleteButton({ id, factoryName }: DeleteButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    // 1. Xác nhận trước khi xóa để tránh bấm nhầm
    const confirmDelete = confirm(
      `Bạn có chắc chắn muốn xóa nhà máy "${factoryName}"?`,
    );
    if (!confirmDelete) return;

    setIsDeleting(true);

    try {
      // 2. Gọi Server Action để thực hiện xóa trên Database
      const result = await deleteFactoryAction(id);

      if (result.success) {
        toast.success("Xóa nhà máy thành công!");
        // Lưu ý: revalidatePath trong Action sẽ tự động cập nhật lại danh sách ở Server
      } else {
        toast.error(result.message || "Có lỗi xảy ra khi xóa");
      }
    } catch (error) {
      toast.error("Lỗi kết nối hệ thống");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      title="Xóa nhà máy"
    >
      {isDeleting ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : (
        <Trash2 className="h-5 w-5" />
      )}
    </button>
  );
}
