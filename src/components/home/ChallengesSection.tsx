"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { StaggerContainer, StaggerItem, FadeUp } from "@/components/ui/motion";

const challenges = [
  { number: "01", title: "Information Without Clarity",   description: "Too much conflicting advice, too little trusted guidance for modern mothers.", icon: "📚" },
  { number: "02", title: "Emotional Overload",            description: "Hormonal shifts and anxiety can feel unmanageable without the right support.", icon: "💭" },
  { number: "03", title: "Feeling of Loneliness",         description: "Many mothers feel deeply alone in their journey — unseen and unsupported.", icon: "🌙" },
  { number: "04", title: "Fear of Doing It Wrong",        description: "The pressure to make every decision perfectly creates debilitating anxiety.", icon: "❓" },
  { number: "05", title: "Losing the Joy",                description: "The wonder of pregnancy gets buried under worry, fatigue and overwhelm.", icon: "✨" },
];

export default function ChallengesSection() {
  return (
    <section className="section-padding relative overflow-hidden" style={{ background: "#F4EBE8" }}>
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-30"
          style={{ background: "rgba(161,92,122,0.12)" }} />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full blur-3xl opacity-20"
          style={{ background: "rgba(233,216,211,0.8)" }} />
      </div>

      <div className="container-wide relative z-10">

        {/* Header */}
        <FadeUp className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel centered>The Real Challenges</SectionLabel>
          <h2 className="font-display text-5xl md:text-6xl font-semibold leading-[1.1] mb-4"
            style={{ color: "#4B3B3B" }}>
            Why pregnancy needs more{" "}
            <span style={{ color: "#A15C7A" }}>support</span>{" "}
            now than ever.
          </h2>
          <p className="font-body text-lg" style={{ color: "#7C6A6A" }}>
            Modern mothers face unique challenges that traditional healthcare alone cannot address.
          </p>
        </FadeUp>

        {/* ── ONE ROW of 5 cards ── */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          {challenges.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                className="group relative h-full rounded-[20px] overflow-hidden cursor-pointer flex flex-col"
                style={{
                  background: "white",
                  border: "1px solid rgba(233,216,211,0.7)",
                  boxShadow: "0 4px 20px rgba(161,92,122,0.06)",
                }}
                whileHover={{ y: -8, boxShadow: "0 20px 48px rgba(161,92,122,0.16)" }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Top mauve bar — slides in on hover */}
                <div
                  className="h-1 w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
                  style={{ background: "linear-gradient(90deg, #A15C7A, #E9D8D3)" }}
                />

                <div className="p-5 flex flex-col flex-1 gap-4">
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "rgba(161,92,122,0.08)" }}
                  >
                    {item.icon}
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold leading-snug mb-2"
                      style={{ color: "#4B3B3B" }}>
                      {item.title}
                    </h3>
                    <p className="font-body text-xs leading-relaxed"
                      style={{ color: "#7C6A6A" }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Quote */}
        <FadeUp className="text-center mt-14">
          <div className="inline-flex flex-col items-center gap-2 px-10 py-6 rounded-[20px]"
            style={{ background: "white", border: "1px solid rgba(161,92,122,0.12)", boxShadow: "0 4px 20px rgba(161,92,122,0.07)" }}>
            <p className="font-display text-2xl md:text-3xl font-light italic"
              style={{ color: "#A15C7A" }}>
              &ldquo;Every challenge is an invitation for deeper care.&rdquo;
            </p>
            <p className="font-body text-sm" style={{ color: "#A89090" }}>
              — This is why Maatratva exists.
            </p>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
