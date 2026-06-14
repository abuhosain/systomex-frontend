"use client";

import { PROCESS_STEPS } from "@/data/features";
import SectionHeading from "@/components/website/shared/SectionHeading";
import ScrollReveal from "@/components/website/shared/ScrollReveal";

export default function Process() {
  return (
    <section className="section-padding relative bg-card/20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/[0.03] via-transparent to-primary/[0.03] pointer-events-none" />

      <div className="container relative">
        <SectionHeading
          badge="How We Work"
          title="Our Process"
          subtitle="A proven four-step methodology that ensures successful project delivery every time."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-secondary via-accent to-primary md:-translate-x-px hidden sm:block" />

          <div className="space-y-12">
            {PROCESS_STEPS.map((step, i) => (
              <ScrollReveal key={step.id} delay={i * 0.15} direction={i % 2 === 0 ? "left" : "right"}>
                <div
                  className={`relative flex flex-col md:flex-row items-start gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step number */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-secondary via-accent to-primary flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-secondary/30 md:absolute md:left-1/2 md:-translate-x-1/2">
                    {step.step}
                  </div>

                  {/* Content card */}
                  <div
                    className={`flex-1 md:w-[calc(50%-3rem)] ${
                      i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto"
                    }`}
                  >
                    <div className="p-6 rounded-2xl border border-white/10 bg-card/80 backdrop-blur-xl hover:border-secondary/30 transition-colors">
                      <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1 md:w-[calc(50%-3rem)]" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
