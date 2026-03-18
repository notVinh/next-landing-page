// hooks/useProduct.ts
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useProduct(productId: string | undefined) {
  const { data, error, isLoading } = useSWR(
    productId
      ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${productId}`
      : null,
    fetcher,
    {
      revalidateOnFocus: false, // Không fetch lại khi chuyển tab
      dedupingInterval: 60000, // Trong 1 phút chỉ fetch 1 lần cho cùng 1 ID
    },
  );

  return { product: data, isLoading, isError: error };
}
