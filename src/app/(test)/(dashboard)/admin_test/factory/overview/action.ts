"use server"; // Chạy 100% trên Server

import { apiRequest } from "@/lib/api-client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteFactoryAction(id: number) {
  try {
    await apiRequest(`/factory/${id}`, { method: "DELETE" });
    // Tối ưu cực đại: Chỉ định danh sách nhà máy cần cập nhật lại dữ liệu mới
    revalidatePath("/admin/factory");
    return { success: true };
  } catch (error) {
    return { success: false, message: "Không thể xóa nhà máy" };
  }
}

export async function saveFactoryAction(data: any, id?: number) {
  try {
    const endpoint = id ? `/factory/overview/${id}` : "/factory/overview";
    const method = id ? "PATCH" : "POST";

    const res = await apiRequest(endpoint, {
      method,
      body: JSON.stringify(data),
    });

    if (res.error) throw new Error(res.message);

    // Xóa cache để danh sách cập nhật dữ liệu mới ngay lập tức
    revalidatePath("/admin/factory/overview");
  } catch (error: any) {
    return { success: false, message: error.message };
  }

  // Nếu thành công thì đẩy về danh sách
  redirect("/admin/factory/overview");
}
