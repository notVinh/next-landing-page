"use client";

import React, { useActionState, useState, useTransition } from "react";
import { useForm, FormProvider } from "react-hook-form";
import {
  ChevronLeft,
  Send,
  Package,
  User,
  Info,
  Edit3,
  AlertCircle,
  Box,
  Layers,
  Save,
  X,
  Loader2,
} from "lucide-react";
import { InfoField } from "../FormComponents";
import FinanceSection from "./FinanceSection";
import { formatDateTime } from "@/config/formatDateTime";
import { SaveInfoOrderAction } from "@/app/(test)/(dashboard)/test/misa/order/action";

export default function OrderDetailModal({
  order,
  onClose,
}: {
  order: any;
  onClose: () => void;
}) {
  // --- STATES QUẢN LÝ VIỆC HIỂN THỊ (UI) ---
  const [isEditingSale, setIsEditingSale] = useState(false);
  const [isEditingFinance, setIsEditingFinance] = useState(false);
  const [isEditingExtra, setIsEditingExtra] = useState(false);

  // Dùng useTransition để đồng bộ với Server Action
  const [isPending, startTransition] = useTransition();

  // --- REACT HOOK FORM QUẢN LÝ DỮ LIỆU ---
  const methods = useForm({
    defaultValues: {
      requestedDeliveryDate: order.requestedDeliveryDate,
      actualExportDate: order.actualExportDate,
      region: order.region || "Chưa nhập",
      priority: order.priority || "Bình thường",
      machineType: order.machineType,
      saleType: order.saleType,
      receiverName: order.receiverName || "Chưa nhập",
      receiverPhone: order.receiverPhone,
      localDeliveryStatus: order.localDeliveryStatus || null,
      totalAmount: order.totalAmount || 2000000,
      costPrice: order.costPrice || 1500000,
      inventoryCost: 50000,
      shippingCost: 15000,
      discount: 100000,
      extraNeeded: false,
      additionalOrderNote: order.additionalOrderNote || null,
    },
  });

  const { register, watch, handleSubmit } = methods;
  const formValues = watch();

  if (!order) return null;

  // --- LOGIC SERVER ACTION ---
  // const [state, formAction] = useActionState(SaveInfoOrderAction, null);

  // Hàm xử lý lưu chung cho các section
  const handleProcessSave = handleSubmit((data: any) => {
    startTransition(async () => {
      // Gọi Action Router với ID và dữ liệu từ Form
      await SaveInfoOrderAction(order.id, data);

      // Sau khi lưu thành công, đóng các mode edit
      setIsEditingSale(false);
      setIsEditingFinance(false);
      setIsEditingExtra(false);
    });
  });

  return (
    <FormProvider {...methods}>
      <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-900/40 backdrop-blur-sm">
        <div className="bg-slate-50 w-full max-w-5xl h-full overflow-y-auto shadow-2xl animate-in slide-in-from-right duration-300">
          {/* Modal Header */}
          <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between z-10">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold transition-colors"
            >
              <ChevronLeft size={20} /> Quay lại danh sách
            </button>
            <div className="flex gap-3">
              <button className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl font-bold text-slate-600 text-sm hover:bg-slate-50">
                Chờ nhập thông tin
              </button>
              <button
                onClick={handleProcessSave}
                disabled={isPending}
                className="px-5 py-2.5 bg-green-500 text-white rounded-xl font-bold text-sm hover:bg-green-600 flex items-center gap-2 shadow-lg shadow-green-200 disabled:opacity-70"
              >
                {isPending ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Send size={16} />
                )}
                {isPending ? "Đang gửi..." : "Gửi BGĐ"}
              </button>
            </div>
          </div>

          <div className="p-8 space-y-6">
            {/* Order ID & Badge */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                <Package size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900 text-balance">
                  Đơn hàng #{order.refNo || order.id}
                </h2>
                <p className="text-xs text-slate-400 font-medium">
                  Ngày tạo: {order.createdAt}
                </p>
              </div>
            </div>

            {/* SECTION: THÔNG TIN SALE ADMIN */}
            <div className="bg-white p-6 rounded-[1.5rem] border border-slate-200 shadow-sm relative transition-all">
              <div className="flex justify-between items-center mb-6">
                <h3 className="flex items-center gap-2 font-bold text-slate-800 text-lg">
                  <Info className="text-purple-500" size={20} /> Thông tin Sale
                  Admin
                </h3>
                <button
                  type="button"
                  onClick={() => {
                    if (isEditingSale) {
                      handleProcessSave(); // Nếu đang sửa mà nhấn Lưu thì gọi Action
                    } else {
                      setIsEditingSale(true);
                    }
                  }}
                  disabled={isPending}
                  className={`flex items-center gap-1 px-4 py-1.5 rounded-lg font-bold text-sm transition-all ${
                    isEditingSale
                      ? "bg-green-500 text-white shadow-md shadow-green-100"
                      : "text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {isPending && isEditingSale ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : isEditingSale ? (
                    <>
                      <Save size={16} /> Lưu
                    </>
                  ) : (
                    <>
                      <Edit3 size={16} /> Sửa
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
                <InfoField
                  label="Ngày yêu cầu giao"
                  value={formatDateTime(formValues.requestedDeliveryDate)}
                  isEditing={isEditingSale}
                  registration={register("requestedDeliveryDate")}
                  type="datetime-local"
                />
                <InfoField
                  label="Ngày thực tế xuất kho"
                  value={formatDateTime(formValues.actualExportDate)}
                  isEditing={isEditingSale}
                  registration={register("actualExportDate")}
                  type="datetime-local"
                />
                <InfoField
                  label="Khu vực"
                  value={formValues.region}
                  isEditing={isEditingSale}
                  registration={register("region")}
                  type="select"
                  options={[
                    { label: "--Chọn--", value: "null" },
                    { label: "Miền Bắc", value: "Miền Bắc" },
                    { label: "Miền Trung", value: "Miền Trung" },
                    { label: "Miền Nam", value: "Miền Nam" },
                  ]}
                />
                <InfoField
                  label="Độ ưu tiên"
                  value={formValues.priority}
                  isEditing={isEditingSale}
                  registration={register("priority")}
                  type="select"
                  options={[
                    { label: "--Chọn--", value: "null" },
                    { label: "Bình thường", value: "Bình thường" },
                    { label: "Gấp", value: "Gấp" },
                    { label: "Rất Gấp", value: "Rất Gấp" },
                  ]}
                />
                <InfoField
                  label="Phân loại máy"
                  value={formValues.machineType}
                  isEditing={isEditingSale}
                  registration={register("machineType")}
                  type="select"
                  options={[
                    { label: "--Chọn--", value: "null" },
                    { label: "Máy mới", value: "Máy mới" },
                    { label: "Máy cũ", value: "Máy cũ" },
                  ]}
                />
                <InfoField
                  label="Loại"
                  value={formValues.saleType}
                  isEditing={isEditingSale}
                  registration={register("saleType")}
                  type="select"
                  options={[
                    { label: "--Chọn--", value: "null" },
                    { label: "Bán", value: "Bán" },
                    { label: "Cho Thuê", value: "Cho Thuê" },
                    { label: "Cho Mượn", value: "Cho Mượn" },
                    { label: "Trả hàng", value: "Trả hàng" },
                  ]}
                />
                <InfoField
                  label="Tình trạng giao hàng"
                  value={formValues.localDeliveryStatus}
                  isEditing={isEditingSale}
                  registration={register("localDeliveryStatus")}
                  type="select"
                  options={[
                    { label: "--Chọn--", value: "null" },
                    { label: "Chưa giao", value: "Chưa giao" },
                    { label: "Đã giao", value: "Đã giao" },
                  ]}
                />
                <InfoField
                  label="Người nhận"
                  value={formValues.receiverName}
                  isEditing={isEditingSale}
                  registration={register("receiverName")}
                />
                <InfoField
                  label="Số điện thoại người nhận"
                  value={formValues.receiverPhone}
                  registration={register("receiverPhone")}
                  isEditing={isEditingSale}
                />
              </div>
            </div>

            {/* SECTION: THÔNG TIN ĐẶT THÊM HÀNG */}
            <div className="bg-white p-6 rounded-[1.5rem] border border-slate-200 shadow-sm relative overflow-hidden transition-all">
              <div className="flex justify-between items-center mb-4">
                <h3 className="flex items-center gap-2 font-bold text-orange-600 text-lg">
                  <Box size={20} /> Thông tin đặt thêm hàng
                </h3>
                {!isEditingExtra && (
                  <button
                    onClick={() => setIsEditingExtra(true)}
                    className="text-orange-600 bg-orange-50 text-xs font-bold flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-orange-100 transition-all"
                  >
                    <Edit3 size={14} /> Sửa
                  </button>
                )}
              </div>

              {isEditingExtra ? (
                <div className="bg-orange-50/50 border border-orange-200 rounded-2xl p-5 animate-in fade-in zoom-in duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-5 h-5 accent-orange-500 rounded"
                        {...register("extraNeeded")}
                      />
                      <span className="font-bold text-slate-700 group-hover:text-orange-600 transition-colors">
                        Cần đặt thêm hàng
                      </span>
                    </label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setIsEditingExtra(false)}
                        className="flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 text-slate-500 rounded-lg font-bold text-xs hover:bg-slate-50"
                      >
                        <X size={14} /> Hủy
                      </button>
                      <button
                        type="button"
                        onClick={handleProcessSave}
                        className="flex items-center gap-1 px-4 py-1.5 bg-orange-500 text-white rounded-lg font-bold text-xs hover:bg-orange-600 shadow-md shadow-orange-100"
                      >
                        <Save size={14} /> Lưu
                      </button>
                    </div>
                  </div>
                  <textarea
                    {...register("additionalOrderNote")}
                    placeholder="Nhập nội dung chi tiết về hàng cần đặt thêm..."
                    className="w-full min-h-[100px] p-4 bg-white border border-orange-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all shadow-inner"
                  />
                </div>
              ) : (
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${formValues.extraNeeded ? "bg-orange-100 text-orange-600" : "bg-slate-200 text-slate-400"}`}
                  >
                    {formValues.extraNeeded ? "!" : "-"}
                  </div>
                  <p
                    className={`text-sm font-bold ${formValues.extraNeeded ? "text-slate-800" : "text-slate-500"}`}
                  >
                    {formValues.extraNeeded
                      ? formValues.additionalOrderNote ||
                        "Đã xác nhận đặt thêm (Chưa có ghi chú)"
                      : "Không cần đặt thêm hàng"}
                  </p>
                </div>
              )}
            </div>

            {/* SECTION: CHI TIẾT SẢN PHẨM */}
            <div className="bg-white rounded-[1.5rem] border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="flex items-center gap-2 font-bold text-purple-600 text-lg">
                  <Layers size={20} /> Chi tiết đơn hàng (1 sản phẩm)
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase">
                        STT
                      </th>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase">
                        Mã SP
                      </th>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase">
                        Mô tả
                      </th>
                      <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase text-right">
                        Thành tiền
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-bold text-slate-400">
                        01
                      </td>
                      <td className="px-6 py-4 text-sm font-black text-blue-600">
                        SP-001
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-slate-700 uppercase">
                        Máy in Canon LBP 2900
                      </td>
                      <td className="px-6 py-4 text-sm font-black text-blue-600 text-right">
                        600,000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* SECTION: KHÁCH HÀNG & TÀI CHÍNH */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-[1.5rem] border border-slate-200 shadow-sm">
                <h3 className="flex items-center gap-2 font-bold text-slate-800 mb-6">
                  <User className="text-blue-500" size={20} /> Thông tin khách
                  hàng
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Mã KH
                    </p>
                    <p className="font-bold text-slate-800 italic">
                      0318601276
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Tên khách hàng
                    </p>
                    <p className="font-bold text-slate-800">{order.customer}</p>
                  </div>
                </div>
              </div>

              <FinanceSection
                isEditing={isEditingFinance}
                onToggleEdit={() => {
                  if (isEditingFinance) {
                    handleProcessSave();
                  } else {
                    setIsEditingFinance(true);
                  }
                }}
              />
            </div>

            {/* SECTION: THÔNG TIN BỔ SUNG */}
            <div className="bg-white p-6 rounded-[1.5rem] border border-slate-200 shadow-sm relative">
              <h3 className="flex items-center gap-2 font-bold text-slate-800 mb-6">
                <AlertCircle className="text-orange-500" size={20} /> Thông tin
                bổ sung
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <InfoField
                  label="Chi nhánh"
                  value={order.branch || "GIANG THÀNH"}
                />
                <InfoField
                  label="Người tạo"
                  value={order.createdBy || "Hà Trí Dũng"}
                />
                <InfoField
                  label="Kinh Doanh"
                  value={order.createdBy || "Hà Trí Dũng"}
                />
                <InfoField label="Đã xuất hóa đơn" value="Chưa" />
                <div className="col-span-full">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                    Diễn giải
                  </p>
                  <p className="text-sm font-bold text-slate-600 italic">
                    A Trường 096 2367508/ 0916 568 466 Liên
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}
