"use client";

import { useLanguage } from "@/contexts/LanguageContext";

interface ProductItem {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
}

export function CategoryParentPage({ categoryName }: { categoryName: string }) {
  const { t } = useLanguage();

  // Dữ liệu mẫu giả lập từ ảnh bạn gửi
  const products: ProductItem[] = [
    {
      id: "1",
      name: "Digitizing Board",
      description:
        "High-precision digitizing equipment for patterns and templates, supporting design and production.",
      image: "/images/products/digitizer.png",
      tags: ["High precision", "Computer connection", "Software included"],
    },
    {
      id: "2",
      name: "Pattern Printer",
      description:
        "Large format marker printing machine, fast printing, saving ink and paper.",
      image: "/images/products/printer.png",
      tags: ["Large format", "High speed", "Cost saving"],
    },
    // ... thêm các sản phẩm khác tương tự ảnh
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Header Banner Section */}
      <div
        className="relative bg-blue-900 py-16 px-4 sm:px-6 lg:px-8 text-white overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.8)), url('/images/banner_product/gtg_bgr_detail.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="text-sm mb-4 text-blue-200">
            Products /{" "}
            <span className="text-white font-medium">{categoryName}</span>
          </nav>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            {categoryName}
          </h1>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl">
            Modern equipment for production preparation: digitizing patterns,
            printing markers, spreading and automatic fabric cutting with high
            precision.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* 2. Overview Section Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 leading-relaxed">
            {`GTG's Print, Router, Spread & Cut product line includes high-tech
            equipment for production preparation in the garment industry. From
            digitizing patterns, printing cutting markers, to automatic fabric
            spreading and cutting - all optimized for maximum efficiency.`}
          </p>
        </div>

        {/* 3. Equipment Types Grid */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Equipment Types
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col border border-gray-50"
            >
              {/* Image Container */}
              <div className="h-64 bg-white p-6 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 flex-grow flex flex-col border-t border-gray-50">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                  {product.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-medium rounded border border-blue-100 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Details Link */}
                <div className="mt-auto">
                  <a
                    href={`#`}
                    className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors group"
                  >
                    View products
                    <svg
                      className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
