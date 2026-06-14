"use client";

import { cn } from "@/utils/utils";
import type { ReactNode } from "react";

interface GradientButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

export default function GradientButton({
  children,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled,
  onClick,
}: GradientButtonProps) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-secondary via-accent to-primary text-white shadow-lg shadow-secondary/25 hover:shadow-neon hover:brightness-110",
    outline:
      "border border-white/20 bg-white/5 text-white backdrop-blur-sm hover:border-secondary/50 hover:bg-secondary/10",
    ghost: "text-gray-300 hover:text-white hover:bg-white/5",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold",
        "outline-none ring-0",
        "focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0",
        "active:outline-none active:ring-0",
        "transition-[filter,opacity,background-color,border-color] duration-200",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        sizes[size],
        variants[variant],
        className,
      )}
    >
      {children}
    </button>
  );
}
