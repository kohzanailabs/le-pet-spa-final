"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function ScrollPet() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // Smooth out the scroll progress for a natural animal movement feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  // Calculate position: Walk across the screen (left to right)
  const x = useTransform(smoothProgress, [0, 1], ["-10%", "110%"]);
  
  // Subtle "waddle" or bounce animation
  const y = useTransform(smoothProgress, (value) => Math.sin(value * 60) * 8);

  return (
    <div className="fixed bottom-12 left-0 w-full pointer-events-none z-[100] overflow-hidden mix-blend-overlay opacity-30">
      <motion.div
        style={{ x, y }}
        className="text-4xl filter drop-shadow-lg"
      >
        🐕
      </motion.div>
    </div>
  );
}
