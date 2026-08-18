"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import LegalModal from "@/components/ui/LegalModal";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "About Us", href: "/about" },
  { label: "Mother Stories", href: "/stories" },
  { label: "Meet the Team", href: "/team" },
  { label: "FAQ", href: "/#faq" },
];

const socials = [
  {
    href: "https://www.instagram.com/maatratva?igsi=MW1tamZnbzF2cTI2dA==", label: "Instagram",
    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  },
  {
    href: "https://www.youtube.com/@from_wombtowonder", label: "YouTube",
    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.57A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>,
  },
];

export default function Footer() {
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | null>(null);

  const whatsappUrl = `https://wa.me/917694832159?text=${encodeURIComponent(
    "Hi, want to know more! Got this from your website."
  )}`;

  return (
    <>
      <footer style={{ background: "#FAF7F4", color: "#4B3B3B" }} className="border-t border-[#E9D8D3]/60">
        <div className="container-wide py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

            {/* Brand & Logo */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex flex-col items-start gap-0">
                <Image
                  src="/nav-logo.png"
                  alt="Maatratva"
                  width={320}
                  height={120}
                  className="h-28 md:h-32 w-auto object-contain -ml-2"
                />
                <div>
                  <span className="font-display text-3xl font-semibold" style={{ color: "#A15C7A" }}>
                    Maatratva
                  </span>
                  <p className="font-body text-[0.65rem] tracking-[0.22em] uppercase mt-1 font-semibold" style={{ color: "#D4AF37" }}>
                    From Womb to Wonder
                  </p>
                </div>
              </div>
              <p className="font-body text-sm leading-loose max-w-sm" style={{ color: "#7C6A6A" }}>
                A holistic pregnancy wellness platform dedicated to supporting mothers throughout fertility, pregnancy, and postpartum recovery blending ancient wisdom with modern care.
              </p>
              <div className="flex items-center gap-3">
                {socials.map(({ svg, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#A15C7A] hover:text-white"
                    style={{ background: "#E9D8D3", color: "#A15C7A" }}>
                    {svg}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-5">
              <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "#A15C7A" }}>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="font-body text-sm transition-colors duration-200 hover:text-[#A15C7A]" style={{ color: "#7C6A6A" }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-5">
              <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "#A15C7A" }}>
                Get in Touch
              </h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:Maatratva.wonder@gmail.com" className="flex items-start gap-3 font-body text-sm group hover:text-[#A15C7A] transition-colors duration-200" style={{ color: "#7C6A6A" }}>
                    <Mail size={15} className="mt-0.5 shrink-0" /><span>Maatratva.wonder@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+917694832159" className="flex items-start gap-3 font-body text-sm group hover:text-[#A15C7A] transition-colors duration-200" style={{ color: "#7C6A6A" }}>
                    <Phone size={15} className="mt-0.5 shrink-0" /><span>+91 76948 32159</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 font-body text-sm" style={{ color: "#7C6A6A" }}>
                    <MapPin size={15} className="mt-0.5 shrink-0" /><span>Online</span>
                  </div>
                </li>
              </ul>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                style={{ background: "#25D366", color: "white" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#E9D8D3]/80">
          <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-center md:text-left" style={{ color: "#7C6A6A" }}>
              © {new Date().getFullYear()} Maatratva. All rights reserved. Crafted with love for every mother.
            </p>
            <div className="flex items-center gap-6">
              <button onClick={() => setLegalModal("privacy")}
                className="font-body text-xs transition-colors duration-200 hover:text-[#A15C7A] cursor-pointer bg-transparent border-none"
                style={{ color: "#7C6A6A" }}>
                Privacy Policy
              </button>
              <button onClick={() => setLegalModal("terms")}
                className="font-body text-xs transition-colors duration-200 hover:text-[#A15C7A] cursor-pointer bg-transparent border-none"
                style={{ color: "#7C6A6A" }}>
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