"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { CONTACT_INFO } from "@/data/site";
import SectionHeading from "@/components/website/shared/SectionHeading";
import GlassCard from "@/components/website/shared/GlassCard";
import GradientButton from "@/components/website/shared/GradientButton";
import ScrollReveal from "@/components/website/shared/ScrollReveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section id="contact" className="section-padding relative bg-card/20">
      <div className="absolute inset-0 bg-gradient-radial opacity-30 pointer-events-none" />

      <div className="container relative">
        <SectionHeading
          badge="Contact"
          title="Get In Touch"
          subtitle="Ready to start your next robotics project? Reach out and let's build something amazing together."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Company info */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-white hover:text-secondary transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-white hover:text-secondary transition-colors"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Address</p>
                    <p className="text-white">{CONTACT_INFO.address}</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal direction="right">
            <GlassCard className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="input-dark"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="input-dark"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+880..."
                    className="input-dark"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="input-dark resize-none"
                  />
                </div>

                <GradientButton type="submit" size="lg" className="w-full">
                  {submitted ? "Message Sent!" : "Send Message"}
                  <Send className="w-4 h-4" />
                </GradientButton>
              </form>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
