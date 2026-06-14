"use client";

import { motion } from "framer-motion";
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
      "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:brightness-110",
    outline:
      "border border-white/20 bg-white/5 text-white backdrop-blur-sm hover:border-primary/50 hover:bg-primary/10",
    ghost: "text-gray-300 hover:text-white hover:bg-white/5",
  };

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        sizes[size],
        variants[variant],
        className,
      )}
    >
      {children}
    </motion.button>
  );
}
