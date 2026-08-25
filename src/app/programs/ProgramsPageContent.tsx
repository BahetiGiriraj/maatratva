"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Star } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";

// ── DATA ─────────────────────────────────────────────────────────────────────

const plans = [
  {
    id: "bloom",
    name: "Bloom",
    price: "₹1,999",
    duration: "1 Month Program",
    tagline: "Your first step into mindful pregnancy",
    highlight: false,
    badge: "",
    cta: "Begin with Bloom",
    features: [
      "Prenatal Yoga & Exercise",
      "Mindfulness Practices",
      "Garbhsanskar & Womb Wellbeing",
      "4 Weekly Live Mentor Sessions",
      "Pregnancy Diet Plan",
      "1 Expert-Guided Session",
      "1 Month Bonus Access",
    ],
    included: [],
  },
  {
    id: "nurture",
    name: "Nurture",
    price: "₹5,499",
    duration: "1 Trimester Program",
    tagline: "Deeper care for a transformative trimester",
    highlight: true,
    badge: "Most Popular",
    cta: "Choose Nurture",
    features: [
      "Pregnancy Yoga & Exercise",
      "Mindfulness Practices",
      "Garbhsanskar & Womb Wellbeing",
      "4 Weekly Live Mentor Sessions",
      "Personalized Diet Plan",
      "3 Expert-Guided Sessions",
      "Birth Preparation Program (Only for 3rd Trimester)",
      "3 Months Bonus Access",
    ],
    included: [],
  },
  {
    id: "womb-to-wonder",
    name: "Womb to Wonder",
    price: "₹9,999",
    duration: "Full Pregnancy Program",
    tagline: "The complete journey - conception to birth",
    highlight: false,
    badge: "Complete Care",
    cta: "Begin Full Journey",
    features: [
      "Pregnancy Yoga & Exercise",
      "Mindfulness Practices",
      "Garbhsanskar & Womb Wellbeing",
      "4 Weekly Live Mentor Sessions",
      "Personalized Diet Plan",
      "9 Expert-Guided Sessions",
      "Full Journey Bonus Access",
      "Birth Preparation Program",
      "Maatratva Completion Certificate",
      "One-on-One Call Support",
    ],
    included: [],
  },
];

const curriculumSections = [
  {
    id: "physical",
    emoji: "🧘‍♀️",
    title: "Physical Wellbeing",
    items: [
      "Guided prenatal yoga and safe practices",
      "Strength building with props",
      "Breathwork and deep relaxation",
      "Pelvic floor strengthening (Kegel exercises)",
      "Mind-body connection (face yoga, near yoga etc.)",
    ],
    experts: [],
  },
  {
    id: "mindful",
    emoji: "🌸",
    title: "Mindful Motherhood",
    items: [
      "Guided pregnancy meditation",
      "Positive mindset practices (NLP technique)",
      "Energy balancing practices (chakras and aura)",
      "Mother-baby connection practices",
      "Tratak kriya (focus and concentration)",
    ],
    experts: [],
  },
  {
    id: "garbh",
    emoji: "👶",
    title: "Garbh Sanskar & Baby Development",
    items: [
      "Visualisation for child's personality development",
      "Baby talk practice for emotional connection",
      "Genetic blueprint for optimal development",
      "Brain development activity and stimulation",
      "Sensory exploration activities",
    ],
    experts: [],
  },
  {
    id: "expert",
    emoji: "👩‍⚕️",
    title: "Expert Sessions",
    items: [
      "Nutrition and diet planning",
      "Emotional wellbeing support",
      "Doubt solving support",
      "Expert guided support",
    ],
    experts: [
      "Dietician & Nutritionist",
      "Ayurveda Expert",
      "Gynaecologist",
      "Psychotherapist",
      "Lactation Expert",
      "and many more...",
    ],
  },
  {
    id: "bonuses",
    emoji: "✨",
    title: "Bonuses",
    items: [],
    experts: [],
  },
];

const bonuses = [
  {
    emoji: "📋",
    title: "Pregnancy Wellness Blueprint",
    items: [
      "Personalized Diet Plan",
      "Month-wise Care Guide",
      "Daily Routine Guide",
    ],
  },
  {
    emoji: "🎵",
    title: "Audio & Learning Library",
    items: [
      "Pregnancy Music & Mantras",
      "Blissful Sleep Kit",
      "Stories Library",
    ],
  },
  {
    emoji: "🧠",
    title: "Baby Development Activity Kit",
    items: ["Brain Activities", "Sensory Activities", "Baby Bonding Audio"],
  },
  {
    emoji: "📖",
    title: "Pregnancy Resource Guide",
    items: [
      "Common Problems & Solutions",
      "Baby Development Guide",
      "Pregnancy Journal",
    ],
  },
  {
    emoji: "👨‍👩‍👧",
    title: "Family & Birth Support Toolkit",
    items: [
      "Partner Guide",
      "Birth Preparation",
      "Breastfeeding Guidance",
    ],
  },
];

const faqs = [
  {
    q: "Which program is right for me?",
    a: "Bloom is perfect if you're just beginning your wellness journey or want to try one month first. Nurture is ideal for a full trimester of deeper support. Womb to Wonder is for mothers who want comprehensive care throughout their entire pregnancy.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Yes! You can upgrade from Bloom to Nurture, or from Nurture to Womb to Wonder at any time. The difference in price is all you pay — no re-enrollment needed.",
  },
  {
    q: "Are the sessions live or recorded?",
    a: "Weekly group sessions are live so you can interact, ask questions and feel the community energy . all the live sessions are also recorded and available for limited time period.",
  },
  {
    q: "What if I join late in my pregnancy?",
    a: "We welcome mothers at any stage. We'll customise your journey to focus on what's most relevant to your current trimester and upcoming needs.",
  },
  {
    q: "Is the program available online?",
    a: "Yes — completely online. Join from anywhere in India or abroad, on any device.",
  },
  
];

// ── COMPONENT ────────────────────────────────────────────────────────────────

export default function ProgramsPageContent() {
  const [openSection, setOpenSection] = useState<string>("physical");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-24" style={{ background: "#FAF7F4" }}>
      {/* ── PRICING CARDS ── */}
      <section className="section-padding" style={{ background: "#FAF7F4" }}>
        <div className="container-wide">
          <StaggerContainer className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <StaggerItem key={plan.id}>
                {plan.highlight ? (
                  <motion.div
                    className="relative flex h-full flex-col rounded-[28px] p-8 md:p-10"
                    style={{
                      background:
                        "linear-gradient(135deg, #6E1A34 0%, #5A1529 100%)",
                      boxShadow: "0 20px 60px rgba(110,26,52,0.35)",
                    }}
                    whileHover={{
                      y: -8,
                      boxShadow: "0 24px 70px rgba(110,26,52,0.45)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6 flex items-center gap-3">
                      <div
                        className="rounded-full px-4 py-1.5 text-xs font-semibold"
                        style={{ background: "#D4AF37", color: "#4B3B3B" }}
                      >
                        {plan.badge}
                      </div>
                      <div
                        className="rounded-full px-4 py-1.5 text-xs font-medium"
                        style={{
                          background: "rgba(255,255,255,0.15)",
                          color: "white",
                        }}
                      >
                        {plan.duration}
                      </div>
                    </div>

                    {/* Maatratva logo instead of emoji */}
                    <div className="h-20 w-auto object-contain brightness-0 invert">
  <Image
    src="/nav-logo.png"
    alt="Maatratva"
    width={220}
    height={96}
    className="h-20 w-auto object-contain"
  />
</div>

                    <h3 className="mb-2 font-display text-4xl font-semibold text-white">
                      {plan.name}
                    </h3>

                    <p
                      className="mb-6 font-body text-sm"
                      style={{ color: "rgba(255,255,255,0.8)" }}
                    >
                      {plan.tagline}
                    </p>

                    <div className="mb-6">
                      <span className="font-display text-5xl font-bold text-white">
                        {plan.price}
                      </span>
                      <span
                        className="ml-2 font-body text-sm"
                        style={{ color: "rgba(255,255,255,0.7)" }}
                      >
                        / {plan.duration.toLowerCase()}
                      </span>
                    </div>

                    <div className="mb-8 flex-1 space-y-3">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <Check
                            size={18}
                            className="mt-0.5 shrink-0"
                            style={{ color: "#D4AF37" }}
                          />
                          <span
                            className="font-body text-sm"
                            style={{ color: "rgba(255,255,255,0.9)" }}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                   
                  </motion.div>
                ) : (
                  <motion.div
                    className="relative flex h-full flex-col rounded-[28px] p-8 md:p-10"
                    style={{
                      background: "white",
                      border: "1px solid rgba(110,26,52,0.15)",
                      boxShadow: "0 8px 40px rgba(110,26,52,0.08)",
                    }}
                    whileHover={{
                      y: -8,
                      boxShadow: "0 12px 50px rgba(110,26,52,0.15)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6 flex items-center gap-3">
                      {plan.badge && (
                        <div
                          className="rounded-full px-4 py-1.5 text-xs font-semibold"
                          style={{ background: "#E9D8D3", color: "#6E1A34" }}
                        >
                          {plan.badge}
                        </div>
                      )}

                      <div
                        className="rounded-full px-4 py-1.5 text-xs font-medium"
                        style={{ background: "#F4EBE8", color: "#7C6A6A" }}
                      >
                        {plan.duration}
                      </div>
                    </div>

                    {/* Maatratva logo instead of emoji */}
                    <div className="mb-5 flex h-24 items-center">
  <Image
    src="/nav-logo.png"
    alt="Maatratva"
    width={220}
    height={96}
    className="h-20 w-auto object-contain"
  />
</div>

                    <h3
                      className="mb-2 font-display text-4xl font-semibold"
                      style={{ color: "#4B3B3B" }}
                    >
                      {plan.name}
                    </h3>

                    <p
                      className="mb-6 font-body text-sm"
                      style={{ color: "#7C6A6A" }}
                    >
                      {plan.tagline}
                    </p>

                    <div className="mb-6">
                      <span
                        className="font-display text-5xl font-bold"
                        style={{ color: "#6E1A34" }}
                      >
                        {plan.price}
                      </span>
                      <span
                        className="ml-2 font-body text-sm"
                        style={{ color: "#7C6A6A" }}
                      >
                        / {plan.duration.toLowerCase()}
                      </span>
                    </div>

                    <div className="mb-8 flex-1 space-y-3">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <Check
                            size={18}
                            className="mt-0.5 shrink-0"
                            style={{ color: "#6E1A34" }}
                          />
                          <span
                            className="font-body text-sm"
                            style={{ color: "#4B3B3B" }}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    
                  </motion.div>
                )}
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
  <Link
    href="/workshops"
    className="btn-primary group inline-flex items-center gap-2 px-7 py-3"
  >
    Explore Our Workshops
    <ArrowRight
      size={16}
      className="transition-transform duration-200 group-hover:translate-x-1"
    />
  </Link>

  <a
    href="https://wa.me/918815182545?text=Hello%20Ma'am%2C%20I%20came%20across%20Maatratva%20and%20would%20like%20to%20know%20more%20about%20your%20pregnancy%20care%20and%20guidance%20programs.%20I'm%20interested%20in%20understanding%20how%20Maatratva%20can%20support%20me%20through%20my%20journey.%20Could%20you%20please%20guide%20me%3F"
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center gap-2 rounded-full border border-[#6E1A34] px-7 py-3 font-body text-sm font-semibold text-[#6E1A34] transition-colors hover:bg-[#6E1A34] hover:text-white"
  >
    Enquire About Our Programs
    <ArrowRight
      size={16}
      className="transition-transform duration-200 group-hover:translate-x-1"
    />
  </a>
</div>
      </section>

      {/* ── ACTIVITY VIDEOS ── */}
      <section className="section-padding" style={{ background: "#FAF7F4" }}>
        <div className="container-wide">
          <FadeUp className="mx-auto mb-16 max-w-2xl text-center">
            <SectionLabel centered>See It In Action</SectionLabel>
            <h2
              className="mb-4 font-display text-5xl font-semibold"
              style={{ color: "#4B3B3B" }}
            >
              Program <span style={{ color: "#6E1A34" }}>Activities</span>
            </h2>
            <p className="font-body text-lg" style={{ color: "#7C6A6A" }}>
              A glimpse into the practices and experiences that make Maatratva
              journeys truly transformative.
            </p>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { id: "nNWFdbmB18c", label: "Physical Activity",    emoji: "🧘‍♀️" },
              { id: "acKc4A_xk1c", label: "Baby Connection",      emoji: "👶"   },
              { id: "BLG9LktlNUQ", label: "Brain Activity",       emoji: "🧠"   },
              { id: "sTIFMIoTgdU", label: "Mindfulness Activity", emoji: "🌸"   },
            ].map(({ id, label, emoji }) => (
              <StaggerItem key={id}>
                <motion.div
                  className="overflow-hidden rounded-[24px]"
                  style={{
                    boxShadow: "0 8px 32px rgba(110,26,52,0.15)",
                    border: "1px solid rgba(110,26,52,0.12)",
                  }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  {/*
                    Clip the YouTube top bar (date + logo) by:
                    - making the outer div overflow:hidden with a fixed height
                    - positioning the iframe taller and shifted up so the bar is hidden
                  */}
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: "9/16" }}
                  >
                    {/* iframe is 55px taller and pulled up 55px to hide the top bar */}
                    <iframe
                      src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&showinfo=0&iv_load_policy=3`}
                      title={`Maatratva ${label}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute left-0 w-full"
                      style={{
                        border: "none",
                        top: "-55px",
                        height: "calc(100% + 55px)",
                      }}
                    />
                    {/* bottom gradient + label */}
                    <div
                      className="pointer-events-none absolute bottom-0 left-0 right-0"
                      style={{
                        height: "90px",
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.80) 0%, transparent 100%)",
                      }}
                    />
                    <div className="pointer-events-none absolute bottom-0 left-0 flex items-center gap-2 px-3 pb-3">
                      <span className="text-base leading-none">{emoji}</span>
                      <p
                        className="font-display text-sm font-semibold leading-tight text-white"
                        style={{ textShadow: "0 1px 6px rgba(0,0,0,0.8)" }}
                      >
                        {label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED SECTION ── */}
      <section className="section-padding" style={{ background: "#F4EBE8" }}>
        <div className="container-wide">
          <FadeUp className="mx-auto mb-16 max-w-3xl text-center">
            <SectionLabel centered>What&apos;s Inside</SectionLabel>
            <h2
              className="mb-4 font-display text-5xl font-semibold md:text-6xl"
              style={{ color: "#4B3B3B" }}
            >
              Everything Your Journey{" "}
              <span style={{ color: "#6E1A34" }}>Includes</span>
            </h2>
            <p className="font-body text-lg" style={{ color: "#7C6A6A" }}>
              Thoughtfully designed sessions, expert guidance and holistic
              practices to nurture your body, mind and baby.
            </p>
          </FadeUp>

          <div className="mx-auto max-w-3xl space-y-4">
            {curriculumSections.map((section) => (
              <FadeUp key={section.id}>
                <div
                  className="overflow-hidden rounded-[20px]"
                  style={{
                    background: "white",
                    border: "1px solid rgba(110,26,52,0.15)",
                    boxShadow: "0 4px 24px rgba(110,26,52,0.06)",
                  }}
                >
                  <button
                    className="flex w-full items-center justify-between p-6 text-left"
                    onClick={() =>
                      setOpenSection(
                        openSection === section.id ? "" : section.id
                      )
                    }
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{section.emoji}</span>
                      <h3
                        className="font-display text-2xl font-semibold"
                        style={{ color: "#4B3B3B" }}
                      >
                        {section.title}
                      </h3>
                    </div>

                    <motion.div
                      animate={{
                        rotate: openSection === section.id ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={20} style={{ color: "#6E1A34" }} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openSection === section.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="px-6 pb-6">
                          <div
                            className="mb-5 h-px w-full"
                            style={{ background: "rgba(110,26,52,0.1)" }}
                          />

                          {section.id !== "bonuses" && (
                            <div className="mb-5 space-y-3">
                              {section.items.map((item) => (
                                <div
                                  key={item}
                                  className="flex items-start gap-3"
                                >
                                  <div
                                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                                    style={{
                                      background: "rgba(110,26,52,0.1)",
                                    }}
                                  >
                                    <Check
                                      size={12}
                                      style={{ color: "#6E1A34" }}
                                    />
                                  </div>
                                  <span
                                    className="font-body text-sm"
                                    style={{ color: "#4B3B3B" }}
                                  >
                                    {item}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}

                          {section.experts.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {section.experts.map((expert) => (
                                <span
                                  key={expert}
                                  className="rounded-full px-3 py-1.5 font-body text-xs font-medium"
                                  style={{
                                    background: "#F4EBE8",
                                    color: "#6E1A34",
                                    border: "1px solid rgba(110,26,52,0.2)",
                                  }}
                                >
                                  {expert}
                                </span>
                              ))}
                            </div>
                          )}

                          {section.id === "bonuses" && (
                            <div className="grid gap-4 sm:grid-cols-2">
                              {bonuses.map((bonus) => (
                                <div
                                  key={bonus.title}
                                  className="rounded-[16px] p-5"
                                  style={{
                                    background: "#F4EBE8",
                                    border: "1px solid rgba(110,26,52,0.1)",
                                  }}
                                >
                                  <div className="mb-3 flex items-center gap-3">
                                    <span className="text-2xl">
                                      {bonus.emoji}
                                    </span>
                                    <h4
                                      className="font-display text-base font-semibold"
                                      style={{ color: "#4B3B3B" }}
                                    >
                                      {bonus.title}
                                    </h4>
                                  </div>

                                  <div className="space-y-1.5">
                                    {bonus.items.map((item) => (
                                      <div
                                        key={item}
                                        className="flex items-center gap-2"
                                      >
                                        <Star
                                          size={11}
                                          style={{ color: "#D4AF37" }}
                                        />
                                        <span
                                          className="font-body text-xs"
                                          style={{ color: "#7C6A6A" }}
                                        >
                                          {item}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="section-padding" style={{ background: "#FAF7F4" }}>
        <div className="container-wide">
          <FadeUp className="mx-auto mb-16 max-w-2xl text-center">
            <SectionLabel centered>Common Questions</SectionLabel>
            <h2
              className="font-display text-5xl font-semibold md:text-6xl"
              style={{ color: "#4B3B3B" }}
            >
              You Asked, We <span style={{ color: "#6E1A34" }}>Answered</span>
            </h2>
          </FadeUp>

          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <FadeUp key={faq.q} delay={index * 0.05}>
                <div
                  className="overflow-hidden rounded-[20px]"
                  style={{
                    background: "white",
                    border: "1px solid rgba(110,26,52,0.15)",
                    boxShadow: "0 4px 24px rgba(110,26,52,0.06)",
                  }}
                >
                  <button
                    className="flex w-full items-center justify-between p-6 text-left"
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                  >
                    <h3
                      className="pr-4 font-display text-xl font-semibold"
                      style={{ color: "#4B3B3B" }}
                    >
                      {faq.q}
                    </h3>

                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0"
                    >
                      <ChevronDown size={20} style={{ color: "#6E1A34" }} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="px-6 pb-6">
                          <div
                            className="mb-4 h-px w-full"
                            style={{ background: "rgba(110,26,52,0.1)" }}
                          />
                          <p
                            className="font-body text-sm leading-relaxed"
                            style={{ color: "#7C6A6A" }}
                          >
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}