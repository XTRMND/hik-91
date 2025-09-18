"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactsHero from "@/components/Contacts/ContactsHero";
import Reveal from "@/components/Reveal";
import ContactInfo from "@/components/Contacts/ContactInfo";
import ContactForm from "@/components/Contacts/ContactForm";
import Map from "@/components/Contacts/Map";

export default function ContactPage() {


	return (
		<main className="bg-black min-h-screen">
			<Navbar />

			<Reveal as="section" delayMs={80}>
				<ContactsHero />
      		</Reveal>

			<Reveal delayMs={100}>
				<section className="py-20">
    				<div className="container mx-auto px-4">
        				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
							<ContactForm />
							<ContactInfo />
						</div>
					</div>
				</section>
      		</Reveal>

			<Reveal as="section" delayMs={80}>
				<Map />
      		</Reveal>

			<Reveal as="section" delayMs={80}>
				<Footer />
      		</Reveal>
		</main>
	);
}
