"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { HERO_STATS, SITE_DESCRIPTION } from "@/data/site";
import ParticlesBackground from "@/components/website/shared/ParticlesBackground";
import FloatingIcons from "@/components/website/shared/FloatingIcons";
import RobotIllustration from "@/components/website/shared/RobotIllustration";
import GradientButton from "@/components/website/shared/GradientButton";
import GlassCard from "@/components/website/shared/GlassCard";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 bg-gradient-radial opacity-60" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <ParticlesBackground />
      <FloatingIcons />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/15 rounded-full blur-[120px]" />

      <div className="container relative z-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-secondary text-sm font-medium"
            >
              <Sparkles className="w-4 h-4" />
              Next-Gen Robotics & Automation
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 font-display"
            >
              Building the Future with{" "}
              <span className="gradient-text">Robotics</span> &{" "}
              <span className="gradient-text">Automation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 max-w-xl"
            >
              {SITE_DESCRIPTION}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <GradientButton
                size="lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </GradientButton>
              <GradientButton
                variant="outline"
                size="lg"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Services
              </GradientButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {HERO_STATS.map((stat, i) => (
                <GlassCard key={stat.label} className="p-4 text-center" hover={false}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + i * 0.1, type: "spring" }}
                  >
                    <p className="text-2xl md:text-3xl font-bold gradient-text">
                      {stat.value}
                      {stat.suffix}
                    </p>
                    <p className="text-xs md:text-sm text-gray-400 mt-1">{stat.label}</p>
                  </motion.div>
                </GlassCard>
              ))}
            </motion.div>
          </motion.div>

          {/* Right illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <RobotIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
