"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Star } from "lucide-react";

const stats = [
  { value: "#1", label: "Gynaec Recommended" },
  { value: "2K+", label: "Blessed Beginnings" },
  { value: "100%", label: "Trusted Care" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FAF7F4]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large organic blob - top right */}
        <motion.div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-[60%_40%_70%_30%/50%_60%_40%_50%] opacity-30"
          style={{ background: "linear-gradient(135deg, #E9D8D3 0%, #A15C7A20 100%)" }}
          animate={{
            borderRadius: [
              "60% 40% 70% 30% / 50% 60% 40% 50%",
              "40% 60% 30% 70% / 60% 40% 60% 40%",
              "60% 40% 70% 30% / 50% 60% 40% 50%",
            ],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Small blob - bottom left */}
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-[40%_60%_30%_70%/60%_40%_60%_40%] opacity-20"
          style={{ background: "linear-gradient(135deg, #D4AF3730 0%, #E9D8D3 100%)" }}
          animate={{
            borderRadius: [
              "40% 60% 30% 70% / 60% 40% 60% 40%",
              "60% 40% 70% 30% / 40% 60% 40% 60%",
              "40% 60% 30% 70% / 60% 40% 60% 40%",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Decorative circle ring */}
        <div
          className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[520px] h-[520px] rounded-full border opacity-10 hidden xl:block"
          style={{ borderColor: "#A15C7A" }}
        />
        <div
          className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[420px] h-[420px] rounded-full border opacity-8 hidden xl:block"
          style={{ borderColor: "#D4AF37" }}
        />
        {/* Gold ornament dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              background: "#D4AF37",
              opacity: 0.4,
              top: `${20 + i * 12}%`,
              right: `${8 + (i % 3) * 4}%`,
            }}
            animate={{ y: [0, -8, 0], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          />
        ))}
      </div>

      <div className="container-wide relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
              style={{ background: "rgba(161,92,122,0.08)", border: "1px solid rgba(161,92,122,0.2)" }}
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} fill="#D4AF37" color="#D4AF37" />
                ))}
              </div>
              <span className="font-body text-xs font-medium tracking-wide" style={{ color: "#A15C7A" }}>
                Trusted by Mothers Across the World
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="font-display text-6xl md:text-7xl xl:text-8xl font-semibold leading-[1.05] tracking-[-0.03em] mb-6"
              style={{ color: "#4B3B3B" }}
            >
              From{" "}
              <span style={{ color: "#A15C7A" }}>
                Womb
              </span>
              <br />
              to Wonder
            </motion.h1>

            {/* Sub-tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
              className="font-display text-xl md:text-2xl font-light italic mb-5"
              style={{ color: "#A15C7A" }}
            >
              A journey of care, connection and growth.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
              className="font-body text-base md:text-lg leading-relaxed max-w-lg mb-10"
              style={{ color: "#7C6A6A" }}
            >
              Pregnancy care integrating physical and emotional wellness, Garbh Sanskar, Ayurveda and modern scientific guidance — from planning to pregnancy and beyond.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.44 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact" className="btn-primary text-base px-8 py-4 group">
                Begin Your Journey
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link href="/contact?type=call" className="btn-secondary text-base px-8 py-4 group">
                <span className="flex items-center justify-center gap-2">
                  <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(161,92,122,0.1)" }}>
                    <Play size={10} fill="#A15C7A" color="#A15C7A" className="ml-0.5" />
                  </span>
                  Schedule Your Free Call
                </span>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.56 }}
              className="flex flex-wrap gap-x-10 gap-y-4 mt-14 pt-10 border-t"
              style={{ borderColor: "rgba(233,216,211,0.6)" }}
            >
              {stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="font-display text-3xl md:text-4xl font-bold leading-none" style={{ color: "#A15C7A" }}>
                    {value}
                  </span>
                  <span className="font-body text-xs tracking-wide" style={{ color: "#7C6A6A" }}>
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative hidden lg:flex justify-center items-center"
          >
            {/* Main image container */}
            <div
              className="relative w-[420px] h-[520px] rounded-[48px] overflow-hidden shadow-[0_32px_80px_rgba(161,92,122,0.25)]"
              style={{ border: "1px solid rgba(233,216,211,0.4)" }}
            >
              {/* Hero image */}
              <Image
                src="/hero-section.jpeg"
                alt="Maatratva — Holistic Pregnancy Wellness"
                fill
                sizes="420px"
                className="object-cover object-center"
                priority
              />

              {/* Soft overlay gradient at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(75,59,59,0.35) 0%, transparent 100%)" }}
              />
            </div>

            {/* Floating card 1 — bottom left */}
            <motion.div
              className="absolute -left-8 bottom-16 card-soft px-5 py-4 max-w-[200px]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#E9D8D3" }}>
                  <span className="text-sm">🌿</span>
                </div>
                <span className="font-display text-sm font-semibold" style={{ color: "#4B3B3B" }}>Holistic Care</span>
              </div>
              <p className="font-body text-xs leading-relaxed" style={{ color: "#7C6A6A" }}>
                Ancient wisdom meets modern science
              </p>
            </motion.div>

            {/* Floating card 2 — top right */}
            <motion.div
              className="absolute -right-6 top-16 card-soft px-5 py-4"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
              <div className="text-2xl mb-1">✨</div>
              <p className="font-display text-sm font-semibold" style={{ color: "#4B3B3B" }}>Garbh Sanskar</p>
              <p className="font-body text-xs mt-1" style={{ color: "#7C6A6A" }}>Baby mind programming</p>
            </motion.div>

            {/* Gold accent ring */}
            <div
              className="absolute inset-0 w-[440px] h-[540px] rounded-[50px] pointer-events-none"
              style={{ border: "1px dashed rgba(212,175,55,0.3)", margin: "-10px" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs tracking-widest uppercase" style={{ color: "#A89090" }}>
          Scroll
        </span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-[#A15C7A] to-transparent"
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
