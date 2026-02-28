export interface ApiResponseError extends Error {
  status?: number;
  data?: unknown;
}

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "";

export async function http<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const url = `${BASE_URL}${path}`;

  const headers = new Headers(options.headers);

  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  headers.set("accept", "application/json");

  // ✅ chỉ chạy client
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("auth_token");
    if (token) headers.set("Authorization", `Bearer ${token}`);
  }

  const res = await fetch(url, {
    ...options,
    headers,
  });

  const isJson = res.headers.get("content-type")?.includes("application/json");
  const data = isJson ? await res.json() : null;

  if (!res.ok) {
    const err: ApiResponseError = new Error(data?.message || "Request failed");
    err.status = res.status;
    err.data = data;

    // ✅ logout client side only
    // if (res.status === 401 && typeof window !== "undefined") {
    //   localStorage.removeItem("auth_token");
    //   window.location.href = "/login";
    // }

    throw err;
  }

  return data;
}
