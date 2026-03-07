// Giả lập dữ liệu sản phẩm để map với productId
export const allProducts = {
  "jack-a4b": {
    name: "Máy may 1 kim Jack A4B",
    nameEn: "Jack A4B Lockstitch Machine",
    nameZh: "杰克 A4B 平缝机",
    images: [
      "https://img.directindustry.com/images_di/photo-mg/21447-15243567.jpg",
    ],
  },
  "jack-c5": {
    name: "Máy vắt sổ Jack C5",
    nameEn: "Jack C5 Overlock Machine",
    nameZh: "杰克 C5 包缝机",
    images: ["https://m.media-amazon.com/images/I/61Nl-V8G6EL.jpg"],
  },
  "gtg-pl-01": {
    name: "Máy lập trình khổ nhỏ",
    nameEn: "Small Pattern Machine",
    nameZh: "小机头花样机",
    images: ["/products/pl-01.jpg"],
  },
  "gtg-ap-13": {
    name: "Máy vắt sổ tự động",
    nameEn: "Auto Overlock",
    nameZh: "自动包缝机",
    images: ["/products/ap-13.jpg"],
  },
  "gtg-ap-03": {
    name: "Máy may túi tự động",
    nameEn: "Auto Pocket Setter",
    nameZh: "自动贴袋机",
    images: ["/products/ap-03.jpg"],
  },
  "gtg-1n-08": {
    name: "Máy 1 kim điện tử",
    nameEn: "1-Needle Lockstitch",
    nameZh: "电脑平缝机",
    images: ["/products/1n-08.jpg"],
  },
  // ... Vinh thêm các mã khác vào đây để map với productId bên dưới
};

const cadCamBenefitIcons = [
  // Icon 1 - Máy tính (CAD)
  `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>`,
  // Icon 2 - Layout/Sơ đồ (CAM)
  `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  </svg>`,
  // Icon 3 - Sét (Tốc độ xử lý)
  `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>`,
  // Icon 4 - Khiên (Độ chính xác)
  `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>`,
];

// 2. Tọa độ các máy trên sơ đồ CAD/CAM (X, Y chuẩn để "trỏ" vô)
const cadCamMachinePositions = [
  {
    id: "digitizer",
    nameVi: "Máy kiểm vải AI",
    nameEn: "AI Fabric Inspection",
    nameZh: "AI 验布机",
    models: ["GTG-DG01"],
    x: 20,
    y: 15,
    side: "left",
    productId: "gtg-dg01",
  },
  {
    id: "plotter",
    nameVi: "Máy in sơ đồ",
    nameEn: "Plotter",
    nameZh: "绘图仪",
    models: ["GT-EP-210"],
    x: 45,
    y: 12,
    side: "left",
    productId: "gtg-pp-02",
  },
  {
    id: "software",
    nameVi: "Máy cắt bìa",
    nameEn: "Pattern Cutter",
    nameZh: "切纸机",
    models: ["GT-C1215"],
    x: 75,
    y: 20,
    side: "right",
    productId: "gtg-pc-01",
  },
  {
    id: "grading",
    nameVi: "Máy phay mica",
    nameEn: "Mica Router",
    nameZh: "有机玻璃铣床",
    models: ["GT-T1215-C"],
    x: 88,
    y: 27,
    side: "right",
    productId: "gtg-mr-01",
  },
  {
    id: "cutter",
    nameVi: "Máy cắt tự động",
    nameEn: "Automatic Cutter",
    nameZh: "自动裁断机",
    models: ["GT9-E2022"],
    x: 65,
    y: 86,
    side: "left",
    productId: "gtg-ac-01",
  },
  {
    id: "spreader",
    nameVi: "Máy trải vải tự động",
    nameEn: "Fabric Spreader",
    nameZh: "自动铺布机",
    models: ["TZS-190S", "TZS-210S"],
    x: 15,
    y: 56,
    side: "left",
    productId: "gtg-sp-01",
  },
  {
    id: "sticker",
    nameVi: "Máy dán nhãn tự động",
    nameEn: "Auto Sticker",
    nameZh: "自动贴标机",
    models: ["GT-D-190"],
    x: 43,
    y: 73,
    side: "right",
    productId: "gtg-label-01",
  },
  {
    id: "table",
    nameVi: "Bàn trải vải",
    nameEn: "Spreading Table",
    nameZh: "铺布台",
    models: ["GTG-NS01"],
    x: 27,
    y: 66,
    side: "right",
    productId: "gtg-sp-02",
  },
];

export const jeanMachinePositions = [
  {
    id: "coin-pocket",
    name: "Sew coin pocket",
    nameVi: "May túi đồng xu",
    nameZh: "缝制零钱袋",
    models: ["GT-1002"],
    x: 22,
    y: 20,
    side: "left",
    productId: "gtg-pl-01",
  },
  {
    id: "small-parts",
    name: "Serge small parts",
    nameVi: "Vắt sổ chi tiết nhỏ",
    nameZh: "小件包边",
    models: ["GT-3001C"],
    x: 22,
    y: 28,
    side: "left",
    productId: "gtg-ap-13",
  },
  {
    id: "j-stitch",
    name: "Sew J-shape",
    nameVi: "May chữ J",
    nameZh: "缝制J形",
    models: ["GT-1003A", "GT-1003B", "GT-1003C"],
    x: 22,
    y: 37,
    side: "left",
    productId: "gtg-ap-03",
  },
  {
    id: "bottom-hem",
    name: "Sew pant hem",
    nameVi: "May lai quần",
    nameZh: "缝裤脚",
    models: ["GT-5003D-L", "GT-5003D-C"],
    x: 22,
    y: 55,
    side: "left",
    productId: "gtg-pl-01",
  },
  {
    id: "waistband",
    name: "Sew waistband",
    nameVi: "May cạp quần",
    nameZh: "缝腰带",
    models: ["GT-2003A", "GT-2003C", "GT-2003D"],
    x: 22,
    y: 65,
    side: "left",
    productId: "gtg-ap-05",
  },
  {
    id: "beltloop",
    name: "Attach belt loop",
    nameVi: "Đính passant",
    nameZh: "缝腰带环",
    models: ["GT-254H-XR"],
    x: 77,
    y: 20,
    side: "right",
    productId: "gtg-ap-08",
  },
  {
    id: "pocket-hem",
    name: "Hem pocket",
    nameVi: "Viền túi",
    nameZh: "口袋卷边",
    models: ["GT-2001B-BR", "GT-2001B-JK", "GT-2001C"],
    x: 78,
    y: 66,
    side: "right",
    productId: "gtg-ap-04",
  },
];

export const dressPantsMachinePositions = [
  {
    id: "left-1",
    name: "Waistband topstitch",
    nameVi: "Mí lưng quần",
    nameZh: "腰带压线",
    models: ["GT-A6F"],
    x: 14,
    y: 11,
    side: "left",
    productId: "gtg-1n-08",
  },
  {
    id: "left-2",
    name: "Auto baguette turning",
    nameVi: "Quay baget tự động",
    nameZh: "自动翻袋盖",
    models: ["GT-1003C"],
    x: 14,
    y: 19,
    side: "left",
    productId: "gtg-ap-03",
  },
  {
    id: "right-12",
    name: "Hem bottom",
    nameVi: "Vắt gấu",
    nameZh: "缝裤脚",
    models: ["GT-5001-3"],
    x: 88,
    y: 40,
    side: "right",
    productId: "gtg-ap-09",
  },
];

export const colorConfigs = {
  blue: {
    gradient: "from-blue-700 to-blue-900",
    bgLight: "bg-blue-100",
    bgLighter: "bg-blue-50",
    text: "text-blue-700",
    textLight: "text-blue-100",
    textLighter: "text-blue-200",
    hover: "hover:text-blue-800",
    hoverBg: "hover:bg-blue-50",
  },
};

const defaultBenefitIcons = [
  `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" /></svg>`,
  `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>`,
  `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
];

// 3. Object cấu hình chính cho trang CAD/CAM

export const solutions = [
  {
    id: "quan-tong-hop",
    translations: [
      {
        languageCode: "vi",
        title: "Giải Pháp Quần Jean & Kaki",
        slug: "quan-tong-hop",
      },
      { languageCode: "en", title: "Jeans & Khaki Solutions", slug: "pant" },
      { languageCode: "zh", title: "牛仔裤与卡其裤解决方案", slug: "nihao" },
    ],
    overview: {
      vi: "Giải pháp toàn diện cho các dòng quần Jean, Kaki và Cargo với hệ thống tự động hóa.",
      en: "Comprehensive solutions for Jeans, Khakis, and Cargo with automation systems.",
      zh: "牛仔裤、卡其裤和工装裤的全方位自动化解决方案。",
    },
    overview2: {
      vi: "Tăng 30% hiệu suất sản xuất nhờ tích hợp các công đoạn may lập trình.",
      en: "Increase 30% efficiency by integrating programmable sewing processes.",
      zh: "通过整合编程缝纫工序，生产效率提高30%。",
    },
    config: {
      colorClasses: colorConfigs.blue,
      benefitIcons: defaultBenefitIcons,
      hasInteractiveDiagram: true,
      useTextLabels: true,
      subSolutions: [
        {
          id: "jean",
          tabName: { vi: "Quần Jean", en: "Jeans", zh: "牛仔裤" },
          diagramImage: " /images/solution/jeans/AUTOM.png",
          diagramMaxWidth: "max-w-3xl",
          machinePositions: jeanMachinePositions,
        },
        {
          id: "kaki-cargo",
          tabName: {
            vi: "Quần Kaki / Cargo",
            en: "Khaki / Cargo",
            zh: "卡其 / 工装裤",
          },
          diagramImage: "/images/solution/au_phuc/quan-tay-kaki.png",
          diagramMaxWidth: "max-w-4xl",
          machinePositions: dressPantsMachinePositions,
        },
      ],
    },
  },

  {
    id: "jean-solution",
    translations: [
      {
        languageCode: "vi",
        slug: "giai-phap-may-quan-jean",
        title: "Giải pháp may quần Jean",
      },
      {
        languageCode: "en",
        slug: "jeans-manufacturing-solution",
        title: "Jeans Production Solution",
      },
      { languageCode: "zh", slug: "niuziku-fangan", title: "牛仔裤生产方案" },
    ],
    config: {
      // Quản lý màu sắc linh hoạt
      colorClasses: {
        text: "text-blue-600",
        textLight: "text-blue-100",
        textLighter: "text-blue-50",
        bgLight: "bg-blue-50",
        gradient: "from-blue-600 to-blue-800",
      },
      benefitIcons: [
        '<svg opacity="0.8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>',
        '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
      ],
      hasInteractiveDiagram: true,
      // Thay URL này bằng ảnh thực tế của bạn
      diagramImage: "/images/solution/jeans/AUTOM.png",
      diagramMaxWidth: "max-w-4xl",
      useTextLabels: false,
      allProducts: allProducts, // Truyền trực tiếp vào đây để Component dễ lấy
      machinePositions: [
        {
          id: 1,
          x: 25, // Vị trí % trên ảnh
          y: 40,
          side: "left",
          productId: "jack-a4b",
          models: ["A4B-A", "A4B-N"],
          nameVi: "Công đoạn may túi sau",
          nameEn: "Back pocket sewing",
          nameZh: "后口袋缝纫",
        },
        {
          id: 2,
          x: 60,
          y: 35,
          side: "right",
          productId: "jack-c5",
          models: ["C5-4-M03/333"],
          nameVi: "Vắt sổ sườn",
          nameEn: "Side seam overlock",
          nameZh: "侧缝包缝",
        },
      ],
    },
  },
  {
    id: "cadCam",
    translations: [
      {
        languageCode: "vi",
        slug: "cad-cam",
        title: "Giải pháp công nghệ CAD/CAM",
      },
      {
        languageCode: "en",
        slug: "cad-cam-solution",
        title: "CAD/CAM Technology Solution",
      },
      { languageCode: "zh", slug: "cad-cam-fangan", title: "CAD/CAM 技术方案" },
    ],
    overview: {
      vi: "Chúng tôi cung cấp giải pháp sản xuất quần toàn diện, từ may quần jean chuyên nghiệp đến dây chuyền sản xuất đa năng cho quần kaki và quần cargo. Thiết bị của chúng tôi đảm bảo hiệu suất cao và thành phẩm chất lượng.",
      en: "We provide comprehensive pants production solutions, from professional jeans sewing to versatile khaki and cargo pants production lines. Our equipment ensures high efficiency and quality finished products.",
      zh: "我们提供全面的裤子生产解决方案，从牛仔裤的专业缝制到卡其裤和工装裤的多功能生产线。我们的设备确保高效率和优质成品。",
    },

    overview2: {
      vi: "Với phần mềm thiết kế chuyên nghiệp và máy móc tự động hóa cao, doanh nghiệp có thể giảm thiểu lãng phí nguyên liệu, tăng độ chính xác và năng suất sản xuất.",
      en: "With professional design software and highly automated machinery, businesses can minimize material waste, increase accuracy and production efficiency.",
      zh: "凭借专业设计软件和高度自动化设备，企业可以减少材料浪费，提高精度和生产力。",
    },
    config: {
      // Màu Cyan chủ đạo cho mảng công nghệ
      colorClasses: {
        gradient: "from-cyan-500 to-cyan-700",
        bgLight: "bg-cyan-100",
        bgLighter: "bg-cyan-50",
        text: "text-cyan-600",
        textLight: "text-cyan-100",
        textLighter: "text-cyan-200",
        hover: "hover:text-cyan-700",
        hoverBg: "hover:bg-cyan-50",
      },
      benefitIcons: cadCamBenefitIcons,
      hasInteractiveDiagram: true,
      diagramImage: "/images/anhcty/giaiphap/solution cadcam.png",
      diagramMaxWidth: "max-w-5xl",
      machinePositions: cadCamMachinePositions,
      useTextLabels: true, // Để hover vào mã máy hiện Tooltip
      diagramVideo: "https://www.youtube.com/embed/pl_Vk39jqJs",
      allProducts: allProducts,
    },
  },
];

export const getSolutionBySlug = (slug) => {
  return solutions.find((s) => s.translations.some((t) => t.slug === slug));
};
