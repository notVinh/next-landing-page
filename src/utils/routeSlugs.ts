// Route slug mappings for each language - static only
// Product slugs from productData can be added separately if needed

export const routeSlugs: Record<string, { vi: string; en: string; zh: string }> = {
  // Main pages
  'san-pham': { vi: 'san-pham', en: 'products', zh: 'chan-pin' },
  'thong-tin-cong-ty': { vi: 'thong-tin-cong-ty', en: 'company-info', zh: 'gong-si-xin-xi' },
  'ho-so-cong-ty': { vi: 'ho-so-cong-ty', en: 'company-profile', zh: 'gong-si-jian-jie' },
  'lich-su': { vi: 'lich-su', en: 'history', zh: 'li-shi' },
  'dich-vu': { vi: 'dich-vu', en: 'services', zh: 'fu-wu' },
  'giai-phap': { vi: 'giai-phap', en: 'solutions', zh: 'jie-jue-fang-an' },
  'nang-luc': { vi: 'nang-luc', en: 'capability', zh: 'neng-li' },
  'videos': { vi: 'videos', en: 'videos', zh: 'shi-pin' },
  'lien-he': { vi: 'lien-he', en: 'contact', zh: 'lian-xi' },
  'catalog': { vi: 'catalog', en: 'catalog', zh: 'mu-lu' },
  'book': { vi: 'book', en: 'book', zh: 'shou-ce' },
  'cad-cam': { vi: 'cad-cam', en: 'cad-cam', zh: 'cad-cam' },
  'do-lot': { vi: 'do-lot', en: 'underwear', zh: 'nei-yi' },
  'trang-phuc-thuong-ngay': { vi: 'trang-phuc-thuong-ngay', en: 'casual-wear', zh: 'bian-zhuang' },
  'quan-ao-tre-em': { vi: 'quan-ao-tre-em', en: 'children-wear', zh: 'tong-zhuang' },

  // Product categories
  'may-in-phay-trai-cat': { vi: 'may-in-phay-trai-cat', en: 'printing-spreading-cutting', zh: 'yin-shua-pu-bu-cai-jian' },
  'may-tu-dong-xuong-may': { vi: 'may-tu-dong-xuong-may', en: 'automation-equipment', zh: 'zi-dong-hua-she-bei' },
  'may-may-lap-trinh': { vi: 'may-may-lap-trinh', en: 'programmable-sewing', zh: 'ke-bian-cheng-feng-ren' },
  'may-may-cong-nghiep': { vi: 'may-may-cong-nghiep', en: 'industrial-sewing', zh: 'gong-ye-feng-ren-ji' },
  'may-phu-tro': { vi: 'may-phu-tro', en: 'auxiliary-equipment', zh: 'fu-zhu-she-bei' },
  'phan-mem-quan-ly': { vi: 'phan-mem-quan-ly', en: 'management-software', zh: 'guan-li-ruan-jian' },

  // Product subcategories
  'bang-so-hoa': { vi: 'bang-so-hoa', en: 'digitizing-table', zh: 'shu-zi-hua-ban' },
  'may-in-so-do': { vi: 'may-in-so-do', en: 'plotter-printer', zh: 'hui-tu-ji' },
  'may-cat-bia-giay': { vi: 'may-cat-bia-giay', en: 'paperboard-cutting', zh: 'zhi-ban-qie-ge' },
  'may-phay-mica': { vi: 'may-phay-mica', en: 'mica-milling', zh: 'ya-ke-li-xi-xue' },
  'may-trai-vai-tu-dong': { vi: 'may-trai-vai-tu-dong', en: 'auto-spreading', zh: 'zi-dong-pu-bu' },
  'may-cat-vai-tu-dong': { vi: 'may-cat-vai-tu-dong', en: 'auto-cutting', zh: 'zi-dong-cai-jian' },
  'may-danh-so-tu-dong': { vi: 'may-danh-so-tu-dong', en: 'auto-numbering', zh: 'zi-dong-bian-hao' },
  'may-dan-tem-tu-dong': { vi: 'may-dan-tem-tu-dong', en: 'auto-labeling', zh: 'zi-dong-tie-biao' },
  'may-nhoi-long-vu-bong': { vi: 'may-nhoi-long-vu-bong', en: 'down-filling', zh: 'chong-rong-ji' },
  'may-dan-seam': { vi: 'may-dan-seam', en: 'seam-sealing', zh: 'feng-kou-mi-feng' },
  'may-noi-chun-tu-dong': { vi: 'may-noi-chun-tu-dong', en: 'elastic-joining', zh: 'song-jin-dai-jie-he' },
  'may-cat-vien-tu-dong': { vi: 'may-cat-vien-tu-dong', en: 'auto-trimming', zh: 'zi-dong-xiu-jian' },
  'he-thong-quan-ly-thong-minh': { vi: 'he-thong-quan-ly-thong-minh', en: 'smart-management', zh: 'zhi-neng-guan-li' },
  'may-tu-dong-khac': { vi: 'may-tu-dong-khac', en: 'other-automation', zh: 'qi-ta-zi-dong-hua' },
  'chuyen-treo-tu-dong': { vi: 'chuyen-treo-tu-dong', en: 'overhead-system', zh: 'xuan-gua-xi-tong' },
  'kho-nho': { vi: 'kho-nho', en: 'small-size', zh: 'xiao-chi-cun' },
  'kho-lon': { vi: 'kho-lon', en: 'large-size', zh: 'da-chi-cun' },
  'tu-dong-quan': { vi: 'tu-dong-quan', en: 'auto-pants', zh: 'zi-dong-ku-zi' },
  'may-may-1-kim': { vi: 'may-may-1-kim', en: 'single-needle', zh: 'dan-zhen-ji' },
  'may-di-bo': { vi: 'may-di-bo', en: 'walking-foot', zh: 'bu-xing-ji' },
  'may-may-2-kim': { vi: 'may-may-2-kim', en: 'double-needle', zh: 'shuang-zhen-ji' },
  'may-vat-so': { vi: 'may-vat-so', en: 'overlock', zh: 'bao-feng-ji' },
  'may-thua-khuy': { vi: 'may-thua-khuy', en: 'buttonhole', zh: 'suo-yan-ji' },
  'may-tran-de': { vi: 'may-tran-de', en: 'flatlock', zh: 'ping-feng-ji' },
  'may-dinh-nut': { vi: 'may-dinh-nut', en: 'button-sewing', zh: 'ding-kou-ji' },
  'thiet-bi-hoan-tat': { vi: 'thiet-bi-hoan-tat', en: 'finishing-equipment', zh: 'zheng-li-she-bei' },
  'may-ep-nhiet': { vi: 'may-ep-nhiet', en: 'heat-press', zh: 're-ya-ji' },
  'thiet-bi-to-cat': { vi: 'thiet-bi-to-cat', en: 'cutting-equipment', zh: 'cai-jian-she-bei' },
  'san-xuat': { vi: 'san-xuat', en: 'production', zh: 'sheng-chan' },
  'kiem-soat-chat-luong': { vi: 'kiem-soat-chat-luong', en: 'quality-control', zh: 'zhi-liang-kong-zhi' },
  'ao-khoac': { vi: 'ao-khoac', en: 'jackets', zh: 'jia-ke' },
  'quan': { vi: 'quan', en: 'pants', zh: 'ku-zi' },
  'au-phuc': { vi: 'au-phuc', en: 'formal-wear', zh: 'zheng-zhuang' },
  'hang-det-kim': { vi: 'hang-det-kim', en: 'knitwear', zh: 'zhen-zhi' },
}

// Build reverse lookup: any slug -> base slug (Vietnamese)
const reverseMap: Record<string, string> = {}
Object.entries(routeSlugs).forEach(([baseSlug, translations]) => {
  Object.values(translations).forEach((slug) => {
    reverseMap[slug] = baseSlug
  })
})

export function getBaseSlug(slug: string): string {
  return reverseMap[slug] || slug
}

export function getLocalizedSlug(baseSlug: string, language: string): string {
  const entry = routeSlugs[baseSlug]
  return entry ? (entry[language as keyof typeof entry] || baseSlug) : baseSlug
}

export function translatePath(path: string, targetLang: string): string {
  const cleanPath = path.replace(/^\//, '')
  if (!cleanPath) return ''

  const segments = cleanPath.split('/')
  const translatedSegments = segments.map((segment) => {
    const baseSlug = getBaseSlug(segment)
    return getLocalizedSlug(baseSlug, targetLang)
  })

  return '/' + translatedSegments.join('/')
}

export function normalizePathToBase(path: string): string {
  const cleanPath = path.replace(/^\//, '')
  if (!cleanPath) return '/'

  const segments = cleanPath.split('/')
  const normalizedSegments = segments.map((segment) => getBaseSlug(segment))

  return '/' + normalizedSegments.join('/')
}
