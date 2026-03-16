// components/UserFetcher.tsx
"use client";

import { getInfoAction } from "@/app/(test)/(auth)/test/login/action";
import { useUserStore } from "@/lib/zustand/userStore";
import { useEffect } from "react";

export default function UserFetcher() {
  const { setUser, user } = useUserStore();

  useEffect(() => {
    if (!user) {
      getInfoAction().then((res) => {
        if (res.success) setUser(res.userData);
      });
    }
  }, [user, setUser]);

  return null; // Component này không hiển thị gì cả
}
