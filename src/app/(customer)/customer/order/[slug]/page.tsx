"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Hoặc 'next/router' tùy version bạn dùng
import {
  CheckCircle,
  Package,
  MapPin,
  Phone,
  User,
  Send,
  Loader2,
  ShoppingBag,
  XCircle,
} from "lucide-react";
import { confirmQuoteByCustomer, getQuoteByToken } from "@/lib/queries/quote";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image?: string;
}

// Giả sử đây là dữ liệu bạn fetch từ NestJS thông qua slug/token
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Máy bơm công nghiệp 2HP",
    quantity: 2,
    price: 2500000,
    image: "https://via.placeholder.com/50",
  },
  {
    id: "2",
    name: "Ống dẫn nhiệt chịu áp lực",
    quantity: 10,
    price: 150000,
    image: "https://via.placeholder.com/50",
  },
];

export default function OrderConfirmPage() {
  const params = useParams();
  const slug: any = params.slug;

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [quoteData, setQuoteData] = useState<any>(null);
  const [currentCustomer, setCurrentCustomer] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [error, setError] = useState(false);

  // Trong file page.tsx (NextJS)

  useEffect(() => {
    const getQuote = async () => {
      try {
        const data = await getQuoteByToken(slug);
        console.log("Quote data:", data);
        setQuoteData(data);
      } catch (error) {
        if ((error as any).response?.status === 404) {
          setError(true);
        }
      }
    };
    getQuote();
  }, [slug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const customerInfo = {
        customerName:
          currentCustomer.name === ""
            ? quoteData?.customerName
            : currentCustomer.name,
        customerPhone:
          currentCustomer.phone === ""
            ? quoteData?.customerPhone
            : currentCustomer.phone,
        customerAddress: currentCustomer.address,
      };
      const data = await confirmQuoteByCustomer(slug, customerInfo);
      console.log("Confirm data:", customerInfo);
      setSubmitted(true);
    } catch (error) {
      console.error("Error confirming quote:", error);
    } finally {
      setLoading(false);
    }
  };

  // Tính tổng tiền
  const totalPrice =
    quoteData?.items?.reduce(
      (sum: number, item: any) => sum + item.unitPrice * item.quantity,
      0,
    ) || 0;

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Xác nhận thành công!
          </h2>
          <p className="text-gray-600">Đơn hàng của bạn đang được xử lý.</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircle className="w-12 h-12 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Lỗi xác nhận đơn hàng!
          </h2>
          <p className="text-gray-600">
            Đơn hàng này không tồn tại hoặc đã được xác nhận trước đó.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-black text-slate-900 uppercase">
            Xác Nhận Đơn Hàng
          </h1>
          <p className="text-slate-500 text-sm">Mã xác thực: {slug}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* CỘT HIỂN THỊ SẢN PHẨM (6/12) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-slate-700">Chi tiết sản phẩm</h3>
              </div>

              <div className="p-0">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="text-xs uppercase text-slate-400 bg-slate-50/50">
                      <th className="px-6 py-3 font-semibold">Sản phẩm</th>
                      <th className="px-6 py-3 font-semibold text-center">
                        SL
                      </th>
                      <th className="px-6 py-3 font-semibold text-right">
                        Đơn giá
                      </th>
                      <th className="px-6 py-3 font-semibold text-right">
                        Thành tiền
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {quoteData?.items?.map((product: any) => (
                      <tr
                        key={product.id}
                        className="hover:bg-slate-50/50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-slate-100 rounded-lg flex-shrink-0 flex items-center justify-center text-slate-400 text-xs">
                              <Image
                                src={product.product.images[0]}
                                alt={product.product.translations[0].name}
                                width={48}
                                height={48}
                              />
                            </div>
                            <span className="font-medium text-slate-800 text-sm line-clamp-2">
                              {product.product.translations[0].name}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-sm text-slate-600">
                          {product.quantity}
                        </td>
                        <td className="px-6 py-4 text-right text-sm text-slate-600">
                          {Number(product.unitPrice).toLocaleString()}đ
                        </td>
                        <td className="px-6 py-4 text-right text-sm font-bold text-slate-900">
                          {(
                            product.unitPrice * product.quantity
                          ).toLocaleString()}
                          đ
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50/50 px-6 py-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 font-medium">
                    Tổng cộng thanh toán:
                  </span>
                  <span className="text-xl font-black text-blue-700">
                    {totalPrice.toLocaleString()}đ
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex gap-3 text-amber-700 text-sm">
              <Package className="w-5 h-5 flex-shrink-0" />
              <p>
                Vui lòng kiểm tra kỹ danh sách sản phẩm và số lượng trước khi
                nhấn xác nhận phía bên phải.
              </p>
            </div>
          </div>

          {/* CỘT NHẬP THÔNG TIN KHÁCH HÀNG (5/12) */}
          <div className="lg:col-span-5">
            <form
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 sticky top-4"
              onSubmit={handleSubmit}
            >
              <h3 className="font-bold text-slate-700 mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600" /> Thông tin nhận hàng
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                    Họ và tên người nhận *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Nguyễn Văn A"
                    value={quoteData?.customerName}
                    onChange={(e) =>
                      setCurrentCustomer({
                        ...currentCustomer,
                        name: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                    Số điện thoại người nhận *
                  </label>
                  <input
                    required
                    type="tel"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20"
                    placeholder="090..."
                    value={quoteData?.customerPhone || currentCustomer.phone}
                    onChange={(e) =>
                      setCurrentCustomer({
                        ...currentCustomer,
                        phone: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                    Địa chỉ giao hàng *
                  </label>
                  <textarea
                    required
                    rows={3}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Số nhà, tên đường..."
                    value={
                      quoteData?.customerAddress || currentCustomer.address
                    }
                    onChange={(e) =>
                      setCurrentCustomer({
                        ...currentCustomer,
                        address: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-slate-200"
              >
                <Send className="w-4 h-4" /> XÁC NHẬN ĐƠN HÀNG
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
