type Category = {
  id: number;
  name: string;
  description: string;
  parentId: number | null;
  level: number;
  slug?: string; // nếu backend có slug thì dùng, nếu không thì tự tạo
  translations?: any[];
};

type MenuItem = {
  title: string;
  label: string;
  href: string;
  items?: MenuItem[];
};

// Hàm tạo slug từ name (bỏ dấu, khoảng trắng)
function slugify(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // bỏ dấu tiếng Việt
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export function buildMenu(categories: Category[], lang: string): MenuItem[] {
  const map: Record<number, MenuItem> = {};
  const roots: MenuItem[] = [];

  // Bước 1: Khởi tạo Map bằng ID của Category gốc
  categories.forEach((cat) => {
    const translation =
      cat.translations?.find((t) => t.languageCode === lang) ||
      cat.translations?.[0]; // Fallback về bản dịch đầu tiên nếu không tìm thấy lang

    if (translation) {
      map[cat.id] = {
        title: translation.name,
        label: translation.name,
        href: translation.slug || slugify(translation.name),
        items: [],
      };
    }
  });

  // Bước 2: Sắp xếp categories theo level để đảm bảo cha luôn có href trước con
  const sortedCategories = [...categories].sort((a, b) => a.level - b.level);

  // Bước 3: Xây dựng cấu trúc cây và nối chuỗi href
  sortedCategories.forEach((cat) => {
    const node = map[cat.id];
    if (!node) return;

    if (cat.parentId === null) {
      // Root node
      node.href = `/san-pham/${node.href}`;
      roots.push(node);
    } else {
      const parent = map[cat.parentId];
      if (parent) {
        // Nối slug của con vào href hoàn chỉnh của cha
        node.href = `${parent.href}/${node.href}`;
        parent.items?.push(node);
      }
    }
  });

  return roots;
}
