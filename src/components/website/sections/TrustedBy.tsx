"use client";

import { motion } from "framer-motion";
import { PARTNERS } from "@/data/site";
import ScrollReveal from "@/components/website/shared/ScrollReveal";

export default function TrustedBy() {
  return (
    <section className="relative py-16 border-y border-white/5 bg-dark/50">
      <div className="container">
        <ScrollReveal>
          <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-widest mb-10">
            Trusted by Innovators & Technology Enthusiasts
          </p>
        </ScrollReveal>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {PARTNERS.map((partner, i) => (
            <ScrollReveal key={partner.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-6 py-3 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-sm font-bold text-white">
                  {partner.initials}
                </div>
                <span className="text-sm font-medium text-gray-400 hidden sm:block">
                  {partner.name}
                </span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
