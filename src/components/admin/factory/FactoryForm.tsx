"use client";

import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import {
  MapPin,
  Clock,
  Mail,
  Phone,
  Building,
  Users,
  Plus,
  Trash2,
} from "lucide-react";
import { toast } from "react-toastify";
import { saveFactoryAction } from "@/app/(test)/(dashboard)/admin_test/factory/overview/action";

import dynamic from "next/dynamic";

// Import MapPicker với SSR = false để tránh lỗi window is not defined
const LocationPicker = dynamic(
  () => import("@/components/admin/LocationPicker"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[400px] bg-gray-100 animate-pulse rounded-2xl" />
    ),
  },
);

const DAYS_OF_WEEK = [
  { label: "CN", value: 0 },
  { label: "T2", value: 1 },
  { label: "T3", value: 2 },
  { label: "T4", value: 3 },
  { label: "T5", value: 4 },
  { label: "T6", value: 5 },
  { label: "T7", value: 6 },
];

export default function FactoryForm({
  initialData,
  onSuccess,
}: {
  initialData?: any;
  onSuccess: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: initialData || {
      name: "",
      phone: "",
      email: "",
      address: "",
      maxEmployees: 100,
      hourStartWork: "08:00",
      hourEndWork: "17:00",
      workDays: [1, 2, 3, 4, 5, 6], // Mặc định nghỉ CN
      location: {
        x: 10.823022,
        y: 106.629699,
      },
      branchLocations: [],
    },
  });

  const workDays = watch("workDays");
  const lat = watch("location.x");
  const lng = watch("location.y");
  const branches = watch("branchLocations");

  const onSubmit = async (data: any) => {
    if (data.workDays.length === 0) {
      toast.error("Vui lòng chọn ít nhất một ngày làm việc");
      return;
    }
    setLoading(true);
    const result = await saveFactoryAction(data, initialData?.id);
    if (result.success) {
      toast.success("Lưu thông tin thành công");
      onSuccess();
    } else {
      toast.error(result.message);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-sm">
      {/* 1. Thông tin chung */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="font-bold text-gray-700">Tên nhà máy *</label>
          <input
            {...register("name", { required: "Bắt buộc" })}
            className="w-full border p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Nhập tên nhà máy"
          />
        </div>
        <div className="space-y-1">
          <label className="font-bold text-gray-700">Số điện thoại *</label>
          <input
            {...register("phone", { required: "Bắt buộc" })}
            className="w-full border p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Nhập số điện thoại"
          />
        </div>
        <div className="md:col-span-2 space-y-1">
          <label className="font-bold text-gray-700">Email</label>
          <input
            {...register("email")}
            className="w-full border p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Nhập email (không bắt buộc)"
          />
        </div>
        <div className="md:col-span-2 space-y-1">
          <label className="font-bold text-gray-700">Địa chỉ *</label>
          <input
            {...register("address", { required: "Bắt buộc" })}
            className="w-full border p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Nhập địa chỉ nhà máy( hoặc chọn bản đồ để lấy địa chỉ)"
          />
        </div>
      </div>

      {/* 4. Bản đồ & Tọa độ */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="font-bold text-gray-700">
            Vị trí trên bản đồ *
          </label>
          <button
            type="button"
            onClick={() => setShowMap(!showMap)}
            className="text-xs bg-green-600 text-white px-3 py-1.5 rounded-lg flex items-center gap-1"
          >
            {showMap ? "Ẩn bản đồ" : "Hiện bản đồ"}
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-gray-400 uppercase">
              Vĩ độ (Latitude - X)
            </span>
            <input
              {...register("location.x")}
              className="w-full p-2 bg-gray-50 border rounded-lg text-xs font-mono"
              readOnly
            />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-gray-400 uppercase">
              Kinh độ (Longitude - Y)
            </span>
            <input
              {...register("location.y")}
              className="w-full p-2 bg-gray-50 border rounded-lg text-xs font-mono"
              readOnly
            />
          </div>
        </div>

        {showMap && (
          <div className="space-y-3">
            {/* Controller cho bản đồ */}
            <Controller
              control={control}
              name="location"
              render={() => (
                <LocationPicker
                  latitude={lat}
                  longitude={lng}
                  onLocationChange={(newLat, newLng, newAddr) => {
                    // ĐẨY DỮ LIỆU QUA FORM TẠI ĐÂY
                    setValue("latitude", newLat);
                    setValue("longitude", newLng);
                    if (newAddr) {
                      setValue("address", newAddr); // Tự cập nhật ô địa chỉ phía trên
                    }
                  }}
                />
              )}
            />
          </div>
        )}
      </div>

      {/* 2. Quy mô & Thời gian */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-1">
          <label className="font-bold text-gray-700">
            Số nhân viên tối đa *
          </label>
          <input
            type="number"
            {...register("maxEmployees")}
            className="w-full border p-2.5 rounded-lg outline-none"
          />
        </div>
        <div className="space-y-1">
          <label className="font-bold text-gray-700">Giờ bắt đầu *</label>
          <input
            type="time"
            {...register("hourStartWork")}
            className="w-full border p-2.5 rounded-lg outline-none"
          />
        </div>
        <div className="space-y-1">
          <label className="font-bold text-gray-700">Giờ kết thúc *</label>
          <input
            type="time"
            {...register("hourEndWork")}
            className="w-full border p-2.5 rounded-lg outline-none"
          />
        </div>
      </div>

      {/* 3. Ngày làm việc */}
      <div className="space-y-2">
        <label className="font-bold text-gray-700">Ngày làm việc *</label>
        <div className="flex flex-wrap gap-2">
          {DAYS_OF_WEEK.map((day) => (
            <button
              key={day.value}
              type="button"
              onClick={() => {
                const current = [...workDays];
                const index = current.indexOf(day.value);
                if (index > -1) current.splice(index, 1);
                else current.push(day.value);
                setValue("workDays", current);
              }}
              className={`flex-1 min-w-[60px] py-2 rounded-lg border transition-all font-medium ${
                workDays.includes(day.value)
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              {day.label}
            </button>
          ))}
        </div>
        {workDays.length === 0 && (
          <p className="text-red-500 text-xs">
            Vui lòng chọn ít nhất một ngày làm việc
          </p>
        )}
      </div>

      {/* 5. Chi nhánh */}
      <div className="border-t pt-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold">Chi nhánh (tùy chọn)</h3>
          <button
            type="button"
            className="text-xs border px-3 py-1.5 rounded-lg flex items-center gap-1 hover:bg-gray-50"
          >
            <Plus size={14} /> Thêm chi nhánh
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {branches.length > 0 ? (
            branches.map((branch: any) => (
              <div
                key={branch.name}
                className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-xl group/branch hover:bg-white hover:border-blue-200 hover:shadow-sm transition-all cursor-default"
              >
                <MapPin size={12} className="text-blue-500" />
                <span className="text-xs font-semibold text-gray-600 group-hover/branch:text-blue-600">
                  {branch.name}
                </span>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 py-4 bg-gray-50 rounded-xl border border-dashed w-full">
              Chưa có chi nhánh nào
            </p>
          )}
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex gap-3 pt-6">
        <button
          type="button"
          onClick={onSuccess}
          className="flex-1 py-3 font-bold border rounded-xl hover:bg-gray-50 transition-all"
        >
          Hủy
        </button>
        <button
          type="submit"
          disabled={loading}
          className="flex-1 py-3 font-bold bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 disabled:opacity-50"
        >
          {loading ? "Đang xử lý..." : initialData ? "Cập nhật" : "Tạo mới"}
        </button>
      </div>
    </form>
  );
}
