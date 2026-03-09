"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const headline = "Engineering Intelligent Systems";

export default function HeroMotionText() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      setTyped(headline.slice(0, i));
      if (i >= headline.length) {
        clearInterval(timer);
      }
    }, 55);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-16 md:h-20">
      <motion.p
        data-text={headline}
        className="glitch text-gradient glow-pulse font-heading text-3xl font-bold md:text-5xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {typed}
        <span className="typing-cursor">|</span>
      </motion.p>
    </div>
  );
}
