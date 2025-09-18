"use client";

import React from "react";
import { Product } from "@/config/content";
import ProductCard from "./ProductCard";
import { useTranslation } from "../context/i18n-context";



type Props = {
  products: Product[];
  onInquiry: (p: Product) => void;
};

export default function ProductsGrid({ products, onInquiry }: Props) {
  const {t} = useTranslation();
    return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        {products.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-white mb-4">{t('noProductsFound')}</h3>
            <p className="text-gray-300">{t('tryAnotherCategory')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onInquiry={onInquiry} />
            ))}
          </div>
        )}
      </div>
      <div className="border-t border-gray-700 mt-12"></div>
    </section>
  );
}
