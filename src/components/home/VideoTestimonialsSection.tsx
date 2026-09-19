"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, X } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const videoTestimonials = [
  {
    id: "PUqIxnrKxGc",
    name: "Amisha Chandak",
    location: "Indore, India",
    label: "Mother Story",
  },
  {
    id: "OCLb23Co8BI",
    name: "Palak Mahajan",
    location: "Khargon, India",
    label: "Mother Story",
  },
  {
    id: "P7-iCMfOOCk",
    name: "Shraddha Surendra",
    location: "Dubai, UAE",
    label: "Mother Story",
  },
];

export default function VideoTestimonialsSection() {
  const [playing, setPlaying] = useState<typeof videoTestimonials[0] | null>(null);

  return (
    <>
    <section className="section-padding relative overflow-hidden" style={{ background: "#FDF6F3" }}>
      {/* Soft bg decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(100,34,68,0.12) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(201,160,77,0.1) 0%, transparent 70%)" }}
        />
      </div>

      <div className="container-wide relative z-10">
        {/* Heading */}
        <FadeUp className="text-center mb-14">
          <SectionLabel centered>Real Journeys</SectionLabel>
          <h2
            className="font-display text-5xl md:text-6xl font-semibold leading-[1.1] mt-4 mb-5"
            style={{ color: "#20100E" }}
          >
            Mothers Who{" "}
            <span style={{ color: "#642244" }}>Transformed</span>
          </h2>
          <p
            className="font-display text-xl font-light italic"
            style={{ color: "#A54860" }}
          >
            Hear it in their own words.
          </p>
        </FadeUp>

        {/* Video cards */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-7 max-w-4xl mx-auto">
          {videoTestimonials.map((v) => (
            <StaggerItem key={v.id}>
              <motion.button
                type="button"
                onClick={() => setPlaying(v)}
                className="group w-full flex flex-col overflow-hidden rounded-[24px] cursor-pointer"
                style={{
                  background: "white",
                  border: "1px solid #E8C6C6",
                  boxShadow: "0 8px 40px rgba(100,34,68,0.10)",
                }}
                whileHover={{ y: -6, boxShadow: "0 16px 50px rgba(100,34,68,0.18)" }}
                transition={{ duration: 0.25 }}
                aria-label={`Play ${v.name}'s testimonial`}
              >
                {/* Video Thumbnail */}
                <div className="relative overflow-hidden bg-[#2D1F2B]" style={{ aspectRatio: "9/16" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                    alt={`${v.name} testimonial`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div
                    className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-80"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(30,15,20,0.85) 0%, rgba(30,15,20,0.15) 70%, transparent 100%)",
                    }}
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: "rgba(255,255,255,0.16)",
                        backdropFilter: "blur(12px)",
                        border: "1.5px solid rgba(255,255,255,0.45)",
                      }}
                    >
                      <Play size={22} fill="white" color="white" className="ml-1" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="px-5 py-4 text-left">
                  {/* Label pill */}
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full mb-3"
                    style={{
                      background: "rgba(100,34,68,0.08)",
                      color: "#642244",
                      border: "1px solid rgba(100,34,68,0.15)",
                    }}
                  >
                    <Play size={10} fill="#642244" />
                    {v.label}
                  </span>
                  <p className="font-display text-xl font-semibold leading-tight" style={{ color: "#20100E" }}>
                    {v.name}
                  </p>
                  <p className="font-body text-xs mt-1" style={{ color: "#B47C6B" }}>
                    {v.location}
                  </p>
                </div>
              </motion.button>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeUp className="mt-12 text-center">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 rounded-full font-body text-sm font-semibold px-8 py-3.5 text-white transition-all duration-300 group"
            style={{
              backgroundColor: "#642244",
              boxShadow: "0 4px 20px rgba(100,34,68,0.30)",
            }}
          >
            Explore All Mother Stories
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </FadeUp>
      </div>
    </section>

    {/* ── VIDEO MODAL ── */}
    <AnimatePresence>
      {playing && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100]"
            style={{
              background: "rgba(30,15,20,0.85)",
              backdropFilter: "blur(8px)",
            }}
            onClick={() => setPlaying(null)}
          />

          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 30 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-1/2 z-[101] mx-auto max-w-md -translate-y-1/2 sm:inset-x-8"
          >
            {/* Close Button - Better positioned for mobile */}
            <button
              type="button"
              onClick={() => setPlaying(null)}
              className="absolute -top-14 right-0 z-10 flex h-12 w-12 items-center justify-center rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
              style={{
                background: "rgba(255,255,255,0.9)",
                color: "#2D1F2B",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
              aria-label="Close video"
            >
              <X size={24} strokeWidth={2.5} />
            </button>

            <div
              className="relative overflow-hidden rounded-[20px] shadow-2xl"
              style={{ aspectRatio: "9/16" }}
            >
              {/* Additional close button inside video area for better mobile UX */}
              <button
                type="button"
                onClick={() => setPlaying(null)}
                className="absolute right-2 top-2 z-20 flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200 hover:scale-110 active:scale-95 md:hidden"
                style={{
                  background: "rgba(0,0,0,0.6)",
                  color: "white",
                }}
                aria-label="Close video"
              >
                <X size={16} strokeWidth={2.5} />
              </button>

              <iframe
                src={`https://www.youtube.com/embed/${playing.id}?autoplay=1&rel=0`}
                title={`${playing.name} — Maatratva testimonial`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>

            <div className="mt-4 text-center">
              <p className="font-display text-xl font-semibold text-white">
                {playing.name}
              </p>
              <p className="font-body text-sm text-white/80 mt-1">
                {playing.location}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
}
