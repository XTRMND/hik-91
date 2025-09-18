"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from '@/components/context/i18n-context';

export default function Footer() {
  const {t} = useTranslation();
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-9">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_2fr] gap-8">


          <div className="flex flex-col items-start">
            <Image
              src="/hick-logo-2.png"
              alt="HIK-91 Logo"
              width={200}
              height={40}
              className="mb-6"
            />
          </div>

          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold mb-6 text-[#27a0e3]">{t('quickLinks')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#27a0e3] transition-colors">
                  {t('aboutUs')}
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-[#27a0e3] transition-colors">
                  {t('news')}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-[#27a0e3] transition-colors">
                {t('products')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#27a0e3] transition-colors">
                {t('contacts')}
                </Link>
              </li>
              <li>
                <Link href="https://agropoint.bg/" className="text-gray-300 hover:text-[#27a0e3] transition-colors">
                {t('shop')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <h3 className="text-xl font-bold mb-2 text-[#27a0e3] md:col-span-2">{t('contacts')}</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-[#27a0e3] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-semibold">{t('email')}</p>
                    <a
                      href="mailto:office@hik91.bg"
                      className="text-gray-300 hover:text-[#27a0e3] transition-colors"
                    >
                      office@hik91.bg
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#27a0e3] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-semibold">{t('address')}</p>
                    <p className="text-gray-300">{t('ourAddress')}</p>
                  </div>
                </div>
              </div>


              <div className="flex items-start">
                <Phone className="w-5 h-5 text-[#27a0e3] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-semibold">{t('phone')}</p>
                  <div className="space-y-1">
                    <a href="tel:+35932632369" className="block text-gray-300 hover:text-[#27a0e3]">+359 32 63 23 69</a>
                    <a href="tel:+359896667410" className="block text-gray-300 hover:text-[#27a0e3]">+359 896 66 74 10</a>
                    <a href="tel:+359896667411" className="block text-gray-300 hover:text-[#27a0e3]">+359 896 66 74 11</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>


		<div className="relative mt-12">
			<div className="h-px bg-gray-700 w-screen ml-[calc(50%-50vw)]" />
				<div className="container mx-auto px-4 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-gray-400 text-sm">
              {t('ourRights')}
						</p>
					</div>
				</div>
			</div>
      </div>
    </footer>
  );
}
