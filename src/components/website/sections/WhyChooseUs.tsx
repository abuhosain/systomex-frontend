"use client";

import { WHY_CHOOSE_US } from "@/data/features";
import SectionHeading from "@/components/website/shared/SectionHeading";
import GlassCard from "@/components/website/shared/GlassCard";
import { StaggerContainer, StaggerItem } from "@/components/website/shared/ScrollReveal";

export default function WhyChooseUs() {
  return (
    <section className="section-padding relative bg-card/20">
      <div className="container">
        <SectionHeading
          badge="Why SystomeX"
          title="Why Choose Us"
          subtitle="We combine deep technical expertise with a passion for innovation to deliver exceptional results."
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((feature) => {
            const Icon = feature.icon;
            return (
              <StaggerItem key={feature.id}>
                <GlassCard className="p-6 text-center h-full group">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center group-hover:shadow-[0_0_25px_rgba(138,43,226,0.25)] transition-shadow">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                </GlassCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
