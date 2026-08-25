"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { FadeUp } from "@/components/ui/motion";

const credentials = [
   "Pregnancy Wellness Coach",
  "Garbh Sanskar Practitioner & Womb Designer",
 
  "NLP Certified Expert",
];

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
            The Heart Behind{" "}
            <span style={{ color: "#6E1A34" }}>Maatratva</span>
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
          <motion.article
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="rounded-[32px] border p-6 md:p-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.72), rgba(247,235,237,0.72))",
              borderColor: "rgba(110, 26, 52, 0.18)",
              boxShadow: "0 14px 50px rgba(110, 26, 52, 0.09)",
            }}
          >
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(280px,0.8fr)_minmax(0,1.7fr)] lg:gap-12">
              {/* Photo */}
              <div className="relative mx-auto w-full max-w-[430px]">
                <div className="relative aspect-[4/4.15] overflow-hidden rounded-[28px]">
                  <Image
                    src="/dheera-somani.jpg"
                    alt="Dheera Somani — Founder and Mentor"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover object-top"
                  />
                </div>

                <span
                  className="absolute bottom-[-18px] left-1/2 -translate-x-1/2 rounded-full px-6 py-3 font-body text-sm font-semibold text-white shadow-lg"
                  style={{ background: "#6E1A34" }}
                >
                  Founder
                </span>
              </div>

              {/* Details */}
              <div className="pt-5 lg:pt-0">
                <h3
                  className="font-display text-4xl font-semibold leading-tight md:text-5xl"
                  style={{ color: "#4B3B3B" }}
                >
                  Dheera Somani
                </h3>

                <p
                  className="mt-3 font-body text-lg font-semibold"
                  style={{ color: "#B16889" }}
                >
                  Founder &amp; Mentor
                </p>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {credentials.map((credential) => (
                    <span
                      key={credential}
                      className="rounded-full border px-4 py-2 font-body text-sm font-medium"
                      style={{
                        color: "#B16889",
                        background: "rgba(110, 26, 52, 0.07)",
                        borderColor: "rgba(110, 26, 52, 0.18)",
                      }}
                    >
                      {credential}
                    </span>
                  ))}
                </div>

                <p
                  className="mt-7 max-w-4xl font-body text-base leading-relaxed md:text-lg"
                  style={{ color: "#7C6A6A" }}
                >
                  With over a decade of experience, Dheera has guided more than
                  2,000 mothers through transformative pregnancy journeys. Her
                  unique approach integrates ancient Indian wisdom with modern
                  neuroscience and evidence-based wellness practices. She
                  believes deeply that every mother has the capacity for a
                  profound, joyful pregnancy and dedicates herself to unlocking
                  that potential.
                </p>

                <div className="mt-8 flex items-start gap-12">
                  <div>
                    <p
                      className="font-display text-3xl font-semibold"
                      style={{ color: "#6E1A34" }}
                    >
                      10+ Years
                    </p>
                    <p
                      className="mt-1 font-body text-sm"
                      style={{ color: "#7C6A6A" }}
                    >
                      Experience
                    </p>
                  </div>

                  <div>
                    <p
                      className="font-display text-3xl font-semibold"
                      style={{ color: "#6E1A34" }}
                    >
                      2000+
                    </p>
                    <p
                      className="mt-1 font-body text-sm"
                      style={{ color: "#7C6A6A" }}
                    >
                      Mothers Guided
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          <div className="mt-10 text-center">
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