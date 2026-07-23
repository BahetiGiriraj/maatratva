"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Phone, Star } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { FadeUp, FadeLeft, FadeRight, StaggerContainer, StaggerItem } from "@/components/ui/motion";

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
    emoji: "🌸",
    cta: "Begin with Bloom",
    features: [
      "Pregnancy yoga & exercise",
      "Mindfulness activities",
      "Garbh Sanskar",
      "4 weekly live sessions with mentor",
      "1 expert guided session",
      "Limited bonus access",
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
    emoji: "🌺",
    cta: "Choose Nurture",
    features: [
      "Personalized diet plan",
      "4 weekly live sessions with mentor",
      "3 expert guided sessions",
      "Birth preparation program (3rd trimester)",
    ],
    included: ["Everything in Bloom, plus:"],
  },
  {
    id: "womb-to-wonder",
    name: "Womb to Wonder",
    price: "₹9,999",
    duration: "Full Pregnancy Program",
    tagline: "The complete journey — conception to birth",
    highlight: false,
    badge: "Complete Care",
    emoji: "✨",
    cta: "Begin Full Journey",
    features: [
      "Monthly one-on-one mentor call",
      "4 weekly live sessions with mentor",
      "9 expert guided sessions",
      "Birth preparation program",
      "Maatratva completion certificate",
    ],
    included: ["Everything in Bloom & Nurture, plus:"],
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
      "One-on-one guided support",
    ],
    experts: ["Dietician & Nutritionist", "Ayurveda Expert", "Gynaecologist", "Psychotherapist", "Lactation Expert", "and many more..."],
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
    items: ["Personalized Diet Plan", "Month-wise Care Guide", "Daily Routine Guide"],
  },
  {
    emoji: "🎵",
    title: "Audio & Learning Library",
    items: ["Pregnancy Music & Mantras", "Blissful Sleep Kit", "Stories Library"],
  },
  {
    emoji: "🧠",
    title: "Baby Development Activity Kit",
    items: ["Brain Activities", "Sensory Activities", "Baby Bonding Audio"],
  },
  {
    emoji: "📖",
    title: "Pregnancy Resource Guide",
    items: ["Common Problems & Solutions", "Baby Development Guide", "Pregnancy Journal"],
  },
  {
    emoji: "👨‍👩‍👧",
    title: "Family & Birth Support Toolkit",
    items: ["Partner Guide", "Birth Preparation", "Breastfeeding Guidance"],
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
    a: "Weekly group sessions are live so you can interact, ask questions and feel the community energy. All live sessions are also recorded and added to your library within 24 hours.",
  },
  {
    q: "What if I join late in my pregnancy?",
    a: "We welcome mothers at any stage. We'll customise your journey to focus on what's most relevant to your current trimester and upcoming needs.",
  },
  {
    q: "Is the program available online?",
    a: "Yes — completely online. Join from anywhere in India or abroad, on any device.",
  },
  {
    q: "Is there a refund policy?",
    a: "We offer a 7-day satisfaction guarantee. If you feel the program isn't right for you within the first 7 days, we'll process a full refund — no questions asked.",
  },
];

// ── COMPONENT ────────────────────────────────────────────────────────────────

export default function ProgramsPageContent() {
  const [openSection, setOpenSection] = useState<string>("physical");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-24" style={{ background: "#FAF7F4" }}>
      
    

      {/* ── 2. PRICING CARDS ── */}
      <section className="section-padding" style={{ background: "#FAF7F4" }}>
        <div className="container-wide">
          <StaggerContainer className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <StaggerItem key={plan.id}>
                {plan.highlight ? (
                  // HIGHLIGHTED CARD (Nurture)
                  <motion.div
                    className="relative rounded-[28px] p-8 md:p-10 h-full flex flex-col"
                    style={{
                      background: "linear-gradient(135deg, #A15C7A 0%, #7D4460 100%)",
                      boxShadow: "0 20px 60px rgba(161,92,122,0.35)",
                    }}
                    whileHover={{ y: -8, boxShadow: "0 24px 70px rgba(161,92,122,0.45)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="px-4 py-1.5 rounded-full text-xs font-semibold"
                        style={{ background: "#D4AF37", color: "#4B3B3B" }}>
                        {plan.badge}
                      </div>
                      <div className="px-4 py-1.5 rounded-full text-xs font-medium"
                        style={{ background: "rgba(255,255,255,0.15)", color: "white" }}>
                        {plan.duration}
                      </div>
                    </div>
                    <div className="text-5xl mb-4">{plan.emoji}</div>
                    <h3 className="font-display text-4xl font-semibold mb-2 text-white">{plan.name}</h3>
                    <p className="font-body text-sm mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>
                      {plan.tagline}
                    </p>
                    <div className="mb-6">
                      <span className="font-display text-5xl font-bold text-white">{plan.price}</span>
                      <span className="font-body text-sm ml-2" style={{ color: "rgba(255,255,255,0.7)" }}>
                        / {plan.duration.toLowerCase()}
                      </span>
                    </div>
                    <div className="space-y-3 mb-8 flex-1">
                      {plan.included.length > 0 && (
                        <p className="font-body text-sm font-semibold mb-3"
                          style={{ color: "rgba(255,255,255,0.9)" }}>
                          {plan.included[0]}
                        </p>
                      )}
                      {plan.features.map((f) => (
                        <div key={f} className="flex items-start gap-3">
                          <Check size={18} className="shrink-0 mt-0.5" style={{ color: "#D4AF37" }} />
                          <span className="font-body text-sm" style={{ color: "rgba(255,255,255,0.9)" }}>{f}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact" className="btn-gold w-full text-center">
                      {plan.cta}
                    </Link>
                  </motion.div>
                ) : (
                  // REGULAR CARD (Bloom, Womb to Wonder)
                  <motion.div
                    className="relative rounded-[28px] p-8 md:p-10 h-full flex flex-col"
                    style={{
                      background: "white",
                      border: "1px solid rgba(161,92,122,0.15)",
                      boxShadow: "0 8px 40px rgba(161,92,122,0.08)",
                    }}
                    whileHover={{ y: -8, boxShadow: "0 12px 50px rgba(161,92,122,0.15)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      {plan.badge && (
                        <div className="px-4 py-1.5 rounded-full text-xs font-semibold"
                          style={{ background: "#E9D8D3", color: "#A15C7A" }}>
                          {plan.badge}
                        </div>
                      )}
                      <div className="px-4 py-1.5 rounded-full text-xs font-medium"
                        style={{ background: "#F4EBE8", color: "#7C6A6A" }}>
                        {plan.duration}
                      </div>
                    </div>
                    <div className="text-5xl mb-4">{plan.emoji}</div>
                    <h3 className="font-display text-4xl font-semibold mb-2" style={{ color: "#4B3B3B" }}>
                      {plan.name}
                    </h3>
                    <p className="font-body text-sm mb-6" style={{ color: "#7C6A6A" }}>
                      {plan.tagline}
                    </p>
                    <div className="mb-6">
                      <span className="font-display text-5xl font-bold" style={{ color: "#A15C7A" }}>
                        {plan.price}
                      </span>
                      <span className="font-body text-sm ml-2" style={{ color: "#7C6A6A" }}>
                        / {plan.duration.toLowerCase()}
                      </span>
                    </div>
                    <div className="space-y-3 mb-8 flex-1">
                      {plan.included.length > 0 && (
                        <p className="font-body text-sm font-semibold mb-3" style={{ color: "#A15C7A" }}>
                          {plan.included[0]}
                        </p>
                      )}
                      {plan.features.map((f) => (
                        <div key={f} className="flex items-start gap-3">
                          <Check size={18} className="shrink-0 mt-0.5" style={{ color: "#A15C7A" }} />
                          <span className="font-body text-sm" style={{ color: "#4B3B3B" }}>{f}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact" className="btn-primary w-full text-center">
                      {plan.cta}
                    </Link>
                  </motion.div>
                )}
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── 3. WHAT'S INCLUDED SECTION ── */}
      <section className="section-padding" style={{ background: "#F4EBE8" }}>
        <div className="container-wide">
          <FadeUp className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel centered>What&apos;s Inside</SectionLabel>
            <h2 className="font-display text-5xl md:text-6xl font-semibold mb-4" style={{ color: "#4B3B3B" }}>
              Everything Your Journey <span style={{ color: "#A15C7A" }}>Includes</span>
            </h2>
            <p className="font-body text-lg" style={{ color: "#7C6A6A" }}>
              Thoughtfully designed sessions, expert guidance and holistic practices to nurture your body, mind and baby.
            </p>
          </FadeUp>

          <div className="max-w-3xl mx-auto space-y-4">
            {curriculumSections.map((section) => (
              <FadeUp key={section.id}>
                <div className="rounded-[20px] overflow-hidden"
                  style={{
                    background: "white",
                    border: "1px solid rgba(161,92,122,0.15)",
                    boxShadow: "0 4px 24px rgba(161,92,122,0.06)",
                  }}>
                  <button
                    className="w-full flex items-center justify-between p-6 text-left"
                    onClick={() => setOpenSection(openSection === section.id ? "" : section.id)}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{section.emoji}</span>
                      <h3 className="font-display text-2xl font-semibold" style={{ color: "#4B3B3B" }}>
                        {section.title}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: openSection === section.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={20} style={{ color: "#A15C7A" }} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openSection === section.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="px-6 pb-6">
                          <div className="w-full h-px mb-5"
                            style={{ background: "rgba(161,92,122,0.1)" }} />

                          {/* Regular items */}
                          {section.id !== "bonuses" && (
                            <div className="space-y-3 mb-5">
                              {section.items.map((item) => (
                                <div key={item} className="flex items-start gap-3">
                                  <div className="w-5 h-5 rounded-full shrink-0 mt-0.5 flex items-center justify-center"
                                    style={{ background: "rgba(161,92,122,0.1)" }}>
                                    <Check size={12} style={{ color: "#A15C7A" }} />
                                  </div>
                                  <span className="font-body text-sm" style={{ color: "#4B3B3B" }}>{item}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Expert chips */}
                          {section.experts && section.experts.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-4">
                              {section.experts.map((exp) => (
                                <span key={exp}
                                  className="px-3 py-1.5 rounded-full font-body text-xs font-medium"
                                  style={{ background: "#F4EBE8", color: "#A15C7A", border: "1px solid rgba(161,92,122,0.2)" }}>
                                  {exp}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Bonuses grid */}
                          {section.id === "bonuses" && (
                            <div className="grid sm:grid-cols-2 gap-4">
                              {bonuses.map((bonus) => (
                                <div key={bonus.title}
                                  className="p-5 rounded-[16px]"
                                  style={{ background: "#F4EBE8", border: "1px solid rgba(161,92,122,0.1)" }}>
                                  <div className="flex items-center gap-3 mb-3">
                                    <span className="text-2xl">{bonus.emoji}</span>
                                    <h4 className="font-display text-base font-semibold" style={{ color: "#4B3B3B" }}>
                                      {bonus.title}
                                    </h4>
                                  </div>
                                  <div className="space-y-1.5">
                                    {bonus.items.map((item) => (
                                      <div key={item} className="flex items-center gap-2">
                                        <Star size={11} style={{ color: "#D4AF37" }} />
                                        <span className="font-body text-xs" style={{ color: "#7C6A6A" }}>{item}</span>
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

      {/* ── 4. FAQ SECTION ── */}
      <section className="section-padding" style={{ background: "#FAF7F4" }}>
        <div className="container-wide">
          <FadeUp className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel centered>Common Questions</SectionLabel>
            <h2 className="font-display text-5xl md:text-6xl font-semibold" style={{ color: "#4B3B3B" }}>
              You Asked, We <span style={{ color: "#A15C7A" }}>Answered</span>
            </h2>
          </FadeUp>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <FadeUp key={idx} delay={idx * 0.05}>
                <div className="rounded-[20px] overflow-hidden"
                  style={{
                    background: "white",
                    border: "1px solid rgba(161,92,122,0.15)",
                    boxShadow: "0 4px 24px rgba(161,92,122,0.06)",
                  }}>
                  <button
                    className="w-full flex items-center justify-between p-6 text-left"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    <h3 className="font-display text-xl font-semibold pr-4" style={{ color: "#4B3B3B" }}>
                      {faq.q}
                    </h3>
                    <motion.div
                      animate={{ rotate: openFaq === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0"
                    >
                      <ChevronDown size={20} style={{ color: "#A15C7A" }} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="px-6 pb-6">
                          <div className="w-full h-px mb-4"
                            style={{ background: "rgba(161,92,122,0.1)" }} />
                          <p className="font-body text-sm leading-relaxed" style={{ color: "#7C6A6A" }}>
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

      {/* ── 5. FINAL CTA SECTION ── */}
      <section className="relative overflow-hidden py-24 md:py-32"
        style={{ background: "linear-gradient(160deg, #4B3B3B 0%, #3A2D2D 50%, #7D4460 100%)" }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
            style={{ background: "#E9D8D3" }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 9, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-15"
            style={{ background: "#D4AF37" }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 7, repeat: Infinity, delay: 2 }}
          />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeUp>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-6 text-white">
                Every Mother Deserves Guidance That{" "}
                <span style={{ color: "#D4AF37" }}>Grows</span>{" "}
                With Her Journey
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="font-body text-lg md:text-xl leading-relaxed mb-10"
                style={{ color: "rgba(233,216,211,0.85)" }}>
                Join thousands of mothers discovering confidence, calmness and connection through the Maatratva experience.
              </p>
            </FadeUp>
            <FadeUp delay={0.25}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="#pricing" className="btn-gold">
                  Choose Your Program
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-body font-medium text-sm text-white transition-all duration-300 hover:bg-white/10"
                  style={{ border: "1.5px solid rgba(255,255,255,0.5)" }}
                >
                  <Phone size={16} />
                  Schedule Free Consultation
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

    </div>
  );
}
