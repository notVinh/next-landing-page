"use server";

import { revalidatePath } from "next/cache";
import { apiRequest } from "@/lib/api-client";

export async function handleDepartmentAction(
  prevState: any,
  formData: FormData,
) {
  const id = formData.get("id");
  const name = formData.get("name");
  const description = formData.get("description");
  const status = formData.get("status");
  const factoryId = "1";

  const payload = { name, description, status, factoryId };

  try {
    const result = await apiRequest(
      id ? `/departments/${id}` : `/departments`,
      {
        method: id ? "PATCH" : "POST",
        body: JSON.stringify(payload),
      },
    );

    // Bây giờ bạn có thể debug chính xác
    if (result.statusCode >= 400) {
      console.error("API Error Details:", result.data); // Xem Backend chửi gì ở đây
      return {
        success: false,
        message: result.data.message || "Lỗi từ Backend",
      };
    }

    revalidatePath("/admin/factory/department");
    return { success: true, message: "Thao tác thành công!" };
  } catch (error) {
    return { success: false, message: "Lỗi kết nối mạng" };
  }
}

export async function deleteDepartmentAction(id: string) {
  try {
    await apiRequest(`/departments/${id}`, { method: "DELETE" });
    revalidatePath("/admin/factory/departments");
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}
