
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";

type Expert = {
  name: string;
  title: string;
  badge?: string;
  image?: string;
};

export const homeExperts: Expert[] = [
  {
    name: "Dheera Somani",
    title: "Garbha Sanskar, Pregnancy Wellness Coach, Womb Designer & NLP Certified Expert",
    badge: "Founder and Mentor",
    image: "/dheera-somani.jpg",
  },
  {
    name: "Dt. Heena Kaur Bedi",
    title: "Pregnancy Nutrition Expert",
    image: "/team-heena-bedi.jpeg",
  },
  {
    name: "Dr. Shruti Kakani",
    title: "Homeopathy Expert (B.H.M.S.)",
    image: "/team-shruti-kakani.jpeg",
  },
  {
    name: "Dr. Shyam Bihari Gautam",
    title: "Ayurveda Ratna & Vedic Astrology Expert",
    image: "/team-shyam-gautam.jpeg",
  },
];

export const aboutExperts: Expert[] = [
  {
    name: "Dr. Sheela Badoniya",
    title: "Psychologist & Healing Therapist",
  },
  {
    name: "Dr. Saraswathi Bukka",
    title: "High-Risk Pregnancy & Ayurveda Expert",
  },
  {
    name: "Dt. Heena Kaur Bedi",
    title: "Pregnancy Nutrition Expert",
  },
  {
    name: "Dr. Shruti Kakani",
    title: "Homoeopathy Expert (B.H.M.S.)",
  },
  {
    name: "Dr. Ritima Gupta",
    title: "Dentist",
  },
  {
    name: "Shilpa Goyal",
    title: "Yoga & Wellness Therapy Expert",
  },
];

function ExpertPhoto({ expert }: { expert: Expert }) {
  const badge = expert.badge ?? "Expert";

  if (expert.image) {
    return (
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px]">
        <Image
          src={expert.image}
          alt={`${expert.name} — ${badge}`}
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-top"
        />

        <span
          className="absolute bottom-0 left-0 inline-flex items-center gap-1.5 rounded-tr-2xl bg-white px-3 py-2 font-body text-sm font-semibold"
          style={{ color: "#4B3B3B" }}
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-white">
            <Check size={13} strokeWidth={3} />
          </span>
          {badge}
        </span>
      </div>
    );
  }

  return (
    <div
      aria-label={`${expert.name} photo placeholder`}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px]"
      style={{
        background:
          "linear-gradient(145deg, #ead7df 0%, #f7efeb 52%, #e7d6c9 100%)",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-20 w-20 rounded-full border border-white/70 bg-white/35" />
      </div>

      <span
        className="absolute bottom-0 left-0 inline-flex items-center gap-1.5 rounded-tr-2xl bg-white px-3 py-2 font-body text-sm font-semibold"
        style={{ color: "#4B3B3B" }}
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-white">
          <Check size={13} strokeWidth={3} />
        </span>
        {badge}
      </span>
    </div>
  );
}

export function ExpertCards({ experts }: { experts: Expert[] }) {
  return (
    <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {experts.map((expert) => (
        <StaggerItem key={expert.name}>
          <motion.article
            className="group"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.22 }}
          >
            <ExpertPhoto expert={expert} />

            <h3
              className="mt-4 font-display text-2xl font-semibold leading-tight"
              style={{ color: "#231f20" }}
            >
              {expert.name}
            </h3>

            <p
              className="mt-2 font-body text-base leading-snug"
              style={{ color: "#6f6a6a" }}
            >
              {expert.title}
            </p>
          </motion.article>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

export default function TeamSection() {
  return (
    <section className="section-padding" style={{ background: "#FAF7F4" }}>
      <div className="container-wide">
        <FadeUp className="mx-auto mb-14 max-w-2xl text-center">
          <SectionLabel centered>Meet Our Team</SectionLabel>

          <h2
            className="mb-4 font-display text-5xl font-semibold leading-[1.1] md:text-6xl"
            style={{ color: "#4B3B3B" }}
          >
            The Hands Behind{" "}
            <span style={{ color: "#A15C7A" }}>Your Care</span>
          </h2>

          <p
            className="font-body text-lg leading-relaxed"
            style={{ color: "#7C6A6A" }}
          >
            A team of dedicated experts who bring expertise, compassion and
            passion to every mother&apos;s journey.
          </p>
        </FadeUp>

        <FadeUp>
          <ExpertCards experts={homeExperts} />

          <div className="mt-8 text-center">
            <Link
              href="/about"
              className="btn-primary group inline-flex px-6 py-2.5 text-sm"
            >
              Meet the Full Team
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
