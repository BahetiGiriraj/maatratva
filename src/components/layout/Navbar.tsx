"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import LegalModal from "@/components/ui/LegalModal";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "About Us", href: "/about" },
  { label: "Mother Stories", href: "/stories" },
  {
    label: "More",
    href: "#",
    children: [
      { label: "Meet the Team", href: "/team" },
      { label: "FAQ", href: "/#faq" },
      { label: "Privacy Policy", href: "#privacy", isModal: true },
      { label: "Terms of Service", href: "#terms", isModal: true },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[rgba(250,247,244,0.92)] backdrop-blur-xl shadow-[0_2px_32px_rgba(161,92,122,0.08)] border-b border-[#E9D8D3]/60"
            : "bg-transparent"
        )}
      >
        <div className="container-wide">
          <nav className="flex items-center justify-between h-20 md:h-24">

            {/* ── LOGO — image only ── */}
            <Link href="/" className="shrink-0 group">
              <Image
                src="/nav-logo.png"
                alt="Maatratva"
                width={220}
                height={80}
                priority
                className="h-20 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* ── DESKTOP NAV ── */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDropdownOpen((p) => !p)}
                      className="flex items-center gap-1 px-4 py-2 rounded-full font-body text-sm font-medium text-[#7C6A6A] hover:text-[#A15C7A] hover:bg-[#E9D8D3]/40 transition-all duration-200"
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={cn("transition-transform duration-300", dropdownOpen && "rotate-180")}
                      />
                    </button>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.96 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full right-0 mt-2 w-52 bg-glass rounded-2xl shadow-[0_8px_40px_rgba(75,59,59,0.12)] overflow-hidden"
                        >
                          {link.children.map((child) =>
                            child.isModal ? (
                              <button
                                key={child.label}
                                onClick={() => {
                                  setDropdownOpen(false);
                                  setLegalModal(child.href === "#privacy" ? "privacy" : "terms");
                                }}
                                className="flex items-center w-full text-left px-5 py-3 font-body text-sm text-[#7C6A6A] hover:text-[#A15C7A] hover:bg-[#E9D8D3]/40 transition-colors duration-200"
                              >
                                {child.label}
                              </button>
                            ) : (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="flex items-center px-5 py-3 font-body text-sm text-[#7C6A6A] hover:text-[#A15C7A] hover:bg-[#E9D8D3]/40 transition-colors duration-200"
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
                    className={cn(
                      "px-4 py-2 rounded-full font-body text-sm font-medium transition-all duration-200",
                      pathname === link.href
                        ? "text-[#A15C7A] bg-[#E9D8D3]/50"
                        : "text-[#7C6A6A] hover:text-[#A15C7A] hover:bg-[#E9D8D3]/40"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* ── DESKTOP CTA ── */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+919999999999"
                className="flex items-center gap-2 px-4 py-2 font-body text-sm text-[#7C6A6A] hover:text-[#A15C7A] transition-colors duration-200"
              >
                <Phone size={15} />
              </a>
              <Link href="/contact" className="btn-primary text-sm px-6 py-2.5">
                Book Free Session
              </Link>
            </div>

            {/* ── MOBILE TOGGLE ── */}
            <button
              onClick={() => setMobileOpen((p) => !p)}
              className="lg:hidden p-2 rounded-xl transition-colors duration-200 hover:bg-[#E9D8D3]/50"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen
                ? <X size={22} style={{ color: "#A15C7A" }} />
                : <Menu size={22} style={{ color: "#4B3B3B" }} />
              }
            </button>
          </nav>
        </div>
      </motion.header>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-[#4B3B3B]/30 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm bg-[#FAF7F4] shadow-2xl flex flex-col"
            >
              {/* Drawer header — logo only */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#E9D8D3]">
                <Link href="/" onClick={() => setMobileOpen(false)}>
                  <Image
                    src="/nav-logo.png"
                    alt="Maatratva"
                    width={180}
                    height={72}
                    className="h-16 w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-xl hover:bg-[#E9D8D3]/50 transition-colors"
                >
                  <X size={20} style={{ color: "#7C6A6A" }} />
                </button>
              </div>

              {/* Drawer links */}
              <div className="flex-1 overflow-y-auto px-6 py-8 space-y-1">
                {navLinks.map((link, i) =>
                  link.children ? (
                    <div key={link.label}>
                      <p className="px-3 py-2 font-body text-xs font-semibold tracking-widest uppercase text-[#A89090]">
                        More
                      </p>
                      {link.children.map((child) =>
                        child.isModal ? (
                          <button
                            key={child.label}
                            onClick={() => {
                              setMobileOpen(false);
                              setLegalModal(child.href === "#privacy" ? "privacy" : "terms");
                            }}
                            className="flex items-center w-full text-left px-3 py-3 rounded-xl font-body text-sm text-[#7C6A6A] hover:text-[#A15C7A] hover:bg-[#E9D8D3]/40 transition-colors duration-200"
                          >
                            {child.label}
                          </button>
                        ) : (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center px-3 py-3 rounded-xl font-body text-sm text-[#7C6A6A] hover:text-[#A15C7A] hover:bg-[#E9D8D3]/40 transition-colors duration-200"
                          >
                            {child.label}
                          </Link>
                        )
                      )}
                    </div>
                  ) : (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 + 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center px-3 py-3.5 rounded-xl font-body text-base font-medium transition-all duration-200",
                          pathname === link.href
                            ? "text-[#A15C7A] bg-[#E9D8D3]/60"
                            : "text-[#4B3B3B] hover:text-[#A15C7A] hover:bg-[#E9D8D3]/40"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )
                )}
              </div>

              {/* Drawer CTA */}
              <div className="px-6 py-8 border-t border-[#E9D8D3] space-y-3">
                <Link href="/contact" className="btn-primary w-full text-center justify-center">
                  Book Free Session
                </Link>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-center justify-center"
                >
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Legal modals */}
      <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
    </>
  );
}
