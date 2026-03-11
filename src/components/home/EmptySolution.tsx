import React from "react";

const EmptySolution = () => {
  return (
    <div className="flex items-center justify-center pb-10">
      <div className=" w-full bg-white rounded-sm p-16 flex flex-col items-center text-center">
        {/* Icon vòng tròn chứa dấu cộng */}
        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
          <svg
            className="w-10 h-10 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>

        {/* Tiêu đề */}
        <h3 className="text-2xl font-bold text-slate-800 mb-4">
          Đang Cập Nhật
        </h3>

        {/* Nội dung mô tả */}
        <p className="text-gray-500 max-w-sm leading-relaxed">
          Thông tin chi tiết cho giải pháp này đang được chuẩn bị. Vui lòng quay
          lại sau.
        </p>
      </div>
    </div>
  );
};

export default EmptySolution;
