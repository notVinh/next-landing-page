type Category = {
  id: number;
  name: string;
  description: string;
  parent_id: number | null;
  level: number;
  slug?: string; // nếu backend có slug thì dùng, nếu không thì tự tạo
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

export function buildMenu(categories: Category[]): MenuItem[] {
  const map: Record<number, MenuItem> = {};
  const roots: MenuItem[] = [];

  // tạo node cho mỗi category
  categories.forEach((cat) => {
    const slug = cat.slug || slugify(cat.name);
    map[cat.id] = {
      title: cat.name,
      label: cat.name,
      href: "", // sẽ gán sau
      items: [],
    };
  });

  // gán href và build cây
  categories.forEach((cat) => {
    const slug = cat.slug || slugify(cat.name);
    const node = map[cat.id];

    if (cat.parent_id === null) {
      // root
      node.href = `/san-pham/${slug}`;
      roots.push(node);
    } else {
      const parent = map[cat.parent_id];
      if (parent) {
        node.href = `${parent.href}/${slug}`;
        parent.items?.push(node);
      }
    }
  });

  return roots;
}
