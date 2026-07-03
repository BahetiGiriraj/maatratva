"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, Clock, Users, Star, Sparkles } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { FadeUp, FadeLeft, FadeRight, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const programs = [
  {
    id: "signature",
    badge: "Most Popular",
    icon: "🌸",
    title: "Maatratva Signature Program",
    subtitle: "Complete Pregnancy Journey",
    duration: "Full Pregnancy (9 months)",
    group: "Group + 1-on-1",
    description:
      "Our flagship holistic pregnancy wellness program that accompanies you from preconception through postpartum. The most comprehensive, transformative experience we offer — covering body, mind and baby.",
    features: [
      "Weekly live group sessions",
      "Garbh Sanskar complete module",
      "Prenatal yoga & breathwork",
      "Ayurvedic nutrition guidance",
      "NLP mind programming sessions",
      "Meditation & sound healing",
      "Birth preparation workshop",
      "Postpartum recovery support",
      "Private community access",
      "24/7 WhatsApp support",
    ],
    highlight: true,
    color: "#A15C7A",
  },
  {
    id: "garbh-sanskar",
    badge: "Ancient Wisdom",
    icon: "🎵",
    title: "Garbh Sanskar Intensive",
    subtitle: "Baby Mind Programming",
    duration: "12 Weeks",
    group: "Group",
    description:
      "Deep dive into the ancient science of prenatal education. Music, mantras, stories and practices to nurture your baby's mind, personality and emotional intelligence from the womb.",
    features: [
      "Garbh Sanskar history & science",
      "Curated music & mantra protocols",
      "Storytelling techniques",
      "Positive affirmation scripts",
      "Breathing & visualization",
      "Partner involvement sessions",
      "Weekly live coaching",
      "Recorded session library",
    ],
    highlight: false,
    color: "#A15C7A",
  },
  {
    id: "mind-wellness",
    badge: "Emotional Health",
    icon: "🧠",
    title: "Mind & Emotional Wellness",
    subtitle: "NLP + Meditation",
    duration: "8 Weeks",
    group: "Group + Personal",
    description:
      "Specialized program focusing on the psychological and emotional dimensions of pregnancy. Uses NLP, mindfulness, and somatic techniques to release fear and build inner joy.",
    features: [
      "NLP belief reprogramming",
      "Fear-release techniques",
      "Guided meditations library",
      "Emotional regulation tools",
      "Anxiety management protocols",
      "Partner bonding practices",
      "Postpartum emotion prep",
      "Live coaching sessions",
    ],
    highlight: false,
    color: "#A15C7A",
  },
  {
    id: "fertility",
    badge: "Preconception",
    icon: "🌱",
    title: "Fertility & Preconception Care",
    subtitle: "Planning Your Journey",
    duration: "3–6 Months",
    group: "1-on-1 + Group",
    description:
      "A gentle, holistic preparation program for women planning to conceive — naturally or through IVF. Supports your body, mind and spirit for optimal fertility and readiness.",
    features: [
      "Fertility yoga sequences",
      "Ayurvedic cleanse protocols",
      "Cycle tracking & awareness",
      "IVF emotional support",
      "Nutrition optimization",
      "Stress & cortisol reduction",
      "Partner wellness inclusion",
      "Specialist consultations",
    ],
    highlight: false,
    color: "#A15C7A",
  },
];

const steps = [
  { n: "01", title: "Free Discovery Call", desc: "We listen to your story and understand your unique needs." },
  { n: "02", title: "Custom Wellness Plan", desc: "Receive a personalised program recommendation." },
  { n: "03", title: "Begin Your Journey", desc: "Join your cohort and start transforming." },
  { n: "04", title: "Ongoing Support", desc: "We walk beside you every step of the way." },
];

const testimonials = [
  { name: "Priya K.", text: "The Signature Program changed everything. I felt held, guided and deeply supported.", tag: "Signature Program" },
  { name: "Ananya R.", text: "Garbh Sanskar sessions gave me a bond with my baby I cannot describe.", tag: "Garbh Sanskar" },
  { name: "Megha S.", text: "The NLP sessions removed fears I had carried for years. I felt free.", tag: "Mind Wellness" },
];

export default function ProgramsPageContent() {
  return (
    <div className="pt-24" style={{ background: "#FAF7F4" }}>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-28 md:py-36" style={{ background: "linear-gradient(160deg,#F4EBE8 0%,#FAF7F4 100%)" }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
            style={{ background: "#A15C7A" }} animate={{ scale: [1,1.1,1] }} transition={{ duration: 10, repeat: Infinity }} />
        </div>
        <div className="container-wide relative z-10 text-center max-w-3xl mx-auto">
          <FadeUp>
            <SectionLabel centered>Our Programs</SectionLabel>
            <h1 className="font-display text-6xl md:text-7xl font-semibold leading-[1.05] mb-6" style={{ color: "#4B3B3B" }}>
              Every Mother&apos;s Journey is <span style={{ color: "#A15C7A" }}>Unique</span>
            </h1>
            <p className="font-body text-xl leading-relaxed mb-10" style={{ color: "#7C6A6A" }}>
              We offer programs tailored to every stage — from fertility and preconception through pregnancy and beyond. Each designed with intention, care and deep expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-base px-10 py-4 inline-flex group">
                Book Free Consultation <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#programs" className="btn-secondary text-base px-10 py-4 inline-flex">
                Explore Programs
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section id="programs" className="section-padding" style={{ background: "#FAF7F4" }}>
        <div className="container-wide space-y-8">
          {programs.map((p, i) => (
            <FadeUp key={p.id} delay={i * 0.08}>
              <div className="relative rounded-[32px] overflow-hidden"
                style={{
                  background: p.highlight ? "linear-gradient(135deg,rgba(161,92,122,0.07) 0%,rgba(233,216,211,0.4) 100%)" : "white",
                  border: p.highlight ? "1.5px solid rgba(161,92,122,0.25)" : "1px solid rgba(233,216,211,0.7)",
                  boxShadow: p.highlight ? "0 12px 60px rgba(161,92,122,0.12)" : "0 4px 24px rgba(75,59,59,0.06)",
                }}>
                {p.highlight && (
                  <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full font-body text-xs font-semibold"
                    style={{ background: "#A15C7A", color: "white" }}>✦ {p.badge}</div>
                )}
                <div className="grid lg:grid-cols-3 gap-8 p-8 md:p-10">
                  {/* Left */}
                  <div className="lg:col-span-2 space-y-5">
                    {!p.highlight && (
                      <span className="inline-block px-3 py-1 rounded-full font-body text-xs font-medium"
                        style={{ background: "rgba(161,92,122,0.08)", color: "#A15C7A", border: "1px solid rgba(161,92,122,0.15)" }}>
                        {p.badge}
                      </span>
                    )}
                    <div className="flex items-start gap-5">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0"
                        style={{ background: "rgba(161,92,122,0.08)", border: "1px solid rgba(161,92,122,0.15)" }}>
                        {p.icon}
                      </div>
                      <div>
                        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-1" style={{ color: "#4B3B3B" }}>{p.title}</h2>
                        <p className="font-body text-sm font-medium" style={{ color: "#A15C7A" }}>{p.subtitle}</p>
                      </div>
                    </div>
                    <p className="font-body text-base leading-relaxed" style={{ color: "#7C6A6A" }}>{p.description}</p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2">
                        <Clock size={14} style={{ color: "#A89090" }} />
                        <span className="font-body text-sm" style={{ color: "#7C6A6A" }}>{p.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={14} style={{ color: "#A89090" }} />
                        <span className="font-body text-sm" style={{ color: "#7C6A6A" }}>{p.group}</span>
                      </div>
                    </div>
                  </div>
                  {/* Right */}
                  <div className="space-y-4">
                    <p className="font-body text-xs font-semibold tracking-[0.15em] uppercase" style={{ color: "#A89090" }}>What&apos;s Included</p>
                    <ul className="space-y-2.5">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5">
                          <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(161,92,122,0.12)" }}>
                            <Check size={10} style={{ color: "#A15C7A" }} />
                          </div>
                          <span className="font-body text-sm" style={{ color: "#7C6A6A" }}>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="btn-primary w-full justify-center mt-4 inline-flex group">
                      Get Started <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section-padding" style={{ background: "#F4EBE8" }}>
        <div className="container-wide">
          <FadeUp className="text-center max-w-xl mx-auto mb-16">
            <SectionLabel centered>How It Works</SectionLabel>
            <h2 className="font-display text-5xl font-semibold" style={{ color: "#4B3B3B" }}>Your Path Forward</h2>
          </FadeUp>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <StaggerItem key={s.n}>
                <motion.div className="p-8 rounded-[24px] text-center h-full"
                  style={{ background: "white", border: "1px solid rgba(233,216,211,0.6)" }}
                  whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
                  <span className="font-display text-5xl font-bold block mb-4 leading-none" style={{ color: "rgba(161,92,122,0.18)" }}>{s.n}</span>
                  <h3 className="font-display text-xl font-semibold mb-3" style={{ color: "#4B3B3B" }}>{s.title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#7C6A6A" }}>{s.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-padding" style={{ background: "#FAF7F4" }}>
        <div className="container-wide">
          <FadeUp className="text-center max-w-xl mx-auto mb-12">
            <SectionLabel centered>What Mothers Say</SectionLabel>
            <h2 className="font-display text-5xl font-semibold" style={{ color: "#4B3B3B" }}>
              Voices of <span style={{ color: "#A15C7A" }}>Experience</span>
            </h2>
          </FadeUp>
          <StaggerContainer className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <motion.div className="p-7 rounded-[24px] h-full flex flex-col"
                  style={{ background: "white", border: "1px solid rgba(233,216,211,0.6)", boxShadow: "0 4px 24px rgba(75,59,59,0.06)" }}
                  whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#A15C7A" color="#A15C7A" />)}
                  </div>
                  <p className="font-display text-lg font-light italic leading-relaxed flex-1" style={{ color: "#4B3B3B" }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-5 pt-4" style={{ borderTop: "1px solid rgba(233,216,211,0.6)" }}>
                    <p className="font-body text-sm font-semibold" style={{ color: "#4B3B3B" }}>{t.name}</p>
                    <p className="font-body text-xs mt-0.5" style={{ color: "#A15C7A" }}>{t.tag}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

    </div>
  );
}
