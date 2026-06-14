"use client";

import { ArrowUpRight, Package } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import SectionHeading from "@/components/website/shared/SectionHeading";
import GlassCard from "@/components/website/shared/GlassCard";
import { StaggerContainer, StaggerItem } from "@/components/website/shared/ScrollReveal";

export default function Products() {
  return (
    <section id="products" className="section-padding relative bg-card/30">
      <div className="container">
        <SectionHeading
          badge="Products"
          title="Featured Robotics Products"
          subtitle="Explore our curated collection of robotics kits, development boards, and learning bundles."
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <StaggerItem key={product.id}>
              <GlassCard glow className="group h-full overflow-hidden flex flex-col">
                {/* Image placeholder */}
                <div
                  className={`relative h-48 bg-gradient-to-br ${product.gradient} flex items-center justify-center overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                  <Package className="w-16 h-16 text-white/30 group-hover:scale-110 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-dark/60 backdrop-blur-sm text-secondary border border-white/10">
                    {product.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed flex-1 mb-5">
                    {product.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-secondary transition-colors"
                  >
                    View Details
                    <ArrowUpRight className="w-4 h-4" />
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
