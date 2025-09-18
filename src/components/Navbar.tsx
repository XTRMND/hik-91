'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Translations } from './context/langs/en';
import { useTranslation, locales } from './context/i18n-context';

const mainNav: { title: keyof Translations; href: string }[] = [
  { title: "aboutUs", href: "/about" },
  { title: "news", href: "/news" },
  { title: "products", href: "/products" },
  { title: "contacts", href: "/contact" },
];

const userNav: { title: keyof Translations; href: string; icon: keyof typeof userIconComponents }[] = [
  { title: "shop", href: "https://agropoint.bg/", icon: "ShoppingBag" },
];

const userIconComponents: Record<string, LucideIcon> = { ShoppingBag };


export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, locale, setLocale } = useTranslation();

  return (
    <>
      <header className="relative z-30 bg-transparent">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
            <Image src="/logo.png" alt="HIK-91 Logo" height={40} width={120} className="h-10 w-auto"/>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex h-full items-center justify-center flex-grow">
            <ul className="flex h-full space-x-8">
              {mainNav.map(item => (
                <li key={item.title} className="flex items-center h-full relative group">
                  <Link
                    href={item.href}
                    className="flex items-center h-full text-white hover:text-[#27a0e3] transition-colors"
                  >
                    {t(item.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: userNav + lang */}
          <div className="flex items-center space-x-4">
            {userNav.map(item => {
              const Icon = item.icon ? userIconComponents[item.icon] : null;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="hidden lg:flex text-white items-center hover:text-[#27a0e3] transition-colors relative"
                >
                  {Icon && <Icon className="h-6 w-6 mr-1"/>}
                  {t(item.title)}
                </Link>
              );
            })}

            {/* Language buttons */}
            {locales.map(l => (
              <button
                key={l.key}
                className={locale.key === l.key ? 'bg-[#27a1e3] text-white px-2 py-1 rounded' : 'text-white px-2 py-1'}
                onClick={() => setLocale(l)}
              >
                {l.label}
              </button>
            ))}

            {/* Mobile menu toggle */}
            <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu className="h-6 w-6"/>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-transparent transition-opacity duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-transparent shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          onClick={e => e.stopPropagation()}
        >
          <div className="p-4">
            <button className="text-white absolute top-4 right-4" onClick={() => setIsMobileMenuOpen(false)}>
              <X className="h-6 w-6"/>
            </button>

            <ul className="space-y-2 mt-8">
              {mainNav.map(item => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-sm text-white hover:text-[#27a0e3] hover:bg-transparent"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(item.title)}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="py-4 border-t border-gray-700">
              {userNav.map(item => {
                const Icon = item.icon ? userIconComponents[item.icon] : null;
                return (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-sm text-white hover:text-[#27a0e3] hover:bg-transparent flex items-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {Icon && <Icon className="h-5 w-5 mr-2"/>}
                      {t(item.title as keyof typeof t)}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile language */}
            <div className="flex gap-2 mt-4">
              {locales.map(l => (
                <button
                  key={l.key}
                  className={locale.key === l.key ? 'bg-[#27a1e3] text-white px-2 py-1 rounded' : 'text-white px-2 py-1'}
                  onClick={() => setLocale(l)}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}