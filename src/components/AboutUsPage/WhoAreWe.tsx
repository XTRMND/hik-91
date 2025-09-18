import React from "react";
import Image from "next/image";
import { useTranslation } from '@/components/context/i18n-context';


export default function WhoAreWe() {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {t('aboutUs')}
              </h2>
              <div className="w-20 h-0.5 bg-[#2598d7] mx-auto mt-3 rounded"></div>
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                {t('aboutUsParagraph1')}
              </p>
              <p>
                {t('aboutUsParagraph2')}
              </p>
              <p>
                {t('aboutUsParagraph3')}
              </p>
            </div>
          </div>

          {/* Images */}
          <div className="relative flex justify-center">
            <div className="relative w-[600px] h-[400px]">
              <Image
                src="/aboutUs-1.jpg"
                alt="Производствена база на ХИК-91"
                fill
                className="rounded-xl object-cover shadow-lg"
                priority
              />
              <Image
                src="/aboutUs-2.jpg"
                alt="Склад ХИК-91"
                width={280}
                height={200}
                className="rounded-xl object-cover shadow-lg absolute -bottom-8 -left-8 border-4 border-black"
              />
              <Image
                src="/aboutUs-3.jpg"
                alt="Продукция ХИК-91"
                width={280}
                height={200}
                className="rounded-xl object-cover shadow-lg absolute -top-8 -right-8 border-4 border-black"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}