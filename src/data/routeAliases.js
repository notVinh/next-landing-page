// @/data/routeAliases.js
export const routeAliases = {
  contact: { vi: "lien-he", en: "contact", zh: "lian-xi" },
  services: { vi: "dich-vu", en: "services", zh: "fu-wu" },
  solutions: { vi: "giai-phap", en: "solutions", zh: "jie-jue-fang-an" },
  history: { vi: "lich-su", en: "history", zh: "li-shi" },
  profile: {
    vi: "ho-so-cong-ty",
    en: "company-profile",
    zh: "gong-si-jian-jie",
  },
  info: { vi: "thong-tin-cong-ty", en: "company-info", zh: "gong-si-xin-xi" },
  catalog: { vi: "catalog", en: "catalog", zh: "mu-lu" },
};

// Helper để tìm ID trang dựa trên slug bất kỳ
export const getPageIdBySlug = (slug) => {
  return Object.keys(routeAliases).find((id) =>
    Object.values(routeAliases[id]).includes(slug),
  );
};
