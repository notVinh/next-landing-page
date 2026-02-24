// Solution Data - Cấu hình cho tất cả các trang giải pháp
import JeanMachineImage from '../assets/solution/jeans/AUTOM.png'
import CadCamImage from '../assets/anhcty/giaiphap/solution cadcam.png'
import DownJacketImage from '../assets/solution/jacket/ao_khoac_long_vu.png'
import JacketImage from '../assets/solution/jacket/ao_khoac.png'
import ShirtImage from '../assets/solution/au_phuc/so-mi.png'
import DressPantsImage from '../assets/solution/au_phuc/quan-tay-kaki.png'
import allProducts from './productData'

// Benefit Icons - Các icon dùng chung
const defaultBenefitIcons = [
  // Icon 1 - Grid/Layout
  `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
  </svg>`,
  // Icon 2 - Puzzle
  `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
  </svg>`,
  // Icon 3 - Lightning
  `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>`,
  // Icon 4 - Check Circle
  `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>`
]

// Color configurations
const colorConfigs = {
  pink: {
    gradient: 'from-pink-500 to-pink-700',
    bgLight: 'bg-pink-100',
    bgLighter: 'bg-pink-50',
    text: 'text-pink-600',
    textLight: 'text-pink-100',
    textLighter: 'text-pink-200',
    hover: 'hover:text-pink-700',
    hoverBg: 'hover:bg-pink-50'
  },
  green: {
    gradient: 'from-green-500 to-green-700',
    bgLight: 'bg-green-100',
    bgLighter: 'bg-green-50',
    text: 'text-green-600',
    textLight: 'text-green-100',
    textLighter: 'text-green-200',
    hover: 'hover:text-green-700',
    hoverBg: 'hover:bg-green-50'
  },
  yellow: {
    gradient: 'from-yellow-500 to-yellow-600',
    bgLight: 'bg-yellow-100',
    bgLighter: 'bg-yellow-50',
    text: 'text-yellow-600',
    textLight: 'text-yellow-100',
    textLighter: 'text-yellow-200',
    hover: 'hover:text-yellow-700',
    hoverBg: 'hover:bg-yellow-50'
  },
  teal: {
    gradient: 'from-teal-500 to-teal-700',
    bgLight: 'bg-teal-100',
    bgLighter: 'bg-teal-50',
    text: 'text-teal-600',
    textLight: 'text-teal-100',
    textLighter: 'text-teal-200',
    hover: 'hover:text-teal-700',
    hoverBg: 'hover:bg-teal-50'
  },
  gray: {
    gradient: 'from-gray-600 to-gray-800',
    bgLight: 'bg-gray-100',
    bgLighter: 'bg-gray-50',
    text: 'text-gray-600',
    textLight: 'text-gray-100',
    textLighter: 'text-gray-300',
    hover: 'hover:text-gray-700',
    hoverBg: 'hover:bg-gray-50'
  },
  sky: {
    gradient: 'from-sky-500 to-sky-700',
    bgLight: 'bg-sky-100',
    bgLighter: 'bg-sky-50',
    text: 'text-sky-600',
    textLight: 'text-sky-100',
    textLighter: 'text-sky-200',
    hover: 'hover:text-sky-700',
    hoverBg: 'hover:bg-sky-50'
  },
  indigo: {
    gradient: 'from-indigo-500 to-indigo-700',
    bgLight: 'bg-indigo-100',
    bgLighter: 'bg-indigo-50',
    text: 'text-indigo-600',
    textLight: 'text-indigo-100',
    textLighter: 'text-indigo-200',
    hover: 'hover:text-indigo-700',
    hoverBg: 'hover:bg-indigo-50'
  },
  purple: {
    gradient: 'from-purple-500 to-purple-700',
    bgLight: 'bg-purple-100',
    bgLighter: 'bg-purple-50',
    text: 'text-purple-600',
    textLight: 'text-purple-100',
    textLighter: 'text-purple-200',
    hover: 'hover:text-purple-700',
    hoverBg: 'hover:bg-purple-50'
  },
  blue: {
    gradient: 'from-blue-700 to-blue-900',
    bgLight: 'bg-blue-100',
    bgLighter: 'bg-blue-50',
    text: 'text-blue-700',
    textLight: 'text-blue-100',
    textLighter: 'text-blue-200',
    hover: 'hover:text-blue-800',
    hoverBg: 'hover:bg-blue-50'
  },
  orange: {
    gradient: 'from-orange-500 to-orange-700',
    bgLight: 'bg-orange-100',
    bgLighter: 'bg-orange-50',
    text: 'text-orange-600',
    textLight: 'text-orange-100',
    textLighter: 'text-orange-200',
    hover: 'hover:text-orange-700',
    hoverBg: 'hover:bg-orange-50'
  },
  cyan: {
    gradient: 'from-cyan-500 to-cyan-700',
    bgLight: 'bg-cyan-100',
    bgLighter: 'bg-cyan-50',
    text: 'text-cyan-600',
    textLight: 'text-cyan-100',
    textLighter: 'text-cyan-200',
    hover: 'hover:text-cyan-700',
    hoverBg: 'hover:bg-cyan-50'
  }
}

// Jean Machine Positions Data
// x, y = position of model code box (%), width/height = size of clickable area
const jeanMachinePositions = [
  // Phần trước (bên trái)
  { id: 'coin-pocket', name: 'Sew coin pocket', nameVi: 'May túi đồng xu', nameZh: '缝制零钱袋', models: ['GT-1002'], x: 22, y: 20, side: 'left', width: 'w-18', height: 'h-5', productId: 'gtg-pl-01' },
  { id: 'small-parts', name: 'Serge small parts', nameVi: 'Vắt sổ chi tiết nhỏ', nameZh: '小件包边', models: ['GT-3001C'], x: 22, y: 28, side: 'left', width: 'w-18', height: 'h-5', productId: 'gtg-ap-13' },
  { id: 'j-stitch', name: 'Sew J-shape', nameVi: 'May chữ J', nameZh: '缝制J形', models: ['GT-1003A', 'GT-1003B', 'GT-1003C'], x: 22, y: 37, side: 'left', width: 'w-20', height: 'h-16', productId: 'gtg-ap-03' },
  { id: 'repair-stitch', name: 'Decorate pant leg', nameVi: 'Trang trí ống quần', nameZh: '裤腿装饰', models: [''], x: 22, y: 47, side: 'left', width: 'w-20', height: 'h-16', productId: 'gtg-ap-11' },
  { id: 'bottom-hem', name: 'Sew pant hem', nameVi: 'May lai quần', nameZh: '缝裤脚', models: ['GT-5003D-L', 'GT-5003D-C'], x: 22, y: 55, side: 'left', width: 'w-24', height: 'h-12', productId: 'gtg-pl-01' },
  { id: 'waistband', name: 'Sew waistband', nameVi: 'May cạp quần', nameZh: '缝腰带', models: ['GT-2003A', 'GT-2003C', 'GT-2003D'], x: 22, y: 65, side: 'left', width: 'w-24', height: 'h-16', productId: 'gtg-ap-05' },
  { id: 'colour-marker', name: 'Mark color', nameVi: 'Đánh dấu màu', nameZh: '颜色标记', models: ['GT-5005A'], x: 22, y: 73, side: 'left', width: 'w-18', height: 'h-5', productId: 'gtg-pl-01' },
  { id: 'pocket-setter', name: 'Set pocket', nameVi: 'Đặt túi', nameZh: '定位口袋', models: ['GT-1002C', 'GT-1002F', 'GT-1002H'], x: 22, y: 82, side: 'left', width: 'w-24', height: 'h-16', productId: 'gtg-ap-07' },
  { id: 'overlock', name: 'Overlock', nameVi: 'Vắt sổ', nameZh: '包边', models: ['GT-3003B'], x: 22, y: 90, side: 'left', width: 'w-18', height: 'h-5', productId: 'gtg-ap-10' },
  // Phần sau (bên phải)
  { id: 'beltloop', name: 'Attach belt loop', nameVi: 'Đính passant', nameZh: '缝腰带环', models: ['GT-254H-XR'], x: 77, y: 20, side: 'right', width: 'w-22', height: 'h-5', productId: 'gtg-ap-08' },
  { id: 'pocket-facing', name: 'Line pocket', nameVi: 'Lót túi', nameZh: '口袋衬里', models: ['GT-2002B'], x: 78, y: 28, side: 'right', width: 'w-18', height: 'h-5', productId: 'gtg-ap-14' },
  { id: 'front-pocket', name: 'Front pocket', nameVi: 'Túi trước', nameZh: '前袋', models: ['GT-8024B'], x: 78, y: 35, side: 'right', width: 'w-18', height: 'h-5', productId: 'gtg-ap-15' },
  { id: 'twin-tronic', name: 'Twin tronic', nameVi: 'Twin tronic', nameZh: 'Twin tronic', models: ['GT-5002C'], x: 78, y: 42, side: 'right', width: 'w-18', height: 'h-5', productId: 'gtg-ap-09' },
  { id: 'label-setter', name: 'Attach label', nameVi: 'Đính nhãn', nameZh: '缝商标', models: ['GT-1004A'], x: 78, y: 49, side: 'right', width: 'w-18', height: 'h-5', productId: 'gtg-ap-16' },
  { id: 'yoke', name: 'Sew yoke', nameVi: 'May yoke', nameZh: '缝育克', models: ['GT-2011A'], x: 78, y: 56, side: 'right', width: 'w-18', height: 'h-5', productId: 'gtg-pl-01' },
  { id: 'pocket-hem', name: 'Hem pocket', nameVi: 'Viền túi', nameZh: '口袋卷边', models: ['GT-2001B-BR', 'GT-2001B-JK', 'GT-2001C'], x: 78, y: 66, side: 'right', width: 'w-28', height: 'h-16', productId: 'gtg-ap-04' },
  { id: 'pocket-deco', name: 'Decorate pocket', nameVi: 'Trang trí túi', nameZh: '口袋装饰', models: ['GT-1001B'], x: 78, y: 73, side: 'right', width: 'w-18', height: 'h-5', productId: 'gtg-ap-02' },
  { id: 'feed-arm', name: 'Sew sleeve', nameVi: 'May ống tay', nameZh: '缝袖子', models: ['GT-2004C', 'GT-2004G', 'GT-2004H'], x: 78, y: 82, side: 'right', width: 'w-24', height: 'h-16', productId: 'gtg-ap-06' },
  { id: 'side-seam', name: 'Sew side seam', nameVi: 'May sườn', nameZh: '缝侧缝', models: ['GT-3005B'], x: 78, y: 90, side: 'right', width: 'w-18', height: 'h-5', productId: 'gtg-ap-17' },
]

// Jacket Machine Positions Data (Áo Khoác)
// x, y = position of model code box (%), width/height = size of clickable area
const jacketMachinePositions = [
  // Bên trái
  { id: 'left-1', name: 'Press cap visor seam', nameVi: 'Ép seam lưỡi trai mũ', nameZh: '压帽檐缝', models: ['GT-C2035'], x: 26, y: 21, side: 'left', width: 'w-16', height: 'h-5', productId: '' },
  { id: 'left-2', name: 'Sew 2 semi-finished lines', nameVi: 'Ráp 2 đường bán thành phẩm', nameZh: '缝制两条半成品线', models: ['GT-D8-D4'], x: 16, y: 33, side: 'left', width: 'w-16', height: 'h-8', productId: 'gtg-1n-06' },
  { id: 'left-3', name: 'Zipper stitching', nameVi: 'Mí khóa', nameZh: '缝拉链', models: ['GT-A6F'], x: 16, y: 43, side: 'left', width: 'w-16', height: 'h-5', productId: 'gtg-1n-08' },
  { id: 'left-4', name: 'Sew sleeve cuff', nameVi: 'May cá tay', nameZh: '缝袖口', models: ['GT-10060-HL'], x: 13, y: 56, side: 'left', width: 'w-20', height: 'h-5', productId: 'gtg-pl-04' },
  { id: 'left-5', name: 'Sew logo on lining patch', nameVi: 'May logo vào đáp lót', nameZh: '在衬里贴片上缝商标', models: ['GT-3020'], x: 14, y: 74, side: 'left', width: 'w-16', height: 'h-5', productId: 'gtg-ps-01' },
  { id: 'left-6', name: 'Sew patch on lining', nameVi: 'May đáp vào lót', nameZh: '在衬里上缝贴片', models: ['GT-8040-HLX'], x: 15, y: 87, side: 'left', width: 'w-20', height: 'h-5', productId: 'gtg-pl-05' },
  // Bên phải
  { id: 'right-1', name: 'Hood stitching', nameVi: 'Mí nón', nameZh: '缝帽子', models: ['GT-A6F'], x: 76, y: 23, side: 'right', width: 'w-14', height: 'h-5', productId: 'gtg-1n-08' },
  { id: 'right-2', name: 'Waterproof seam tape', nameVi: 'Dán seam chống thấm nước', nameZh: '防水压胶条', models: ['GT-119N'], x: 81, y: 32, side: 'right', width: 'w-14', height: 'h-5', productId: 'gtg-ss-01' },
  { id: 'right-3', name: 'Attach zipper & patch to body', nameVi: 'Tra khóa và đáp vào thân áo', nameZh: '将拉链和贴片缝到衣身', models: ['GT-10060-HL'], x: 81, y: 44, side: 'right', width: 'w-20', height: 'h-8', productId: 'gtg-pl-04' },
  { id: 'right-4', name: 'Sew velcro on sleeve', nameVi: 'May nhám cửa tay', nameZh: '缝袖口魔术贴', models: ['GT-10060-HL'], x: 86, y: 58, side: 'right', width: 'w-20', height: 'h-5', productId: 'gtg-pl-04' },
  { id: 'right-5', name: 'Sew lapel on lining', nameVi: 'May ve áo vào lót áo', nameZh: '将翻领缝到衬里', models: ['GT-10060-HL'], x: 85, y: 87, side: 'right', width: 'w-20', height: 'h-5', productId: 'gtg-pl-04' },
]

// Down Jacket Machine Positions Data
// x, y = position of model code box (%), width/height = size of clickable area
const downJacketMachinePositions = [
  // Bên trái - model code boxes positioned at left side of image
  { id: 'left-1', name: 'Sleeve Attachment', nameVi: 'Ráp tay áo vào thân', nameZh: '袖子缝合', models: ['GT-A7F-TS'], x: 21, y: 16, side: 'left', width: 'w-16', height: 'h-5', productId: '' },
  { id: 'left-2', name: 'Feather/Cotton Filling', nameVi: 'Nhồi lông, bông', nameZh: '填充羽绒棉', models: ['GT-2P-12G', 'GT-4P-24G'], x: 22, y: 24, side: 'left', width: 'w-16', height: 'h-8', productId: 'gtg-ff-02' },
  { id: 'left-3', name: 'Zipper Stitching', nameVi: 'Mí khóa áo', nameZh: '缝合拉链', models: ['GT-A6F'], x: 19, y: 32, side: 'left', width: 'w-12', height: 'h-5', productId: 'gtg-1n-08' },
  { id: 'left-4', name: 'Sleeve Elastic', nameVi: 'Chun tay áo', nameZh: '袖口松紧带', models: ['GT-720-U'], x: 19, y: 39, side: 'left', width: 'w-14', height: 'h-5', productId: 'gtg-ej-01' },
  { id: 'left-5', name: 'Logo on Lining Patch', nameVi: 'May logo vào đáp lót', nameZh: '在衬里贴片上缝商标', models: ['GT-3020'], x: 18, y: 53, side: 'left', width: 'w-12', height: 'h-5', productId: 'gtg-ps-01' },
  { id: 'left-6', name: 'Patch on Lining', nameVi: 'May đáp vào lót áo', nameZh: '在衬里上缝贴片', models: ['GT-8040-HLX'], x: 17, y: 61, side: 'left', width: 'w-20', height: 'h-5', productId: 'gtg-pl-05' },
  { id: 'left-7', name: 'Lining Pocket Welt', nameVi: 'Bổ túi lót', nameZh: '衬里口袋开袋', models: ['GT-3020-JG', 'GT-1008-311-9T'], x: 15, y: 69, side: 'left', width: 'w-20', height: 'h-8', productIds: ['gtg-ps-01', 'gtg-ap-18'] },
  { id: 'left-8', name: 'Lapel on Lining', nameVi: 'May ve áo vào áo lót', nameZh: '将翻领缝到衬里', models: ['GT-10060-HL'], x: 17, y: 77, side: 'left', width: 'w-20', height: 'h-8', productId: 'gtg-pl-04' },
  { id: 'left-9', name: 'Side Label Attachment', nameVi: 'Đính mác sườn', nameZh: '侧标签缝制', models: ['GT-UT3'], x: 17, y: 86, side: 'left', width: 'w-12', height: 'h-5', productId: '' },
  { id: 'left-10', name: 'Binding/Edging', nameVi: 'Bọc viền áo', nameZh: '包边', models: ['GT-D8'], x: 17, y: 93, side: 'left', width: 'w-10', height: 'h-5', productId: 'gtg-1n-05' },
  // Bên phải - model code boxes positioned at right side of image
  { id: 'right-1', name: 'Hood Stitching', nameVi: 'Mí nón', nameZh: '缝合帽子', models: ['GT-A6F'], x: 73, y: 8, side: 'right', width: 'w-12', height: 'h-5', productId: 'gtg-1n-08' },
  { id: 'right-2', name: 'Straight Quilting', nameVi: 'Trần đường thẳng', nameZh: '直线绗缝', models: ['GT-1390-HLH', 'GT-360W-HLS'], x: 79, y: 19, side: 'right', width: 'w-26', height: 'h-8', productId: 'gtg-pl-02' },
  { id: 'right-3', name: 'Placket Sewing', nameVi: 'May nẹp áo', nameZh: '缝制门襟', models: ['GT-10060-HL'], x: 85, y: 28, side: 'right', width: 'w-20', height: 'h-5', productId: 'gtg-pl-04' },
  { id: 'right-4', name: 'Zipper & Patch to Body', nameVi: 'Tra khóa và đáp vào thân áo', nameZh: '将拉链和贴片缝到衣身', models: ['GT-10060-HL'], x: 82, y: 41, side: 'right', width: 'w-20', height: 'h-5', productId: 'gtg-pl-04' },
  { id: 'right-5', name: 'Pocket Patch to Lining', nameVi: 'May đáp túi vào lót túi', nameZh: '将口袋贴片缝到衬里', models: ['GT-9307'], x: 85, y: 53, side: 'right', width: 'w-14', height: 'h-5', productId: '' },
  { id: 'right-6', name: 'Jacket Pocket Welt', nameVi: 'Bổ túi áo', nameZh: '外口袋开袋', models: ['GT-3020-JG', 'GT-1008-311-9T'], x: 85, y: 60, side: 'right', width: 'w-20', height: 'h-8', productIds: ['gtg-ps-01', 'gtg-ap-18'] },
  { id: 'right-7', name: 'Button Attachment', nameVi: 'Đóng nút áo', nameZh: '钉扣子', models: ['GT-788'], x: 84, y: 68, side: 'right', width: 'w-12', height: 'h-5', productId: '' },
  { id: 'right-8', name: 'Zipper Tape Machine', nameVi: 'Máy đáp khóa', nameZh: '拉链贴条机', models: ['GT-10060-HL'], x: 84, y: 82, side: 'right', width: 'w-20', height: 'h-8', productId: 'gtg-pl-04' },
  { id: 'right-9', name: 'Eyelet Attachment', nameVi: 'Đóng khuyên', nameZh: '打孔钉扣眼', models: ['GT-818'], x: 84, y: 89, side: 'right', width: 'w-12', height: 'h-5', productId: '' },
]

// CAD/CAM Machine Positions Data
const cadCamMachinePositions = [
  { id: 'digitizer', name: 'Digitizer', nameVi: 'Máy kiểm vải AI', models: ['GTG-DG01'], x: 20, y: 8, side: 'left', productLink: '/san-pham/may-in-phay-trai-cat/bang-so-hoa' },
  { id: 'plotter', name: 'Plotter', nameVi: 'Máy in sơ đồ', models: ['GT-EP-210'], x: 45, y: 9, side: 'left', productId: 'gtg-pp-02' },
  { id: 'software', name: 'CAD Software', nameVi: 'Máy cắt bìa', models: ['GT-C1215'], x: 69, y: 18, side: 'right', productId: 'gtg-pc-01' },
  { id: 'grading', name: 'Grading System', nameVi: 'Máy phay mica', models: ['GT-T1215-C'], x: 88, y: 27, side: 'right', productId: 'gtg-mr-01' },
  { id: 'cutter', name: 'Automatic Cutter', nameVi: 'Máy cắt tự động', models: ['GT9-E2022'], x: 65, y: 86, side: 'left', productId: 'gtg-ac-01' },
  { id: 'spreader', name: 'Fabric Spreader', nameVi: 'Máy trải vải tự động', models: ['TZS-190S & TZS-210S'], x: 15, y: 56, side: 'left', productId: 'gtg-sp-01' },
  { id: 'sticker', name: 'Sticker Making', nameVi: 'Máy dán nhãn tự động', models: ['GT-D-190'], x: 43, y: 73, side: 'right', productId: 'gtg-label-01' },
  { id: 'table', name: 'Auto Nesting', nameVi: 'Bàn trải vải', models: ['GTG-NS01'], x: 27, y: 66, side: 'right', productId: 'gtg-sp-02' },
]

// Shirt (Áo Sơ Mi) Machine Positions Data
const shirtMachinePositions = [
  // Bên trái
  { id: 'left-1', name: 'Sew collar to collar stand', nameVi: 'May lá cổ vào chân cổ', nameZh: '缝领片到领座', models: ['GT-10060HL-DH'], x: 27, y: 6, side: 'left', width: 'w-24', height: 'h-5', productId: 'gtg-pl-04' },
  { id: 'left-2', name: 'Auto button feed & attach', nameVi: 'Máy cấp và đính nút tự động', nameZh: '自动送扣钉扣机', models: ['GT-1903-988A'], x: 19, y: 17, side: 'left', width: 'w-24', height: 'h-5', productId: '' },
  { id: 'left-3', name: 'Auto buttonhole machine', nameVi: 'Máy thùa khuy tự động', nameZh: '自动锁眼机', models: ['GT-1790SS-TD-TS'], x: 17, y: 26, side: 'left', width: 'w-24', height: 'h-5', productId: 'GT-1790SS' },
  { id: 'left-4', name: 'Sew & trim sleeve placket', nameVi: 'May và xén Bass tay', nameZh: '缝制袖叉', models: ['GT-1903-988A'], x: 14, y: 37, side: 'left', width: 'w-20', height: 'h-5', productId: '' },
  { id: 'left-5', name: 'Sew yoke to back panel', nameVi: 'May đáp đỗ vào thân sau', nameZh: '缝过肩到后片', models: ['GT-5008B'], x: 19, y: 57, side: 'left', width: 'w-20', height: 'h-5', productId: '' },
  { id: 'left-6', name: 'Sleeve cuff buttonhole', nameVi: 'Thùa khuy trụ tay', nameZh: '袖口锁眼', models: ['GT-1790SS-TD'], x: 16, y: 78, side: 'left', width: 'w-20', height: 'h-5', productId: 'GT-1790SS' },
  { id: 'left-7', name: 'Sleeve cuff button attach', nameVi: 'Đính nút trụ tay', nameZh: '袖口钉扣', models: ['GT-1903-988A'], x: 13, y: 90, side: 'left', width: 'w-20', height: 'h-5', productId: '' },
  // Bên phải
  { id: 'right-1', name: 'Sew & trim collar (laser)', nameVi: 'May và xén lá cổ (laser)', nameZh: '缝制领片（激光）', models: ['GT-10060HL-DH-JG'], x: 74, y: 10, side: 'right', width: 'w-24', height: 'h-5', productId: 'gtg-pl-04' },
  { id: 'right-2', name: 'Auto pocket welt', nameVi: 'May miệng túi tự động', nameZh: '自动开袋机', models: ['GT-2001B'], x: 80, y: 15, side: 'right', width: 'w-20', height: 'h-5', productId: 'gtg-ap-04' },
  { id: 'right-3', name: 'Auto pocket attach', nameVi: 'Dán túi áo tự động', nameZh: '自动贴袋机', models: ['GT-311-TD'], x: 83, y: 22, side: 'right', width: 'w-16', height: 'h-5', productId: 'gtg-ap-01' },
  { id: 'right-4', name: 'Sew & press placket', nameVi: 'May vào ép keo nẹp áo', nameZh: '缝制门襟', models: ['GT-10060HL'], x: 84, y: 31, side: 'right', width: 'w-24', height: 'h-5', productId: '' },
  { id: 'right-5', name: 'Stitch collar, cuff, attach sleeve', nameVi: 'Mí lá cổ, cửa tay, ráp tay áo vào thân', nameZh: '缝领片、袖口、上袖', models: ['GT-A6F'], x: 85, y: 48, side: 'right', width: 'w-18', height: 'h-5', productId: 'gtg-1n-08' },
  { id: 'right-6', name: 'Hem shirt', nameVi: 'May lai áo', nameZh: '缝下摆', models: ['GT-A7F-9W'], x: 87, y: 79, side: 'right', width: 'w-18', height: 'h-5', productId: '' },
  { id: 'right-7', name: 'Hem shirt (back)', nameVi: 'May lai áo', nameZh: '缝下摆', models: ['GT-A7F-9W'], x: 75, y: 91, side: 'right', width: 'w-18', height: 'h-5', productId: '' },
]

// Dress Pants (Quần Tây) Machine Positions Data
const dressPantsMachinePositions = [
  // Bên trái (1-7)
  { id: 'left-1', name: 'Waistband topstitch', nameVi: 'Mí lưng quần', nameZh: '腰带压线', models: ['GT-A6F'], x: 14, y: 11, side: 'left', width: 'w-20', height: 'h-4', productId: 'gtg-1n-08' },
  { id: 'left-2', name: 'Auto baguette turning', nameVi: 'Quay baget tự động', nameZh: '自动翻袋盖', models: ['GT-1003C'], x: 14, y: 19, side: 'left', width: 'w-24', height: 'h-4', productId: 'gtg-ap-03' },
  { id: 'left-3', name: 'Pocket corner bartack', nameVi: 'Bọ góc túi', nameZh: '袋角打结', models: ['GT-430SS-1'], x: 12, y: 26, side: 'left', width: 'w-24', height: 'h-4', productId: 'gtg-bt-01' },
  { id: 'left-4', name: 'Auto side seam serging', nameVi: 'Vắt sổ sườn quần tự động', nameZh: '自动侧缝包边', models: ['GT-1003C'], x: 14, y: 37, side: 'left', width: 'w-24', height: 'h-6', productId: 'gtg-ap-03' },
  { id: 'left-5', name: 'Sew facing to lining', nameVi: 'May đáp vào lót', nameZh: '缝贴边到衬里', models: ['GT-9703'], x: 12, y: 57, side: 'left', width: 'w-22', height: 'h-4', productId: '' },
  { id: 'left-6', name: 'Sew facing to lining', nameVi: 'May đáp vào lót', nameZh: '缝贴边到衬里', models: ['GT-A6F'], x: 12, y: 65, side: 'left', width: 'w-22', height: 'h-4', productId: 'gtg-1n-08' },
  { id: 'left-7', name: 'Double-end bartack', nameVi: 'Đỉa bọ 2 đầu', nameZh: '双头打结', models: ['GT-254H-XR'], x: 12, y: 77, side: 'left', width: 'w-24', height: 'h-4', productId: 'gtg-ap-08' },
  // Bên phải (8-15)
  { id: 'right-8', name: 'Dress pants button', nameVi: 'Nút quần tây', nameZh: '西裤钉扣', models: ['GT-8289'], x: 53, y: 6, side: 'right', width: 'w-20', height: 'h-4', productId: '' },
  { id: 'right-9', name: 'Keyhole buttonhole', nameVi: 'Khuy quần mắt phụng', nameZh: '锁眼扣眼', models: ['GT-9821'], x: 81, y: 8, side: 'right', width: 'w-24', height: 'h-4', productId: 'GT-9821' },
  { id: 'right-10', name: 'Pants button attach', nameVi: 'Nút quần', nameZh: '裤子钉扣', models: ['GT-1903-988A'], x: 85, y: 14, side: 'right', width: 'w-26', height: 'h-4', productId: '' },
  { id: 'right-11', name: 'Auto darts', nameVi: 'Chiết ly', nameZh: '自动省缝', models: ['GT-2356'], x: 86, y: 24, side: 'right', width: 'w-20', height: 'h-4', productId: '' },
  { id: 'right-12', name: 'Hem bottom', nameVi: 'Vắt gấu', nameZh: '缝裤脚', models: ['GT-5001-3'], x: 88, y: 40, side: 'right', width: 'w-20', height: 'h-4', productId: 'gtg-ap-09' },
  { id: 'right-13', name: 'Back pocket welt inside', nameVi: 'Túi sau mí trong', nameZh: '后袋内缝', models: ['GT-896L'], x: 85, y: 56, side: 'right', width: 'w-22', height: 'h-4', productId: '' },
  { id: 'right-14', name: 'Back pocket welt inside', nameVi: 'Túi sau mí trong', nameZh: '后袋内缝', models: ['GT-896L'], x: 85, y: 66, side: 'right', width: 'w-22', height: 'h-4', productId: '' },
  { id: 'right-15', name: 'Waistband loop bartack', nameVi: 'Đỉa chui lưng quần', nameZh: '腰带袢打结', models: ['GT-1351'], x: 84, y: 80, side: 'right', width: 'w-22', height: 'h-4', productId: '' },
]

// Main Solution Data
const solutionData = {
  'do-lot': {
    solutionKey: 'doLot',
    titleKey: 'solutions.underwear',
    color: 'pink',
    benefitIcons: defaultBenefitIcons
  },
  'do-the-thao': {
    solutionKey: 'doTheThao',
    titleKey: 'solutions.sportswear',
    color: 'green',
    benefitIcons: defaultBenefitIcons
  },
  'quan-ao-tre-em': {
    solutionKey: 'quanAoTreEm',
    titleKey: 'solutions.childrenWear',
    color: 'yellow',
    benefitIcons: defaultBenefitIcons
  },
  'trang-phuc-thuong-ngay': {
    solutionKey: 'trangPhucThuongNgay',
    titleKey: 'solutions.casualWear',
    color: 'teal',
    benefitIcons: defaultBenefitIcons
  },
  'au-phuc': {
    solutionKey: 'auPhuc',
    titleKey: 'solutions.formalWear',
    color: 'gray',
    benefitIcons: defaultBenefitIcons
  },
  'ao-so-mi': {
    solutionKey: 'aoSoMi',
    titleKey: 'solutions.shirts',
    color: 'sky',
    benefitIcons: defaultBenefitIcons,
    hasInteractiveDiagram: true,
    diagramImage: ShirtImage,
    diagramMaxWidth: 'max-w-3xl',
    machinePositions: shirtMachinePositions,
    useTextLabels: true
  },
  'quan-tay': {
    solutionKey: 'quanTay',
    titleKey: 'solutions.dressPants',
    color: 'gray',
    benefitIcons: defaultBenefitIcons,
    hasInteractiveDiagram: true,
    diagramImage: DressPantsImage,
    diagramMaxWidth: 'max-w-4xl',
    machinePositions: dressPantsMachinePositions,
    useTextLabels: true
  },
  'quan-kaki': {
    solutionKey: 'quanKaki',
    titleKey: 'solutions.khakiPants',
    color: 'amber',
    benefitIcons: defaultBenefitIcons,
    hasInteractiveDiagram: true,
    diagramImage: DressPantsImage,
    diagramMaxWidth: 'max-w-4xl',
    machinePositions: dressPantsMachinePositions,
    useTextLabels: true
  },
  'ao-khoac': {
    solutionKey: 'aoKhoac',
    titleKey: 'solutions.jackets',
    color: 'indigo',
    benefitIcons: defaultBenefitIcons,
    hasInteractiveDiagram: true,
    diagramImage: JacketImage,
    diagramMaxWidth: 'max-w-4xl',
    machinePositions: jacketMachinePositions,
    useTextLabels: true
  },
  'ao-phao-long-vu': {
    solutionKey: 'aoPhaoLongVu',
    titleKey: 'solutions.downJackets',
    color: 'purple',
    benefitIcons: defaultBenefitIcons,
    // Custom feature: Interactive Diagram with text labels (no dots)
    hasInteractiveDiagram: true,
    diagramImage: DownJacketImage,
    diagramMaxWidth: 'max-w-4xl',
    machinePositions: downJacketMachinePositions,
    useTextLabels: true  // Hover on model codes instead of dots
  },
  'quan-jean': {
    solutionKey: 'quanJean',
    titleKey: 'solutions.jeans',
    color: 'blue',
    benefitIcons: defaultBenefitIcons,
    // Custom feature: Interactive Diagram
    hasInteractiveDiagram: true,
    diagramImage: JeanMachineImage,
    diagramMaxWidth: 'max-w-3xl',
    machinePositions: jeanMachinePositions,
    useTextLabels: true  // Hover on model codes instead of dots
  },
  'det-kim-det-thoi': {
    solutionKey: 'detKimDetThoi',
    titleKey: 'solutions.knittedWoven',
    color: 'orange',
    benefitIcons: defaultBenefitIcons
  },
  'cad-cam': {
    solutionKey: 'cadCam',
    titleKey: 'solutions.cadCam',
    color: 'cyan',
    benefitIcons: [
      // Computer icon
      `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>`,
      // Layout icon
      `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>`,
      // Lightning icon
      `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>`,
      // Shield check icon
      `<svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>`
    ],
    // Custom feature: Interactive Diagram
    hasInteractiveDiagram: true,
    diagramImage: CadCamImage,
    diagramMaxWidth: 'max-w-5xl',
    machinePositions: cadCamMachinePositions,
    diagramVideo: 'https://www.youtube.com/embed/pl_Vk39jqJs'
  }
}

// Helper function to get solution config
export const getSolutionConfig = (slug) => {
  const config = solutionData[slug]
  if (!config) return null

  return {
    ...config,
    colorClasses: colorConfigs[config.color]
  }
}

// Helper function to get all solution slugs
export const getAllSolutionSlugs = () => Object.keys(solutionData)

// Export for use in components
export { colorConfigs, jeanMachinePositions, allProducts }
export default solutionData
