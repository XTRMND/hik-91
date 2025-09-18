"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Card from "./Card";
import { useTranslation } from '@/components/context/i18n-context';

export default function Announcements() {
  const {t} = useTranslation();
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 auto-rows-auto">

          <Card
            body={t('news1Content')}
          >
            <Link
              href="/documents/saobshtenie.pdf"
              target="_blank"
              className="inline-flex items-center text-[#2598d7] hover:text-[#4daee0] font-semibold"
            >
              {t('news1File1')}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Card>

          <div className="row-span-2">
            <Card
              body={t('news3Content')}
            >
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-400">
                {t('news3SubHeader1')}
                </p>
                <Link
                  href="https://eumis2020.government.bg/bg/s/Offers/Index"
                  target="_blank"
                  className="inline-flex items-center text-[#2598d7] hover:text-[#4daee0] font-semibold"
                >
                  {t('news3File1')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-2">
                {t('news3SubHeader2')}
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>
                    <a
                      href="/documents/publichna-pokana.pdf"
                      download
                      className="text-[#2598d7] hover:text-[#4daee0] font-semibold"
                    >
                      {t('news3File2')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/documents/iziskvania.pdf"
                      download
                      className="text-[#2598d7] hover:text-[#4daee0] font-semibold"
                    >
                      {t('news3File3')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/documents/obrazec-na-oferta.docx"
                      download
                      className="text-[#2598d7] hover:text-[#4daee0] font-semibold"
                    >
                      {t('news3File4')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/documents/metodika-ocenka.pdf"
                      download
                      className="text-[#2598d7] hover:text-[#4daee0] font-semibold"
                    >
                      {t('news3File5')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/documents/deklaracia-eik.docx"
                      download
                      className="text-[#2598d7] hover:text-[#4daee0] font-semibold"
                    >
                      {t('news3File6')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/documents/deklaracia-kandidati.docx"
                      download
                      className="text-[#2598d7] hover:text-[#4daee0] font-semibold"
                    >
                      {t('news3File7')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/documents/proekt-dogovor.pdf"
                      download
                      className="text-[#2598d7] hover:text-[#4daee0] font-semibold"
                    >
                      {t('news3File8')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/documents/prilojenie-2.pdf"
                      download
                      className="text-[#2598d7] hover:text-[#4daee0] font-semibold"
                    >
                      {t('news3File9')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/documents/tehnicheska-specifikacia.pdf"
                      download
                      className="text-[#2598d7] hover:text-[#4daee0] font-semibold"
                    >
                      Т{t('news3File10')}
                    </a>
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          <Card
            body={t('news2Content')}
          >
            <div className="space-y-2 mb-4">
              <Link
                href="/documents/podkrepa.pdf"
                target="_blank"
                className="inline-flex items-center text-[#2598d7] hover:text-[#4daee0] font-semibold"
              >
                {t('news2File1')}
              </Link>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
}