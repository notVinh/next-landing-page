"use client";
import React from "react";
import PriceModal from "./PriceModal";
import QuoteModal from "./QuoteModal";
import { useLanguage } from "@/contexts/LanguageContext";
import { useUserStore } from "@/lib/zustand/userStore";

const ChangeModalProduct = ({ product, currentLangPro }) => {
  const { language } = useLanguage();
  const { user } = useUserStore();
  console.log(user);

  return (
    <div className="flex flex-wrap gap-4 pt-4 ">
      {user ? (
        <PriceModal productData={product} productName={currentLangPro.name} />
      ) : (
        <QuoteModal
          productName={currentLangPro.name}
          productId={product.id}
          lang={language}
        />
      )}
    </div>
  );
};

export default ChangeModalProduct;
