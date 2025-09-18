"use client";
import Hero from "@/components/HomePage/Hero";
import Footer from "@/components/Footer";
import BestSellingProducts from "@/components/HomePage/OurProducts";
import Reveal from "@/components/Reveal";
import Video from "@/components/HomePage/VIdeo";
import Testimonials from "@/components/HomePage/Testimonials";

export default function Home() {
	return (
		<main className="bg-black">
			<Hero />
			<Reveal as="section" delayMs={50}>
				<BestSellingProducts />
			</Reveal>
			<Reveal as="section" delayMs={50}>
        	<Video/>
      		</Reveal>
			  <Reveal as="section" delayMs={50}>
        	<Testimonials/>
      		</Reveal>
			<Reveal as="section" delayMs={50}>
				<Footer />
			</Reveal>
		</main>
	);
}
