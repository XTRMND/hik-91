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

          {Array.isArray(product.applications) && product.applications.length > 0 && (
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

          {Array.isArray(product.specs) && product.specs.length > 0 && (
            <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.specs.map((s, idx) => (
                <div key={idx} className="rounded-lg border border-gray-700 bg-gray-900 p-4">
                  <div className="text-xs uppercase tracking-wide text-gray-400">{s.label}</div>
                  <div className="text-white">{s.value}</div>
                </div>
              ))}
            </div>
          )}

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


          {product.contentHtml ? (
            <ReadMoreHtml html={product.contentHtml} />
          ) : (
            product.longDescription && <ReadMore text={product.longDescription} />
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


