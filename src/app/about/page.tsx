"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

import WhoWeAre from "@/components/AboutUsPage/WhoAreWe";
import Stats from "@/components/AboutUsPage/Stats";
import Certifications from "@/components/AboutUsPage/Certifications";
import Timeline from "@/components/AboutUsPage/Timeline";

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      <Reveal as="section" delayMs={50}>
        <WhoWeAre />
      </Reveal>

      <Reveal as="section" delayMs={50}>
        <Stats />
      </Reveal>

      <Reveal as="section" delayMs={50}>
        <Certifications />
      </Reveal>

	  <Reveal as="section" delayMs={50}>
        <Timeline />
      </Reveal>

      <Reveal as="section" delayMs={50}>
        <Footer />
      </Reveal>
    </main>
  );
}