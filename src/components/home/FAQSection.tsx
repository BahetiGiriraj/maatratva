"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { FadeUp } from "@/components/ui/motion";

const faqs = [
  {
    q: "Who is the Maatratva program designed for?",
    a: "Maatratva is designed for women at any stage of their pregnancy journey who want expert guidance for a healthier and happier pregnancy. We also support IVF mothers and women with high-risk pregnancies through specialized guidance.",
  },
  {
    q: "Can I join the Maatratva program at any stage of pregnancy?",
    a: "Yes. While we recommend joining early in pregnancy for maximum benefits, our programs are designed to be valuable at any stage. We meet you wherever you are in your journey and customize our support accordingly.",
  },
  {
    q: "How is Maatratva different from regular pregnancy classes?",
    a: "Maatratva is not just a pregnancy class  it is a complete pregnancy wellness ecosystem. We combine Garbh Sanskar, prenatal yoga, nutrition, Ayurveda, NLP, mind programming, meditation, community support, and expert guidance in one holistic journey. We address the whole mother — body, mind, and spirit.",
  },
  {
    q: "Is the Maatratva program safe during pregnancy?",
    a: "Yes. The Maatratva program is designed to support a healthy pregnancy through safe, gentle practices guided by certified prenatal experts. All sessions can be adapted to suit each trimester and individual needs.",
  },
  {
    q: "How are the sessions conducted?",
    a: "Our group sessions are conducted online through live and recorded classes, making them accessible to mothers across India and internationally. Select in-person workshops and consultations are also available at our centers.",
  },
  {
    q: "Is your approach backed by scientific evidence?",
    a: "Absolutely. Every aspect of our program is grounded in both traditional wisdom and modern scientific research. Our practitioners regularly update their practices based on the latest studies in prenatal psychology, epigenetics, and holistic healthcare.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding" style={{ background: "#FAF7F4" }} id="faq">
      <div className="container-wide">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — header */}
          <div className="lg:col-span-2">
            <FadeUp>
              <SectionLabel>FAQ</SectionLabel>
              <h2
                className="font-display text-5xl md:text-6xl font-semibold leading-[1.1] mb-6"
                style={{ color: "#4B3B3B" }}
              >
                Questions{" "}
                <span className="font-display font-light italic" style={{ color: "#642244" }}>
                  Answered
                </span>
              </h2>
              <p className="font-body text-base leading-relaxed mb-8" style={{ color: "#7C6A6A" }}>
                Everything you need to know about Maatratva and how we support mothers.
              </p>
              
            </FadeUp>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-3 space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  background: openIndex === i ? "rgba(100,34,68,0.06)" : "white",
                  border: openIndex === i
                    ? "1px solid rgba(100,34,68,0.2)"
                    : "1px solid rgba(233,216,211,0.6)",
                }}
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span
                    className="font-body font-medium text-base pr-4"
                    style={{ color: "#4B3B3B" }}
                  >
                    {faq.q}
                  </span>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200"
                    style={{
                      background: openIndex === i ? "#642244" : "rgba(100,34,68,0.1)",
                      color: openIndex === i ? "white" : "#642244",
                    }}
                  >
                    {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-5">
                        <div
                          className="h-px mb-4"
                          style={{ background: "rgba(100,34,68,0.12)" }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
