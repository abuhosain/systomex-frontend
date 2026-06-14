"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import SectionHeading from "@/components/website/shared/SectionHeading";
import ScrollReveal from "@/components/website/shared/ScrollReveal";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const testimonial = TESTIMONIALS[current];

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-30 pointer-events-none" />

      <div className="container relative">
        <SectionHeading
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Hear from the innovators, educators, and businesses who trust SystomeX."
        />

        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="relative p-8 md:p-12 rounded-3xl border border-white/10 bg-card/60 backdrop-blur-xl">
              <Quote className="absolute top-6 left-6 w-10 h-10 text-primary/20" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 italic">
                    &ldquo;{testimonial.review}&rdquo;
                  </p>

                  <div className="flex flex-col items-center gap-3">
                    <div
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg`}
                    >
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="p-2 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-primary/50 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex gap-2">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrent(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === current
                          ? "w-6 bg-gradient-to-r from-primary to-secondary"
                          : "bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="p-2 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-primary/50 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
