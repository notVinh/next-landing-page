import {
  ArrowDownCircle,
  CreditCard,
  Edit3,
  Save,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import React from "react";
import { useFormContext } from "react-hook-form";

const FinanceSection = ({
  isEditing,
  onToggleEdit,
}: {
  isEditing: boolean;
  onToggleEdit: () => void;
}) => {
  const { register, watch } = useFormContext(); // Lấy context từ cha
  const vals = watch();

  // Logic tính toán giữ nguyên của bạn
  const total = Number(vals.totalAmount) || 0; // Tổng tiền tất cả sản phẩm
  const disc = Number(vals.discount) || 0; // Tiền giảm giá (chiết khấu)
  const cost = Number(vals.costPrice) || 0; // Giá gốc các sản phẩm
  const revenue = total - disc; // Doanh thu
  const vat = (revenue * 10) / 100; // Thuế VAT
  const customerPay = revenue + vat; // Số tiền khách hàng phải trả
  const grossProfit = revenue - cost - 65000; // trừ các phí (lợi nhuận gộp)
  const margin = revenue > 0 ? (grossProfit / revenue) * 100 : 0; // phần trăm lợi nhuận gộp

  return (
    <div
      className={`bg-white p-6 rounded-[1.5rem] border transition-all duration-300 shadow-sm ring-2 ${isEditing ? "ring-blue-400 border-blue-400 shadow-lg" : "ring-blue-50/50 border-slate-200"}`}
    >
      <h3 className="flex items-center justify-between font-bold text-slate-800 mb-6">
        <span className="flex items-center gap-2">
          <CreditCard className="text-green-500" size={20} /> Thông tin tài
          chính
        </span>
        <button
          type="button"
          onClick={() => onToggleEdit()}
          className={`text-[10px] px-3 py-1 rounded-md uppercase font-black flex items-center gap-1 transition-all ${
            isEditing
              ? "bg-green-500 text-white"
              : "bg-blue-50 text-blue-600 hover:bg-blue-100"
          }`}
        >
          {isEditing ? (
            <>
              <Save size={12} /> Lưu
            </>
          ) : (
            <>
              <Edit3 size={12} /> Sửa
            </>
          )}
        </button>
      </h3>

      <div className="space-y-3">
        <div className="flex justify-between text-sm border-b border-gray-100 pb-1">
          <span className="text-slate-500">Tổng tiền hàng:</span>
          {isEditing ? (
            <input
              type="number"
              {...register("total")}
              className="font-bold text-right bg-blue-50/50 w-28 border-b-2 border-blue-400 outline-none"
            />
          ) : (
            <span className="font-bold">{total.toLocaleString()} đ</span>
          )}
        </div>

        <div className="flex justify-between text-sm italic">
          <span className="text-slate-400 tracking-tight">Chiết khấu:</span>
          {isEditing ? (
            <input
              type="number"
              {...register("disc")}
              className="font-bold text-right text-red-500 bg-blue-50/50 w-28 border-b-2 border-blue-400 outline-none"
            />
          ) : (
            <span className="font-bold text-red-500">
              {disc.toLocaleString()} đ
            </span>
          )}
        </div>

        <div className="flex justify-between text-sm italic">
          <span className="text-slate-400 tracking-tight">VAT (10%):</span>
          <span className="font-bold text-blue-500">
            {vat.toLocaleString()} đ
          </span>
        </div>

        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ArrowDownCircle size={16} className="text-blue-500" />
            <span className="text-xs font-black text-slate-600 uppercase">
              Khách phải trả:
            </span>
          </div>
          <span className="font-black text-slate-900">
            {customerPay.toLocaleString()} đ
          </span>
        </div>

        <div className="flex justify-between text-sm italic border-b border-gray-100 pb-1">
          <span className="text-slate-400 tracking-tight">
            Doanh thu (Sau CK):
          </span>
          <span className="font-bold text-green-500">
            {revenue.toLocaleString()} đ
          </span>
        </div>

        <div className="flex justify-between text-sm italic">
          <span className="text-slate-400 tracking-tight">
            Giá vốn hàng bán:
          </span>
          {isEditing ? (
            <input
              type="number"
              {...register("cost")}
              className="font-bold text-right text-gray-500 bg-blue-50/50 w-28 border-b-2 border-blue-400 outline-none"
            />
          ) : (
            <span className="font-bold text-gray-500">
              {cost.toLocaleString()} đ
            </span>
          )}
        </div>

        <div className="border-t-2 border-dashed border-slate-100 pt-3 flex justify-between items-end">
          <div>
            <span className="font-black text-slate-800 uppercase text-[10px] block mb-1">
              Lợi nhuận gộp (Dự kiến)
            </span>
            <span
              className={`text-xl font-black ${grossProfit >= 0 ? "text-green-600" : "text-red-600"}`}
            >
              {grossProfit.toLocaleString()} đ
            </span>
          </div>
          <div className="text-right">
            <span className="font-black text-slate-800 uppercase text-[10px] block mb-1">
              % LN gộp
            </span>
            <span
              className={`flex items-center justify-end gap-1 font-black ${margin >= 15 ? "text-blue-600" : "text-orange-500"}`}
            >
              {margin.toFixed(1)}%{" "}
              {margin > 0 ? (
                <TrendingUp size={14} />
              ) : (
                <TrendingDown size={14} />
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceSection;
