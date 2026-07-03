import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Book Free Session — Contact Maatratva",
  description:
    "Book your free 30-minute discovery session with Maatratva. Begin your holistic pregnancy wellness journey today.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
