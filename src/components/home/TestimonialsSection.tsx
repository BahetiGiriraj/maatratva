"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Play, ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { FadeUp } from "@/components/ui/motion";

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
  { name: "Akshata Vishnu", location: "Hyderabad, India", text: "Both me and Akshata truly thank you from the bottom of our hearts. When we look back we cannot imagine how it would have been without your sessions. Your sessions are a huge source of positive energy filling the toughest days with freshness." },
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
        boxShadow: "0 4px 20px rgba(161,92,122,0.07)",
      }}
    >
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#A15C7A" color="#A15C7A" />)}
      </div>
      <p className="font-body text-sm leading-relaxed flex-1" style={{ color: "#7C6A6A", display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
        &ldquo;{text}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-3" style={{ borderTop: "1px solid rgba(233,216,211,0.6)" }}>
        <div className="w-8 h-8 rounded-full flex items-center justify-center font-display text-sm font-bold shrink-0"
          style={{ background: "rgba(161,92,122,0.1)", color: "#A15C7A" }}>
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
  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <motion.div
        style={{ display: "flex", width: "max-content" }}
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
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
  return (
    <section className="section-padding overflow-hidden"
      style={{ background: "linear-gradient(160deg, #F4EBE8 0%, #FAF7F4 100%)" }}>
      <div className="container-wide">
        <FadeUp className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel centered>Mother Stories</SectionLabel>
          <h2 className="font-display text-5xl md:text-6xl font-semibold leading-[1.1] mb-6" style={{ color: "#4B3B3B" }}>
            Voices of Our <span style={{ color: "#A15C7A" }}>Mothers</span>
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

      {/* Buttons */}
      <div className="container-wide mt-12">
        <FadeUp>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/stories"
              className="btn-primary group inline-flex items-center gap-2 text-base px-8 py-3.5">
              <Play size={15} fill="white" />
              Watch Video Testimonials
            </Link>
            
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
