"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRef } from "react";

const workshopImages = [
  { src: "/workshops/workshop-1.jpg", alt: "Maatratva workshop session" },
  { src: "/workshops/workshop-2.jpg", alt: "Mothers participating in a Maatratva workshop" },
  { src: "/workshops/workshop-3.jpg", alt: "Maatratva wellness workshop" },
  { src: "/workshops/workshop-4.jpg", alt: "Maatratva community workshop" },
  { src: "/workshops/workshop-5.jpg", alt: "Maatratva workshop activity" },
  { src: "/workshops/workshop-6.jpg", alt: "Maatratva group session" },
  { src: "/workshops/workshop-7.jpg", alt: "Maatratva prenatal workshop" },
  { src: "/workshops/workshop-8.jpg", alt: "Maatratva wellness gathering" },
  { src: "/workshops/workshop-9.jpg", alt: "Maatratva community moment" },
];

// Duplicate for seamless infinite loop
const allImages = [...workshopImages, ...workshopImages];

export default function WorkshopsPage() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen bg-[#FAF7F4] pt-28">
      <section className="section-padding">
        <div className="container-wide">
          <Link
            href="/programs"
            className="mb-10 inline-flex items-center gap-2 font-body text-sm font-semibold text-[#A15C7A]"
          >
            <ArrowLeft size={16} />
            Back to Programs
          </Link>

          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.18em] text-[#A15C7A]">
              Our Community
            </p>
            <h1 className="font-display text-5xl font-semibold leading-tight text-[#4B3B3B] md:text-6xl">
              Moments From Our{" "}
              <span className="text-[#A15C7A]">Workshops</span>
            </h1>
            <p className="mt-5 font-body text-lg leading-relaxed text-[#7C6A6A]">
              A glimpse into the nurturing, joyful and transformative
              experiences shared by our Maatratva community.
            </p>
          </div>
        </div>

        {/* ── INFINITE SCROLL CAROUSEL ── */}
        <div className="overflow-hidden" style={{ WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
          <div
            ref={trackRef}
            className="flex gap-5 workshop-scroll"
            style={{ width: "max-content" }}
          >
            {allImages.map((image, index) => (
              <div
                key={index}
                className="relative shrink-0 overflow-hidden rounded-[20px]"
                style={{
                  height: "420px",
                  width: "auto",
                  minWidth: "280px",
                  maxWidth: "480px",
                  boxShadow: "0 8px 32px rgba(161,92,122,0.15)",
                  background: "#F4EBE8",
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={480}
                  height={420}
                  className="h-full w-auto object-contain"
                  style={{ display: "block" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Animation keyframes */}
        <style>{`
          .workshop-scroll {
            animation: workshop-marquee 35s linear infinite;
          }
          .workshop-scroll:hover {
            animation-play-state: paused;
          }
          @keyframes workshop-marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>
    </main>
  );
}
