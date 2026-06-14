"use client";

import { Clock, BarChart3, CheckCircle2 } from "lucide-react";
import { COURSES } from "@/data/courses";
import SectionHeading from "@/components/website/shared/SectionHeading";
import GlassCard from "@/components/website/shared/GlassCard";
import GradientButton from "@/components/website/shared/GradientButton";
import { StaggerContainer, StaggerItem } from "@/components/website/shared/ScrollReveal";

const LEVEL_COLORS = {
  Beginner: "text-accent bg-accent/10 border-accent/30",
  Intermediate: "text-secondary bg-secondary/10 border-secondary/30",
  Advanced: "text-primary bg-primary/10 border-primary/30",
};

export default function Courses() {
  return (
    <section id="courses" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-40 pointer-events-none" />

      <div className="container relative">
        <SectionHeading
          badge="Training"
          title="Learn Robotics from Industry Experts"
          subtitle="Hands-on courses designed to take you from beginner to professional robotics engineer."
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES.map((course) => (
            <StaggerItem key={course.id}>
              <GlassCard glow className="h-full flex flex-col overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${course.gradient}`} />

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full border ${LEVEL_COLORS[course.level]}`}
                    >
                      {course.level}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Clock className="w-3.5 h-3.5" />
                      {course.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">{course.title}</h3>

                  <ul className="space-y-2.5 mb-6 flex-1">
                    {course.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-gray-400">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <GradientButton
                    size="sm"
                    className="w-full"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    <BarChart3 className="w-4 h-4" />
                    Enroll Now
                  </GradientButton>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
