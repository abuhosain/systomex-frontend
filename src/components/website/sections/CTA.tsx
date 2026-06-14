"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import GradientButton from "@/components/website/shared/GradientButton";
import ScrollReveal from "@/components/website/shared/ScrollReveal";

export default function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container">
        <ScrollReveal>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-90" />
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

            <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                Ready to Build Your Next Robotics Project?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your vision and create innovative solutions together.
                Schedule a free consultation with our expert team today.
              </p>
              <GradientButton
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Calendar className="w-5 h-5" />
                Schedule Consultation
              </GradientButton>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
