import type { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About Us — Our Mission & Story",
  description:
    "Learn about Maatratva&apos;s mission, philosophy and the team of dedicated experts behind this holistic pregnancy wellness platform.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
