import type { Metadata } from "next";
import TeamPageContent from "./TeamPageContent";

export const metadata: Metadata = {
  title: "Meet Our Team — Expert Practitioners",
  description:
    "Meet the dedicated team of certified experts at Maatratva — Garbh Sanskar practitioners, yoga therapists, Ayurvedic nutritionists, and wellness coaches.",
};

export default function TeamPage() {
  return <TeamPageContent />;
}
