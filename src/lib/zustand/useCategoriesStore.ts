// stores/useCategoriesStore.ts
import { create } from "zustand";

type Category = {
  id: number;
  name: string;
  description: string;
  parent_id: number | null;
  level: number;
  slug?: string; // nếu backend có slug thì dùng, nếu không thì tự tạo
};

type CategoriesState = {
  categories: Category[];
  setCategories: (cats: Category[]) => void;
};

export const useCategoriesStore = create<CategoriesState>((set) => ({
  categories: [],
  setCategories: (cats) => set({ categories: cats }),
}));
