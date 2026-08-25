"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import { StaggerContainer, StaggerItem, FadeUp } from "@/components/ui/motion";

const cards = [
  {
    image: "/card1.png",
    title: "Pregnancy Wellness",
    description: "Prenatal yoga, Balanced nutrition, and evidence based guidance for a healthy, joyful pregnancy.",
  },
  {
    image: "/card2.png",
    title: "Garbh Sanskar",
    description: "Ancient science of prenatal education that shapes your baby's brain and emotional intelligence from the womb.",
  },
  {
    image: "/card3.png",
    title: "Mental Wellness",
    description: "NLP mind programming, meditation, and emotional support to help you navigate pregnancy with calm and confidence.",
  },
  {
    image: "/card4.png",
    title: "Womb Design",
    description: "Creating the perfect physical and emotional environment for your baby's development  a blueprint for lifelong wellbeing.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="section-padding" style={{ background: "#FAF7F4" }}>
      <div className="container-wide">

        {/* Header */}
        <FadeUp className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel centered>The Maatratva Experience</SectionLabel>
          <h2
            className="font-display text-5xl md:text-6xl font-semibold leading-[1.1] mb-6"
            style={{ color: "#4B3B3B" }}
          >
            Care for Mother.{" "}
            <span style={{ color: "#6E1A34" }}>Connection</span>{" "}
            for Baby.
          </h2>
          <p className="font-body text-lg leading-relaxed" style={{ color: "#7C6A6A" }}>
            Supporting mothers with knowledge, connection and mindful preparation for the most transformative journey of their lives.
          </p>
        </FadeUp>

        {/* Cards */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <StaggerItem key={card.title}>
              <motion.div
                className="group relative rounded-[24px] overflow-hidden cursor-pointer"
                style={{
                  aspectRatio: "3/4",
                  boxShadow: "0 8px 32px rgba(75,59,59,0.12)",
                }}
                whileHover={{ y: -8, boxShadow: "0 24px 60px rgba(110,26,52,0.22)" }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Background image */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                  style={{ objectPosition: "center" }}
                />

                {/* Dark gradient overlay — always visible at bottom, stronger on hover */}
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(to top, rgba(30,15,20,0.82) 0%, rgba(30,15,20,0.35) 50%, rgba(30,15,20,0.08) 100%)",
                  }}
                />

                {/* Text — pinned to bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3
                    className="font-display text-2xl font-semibold leading-tight mb-2"
                    style={{ color: "white" }}
                  >
                    {card.title}
                  </h3>
                  {/* Description slides up on hover */}
                  <div className="overflow-hidden">
                    <motion.p
                      className="font-body text-sm leading-relaxed"
                      style={{ color: "rgba(233,216,211,0.85)" }}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      {card.description}
                    </motion.p>
                  </div>

                  {/* Thin mauve accent */}
                  <div
                    className="mt-4 h-0.5 w-10 rounded-full transition-all duration-500 group-hover:w-full"
                    style={{ background: "#6E1A34" }}
                  />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
