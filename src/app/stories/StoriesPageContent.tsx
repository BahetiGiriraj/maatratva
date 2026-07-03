"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, Play } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const stories = [
  {
    name: "Priya Kapoor", location: "Mumbai", tag: "Natural Birth", emoji: "🌸", rating: 5,
    quote: "Maatratva did not just teach me about pregnancy — it taught me about myself. I became more calm, more confident, and infinitely more connected to my baby. When he arrived, I felt completely ready.",
    detail: "Priya joined at 8 weeks with severe anxiety about childbirth. Through NLP sessions and Garbh Sanskar, she released her fear and had a peaceful, natural birth.", featured: true,
  },
  {
    name: "Ananya Reddy", location: "Hyderabad", tag: "IVF Journey", emoji: "🌺", rating: 5,
    quote: "After three failed IVF cycles, I was broken. Maatratva helped me rebuild — emotionally and physically. My fourth cycle worked. My daughter is my miracle.",
    detail: "Ananya's fertility journey lasted 3 years. The emotional wellness program and Ayurvedic support helped her body and mind prepare for successful conception.", featured: false,
  },
  {
    name: "Kavitha Nair", location: "Chennai", tag: "High-Risk Pregnancy", emoji: "💐", rating: 5,
    quote: "I was told my pregnancy was high-risk. With Maatratva's guidance, I had a beautiful pregnancy and a healthy birth. No complications. Just joy.",
    detail: "Diagnosed with gestational diabetes, Kavitha found in Maatratva a structured, supportive approach that complemented her medical care perfectly.", featured: false,
  },
  {
    name: "Meera Joshi", location: "Delhi", tag: "Postpartum Recovery", emoji: "🌷", rating: 5,
    quote: "Postpartum was harder than I expected. The community and continued support from Maatratva literally carried me through. I am so grateful for this sisterhood.",
    detail: "Meera joined during her third trimester and continued with postpartum support. The community of mothers became her lifeline during the fourth trimester.", featured: false,
  },
  {
    name: "Shreya Patil", location: "Pune", tag: "Second Pregnancy", emoji: "🌻", rating: 5,
    quote: "My first pregnancy was lonely and stressful. My second, with Maatratva, was completely different — joyful, intentional and full of love.",
    detail: "Shreya compared her two pregnancy experiences and found Maatratva transformed not just her wellbeing, but her entire family's experience of the pregnancy.", featured: false,
  },
  {
    name: "Divya Menon", location: "Bangalore", tag: "Garbh Sanskar", emoji: "🌹", rating: 5,
    quote: "My son is 2 years old and his teachers constantly remark on his calm, focused temperament. I credit everything to the Garbh Sanskar work we did in the womb.",
    detail: "Divya focused on the Garbh Sanskar program and saw remarkable results in her child's neurological and emotional development post-birth.", featured: false,
  },
  {
    name: "Rekha Singh", location: "Jaipur", tag: "Fertility Care", emoji: "🏵️", rating: 5,
    quote: "I had PCOS and was told conception would be difficult. Maatratva's holistic approach balanced my hormones, calmed my mind, and I conceived naturally within 6 months.",
    detail: "Rekha followed the Ayurvedic nutrition and yoga protocols alongside fertility yoga and conceived naturally after years of struggling.", featured: false,
  },
  {
    name: "Pooja Sharma", location: "Gurugram", tag: "Signature Program", emoji: "💮", rating: 5,
    quote: "Every week I looked forward to our sessions. Dheera has this gift of making you feel seen, heard and deeply cared for. Maatratva changed my life.",
    detail: "Pooja enrolled in the Signature Program from 10 weeks and completed the full journey including postpartum support.", featured: false,
  },
];

const videoStories = [
  { name: "Ananya Reddy", tag: "IVF Journey", emoji: "🌺" },
  { name: "Kavitha Nair", tag: "High-Risk Pregnancy", emoji: "💐" },
  { name: "Meera Joshi", tag: "Postpartum Recovery", emoji: "🌷" },
];

export default function StoriesPageContent() {
  return (
    <div className="pt-24" style={{ background: "#FAF7F4" }}>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-28 md:py-36"
        style={{ background: "linear-gradient(160deg,#F4EBE8 0%,#FAF7F4 100%)" }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: "#A15C7A" }} animate={{ scale:[1,1.1,1] }} transition={{ duration:8, repeat:Infinity }} />
        </div>
        <div className="container-wide relative z-10 text-center max-w-3xl mx-auto">
          <FadeUp>
            <SectionLabel centered>Mother Stories</SectionLabel>
            <h1 className="font-display text-6xl md:text-7xl font-semibold leading-[1.05] mb-6" style={{ color: "#4B3B3B" }}>
              Stories That <span style={{ color: "#A15C7A" }}>Inspire</span>
            </h1>
            <p className="font-body text-xl leading-relaxed" style={{ color: "#7C6A6A" }}>
              Real mothers. Real transformations. Real journeys from fear to wonder.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── FEATURED ── */}
      <section className="section-padding" style={{ background: "#FAF7F4" }}>
        <div className="container-wide">
          <FadeUp className="max-w-4xl mx-auto mb-16">
            <div className="relative rounded-[36px] overflow-hidden p-10 md:p-14"
              style={{ background: "linear-gradient(135deg,rgba(161,92,122,0.07) 0%,rgba(233,216,211,0.5) 100%)", border: "1.5px solid rgba(161,92,122,0.18)" }}>
              <div className="absolute top-8 left-10 font-display text-[120px] leading-none opacity-[0.05] select-none" style={{ color: "#A15C7A" }}>&ldquo;</div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full font-body text-xs font-semibold" style={{ background: "#A15C7A", color: "white" }}>Featured Story</span>
                  <div className="flex gap-0.5">{[...Array(5)].map((_,i) => <Star key={i} size={13} fill="#A15C7A" color="#A15C7A" />)}</div>
                </div>
                <blockquote className="font-display text-3xl md:text-4xl font-light italic leading-relaxed mb-8" style={{ color: "#4B3B3B" }}>
                  &ldquo;{stories[0].quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl" style={{ background: "rgba(161,92,122,0.1)" }}>
                    {stories[0].emoji}
                  </div>
                  <div>
                    <p className="font-body font-semibold text-lg" style={{ color: "#4B3B3B" }}>{stories[0].name}</p>
                    <p className="font-body text-sm" style={{ color: "#7C6A6A" }}>{stories[0].location} · {stories[0].tag}</p>
                    <p className="font-body text-xs mt-1" style={{ color: "#A89090" }}>{stories[0].detail}</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Videos */}
          <FadeUp className="mb-16">
            <h2 className="font-display text-4xl font-semibold text-center mb-8" style={{ color: "#4B3B3B" }}>
              Watch Their <span style={{ color: "#A15C7A" }}>Stories</span>
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {videoStories.map((v) => (
                <motion.div key={v.name} className="relative rounded-2xl overflow-hidden aspect-video cursor-pointer group flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg,#4B3B3B 0%,#7D4460 100%)", boxShadow: "0 8px 40px rgba(75,59,59,0.2)" }}
                  whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <div className="absolute inset-0 opacity-20" style={{ background: "linear-gradient(135deg,#A15C7A,#4B3B3B)" }} />
                  <motion.div className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)" }} whileHover={{ scale: 1.1 }}>
                    <Play size={20} fill="white" color="white" className="ml-1" />
                  </motion.div>
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <p className="font-body text-xs font-semibold">{v.name}</p>
                    <p className="font-body text-xs opacity-70">{v.tag}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeUp>

          {/* All stories */}
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.slice(1).map((s) => (
              <StaggerItem key={s.name}>
                <motion.div className="p-7 rounded-[24px] h-full flex flex-col"
                  style={{ background: "white", border: "1px solid rgba(233,216,211,0.6)", boxShadow: "0 4px 24px rgba(75,59,59,0.06)" }}
                  whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(161,92,122,0.12)" }} transition={{ duration: 0.3 }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style={{ background: "rgba(161,92,122,0.08)" }}>{s.emoji}</div>
                    <div>
                      <p className="font-body font-semibold text-sm" style={{ color: "#4B3B3B" }}>{s.name}</p>
                      <p className="font-body text-xs" style={{ color: "#7C6A6A" }}>{s.location}</p>
                    </div>
                    <span className="ml-auto px-2.5 py-1 rounded-full font-body text-xs font-medium" style={{ background: "rgba(161,92,122,0.08)", color: "#A15C7A" }}>{s.tag}</span>
                  </div>
                  <div className="flex gap-0.5 mb-4">{[...Array(s.rating)].map((_,i) => <Star key={i} size={11} fill="#A15C7A" color="#A15C7A" />)}</div>
                  <blockquote className="font-display text-lg font-light italic leading-relaxed flex-1" style={{ color: "#4B3B3B" }}>&ldquo;{s.quote}&rdquo;</blockquote>
                  <p className="font-body text-xs mt-4 leading-relaxed" style={{ color: "#A89090" }}>{s.detail}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

    </div>
  );
}
