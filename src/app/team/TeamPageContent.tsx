"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { FadeUp, FadeLeft, FadeRight, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const founder = {
  name: "Dheera Somani",
  title: "Founder & Lead Practitioner",
  emoji: "👩‍⚕️",
  credentials: ["Garbh Sanskar Practitioner", "Pregnancy Wellness Coach", "Womb Designer", "NLP Certified Expert"],
  bio: "With over a decade of experience, Dheera has guided more than 2,000 mothers through transformative pregnancy journeys. Her unique approach integrates ancient Indian wisdom with modern neuroscience and evidence-based wellness practices. She believes deeply that every mother has the capacity for a profound, joyful pregnancy — and she dedicates herself to unlocking that potential.",
  experience: "12+ Years",
  mothers: "2000+",
};

const team = [
  { name: "Dr. Priya Sharma", title: "Prenatal Yoga & Movement", emoji: "🧘‍♀️", credentials: ["Certified Yoga Therapist", "Prenatal Specialist", "RYT-500"], bio: "Dr. Priya specialises in therapeutic yoga for pregnancy, creating sequences that support each trimester's unique demands while building strength and flexibility for birth.", exp: "8 Years", mothers: "800+" },
  { name: "Ananya Mehta", title: "Ayurvedic Nutritionist", emoji: "🌿", credentials: ["Ayurvedic Practitioner", "Clinical Nutritionist", "B.A.M.S"], bio: "Ananya crafts personalised Ayurvedic nutrition protocols that nourish both mother and baby — addressing pregnancy challenges through ancient food wisdom.", exp: "7 Years", mothers: "600+" },
  { name: "Dr. Kavitha Reddy", title: "Meditation & Mindfulness", emoji: "🧠", credentials: ["Clinical Psychologist", "Mindfulness Instructor", "PhD Psychology"], bio: "Dr. Kavitha brings clinical expertise to emotional wellness, offering scientifically validated meditation practices that reduce anxiety and build deep resilience.", exp: "10 Years", mothers: "1200+" },
  { name: "Sunita Rao", title: "Garbh Sanskar Educator", emoji: "🎵", credentials: ["Garbh Sanskar Certified", "Music Therapist", "Classical Vocalist"], bio: "Sunita combines mastery of classical Indian music with deep Garbh Sanskar knowledge to create truly transformative prenatal music and sound healing experiences.", exp: "6 Years", mothers: "500+" },
  { name: "Ritu Kapoor", title: "Birth Preparation Coach", emoji: "🤱", credentials: ["Certified Doula", "HypnoBirthing Practitioner", "Lamaze Certified"], bio: "Ritu specialises in empowering mothers to approach labour and birth with confidence, knowledge and a deeply positive mindset — transforming fear into excitement.", exp: "9 Years", mothers: "900+" },
  { name: "Dr. Meena Agarwal", title: "Postpartum Specialist", emoji: "💫", credentials: ["Postpartum Care Expert", "Lactation Consultant", "MBBS"], bio: "Dr. Meena guides mothers through the fourth trimester with expert postpartum care, lactation support and recovery protocols rooted in Ayurvedic tradition.", exp: "11 Years", mothers: "1000+" },
];

export default function TeamPageContent() {
  return (
    <div className="pt-24" style={{ background: "#FAF7F4" }}>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-28 md:py-36"
        style={{ background: "linear-gradient(160deg,#F4EBE8 0%,#FAF7F4 100%)" }}>
        <div className="container-wide relative z-10 text-center max-w-3xl mx-auto">
          <FadeUp>
            <SectionLabel centered>Our Team</SectionLabel>
            <h1 className="font-display text-6xl md:text-7xl font-semibold leading-[1.05] mb-6" style={{ color: "#4B3B3B" }}>
              The People Who <span style={{ color: "#A15C7A" }}>Care</span>
            </h1>
            <p className="font-body text-xl leading-relaxed" style={{ color: "#7C6A6A" }}>
              A handpicked team of certified experts united by one purpose — to support every mother with genuine expertise and deep compassion.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section className="section-padding" style={{ background: "#FAF7F4" }}>
        <div className="container-wide">
          <FadeUp className="mb-16">
            <div className="relative rounded-[36px] overflow-hidden p-10 md:p-14"
              style={{ background: "linear-gradient(135deg,rgba(161,92,122,0.07) 0%,rgba(233,216,211,0.5) 100%)", border: "1.5px solid rgba(161,92,122,0.2)", boxShadow: "0 20px 80px rgba(161,92,122,0.12)" }}>
              <div className="grid md:grid-cols-3 gap-10 items-center">
                <div className="relative">
                  <div className="w-full aspect-square rounded-[28px] overflow-hidden flex items-center justify-center"
                    style={{ background: "linear-gradient(160deg,#E9D8D3 0%,#D4B5C8 60%,rgba(161,92,122,0.15) 100%)", boxShadow: "0 20px 60px rgba(161,92,122,0.25)" }}>
                    <div className="text-center">
                      <div className="text-8xl mb-2">{founder.emoji}</div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full" style={{ background: "#A15C7A", color: "white" }}>
                    <span className="font-body text-xs font-semibold">Founder</span>
                  </div>
                </div>
                <div className="md:col-span-2 space-y-5">
                  <div>
                    <h2 className="font-display text-5xl font-semibold mb-2" style={{ color: "#4B3B3B" }}>{founder.name}</h2>
                    <p className="font-body font-medium" style={{ color: "#A15C7A" }}>{founder.title}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {founder.credentials.map((c) => (
                      <span key={c} className="px-3 py-1.5 rounded-full font-body text-xs font-medium"
                        style={{ background: "rgba(161,92,122,0.09)", color: "#A15C7A", border: "1px solid rgba(161,92,122,0.15)" }}>{c}</span>
                    ))}
                  </div>
                  <p className="font-body text-base leading-relaxed" style={{ color: "#7C6A6A" }}>{founder.bio}</p>
                  <div className="flex gap-8">
                    <div>
                      <p className="font-display text-3xl font-bold" style={{ color: "#A15C7A" }}>{founder.experience}</p>
                      <p className="font-body text-xs" style={{ color: "#7C6A6A" }}>Experience</p>
                    </div>
                    <div>
                      <p className="font-display text-3xl font-bold" style={{ color: "#A15C7A" }}>{founder.mothers}</p>
                      <p className="font-body text-xs" style={{ color: "#7C6A6A" }}>Mothers Guided</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Expert grid */}
          <FadeUp className="mb-10">
            <h2 className="font-display text-4xl font-semibold text-center mb-12" style={{ color: "#4B3B3B" }}>
              Our Expert <span style={{ color: "#A15C7A" }}>Practitioners</span>
            </h2>
          </FadeUp>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m) => (
              <StaggerItem key={m.name}>
                <motion.div className="p-8 rounded-[24px] h-full flex flex-col"
                  style={{ background: "white", border: "1px solid rgba(233,216,211,0.6)", boxShadow: "0 4px 24px rgba(75,59,59,0.06)" }}
                  whileHover={{ y: -8, boxShadow: "0 24px 60px rgba(161,92,122,0.14)" }} transition={{ duration: 0.35 }}>
                  <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-6 mx-auto"
                    style={{ background: "rgba(161,92,122,0.08)", border: "1px solid rgba(161,92,122,0.15)" }}>
                    {m.emoji}
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-center mb-1" style={{ color: "#4B3B3B" }}>{m.name}</h3>
                  <p className="font-body text-sm text-center font-medium mb-4" style={{ color: "#A15C7A" }}>{m.title}</p>
                  <div className="flex flex-wrap gap-1.5 justify-center mb-5">
                    {m.credentials.map((c) => (
                      <span key={c} className="px-2.5 py-1 rounded-full font-body text-xs"
                        style={{ background: "rgba(161,92,122,0.07)", color: "#A15C7A" }}>{c}</span>
                    ))}
                  </div>
                  <p className="font-body text-sm leading-relaxed text-center flex-1" style={{ color: "#7C6A6A" }}>{m.bio}</p>
                  <div className="flex justify-center gap-8 mt-5 pt-5" style={{ borderTop: "1px solid rgba(233,216,211,0.6)" }}>
                    <div className="text-center">
                      <p className="font-display text-xl font-bold" style={{ color: "#A15C7A" }}>{m.exp}</p>
                      <p className="font-body text-xs" style={{ color: "#A89090" }}>Experience</p>
                    </div>
                    <div className="text-center">
                      <p className="font-display text-xl font-bold" style={{ color: "#A15C7A" }}>{m.mothers}</p>
                      <p className="font-body text-xs" style={{ color: "#A89090" }}>Mothers</p>
                    </div>
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
