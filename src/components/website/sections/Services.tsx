"use client";

import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/services";
import SectionHeading from "@/components/website/shared/SectionHeading";
import GlassCard from "@/components/website/shared/GlassCard";
import { StaggerContainer, StaggerItem } from "@/components/website/shared/ScrollReveal";

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />

      <div className="container relative">
        <SectionHeading
          badge="Our Services"
          title="Comprehensive Robotics & Technology Solutions"
          subtitle="From concept to deployment, we deliver end-to-end solutions that power innovation across industries."
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={service.id}>
                <GlassCard glow className="group h-full p-6 flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mb-5 group-hover:shadow-[0_0_20px_rgba(224,17,95,0.3)] transition-shadow">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed flex-1 mb-5">
                    {service.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-secondary transition-colors group/btn"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </GlassCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
