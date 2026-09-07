"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const videoTestimonials = [
  {
    id: "PUqIxnrKxGc",
    name: "Amisha Chandak",
    location: "Indore, India",
    label: "Mother Story",
  },
  {
    id: "OCLb23Co8BI",
    name: "Palak Mahajan",
    location: "Khargon, India",
    label: "Mother Story",
  },
  {
    id: "P7-iCMfOOCk",
    name: "Shraddha Surendra",
    location: "Dubai, UAE",
    label: "Mother Story",
  },
];

export default function VideoTestimonialsSection() {
  return (
    <section className="section-padding relative overflow-hidden" style={{ background: "#FDF6F3" }}>
      {/* Soft bg decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(100,34,68,0.12) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(201,160,77,0.1) 0%, transparent 70%)" }}
        />
      </div>

      <div className="container-wide relative z-10">
        {/* Heading */}
        <FadeUp className="text-center mb-14">
          <SectionLabel centered>Real Journeys</SectionLabel>
          <h2
            className="font-display text-5xl md:text-6xl font-semibold leading-[1.1] mt-4 mb-5"
            style={{ color: "#20100E" }}
          >
            Mothers Who{" "}
            <span style={{ color: "#642244" }}>Transformed</span>
          </h2>
          <p
            className="font-display text-xl font-light italic"
            style={{ color: "#A54860" }}
          >
            Hear it in their own words.
          </p>
        </FadeUp>

        {/* Video cards */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-7 max-w-4xl mx-auto">
          {videoTestimonials.map((v) => (
            <StaggerItem key={v.id}>
              <motion.div
                className="flex flex-col overflow-hidden rounded-[24px]"
                style={{
                  background: "white",
                  border: "1px solid #E8C6C6",
                  boxShadow: "0 8px 40px rgba(100,34,68,0.10)",
                }}
                whileHover={{ y: -6, boxShadow: "0 16px 50px rgba(100,34,68,0.18)" }}
                transition={{ duration: 0.25 }}
              >
                {/* Video — 9:16 short */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "9/16" }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1&showinfo=0`}
                    title={`${v.name} testimonial`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    style={{ border: "none" }}
                  />
                </div>

                {/* Info */}
                <div className="px-5 py-4">
                  {/* Label pill */}
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full mb-3"
                    style={{
                      background: "rgba(100,34,68,0.08)",
                      color: "#642244",
                      border: "1px solid rgba(100,34,68,0.15)",
                    }}
                  >
                    <Play size={10} fill="#642244" />
                    {v.label}
                  </span>
                  <p className="font-display text-xl font-semibold leading-tight" style={{ color: "#20100E" }}>
                    {v.name}
                  </p>
                  <p className="font-body text-xs mt-1" style={{ color: "#B47C6B" }}>
                    {v.location}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeUp className="mt-12 text-center">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 rounded-full font-body text-sm font-semibold px-8 py-3.5 text-white transition-all duration-300 group"
            style={{
              backgroundColor: "#642244",
              boxShadow: "0 4px 20px rgba(100,34,68,0.30)",
            }}
          >
            Explore All Mother Stories
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
