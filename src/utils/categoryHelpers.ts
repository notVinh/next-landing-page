// @/utils/categoryHelpers.ts
export const getTargetCategorySlug = (
  categories: any[],
  currentSlug: string,
  targetLang: string,
) => {
  if (!categories || categories.length === 0) return currentSlug;

  // Tìm category chứa slug hiện tại trong mảng translations
  const foundCategory = categories.find((cat: any) =>
    cat.translations?.some(
      (t: any) => t.slug === currentSlug || t.name === currentSlug,
    ),
  );

  if (!foundCategory) return currentSlug;

  // Lấy bản dịch của ngôn ngữ đích
  const targetTranslation = foundCategory.translations?.find(
    (t: any) => t.languageCode === targetLang,
  );

  return targetTranslation?.slug || targetTranslation?.name || currentSlug;
};
