"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { FadeUp, FadeLeft, FadeRight } from "@/components/ui/motion";

const leftItems = [
  {
    emoji: "🌺",
    label: "FOR MOTHER",
    title: "Your Journey of Renewal",
    desc: "A nurturing path to emotional wellbeing, strength and inner transformation.",
    color: "#A15C7A",
    dot: "#A15C7A",
  },
  {
    emoji: "🧘‍♀️",
    label: "",
    title: "Prenatal Yoga & Nourishment",
    desc: "Gentle movement and Ayurvedic nutrition protocols designed for every trimester.",
    color: "#A15C7A",
    dot: "#A15C7A",
  },
  {
    emoji: "🌸",
    label: "",
    title: "Meditation & Inner Harmony",
    desc: "Daily guided practices to cultivate calm, reduce anxiety and build emotional resilience.",
    color: "#A15C7A",
    dot: "#A15C7A",
  },
  {
    emoji: "🧠",
    label: "",
    title: "Mind Programming with NLP",
    desc: "Powerful neuro-linguistic programming techniques to rewire limiting beliefs and fears.",
    color: "#A15C7A",
    dot: "#A15C7A",
  },
];

const rightItems = [
  {
    emoji: "👶",
    label: "FOR BABY",
    title: "A Womb of Wonder",
    desc: "Creating a loving, secure and stimulating environment for your baby's growth.",
    color: "#4B3B3B",
    dot: "#D4AF37",
  },
  {
    emoji: "🎵",
    label: "",
    title: "Garbh Sanskar",
    desc: "Music, mantras, stories and stimulation to nurture your baby's senses before birth.",
    color: "#4B3B3B",
    dot: "#D4AF37",
  },
  {
    emoji: "🌱",
    label: "",
    title: "Brain & Sensory Development",
    desc: "Science-backed activities that support your baby's neurological growth in the womb.",
    color: "#4B3B3B",
    dot: "#D4AF37",
  },
  {
    emoji: "🧬",
    label: "",
    title: "Genetic Blueprint",
    desc: "Understanding and positively influencing your baby's epigenetic expression through lifestyle.",
    color: "#4B3B3B",
    dot: "#D4AF37",
  },
];

interface CardProps {
  emoji: string;
  label: string;
  title: string;
  desc: string;
  color: string;
  dot: string;
  side: "left" | "right";
  index: number;
}

function FeatureCard({ emoji, label, title, desc, color, dot, side, index }: CardProps) {
  return (
    <motion.div
      className="flex items-start gap-3 group"
      initial={{ opacity: 0, x: side === "left" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {side === "right" && (
        /* Dot connector on left of right cards */
        <div className="flex items-center gap-2 shrink-0 mt-4">
          <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: dot }} />
          <div className="w-8 h-px" style={{ background: `${dot}60` }} />
        </div>
      )}

      {/* Icon circle */}
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 transition-transform duration-300 group-hover:scale-110"
        style={{
          background: side === "left" ? "rgba(161,92,122,0.08)" : "rgba(212,175,55,0.08)",
          border: `1px solid ${side === "left" ? "rgba(161,92,122,0.2)" : "rgba(212,175,55,0.2)"}`,
        }}
      >
        {emoji}
      </div>

      {/* Text */}
      <div className={side === "right" ? "" : "pr-2"}>
        {label && (
          <p className="font-body text-xs font-bold tracking-[0.18em] uppercase mb-0.5"
            style={{ color: side === "left" ? "#A15C7A" : "#D4AF37" }}>
            {label}
          </p>
        )}
        <h4 className="font-display text-lg font-semibold leading-tight mb-1"
          style={{ color }}>
          {title}
        </h4>
        <p className="font-body text-xs leading-relaxed" style={{ color: "#7C6A6A" }}>
          {desc}
        </p>
      </div>

      {side === "left" && (
        /* Dot connector on right of left cards */
        <div className="flex items-center gap-2 shrink-0 mt-4 ml-auto">
          <div className="w-8 h-px" style={{ background: `${dot}60` }} />
          <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: dot }} />
        </div>
      )}
    </motion.div>
  );
}

export default function MaatratvaWaySection() {
  return (
    <section className="section-padding relative overflow-hidden" style={{ background: "#FAF7F4" }}>
      {/* Soft bg glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, rgba(161,92,122,0.08) 0%, transparent 70%)" }} />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <FadeUp className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel centered>The Maatratva Way</SectionLabel>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-6"
            style={{ color: "#4B3B3B" }}>
            Care From{" "}
            <span style={{ color: "#A15C7A" }}>Womb</span>{" "}
            to{" "}
            <span style={{ color: "#D4AF37" }}>Wonder</span>
          </h2>
          <p className="font-body text-lg leading-relaxed" style={{ color: "#7C6A6A" }}>
            A dual-focus approach that nurtures both mother and baby simultaneously —<br className="hidden md:block" />
            because every breath you take, every thought you think, every feeling you feel<br className="hidden md:block" />
            becomes part of your baby&apos;s world.
          </p>
        </FadeUp>

        {/* 3-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">

          {/* LEFT — For Mother */}
          <FadeLeft className="space-y-8">
            {leftItems.map((item, i) => (
              <FeatureCard key={item.title} {...item} side="left" index={i} />
            ))}
          </FadeLeft>

          {/* CENTRE — Woman image */}
          <FadeUp className="flex justify-center">
            <div className="relative flex items-center justify-center">
              {/* Outer animated ring */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: 380,
                  height: 380,
                  border: "1.5px dashed rgba(161,92,122,0.25)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              {/* Inner ring mauve */}
              <div className="absolute rounded-full"
                style={{
                  width: 320,
                  height: 320,
                  border: "1px solid rgba(161,92,122,0.15)",
                }} />
              {/* Inner ring gold */}
              <div className="absolute rounded-full"
                style={{
                  width: 260,
                  height: 260,
                  border: "1px solid rgba(212,175,55,0.2)",
                }} />

              {/* Glow */}
              <div className="absolute rounded-full"
                style={{
                  width: 300,
                  height: 300,
                  background: "radial-gradient(circle, rgba(161,92,122,0.1) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }} />

              {/* Image */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: "relative", zIndex: 10 }}
              >
                <Image
                  src="/way-removebg.png"
                  alt="Maatratva — A mother's journey"
                  width={340}
                  height={440}
                  className="object-contain drop-shadow-xl"
                  style={{ maxHeight: 440 }}
                  priority
                />
              </motion.div>
            </div>
          </FadeUp>

          {/* RIGHT — For Baby */}
          <FadeRight className="space-y-8">
            {rightItems.map((item, i) => (
              <FeatureCard key={item.title} {...item} side="right" index={i} />
            ))}
          </FadeRight>

        </div>
      </div>
    </section>
  );
}
