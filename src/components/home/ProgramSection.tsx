"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { FadeLeft, FadeRight } from "@/components/ui/motion";

const highlights = [
  { icon: "📅", label: "Weekly Live Sessions", desc: "Interactive group sessions every week" },
  { icon: "👩‍⚕️", label: "Expert Guidance", desc: "Led by certified practitioners" },
  { icon: "🎵", label: "Garbh Sanskar", desc: "Complete prenatal baby education" },
  { icon: "🥗", label: "Nutrition", desc: "Trimester-wise Ayurvedic meal plans" },
  { icon: "🧘", label: "Meditation", desc: "Daily guided practices & breathwork" },
  { icon: "🤱", label: "Birth Preparation", desc: "Confident, informed birth planning" },
  { icon: "👭", label: "Community Support", desc: "Mothers circle — you are never alone" },
];

export default function ProgramSection() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "#F4EBE8" }}
    >
      {/* BG decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, rgba(161,92,122,0.12) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 opacity-20"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)" }}
        />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Visual */}
          <FadeLeft>
            <div className="relative">
              {/* Main image card */}
              <div
                className="relative rounded-[36px] overflow-hidden aspect-[4/5]"
                style={{
                  background: "linear-gradient(160deg, #E9D8D3 0%, #D4B5C8 40%, #A15C7A30 100%)",
                  boxShadow: "0 32px 80px rgba(161,92,122,0.2)",
                }}
              >
                {/* Placeholder for program image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
                  <div className="text-6xl mb-6">🌸</div>
                  <p className="font-display text-2xl font-semibold mb-2" style={{ color: "#4B3B3B" }}>
                    The Maatratva Program
                  </p>
                  <p className="font-body text-sm" style={{ color: "#7C6A6A" }}>
                    A comprehensive 9-month journey
                  </p>
                </div>
              </div>

              {/* Floating stat card */}
              <motion.div
                className="absolute -right-6 top-12 card-soft px-6 py-5"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="font-display text-4xl font-bold leading-none mb-1" style={{ color: "#A15C7A" }}>
                  7+
                </p>
                <p className="font-body text-xs" style={{ color: "#7C6A6A" }}>
                  Wellness Dimensions
                </p>
              </motion.div>

              {/* Floating pill */}
              <motion.div
                className="absolute -left-4 bottom-16 card-soft px-5 py-3 flex items-center gap-3"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-2.5 h-2.5 rounded-full animate-pulse-soft" style={{ background: "#A15C7A" }} />
                <span className="font-body text-sm font-medium" style={{ color: "#4B3B3B" }}>
                  New Batch Starting Soon
                </span>
              </motion.div>
            </div>
          </FadeLeft>

          {/* Right — Content */}
          <FadeRight>
            <div className="space-y-8">
              <div>
                <SectionLabel>Our Program</SectionLabel>
                <h2
                  className="font-display text-5xl md:text-6xl font-semibold leading-[1.1] mb-6"
                  style={{ color: "#4B3B3B" }}
                >
                  Your Complete{" "}
                  <span style={{ color: "#A15C7A" }}>
                  Pregnancy Companion
                </span>
                </h2>
                <p className="font-body text-lg leading-relaxed" style={{ color: "#7C6A6A" }}>
                  Our flagship program is a holistic, structured journey that accompanies you through every stage of pregnancy — from preconception to postpartum. Guided by experts who truly understand the science and soul of motherhood.
                </p>
              </div>

              {/* Highlights grid */}
              <div className="grid sm:grid-cols-2 gap-3">
                {highlights.map((h) => (
                  <motion.div
                    key={h.label}
                    className="flex items-start gap-3 p-4 rounded-2xl group cursor-pointer"
                    style={{
                      background: "rgba(255,255,255,0.7)",
                      border: "1px solid rgba(233,216,211,0.6)",
                    }}
                    whileHover={{
                      background: "rgba(161,92,122,0.06)",
                      borderColor: "rgba(161,92,122,0.2)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-xl shrink-0 mt-0.5">{h.icon}</span>
                    <div>
                      <p className="font-body text-sm font-semibold" style={{ color: "#4B3B3B" }}>
                        {h.label}
                      </p>
                      <p className="font-body text-xs mt-0.5" style={{ color: "#7C6A6A" }}>
                        {h.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/programs" className="btn-primary group">
                  Explore Full Program
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Book Free Session
                </Link>
              </div>
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
