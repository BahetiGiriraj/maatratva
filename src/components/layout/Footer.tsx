"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import LegalModal from "@/components/ui/LegalModal";

const BG    = "#642244";
const DARK  = "#4A1733";
const GOLD  = "#CA9C6A";
const WHITE = "#FFFFFF";
const WHITE_DIM = "rgba(255,255,255,0.65)";

const quickLinks = [
  { label: "Home",           href: "/"         },
  { label: "Programs",       href: "/programs"  },
  { label: "About Us",       href: "/about"     },
  { label: "Mother Stories", href: "/stories"   },
  { label: "Meet the Team",  href: "/team"      },
  { label: "FAQ",            href: "/#faq"      },
];

const socials = [
  {
    href: "https://www.instagram.com/maatratva?igsi=MW1tamZnbzF2cTI2dA==",
    label: "Instagram",
    svg: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  },
  {
    href: "https://www.youtube.com/@from_wombtowonder",
    label: "YouTube",
    svg: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.57A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>,
  },
  {
    href: "https://share.google/nNYxGFtoVDgVtg0zp",
    label: "Google",
    svg: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>,
  },
];

export default function Footer() {
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | null>(null);

  const whatsappUrl = `https://wa.me/918815182545?text=${encodeURIComponent(
    "Hello Ma'am, I came across Maatratva and would like to know more about your pregnancy care and guidance programs. I'm interested in understanding how Maatratva can support me through my journey. Could you please guide me?"
  )}`;

  return (
    <>
      <footer style={{ background: BG, color: WHITE }}>

        {/* Gold shimmer top border */}
        <div className="h-[2px]" style={{ background: `linear-gradient(90deg, transparent 0%, ${GOLD} 50%, transparent 100%)` }} />

        {/* Main content */}
        <div className="container-wide py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

            {/* ── Brand ── */}
            <div className="lg:col-span-2 space-y-4">
              {/* Logo + name row */}
              <div className="flex flex-row items-center gap-0 -ml-2">
                <Image
                               src="/nav-logo.png"
                               alt="Maatratva"
                               width={240}
                               height={96}
                               priority
                               className="h-22 md:h-26 w-auto object-contain object-bottom brightness-0 invert"
                               style={{ marginRight: "-10px", marginTop: "10px" }}
                             />
                <div className="flex flex-col leading-none">
                  <span className="font-display text-3xl md:text-4xl font-semibold" style={{ color: WHITE }}>
                    Maatratva<sup className="text-[0.65rem] font-normal align-super" style={{ color: GOLD }}>™</sup>
                  </span>
                  <span className="font-display text-base md:text-lg font-bold italic whitespace-nowrap" style={{ color: GOLD }}>
                    A Journey From Womb to Wonder
                  </span>
                </div>
              </div>

              

              <p className="font-body text-sm leading-relaxed max-w-sm" style={{ color: WHITE_DIM }}>
                A holistic pregnancy wellness platform supporting mothers through fertility, pregnancy and postpartum  blending ancient wisdom with modern care.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-3 pt-1">
                {socials.map(({ svg, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{
                      background: "rgba(255,255,255,0.10)",
                      color: GOLD,
                      border: `1px solid rgba(201,160,77,0.35)`,
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = GOLD;
                      (e.currentTarget as HTMLAnchorElement).style.color = BG;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.10)";
                      (e.currentTarget as HTMLAnchorElement).style.color = GOLD;
                    }}
                  >
                    {svg}
                  </a>
                ))}
              </div>
            </div>

            {/* ── Quick Links ── */}
            <div className="space-y-5">
              <h4
                className="font-body text-xs font-bold tracking-[0.22em] uppercase pb-3"
                style={{ color: GOLD, borderBottom: `1px solid rgba(201,160,77,0.3)` }}
              >
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-sm flex items-center gap-2 transition-all duration-200 group"
                      style={{ color: WHITE_DIM }}
                      onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = GOLD}
                      onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = WHITE_DIM}
                    >
                      <span className="w-1 h-1 rounded-full shrink-0 transition-all duration-200" style={{ background: GOLD, opacity: 0.5 }} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Contact ── */}
            <div className="space-y-5">
              <h4
                className="font-body text-xs font-bold tracking-[0.22em] uppercase pb-3"
                style={{ color: GOLD, borderBottom: `1px solid rgba(201,160,77,0.3)` }}
              >
                Get in Touch
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:Maatratva.wonder@gmail.com"
                    className="flex items-start gap-3 font-body text-sm transition-colors duration-200"
                    style={{ color: WHITE_DIM }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = GOLD}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = WHITE_DIM}
                  >
                    <Mail size={14} className="mt-0.5 shrink-0" style={{ color: GOLD }} />
                    <span>Maatratva.wonder@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+918815182545"
                    className="flex items-start gap-3 font-body text-sm transition-colors duration-200"
                    style={{ color: WHITE_DIM }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = GOLD}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = WHITE_DIM}
                  >
                    <Phone size={14} className="mt-0.5 shrink-0" style={{ color: GOLD }} />
                    <span>+91 88151 82545</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 font-body text-sm" style={{ color: WHITE_DIM }}>
                    <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: GOLD }} />
                    <span>Online — India & Worldwide</span>
                  </div>
                </li>
              </ul>

              {/* WhatsApp CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-sm font-semibold transition-all duration-300 mt-2"
                style={{
                  background: "#25D366",
                  color: WHITE,
                  boxShadow: "0 4px 16px rgba(37,211,102,0.35)",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{ background: DARK, borderTop: `1px solid rgba(201,160,77,0.20)` }}>
          <div className="container-wide py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

            {/* Left — all in one line */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
              <span className="font-body" style={{ color: WHITE_DIM }}>With blessings of</span>
              <span
                className="text-base"
                style={{
                  color: GOLD,
                  fontFamily: "'Dancing Script', cursive",
                  fontWeight: 600,
                }}
              >
                Radha Madhav
              </span>
              <span className="font-body" style={{ color: WHITE_DIM }}>|</span>
              <span className="font-body" style={{ color: WHITE_DIM }}>
                © 2026 Maatratva™. All rights reserved.
              </span>
              <span className="font-body" style={{ color: WHITE_DIM }}>|</span>
              <span className="font-body" style={{ color: WHITE_DIM }}>
                Crafted with love for every mother. 🌸
              </span>
            </div>

            {/* Right — legal links */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => setLegalModal("privacy")}
                className="font-body text-xs transition-colors duration-200 bg-transparent border-none cursor-pointer"
                style={{ color: WHITE_DIM }}
                onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.color = GOLD}
                onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.color = WHITE_DIM}
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setLegalModal("terms")}
                className="font-body text-xs transition-colors duration-200 bg-transparent border-none cursor-pointer"
                style={{ color: WHITE_DIM }}
                onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.color = GOLD}
                onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.color = WHITE_DIM}
              >
                Terms of Service
              </button>
            </div>

          </div>
        </div>
      </footer>

      <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
    </>
  );
}
