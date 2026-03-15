import React, { useMemo } from "react";

interface SlideUiProps {
  htmlContent: string; // Truyền desc (HTML) từ Tiptap vào đây
}

const SlideUi = ({ htmlContent }: SlideUiProps) => {
  // Sử dụng useMemo để tránh việc Regex chạy lại liên tục mỗi khi re-render
  const slideUrl = useMemo(() => {
    if (!htmlContent) return null;

    // Regex tìm link Google Presentation
    const regex =
      /https:\/\/docs\.google\.com\/presentation\/d\/[a-zA-Z0-9_-]+/g;
    const match = htmlContent.match(regex);

    if (match && match[0]) {
      // Đảm bảo đuôi luôn là /embed để nhúng được mượt mà
      return `${match[0]}/embed?start=false&loop=false&delayms=3000`;
    }
    return null;
  }, [htmlContent]);

  // Nếu trong nội dung không có link slide thì không hiện component này
  if (!slideUrl) return null;

  return (
    <div className="my-8 w-full border-t border-slate-100 pt-8">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1.5 h-6 bg-indigo-600 rounded-full"></div>
        <h3 className="text-xl font-bold text-slate-800">
          Chi tiết kỹ thuật (Slide)
        </h3>
      </div>

      <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full bg-slate-100 rounded-xl shadow-lg border border-slate-200">
        <iframe
          src={slideUrl}
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allowFullScreen={true}
          loading="lazy"
          title="Google Slides Presentation"
        ></iframe>
      </div>

      <p className="mt-3 text-xs text-slate-400 text-center italic">
        * Bạn có thể xem slide trực tiếp hoặc bấm vào để xem toàn màn hình
      </p>
    </div>
  );
};

export default SlideUi;
