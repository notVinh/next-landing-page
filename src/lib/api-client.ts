import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function apiRequest(path: string, options: RequestInit = {}) {
  const isPublicPath = path.includes("/auth/login");
  const headers = new Headers(options.headers);
  headers.set("Content-Type", "application/json");

  try {
    // 1. Chỉ lấy token nếu cần thiết
    if (!isPublicPath) {
      const cookieStore = await cookies();
      const token = cookieStore.get("accessToken")?.value;
      if (token) headers.set("Authorization", `Bearer ${token}`);
    }

    // 2. Fetch với cơ chế bảo vệ
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${path}`, {
      ...options,
      headers,
      // Bạn có thể thêm signal để chống treo máy nếu muốn
    });

    // 3. Xử lý lỗi hệ thống (500, 502, 504)
    if (res.status >= 500) {
      return {
        success: false,
        message: "Hệ thống Backend đang bảo trì, vui lòng thử lại sau.",
      };
    }

    // 4. Xử lý Unauthorized (401) - Tránh redirect khi đang ở trang login
    if (res.status === 401) {
      if (isPublicPath) {
        return await res.json(); // Trả về lỗi sai pass/user
      }
      redirect("/admin/login");
    }

    // 5. Kiểm tra xem Content-Type có phải JSON không trước khi parse
    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await res.json();
    }

    return { success: res.ok };
  } catch (error: any) {
    // 6. Xử lý lỗi Network (Backend sập, sai URL, DNS lỗi)
    // console.error("API_REQUEST_ERROR:", error.message);

    // Lưu ý: Next.js dùng lỗi đặc biệt để redirect, đừng chặn nó trong catch
    if (error.message === "NEXT_REDIRECT") throw error;

    return {
      success: false,
      message:
        "Không thể kết nối đến máy chủ. Kiểm tra lại Internet hoặc Server.",
    };
  }
}
