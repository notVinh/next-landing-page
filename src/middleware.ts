import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED_LANGS = ["vi", "en", "zh"];
const DEFAULT_LANG = "vi";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Nếu là /admin thì bỏ qua i18n
  if (pathname.startsWith("/admin")) {
    return NextResponse.next();
    // return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  }

  if (pathname.startsWith("/customer")) {
    return NextResponse.next();
  }

  // Nếu root, redirect sang ngôn ngữ mặc định
  if (pathname === "/") {
    const lang = request.cookies.get("NEXT_LOCALE")?.value || DEFAULT_LANG;
    return NextResponse.redirect(new URL(`/${lang}`, request.url));
  }

  // Nếu path bắt đầu bằng /vi, /en, /zh thì cho qua
  const firstSegment = pathname.split("/")[1];
  if (SUPPORTED_LANGS.includes(firstSegment)) {
    return NextResponse.next();
  }

  // Các path khác không có lang → redirect sang /vi/...
  return NextResponse.redirect(
    new URL(`/${DEFAULT_LANG}${pathname}`, request.url),
  );
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico|images|logo|.*\\.).*)"],
};
