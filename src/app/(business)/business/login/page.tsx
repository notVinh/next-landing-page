"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Lock, User, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { loginAction } from "./action";
import { toast } from "react-toastify";
import { useUserStore } from "@/lib/zustand/userStore";

export default function AdminLoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useUserStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const result = await loginAction(data);
    console.log(result);

    if (result.success) {
      toast.success("Đăng nhập thành công!", {
        position: "top-center",
      });
      // Chuyển hướng sang dashboard
      setUser(result.userData);
      router.push("/");
      router.refresh(); // Làm mới lại Middleware để nhận diện Cookie mới
    } else {
      toast.error(result.message, {
        position: "top-center",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6]">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden p-8 space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-200">
            <Lock className="text-white w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">GTG Business</h2>
          <p className="text-gray-500 mt-2">
            Vui lòng đăng nhập để xem thông tin về các sản phẩm
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Username */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 ml-1">
              Số điện thoại
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
                <User size={20} />
              </div>
              <input
                {...register("phone", {
                  required: "Số điện thoại là bắt buộc",
                })}
                type="tel"
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                placeholder="admin_giangthanh"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">
                {errors.phone.message as string}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 ml-1">
              Mật khẩu
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
                <Lock size={20} />
              </div>
              <input
                {...register("password", { required: "Mật khẩu là bắt buộc" })}
                type={showPassword ? "text" : "password"}
                className="block w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message as string}
              </p>
            )}
          </div>

          {/* Remember & Forgot */}
          {/* <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-gray-600">Ghi nhớ</span>
            </label>
            <a href="#" className="text-blue-600 hover:underline font-medium">
              Quên mật khẩu?
            </a>
          </div> */}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-blue-200 transition-all flex items-center justify-center space-x-2 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                <span>Đăng nhập ngay</span>
                <ArrowRight size={20} />
              </>
            )}
          </button>
        </form>

        {/* Footer info */}
        <p className="text-center text-gray-400 text-xs">
          © 2026 GTG Giang Thành. All rights reserved.
        </p>
      </div>
    </div>
  );
}
