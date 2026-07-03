import type { Metadata } from "next";
import ProgramsPageContent from "./ProgramsPageContent";

export const metadata: Metadata = {
  title: "Programs — Holistic Pregnancy Wellness Programs",
  description:
    "Explore Maatratva&apos;s comprehensive pregnancy wellness programs — from preconception to postpartum, blending Garbh Sanskar, Ayurveda, prenatal yoga, NLP, and modern science.",
};

export default function ProgramsPage() {
  return <ProgramsPageContent />;
}
