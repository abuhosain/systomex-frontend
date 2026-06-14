"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/data/faq";
import SectionHeading from "@/components/website/shared/SectionHeading";
import ScrollReveal from "@/components/website/shared/ScrollReveal";
import { cn } from "@/utils/utils";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  return (
    <section className="section-padding relative">
      <div className="container max-w-3xl">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our services, products, and training programs."
        />

        <ScrollReveal>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-white/10 bg-card/60 backdrop-blur-xl overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/[0.02] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-white">{item.question}</span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300",
                        isOpen && "rotate-180 text-primary",
                      )}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
