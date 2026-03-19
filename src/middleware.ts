import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED_LANGS = ["vi", "en", "zh"];
const DEFAULT_LANG = "vi";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("accessToken")?.value;

  // 1. Bảo vệ nhánh ADMIN (Auth Guard)
  if (pathname.startsWith("/admin")) {
    // 1. Nếu đang vào trang Login MÀ ĐÃ CÓ token -> Đá về Dashboard
    if (pathname === "/admin/login" && accessToken) {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }

    // 2. Nếu vào các trang quản trị MÀ CHƯA CÓ token -> Đá về Login
    if (pathname !== "/admin/login" && !accessToken) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    return NextResponse.next();
  }

  // 1. Bảo vệ nhánh ADMIN (Auth Guard)
  if (pathname.startsWith("/business")) {
    // 1. Nếu đang vào trang Login MÀ ĐÃ CÓ token -> Đá về Dashboard
    if (pathname === "/business/login" && accessToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    // 2. Nếu vào các trang quản trị MÀ CHƯA CÓ token -> Đá về Login
    if (pathname !== "/business/login" && !accessToken) {
      return NextResponse.redirect(new URL("/business/login", request.url));
    }

    return NextResponse.next();
  }

  // 1. ƯU TIÊN SỐ 1: Nhánh Admin và các file hệ thống
  // Loại bỏ hoàn toàn Admin và API khỏi luồng xử lý i18n
  if (
    // pathname.startsWith("/admin") ||
    pathname.startsWith("/customer") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // Bỏ qua các file có đuôi mở rộng (.png, .jpg, .svg...)
  ) {
    return NextResponse.next();
  }

  // 2. Xử lý trang chủ (Root)
  if (pathname === "/") {
    // Ưu tiên cookie nếu người dùng đã chọn ngôn ngữ trước đó
    const lang =
      request.cookies.get("userSelectedLanguage")?.value || DEFAULT_LANG;
    return NextResponse.redirect(new URL(`/${lang}`, request.url));
  }

  // 3. Kiểm tra xem URL đã có ngôn ngữ hợp lệ chưa
  const pathnameHasLocale = SUPPORTED_LANGS.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // 4. Nếu vào các trang landing mà thiếu [lang] -> Redirect về ngôn ngữ mặc định
  // Ví dụ: /about -> /vi/about
  return NextResponse.redirect(
    new URL(`/${DEFAULT_LANG}${pathname}`, request.url),
  );
}

export const config = {
  // Matcher tối ưu: Chạy trên tất cả các route trừ file tĩnh và hệ thống Next.js
  matcher: ["/((?!_next/static|_next/image|assets|favicon.ico|sw.js|.*\\.).*)"],
};
