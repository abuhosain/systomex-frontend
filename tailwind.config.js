/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00F0FF",
        secondary: "#E0115F",
        magenta: "#FF00FF",
        dark: "#000000",
        card: "#0a0a0a",
        accent: "#8A2BE2",
        brand: {
          50:  "#fdf2ff",
          100: "#fae8ff",
          200: "#f5d0fe",
          300: "#f0abfc",
          400: "#e879f9",
          500: "#E0115F",
          600: "#8A2BE2",
          700: "#6B21A8",
          800: "#4B0082",
          900: "#2d0066",
          950: "#1a003d",
        },
        gray: {
          50:  "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
        success: "#00F0FF",
        warning: "#f59e0b",
        error:   "#ef4444",
        info:    "#00F0FF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "var(--font-inter)", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },
      maxWidth: {
        container: "1280px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(ellipse at center, rgba(224,17,95,0.14) 0%, rgba(138,43,226,0.1) 45%, transparent 70%)",
        "grid-pattern": "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        "gradient-brand": "linear-gradient(135deg, #E0115F 0%, #8A2BE2 50%, #00F0FF 100%)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      boxShadow: {
        neon: "0 0 20px rgba(0, 240, 255, 0.3), 0 0 40px rgba(224, 17, 95, 0.15)",
        "neon-sm": "0 0 10px rgba(0, 240, 255, 0.25)",
        "neon-magenta": "0 0 20px rgba(255, 0, 255, 0.3)",
      },
      animation: {
        fadeInUp:    "fadeInUp 0.6s ease-out forwards",
        slideInLeft: "slideInLeft 0.6s ease-out forwards",
        slideInRight:"slideInRight 0.6s ease-out forwards",
        shimmer:     "shimmer 1.8s infinite",
        float:       "float 6s ease-in-out infinite",
        pulseGlow:   "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-32px)" },
          to:   { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          from: { opacity: "0", transform: "translateX(32px)" },
          to:   { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%":      { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
