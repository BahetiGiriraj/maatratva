"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { FadeUp, FadeLeft, FadeRight } from "@/components/ui/motion";

type FormData = {
  name: string;
  email: string;
  phone: string;
  stage: string;
  type: string;
  message: string;
};

const contactInfo = [
  { icon: Phone, label: "Phone / WhatsApp", value: "+91 99999 99999", href: "tel:+919999999999" },
  { icon: Mail, label: "Email", value: "hello@maatratva.com", href: "mailto:hello@maatratva.com" },
  { icon: MapPin, label: "Location", value: "India — Online & In-Person", href: "#" },
];

const stageOptions = [
  "Planning to Conceive",
  "IVF Journey",
  "First Trimester (1–3 months)",
  "Second Trimester (4–6 months)",
  "Third Trimester (7–9 months)",
  "Postpartum Recovery",
  "Just Exploring",
];

export default function ContactPageContent() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    stage: "",
    type: "Free Session",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Integrate Firebase Firestore — save to 'contacts' collection
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="pt-24">
      {/* Hero */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{ background: "linear-gradient(160deg, #F4EBE8 0%, #FAF7F4 100%)" }}
      >
        <div className="container-wide relative z-10 text-center max-w-2xl mx-auto">
          <FadeUp>
            <SectionLabel centered>Connect With Us</SectionLabel>
            <h1
              className="font-display text-6xl md:text-7xl font-semibold leading-[1.05] mb-4"
              style={{ color: "#4B3B3B" }}
            >
              Begin Your{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #A15C7A, #D4AF37)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Journey
              </span>
            </h1>
            <p className="font-body text-lg leading-relaxed" style={{ color: "#7C6A6A" }}>
              Your free 30-minute discovery session awaits. Let&apos;s understand your journey and find the perfect path forward.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Contact form section */}
      <section className="section-padding" style={{ background: "#FAF7F4" }}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left — Info */}
            <FadeLeft className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-4xl font-semibold mb-3" style={{ color: "#4B3B3B" }}>
                  Let&apos;s Talk
                </h2>
                <p className="font-body text-base leading-relaxed" style={{ color: "#7C6A6A" }}>
                  We&apos;d love to understand where you are in your journey and how we can best support you. Reach out through any channel that feels comfortable.
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 p-4 rounded-2xl group transition-all duration-200"
                    style={{ background: "white", border: "1px solid rgba(233,216,211,0.6)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200"
                      style={{ background: "rgba(161,92,122,0.1)" }}
                    >
                      <Icon size={16} style={{ color: "#A15C7A" }} />
                    </div>
                    <div>
                      <p className="font-body text-xs tracking-wide" style={{ color: "#A89090" }}>{label}</p>
                      <p className="font-body text-sm font-medium" style={{ color: "#4B3B3B" }}>{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 rounded-2xl font-body text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "#25D366", color: "white", boxShadow: "0 8px 24px rgba(37,211,102,0.3)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>

              {/* Reassurance */}
              <div
                className="p-5 rounded-2xl"
                style={{ background: "rgba(161,92,122,0.05)", border: "1px solid rgba(161,92,122,0.1)" }}
              >
                <p className="font-body text-sm leading-relaxed" style={{ color: "#7C6A6A" }}>
                  <span className="font-semibold" style={{ color: "#A15C7A" }}>Your free session</span> is a no-pressure, confidential conversation. We listen first, advise second.
                </p>
              </div>
            </FadeLeft>

            {/* Right — Form */}
            <FadeRight className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                  style={{
                    background: "white",
                    border: "1px solid rgba(233,216,211,0.6)",
                    borderRadius: "2rem",
                    boxShadow: "0 8px 40px rgba(75,59,59,0.08)",
                  }}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "rgba(161,92,122,0.1)" }}
                  >
                    <Check size={36} style={{ color: "#A15C7A" }} />
                  </div>
                  <h3 className="font-display text-4xl font-semibold mb-3" style={{ color: "#4B3B3B" }}>
                    Thank You
                  </h3>
                  <p className="font-body text-base max-w-sm" style={{ color: "#7C6A6A" }}>
                    We&apos;ve received your message. Our team will reach out within 24 hours to schedule your free session.
                  </p>
                  <p className="font-display text-lg italic mt-4" style={{ color: "#A15C7A" }}>
                    &ldquo;Your journey is about to begin.&rdquo;
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 p-8 md:p-10"
                  style={{
                    background: "white",
                    border: "1px solid rgba(233,216,211,0.6)",
                    borderRadius: "2rem",
                    boxShadow: "0 8px 40px rgba(75,59,59,0.08)",
                  }}
                >
                  <h3 className="font-display text-3xl font-semibold mb-2" style={{ color: "#4B3B3B" }}>
                    Book Your Free Session
                  </h3>
                  <p className="font-body text-sm mb-6" style={{ color: "#7C6A6A" }}>
                    Fill in a few details and we&apos;ll be in touch within 24 hours.
                  </p>

                  {/* Name & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-xs font-semibold mb-2 tracking-wide" style={{ color: "#7C6A6A" }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Priya Sharma"
                        className="w-full px-4 py-3 rounded-xl font-body text-sm outline-none transition-all duration-200 focus:ring-2"
                        style={{
                          background: "#FAF7F4",
                          border: "1px solid rgba(233,216,211,0.8)",
                          color: "#4B3B3B",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#A15C7A";
                          e.target.style.boxShadow = "0 0 0 3px rgba(161,92,122,0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "rgba(233,216,211,0.8)";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                    <div>
                      <label className="block font-body text-xs font-semibold mb-2 tracking-wide" style={{ color: "#7C6A6A" }}>
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl font-body text-sm outline-none transition-all duration-200"
                        style={{
                          background: "#FAF7F4",
                          border: "1px solid rgba(233,216,211,0.8)",
                          color: "#4B3B3B",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#A15C7A";
                          e.target.style.boxShadow = "0 0 0 3px rgba(161,92,122,0.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "rgba(233,216,211,0.8)";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-body text-xs font-semibold mb-2 tracking-wide" style={{ color: "#7C6A6A" }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="priya@example.com"
                      className="w-full px-4 py-3 rounded-xl font-body text-sm outline-none transition-all duration-200"
                      style={{
                        background: "#FAF7F4",
                        border: "1px solid rgba(233,216,211,0.8)",
                        color: "#4B3B3B",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#A15C7A";
                        e.target.style.boxShadow = "0 0 0 3px rgba(161,92,122,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(233,216,211,0.8)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* Stage */}
                  <div>
                    <label className="block font-body text-xs font-semibold mb-2 tracking-wide" style={{ color: "#7C6A6A" }}>
                      Where are you in your journey?
                    </label>
                    <select
                      value={formData.stage}
                      onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl font-body text-sm outline-none transition-all duration-200 appearance-none cursor-pointer"
                      style={{
                        background: "#FAF7F4",
                        border: "1px solid rgba(233,216,211,0.8)",
                        color: formData.stage ? "#4B3B3B" : "#A89090",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#A15C7A";
                        e.target.style.boxShadow = "0 0 0 3px rgba(161,92,122,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(233,216,211,0.8)";
                        e.target.style.boxShadow = "none";
                      }}
                    >
                      <option value="">Select your stage</option>
                      {stageOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-body text-xs font-semibold mb-2 tracking-wide" style={{ color: "#7C6A6A" }}>
                      Tell us a little about your journey
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share what you're hoping to explore or any questions you have..."
                      className="w-full px-4 py-3 rounded-xl font-body text-sm outline-none transition-all duration-200 resize-none"
                      style={{
                        background: "#FAF7F4",
                        border: "1px solid rgba(233,216,211,0.8)",
                        color: "#4B3B3B",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#A15C7A";
                        e.target.style.boxShadow = "0 0 0 3px rgba(161,92,122,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(233,216,211,0.8)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send size={15} />
                        Book Your Free Session
                      </span>
                    )}
                  </button>

                  <p className="font-body text-xs text-center" style={{ color: "#A89090" }}>
                    By submitting, you agree to our{" "}
                    <a href="/privacy-policy" className="underline" style={{ color: "#A15C7A" }}>Privacy Policy</a>.
                    No spam, ever.
                  </p>
                </form>
              )}
            </FadeRight>
          </div>
        </div>
      </section>
    </div>
  );
}
