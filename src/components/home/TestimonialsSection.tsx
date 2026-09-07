"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Play, ArrowRight, X } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { FadeUp } from "@/components/ui/motion";

type VideoStory = { videoId: string; name: string; location: string };

const allReviews = [
  { name: "Shilpi Kashup", location: "Indore, India", text: "Ever since I took Dhira mam's first seminar, I got the positive vibes. I started Garbh Sanskar classes and my perspective suddenly changed. Everyone including my husband started telling me that my nature has changed positively. I feel empowered to manage my mental well-being." },
  { name: "Aayushi Jain", location: "Indore, India", text: "Every chat with Dhira ma'am was so relaxing that I used to forget about anxiety. The lessons on gratitude, forgiveness and love made me kinder. Her caring, smiling nature gives me a motherly feeling. I loved the meditation and Tratak kriya sessions." },
  { name: "Nikita Kathpal", location: "Westcode, USA", text: "As a first-time mom-to-be, Dhira ji made this journey so exciting. The visualizations, baby talk, meditations and brain development activities truly provide a holistic approach. I am less anxious and more calm after joining these classes." },
  { name: "Purvi Neema", location: "Mumbai, India", text: "My final months of pregnancy were the best and blessed months after I found Dhira ma'am. I was calm and happy during my labour and had only love and positivity — only because of her. She is the best mentor I can ever get." },
  { name: "Jaya Bangad", location: "Randipur, India", text: "I feel blessed to have Dheera ma'am as my mentor for Garbh Sanskar. Like Krishna, she answered all my questions just like an elder sister. Her meditation sessions brought me calmness. Her advice was not only for pregnancy but for whole life." },
  { name: "Riya Gujrati", location: "India", text: "Your visualization sessions make a person design their baby. You give every pregnant lady the strength to feel confident and positive. Me and my family is actually very much grateful for your generous support in my journey." },
  { name: "Aayushi Gargitke", location: "India", text: "The Garbh Sanskar course provided comprehensive knowledge and practical techniques to nurture a positive environment for my baby. Sessions like meditation, baby visualisation and pregnancy insights are inspiring and very helpful." },
  { name: "Aarohi", location: "Indore, India", text: "Dhira Mam has completely transformed my yoga practice with patient guidance and deep knowledge. Every class feels like a personalized experience. The things I learnt in prenatal yoga classes were invaluable — and I was blessed with a baby girl." },
  { name: "Aditi Kothari", location: "Dubai, UAE", text: "Being alone in Dubai during my pregnancy was tough, yet you made me aware of how much this journey can impact. I invested my time in painting, reading and brain-storming activities. Glad to have you as my guiding light." },
  { name: "Ankita Shikre", location: "India", text: "Ma'am, your experience will always be memorable. You made my pregnancy journey so easy. Whatever you said, I followed and the results were amazing. Whenever I was nervous you always gave me strength. Thank you so much." },
  { name: "Bhavana Bajaj", location: "Chandrapur, India", text: "The first day we talked I was sure I was at the right place. All your activities — baby talk, meditation, baby visualization — are beautiful for connection with our child. You treat us as family members." },
  { name: "Gayatri Joshi", location: "Indore, India", text: "Your breathing exercises were very helpful during labour pain. My baby is exactly as I had imagined. You helped me recover so much even though I joined late. Your work is beautiful — keep going." },
  { name: "Palak Jindal", location: "Indore, India", text: "It was a wonderful journey with you. All your techniques — visualization, positive affirmations, NLP sessions — were really needful. You made us so comfortable that we didn't hesitate to discuss our problems." },
  { name: "Nisha Patwari", location: "Indore, India", text: "Dheera ma'am's sessions are extremely beneficial for natural delivery. I found the meditation classes very helpful in connecting with my baby. Thank you for educating me on this beautiful journey." },
  { name: "Shweta Mahajan", location: "Khargon, India", text: "Thank you for making my risky pregnancy journey smooth and relaxing. I had visualised my baby in your sessions and my baby boy exactly looks and behaves the way I wanted. Talking to Dhira ma'am always felt like talking to a family member." },
  { name: "Varsha Rathi", location: "Raysen, India", text: "In the beginning I was really scared but because of you I enjoyed so much in this journey. Your sessions are very interesting and exciting. You always supported us with your guidance whenever we felt nervous." },
  { name: "Vedehi Rathi", location: "Jaipur, India", text: "Thank you for all the guidance throughout my pregnancy. All the breathing techniques, exercises, visual imagination and labour pain knowledge — thank you is not enough. You even made my husband feel involved in our pregnancy journey." },
  { name: "Pragati Jain", location: "Surat, India", text: "I suffered from infection and was admitted to the ICU. You handled the situation so well. After I gave birth to healthy twins, I felt so relieved. Both babies are healthy and exactly as I visualised in your sessions." },
  { name: "Dr. Minal", location: "Mumbai, India", text: "My baby is very calm and recognises my voice. She still listens to all the mantras I used to recite during pregnancy. Suraksha chakra mantra really helped during my labor. I was very confident during the entire delivery." },
  { name: "Akshata Bajaj", location: "Hyderabad, India", text: "Both me and Akshata truly thank you from the bottom of our hearts. When we look back we cannot imagine how it would have been without your sessions. Your sessions are a huge source of positive energy filling the toughest days with freshness." },
  { name: "Parul Kabra", location: "Mandsour, India", text: "I really enjoyed each and every session with you. I always tried not to miss any class because they made me feel relaxed and connected. Thank you for making this special phase of my life even more beautiful and memorable." },
];

const row1 = allReviews.slice(0, 11);
const row2 = allReviews.slice(11);

function ReviewCard({ name, location, text }: { name: string; location: string; text: string }) {
  return (
    <div
      className="shrink-0 w-[300px] md:w-[360px] p-6 rounded-[20px] mx-3 flex flex-col gap-3"
      style={{
        background: "white",
        border: "1px solid rgba(233,216,211,0.7)",
        boxShadow: "0 4px 20px rgba(100,34,68,0.07)",
      }}
    >
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#642244" color="#642244" />)}
      </div>
      <p className="font-body text-sm leading-relaxed flex-1" style={{ color: "#7C6A6A", display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
        &ldquo;{text}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-3" style={{ borderTop: "1px solid rgba(233,216,211,0.6)" }}>
        <div className="w-8 h-8 rounded-full flex items-center justify-center font-display text-sm font-bold shrink-0"
          style={{ background: "rgba(100,34,68,0.1)", color: "#642244" }}>
          {name[0]}
        </div>
        <div>
          <p className="font-body text-sm font-semibold leading-none mb-0.5" style={{ color: "#4B3B3B" }}>{name}</p>
          <p className="font-body text-xs" style={{ color: "#A89090" }}>{location}</p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ reviews, direction, speed = 60 }: { reviews: typeof allReviews; direction: "left" | "right"; speed?: number }) {
  const doubled = [...reviews, ...reviews];
  const [paused, setPaused] = useState(false);

  return (
    <div
      style={{ overflow: "hidden", width: "100%" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <motion.div
        style={{ display: "flex", width: "max-content" }}
        animate={{ x: paused ? undefined : (direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"]) }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear", repeatType: "loop" }}
      >
        {doubled.map((r, i) => (
          <ReviewCard key={i} name={r.name} location={r.location} text={r.text} />
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [playing, setPlaying] = useState<VideoStory | null>(null);

  return (
    <>
    <section className="section-padding overflow-hidden"
      style={{ background: "linear-gradient(160deg, #F4EBE8 0%, #FAF7F4 100%)" }}>
      <div className="container-wide">
        <FadeUp className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel centered>Mother Stories</SectionLabel>
          <h2 className="font-display text-5xl md:text-6xl font-semibold leading-[1.1] mb-6" style={{ color: "#4B3B3B" }}>
            Voices of Our <span style={{ color: "#642244" }}>Mothers</span>
          </h2>
          <p className="font-body text-lg leading-relaxed" style={{ color: "#7C6A6A" }}>
            Real words from real mothers who walked this journey with Maatratva.
          </p>
        </FadeUp>
      </div>

      {/* Row 1 — right to left */}
      <div className="mb-4">
        <MarqueeRow reviews={row1} direction="left" speed={55} />
      </div>

      {/* Row 2 — left to right */}
      <MarqueeRow reviews={row2} direction="right" speed={65} />

      {/* ── VIDEO STORIES ── */}
      <div className="container-wide mt-14">
        <FadeUp className="text-center mb-8">
          <p className="font-display text-2xl md:text-3xl font-semibold" style={{ color: "#4B3B3B" }}>
            Hear It In Their{" "}
            <span style={{ color: "#642244" }}>Own Words</span>
          </p>
          <p className="font-display text-base font-light italic mt-1" style={{ color: "#A54860" }}>
            Real mothers, real stories.
          </p>
        </FadeUp>

        <div className="grid grid-cols-3 gap-5 max-w-3xl mx-auto">
          {[
            { videoId: "P7-iCMfOOCk", name: "Shraddha Surendra", location: "Dubai, UAE"     },
            { videoId: "PUqIxnrKxGc", name: "Amisha Chandak",    location: "Indore, India"  },
            { videoId: "OCLb23Co8BI", name: "Palak Mahajan",      location: "Khargon, India" },
            
          ].map((v) => (
            <motion.button
              key={v.videoId}
              type="button"
              onClick={() => setPlaying(v)}
              className="group w-full cursor-pointer overflow-hidden rounded-[18px] text-left"
              style={{
                background: "white",
                border: "1px solid #E8C6C6",
                boxShadow: "0 6px 24px rgba(100,34,68,0.10)",
              }}
              whileHover={{ y: -5, boxShadow: "0 14px 40px rgba(100,34,68,0.18)" }}
              transition={{ duration: 0.22 }}
              aria-label={`Play ${v.name}'s story`}
            >
              {/* Thumbnail — 9:16 */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "9/16", background: "#2D1F2B" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://img.youtube.com/vi/${v.videoId}/hqdefault.jpg`}
                  alt={v.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,8,14,0.85) 0%, transparent 60%)" }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                    style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(10px)", border: "1.5px solid rgba(255,255,255,0.5)" }}
                  >
                    <Play size={18} fill="white" color="white" className="ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="font-display text-base font-semibold text-white leading-tight">{v.name}</p>
                  <p className="font-body text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.7)" }}>{v.location}</p>
                </div>
              </div>
              {/* Footer */}
              <div className="flex items-center justify-between px-3 py-2.5">
                <span className="rounded-full px-2.5 py-0.5 font-body text-xs font-semibold" style={{ background: "rgba(100,34,68,0.08)", color: "#642244" }}>
                  Mother Story
                </span>
                <span className="flex items-center gap-1 font-body text-xs" style={{ color: "#A89090" }}>
                  Watch <ArrowRight size={10} />
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* CTA */}
        <FadeUp className="mt-10 text-center">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 rounded-full font-body text-sm font-semibold px-8 py-3.5 text-white transition-all duration-300 group"
            style={{ backgroundColor: "#642244", boxShadow: "0 4px 20px rgba(100,34,68,0.30)" }}
          >
            Explore All Mother Stories
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </FadeUp>
      </div>
    </section>

      {/* ── VIDEO MODAL ── */}
      <AnimatePresence>
        {playing && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[100]"
              style={{ background: "rgba(20,8,14,0.88)", backdropFilter: "blur(8px)" }}
              onClick={() => setPlaying(null)}
            />
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 30 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-4 top-1/2 z-[101] mx-auto max-w-sm -translate-y-1/2"
            >
              <button
                type="button"
                onClick={() => setPlaying(null)}
                className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full"
                style={{ background: "rgba(255,255,255,0.15)", color: "white" }}
              >
                <X size={18} />
              </button>
              <div className="overflow-hidden rounded-[20px] shadow-2xl" style={{ aspectRatio: "9/16" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${playing.videoId}?autoplay=1&rel=0`}
                  title={playing.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                  style={{ border: "none" }}
                />
              </div>
              <div className="mt-4 text-center">
                <p className="font-display text-xl font-semibold text-white">{playing.name}</p>
                <p className="mt-1 font-body text-sm" style={{ color: "rgba(233,216,211,0.7)" }}>{playing.location}</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
