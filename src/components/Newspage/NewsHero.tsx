"use client";

import React from "react";
import Reveal from "../Reveal";
import { useTranslation } from '@/components/context/i18n-context';

export default function NewsHero() {
  const {t} = useTranslation();
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t('news')}
          </h1>
          <div className="w-40 h-0.5 bg-[#2598d7] mx-auto mb-5 rounded"></div>
        </Reveal>
        </div>
      </div>
    </section>
  );
}
