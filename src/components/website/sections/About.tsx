"use client";

import { Target, Eye, Users } from "lucide-react";
import { ACHIEVEMENTS } from "@/data/site";
import SectionHeading from "@/components/website/shared/SectionHeading";
import GlassCard from "@/components/website/shared/GlassCard";
import AnimatedCounter from "@/components/website/shared/AnimatedCounter";
import ScrollReveal from "@/components/website/shared/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/website/shared/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="section-padding relative bg-card/20">
      <div className="container">
        <SectionHeading
          badge="About Us"
          title="About SystomeX"
          subtitle="Empowering innovation through robotics, automation, and intelligent systems."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Story */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <p className="text-gray-400 leading-relaxed">
                Founded with a vision to democratize robotics and automation technology, SystomeX
                has grown into a trusted partner for businesses, universities, and innovators
                across South Asia. We bridge the gap between cutting-edge technology and practical
                real-world applications.
              </p>
              <p className="text-gray-400 leading-relaxed">
                From custom industrial automation systems to hands-on robotics training programs,
                our multidisciplinary team delivers solutions that are built to last. We believe
                in learning by doing — every project, product, and course reflects our commitment
                to excellence.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <GlassCard className="p-5">
                  <Target className="w-6 h-6 text-primary mb-3" />
                  <h4 className="font-semibold text-white mb-2">Mission</h4>
                  <p className="text-sm text-gray-400">
                    Empowering innovation through robotics, automation, and intelligent systems.
                  </p>
                </GlassCard>
                <GlassCard className="p-5">
                  <Eye className="w-6 h-6 text-secondary mb-3" />
                  <h4 className="font-semibold text-white mb-2">Vision</h4>
                  <p className="text-sm text-gray-400">
                    To become a leading robotics and automation company across South Asia.
                  </p>
                </GlassCard>
              </div>
            </div>
          </ScrollReveal>

          {/* Team illustration */}
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-3xl border border-white/10 bg-gradient-to-br from-primary/10 via-card to-secondary/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <div className="relative text-center p-8">
                  <div className="flex justify-center -space-x-4 mb-6">
                    {["RS", "FA", "JM", "PD"].map((initials, i) => (
                      <div
                        key={initials}
                        className="w-14 h-14 rounded-full border-2 border-dark flex items-center justify-center text-sm font-bold text-white"
                        style={{
                          background: `linear-gradient(135deg, hsl(${210 + i * 30}, 80%, 50%), hsl(${180 + i * 30}, 80%, 45%))`,
                          zIndex: 4 - i,
                        }}
                      >
                        {initials}
                      </div>
                    ))}
                  </div>
                  <Users className="w-12 h-12 text-primary/50 mx-auto mb-4" />
                  <p className="text-lg font-semibold text-white">Expert Engineering Team</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Robotics engineers, IoT specialists, and educators working together
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Achievements */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((item) => (
            <StaggerItem key={item.label}>
              <GlassCard className="p-6 text-center">
                <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                </p>
                <p className="text-sm text-gray-400">{item.label}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
