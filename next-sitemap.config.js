// /** @type {import('next-sitemap').IConfig} */
// module.exports = {
//   siteUrl: "https://yourdomain.com",
//   generateRobotsTxt: true,
//   sitemapSize: 7000,
//   exclude: ["/admin/*", "/api/*"],
// };

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "http://171.244.62.122:9696", // đổi thành domain thật của bạn
  generateRobotsTxt: true, // tự động tạo robots.txt
  sitemapSize: 7000, // chia nhỏ sitemap nếu quá nhiều URL
  exclude: ["/admin/*", "/api/*"], // loại bỏ những path không cần index
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/admin", "/api"] },
    ],
    additionalSitemaps: ["http://171.244.62.122:9696/sitemap.xml"],
  },
};
