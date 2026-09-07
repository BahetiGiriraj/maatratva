"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";

const values = [
  {
    emoji: "❤️",
    title: "Deep Compassion",
    desc: "We meet every mother exactly where she is  without judgment, with complete presence and care.",
  },
  {
    emoji: "✨",
    title: "Holistic Excellence",
    desc: "We integrate the best of ancient wisdom and modern science to deliver genuinely transformative care.",
  },
  {
    emoji: "🌿",
    title: "Authentic Wellness",
    desc: "No shortcuts, no gimmicks. Only genuine, evidence-based practices that truly support mother and baby.",
  },
  {
    emoji: "🧠",
    title: "Empowered Mothers",
    desc: "We don't just support we educate and empower mothers to become confident, informed and joyful.",
  },
  {
    emoji: "🤝",
    title: "Community First",
    desc: "No mother walks alone. We build sisterhood so every woman feels seen, heard and celebrated.",
  },
  {
    emoji: "🌱",
    title: "Continuous Growth",
    desc: "We evolve constantly, learning from the latest research and from the mothers we serve.",
  },
];

const milestones = [
  {
    year: "2015",
    event: "Dheera Somani begins her Garbh Sanskar training in Bangalore",
  },
  {
    year: "2017",
    event: "First Maatratva workshop  12 mothers, one room, infinite love",
  },
  {
    year: "2019",
    event: "NLP certification and integration into prenatal wellness programs",
  },
  {
    year: "2021",
    event: "Online programs launched  500+ mothers supported across India",
  },
  {
    year: "2023",
    event: "Flagship Signature Program launched with full wellness ecosystem",
  },
  {
    year: "2025",
    event: "2000+ mothers supported. International community launched globally",
  },
];

const founder = {
  name: "Dheera Somani",
  title: "Founder & Mentor",
  credentials: [
    "Pregnancy Wellness Coach",
  "Garbh Sanskar Practitioner & Womb Designer",

  "NLP Certified Expert",
  ],
  bio: "With over a decade of experience, Dheera has guided more than 2,000 mothers through transformative pregnancy journeys. Her unique approach integrates ancient Indian wisdom with modern neuroscience and evidence based wellness practices. She believes deeply that every mother has the capacity for a profound, joyful pregnancy  and she dedicates herself to unlocking that potential.",
  experience: "10+ Years",
  mothers: "2000+",
};


const team = [
  {
    name: "Dr. Shyam Bihari Gautam",
    title: "Ayurveda Ratna & Vedic Astrology Expert",
    photo: "/team-shyam-gautam.jpeg",
    photoPosition: "center center",
  },
  {
  name: "Dr. Paridhi Jain",
  title: "Physiotherapist (OBS & Gynaec)",
  photo: "/team-paridhi-jain.jpeg",
  photoPosition: "center 35%",
},
{
    name: "Dr. Yashvi Joshi",
    title: "Lactation & Childbirth Preparation Expert",
    photo: "/team-yashvi-joshi.jpeg",
    photoPosition: "center 42%",
  },
  
  {
    name: "Dr. Saraswathi Bukka",
    title: "High-Risk Pregnancy & Ayurveda Expert",
    photo: "/team-saraswathi-bukka.jpeg",
    photoPosition: "center 15%",
  },
  {
  name: "Dt. Heena Kaur Bedi",
  title: "Pregnancy Nutrition Expert",
  photo: "/team-heena-bedi.jpeg",
  photoPosition: "center 15%",
},
  
  
  {
  name: "Dr. Shruti Kakani",
  title: "Homeopathy Expert (B.H.M.S.)",
  photo: "/team-shruti-kakani.jpeg",
  photoPosition: "center 25%",
},
  {
    name: "Dr. Ritima Gupta",
    title: "Dental Health Expert",
    photo: "/team-ritima-gupta.jpeg",
    photoPosition: "center center",
  },
  {
    name: "Shilpa Goyal",
    title: "Yoga & Wellness Therapy Expert",
    photo: "/team-shilpa-goyal.jpeg",
    photoPosition: "center center",
  },
  {
  name: "Dr. Sheela Badoniya",
  title: "Psychologist & Healing Therapist",
  photo: "/team-sheela-badoniya.jpeg",
  photoPosition: "center 38%",
  photoScale: 0.9,
},
];

export default function AboutPageContent() {
  return (
    <div className="pt-24" style={{ background: "#FAF7F4" }}>
      {/* ── MISSION ── */}
      <section className="section-padding" style={{ background: "#FAF7F4" }}>
        <div className="container-wide">
          <FadeUp className="mx-auto max-w-3xl space-y-6 text-center">
            <SectionLabel centered>Our Mission</SectionLabel>

            <h2
              className="font-display text-5xl font-semibold leading-[1.1]"
              style={{ color: "#4B3B3B" }}
            >
              To transform how the world experiences{" "}
              <span style={{ color: "#642244" }}>pregnancy</span>
            </h2>

            <p
              className="font-body text-lg leading-relaxed"
              style={{ color: "#7C6A6A" }}
            >
              We believe every mother deserves to feel confident, supported and
              deeply connected to the miraculous journey she is on. Pregnancy
              is not a medical condition to be managed  it is a sacred,
              transformative experience to be celebrated.
            </p>

            <p
              className="font-body text-base leading-relaxed"
              style={{ color: "#7C6A6A" }}
            >
              Maatratva bridges the gap between ancient Indian wisdom  Garbh
              Sanskar, Ayurveda, yoga  and modern evidence-based care,
              creating a comprehensive wellness ecosystem unlike anything
              available today.
            </p>

            <Link href="/programs" className="btn-primary inline-flex group">
              Explore Programs
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section-padding" style={{ background: "#F4EBE8" }}>
        <div className="container-wide">
          <FadeUp className="mx-auto mb-16 max-w-2xl text-center">
            <SectionLabel centered>What We Stand For</SectionLabel>

            <h2
              className="font-display text-5xl font-semibold"
              style={{ color: "#4B3B3B" }}
            >
              Our Core <span style={{ color: "#642244" }}>Values</span>
            </h2>
          </FadeUp>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <motion.div
                  className="h-full rounded-[24px] p-8"
                  style={{
                    background: "white",
                    border: "1px solid rgba(233,216,211,0.6)",
                  }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-5 text-4xl">{value.emoji}</div>

                  <h3
                    className="mb-3 font-display text-2xl font-semibold"
                    style={{ color: "#4B3B3B" }}
                  >
                    {value.title}
                  </h3>

                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: "#7C6A6A" }}
                  >
                    {value.desc}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

       {/* ── FOUNDER ── */}
      <section className="section-padding" style={{ background: "#FAF7F4" }}>
        <div className="container-wide">
          <FadeUp className="mx-auto mb-16 max-w-2xl text-center">
            <SectionLabel centered>Meet Our Founder</SectionLabel>

            <h2
              className="font-display text-5xl font-semibold"
              style={{ color: "#4B3B3B" }}
            >
              The Hands Behind{" "}
              <span style={{ color: "#642244" }}>Your Care</span>
            </h2>
          </FadeUp>

          <FadeUp className="mb-16">
            <div
              className="relative overflow-hidden rounded-[36px] p-10 md:p-14"
              style={{
                background:
                  "linear-gradient(135deg,rgba(100,34,68,0.07) 0%,rgba(233,216,211,0.5) 100%)",
                border: "1.5px solid rgba(100,34,68,0.2)",
                boxShadow: "0 20px 80px rgba(100,34,68,0.12)",
              }}
            >
              <div className="grid items-center gap-10 md:grid-cols-3">
                <div className="relative">
                  <div
                    className="relative aspect-square w-full overflow-hidden rounded-[28px]"
                    style={{
                      boxShadow: "0 20px 60px rgba(100,34,68,0.25)",
                    }}
                  >
                    <Image
                      src="/dheera-somani.jpg"
                      alt="Dheera Somani — Founder, Maatratva"
                      fill
                      priority
                      sizes="400px"
                      className="object-cover object-top"
                    />
                  </div>

                  
                </div>

                <div className="space-y-5 md:col-span-2">
                  <div>
                    <h3
                      className="mb-2 font-display text-5xl font-semibold"
                      style={{ color: "#4B3B3B" }}
                    >
                      {founder.name}
                    </h3>

                    <p
                      className="font-body font-medium"
                      style={{ color: "#642244" }}
                    >
                      {founder.title}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {founder.credentials.map((credential) => (
                      <span
                        key={credential}
                        className="rounded-full px-3 py-1.5 font-body text-xs font-medium"
                        style={{
                          background: "rgba(100,34,68,0.09)",
                          color: "#642244",
                          border: "1px solid rgba(100,34,68,0.15)",
                        }}
                      >
                        {credential}
                      </span>
                    ))}
                  </div>

                  <div
                    className="space-y-4 border-l-2 pl-5"
                    style={{ borderColor: "rgba(100,34,68,0.35)" }}
                  >
                    <p
                      className="font-body text-base leading-relaxed"
                      style={{ color: "#7C6A6A" }}
                    >
                      Maatratva was born from a deeply personal journey, a
                      journey that transformed my understanding of pregnancy,
                      motherhood and conscious nurturing.
                    </p>

                    <p
                      className="font-body text-base leading-relaxed"
                      style={{ color: "#7C6A6A" }}
                    >
                      During my own pregnancy, I discovered that a mother’s
                      inner world shapes the life growing within her. This
                      experience led me to the timeless wisdom of Garbha Sanskar
                      and inspired a vision to create a space where mothers feel
                      emotionally supported, spiritually connected and
                      holistically guided.
                    </p>

                    <p
                      className="font-body text-base leading-relaxed"
                      style={{ color: "#7C6A6A" }}
                    >
                      At Maatratva, we integrate ancient practices with modern
                      understanding to help mothers experience a calm, empowered
                      and meaningful pregnancy journey.
                    </p>

                    <p
                      className="font-display text-xl italic leading-relaxed"
                      style={{ color: "#642244" }}
                    >
                      Because motherhood is not simply about giving birth, it is
                      about nurturing life with awareness, love and intention.
                    </p>
                  </div>

                  <p
                    className="font-body text-sm font-semibold"
                    style={{ color: "#4B3B3B" }}
                  >
                    — Dheera Somani
                  </p>

                  <div className="flex gap-8">
                    <div>
                      <p
                        className="font-display text-3xl font-bold"
                        style={{ color: "#642244" }}
                      >
                        {founder.experience}
                      </p>
                      <p
                        className="font-body text-xs"
                        style={{ color: "#7C6A6A" }}
                      >
                        Experience
                      </p>
                    </div>

                    <div>
                      <p
                        className="font-display text-3xl font-bold"
                        style={{ color: "#642244" }}
                      >
                        {founder.mothers}
                      </p>
                      <p
                        className="font-body text-xs"
                        style={{ color: "#7C6A6A" }}
                      >
                        Mothers Guided
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* ── EXPERT PRACTITIONERS ── */}
          <FadeUp className="mb-12 text-center">
            <h3
              className="font-display text-4xl font-semibold"
              style={{ color: "#4B3B3B" }}
            >
              Our Expert{" "}
              <span style={{ color: "#642244" }}>Team</span>
            </h3>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <motion.article
                  className="group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.22 }}
                >
                  <div
                    className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px]"
                    style={{
                      boxShadow: "0 8px 32px rgba(100,34,68,0.15)",
                    }}
                  >
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover"
                      style={{
                        objectPosition: member.photoPosition,
                        transform: `scale(${member.photoScale ?? 1})`,
                      }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />

                    <div
                      className="pointer-events-none absolute bottom-0 left-0 right-0 h-16"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(75,59,59,0.45), transparent)",
                      }}
                    />
                  </div>

                  <h4
                    className="mt-4 font-display text-2xl font-semibold leading-tight"
                    style={{ color: "#231f20" }}
                  >
                    {member.name}
                  </h4>

                  <p
                    className="mt-2 font-body text-base leading-snug"
                    style={{ color: "#6f6a6a" }}
                  >
                    {member.title}
                  </p>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section-padding" style={{ background: "#F4EBE8" }}>
        <div className="container-wide">
          <FadeUp className="mx-auto mb-16 max-w-2xl text-center">
            <SectionLabel centered>Our Journey</SectionLabel>

            <h2
              className="font-display text-5xl font-semibold"
              style={{ color: "#4B3B3B" }}
            >
              From Seed to <span style={{ color: "#642244" }}>Forest</span>
            </h2>
          </FadeUp>

          <div className="mx-auto max-w-2xl">
            {milestones.map((milestone, index) => (
              <FadeUp key={milestone.year} delay={index * 0.1}>
                <div className="mb-8 flex gap-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-body text-xs font-bold text-white"
                      style={{ background: "#642244" }}
                    >
                      {milestone.year.slice(2)}
                    </div>

                    {index < milestones.length - 1 && (
                      <div
                        className="mt-2 w-px flex-1"
                        style={{ background: "rgba(100,34,68,0.2)" }}
                      />
                    )}
                  </div>

                  <div className="pb-8">
                    <p
                      className="mb-1 font-body text-xs font-semibold uppercase tracking-widest"
                      style={{ color: "#642244" }}
                    >
                      {milestone.year}
                    </p>

                    <p
                      className="font-display text-xl font-medium"
                      style={{ color: "#4B3B3B" }}
                    >
                      {milestone.event}
                    </p>
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