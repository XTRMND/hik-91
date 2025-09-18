'use client'
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTranslation } from '@/components/context/i18n-context';

export default function Testimonials() {
	const {t} =useTranslation();

	const testimonialsContent = {
		items: [
		  {
			content: t('testimonial1_content'),
			author: t('testimonial1_author'),
			role: t('testimonial1_role'),
			image: "/testimonials/pic1.png",
			background: "/testimonials/bg1.png",
			stars: 5,
		  },
		  {
			content: t('testimonial2_content'),
			author: t('testimonial2_author'),
			role: t('testimonial2_role'),
			image: "/testimonials/pic2.png",
			background: "/testimonials/bg2.png",
			stars: 5,
		  },
		  {
			content: t('testimonial3_content'),
			author: t('testimonial3_author'),
			role: t('testimonial3_role'),
			image: "/testimonials/pic3.png",
			background: "/testimonials/bg3.png",
			stars: 4,
		  },
		  {
			content: t('testimonial4_content'),
			author: t('testimonial4_author'),
			role: t('testimonial4_role'),
			image: "/testimonials/pic4.png",
			background: "/testimonials/bg4.png",
			stars: 5,
		  },
		  {
			content: t('testimonial5_content'),
			author: t('testimonial5_author'),
			role: t('testimonial5_role'),
			image: "/testimonials/pic5.png",
			background: "/testimonials/bg5.png",
			stars: 4,
		  },
		],
	  };

	const testimonials = testimonialsContent;

	return (
		<section className="py-16 bg-black">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-bold text-center mb-4 text-white">{t('testimonialsHeader')}</h2>
				<div className="w-40 h-0.5 bg-[#2598d7] mx-auto mb-5 rounded"></div>
				<p className="text-center text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
					{t('testimonialsSubHeader')}
				</p>
				<Swiper
					modules={[Navigation, Pagination, Autoplay]}
					spaceBetween={5}
					navigation
					pagination={{ clickable: true }}
					autoplay={{ delay: 3500, disableOnInteraction: false }}
					breakpoints={{
						320: { slidesPerView: 1 },
						640: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
						1280: { slidesPerView: 4 },
					}}
					className="pb-8"
				>
					{testimonials.items.map((testimonial, idx) => (
						<SwiperSlide key={idx}>
							<div className="relative flex flex-col justify-between items-center h-[390px] max-w-[290px] mx-auto rounded-2xl shadow-xl bg-[#1e2839] border-[#27a0e3] border-1 pb-4 mb-15">

								<div className="w-full h-[160px] relative">
									{testimonial.background && (
										<Image src={testimonial.background} alt="background" fill className="object-cover w-full h-full rounded-t-2xl" />
									)}

									<div className="absolute left-1/2 -bottom-10 -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden bg-[#1e2839] z-10">
										<Image src={testimonial.image} alt={testimonial.author} fill className="object-cover" />
									</div>
								</div>

								<div className="flex flex-col items-center justify-between flex-1 w-full pt-14 pb-8 px-4 rounded-b-2xl">
									<h4 className="font-bold text-lg text-white text-center">{testimonial.author}</h4>
									<div className="text-[#27a0e3] text-xs mb-2 text-center">{testimonial.role}</div>
									<p className="text-gray-300 text-base mb-4 text-center max-w-[95%] mx-auto break-words whitespace-pre-line flex-1">
										{testimonial.content}
									</p>

									<div className="flex justify-center gap-1 mt-auto mb-2">
										{Array.from({ length: testimonial.stars }).map((_, i) => (
											<svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
										))}
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className="border-t border-gray-700 mt-12"></div>
		</section>
	);
}
 