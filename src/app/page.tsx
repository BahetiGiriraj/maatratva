import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import ChallengesSection from "@/components/home/ChallengesSection";
import MaatratvaWaySection from "@/components/home/MaatratvaWaySection";
import ProgramSection from "@/components/home/ProgramSection";
import TeamSection from "@/components/home/TeamSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";

export const metadata: Metadata = {
  title: "Maatratva — From Womb to Wonder | Holistic Pregnancy Wellness",
  description:
    "Pregnancy care integrating physical and emotional wellness, Garbh Sanskar, Ayurveda and modern scientific guidance — from planning to pregnancy and beyond.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <ChallengesSection />
      <MaatratvaWaySection />
      <ProgramSection />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
