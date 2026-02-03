import React from "react";
import Image from "next/image";
import { useTranslation } from '@/components/context/i18n-context';


export default function WhoAreWe() {
  const { t } = useTranslation();
  const section1Lines = t('aboutUsSection1Body').split('\n');
  const section1Intro = section1Lines[0] || '';
  const section1Outro = section1Lines[section1Lines.length - 1] || '';
  const section1Items = section1Lines
    .slice(1, -1)
    .filter((line) => line.trim().length > 0)
    .map((line) => line.replace(/^•\s*/, ''));
  const section3Lines = t('aboutUsSection3Body').split('\n');
  const section3Intro = section3Lines.find((line) => !line.trim().startsWith('•')) || '';
  const section3Items = section3Lines
    .filter((line) => line.trim().startsWith('•'))
    .map((line) => line.replace(/^•\s*/, ''));
  const section3Outro = section3Lines
    .filter((line) => line.trim().length > 0 && !line.trim().startsWith('•'))
    .slice(1)
    .join('\n');
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <h3 className="text-xl md:text-2xl font-semibold text-[#2598d7] text-left">
                {t('aboutUsSection1Title')}
              </h3>
              <p className="text-left">{section1Intro}</p>
              <ul className="list-disc pl-5 space-y-2 text-left marker:text-[#2598d7] marker:text-[1.35rem]">
                {section1Items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-left">{section1Outro}</p>
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

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-semibold text-[#2598d7] text-center">
                {t('aboutUsSection2Title')}
              </h3>
              <p className="whitespace-pre-line text-left marker:text-[#2598d7] marker:text-[1.1rem]">
                {t('aboutUsSection2Body')}
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-semibold text-[#2598d7] text-center">
                {t('aboutUsSection3Title')}
              </h3>
              <p className="text-left">{section3Intro}</p>
              <ul className="list-disc pl-5 space-y-4 text-left marker:text-[#2598d7] marker:text-[1.35rem]">
                {section3Items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {section3Outro ? <p className="whitespace-pre-line text-left">{section3Outro}</p> : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}