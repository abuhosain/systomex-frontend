"use client";

import { motion } from "framer-motion";

export default function RobotIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-full max-w-lg mx-auto aspect-square"
    >
      {/* Glow rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4 rounded-full border border-dashed border-primary/20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-12 rounded-full border border-dashed border-secondary/20"
      />

      {/* Central robot SVG */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.svg
          viewBox="0 0 400 400"
          className="w-full h-full drop-shadow-[0_0_60px_rgba(224,17,95,0.35)]"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <defs>
            <linearGradient id="robotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E0115F" />
              <stop offset="50%" stopColor="#8A2BE2" />
              <stop offset="100%" stopColor="#00F0FF" />
            </linearGradient>
            <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#141414" />
              <stop offset="100%" stopColor="#0a0a0a" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Antenna */}
          <line x1="200" y1="80" x2="200" y2="110" stroke="url(#robotGrad)" strokeWidth="3" />
          <circle cx="200" cy="75" r="8" fill="#00F0FF" filter="url(#glow)">
            <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
          </circle>

          {/* Head */}
          <rect x="150" y="110" width="100" height="80" rx="16" fill="url(#bodyGrad)" stroke="url(#robotGrad)" strokeWidth="2" />
          <rect x="170" y="135" width="25" height="25" rx="6" fill="#E0115F" opacity="0.9">
            <animate attributeName="opacity" values="0.9;0.5;0.9" dur="3s" repeatCount="indefinite" />
          </rect>
          <rect x="205" y="135" width="25" height="25" rx="6" fill="#E0115F" opacity="0.9">
            <animate attributeName="opacity" values="0.9;0.5;0.9" dur="3s" repeatCount="indefinite" />
          </rect>
          <rect x="175" y="170" width="50" height="6" rx="3" fill="#00F0FF" opacity="0.6" />

          {/* Neck */}
          <rect x="185" y="190" width="30" height="20" rx="4" fill="#141414" stroke="#8A2BE2" strokeWidth="1" opacity="0.8" />

          {/* Body */}
          <rect x="120" y="210" width="160" height="120" rx="20" fill="url(#bodyGrad)" stroke="url(#robotGrad)" strokeWidth="2" />
          <circle cx="200" cy="260" r="30" fill="none" stroke="#00F0FF" strokeWidth="2" opacity="0.5">
            <animate attributeName="r" values="30;35;30" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="260" r="15" fill="#8A2BE2" opacity="0.8" />

          {/* Arms */}
          <rect x="70" y="220" width="50" height="20" rx="10" fill="#141414" stroke="#E0115F" strokeWidth="1.5" />
          <rect x="280" y="220" width="50" height="20" rx="10" fill="#141414" stroke="#E0115F" strokeWidth="1.5" />
          <circle cx="60" cy="230" r="12" fill="#0a0a0a" stroke="#00F0FF" strokeWidth="2" />
          <circle cx="340" cy="230" r="12" fill="#0a0a0a" stroke="#00F0FF" strokeWidth="2" />

          {/* Legs */}
          <rect x="145" y="330" width="35" height="50" rx="8" fill="#141414" stroke="#8A2BE2" strokeWidth="1.5" />
          <rect x="220" y="330" width="35" height="50" rx="8" fill="#141414" stroke="#8A2BE2" strokeWidth="1.5" />
          <rect x="135" y="375" width="55" height="12" rx="6" fill="#E0115F" opacity="0.7" />
          <rect x="210" y="375" width="55" height="12" rx="6" fill="#E0115F" opacity="0.7" />
        </motion.svg>
      </div>

      {/* Orbiting dots */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-accent"
          style={{ top: "50%", left: "50%", marginTop: -6, marginLeft: -6 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_#00F0FF]"
            style={{ transform: `translateX(${100 + i * 20}px)` }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
