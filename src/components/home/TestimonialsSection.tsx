"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, ChevronLeft, ChevronRight, Play } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const testimonials = [
  {
    name: "Priya K.",
    location: "Mumbai",
    rating: 5,
    text: "Maatratva transformed my entire pregnancy experience. Dheera&apos;s Garbh Sanskar sessions gave me such a deep connection with my baby. My daughter is now 18 months old and she is so calm, so bright. I credit it all to Maatratva.",
    weeks: "Joined at 8 weeks",
    emoji: "🌸",
    featured: true,
  },
  {
    name: "Ananya R.",
    location: "Delhi",
    rating: 5,
    text: "As an IVF mother, I was terrified through most of my pregnancy. The meditation and NLP sessions helped me release so much fear. I actually started enjoying my pregnancy instead of fearing it every day.",
    weeks: "IVF Mother",
    emoji: "🌺",
    featured: false,
  },
  {
    name: "Megha S.",
    location: "Bangalore",
    rating: 5,
    text: "The nutrition guidance was a game-changer. I had severe morning sickness and the Ayurvedic protocols helped me so much. My baby was born healthy at a perfect weight. I cannot recommend this enough.",
    weeks: "High-risk pregnancy",
    emoji: "💐",
    featured: false,
  },
  {
    name: "Deepika T.",
    location: "Pune",
    rating: 5,
    text: "The community of mothers you build here is something else entirely. You never feel alone. Everyone supports each other. Dheera is not just a teacher — she is a mother to all of us.",
    weeks: "Joined at 12 weeks",
    emoji: "🌷",
    featured: false,
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  const next = () => setActive((p) => (p === testimonials.length - 1 ? 0 : p + 1));

  const featured = testimonials[active];

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #F4EBE8 0%, #FAF7F4 100%)" }}
    >
      {/* BG decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{ background: "#A15C7A" }}
        />
        <div
          className="absolute bottom-0 left-0 w-60 h-60 rounded-full opacity-15 blur-2xl"
          style={{ background: "#D4AF37" }}
        />
      </div>

      <div className="container-wide relative z-10">
        <FadeUp className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel centered>Mother Stories</SectionLabel>
          <h2
            className="font-display text-5xl md:text-6xl font-semibold leading-[1.1] mb-6"
            style={{ color: "#4B3B3B" }}
          >
            Journeys That{" "}
            <span style={{ color: "#A15C7A" }}>
              Inspire
            </span>
          </h2>
          <p className="font-body text-lg leading-relaxed" style={{ color: "#7C6A6A" }}>
            Real mothers, real transformations, real stories of wonder.
          </p>
        </FadeUp>

        {/* Featured testimonial */}
        <div className="max-w-4xl mx-auto mb-14">
          <div
            className="relative rounded-[32px] p-8 md:p-12 overflow-hidden"
            style={{
              background: "white",
              boxShadow: "0 20px 80px rgba(161,92,122,0.12)",
              border: "1px solid rgba(233,216,211,0.6)",
            }}
          >
            {/* Quote mark */}
            <div
              className="absolute top-6 left-8 font-display text-[120px] leading-none select-none pointer-events-none opacity-[0.05]"
              style={{ color: "#A15C7A" }}
            >
              &ldquo;
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(featured.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#D4AF37" color="#D4AF37" />
                  ))}
                </div>

                <p
                  className="font-display text-2xl md:text-3xl font-light italic leading-relaxed mb-8"
                  style={{ color: "#4B3B3B" }}
                  dangerouslySetInnerHTML={{ __html: `&ldquo;${featured.text}&rdquo;` }}
                />

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shrink-0"
                    style={{ background: "rgba(161,92,122,0.1)" }}
                  >
                    {featured.emoji}
                  </div>
                  <div>
                    <p className="font-body font-semibold" style={{ color: "#4B3B3B" }}>
                      {featured.name}
                    </p>
                    <p className="font-body text-sm" style={{ color: "#7C6A6A" }}>
                      {featured.location} · {featured.weeks}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6" style={{ borderTop: "1px solid rgba(233,216,211,0.6)" }}>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === active ? "24px" : "8px",
                      height: "8px",
                      background: i === active ? "#A15C7A" : "rgba(161,92,122,0.2)",
                    }}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: "rgba(161,92,122,0.08)", color: "#A15C7A" }}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: "#A15C7A", color: "white" }}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mini testimonial cards */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {testimonials.map((t, i) => (
            <StaggerItem key={t.name}>
              <motion.button
                className="w-full text-left p-5 rounded-2xl transition-all duration-300"
                style={{
                  background: i === active ? "rgba(161,92,122,0.08)" : "white",
                  border: i === active ? "1px solid rgba(161,92,122,0.25)" : "1px solid rgba(233,216,211,0.6)",
                }}
                onClick={() => setActive(i)}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-lg">{t.emoji}</span>
                  <div>
                    <p className="font-body text-sm font-semibold" style={{ color: "#4B3B3B" }}>
                      {t.name}
                    </p>
                    <p className="font-body text-xs" style={{ color: "#7C6A6A" }}>
                      {t.location}
                    </p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={10} fill="#D4AF37" color="#D4AF37" />
                  ))}
                </div>
              </motion.button>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Video testimonial placeholder */}
        <FadeUp className="max-w-2xl mx-auto mb-12">
          <div
            className="relative rounded-[28px] overflow-hidden aspect-video flex items-center justify-center cursor-pointer group"
            style={{
              background: "linear-gradient(135deg, #4B3B3B 0%, #7D4460 100%)",
              boxShadow: "0 20px 60px rgba(75,59,59,0.25)",
            }}
          >
            {/* Background blur overlay */}
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[#A15C7A] to-[#D4AF37]" />

            <div className="relative z-10 text-center">
              <motion.div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)" }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Play size={28} fill="white" color="white" className="ml-1" />
              </motion.div>
              <p className="font-display text-2xl font-semibold text-white mb-2">
                Watch Their Stories
              </p>
              <p className="font-body text-sm text-white/70">
                Video testimonials from our mothers
              </p>
            </div>
          </div>
        </FadeUp>

        <FadeUp className="text-center">
          <Link href="/stories" className="btn-primary group inline-flex">
            Read More Stories
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
