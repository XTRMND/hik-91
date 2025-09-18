"use client";

export default function VideoSection() {
  return (
    <section className="relative w-full bg-black py-12">
      <div className="w-full max-w-I 8xl mx-auto border-white  shadow-[0_8px_40px_rgba(255,255,255,0.4)] overflow-hidden">
        <video
          src="/11-1.mp4"
          controls
          autoPlay
          muted
          loop
          className="w-full h-[900px] object-cover"
        />
      </div>
    </section>
  );
}

