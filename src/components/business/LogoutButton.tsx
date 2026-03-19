"use client";
import { logoutAction } from "@/app/(business)/business/login/action";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    // 1. Gọi Server Action để xóa Cookies (accessToken, refreshToken)
    const res = await logoutAction();

    if (res.success) {
      // 2. Xóa dữ liệu user trong LocalStorage
      localStorage.removeItem("user-storage");

      // 3. Nếu bạn muốn xóa TẤT CẢ dữ liệu liên quan đến app
      // localStorage.clear();

      // 4. Điều hướng và Refresh để xóa sạch trạng thái cũ
      // router.push("/");
      // router.refresh();
      window.location.href = "/";
    }
  };

  return (
    <>
      <button
        onClick={handleLogout}
        className="hidden md:block cursor-pointer text-red-500 hover:bg-red-500 hover:text-white px-4 py-1 m-1 rounded-lg transition-colors border border-gray-400"
      >
        Đăng xuất
      </button>
      <button
        onClick={handleLogout}
        className="md:hidden cursor-pointer text-red-500 hover:bg-red-500 hover:text-white px-4 py-1 m-1 transition-colors rounded-lg"
      >
        <LogOutIcon />
      </button>
    </>
  );
};

export default LogoutButton;
