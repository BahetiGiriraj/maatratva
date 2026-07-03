"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const founder = {
  name: "Dheera Somani",
  title: "Founder & Lead Practitioner",
  credentials: [
    "Garbh Sanskar Practitioner",
    "Pregnancy Wellness Coach",
    "Womb Designer",
    "NLP Certified Expert",
  ],
  bio: "Dheera has dedicated over a decade to transforming how mothers experience pregnancy. With a rare blend of ancient wisdom and modern science, she has guided thousands of mothers to birth more confidently, more joyfully.",
  emoji: "👩‍⚕️",
};

const team = [
  {
    name: "Dr. Priya Sharma",
    title: "Prenatal Yoga Expert",
    emoji: "🧘‍♀️",
    color: "#A15C7A",
  },
  {
    name: "Ananya Mehta",
    title: "Ayurvedic Nutritionist",
    emoji: "🌿",
    color: "#D4AF37",
  },
  {
    name: "Dr. Kavita Reddy",
    title: "Meditation & Mindfulness",
    emoji: "🌸",
    color: "#A15C7A",
  },
];

export default function TeamSection() {
  return (
    <section className="section-padding" style={{ background: "#FAF7F4" }}>
      <div className="container-wide">
        <FadeUp className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel centered>Meet Our Team</SectionLabel>
          <h2
            className="font-display text-5xl md:text-6xl font-semibold leading-[1.1] mb-6"
            style={{ color: "#4B3B3B" }}
          >
            The Hands Behind{" "}
            <span style={{ color: "#A15C7A" }}>
              Your Care
            </span>
          </h2>
          <p className="font-body text-lg leading-relaxed" style={{ color: "#7C6A6A" }}>
            A team of dedicated experts who bring expertise, compassion and passion to every mother&apos;s journey.
          </p>
        </FadeUp>

        {/* Founder card */}
        <FadeUp className="mb-10">
          <div
            className="relative rounded-[32px] overflow-hidden p-8 md:p-12"
            style={{
              background: "linear-gradient(135deg, rgba(161,92,122,0.08) 0%, rgba(233,216,211,0.5) 100%)",
              border: "1px solid rgba(161,92,122,0.15)",
            }}
          >
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Photo placeholder */}
              <div className="relative">
                <div
                  className="w-full aspect-square max-w-sm mx-auto rounded-[28px] overflow-hidden flex items-center justify-center"
                  style={{
                    background: "linear-gradient(160deg, #E9D8D3 0%, #D4B5C8 60%, #A15C7A20 100%)",
                    boxShadow: "0 20px 60px rgba(161,92,122,0.2)",
                  }}
                >
                  <div className="text-center">
                    <div className="text-8xl mb-4">{founder.emoji}</div>
                    <p className="font-display text-2xl font-semibold" style={{ color: "#4B3B3B" }}>
                      {founder.name}
                    </p>
                  </div>
                </div>

                {/* Badge */}
                <div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full shadow-lg"
                  style={{
                    background: "#A15C7A",
                    color: "white",
                  }}
                >
                  <span className="font-body text-xs font-semibold tracking-wide">Founder</span>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-6 pt-4">
                <div>
                  <h3
                    className="font-display text-4xl md:text-5xl font-semibold mb-2"
                    style={{ color: "#4B3B3B" }}
                  >
                    {founder.name}
                  </h3>
                  <p
                    className="font-body text-sm font-medium tracking-wide"
                    style={{ color: "#D4AF37" }}
                  >
                    {founder.title}
                  </p>
                </div>

                {/* Credentials */}
                <div className="flex flex-wrap gap-2">
                  {founder.credentials.map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1.5 rounded-full font-body text-xs font-medium"
                      style={{
                        background: "rgba(161,92,122,0.1)",
                        color: "#A15C7A",
                        border: "1px solid rgba(161,92,122,0.15)",
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>

                <p className="font-body text-base leading-relaxed" style={{ color: "#7C6A6A" }}>
                  {founder.bio}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#D4AF37" color="#D4AF37" />
                    ))}
                  </div>
                  <span className="font-body text-sm" style={{ color: "#7C6A6A" }}>
                    Trusted by 2000+ mothers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Team grid */}
        <StaggerContainer className="grid sm:grid-cols-3 gap-6 mb-12">
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <motion.div
                className="p-8 rounded-[24px] text-center group cursor-pointer"
                style={{
                  background: "white",
                  border: "1px solid rgba(233,216,211,0.6)",
                  boxShadow: "0 4px 24px rgba(75,59,59,0.06)",
                }}
                whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(161,92,122,0.15)" }}
                transition={{ duration: 0.35 }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "rgba(161,92,122,0.08)" }}
                >
                  {member.emoji}
                </div>
                <h4 className="font-display text-xl font-semibold mb-1" style={{ color: "#4B3B3B" }}>
                  {member.name}
                </h4>
                <p className="font-body text-sm" style={{ color: "#7C6A6A" }}>
                  {member.title}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp className="text-center">
          <Link href="/team" className="btn-secondary group inline-flex">
            Meet the Full Team
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
