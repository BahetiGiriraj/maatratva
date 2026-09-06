"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import LegalModal from "@/components/ui/LegalModal";

// Brand tokens
const BG   = "#6E1A34";
const GOLD = "#C9A04D";
const WHITE = "#FFFFFF";
const WHITE_DIM = "rgba(255,255,255,0.70)";
const WHITE_HOVER_BG = "rgba(255,255,255,0.10)";
const GOLD_HOVER_BG  = "rgba(201,160,77,0.15)";

const navLinks = [
  { label: "Home",           href: "/"        },
  { label: "Programs",       href: "/programs" },
  { label: "About Us",       href: "/about"    },
  { label: "Mother Stories", href: "/stories"  },
  {
    label: "More",
    href: "#",
    children: [
      { label: "FAQ",              href: "/#faq",    isModal: false },
      { label: "Privacy Policy",   href: "#privacy", isModal: true  },
      { label: "Terms of Service", href: "#terms",   isModal: true  },
    ],
  },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [legalModal,   setLegalModal]   = useState<"privacy" | "terms" | null>(null);
  const pathname    = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = `https://wa.me/918815182545?text=${encodeURIComponent(
    "Hello Ma'am, I came across Maatratva and would like to know more about your pregnancy care and guidance programs. I'm interested in understanding how Maatratva can support me through my journey. Could you please guide me?"
  )}`;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMobileOpen(false); setDropdownOpen(false); }, [pathname]);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setDropdownOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? `rgba(110,26,52,0.97)`
            : BG,
          backdropFilter: scrolled ? "blur(16px)" : "none",
          boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.25)" : "none",
          borderBottom: `1px solid rgba(201,160,77,0.25)`,
        }}
      >
        {/* Gold shimmer line at very top */}
        <div className="h-[2px] w-full" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />

        <div className="container-wide">
          <nav className="flex items-center justify-between h-18 md:h-22 py-1">

            {/* ── LOGO + brand ── */}
            <Link href="/" className="shrink-0 group flex items-center gap-0 -ml-2">
              <Image
                src="/nav-logo.png"
                alt="Maatratva"
                width={200}
                height={80}
                priority
                className="h-18 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 brightness-0 invert"
                style={{ marginRight: "-10px" }}
              />
              <div className="flex flex-col leading-none">
                <span className="font-display text-2xl md:text-[1.7rem] font-semibold tracking-[-0.02em]" style={{ color: WHITE }}>
                  Maatratva<sup className="text-[0.6rem] font-normal align-super" style={{ color: GOLD }}>™</sup>
                </span>
                <span className="font-display text-sm md:text-base font-bold italic mt-0.5 whitespace-nowrap" style={{ color: GOLD }}>
                  A Journey From Womb to Wonder
                </span>
              </div>
            </Link>

            {/* ── DESKTOP NAV ── */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDropdownOpen((p) => !p)}
                      className="flex items-center gap-1 px-4 py-2 rounded-full font-body text-sm font-medium transition-all duration-200"
                      style={{ color: WHITE_DIM }}
                      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = WHITE; (e.currentTarget as HTMLButtonElement).style.background = WHITE_HOVER_BG; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = WHITE_DIM; (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
                    >
                      {link.label}
                      <ChevronDown size={13} className={cn("transition-transform duration-300", dropdownOpen && "rotate-180")} />
                    </button>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full right-0 mt-2 w-52 rounded-2xl overflow-hidden"
                          style={{
                            background: "#5A1529",
                            border: `1px solid rgba(201,160,77,0.3)`,
                            boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
                          }}
                        >
                          {link.children.map((child) =>
                            child.isModal ? (
                              <button
                                key={child.label}
                                onClick={() => {
                                  setDropdownOpen(false);
                                  setLegalModal(child.href === "#privacy" ? "privacy" : "terms");
                                }}
                                className="flex items-center w-full text-left px-5 py-3 font-body text-sm transition-colors duration-150"
                                style={{ color: WHITE_DIM }}
                                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = GOLD; (e.currentTarget as HTMLButtonElement).style.background = WHITE_HOVER_BG; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = WHITE_DIM; (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
                              >
                                {child.label}
                              </button>
                            ) : (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="flex items-center px-5 py-3 font-body text-sm transition-colors duration-150"
                                style={{ color: WHITE_DIM }}
                                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = GOLD; (e.currentTarget as HTMLAnchorElement).style.background = WHITE_HOVER_BG; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = WHITE_DIM; (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
                              >
                                {child.label}
                              </Link>
                            )
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-4 py-2 rounded-full font-body text-sm font-medium transition-all duration-200"
                    style={{
                      color: pathname === link.href ? GOLD : WHITE_DIM,
                      background: pathname === link.href ? GOLD_HOVER_BG : "transparent",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = GOLD; (e.currentTarget as HTMLAnchorElement).style.background = GOLD_HOVER_BG; }}
                    onMouseLeave={e => {
                      const active = pathname === link.href;
                      (e.currentTarget as HTMLAnchorElement).style.color = active ? GOLD : WHITE_DIM;
                      (e.currentTarget as HTMLAnchorElement).style.background = active ? GOLD_HOVER_BG : "transparent";
                    }}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full" style={{ background: GOLD }} />
                    )}
                  </Link>
                )
              )}
            </div>

            {/* ── DESKTOP CTA ── */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-sm px-6 py-2.5 rounded-full font-semibold tracking-wide transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${GOLD}, #E8CC6A)`,
                  color: BG,
                  boxShadow: `0 4px 18px rgba(201,160,77,0.45)`,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 8px 28px rgba(201,160,77,0.55)`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 4px 18px rgba(201,160,77,0.45)`;
                }}
              >
                Book Free Session
              </a>
            </div>

            {/* ── MOBILE TOGGLE ── */}
            <button
              onClick={() => setMobileOpen((p) => !p)}
              className="lg:hidden p-2 rounded-xl transition-colors duration-200"
              style={{ color: WHITE }}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 backdrop-blur-sm"
              style={{ background: "rgba(0,0,0,0.55)" }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm flex flex-col"
              style={{ background: BG, borderLeft: `1px solid rgba(201,160,77,0.25)` }}
            >
              {/* Gold top accent */}
              <div className="h-[2px]" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: `1px solid rgba(255,255,255,0.1)` }}>
                <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-0 -ml-1">
                  <Image src="/nav-logo.png" alt="Maatratva" width={160} height={64} className="h-14 w-auto object-contain brightness-0 invert" style={{ marginRight: "-8px" }} />
                  <div className="flex flex-col leading-none">
                    <span className="font-display text-xl font-semibold" style={{ color: WHITE }}>
                      Maatratva<sup className="text-[0.55rem] align-super" style={{ color: GOLD }}>™</sup>
                    </span>
                    <span className="font-display text-sm font-bold italic" style={{ color: GOLD }}>A Journey From Womb to Wonder</span>
                  </div>
                </Link>
                <button onClick={() => setMobileOpen(false)} className="p-2 rounded-xl transition-colors" style={{ color: WHITE }}>
                  <X size={20} />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto px-6 py-8 space-y-1">
                {navLinks.map((link, i) =>
                  link.children ? (
                    <div key={link.label}>
                      <p className="px-3 py-2 font-body text-xs font-semibold tracking-widest uppercase" style={{ color: `rgba(201,160,77,0.6)` }}>More</p>
                      {link.children.map((child) =>
                        child.isModal ? (
                          <button
                            key={child.label}
                            onClick={() => { setMobileOpen(false); setLegalModal(child.href === "#privacy" ? "privacy" : "terms"); }}
                            className="flex items-center w-full text-left px-3 py-3 rounded-xl font-body text-sm transition-colors duration-200"
                            style={{ color: WHITE_DIM }}
                          >
                            {child.label}
                          </button>
                        ) : (
                          <Link key={child.href} href={child.href}
                            className="flex items-center px-3 py-3 rounded-xl font-body text-sm transition-colors duration-200"
                            style={{ color: WHITE_DIM }}>
                            {child.label}
                          </Link>
                        )
                      )}
                    </div>
                  ) : (
                    <motion.div key={link.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 + 0.1 }}>
                      <Link
                        href={link.href}
                        className="flex items-center px-3 py-3.5 rounded-xl font-body text-base font-medium transition-all duration-200"
                        style={{
                          color:      pathname === link.href ? GOLD : WHITE,
                          background: pathname === link.href ? GOLD_HOVER_BG : "transparent",
                        }}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )
                )}
              </div>

              {/* Divider */}
              <div className="h-px mx-6" style={{ background: `rgba(201,160,77,0.25)` }} />

              {/* CTA */}
              <div className="px-6 py-8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center justify-center flex items-center rounded-full py-3.5 font-semibold tracking-wide transition-all duration-300"
                  style={{ background: `linear-gradient(135deg, ${GOLD}, #E8CC6A)`, color: BG }}
                >
                  Book Free Session
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
    </>
  );
}
