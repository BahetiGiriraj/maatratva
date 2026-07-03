"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { FadeUp, FadeLeft, FadeRight, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const values = [
  { emoji: "❤️", title: "Deep Compassion", desc: "We meet every mother exactly where she is — without judgment, with complete presence and care." },
  { emoji: "✨", title: "Holistic Excellence", desc: "We integrate the best of ancient wisdom and modern science to deliver genuinely transformative care." },
  { emoji: "🌿", title: "Authentic Wellness", desc: "No shortcuts, no gimmicks. Only genuine, evidence-based practices that truly support mother and baby." },
  { emoji: "🧠", title: "Empowered Mothers", desc: "We don't just support — we educate and empower mothers to become confident, informed and joyful." },
  { emoji: "🤝", title: "Community First", desc: "No mother walks alone. We build sisterhood so every woman feels seen, heard and celebrated." },
  { emoji: "🌱", title: "Continuous Growth", desc: "We evolve constantly, learning from the latest research and from the mothers we serve." },
];

const milestones = [
  { year: "2015", event: "Dheera Somani begins her Garbh Sanskar training in Pune" },
  { year: "2017", event: "First Maatratva workshop — 12 mothers, one room, infinite love" },
  { year: "2019", event: "NLP certification and integration into prenatal wellness programs" },
  { year: "2021", event: "Online programs launched — 500+ mothers supported across India" },
  { year: "2023", event: "Flagship Signature Program launched with full wellness ecosystem" },
  { year: "2024", event: "2000+ mothers supported. International community launched globally" },
];

const stats = [
  { value: "2000+", label: "Mothers Guided" },
  { value: "12+", label: "Years Experience" },
  { value: "4", label: "Core Programs" },
  { value: "100%", label: "Trusted Care" },
];

export default function AboutPageContent() {
  return (
    <div className="pt-24" style={{ background: "#FAF7F4" }}>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-28 md:py-36"
        style={{ background: "linear-gradient(160deg,#4B3B3B 0%,#3A2D2D 100%)" }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
            style={{ background: "#E9D8D3" }} animate={{ scale:[1,1.2,1] }} transition={{ duration:8, repeat:Infinity }} />
          <motion.div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-2xl opacity-8"
            style={{ background: "#A15C7A" }} animate={{ scale:[1,1.15,1] }} transition={{ duration:6, repeat:Infinity, delay:2 }} />
        </div>
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeLeft>
              <SectionLabel>Our Story</SectionLabel>
              <h1 className="font-display text-6xl md:text-7xl font-semibold leading-[1.05] mb-6 text-white">
                Born from a <span style={{ color: "#E9D8D3" }}>Mother&apos;s</span> Heart
              </h1>
              <p className="font-body text-xl leading-relaxed mb-8" style={{ color: "rgba(233,216,211,0.8)" }}>
                Maatratva was created because we believed pregnancy deserved more than appointments and checkups. It deserved wisdom, warmth, and wonder.
              </p>
              <Link href="/contact" className="btn-gold inline-flex group text-base px-8 py-4">
                Begin Your Journey <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeLeft>
            <FadeRight>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="p-6 rounded-[24px] text-center"
                    style={{ background: "rgba(233,216,211,0.06)", border: "1px solid rgba(233,216,211,0.12)" }}>
                    <p className="font-display text-4xl font-bold mb-1" style={{ color: "#E9D8D3" }}>{s.value}</p>
                    <p className="font-body text-sm" style={{ color: "rgba(233,216,211,0.6)" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="section-padding" style={{ background: "#FAF7F4" }}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeLeft>
              <div className="relative rounded-[36px] aspect-square max-w-lg overflow-hidden"
                style={{ background: "linear-gradient(160deg,#E9D8D3 0%,#D4B5C8 60%,rgba(161,92,122,0.15) 100%)", boxShadow: "0 24px 80px rgba(161,92,122,0.2)" }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-10">
                  <div className="text-7xl">🌸</div>
                  <p className="font-display text-3xl font-semibold text-center" style={{ color: "#4B3B3B" }}>
                    Our Mission
                  </p>
                  <p className="font-display text-lg font-light italic text-center" style={{ color: "#A15C7A" }}>
                    &ldquo;When a mother thrives, her baby thrives. When her baby thrives, the whole world benefits.&rdquo;
                  </p>
                </div>
              </div>
            </FadeLeft>
            <FadeRight className="space-y-6">
              <SectionLabel>Our Mission</SectionLabel>
              <h2 className="font-display text-5xl font-semibold leading-[1.1]" style={{ color: "#4B3B3B" }}>
                To transform how the world experiences{" "}
                <span style={{ color: "#A15C7A" }}>pregnancy</span>
              </h2>
              <p className="font-body text-lg leading-relaxed" style={{ color: "#7C6A6A" }}>
                We believe every mother deserves to feel confident, supported and deeply connected to the miraculous journey she is on. Pregnancy is not a medical condition to be managed — it is a sacred, transformative experience to be celebrated.
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: "#7C6A6A" }}>
                Maatratva bridges the gap between ancient Indian wisdom — Garbh Sanskar, Ayurveda, yoga — and modern evidence-based care, creating a comprehensive wellness ecosystem unlike anything available today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/programs" className="btn-primary inline-flex group">
                  Explore Programs <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/team" className="btn-secondary inline-flex">Meet Our Team</Link>
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section-padding" style={{ background: "#F4EBE8" }}>
        <div className="container-wide">
          <FadeUp className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel centered>What We Stand For</SectionLabel>
            <h2 className="font-display text-5xl font-semibold" style={{ color: "#4B3B3B" }}>
              Our Core <span style={{ color: "#A15C7A" }}>Values</span>
            </h2>
          </FadeUp>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <motion.div className="p-8 rounded-[24px] h-full"
                  style={{ background: "white", border: "1px solid rgba(233,216,211,0.6)" }}
                  whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
                  <div className="text-4xl mb-5">{v.emoji}</div>
                  <h3 className="font-display text-2xl font-semibold mb-3" style={{ color: "#4B3B3B" }}>{v.title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#7C6A6A" }}>{v.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section-padding" style={{ background: "#FAF7F4" }}>
        <div className="container-wide">
          <FadeUp className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel centered>Our Journey</SectionLabel>
            <h2 className="font-display text-5xl font-semibold" style={{ color: "#4B3B3B" }}>
              From Seed to <span style={{ color: "#A15C7A" }}>Forest</span>
            </h2>
          </FadeUp>
          <div className="max-w-2xl mx-auto">
            {milestones.map((m, i) => (
              <FadeUp key={m.year} delay={i * 0.1}>
                <div className="flex gap-8 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 font-body font-bold text-xs text-white"
                      style={{ background: "#A15C7A" }}>
                      {m.year.slice(2)}
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-px flex-1 mt-2" style={{ background: "rgba(161,92,122,0.2)" }} />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="font-body text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#A15C7A" }}>{m.year}</p>
                    <p className="font-display text-xl font-medium" style={{ color: "#4B3B3B" }}>{m.event}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
