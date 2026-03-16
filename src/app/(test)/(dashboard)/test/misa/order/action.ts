"use server";

import { revalidatePath } from "next/cache";
import { apiRequest } from "@/lib/api-client";

export async function SaveInfoOrderAction(orderId: string, formData: FormData) {
  //   const id = formData.get("id");
  //   const name = formData.get("name");
  //   const description = formData.get("description");
  //   const status = formData.get("status");
  //   const factoryId = "1";

  //   const payload = { name, description, status, factoryId };

  //   console.log(orderId, formData);

  try {
    const result = await apiRequest(
      `/misa-data-source/sa-orders/${orderId}/local-fields`,
      {
        method: "PATCH",
        body: JSON.stringify(formData),
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

    revalidatePath("/admin/misa/order");
    return { success: true, message: "Thao tác thành công!" };
  } catch (error) {
    return { success: false, message: "Lỗi kết nối mạng" };
  }
}

// export async function deleteDepartmentAction(id: string) {
//   try {
//     await apiRequest(`/departments/${id}`, { method: "DELETE" });
//     revalidatePath("/admin/factory/departments");
//     return { success: true };
//   } catch (error) {
//     return { success: false };
//   }
// }
