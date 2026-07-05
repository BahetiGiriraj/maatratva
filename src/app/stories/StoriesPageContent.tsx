"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

// ── Replace YouTube video IDs with real ones when available ──────────────────
// Format: https://www.youtube.com/watch?v=VIDEO_ID
// Thumbnail: https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg

const videos = [
  {
    id: "v1",
    videoId: "dQw4w9WgXcQ", // replace with real YouTube ID
    name: "Shilpi Kashup",
    location: "Indore",
    tag: "Garbh Sanskar",
  },
  {
    id: "v2",
    videoId: "dQw4w9WgXcQ",
    name: "Aayushi Jain",
    location: "Indore",
    tag: "Mental Wellness",
  },
  {
    id: "v3",
    videoId: "dQw4w9WgXcQ",
    name: "Nikita Kathpal",
    location: "USA",
    tag: "Full Program",
  },
  {
    id: "v4",
    videoId: "dQw4w9WgXcQ",
    name: "Purvi Neema",
    location: "Mumbai",
    tag: "Birth Preparation",
  },
  {
    id: "v5",
    videoId: "dQw4w9WgXcQ",
    name: "Aditi Kothari",
    location: "Dubai",
    tag: "Prenatal Yoga",
  },
  {
    id: "v6",
    videoId: "dQw4w9WgXcQ",
    name: "Dr. Minal",
    location: "Mumbai",
    tag: "Expert Care",
  },
  {
    id: "v7",
    videoId: "dQw4w9WgXcQ",
    name: "Pragati Jain",
    location: "Surat",
    tag: "High-Risk Pregnancy",
  },
  {
    id: "v8",
    videoId: "dQw4w9WgXcQ",
    name: "Akshata Vishnu",
    location: "Hyderabad",
    tag: "Full Program",
  },
  {
    id: "v9",
    videoId: "dQw4w9WgXcQ",
    name: "Shweta Mahajan",
    location: "Khargon",
    tag: "Garbh Sanskar",
  },
];

interface Video {
  id: string;
  videoId: string;
  name: string;
  location: string;
  tag: string;
}

// ── Video thumbnail card ─────────────────────────────────────────────────────
function VideoCard({ video, onPlay }: { video: Video; onPlay: (v: Video) => void }) {
  return (
    <StaggerItem>
      <motion.div
        className="group cursor-pointer rounded-[20px] overflow-hidden relative"
        style={{
          boxShadow: "0 8px 32px rgba(161,92,122,0.1)",
          border: "1px solid rgba(233,216,211,0.6)",
        }}
        whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(161,92,122,0.2)" }}
        transition={{ duration: 0.3 }}
        onClick={() => onPlay(video)}
      >
        {/* Thumbnail via YouTube */}
        <div className="relative aspect-video overflow-hidden bg-[#2D1F2B]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
            alt={`${video.name} testimonial`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Dark overlay */}
          <div
            className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-60"
            style={{ background: "linear-gradient(to top, rgba(30,15,20,0.75) 0%, rgba(30,15,20,0.2) 60%, transparent 100%)" }}
          />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(12px)",
                border: "1.5px solid rgba(255,255,255,0.4)",
              }}
            >
              <Play size={22} fill="white" color="white" className="ml-1" />
            </motion.div>
          </div>
        </div>

        {/* Card footer */}
        <div
          className="px-5 py-4 flex items-center justify-between"
          style={{ background: "white" }}
        >
          <div>
            <p className="font-body text-sm font-semibold" style={{ color: "#4B3B3B" }}>
              {video.name}
            </p>
            <p className="font-body text-xs mt-0.5" style={{ color: "#A89090" }}>
              {video.location}
            </p>
          </div>
          <span
            className="px-3 py-1 rounded-full font-body text-xs font-medium"
            style={{ background: "rgba(161,92,122,0.08)", color: "#A15C7A" }}
          >
            {video.tag}
          </span>
        </div>
      </motion.div>
    </StaggerItem>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function StoriesPageContent() {
  const [playing, setPlaying] = useState<Video | null>(null);

  return (
    <div className="pt-24" style={{ background: "#FAF7F4" }}>

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden py-24 md:py-28"
        style={{ background: "linear-gradient(160deg, #F4EBE8 0%, #FAF7F4 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: "#A15C7A" }}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>
        <div className="container-wide relative z-10 text-center max-w-3xl mx-auto">
          <FadeUp>
            <SectionLabel centered>Mother Stories</SectionLabel>
            <h1
              className="font-display text-6xl md:text-7xl font-semibold leading-[1.05] mb-6"
              style={{ color: "#4B3B3B" }}
            >
              Stories That{" "}
              <span style={{ color: "#A15C7A" }}>Inspire</span>
            </h1>
            <p className="font-body text-xl leading-relaxed" style={{ color: "#7C6A6A" }}>
              Watch real mothers share their transformative journeys with Maatratva — in their own words.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── VIDEO GRID ── */}
      <section className="section-padding" style={{ background: "#FAF7F4" }}>
        <div className="container-wide">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} onPlay={setPlaying} />
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── LIGHTBOX MODAL ── */}
      <AnimatePresence>
        {playing && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[100]"
              style={{ background: "rgba(30,15,20,0.85)", backdropFilter: "blur(8px)" }}
              onClick={() => setPlaying(null)}
            />

            {/* Video modal */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 30 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed z-[101] inset-x-4 top-1/2 -translate-y-1/2 max-w-3xl mx-auto"
            >
              {/* Close */}
              <button
                onClick={() => setPlaying(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: "rgba(255,255,255,0.15)", color: "white" }}
                aria-label="Close video"
              >
                <X size={18} />
              </button>

              {/* YouTube embed */}
              <div
                className="rounded-[20px] overflow-hidden shadow-2xl"
                style={{ aspectRatio: "16/9" }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${playing.videoId}?autoplay=1&rel=0`}
                  title={`${playing.name} — Maatratva testimonial`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Caption */}
              <div className="mt-4 text-center">
                <p className="font-display text-xl font-semibold text-white">{playing.name}</p>
                <p className="font-body text-sm mt-1" style={{ color: "rgba(233,216,211,0.7)" }}>
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
