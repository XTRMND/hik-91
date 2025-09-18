'use client';

import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import enTranslations from "./langs/en";
import bgTranslations from "./langs/bg";
import type { Translations } from "./langs/en";

export type TranslationArgs = ReadonlyArray<string | number>;
type StringLikeKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never
}[keyof T];

type TranslationFn = (key: StringLikeKeys<Translations>, ...args: TranslationArgs) => string;

interface SupportedLocale {
  key: "en" | "bg";
  label: string;
  flag: string;
}


interface I18nState {
  locale: SupportedLocale;
  locales: SupportedLocale[];
  setLocale: (locale: SupportedLocale) => void;
  t: TranslationFn;
}

const I18nContext = createContext<I18nState | undefined>(undefined);

export const locales: SupportedLocale[] = [
  { key: "bg", label: "BG", flag: "🇧🇬" },
  { key: "en", label: "EN", flag: "🇺🇸" },
];

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<SupportedLocale>(locales[0]);
  const [translations, setTranslations] = useState<Translations>(bgTranslations);

  useEffect(() => {
    if (locale.key === "en") setTranslations(enTranslations);
    else setTranslations(bgTranslations);

    document.documentElement.lang = locale.key;
  }, [locale]);

  const t: TranslationFn = (key, ...args) => {
    const dict = translations as unknown as Record<string, string>;
    let result = dict[key as string] ?? String(key as string);
    for (const arg of args) {
      result = result.replace("%s", String(arg));
    }
    return result;
  };

  return (
    <I18nContext.Provider value={{ locale, locales, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useTranslation must be used inside I18nProvider");
  return ctx;
}