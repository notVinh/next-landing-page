import { FactoryItem, FactoryMeta } from "@/types/factory";
import { http } from "./client";

export type ListFactoryResponse = {
  data: FactoryItem[];
  meta: FactoryMeta;
};

export const factoriesApi = {
  list: (page = 1, limit = 10, search?: string) => {
    const params = new URLSearchParams({
      page: String(page),
      limit: String(limit),
      ...(search && { search }),
    });

    return http<ListFactoryResponse>(`/factory?${params}`);
  },

  create: (data: Partial<FactoryItem>) =>
    http<FactoryItem>("/factory", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  update: (id: number, data: Partial<FactoryItem>) =>
    http<FactoryItem>(`/factory/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    }),

  getById: (id: number) => http<FactoryItem>(`/factory/${id}`),

  updateWorkDays: (id: number, workDays: number[]) =>
    http<FactoryItem>(`/factory/${id}/work-days`, {
      method: "PATCH",
      body: JSON.stringify({ workDays }),
    }),
};
