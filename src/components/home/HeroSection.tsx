"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

const stats = [
  { value: "#1", label: "Gynaec Recommended" },
  { value: "2K+", label: "Blessed Beginnings" },
  { value: "100%", label: "Trusted Care" },
];

// Brand palette (Maatratva official)
const C = {
  burgundy:    "#6E1A34",   // Primary Burgundy — CTA buttons, top strip
  rose:        "#A54860",   // Primary Rose — "Mother," "Baby." headline words, tagline, stats
  gold:        "#C9A04D",   // Champagne Gold — ornament dots, divider, rings
  ivory:       "#FDF6F3",   // Warm Ivory — main background
  blush:       "#FCEFED",   // Soft Blush — section / blob accents
  deepText:    "#20100E",   // Deep Brown-Black — body copy, "Nurturing" / "Growing" words
  softBorder:  "#E8C6C6",   // Soft Dusty Rose — card borders, section divider
  mutedText:   "#B47C6B",   // Warm Muted Gold-Rose — subtle text, scroll label
};

export default function HeroSection() {
  const whatsappUrl = `https://wa.me/918815182545?text=${encodeURIComponent(
    "Hello Ma'am, I came across Maatratva and would like to know more about your pregnancy care and guidance programs. I'm interested in understanding how Maatratva can support me through my journey. Could you please guide me?"
  )}`;

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: C.ivory }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large organic blob — top right */}
        <motion.div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-[60%_40%_70%_30%/50%_60%_40%_50%] opacity-30"
          style={{ background: `linear-gradient(135deg, ${C.blush} 0%, ${C.rose}20 100%)` }}
          animate={{
            borderRadius: [
              "60% 40% 70% 30% / 50% 60% 40% 50%",
              "40% 60% 30% 70% / 60% 40% 60% 40%",
              "60% 40% 70% 30% / 50% 60% 40% 50%",
            ],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Small blob — bottom left */}
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-[40%_60%_30%_70%/60%_40%_60%_40%] opacity-20"
          style={{ background: `linear-gradient(135deg, ${C.gold}30 0%, ${C.blush} 100%)` }}
          animate={{
            borderRadius: [
              "40% 60% 30% 70% / 60% 40% 60% 40%",
              "60% 40% 70% 30% / 40% 60% 40% 60%",
              "40% 60% 30% 70% / 60% 40% 60% 40%",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Decorative circle rings */}
        <div
          className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[520px] h-[520px] rounded-full border opacity-10 hidden xl:block"
          style={{ borderColor: C.rose }}
        />
        <div
          className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[420px] h-[420px] rounded-full border opacity-8 hidden xl:block"
          style={{ borderColor: C.gold }}
        />
        {/* Gold ornament dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              background: C.gold,
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
              style={{
                background: `${C.rose}12`,
                border: `1px solid ${C.softBorder}`,
              }}
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} fill={C.gold} color={C.gold} />
                ))}
              </div>
              <span className="font-body text-xs font-medium tracking-wide" style={{ color: C.rose }}>
                Holistic Pregnancy Journey • Trusted by Mothers
              </span>
            </motion.div>

            {/* Headline — "Nurturing Mother, / Growing Baby." */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="font-display text-6xl md:text-7xl xl:text-8xl font-semibold leading-[1.05] tracking-[-0.03em] mb-6"
            >
              <span style={{ color: C.deepText }}>Nurturing </span><span style={{ color: C.rose }}>Mother,</span>
              <br />
              <span style={{ color: C.deepText }}>Growing </span><span style={{ color: C.rose }}>Baby</span>
            </motion.h1>

            {/* Gold divider ornament */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="h-px w-12" style={{ background: `linear-gradient(90deg, transparent, ${C.gold})` }} />
              <span style={{ color: C.gold, fontSize: "1rem" }}>♥</span>
              <div className="h-px w-12" style={{ background: `linear-gradient(90deg, ${C.gold}, transparent)` }} />
            </motion.div>

            {/* Sub-tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
              className="font-display text-xl md:text-2xl font-light italic mb-5"
              style={{ color: C.rose }}
            >
              A journey of care, connection and growth.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
              className="font-body text-base md:text-lg leading-relaxed max-w-lg mb-10"
              style={{ color: C.deepText }}
            >
              A holistic pregnancy journey blending emotional wellbeing, prenatal yoga, Garbh Sanskar,
              baby bonding, nutrition and modern scientific guidance from planning to motherhood and beyond.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.44 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 text-base px-8 py-4 rounded-full font-medium tracking-wide text-white transition-all duration-300 group"
                style={{
                  backgroundColor: C.burgundy,
                  boxShadow: `0 4px 20px ${C.burgundy}40`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#5A1529";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = C.burgundy;
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                Explore Program
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-base px-8 py-4 rounded-full font-medium tracking-wide transition-all duration-300"
                style={{
                  background: "transparent",
                  color: C.burgundy,
                  border: `1.5px solid ${C.burgundy}`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = C.blush;
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                Book Your Free Session
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.56 }}
              className="flex flex-wrap gap-x-10 gap-y-4 mt-14 pt-10 border-t"
              style={{ borderColor: C.softBorder }}
            >
              {stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span
                    className="font-display text-3xl md:text-4xl font-bold leading-none"
                    style={{ color: C.burgundy }}
                  >
                    {value}
                  </span>
                  <span className="font-body text-xs tracking-wide" style={{ color: C.deepText }}>
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
              className="relative w-[420px] h-[520px] rounded-[48px] overflow-hidden"
              style={{
                border: `1px solid ${C.softBorder}`,
                boxShadow: `0 32px 80px ${C.rose}30`,
              }}
            >
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
                style={{ background: `linear-gradient(to top, ${C.deepText}38 0%, transparent 100%)` }}
              />
            </div>

            {/* Floating card 1 — bottom left */}
            <motion.div
              className="absolute -left-8 bottom-16 card-soft px-5 py-4 max-w-[200px]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ borderColor: C.softBorder }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: C.blush }}
                >
                  <span className="text-sm">🌿</span>
                </div>
                <span className="font-display text-sm font-semibold" style={{ color: C.deepText }}>
                  Holistic Care
                </span>
              </div>
              <p className="font-body text-xs leading-relaxed" style={{ color: C.deepText }}>
                Ancient wisdom meets modern science
              </p>
            </motion.div>

            {/* Floating card 2 — top right */}
            <motion.div
              className="absolute -right-6 top-16 card-soft px-5 py-4"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              style={{ borderColor: C.softBorder }}
            >
              <div className="text-2xl mb-1">✨</div>
              <p className="font-display text-sm font-semibold" style={{ color: C.deepText }}>
                Garbh Sanskar
              </p>
              <p className="font-body text-xs mt-1" style={{ color: C.mutedText }}>
                Baby mind programming
              </p>
            </motion.div>

            {/* Gold accent ring */}
            <div
              className="absolute inset-0 w-[440px] h-[540px] rounded-[50px] pointer-events-none"
              style={{ border: `1px dashed ${C.gold}50`, margin: "-10px" }}
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
        <span className="font-body text-xs tracking-widest uppercase" style={{ color: C.mutedText }}>
          Scroll
        </span>
        <motion.div
          className="w-px h-8"
          style={{ background: `linear-gradient(to bottom, ${C.rose}, transparent)` }}
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
