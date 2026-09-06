"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/ui/motion";
import SectionLabel from "@/components/ui/SectionLabel";

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

// duplicate for seamless loop
const allImages = [...workshopImages, ...workshopImages];

export default function WorkshopPreviewSection() {
  return (
    <section className="section-padding overflow-hidden" style={{ background: "#F4EBE8" }}>
      <div className="container-wide">
        <FadeUp className="mx-auto mb-12 max-w-2xl text-center">
          <SectionLabel centered>Our Community</SectionLabel>
          <h2
            className="mb-4 font-display text-5xl font-semibold"
            style={{ color: "#4B3B3B" }}
          >
            Moments From Our{" "}
            <span style={{ color: "#6E1A34" }}>Workshops</span>
          </h2>
          <p
            className="font-body text-lg leading-relaxed"
            style={{ color: "#7C6A6A" }}
          >
            A glimpse into the nurturing, joyful and transformative experiences
            shared by our Maatratva family.
          </p>
        </FadeUp>
      </div>

      {/* Infinite scroll carousel — full bleed */}
      <div
        className="overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div
          className="workshop-home-scroll flex gap-5"
          style={{ width: "max-content" }}
        >
          {allImages.map((image, index) => (
            <div
              key={index}
              className="relative shrink-0 overflow-hidden rounded-[20px]"
              style={{
                height: "380px",
                width: "auto",
                minWidth: "260px",
                maxWidth: "460px",
                boxShadow: "0 8px 32px rgba(110,26,52,0.13)",
                background: "#FAF7F4",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-auto object-contain"
                style={{ display: "block" }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .workshop-home-scroll {
          animation: workshop-home-marquee 35s linear infinite;
        }
        .workshop-home-scroll:hover {
          animation-play-state: paused;
        }
        @keyframes workshop-home-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* CTA */}
      <div className="container-wide mt-10 text-center">
        <FadeUp>
          <Link
            href="/programs"
            className="btn-primary group inline-flex items-center gap-2"
          >
            View All Programs
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
