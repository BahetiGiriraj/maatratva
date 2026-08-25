"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { FadeUp } from "@/components/ui/motion";

const features = [
  {
    n: 1,
    emoji: "🥗",
    title: "Nutrition, Diet & Ayurveda",
    desc: "Balanced nutrition and Ayurvedic wellness guidance for every trimester.",
    group: "bottom",
  },
  {
    n: 2,
    emoji: "🕯️",
    title: "Guided Meditation",
    desc: "Calming practices to create emotional balance and mental clarity.",
    group: "mother",
  },
  {
    n: 3,
    emoji: "🧘‍♀️",
    title: "Prenatal Yoga",
    desc: "Gentle and safe movements to support strength and flexibility.",
    group: "mother",
  },
  {
    n: 4,
    emoji: "🧠",
    title: "NLP Techniques",
    desc: "Transform fears and limiting beliefs into confidence, calmness and positivity.",
    group: "mother",
  },
  {
    n: 5,
    emoji: "🔬",
    title: "Brain Development",
    desc: "Science-backed activities that support baby's sensory and neurological development.",
    group: "baby",
  },
  {
    n: 6,
    emoji: "🤰",
    title: "Garbha Sanskar",
    desc: "Conscious bonding and deep nurturing practices for the baby.",
    group: "baby",
  },
  {
    n: 7,
    emoji: "🧬",
    title: "Genetic Blueprint",
    desc: "Positive lifestyle practices that support baby's overall development.",
    group: "baby",
  },
];

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

// same light pink for all wedges, matching the site theme
function wedgeColor(_group: string, active: boolean) {
  return active ? "#F2C4D4" : "#FAE0E8";
}

export default function MaatratvaWaySection() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const handleInteraction = (index: number) => {
    setActiveFeature((prev) => (prev === index ? null : index));
  };

  const totalSegments = features.length;
  const segmentAngle = 360 / totalSegments;

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
            Care From <span style={{ color: "#6E1A34" }}>Womb</span> to{" "}
            <span style={{ color: "#D4AF37" }}>Wonder</span>
          </h2>

          <p
            className="font-body text-base leading-relaxed sm:text-lg"
            style={{ color: "#7C6A6A" }}
          >
            Carefully designed programs and practices to nurture your body,
            mind, and your baby&apos;s growth so you feel confident, calm and
            connected.
          </p>
        </FadeUp>

        <FadeUp>
          <div className="relative mx-auto h-[340px] w-[340px] max-w-full sm:h-[480px] sm:w-[480px] lg:h-[800px] lg:w-[800px]">
            <svg
              viewBox="0 0 800 800"
              className="absolute inset-0 h-full w-full select-none"
              aria-label="Maatratva wellness programs"
            >
              <defs>
                <path
                  id="motherArcPath"
                  d="M 258,460 A 148,148 0 0,1 258,340"
                />
                <path
                  id="babyArcPath"
                  d="M 542,340 A 148,148 0 0,1 542,460"
                />
              </defs>

              {/* ── WEDGES ── */}
              {features.map((feature, index) => {
                const startAngle  = -90 + index * segmentAngle + 2;
                const endAngle    = -90 + (index + 1) * segmentAngle - 2;
                const middleAngle = (startAngle + endAngle) / 2;
                const labelPoint  = polarPoint(285, middleAngle);
                const isActive    = activeFeature === index;

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
                      fill={wedgeColor(feature.group, isActive)}
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
                            className="font-body text-[10px] leading-tight sm:text-xs sm:leading-relaxed"
                            style={{ color: "#4C6663" }}
                          >
                            {feature.desc}
                          </p>
                        ) : (
                          <h3
                            className="font-display text-xs font-semibold leading-tight sm:text-base lg:text-xl"
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

              {/* ── INNER CIRCLE ── */}
              <circle
                cx="400"
                cy="400"
                r="178"
                fill="white"
                stroke="rgba(110,26,52,0.35)"
                strokeWidth="2"
                strokeDasharray="5 5"
              />

              {/* ── "For Mother" curved text — left side ── */}
              <text
                fontSize="15"
                fontWeight="700"
                fill="#6E1A34"
                fontFamily="sans-serif"
                letterSpacing="2"
              >
                <textPath href="#motherArcPath" startOffset="10%">
                  FOR MOTHER
                </textPath>
              </text>

              {/* vertical divider */}
              <line
                x1="400" y1="235"
                x2="400" y2="565"
                stroke="rgba(110,26,52,0.2)"
                strokeWidth="1"
                strokeDasharray="4 3"
              />

              {/* ── "For Baby" curved text — right side ── */}
              <text
                fontSize="15"
                fontWeight="700"
                fill="#45B7AE"
                fontFamily="sans-serif"
                letterSpacing="2"
              >
                <textPath href="#babyArcPath" startOffset="10%">
                  FOR BABY
                </textPath>
              </text>
            </svg>

            {/* ── Centre mother image (desktop only) ── */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 items-center justify-center lg:flex">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
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
            className="font-body text-xs italic sm:text-sm"
            style={{ color: "#6E1A34" }}
          >
            Hover or tap on a section to read more.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
