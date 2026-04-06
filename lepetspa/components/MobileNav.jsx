"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { business } from "@/config/business";

const navItems = [
  { label: "Home",     href: "#hero",     icon: "🏠" },
  { label: "About",    href: "#mission",  icon: "💚" },
  { label: "Services", href: "#services", icon: "✂️" },
  { label: "Hours",    href: "#hours",    icon: "🕐" },
  { label: "Contact",  href: "#contact",  icon: "📍" },
];

export default function MobileNav() {
  const [active, setActive] = useState("hero");
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      // Hide on scroll down, show on scroll up
      setVisible(current < lastScrollY || current < 100);
      setLastScrollY(current);

      // Detect active section
      const sections = navItems.map((item) => item.href.slice(1));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActive(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleClick = (e, href) => {
    e.preventDefault();
    setActive(href.slice(1));
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: visible ? 0 : 100 }}
      transition={{ type: "spring", damping: 20, stiffness: 200 }}
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 pb-safe"
    >
      <div
        className="mx-3 mb-3 rounded-2xl px-2 py-2 flex items-center justify-around shadow-2xl"
        style={{
          background: "rgba(255, 253, 248, 0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(45,90,39,0.12)",
          boxShadow: "0 -8px 40px rgba(0,0,0,0.15), 0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        {navItems.map((item) => {
          const isActive = active === item.href.slice(1);
          return (
            <a
              key={item.href}
              href={item.href}
              id={`mobile-底nav-${item.label.toLowerCase()}`}
              onClick={(e) => handleClick(e, item.href)}
              className="flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl transition-all duration-300 min-w-0 flex-1"
              style={isActive ? { background: "rgba(45,90,39,0.1)" } : {}}
            >
              <motion.span
                animate={isActive ? { scale: 1.2, y: -2 } : { scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="text-xl"
              >
                {item.icon}
              </motion.span>
              <span
                className="text-[10px] font-semibold truncate w-full text-center"
                style={{ color: isActive ? "#2D5A27" : "#888" }}
              >
                {item.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="active-dot"
                  className="w-1 h-1 rounded-full"
                  style={{ background: "#2D5A27" }}
                />
              )}
            </a>
          );
        })}
      </div>
    </motion.div>
  );
}
