"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type ModalType = "privacy" | "terms" | null;

interface LegalModalProps {
  type: ModalType;
  onClose: () => void;
}

const content = {
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: June 2025",
    sections: [
      { title: "Information We Collect", body: "We collect information you provide directly — including your name, email address, phone number, pregnancy stage, and wellness journey details you choose to share. We also collect usage data through analytics tools to improve our services." },
      { title: "How We Use Your Information", body: "We use the information we collect to provide and improve our services, respond to your enquiries, send wellness guidance relevant to your stage, and personalise your Maatratva experience." },
      { title: "Information Sharing", body: "We do not sell, trade, or transfer your personally identifiable information to outside parties. Your personal health information is held in strict confidence and used only to serve your wellness journey." },
      { title: "Data Security", body: "Your data is stored securely using Firebase infrastructure with encryption at rest and in transit. We regularly review and update our security practices." },
      { title: "Your Rights", body: "You have the right to access, update, correct or delete your personal information at any time. To exercise these rights, contact us at hello@maatratva.com." },
      { title: "Contact Us", body: "Questions about this Privacy Policy? Reach us at hello@maatratva.com or +91 99999 99999. We respond within 5 business days." },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "Last updated: June 2025",
    sections: [
      { title: "Acceptance of Terms", body: "By accessing and using Maatratva's services, programs, or website, you agree to be bound by these Terms of Service and our Privacy Policy." },
      { title: "Our Services", body: "Maatratva provides holistic pregnancy wellness programs and educational guidance. Our services complement — not replace — professional medical care. Always consult a qualified healthcare provider for medical decisions." },
      { title: "Program Enrollment", body: "Upon enrollment in any Maatratva program, you commit to the terms of that program including payment schedules. Refund and cancellation policies are communicated at the time of enrollment." },
      { title: "User Responsibilities", body: "You agree to use our services in good faith, provide accurate information, maintain confidentiality of your credentials, and treat all community members with respect and compassion." },
      { title: "Intellectual Property", body: "All content, materials, programs, recordings and methodologies provided by Maatratva are our intellectual property and protected by applicable laws. Reproduction or distribution without written permission is prohibited." },
      { title: "Limitation of Liability", body: "Maatratva provides wellness guidance and education. We are not liable for specific medical or health outcomes. Our programs are not a substitute for qualified medical treatment or emergency care." },
      { title: "Contact", body: "For questions about these Terms, contact us at hello@maatratva.com or +91 99999 99999." },
    ],
  },
};

export default function LegalModal({ type, onClose }: LegalModalProps) {
  // Close on Escape key
  useEffect(() => {
    if (!type) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [type, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (type) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [type]);

  const data = type ? content[type] : null;

  return (
    <AnimatePresence>
      {type && data && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100]"
            style={{ background: "rgba(75,59,59,0.55)", backdropFilter: "blur(6px)" }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-[5vh] bottom-[5vh] z-[101] max-w-2xl mx-auto flex flex-col rounded-[28px] overflow-hidden shadow-[0_32px_80px_rgba(75,59,59,0.3)]"
            style={{ background: "#FAF7F4" }}
          >
            {/* Header */}
            <div className="flex items-start justify-between px-8 py-7 shrink-0"
              style={{ borderBottom: "1px solid rgba(233,216,211,0.7)" }}>
              <div>
                <h2 className="font-display text-3xl font-semibold" style={{ color: "#4B3B3B" }}>
                  {data.title}
                </h2>
                <p className="font-body text-xs mt-1" style={{ color: "#A89090" }}>{data.updated}</p>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 hover:scale-110 ml-4 mt-1"
                style={{ background: "rgba(161,92,122,0.1)", color: "#A15C7A" }}
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-8 py-7 space-y-7">
              {data.sections.map((s, i) => (
                <div key={i}>
                  <h3 className="font-display text-xl font-semibold mb-2" style={{ color: "#4B3B3B" }}>
                    {s.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#7C6A6A" }}>
                    {s.body}
                  </p>
                  {i < data.sections.length - 1 && (
                    <div className="mt-6 h-px" style={{ background: "rgba(233,216,211,0.6)" }} />
                  )}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-8 py-5 shrink-0 flex justify-end"
              style={{ borderTop: "1px solid rgba(233,216,211,0.7)" }}>
              <button onClick={onClose} className="btn-primary px-8 py-2.5 text-sm">
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
