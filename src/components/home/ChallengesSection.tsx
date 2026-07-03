"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { StaggerContainer, StaggerItem, FadeUp } from "@/components/ui/motion";
import { AlertCircle, CloudLightning, Users, HelpCircle, Frown } from "lucide-react";

const challenges = [
  {
    icon: AlertCircle,
    emoji: "📚",
    title: "Information Without Clarity",
    description:
      "The internet is full of conflicting advice. Mothers are overwhelmed by too much information and too little trusted guidance.",
    number: "01",
  },
  {
    icon: CloudLightning,
    emoji: "💭",
    title: "Emotional Overload",
    description:
      "Hormonal shifts, anxiety, fear of the unknown — pregnancy emotions can feel unmanageable without the right support system.",
    number: "02",
  },
  {
    icon: Users,
    emoji: "🌙",
    title: "Feeling of Loneliness",
    description:
      "Despite being surrounded by people, many mothers feel deeply alone in their pregnancy journey — unseen and unsupported.",
    number: "03",
  },
  {
    icon: HelpCircle,
    emoji: "❓",
    title: "Fear of Doing It Wrong",
    description:
      "The pressure to make every decision perfectly — from nutrition to birthing plans — creates debilitating anxiety in mothers.",
    number: "04",
  },
  {
    icon: Frown,
    emoji: "✨",
    title: "Losing the Joy",
    description:
      "Pregnancy should be magical. But for many mothers, the wonder gets buried under worry, fatigue, and overwhelming logistics.",
    number: "05",
  },
];

export default function ChallengesSection() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #4B3B3B 0%, #3A2D2D 100%)" }}
    >
      {/* Background decorative */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-5"
          style={{ background: "#E9D8D3" }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-5"
          style={{ background: "#D4AF37" }}
        />
        {/* Gold ornament lines */}
        <div
          className="absolute top-0 left-1/2 w-px h-full opacity-5"
          style={{ background: "linear-gradient(to bottom, transparent, #D4AF37, transparent)" }}
        />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <FadeUp className="text-center max-w-2xl mx-auto mb-20">
          <SectionLabel centered>The Real Challenges</SectionLabel>
          <h2
            className="font-display text-5xl md:text-6xl font-semibold leading-[1.1] mb-6"
            style={{ color: "#FAF7F4" }}
          >
            Why pregnancy needs more{" "}
            <span style={{ color: "#A15C7A" }}>
              support
            </span>{" "}
            now than ever.
          </h2>
          <p className="font-body text-lg leading-relaxed" style={{ color: "#A89090" }}>
            Modern mothers face unique challenges that traditional healthcare alone cannot address.
          </p>
        </FadeUp>

        {/* Challenge cards */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((item, i) => (
            <StaggerItem
              key={item.title}
              className={i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <motion.div
                className="relative group h-full p-8 rounded-[24px] overflow-hidden cursor-pointer"
                style={{
                  background: "rgba(233,216,211,0.04)",
                  border: "1px solid rgba(233,216,211,0.1)",
                }}
                whileHover={{
                  background: "rgba(161,92,122,0.12)",
                  borderColor: "rgba(161,92,122,0.3)",
                  y: -4,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Number — decorative */}
                <span
                  className="absolute top-6 right-6 font-display text-6xl font-bold opacity-[0.06] leading-none select-none"
                  style={{ color: "#D4AF37" }}
                >
                  {item.number}
                </span>

                {/* Icon */}
                <div className="text-3xl mb-5">{item.emoji}</div>

                {/* Content */}
                <h3
                  className="font-display text-2xl font-semibold mb-3 leading-tight"
                  style={{ color: "#FAF7F4" }}
                >
                  {item.title}
                </h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#A89090" }}>
                  {item.description}
                </p>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 transition-all duration-500 ease-out"
                  style={{ background: "linear-gradient(90deg, #A15C7A, #D4AF37)" }}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bridge to solution */}
        <FadeUp className="text-center mt-16">
          <p className="font-display text-2xl md:text-3xl font-light italic" style={{ color: "#E9D8D3" }}>
            &ldquo;Every challenge is an invitation for deeper care.&rdquo;
          </p>
          <p className="font-body text-sm mt-3" style={{ color: "#A89090" }}>
            — This is why Maatratva exists.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
