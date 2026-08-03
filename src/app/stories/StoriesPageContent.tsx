
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Quote, X } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";

const videos = [
  {
    id: "stuti-rathi",
    videoId: "dFHzJAor36s",
    name: "Stuti Rathi",
    location: "Dubai, UAE",
    tag: "Mother Story",
  },
  {
    id: "arpita-kothari",
    videoId: "LtbKzgnV9zw",
    name: "Arpita Kothari",
    location: "Alirajpur, India",
    tag: "Mother Story",
  },
  {
    id: "amisha-laddha",
    videoId: "PUqIxnrKxGc",
    name: "Amisha Chandak",
    location: "Indore, India",
    tag: "Mother Story",
  },
  {
    id: "palak-mahajan",
    videoId: "OCLb23Co8BI",
    name: "Palak Mahajan",
    location: "Khargon, India",
    tag: "Mother Story",
  },
  {
    id: "shraddha-surendra",
    videoId: "P7-iCMfOOCk",
    name: "Shraddha Surendra",
    location: "Dubai, UAE",
    tag: "Mother Story",
  },
  {
    id: "poonam-maheshwari",
    videoId: "py8eiW6Npb0",
    name: "Poonam Maheshwari",
    location: "Indore, India",
    tag: "Mother Story",
  },
  {
    id: "gayatri-joshi",
    videoId: "BWsn2peq5xs",
    name: "Gayatri Joshi",
    location: "Indore, India",
    tag: "Mother Story",
  },
  {
    id: "deepika-sharma",
    videoId: "HHTQZNe4VTw",
    name: "Deepika Sharma",
    location: "Indore, India",
    tag: "Mother Story",
  },
];

const allReviews = [
  {
    name: "Shilpi Kashup",
    location: "Indore, India",
    text: "Ever since I took Dhira mam's first seminar, I got the positive vibes. I started Garbh Sanskar classes and my perspective suddenly changed. Everyone including my husband started telling me that my nature has changed positively. I feel empowered to manage my mental well-being.",
  },
  {
    name: "Aayushi Jain",
    location: "Indore, India",
    text: "Every chat with Dhira ma'am was so relaxing that I used to forget about anxiety. The lessons on gratitude, forgiveness and love made me kinder. Her caring, smiling nature gives me a motherly feeling. I loved the meditation and Tratak kriya sessions.",
  },
  {
    name: "Nikita Kathpal",
    location: "Westcode, USA",
    text: "As a first-time mom-to-be, Dhira ji made this journey so exciting. The visualizations, baby talk, meditations and brain development activities truly provide a holistic approach. I am less anxious and more calm after joining these classes.",
  },
  {
    name: "Purvi Neema",
    location: "Mumbai, India",
    text: "My final months of pregnancy were the best and blessed months after I found Dhira ma'am. I was calm and happy during my labour and had only love and positivity — only because of her. She is the best mentor I can ever get.",
  },
  {
    name: "Jaya Bangad",
    location: "Randipur, India",
    text: "I feel blessed to have Dheera ma'am as my mentor for Garbh Sanskar. Like Krishna, she answered all my questions just like an elder sister. Her meditation sessions brought me calmness. Her advice was not only for pregnancy but for whole life.",
  },
  {
    name: "Riya Gujrati",
    location: "India",
    text: "Your visualization sessions make a person design their baby. You give every pregnant lady the strength to feel confident and positive. Me and my family is actually very much grateful for your generous support in my journey.",
  },
  {
    name: "Aayushi Gargitke",
    location: "India",
    text: "The Garbh Sanskar course provided comprehensive knowledge and practical techniques to nurture a positive environment for my baby. Sessions like meditation, baby visualisation and pregnancy insights are inspiring and very helpful.",
  },
  {
    name: "Aarohi",
    location: "Indore, India",
    text: "Dhira Mam has completely transformed my yoga practice with patient guidance and deep knowledge. Every class feels like a personalized experience. The things I learnt in prenatal yoga classes were invaluable — and I was blessed with a baby girl.",
  },
  {
    name: "Aditi Kothari",
    location: "Dubai, UAE",
    text: "Being alone in Dubai during my pregnancy was tough, yet you made me aware of how much this journey can impact. I invested my time in painting, reading and brain-storming activities. Glad to have you as my guiding light.",
  },
  {
    name: "Ankita Shikre",
    location: "India",
    text: "Ma'am, your experience will always be memorable. You made my pregnancy journey so easy. Whatever you said, I followed and the results were amazing. Whenever I was nervous you always gave me strength. Thank you so much.",
  },
  {
    name: "Bhavana Bajaj",
    location: "Chandrapur, India",
    text: "The first day we talked I was sure I was at the right place. All your activities — baby talk, meditation, baby visualization — are beautiful for connection with our child. You treat us as family members.",
  },
  {
    name: "Gayatri Joshi",
    location: "Indore, India",
    text: "Your breathing exercises were very helpful during labour pain. My baby is exactly as I had imagined. You helped me recover so much even though I joined late. Your work is beautiful — keep going.",
  },
  {
    name: "Palak Jindal",
    location: "Indore, India",
    text: "It was a wonderful journey with you. All your techniques — visualization, positive affirmations, NLP sessions — were really needful. You made us so comfortable that we didn't hesitate to discuss our problems.",
  },
  {
    name: "Nisha Patwari",
    location: "Indore, India",
    text: "Dheera ma'am's sessions are extremely beneficial for natural delivery. I found the meditation classes very helpful in connecting with my baby. Thank you for educating me on this beautiful journey.",
  },
  {
    name: "Shweta Mahajan",
    location: "Khargon, India",
    text: "Thank you for making my risky pregnancy journey smooth and relaxing. I had visualised my baby in your sessions and my baby boy exactly looks and behaves the way I wanted. Talking to Dhira ma'am always felt like talking to a family member.",
  },
  {
    name: "Varsha Rathi",
    location: "Raysen, India",
    text: "In the beginning I was really scared but because of you I enjoyed so much in this journey. Your sessions are very interesting and exciting. You always supported us with your guidance whenever we felt nervous.",
  },
  {
    name: "Vedehi Rathi",
    location: "Jaipur, India",
    text: "Thank you for all the guidance throughout my pregnancy. All the breathing techniques, exercises, visual imagination and labour pain knowledge — thank you is not enough. You even made my husband feel involved in our pregnancy journey.",
  },
  {
    name: "Pragati Jain",
    location: "Surat, India",
    text: "I suffered from infection and was admitted to the ICU. You handled the situation so well. After I gave birth to healthy twins, I felt so relieved. Both babies are healthy and exactly as I visualised in your sessions.",
  },
  {
    name: "Dr. Minal",
    location: "Mumbai, India",
    text: "My baby is very calm and recognises my voice. She still listens to all the mantras I used to recite during pregnancy. Suraksha chakra mantra really helped during my labor. I was very confident during the entire delivery.",
  },
  {
    name: "Akshata Vishnu",
    location: "Hyderabad, India",
    text: "Both me and Akshata truly thank you from the bottom of our hearts. When we look back we cannot imagine how it would have been without your sessions. Your sessions are a huge source of positive energy filling the toughest days with freshness.",
  },
  {
    name: "Parul Kabra",
    location: "Mandsour, India",
    text: "I really enjoyed each and every session with you. I always tried not to miss any class because they made me feel relaxed and connected. Thank you for making this special phase of my life even more beautiful and memorable.",
  },
];

interface Video {
  id: string;
  videoId: string;
  name: string;
  location: string;
  tag: string;
}

interface Review {
  name: string;
  location: string;
  text: string;
}

function VideoCard({
  video,
  onPlay,
}: {
  video: Video;
  onPlay: (video: Video) => void;
}) {
  return (
    <StaggerItem>
      <motion.button
        type="button"
        onClick={() => onPlay(video)}
        className="group relative mx-auto w-full max-w-[230px] cursor-pointer overflow-hidden rounded-[20px] text-left"
        style={{
          boxShadow: "0 8px 32px rgba(161,92,122,0.1)",
          border: "1px solid rgba(233,216,211,0.6)",
        }}
        whileHover={{
          y: -6,
          boxShadow: "0 20px 60px rgba(161,92,122,0.2)",
        }}
        transition={{ duration: 0.3 }}
        aria-label={`Play ${video.name}'s testimonial`}
      >
        <div className="relative aspect-[9/16] overflow-hidden bg-[#2D1F2B]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
            alt={`${video.name} testimonial`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div
            className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-80"
            style={{
              background:
                "linear-gradient(to top, rgba(30,15,20,0.85) 0%, rgba(30,15,20,0.15) 70%, transparent 100%)",
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
              style={{
                background: "rgba(255,255,255,0.16)",
                backdropFilter: "blur(12px)",
                border: "1.5px solid rgba(255,255,255,0.45)",
              }}
            >
              <Play size={22} fill="white" color="white" className="ml-1" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="font-display text-xl font-semibold text-white">
              {video.name}
            </p>
            <p className="mt-0.5 font-body text-sm text-white/75">
              {video.location}
            </p>
          </div>
        </div>

        <div
          className="flex items-center justify-between px-4 py-3"
          style={{ background: "white" }}
        >
          <span
            className="rounded-full px-2.5 py-1 font-body text-xs font-medium"
            style={{
              background: "rgba(161,92,122,0.08)",
              color: "#A15C7A",
            }}
          >
            {video.tag}
          </span>

          <span
            className="font-body text-xs font-medium"
            style={{ color: "#A89090" }}
          >
            Watch Story
          </span>
        </div>
      </motion.button>
    </StaggerItem>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <StaggerItem>
      <motion.article
        className="relative h-full rounded-[24px] p-7"
        style={{
          background: "white",
          border: "1px solid rgba(233,216,211,0.75)",
          boxShadow: "0 6px 28px rgba(75,59,59,0.05)",
        }}
        whileHover={{
          y: -5,
          boxShadow: "0 18px 44px rgba(161,92,122,0.12)",
        }}
        transition={{ duration: 0.25 }}
      >
        <Quote
          size={32}
          className="mb-5"
          style={{ color: "#A15C7A", opacity: 0.55 }}
        />

        <p
          className="font-body text-sm leading-relaxed"
          style={{ color: "#6F6A6A" }}
        >
          &ldquo;{review.text}&rdquo;
        </p>

        <div
          className="mt-6 pt-5"
          style={{ borderTop: "1px solid rgba(233,216,211,0.75)" }}
        >
          <p
            className="font-display text-lg font-semibold"
            style={{ color: "#4B3B3B" }}
          >
            {review.name}
          </p>
          <p
            className="mt-1 font-body text-xs"
            style={{ color: "#A89090" }}
          >
            {review.location}
          </p>
        </div>
      </motion.article>
    </StaggerItem>
  );
}

export default function StoriesPageContent() {
  const [playing, setPlaying] = useState<Video | null>(null);

  return (
    <div className="pt-24" style={{ background: "#FAF7F4" }}>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden py-24 md:py-28"
        style={{
          background: "linear-gradient(160deg, #F4EBE8 0%, #FAF7F4 100%)",
        }}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-20 blur-3xl"
            style={{ background: "#A15C7A" }}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="container-wide relative z-10 mx-auto max-w-3xl text-center">
          <FadeUp>
            <SectionLabel centered>Mother Stories</SectionLabel>

            <h1
              className="mb-6 font-display text-6xl font-semibold leading-[1.05] md:text-7xl"
              style={{ color: "#4B3B3B" }}
            >
              Stories That{" "}
              <span style={{ color: "#A15C7A" }}>Inspire</span>
            </h1>

            <p
              className="font-body text-xl leading-relaxed"
              style={{ color: "#7C6A6A" }}
            >
              Watch real mothers share their transformative journeys with
              Maatratva in their own words.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── VIDEO STORIES ── */}
      <section className="section-padding" style={{ background: "#FAF7F4" }}>
        <div className="container-wide">
          <FadeUp className="mb-12 text-center">
            <SectionLabel centered>Video Testimonials</SectionLabel>

            <h2
              className="font-display text-5xl font-semibold"
              style={{ color: "#4B3B3B" }}
            >
              Hear It From <span style={{ color: "#A15C7A" }}>Our Mothers</span>
            </h2>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onPlay={setPlaying}
              />
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── WRITTEN REVIEWS ── */}
      <section className="section-padding" style={{ background: "#F4EBE8" }}>
        <div className="container-wide">
          <FadeUp className="mx-auto mb-14 max-w-2xl text-center">
            <SectionLabel centered>Words From Our Mothers</SectionLabel>

            <h2
              className="font-display text-5xl font-semibold"
              style={{ color: "#4B3B3B" }}
            >
              Their Journeys,{" "}
              <span style={{ color: "#A15C7A" }}>In Their Words</span>
            </h2>
          </FadeUp>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allReviews.map((review) => (
              <ReviewCard
                key={`${review.name}-${review.location}`}
                review={review}
              />
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── VIDEO MODAL ── */}
      <AnimatePresence>
        {playing && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[100]"
              style={{
                background: "rgba(30,15,20,0.85)",
                backdropFilter: "blur(8px)",
              }}
              onClick={() => setPlaying(null)}
            />

            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 30 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-4 top-1/2 z-[101] mx-auto max-w-md -translate-y-1/2"
            >
              <button
                type="button"
                onClick={() => setPlaying(null)}
                className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-200 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  color: "white",
                }}
                aria-label="Close video"
              >
                <X size={18} />
              </button>

              <div
                className="overflow-hidden rounded-[20px] shadow-2xl"
                style={{ aspectRatio: "9/16" }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${playing.videoId}?autoplay=1&rel=0`}
                  title={`${playing.name} — Maatratva testimonial`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>

              <div className="mt-4 text-center">
                <p className="font-display text-xl font-semibold text-white">
                  {playing.name}
                </p>
                <p
                  className="mt-1 font-body text-sm"
                  style={{ color: "rgba(233,216,211,0.7)" }}
                >
                  {playing.location} · {playing.tag}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
