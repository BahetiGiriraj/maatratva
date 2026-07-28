"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { FadeUp } from "@/components/ui/motion";

const features = [
  {
    emoji: "🤰",
    title: "Garbha Sanskar",
    desc: "Music, mantras, stories and positive practices to nurture your baby before birth.",
  },
  {
    emoji: "🥗",
    title: "Nutrition, Diet & Ayurveda",
    desc: "Balanced nutrition and Ayurvedic wellness guidance for every trimester.",
  },
  {
    emoji: "🧠",
    title: "NLP Techniques",
    desc: "Transform fears and limiting beliefs into confidence, calm and positivity.",
  },
  {
    emoji: "🧬",
    title: "Genetic Attraction",
    desc: "Positive lifestyle practices that support your baby's healthy development.",
  },
  {
    emoji: "🧘‍♀️",
    title: "Prenatal Yoga",
    desc: "Gentle movement, strength and flexibility designed for pregnancy.",
  },
  {
    emoji: "🕯️",
    title: "Guided Meditation",
    desc: "Calming practices to create emotional balance and a deep bond with your baby.",
  },
  {
    emoji: "🧠",
    title: "Brain Development",
    desc: "Science-backed activities that support sensory and neurological development.",
  },
];

type Feature = (typeof features)[number];

const CENTER = 400;
const OUTER_RADIUS = 370;
const INNER_RADIUS = 190;

function polarPoint(radius: number, angle: number) {
  const radians = (angle * Math.PI) / 180;

  return {
    x: CENTER + radius * Math.cos(radians),
    y: CENTER + radius * Math.sin(radians),
  };
}

function wedgePath(startAngle: number, endAngle: number) {
  const outerStart = polarPoint(OUTER_RADIUS, startAngle);
  const outerEnd = polarPoint(OUTER_RADIUS, endAngle);
  const innerEnd = polarPoint(INNER_RADIUS, endAngle);
  const innerStart = polarPoint(INNER_RADIUS, startAngle);

  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${OUTER_RADIUS} ${OUTER_RADIUS} 0 0 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${INNER_RADIUS} ${INNER_RADIUS} 0 0 0 ${innerStart.x} ${innerStart.y}`,
    "Z",
  ].join(" ");
}

export default function MaatratvaWaySection() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const handleInteraction = (index: number) => {
    setActiveFeature((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="relative overflow-hidden section-padding"
      style={{ background: "#FAF7F4" }}
    >
      <div className="container-wide relative z-10">
        <FadeUp className="mx-auto mb-10 max-w-3xl text-center">
          <SectionLabel centered>The Maatratva Way</SectionLabel>

          <h2
            className="mb-5 font-display text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl"
            style={{ color: "#4B3B3B" }}
          >
            Care From <span style={{ color: "#A15C7A" }}>Womb</span> to{" "}
            <span style={{ color: "#D4AF37" }}>Wonder</span>
          </h2>

          <p
            className="font-body text-base sm:text-lg leading-relaxed"
            style={{ color: "#7C6A6A" }}
          >
            Carefully designed programs and practices to nurture your body,
            mind, and your baby&apos;s growth so you feel confident, calm and
            connected.
          </p>
        </FadeUp>

        {/* Scaled Circular Wheel for Desktop, Tablet, and Mobile */}
        <FadeUp>
          <div className="relative mx-auto h-[340px] w-[340px] sm:h-[480px] sm:w-[480px] lg:h-[800px] lg:w-[800px] max-w-full">
            <svg
              viewBox="0 0 800 800"
              className="absolute inset-0 h-full w-full select-none"
              aria-label="Maatratva wellness programs"
            >
              {features.map((feature, index) => {
                const totalSegments = features.length;
                const segmentAngle = 360 / totalSegments;
                const startAngle = -90 + index * segmentAngle + 2;
                const endAngle = -90 + (index + 1) * segmentAngle - 2;
                const middleAngle = (startAngle + endAngle) / 2;
                const labelPoint = polarPoint(285, middleAngle);
                const isActive = activeFeature === index;

                return (
                  <g
                    key={feature.title}
                    onMouseEnter={() => setActiveFeature(index)}
                    onMouseLeave={() => setActiveFeature(null)}
                    onClick={() => handleInteraction(index)}
                    className="cursor-pointer"
                  >
                    <path
                      d={wedgePath(startAngle, endAngle)}
                      fill={isActive ? "#CBEAE7" : "#DDF1EF"}
                      stroke="#FAF7F4"
                      strokeWidth="8"
                      className="transition-all duration-300"
                    />

                    <foreignObject
                      x={labelPoint.x - 88}
                      y={labelPoint.y - 62}
                      width="176"
                      height="124"
                      pointerEvents="none"
                    >
                      <div className="flex h-full flex-col items-center justify-center px-1 text-center">
                        <span className="mb-1 text-xl sm:text-2xl lg:text-3xl">
                          {feature.emoji}
                        </span>

                        {isActive ? (
                          <p
                            className="font-body text-[10px] sm:text-xs leading-tight sm:leading-relaxed"
                            style={{ color: "#4C6663" }}
                          >
                            {feature.desc}
                          </p>
                        ) : (
                          <h3
                            className="font-display text-xs sm:text-base lg:text-xl font-semibold leading-tight"
                            style={{ color: "#171717" }}
                          >
                            {feature.title}
                          </h3>
                        )}
                      </div>
                    </foreignObject>
                  </g>
                );
              })}

              <circle
                cx="400"
                cy="400"
                r="178"
                fill="white"
                stroke="#45B7AE"
                strokeWidth="2"
                strokeDasharray="5 5"
              />
            </svg>

            {/* Centre image — Desktop & Laptop view ONLY */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden lg:flex h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/way-removebg.png"
                  alt="Maatratva pregnancy wellness"
                  width={290}
                  height={380}
                  priority
                  className="object-contain drop-shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </FadeUp>

        <FadeUp className="mt-7 text-center">
          <p
            className="font-body text-xs sm:text-sm italic"
            style={{ color: "#A15C7A" }}
          >
            Hover or tap on a section to read more.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}