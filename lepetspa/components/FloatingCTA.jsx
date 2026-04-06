"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { business } from "@/config/business";
import { Mail, Send, ChevronRight } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.4);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mailtoUrl = `mailto:${business.contact.email}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.8 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20 
          }}
          className="fixed bottom-8 right-8 z-[60] group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Card Container */}
          <motion.div
            layout
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30
            }}
            className="glass-blur-heavy rounded-[2rem] border border-white/20 shadow-glass-lg overflow-hidden flex items-center"
            style={{
              background: "linear-gradient(135deg, rgba(45, 90, 39, 0.15) 0%, rgba(201, 168, 76, 0.1) 100%)",
            }}
          >
            {/* Icon / Mini State */}
            <div className="w-16 h-16 flex items-center justify-center bg-forest-gradient text-white flex-shrink-0">
              <motion.div
                animate={{ 
                  y: [0, -4, 0],
                  scale: isHovered ? 1.1 : 1
                }}
                transition={{ 
                  y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                  scale: { duration: 0.3 }
                }}
              >
                <Mail size={24} />
              </motion.div>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, width: 0, x: -20 }}
                  animate={{ opacity: 1, width: "auto", x: 0 }}
                  exit={{ opacity: 0, width: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                  className="whitespace-nowrap px-6 flex items-center gap-6"
                >
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-gold-DEFAULT font-bold mb-0.5">Contact Us</span>
                    <span className="text-gray-800 font-medium text-sm">{business.contact.email}</span>
                  </div>
                  
                  <motion.a
                    href={mailtoUrl}
                    id="fab-send-email"
                    whileHover={{ scale: 1.05, x: 3 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-forest-gradient text-white px-5 py-2.5 rounded-full flex items-center gap-2 text-xs font-bold shadow-forest transition-shadow"
                  >
                    <span>Send Email</span>
                    <Send size={12} />
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Hint Arrow (when not hovered) */}
            <AnimatePresence>
              {!isHovered && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute right-2 opacity-30 group-hover:opacity-0 transition-opacity"
                >
                  <ChevronRight size={16} className="text-forest-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Background Ambient Glow */}
          <div className="absolute inset-0 bg-gold-light/10 blur-2xl -z-10 group-hover:bg-gold-light/20 transition-colors" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
