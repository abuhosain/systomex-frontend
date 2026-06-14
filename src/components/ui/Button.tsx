"use client";

import React from "react";
import { cn } from "@/utils/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      loading = false,
      className,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-semibold rounded-xl duration-200 outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 active:outline-none active:ring-0 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-gradient-to-r from-secondary via-accent to-primary text-white hover:brightness-110 active:opacity-90 shadow-neon-sm transition-[filter,opacity]",
      secondary:
        "bg-white/10 text-white hover:bg-white/15 active:bg-white/20 border border-white/10 transition-colors",
      outline:
        "border border-white/20 bg-transparent text-white hover:bg-white/5 active:bg-white/10 transition-colors",
      ghost:
        "bg-transparent text-gray-400 hover:bg-white/5 hover:text-white active:bg-white/10 transition-colors",
      danger:
        "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 transition-colors",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-xs h-8",
      md: "px-4 py-2 text-sm h-10",
      lg: "px-5 py-3 text-sm h-12",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(base, variants[variant], sizes[size], fullWidth && "w-full", className)}
        {...props}
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            {children}
          </>
        ) : (
          children
        )}
      </button>
    );
  },
);

Button.displayName = "Button";
export default Button;
