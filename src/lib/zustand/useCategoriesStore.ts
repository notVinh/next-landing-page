// stores/useCategoriesStore.ts
import { create } from "zustand";

type Category = {
  id: string;
  level: number;
  description: string;
  name: string;
  link: string;
  items?: { label: string; href: string }[];
};

type CategoriesState = {
  categories: Category[];
  setCategories: (cats: Category[]) => void;
};

export const useCategoriesStore = create<CategoriesState>((set) => ({
  categories: [],
  setCategories: (cats) => set({ categories: cats }),
}));
