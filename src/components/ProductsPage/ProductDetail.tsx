"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import type { Product } from "@/config/content";
import { useTranslation } from "@/components/context/i18n-context";

type Props = {
  product: Product;
  onInquiry?: (p: Product) => void;
};

export default function ProductDetail({ product, onInquiry }: Props) {
  const { t } = useTranslation();
  const renderBullets = (text: string) => {
    const items = text
      .split(";")
      .map((part) => part.trim())
      .filter((part) => part.length > 0);

    if (items.length === 0) return null;

    return (
      <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm marker:text-[#27a0e3]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  };
  return (
    <article className="container mx-auto px-4 py-10">
      <div className="mb-6 flex items-center text-sm text-gray-400">
        <Link href="/products" className="hover:text-[#27a0e3] transition-colors">{t('breadcrumb_products')}</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div>
          <Gallery images={product.images?.length ? product.images : [product.image]} name={product.name} />

          {product.id === 1 ? (
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-[#27a0e3] mb-2">
                {t('product1_applications_title')}
              </h2>
              <p className="text-gray-300 mb-3">
                {t('product1_applications_intro')}
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300 marker:text-[#27a0e3]">
                <li>{t('product1_applications_item1')}</li>
                <li>{t('product1_applications_item2')}</li>
                <li>{t('product1_applications_item3')}</li>
              </ul>
              <p className="text-gray-300 mt-3">
                {t('product1_applications_outro')}
              </p>
            </div>
          ) : product.id === 2 ? (
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-[#27a0e3] mb-2">
                {t('product2_applications_title')}
              </h2>
              <p className="text-gray-300 mb-3">
                {t('product2_applications_intro')}
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300 marker:text-[#27a0e3]">
                <li>{t('product2_applications_item1')}</li>
                <li>{t('product2_applications_item2')}</li>
                <li>{t('product2_applications_item3')}</li>
                <li>{t('product2_applications_item4')}</li>
                <li>{t('product2_applications_item5')}</li>
              </ul>
            </div>
          ) : product.id === 3 ? (
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-[#27a0e3] mb-2">
                {t('product3_applications_title')}
              </h2>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs bg-gray-800 text-[#27a0e3] px-3 py-1 rounded">
                  {t('product3_applications_chip1')}
                </span>
                <span className="text-xs bg-gray-800 text-[#27a0e3] px-3 py-1 rounded">
                  {t('product3_applications_chip2')}
                </span>
                <span className="text-xs bg-gray-800 text-[#27a0e3] px-3 py-1 rounded">
                  {t('product3_applications_chip3')}
                </span>
                <span className="text-xs bg-gray-800 text-[#27a0e3] px-3 py-1 rounded">
                  {t('product3_applications_chip4')}
                </span>
                <span className="text-xs bg-gray-800 text-[#27a0e3] px-3 py-1 rounded">
                  {t('product3_applications_chip5')}
                </span>
              </div>
              <p className="text-gray-300">
                {t('product3_applications_intro')}
              </p>
            </div>
          ) : product.id === 4 ? (
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-[#27a0e3] mb-2">
                {t('product4_applications_title')}
              </h2>
              <p className="text-gray-300 mb-3">
                {t('product4_applications_intro')}
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300 marker:text-[#27a0e3]">
                <li>{t('product4_applications_item1')}</li>
                <li>{t('product4_applications_item2')}</li>
                <li>{t('product4_applications_item3')}</li>
                <li>{t('product4_applications_item4')}</li>
                <li>{t('product4_applications_item5')}</li>
              </ul>
            </div>
          ) : product.id === 5 ? (
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-[#27a0e3] mb-2">
                {t('product5_applications_title')}
              </h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {t('product5_applications_body')}
              </p>
            </div>
          ) : product.id === 6 ? (
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-[#27a0e3] mb-2">
                {t('product6_applications_title')}
              </h2>
              <p className="text-gray-300 mb-3">
                {t('product6_applications_intro')}
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-300 marker:text-[#27a0e3]">
                <li>{t('product6_applications_item1')}</li>
                <li>{t('product6_applications_item2')}</li>
                <li>{t('product6_applications_item3')}</li>
              </ul>
              <p className="text-gray-300 mt-3">
                {t('product6_applications_outro')}
              </p>
            </div>
          ) : (
            Array.isArray(product.applications) && product.applications.length > 0 && (
              <div className="mt-6">
                <h2 className="text-lg font-semibold text-[#27a0e3] mb-2">{t('applications')}</h2>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, idx) => (
                    <span key={idx} className="text-xs bg-gray-800 text-[#27a0e3] px-3 py-1 rounded">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            )
          )}

          <div className="mt-4 rounded-xl border border-gray-700 bg-gray-900 p-5">
            <p className="text-sm text-gray-400 mb-2">{t('contact_box_text')}</p>
            <button
              onClick={() => onInquiry?.(product)}
              className="w-full sm:w-auto bg-[#27a0e3] hover:bg-[#1e8bc3] text-white font-semibold py-3 px-5 rounded-lg transition-colors duration-300 inline-flex items-center justify-center"
            >
              <Mail className="w-4 h-4 mr-2" />
              {t('send_inquiry')}
            </button>
          </div>
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{product.name}</h1>
          <div className=" h-0.5 bg-[#27a0e3] mb-6 rounded" />
          <p className="text-gray-300 mb-6 leading-relaxed whitespace-pre-line">{product.description}</p>

          {product.id === 2 ? (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-[#27a0e3] mb-2">
                {t('product2_types_title')}
              </h2>
              <p className="text-gray-300 mb-4">
                {t('product2_types_intro')}
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="rounded-lg border border-gray-700 bg-gray-900 p-4">
                  <div className="text-xs uppercase tracking-wide text-white pb-2">
                    {t('product2_types_item1_title')}
                  </div>
                  {renderBullets(t('product2_types_item1_body'))}
                </div>
                <div className="rounded-lg border border-gray-700 bg-gray-900 p-4">
                  <div className="text-xs uppercase tracking-wide text-white pb-2">
                    {t('product2_types_item2_title')}
                  </div>
                  {renderBullets(t('product2_types_item2_body'))}
                  <ul className="mt-2 ml-5 list-disc space-y-1 text-gray-300 text-sm marker:text-[#27a0e3]">
                    <li>{t('product2_types_item2_sub1')}</li>
                    <li>{t('product2_types_item2_sub2')}</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-gray-700 bg-gray-900 p-4">
                  <div className="text-xs uppercase tracking-wide text-white pb-2">
                    {t('product2_types_item3_title')}
                  </div>
                  {renderBullets(t('product2_types_item3_body'))}
                </div>
                <div className="rounded-lg border border-gray-700 bg-gray-900 p-4">
                  <div className="text-xs uppercase tracking-wide text-white pb-2">
                    {t('product2_types_item4_title')}
                  </div>
                  {renderBullets(t('product2_types_item4_body'))}
                </div>
                <div className="rounded-lg border border-gray-700 bg-gray-900 p-4">
                  <div className="text-xs uppercase tracking-wide text-white pb-2">
                    {t('product2_types_item5_title')}
                  </div>
                  {renderBullets(t('product2_types_item5_body'))}
                </div>
                <div className="rounded-lg border border-gray-700 bg-gray-900 p-4">
                  <div className="text-xs uppercase tracking-wide text-white pb-2">
                    {t('product2_types_item6_title')}
                  </div>
                  {renderBullets(t('product2_types_item6_body'))}
                </div>
                <div className="rounded-lg border border-gray-700 bg-gray-900 p-4">
                  <div className="text-xs uppercase tracking-wide text-white pb-2">
                    {t('product2_types_item7_title')}
                  </div>
                  {renderBullets(t('product2_types_item7_body'))}
                </div>
              </div>
            </div>
          ) : product.id === 3 ? null : product.id === 4 ? null : product.id === 5 ? (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-[#27a0e3] mb-2">
                {t('product5_benefits_title')}
              </h2>
              <p className="text-gray-300 mb-4">
                {t('product5_benefits_intro')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  t('product5_benefits_item1'),
                  t('product5_benefits_item2'),
                  t('product5_benefits_item3'),
                  t('product5_benefits_item4'),
                  t('product5_benefits_item5'),
                ].map((item) => (
                  <div key={item} className="rounded-lg border border-gray-700 bg-gray-900 p-4">
                    <div className="text-gray-300 text-sm">{item}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-[#27a0e3] mb-2">
                  {t('product5_description_title')}
                </h2>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {t('product5_description_body')}
                </p>
              </div>
            </div>
          ) : product.id === 6 ? (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-[#27a0e3] mb-2">
                {t('product6_benefits_title')}
              </h2>
              <p className="text-gray-300 mb-4">
                {t('product6_benefits_intro')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  t('product6_benefits_item1'),
                  t('product6_benefits_item2'),
                  t('product6_benefits_item3'),
                  t('product6_benefits_item4'),
                ].map((item) => (
                  <div key={item} className="rounded-lg border border-gray-700 bg-gray-900 p-4">
                    <div className="text-gray-300 text-sm">{item}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-[#27a0e3] mb-2">
                  {t('product6_description_title')}
                </h2>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {t('product6_description_body')}
                </p>
              </div>
            </div>
          ) : (
            Array.isArray(product.specs) && product.specs.length > 0 && (
              <>
                <h2 className="text-xl font-semibold text-[#27a0e3] mb-2">{t('product1_specs_description_title')}</h2>
                <p className="text-gray-300 mb-4">{t('product1_specs_description')}</p>
                <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.specs.map((s, idx) => (
                    <div key={idx} className="rounded-lg border border-gray-700 bg-gray-900 p-4">
                      <div className="text-xs uppercase tracking-wide text-white pb-1">{s.label}</div>
                      <div className="text-gray-400 text-sm">{s.value}</div>
                    </div>
                  ))}
                </div>
              </>
            )
          )}

          {product.id !== 1 && product.id !== 2 && product.id !== 3 && product.id !== 4 && product.id !== 5 && product.id !== 6 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-[#27a0e3] mb-2">{t('characteristics')}</h2>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start">
                    <span className="mt-2 w-1.5 h-1.5 bg-[#27a0e3] rounded-full mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}


          {product.id === 1 ? (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-[#27a0e3] mb-2">
                {t('product1_description_title')}
              </h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {t('product1_description_body')}
              </p>
            </div>
          ) : product.id === 2 ? null : product.id === 3 ? (
            <div className="mb-8 space-y-4">
              <div className="rounded-lg border border-gray-700 bg-gray-900 p-4">
                <h2 className="text-xl font-semibold text-[#27a0e3] mb-2">
                  {t('product3_description_title')}
                </h2>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {t('product3_description_body')}
                </p>
              </div>
              <div className="rounded-lg border border-gray-700 bg-gray-900 p-4">
                <h2 className="text-xl font-semibold text-[#27a0e3] mb-2">
                  {t('product3_benefits_title')}
                </h2>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {t('product3_benefits_body')}
                </p>
              </div>
            </div>
          ) : product.id === 4 ? (
            <div className="mb-8 space-y-4">
              <div className="rounded-lg border border-gray-700 bg-gray-900 p-4">
                <h2 className="text-xl font-semibold text-[#27a0e3] mb-2">
                  {t('product4_description_title')}
                </h2>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {t('product4_description_body')}
                </p>
              </div>
              <div className="rounded-lg border border-gray-700 bg-gray-900 p-4">
                <h2 className="text-xl font-semibold text-[#27a0e3] mb-2">
                  {t('product4_benefits_title')}
                </h2>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {t('product4_benefits_body')}
                </p>
              </div>
            </div>
          ) : product.id === 5 ? null : product.id === 6 ? null : (
            (product.contentHtml ? (
              <ReadMoreHtml html={product.contentHtml} />
            ) : (
              product.longDescription && <ReadMore text={product.longDescription} />
            ))
          )}
        </div>
      </div>
    </article>
  );
}

function Gallery({ images, name }: { images: string[]; name: string }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = images[activeIdx] ?? images[0];
  const { t } = useTranslation();

  return (
    <div>
      <div className="relative w-full h-[360px] md:h-[480px] rounded-xl overflow-hidden border border-gray-700 bg-gray-800/40">
        <Image
          src={active}
          alt={name}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority
        />
      </div>
      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-3">
          {images.map((src, idx) => (
            <button
              key={`${src}-${idx}`}
              onClick={() => setActiveIdx(idx)}
              className={`relative h-16 rounded-md overflow-hidden border transition-colors ${idx === activeIdx ? "border-[#27a0e3]" : "border-gray-700 hover:border-gray-500"}`}
              aria-label={t('image_index_label', String(idx + 1))}
            >
              <Image src={src} alt={`${name} - ${idx + 1}`} fill className="object-cover" sizes="120px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ReadMore({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const PREVIEW_CHARS = 220;
  const isLong = text.length > PREVIEW_CHARS;
  const shown = expanded || !isLong ? text : text.slice(0, PREVIEW_CHARS) + "…";
  const { t } = useTranslation();

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-[#27a0e3] mb-2">{t('description')}</h2>
      <p className="text-gray-300 leading-relaxed whitespace-pre-line">{shown}</p>
      {isLong && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 text-sm text-[#27a0e3] hover:underline"
        >
          {expanded ? t('read_less') : t('read_more')}
        </button>
      )}
    </div>
  );
}

function ReadMoreHtml({ html }: { html: string }) {
  const [expanded, setExpanded] = useState(false);
  const PREVIEW_CHARS = 220;
  const plainText = useMemo(() => stripHtmlToText(html), [html]);
  const { t } = useTranslation();

  const isLong = plainText.length > PREVIEW_CHARS;
  const preview = isLong ? plainText.slice(0, PREVIEW_CHARS) + "…" : plainText;

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-[#27a0e3] mb-2">{t('description')}</h2>
      {expanded ? (
        <div className="text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <p className="text-gray-300 leading-relaxed whitespace-pre-line">{preview}</p>
      )}
      {isLong && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 text-sm text-[#27a0e3] hover:underline"
        >
          {expanded ? t('read_less') : t('read_more')}
        </button>
      )}
    </div>
  );
}

function stripHtmlToText(input: string): string {

  const withoutTags = input.replace(/<[^>]*>/g, " ");

  const decoded = withoutTags
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

  return decoded.replace(/\s+/g, " ").trim();
}


