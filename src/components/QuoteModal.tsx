"use client";

import { useEffect, useState } from "react";
import {
  X,
  Send,
  User,
  Phone,
  Mail,
  MapPin,
  FileText,
  PhoneIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { toast } from "react-toastify";
import { sendQuoteRequest } from "@/lib/queries/quote";

export default function QuoteModal({
  //   isOpen,
  //   onClose,
  productId,
  productName,
  lang,
}: {
  productId: string;
  productName: string;
  lang: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(0);

  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    notes: "",
    items: [
      {
        productId: productId,
        quantity: 0,
      },
    ],
  });

  // console.log(formData);

  const COOLDOWN_TIME = 120; // 60 giây

  useEffect(() => {
    const lastSubmit = localStorage.getItem("last_quotation_submit");
    if (lastSubmit) {
      const timePassed = Math.floor((Date.now() - parseInt(lastSubmit)) / 1000);
      if (timePassed < COOLDOWN_TIME) {
        const timeoutId = setTimeout(() => {
          setSecondsLeft(COOLDOWN_TIME - timePassed);
        }, 0);
        return () => clearTimeout(timeoutId);
      }
    }
  }, []);

  useEffect(() => {
    // 2. Bộ đếm ngược chạy mỗi giây
    let timer: NodeJS.Timeout;
    if (secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [secondsLeft]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Ngăn form reload
    setIsLoading(false);
    if (
      formData.customerEmail === "" ||
      formData.customerName === "" ||
      formData.customerPhone === ""
    ) {
      toast.error("ban phai nhap cac truong bat buoc");
    } else {
      {
        const data = await sendQuoteRequest(formData);
        setIsLoading(false);
        toast.success(data.message, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          // transition: Bounce,
        });

        const now = Date.now();
        localStorage.setItem("last_quotation_submit", now.toString());
        setSecondsLeft(COOLDOWN_TIME);
        setIsOpen(false);
      }
    }
  };

  return (
    <>
      <button
        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2"
        onClick={() => setIsOpen(true)}
      >
        <PhoneIcon className="w-5 h-5" />
        {lang === "vi"
          ? "Liên hệ báo giá"
          : lang === "en"
            ? "Request Quote"
            : "联系报价"}
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay mờ phía sau */}
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Nội dung Modal */}
          <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="bg-blue-600 p-8 text-white">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-white/20 rounded-full transition"
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-2xl font-black mb-2">
                {lang === "vi" ? "Nhận báo giá ngay" : "Get a Quote"}
              </h2>
              <p className="text-blue-100 text-sm italic">
                {lang === "vi" ? "Sản phẩm:" : "Product:"}{" "}
                <span className="font-bold underline text-white">
                  {productName}
                </span>
              </p>
            </div>

            <form className="p-8 space-y-4" onSubmit={handleSubmit}>
              {/* Tên & Số điện thoại (Grid 2 cột) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1 flex items-center gap-1">
                    <User size={14} /> {lang === "vi" ? "Họ tên" : "Full Name"}
                  </label>
                  <input
                    type="text"
                    placeholder="..."
                    value={formData.customerName}
                    onChange={(e) =>
                      setFormData({ ...formData, customerName: e.target.value })
                    }
                    className="w-full bg-slate-50 border-none rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 transition"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase ml-1 flex items-center gap-1">
                    <Phone size={14} />{" "}
                    {lang === "vi" ? "Số điện thoại" : "Phone"}
                  </label>
                  <input
                    type="tel"
                    placeholder="..."
                    value={formData.customerPhone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        customerPhone: e.target.value,
                      })
                    }
                    className="w-full bg-slate-50 border-none rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 transition"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1 flex items-center gap-1">
                  <Mail size={14} /> Email
                </label>
                <input
                  type="email"
                  value={formData.customerEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, customerEmail: e.target.value })
                  }
                  required
                  placeholder="email@company.com"
                  className="w-full bg-slate-50 border-none rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              {/* Địa chỉ */}
              {/* <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1 flex items-center gap-1">
                  <MapPin size={14} />{" "}
                  {lang === "vi" ? "Địa chỉ" : "Company Address"}
                </label>
                <input
                  type="text"
                  placeholder="..."
                  className="w-full bg-slate-50 border-none rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 transition"
                />
              </div> */}

              {/* So luong*/}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1 flex items-center gap-1">
                  <ShoppingCartIcon size={14} />{" "}
                  {lang === "vi" ? "So luong" : "Quantity"}
                </label>
                <input
                  type="text"
                  placeholder="..."
                  value={formData.items[0].quantity}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      items: [
                        {
                          ...formData.items[0],
                          quantity: parseInt(e.target.value) || 0,
                        },
                      ],
                    })
                  }
                  className="w-full bg-slate-50 border-none rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              {/* Ghi chú */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1 flex items-center gap-1">
                  <FileText size={14} />{" "}
                  {lang === "vi" ? "Ghi chú thêm" : "Note"}
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  placeholder={
                    lang === "vi"
                      ? "Yêu cầu về số lượng, thông số cấu hình..."
                      : "Quantity, specific requirements..."
                  }
                  className="w-full bg-slate-50 border-none rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading || secondsLeft > 0}
                className="w-full bg-slate-900 hover:bg-black text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-slate-200 mt-4"
              >
                {!isLoading ? (
                  secondsLeft > 0 ? (
                    <div>
                      Ban da gui yeu cau roi, vui long thu lai sau {secondsLeft}
                      s
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {lang === "vi" ? "GỬI YÊU CẦU" : "SEND REQUEST"}
                    </>
                  )
                ) : (
                  <div>Vinh</div>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
