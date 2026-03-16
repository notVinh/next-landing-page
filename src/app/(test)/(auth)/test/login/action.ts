"use server";

import { cookies } from "next/headers";
import { apiRequest } from "@/lib/api-client"; // Sử dụng hàng chính chủ đã viết

export async function loginAction(formData: any) {
  const { phone, password } = formData;

  try {
    // Tối ưu: Gọi thông qua apiRequest để tận dụng cấu hình chung
    const res = await apiRequest("/auth/login", {
      method: "POST",
      body: JSON.stringify({ phone, password }),
    });

    // Lưu ý: apiRequest của chúng ta đã có logic kiểm tra res.ok
    // và trả về data.json() rồi, nên ở đây ta dùng luôn data.

    if (res?.data?.token) {
      const data = res.data;
      const cookieStore = await cookies();

      // Set Access Token
      cookieStore.set("accessToken", data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24, // 1 ngày
        path: "/",
      });

      // Set Refresh Token
      if (data.refreshToken) {
        cookieStore.set("refreshToken", data.refreshToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          maxAge: 60 * 60 * 24 * 7, // 7 ngày
          path: "/",
        });
      }

      return { success: true };
    } else {
      return {
        success: false,
        message: res.message || res?.errors?.message || "Đăng nhập thất bại",
      };
    }
  } catch (error: any) {
    // Bắt lỗi từ apiRequest ném ra
    return {
      success: false,
      message: error.message || "Lỗi kết nối máy chủ",
    };
  }
}

export async function getInfoAction() {
  try {
    // Tối ưu: Gọi thông qua apiRequest để tận dụng cấu hình chung
    const res = await apiRequest("/employee/me", {
      method: "GET",
    });

    return { success: true, userData: res.data };
  } catch (error: any) {
    // Bắt lỗi từ apiRequest ném ra
    return {
      success: false,
      message: error.message || "Lỗi kết nối máy chủ",
    };
  }
}
