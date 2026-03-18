"use server";

import { cookies } from "next/headers";
import { apiRequest } from "@/lib/api-client"; // Sử dụng hàng chính chủ đã viết

// export async function loginAction(formData: any) {
//   const { phone, password } = formData;

//   try {
//     // Tối ưu: Gọi thông qua apiRequest để tận dụng cấu hình chung
//     const res = await apiRequest("/auth/login", {
//       method: "POST",
//       body: JSON.stringify({ phone, password }),
//     });

//     // Lưu ý: apiRequest của chúng ta đã có logic kiểm tra res.ok
//     // và trả về data.json() rồi, nên ở đây ta dùng luôn data.

//     if (res?.data?.token) {
//       const data = res.data;
//       const cookieStore = await cookies();

//       // Set Access Token
//       cookieStore.set("accessToken", data.token, {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === "production",
//         sameSite: "lax",
//         maxAge: 60 * 60 * 24, // 1 ngày
//         path: "/",
//       });

//       // Set Refresh Token
//       if (data.refreshToken) {
//         cookieStore.set("refreshToken", data.refreshToken, {
//           httpOnly: true,
//           secure: process.env.NODE_ENV === "production",
//           sameSite: "lax",
//           maxAge: 60 * 60 * 24 * 7, // 7 ngày
//           path: "/",
//         });
//       }

//       return { success: true };
//     } else {
//       return {
//         success: false,
//         message: res.message || res?.errors?.message || "Đăng nhập thất bại",
//       };
//     }
//   } catch (error: any) {
//     // Bắt lỗi từ apiRequest ném ra
//     return {
//       success: false,
//       message: error.message || "Lỗi kết nối máy chủ",
//     };
//   }
// }

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

export async function logoutAction() {
  try {
    const cookieStore = await cookies();

    // 1. Xóa Access Token
    cookieStore.set("accessToken", "", {
      maxAge: 0, // Hết hạn ngay lập tức
      path: "/",
    });

    // 2. Xóa Refresh Token
    cookieStore.set("refreshToken", "", {
      maxAge: 0,
      path: "/",
    });

    // Nếu bạn có lưu thông tin user hay gì đó khác trong cookie, hãy xóa nốt ở đây

    return { success: true };
  } catch (error: any) {
    return {
      success: false,
      message: "Lỗi khi thực hiện đăng xuất",
    };
  }
}

export async function loginAction(formData: any) {
  const { phone, password } = formData;

  try {
    // 1. Gọi login để lấy Token
    const loginRes = await apiRequest("/auth/login", {
      method: "POST",
      body: JSON.stringify({ phone, password }),
    });

    const token = loginRes?.data?.token;

    if (!token) {
      return {
        success: false,
        message: loginRes.message || "Đăng nhập thất bại",
      };
    }

    // 2. Tạm thời lưu Token vào cookie để apiRequest sau này có thể dùng (nếu nó đọc từ cookie)
    // Hoặc truyền trực tiếp Token vào header của lần gọi getInfo tiếp theo
    const userInfoRes = await apiRequest("/employee/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // Truyền token trực tiếp để check role
      },
    });

    const user = userInfoRes?.data;

    // 3. KIỂM TRA ROLE TẠI ĐÂY
    // Giả sử field role nằm trong user.role.name hoặc user.roles
    // const isKinhDoanh =
    //   user?.roleGroups?.id === "13" ||
    //   user?.roleGroups?.id === "14" ||
    //   user?.roleGroups?.id === "3" ||
    //   user?.role === "kinh doanh";

    // console.log(isKinhDoanh);

    const businessId = ["13", "14", "3"];
    const isKinhDoanh = user.roleGroups.some((item: any) =>
      businessId.includes(item.id),
    );
    // Trả về true nếu mảng có bất kỳ object nào id = 2 HOẶC id = 3

    if (!isKinhDoanh) {
      return {
        success: false,
        message:
          "Tài khoản của bạn không có quyền truy cập vào hệ thống kinh doanh.",
      };
    }

    // 4. Nếu đúng role Kinh Doanh, tiến hành set Cookie chính thức
    const cookieStore = await cookies();

    cookieStore.set("accessToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    if (loginRes.data.refreshToken) {
      cookieStore.set("refreshToken", loginRes.data.refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      });
    }

    return {
      success: true,
      userData: user, // Trả về luôn thông tin user để Client lưu vào Zustand
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Lỗi kết nối máy chủ",
    };
  }
}
