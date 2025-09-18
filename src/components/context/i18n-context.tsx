'use client';

import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import enTranslations from "./langs/en";
import bgTranslations from "./langs/bg";
import type { Translations } from "./langs/en";

export type TranslationArgs = any[];
type TranslationFn = (key: keyof Translations, ...args: TranslationArgs) => string;

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
    const value = translations[key] ?? key;
    return args.reduce((acc, arg) => acc.replace("%s", arg), value);
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