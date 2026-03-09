"use client";

import { motion } from "framer-motion";

export default function HologramOrb() {
  return (
    <div className="relative mx-auto h-72 w-72 md:h-96 md:w-96">
      <div className="absolute inset-0 rounded-full border border-cobalt/40 blur-sm" />
      <motion.div
        className="absolute inset-6 rounded-full"
        style={{
          background:
            "conic-gradient(from 180deg, rgba(59,130,246,0.92), rgba(37,99,235,0.85), rgba(96,165,250,0.78), rgba(59,130,246,0.92))"
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-14 rounded-full bg-white/80"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/80 blur-xl"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
      />
      <div className="absolute bottom-0 left-1/2 h-4 w-40 -translate-x-1/2 rounded-full bg-glow/40 blur-md" />
    </div>
  );
}
