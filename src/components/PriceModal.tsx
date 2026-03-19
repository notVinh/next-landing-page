"use client";

import { Fragment, useEffect, useState } from "react";
import { Dialog, Tab, Transition } from "@headlessui/react";
import { XMarkIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { getProductPrices, getProductPricesArray } from "@/config/formatPrice";

interface PriceModalProps {
  isOpen: boolean;
  onClose: () => void;
  // productName: string;
  // price: number;
  // originalPrice: number;
  product: any;
  productName: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function PriceModal({
  productData,
  productName,
}: {
  productData: any;
  productName: string;
}) {
  const [showModal, setShowModal] = useState(false);
  //   const productPrices = {
  //     VND: { original: "20.000.000đ", current: "15.500.000đ" },
  //     USD: { original: "$850", current: "$650" },
  //     RMB: { original: "¥6,000", current: "¥4,600" },
  //   };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        // className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 font-bold"
        className="flex-1 bg-blue-600 border-2 hover:bg-white hover:text-blue-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
      >
        Xem giá
      </button>

      <PriceModalDetail
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        productName={productName}
        // basePrice="15.500.000 VNĐ"
        // price={productPrices}
        product={productData}
      />
    </>
  );
}

function PriceModalDetail({
  isOpen,
  onClose,
  product,
  productName,
}: PriceModalProps) {
  // Lấy danh sách giá dựa trên props truyền vào
  const productPrices = getProductPricesArray(
    product.originalPrice,
    product.price,
  );

  // Quản lý tab bằng index (0, 1, 2) để khớp hoàn hảo với Headless UI
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Lớp nền mờ (Backdrop) */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-md">
                {/* Nút X đóng Modal */}
                <div className="absolute right-0 top-0 pr-4 pt-4 z-10">
                  <button
                    onClick={onClose}
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="bg-white px-6 pb-8 pt-10">
                  <div className="w-full">
                    <Dialog.Title
                      as="h3"
                      className="text-xl font-bold leading-6 text-gray-900 border-b pb-4 text-center "
                    >
                      Bảng Giá
                    </Dialog.Title>

                    {/* Thông tin sản phẩm */}
                    <div className="mt-6 text-center">
                      <p className="text-sm text-gray-500 uppercase tracking-widest">
                        Sản phẩm hiện tại
                      </p>
                      <p className="text-lg font-bold text-blue-700 mt-1">
                        {productName}
                      </p>
                      <p className=" font-bold text-gray-700 mt-2">
                        Model: {product.model}
                      </p>
                    </div>

                    {/* Tabs chuyển đổi */}
                    <Tab.Group
                      selectedIndex={selectedIndex}
                      onChange={setSelectedIndex}
                    >
                      <Tab.List className="flex space-x-1 rounded-xl bg-gray-100 p-1 mt-6">
                        {productPrices.map((currency) => (
                          <Tab
                            key={currency.id}
                            className={({ selected }) =>
                              classNames(
                                "w-full rounded-lg py-2.5 text-sm font-bold leading-5 transition-all duration-200",
                                "focus:outline-none ring-offset-2 ring-white",
                                selected
                                  ? "bg-white text-blue-700 shadow"
                                  : "text-gray-500 hover:bg-white/[0.5] hover:text-blue-600",
                              )
                            }
                          >
                            {currency.id}
                          </Tab>
                        ))}
                      </Tab.List>

                      <Tab.Panels className="mt-4">
                        {productPrices.map((item) => (
                          <Tab.Panel
                            key={item.id}
                            className="rounded-xl focus:outline-none space-y-4"
                          >
                            {/* Card Giá Gốc */}
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                              <div className="text-center">
                                <p className="text-xs text-black font-semibold uppercase tracking-wider mb-1">
                                  Giá Gốc (Original)
                                </p>
                                <p className="text-3xl font-black text-black decoration-red-400/50">
                                  {item.original}
                                </p>
                              </div>
                            </div>

                            {/* Card Giá Hiện Tại */}
                            <div className="bg-green-50 p-6 rounded-2xl border border-green-100 shadow-sm">
                              <div className="text-center">
                                <p className="text-xs text-green-500 font-semibold uppercase tracking-wider mb-1">
                                  Giá Tham khảo (Current)
                                </p>
                                <p className="text-4xl font-black text-green-700">
                                  {item.current}
                                </p>
                              </div>
                            </div>
                          </Tab.Panel>
                        ))}
                      </Tab.Panels>
                    </Tab.Group>

                    <p className="text-center text-[11px] text-gray-400 mt-6 italic leading-relaxed">
                      * Tỷ giá mang tính chất tham khảo tại thời điểm tra cứu.{" "}
                      <br />
                      Giá thực tế có thể thay đổi tùy theo phương thức thanh
                      toán.
                    </p>
                  </div>
                </div>

                {/* Nút liên hệ dưới chân Modal (Tùy chọn) */}
                <div className="bg-gray-50 px-6 py-4 flex justify-center">
                  <button
                    onClick={onClose}
                    className="text-sm font-semibold text-gray-600 hover:text-gray-900"
                  >
                    Đóng cửa sổ
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
