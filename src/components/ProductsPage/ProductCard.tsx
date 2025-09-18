"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, ExternalLink } from "lucide-react";
import { Product } from "@/config/content";
import { useTranslation  } from "../context/i18n-context";

type Props = {
  product: Product;
  onInquiry: (p: Product) => void;
};

export default function ProductCard({ product, onInquiry }: Props) {
  const {t} = useTranslation();
  return (
    <div className="flex flex-col h-full bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-[#27a0e3] transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden bg-gray-800/40">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          priority={false}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#27a0e3]/90 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur">
            {product.category}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">
          {product.description}
        </p>

        <div className="mb-6">
          <h4 className="text-[#27a0e3] font-semibold mb-2">
            {t('characteristics')}
          </h4>
          <ul className="space-y-1">
            {product.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-gray-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-[#27a0e3] rounded-full mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {Array.isArray(product.applications) && product.applications.length > 0 && (
          <div className="mb-6">
            <h4 className="text-[#27a0e3] font-semibold mb-2">{t('applications')}</h4>
            <div className="flex flex-wrap gap-2">
              {(product.applications ?? []).slice(0, 2).map((app, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-800 text-[#27a0e3] px-2 py-1 rounded"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto flex gap-3">
          <button
            onClick={() => onInquiry(product)}
            className="flex-1 bg-[#27a0e3] hover:bg-[#1e8bc3] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
          >
            <Mail className="w-4 h-4 mr-2" />
            {t('inquiry')}
          </button>

          <Link
            href={`/products/${product.id}`}
            className="flex-1 border border-gray-600 text-white hover:bg-gray-800 font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            {t('details')}
          </Link>
        </div>
      </div>
    </div>
  );
}