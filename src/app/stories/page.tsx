import type { Metadata } from "next";
import StoriesPageContent from "./StoriesPageContent";

export const metadata: Metadata = {
  title: "Mother Stories — Real Journeys, Real Transformations",
  description:
    "Read inspiring stories from mothers who transformed their pregnancy experience with Maatratva&apos;s holistic wellness programs.",
};

export default function StoriesPage() {
  return <StoriesPageContent />;
}
