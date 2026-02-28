"use client";

import { useQuery } from "@tanstack/react-query";
import { factoriesApi } from "@/services/factories";

export const useFactories = (page: number, limit: number, search: string) => {
  return useQuery({
    queryKey: ["factories", page, limit, search],
    queryFn: () => factoriesApi.list(page, limit, search),
    // keepPreviousData: true,
  });
};
