"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import NewsHero from "@/components/Newspage/NewsHero";
import Announcements from "@/components/Newspage/Announcements";

export default function NewsPage() {
	return (
				<main className="bg-black">
					<Navbar />
					<Reveal as="section" delayMs={50}>
						<NewsHero/>
					</Reveal>
					<Reveal as="section" delayMs={50}>
						<Announcements />
					</Reveal>
					<Reveal as="section" delayMs={50}>
						<Footer />
					</Reveal>
				</main>
	);
}
