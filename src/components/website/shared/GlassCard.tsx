import type { ReactNode } from "react";
import { cn } from "@/utils/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function GlassCard({
  children,
  className,
  hover = true,
  glow = false,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-white/10 bg-card/80 backdrop-blur-xl",
        "shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
        hover && "transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_40px_rgba(10,132,255,0.15)]",
        glow && "hover:shadow-[0_0_30px_rgba(10,132,255,0.2)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
