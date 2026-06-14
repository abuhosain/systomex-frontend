"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { PROJECTS, PROJECT_CATEGORIES } from "@/data/projects";
import type { ProjectCategory } from "@/types/website";
import SectionHeading from "@/components/website/shared/SectionHeading";
import GlassCard from "@/components/website/shared/GlassCard";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/website/shared/ScrollReveal";
import { cn } from "@/utils/utils";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding relative">
      <div className="container">
        <SectionHeading
          badge="Portfolio"
          title="Project Showcase"
          subtitle="Explore our portfolio of robotics, IoT, and automation projects delivered for clients worldwide."
        />

        {/* Filters */}
        <ScrollReveal className="flex flex-wrap justify-center gap-3 mb-12">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === cat
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25"
                  : "border border-white/10 text-gray-400 hover:border-primary/30 hover:text-white",
              )}
            >
              {cat}
            </button>
          ))}
        </ScrollReveal>

        <StaggerContainer key={activeCategory} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
          {filtered.map((project) => (
            <StaggerItem key={project.id}>
              <GlassCard glow className="group h-full overflow-hidden flex flex-col">
                <div
                  className={`relative h-52 bg-gradient-to-br ${project.gradient} flex items-end p-6`}
                >
                  <div className="absolute inset-0 bg-grid-pattern opacity-15" />
                  <div className="relative">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-dark/50 backdrop-blur-sm text-secondary border border-white/10 mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm text-gray-400 leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-gray-400 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-secondary transition-colors"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
