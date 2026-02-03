'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '@/components/context/i18n-context';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ExternalLink } from 'lucide-react';


export interface Product {
	id: number;
	name: string;
	description: string;
	image: string;
	images?: string[];
	category: string;
	features: string[];
	applications?: string[];
	longDescription?: string;
	specs?: { label: string; value: string }[];
	contentHtml?: string;
}

export default function BestSellingProducts() {
	const { t } = useTranslation();

	const products: Product[] = [
		{
			id: 1,
			name: t('product1_name'),
			description: t('product1_description'),
			image: "/cta1.png",
			images: ["/cta1.png", "/cta2.png", "/cta3.png"],
			category: t('product1_category'),
			features: t('product1_features').split(', '),
			applications: t('product1_applications').split(', '),
		},
		{
			id: 2,
			name: t('product2_name'),
			description: t('product2_description'),
			image: "/cta2.png",
			images: ["/cta2.png", "/cta1.png", "/cta4.png"],
			category: t('product2_category'),
			features: t('product2_features').split(', '),
			applications: t('product2_applications').split(', '),
		},
		{
			id: 3,
			name: t('product3_name'),
			description: t('product3_description'),
			image: "/cta3.png",
			images: ["/cta3.png", "/cta2.png"],
			category: t('product3_category'),
			features: t('product3_features').split(', '),
			applications: t('product3_applications').split(', '),
		},
		{
			id: 4,
			name: t('product4_name'),
			description: t('product4_description'),
			image: "/cta4.png",
			images: ["/cta4.png", "/cta1.png"],
			category: t('product4_category'),
			features: t('product4_features').split(', '),
			applications: t('product4_applications').split(', '),
		},
		{
			id: 5,
			name: t('product5_name'),
			description: t('product5_description'),
			image: "/cta1.png",
			images: ["/cta1.png", "/cta2.png"],
			category: t('product5_category'),
			features: t('product5_features').split(', '),
			applications: t('product5_applications').split(', '),
		},
		{
			id: 6,
			name: t('product6_name'),
			description: t('product6_description'),
			image: "/cta2.png",
			images: ["/cta2.png", "/cta3.png"],
			category: t('product6_category'),
			features: t('product6_features').split(', '),
			applications: t('product6_applications').split(', '),
		},
	];

	return (
		<section className="py-20 bg-black">
			<div className="container mx-auto px-4">

				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('ourProducts')}</h2>
					<div className="w-40 h-0.5 bg-[#2598d7] mx-auto mb-5 rounded"></div>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto">
						{t('ourProductsDescription')}
					</p>
				</div>

				<Swiper
					modules={[Navigation, Pagination, Autoplay]}
					spaceBetween={5}
					navigation
					pagination={{ clickable: true }}
					autoplay={{ delay: 5000, disableOnInteraction: false }}
					breakpoints={{
						320: { slidesPerView: 1 },
						640: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
						1280: { slidesPerView: 4 },
					}}
					className="pb-6"
				>
					{products.map((product) => (
						<SwiperSlide key={product.id} >
							<div className="flex flex-col h-[400px] max-w-[290px] mx-auto rounded-2xl shadow-xl bg-[#1e2839] overflow-hidden mb-10 border-[#27a0e3] border-1">
								<div className="w-full h-[220px] relative">
									<Image src={product.image} alt={product.name} fill className="object-cover w-full h-full" />
									<div className="absolute top-4 left-4">
										<span className="bg-[#27a0e3] text-white px-3 py-1 rounded-full text-sm font-semibold">
											{product.category}
										</span>
									</div>
								</div>

								<div className="flex flex-col flex-1 p-5">
									<div>
										<h3 className="text-xl font-bold text-white line-clamp-2 leading-snug min-h-[3.75rem]">
											{product.name}
										</h3>
										<p className="text-gray-300 mt-2 line-clamp-3 min-h-[4.5rem]" suppressHydrationWarning>
											{product.description}
										</p>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				<div className="text-center mt-12">
					<Link
						href="/products"
						className="inline-flex items-center bg-transparent border-2 border-[#27a0e3] text-[#27a0e3] hover:bg-[#27a0e3] hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"
					>
						{t('ourProductsButton')}
						<ExternalLink className="w-5 h-5 ml-2" />
					</Link>
				</div>
			</div>
		</section>
	)
}