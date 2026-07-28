"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { FadeLeft, FadeRight } from "@/components/ui/motion";

const highlights = [
  { icon: "🧘", label: "Physical Wellbeing", desc: "Prenatal yoga, exercise and breathwork" },
  { icon: "🌸", label: "Mindful Motherhood", desc: "Meditation, energy balancing and positive mind practices" },
  { icon: "🎵", label: "Garbh Sanskar & Womb Designing", desc: "Garbh Sanskar, genetic blueprint, brain and senses development" },
  { icon: "🥗", label: "Nutrition & Balanced Diet", desc: "Trimester-wise balanced diet plans" },
  { icon: "💬", label: "Personal Mentor Support", desc: "4 weekly live sessions with mentor" },
  { icon: "👩‍⚕️", label: "Expert Guidance", desc: "Gynaecologists, Ayurveda experts, certified nutritionists and many more" },
  { icon: "🤱", label: "Birth Preparation", desc: "Confident and easy birth planning preparation" },
  { icon: "👭", label: "Community Support", desc: "Mother's circle — you are never alone" },
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
              {/* Main image */}
              <div
                className="relative rounded-[36px] overflow-hidden aspect-[4/5]"
                style={{
                  boxShadow: "0 32px 80px rgba(161,92,122,0.2)",
                }}
              >
                <Image
                  src="/programsection.png"
                  alt="Your Complete Pregnancy Companion"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Subtle bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(75,59,59,0.18), transparent)" }} />
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
                  className="font-display text-5xl md:text-6xl font-semibold leading-[1.1] mb-4"
                  style={{ color: "#4B3B3B" }}
                >
                  Your Complete{" "}
                  <span style={{ color: "#A15C7A" }}>
                  Pregnancy Companion
                </span>
                </h2>

                {/* Pointer line — between headline and subhead */}
                <p
                  className="font-display text-xl md:text-2xl font-light italic mb-5"
                  style={{ color: "#A15C7A" }}
                >
                  Join us from the comfort of your own space for regular live sessions every week.
                </p>

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
               
              </div>
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
