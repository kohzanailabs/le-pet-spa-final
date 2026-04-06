"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const items = [
  { id: 1, icon: "🐶", size: "text-4xl", top: "15%", left: "10%" },
  { id: 2, icon: "🐕", size: "text-3xl", top: "45%", left: "85%" },
  { id: 3, icon: "🐩", size: "text-4xl", top: "75%", left: "15%" },
  { id: 4, icon: "🐾", size: "text-2xl", top: "25%", left: "70%" },
  { id: 5, icon: "🐈", size: "text-3xl", top: "85%", left: "60%" },
  { id: 6, icon: "🦴", size: "text-lg", top: "10%", left: "40%" },
];

function EvadeItem({ item }) {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const translateX = useSpring(0, springConfig);
  const translateY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const itemCenterX = rect.left + rect.width / 2;
      const itemCenterY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - itemCenterX;
      const distanceY = e.clientY - itemCenterY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      
      const threshold = 150; // Distance to start evading
      
      if (distance < threshold) {
        const factor = (threshold - distance) / threshold;
        translateX.set(-distanceX * factor * 1.5);
        translateY.set(-distanceY * factor * 1.5);
      } else {
        translateX.set(0);
        translateY.set(0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [translateX, translateY]);

  return (
    <motion.div
      ref={ref}
      style={{
        position: "absolute",
        top: item.top,
        left: item.left,
        x: translateX,
        y: translateY,
        pointerEvents: "none",
        zIndex: 5,
        opacity: 0.15,
      }}
      className="select-none filter drop-shadow-sm"
    >
      <span className={item.size}>{item.icon}</span>
    </motion.div>
  );
}

export default function InteractiveElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {items.map((item) => (
        <EvadeItem key={item.id} item={item} />
      ))}
    </div>
  );
}
