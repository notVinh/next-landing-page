import LogoutButton from "@/components/business/LogoutButton";
import ProductPriceTable from "@/components/business/ProductPriceTable";
import ProductSkeleton from "@/components/business/ProductSkeleton";
import { apiRequest } from "@/lib/api-client";
import { Suspense } from "react";

export const revalidate = 60;

// app/business/product/page.tsx
export default async function ProductBusinessPage({ searchParams }: any) {
  const { page, limit, cate, search } = await searchParams;

  let endpoint = `/products?page=${page || 1}&limit=${limit || 5}&lang=vi`;

  // Ưu tiên: Nếu có Cate thì lấy theo Cate, nếu có Search thì lấy theo Search
  if (cate) {
    endpoint = `/categories/${cate}/products`;
  } else if (search) {
    endpoint = `/products/search?search=${search}&lang=vi`;
  }

  const res = await apiRequest(endpoint);
  const rawData = res?.data || res?.products || res || [];

  const products = rawData.map((item: any) => {
    const translation = item.translations?.find(
      (i: any) => i.languageCode === "vi",
    );
    return {
      ...item,
      displayName: translation?.name || item.name || "N/A",
    };
  });

  const cateRes = await apiRequest("/categories");
  const cateMenu = cateRes?.data?.filter((i: any) => i.level === 2);

  const totalPages = Math.round(res?.meta?.total / res?.meta?.limit);

  return (
    <main className="px-8 max-w-8xl mx-auto">
      <div className="w-full flex items-end justify-end bg-gray-50">
        <LogoutButton />
      </div>
      <Suspense fallback={<ProductSkeleton />}>
        {/* Truyền cate vào để Client biết đang ở chế độ lọc theo danh mục hay không */}
        <ProductPriceTable
          products={products}
          cateMenu={cateMenu}
          totalPages={totalPages}
        />
      </Suspense>
    </main>
  );
}
