"use client";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useTranslation } from '@/components/context/i18n-context';

export default function Hero() {
	const { t } = useTranslation();
	return (
		<section className="relative min-h-screen bg-black flex items-center">

			<div className="absolute top-0 left-0 w-full z-20">
				<Navbar />
			</div>

			<div className="absolute inset-0 z-0">
				<Image
					src="/hero-image-2.JPG.jpg"
					alt="HIK-91 Production"
					fill
					className="object-cover opacity-30"
					priority
				/>
			</div>

			<div className="absolute inset-x-0 bottom-0 h-32 md:h-30 z-10 bg-gradient-to-b from-transparent via-black/70 to-black" />


			<div className="relative z-10 container mx-auto px-4">
				<div className="max-w-4xl mx-auto text-center">

					<div className="mb-8 animate-[slide-up_700ms_ease-out_150ms_backwards]">
						<Image
							src="/hick-logo.png"
							alt="HIK-91 Logo"
							width={300}
							height={100}
							className="mx-auto mb-6"
							priority
						/>
					</div>

	
					<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-[slide-up_700ms_ease-out_250ms_backwards]">
						{t('homePageHeader')}
					</h1>

					<p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-[slide-up_700ms_ease-out_350ms_backwards]">
						{t('homePageDescription')}
					</p>


					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-[slide-up_700ms_ease-out_450ms_backwards]">
						<Link
							href="/contact"
							className="bg-[#27a0e3] border-2 border-white text-white hover:bg:white hover:text-black font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300"
						>
							{t('contactUs')}
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
