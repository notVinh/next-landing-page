// 'use client'

// import Link from 'next/link'
// import { useLanguage } from '@/contexts/LanguageContext'
// import { translatePath } from '@/utils/routeSlugs'

// export function getLocalizedPath(path: string, language: string): string {
//   if (path.match(/^\/(vi|en|zh)(\/|$)/)) return path
//   if (path === '/') return `/${language}`
//   const translatedPath = translatePath(path, language)
//   return `/${language}${translatedPath}`
// }

// export function LocalizedLink({
//   href,
//   children,
//   ...props
// }: React.ComponentProps<typeof Link>) {
//   const { language } = useLanguage()
//   const to = typeof href === 'string' ? href : href.pathname || '/'
//   const localizedHref = getLocalizedPath(to, language) as `/${string}`

//   return (
//     <Link href={localizedHref} {...props}>
//       {children}
//     </Link>
//   )
// }

"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { translatePath } from "@/utils/routeSlugs";

// Hàm helper để tạo path có chứa mã ngôn ngữ
export function getLocalizedPath(path: string, language: string): string {
  // Nếu path đã có mã ngôn ngữ rồi thì trả về luôn
  if (path.match(/^\/(vi|en|zh)(\/|$)/)) return path;

  // Nếu là trang chủ
  if (path === "/") return `/${language}`;

  // Dịch slug dựa trên ngôn ngữ (ví dụ: /san-pham -> /products)
  const translatedPath = translatePath(path, language);

  // Đảm bảo path bắt đầu bằng /
  const cleanPath = translatedPath.startsWith("/")
    ? translatedPath
    : `/${translatedPath}`;

  return `/${language}${cleanPath}`;
}

export function LocalizedLink({
  href,
  children,
  ...props
}: React.ComponentProps<typeof Link>) {
  // Lấy lang trực tiếp từ URL [lang].
  // Cách này cực kỳ an toàn vì Server và Client đều thấy lang giống hệt nhau trên URL.
  const params = useParams();
  const language = (params?.lang as string) || "vi";

  const to = typeof href === "string" ? href : href.pathname || "/";
  const localizedHref = getLocalizedPath(to, language) as `/${string}`;

  return (
    <Link href={localizedHref} {...props}>
      {children}
    </Link>
  );
}
