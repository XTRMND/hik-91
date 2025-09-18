"use client";

import { useTranslation } from '@/components/context/i18n-context';

export default function ContactsMapEmbed() {

  const {t} = useTranslation();
  const headerH = 60;

  return (
    <section className="py-20 bg-gray-900">
        <div className="absolute inset-x-0 top-0 h-32 md:h-20 z-10 bg-gradient-to-t from-transparent via-black/70 to-black" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">{t('youCanFindUsHere')}</h2>
          <div className="w-40 h-0.5 bg-[#2598d7] mx-auto mb-5 rounded" />
        </div>

        <div className="rounded-xl bg-gray-800 overflow-hidden relative" style={{ height: "24rem" }}>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1jpMmSpiUUbQ5rSpyazIGdDA7iAxc6D8&ehbc=2E312F"
            className="absolute left-0 w-full"
            style={{
              top: `-${headerH}px`,
              height: `calc(100% + ${headerH}px)`,
              border: 0,
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-32 md:h-20 z-10 bg-gradient-to-b from-transparent via-black/70 to-black" />
    </section>
  );
}