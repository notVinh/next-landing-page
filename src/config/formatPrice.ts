const formatCurrency = (amount: number, locale: string, currency: string) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const getProductPricesArray = (
  originalVnd: number,
  currentVnd: number,
) => {
  const rates = {
    USD: 0.000038,
    RMB: 0.00026,
  };

  const format = (val: number, loc: string, cur: string) =>
    new Intl.NumberFormat(loc, {
      style: "currency",
      currency: cur,
      minimumFractionDigits: 0,
    }).format(val);

  // Trả về mảng để dùng .map() trực tiếp
  return [
    {
      id: "VND",
      label: "Tiếng Việt",
      original: format(originalVnd, "vi-VN", "VND"),
      current: format(currentVnd, "vi-VN", "VND"),
    },
    {
      id: "USD",
      label: "English",
      original: format(originalVnd * rates.USD, "en-US", "USD"),
      current: format(currentVnd * rates.USD, "en-US", "USD"),
    },
    {
      id: "RMB",
      label: "中国",
      original: format(originalVnd * rates.RMB, "zh-CN", "CNY"),
      current: format(currentVnd * rates.RMB, "zh-CN", "CNY"),
    },
  ];
};
