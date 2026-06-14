"use client";

import { motion } from "framer-motion";
import { Bot, Cpu, Wifi, Zap, CircuitBoard, Radio } from "lucide-react";

const ICONS = [
  { Icon: Bot, x: "10%", y: "20%", delay: 0 },
  { Icon: Cpu, x: "85%", y: "15%", delay: 0.5 },
  { Icon: Wifi, x: "75%", y: "70%", delay: 1 },
  { Icon: Zap, x: "15%", y: "75%", delay: 1.5 },
  { Icon: CircuitBoard, x: "50%", y: "10%", delay: 0.8 },
  { Icon: Radio, x: "90%", y: "45%", delay: 1.2 },
];

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {ICONS.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute p-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-primary/60"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            y: [0, -15, 0],
            scale: 1,
          }}
          transition={{
            opacity: { duration: 4, repeat: Infinity, delay },
            y: { duration: 4, repeat: Infinity, delay, ease: "easeInOut" },
            scale: { duration: 0.5, delay },
          }}
        >
          <Icon className="w-5 h-5" />
        </motion.div>
      ))}
    </div>
  );
}
