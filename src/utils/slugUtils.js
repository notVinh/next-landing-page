// Vietnamese diacritics mapping
const vietnameseMap = {
  'à': 'a', 'á': 'a', 'ả': 'a', 'ã': 'a', 'ạ': 'a',
  'ă': 'a', 'ằ': 'a', 'ắ': 'a', 'ẳ': 'a', 'ẵ': 'a', 'ặ': 'a',
  'â': 'a', 'ầ': 'a', 'ấ': 'a', 'ẩ': 'a', 'ẫ': 'a', 'ậ': 'a',
  'đ': 'd',
  'è': 'e', 'é': 'e', 'ẻ': 'e', 'ẽ': 'e', 'ẹ': 'e',
  'ê': 'e', 'ề': 'e', 'ế': 'e', 'ể': 'e', 'ễ': 'e', 'ệ': 'e',
  'ì': 'i', 'í': 'i', 'ỉ': 'i', 'ĩ': 'i', 'ị': 'i',
  'ò': 'o', 'ó': 'o', 'ỏ': 'o', 'õ': 'o', 'ọ': 'o',
  'ô': 'o', 'ồ': 'o', 'ố': 'o', 'ổ': 'o', 'ỗ': 'o', 'ộ': 'o',
  'ơ': 'o', 'ờ': 'o', 'ớ': 'o', 'ở': 'o', 'ỡ': 'o', 'ợ': 'o',
  'ù': 'u', 'ú': 'u', 'ủ': 'u', 'ũ': 'u', 'ụ': 'u',
  'ư': 'u', 'ừ': 'u', 'ứ': 'u', 'ử': 'u', 'ữ': 'u', 'ự': 'u',
  'ỳ': 'y', 'ý': 'y', 'ỷ': 'y', 'ỹ': 'y', 'ỵ': 'y'
}

// Remove Vietnamese diacritics
export function removeVietnameseDiacritics(str) {
  return str
    .toLowerCase()
    .split('')
    .map(char => vietnameseMap[char] || char)
    .join('')
}

// Convert Vietnamese name to slug
export function viToSlug(name) {
  return removeVietnameseDiacritics(name)
    .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
    .replace(/\s+/g, '-')          // Replace spaces with hyphens
    .replace(/-+/g, '-')           // Replace multiple hyphens with single
    .replace(/^-|-$/g, '')         // Remove leading/trailing hyphens
}

// Convert English name to slug
export function enToSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
    .replace(/\s+/g, '-')          // Replace spaces with hyphens
    .replace(/-+/g, '-')           // Replace multiple hyphens with single
    .replace(/^-|-$/g, '')         // Remove leading/trailing hyphens
}

// Chinese stays as-is (will be URL encoded when used in URLs)
export function zhToSlug(name) {
  return name
    .replace(/\s+/g, '-')          // Replace spaces with hyphens
    .replace(/-+/g, '-')           // Replace multiple hyphens with single
    .replace(/^-|-$/g, '')         // Remove leading/trailing hyphens
}

// Get slug for a product based on language
export function getProductSlug(product, language) {
  if (language === 'zh') {
    return product.slugZh || product.nameZh || product.slug
  } else if (language === 'en') {
    return product.slugEn || product.slug
  }
  return product.slug
}

// Find product by slug (searches all language variants)
export function findProductBySlug(allProducts, slug) {
  const decodedSlug = decodeURIComponent(slug)
  return Object.values(allProducts).find(p =>
    p.slug === decodedSlug ||
    p.slugEn === decodedSlug ||
    p.slugZh === decodedSlug
  )
}
