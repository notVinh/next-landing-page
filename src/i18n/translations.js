import vi from './locales/vi'
import en from './locales/en'
import zh from './locales/zh'

// Để thêm ngôn ngữ mới:
// 1. Tạo file mới trong src/i18n/locales/ (ví dụ: zh.js, ja.js, ko.js)
// 2. Import file đó ở trên
// 3. Thêm vào object translations bên dưới
// 4. Thêm vào availableLanguages trong LanguageContext.jsx

export const translations = {
  vi,
  en,
  zh,  // Tiếng Trung
  // Thêm ngôn ngữ mới ở đây:
  // ja: ja,  // Tiếng Nhật
  // ko: ko,  // Tiếng Hàn
}

// Helper function để lấy tất cả ngôn ngữ có sẵn
export const getAvailableLanguages = () => Object.keys(translations)
