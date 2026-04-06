"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover grayscale-[0.2] brightness-90 animate-ken-burns"
        >
          <source src="/golden-walking.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />
      </div>

      {/* Main Hero Card - Fixed Centering & No Splits */}
      <div className="relative z-10 w-full max-w-5xl px-6">
        <motion.div
           initial={{ opacity: 0, y: 50, scale: 0.95 }}
           animate={{ opacity: 1, y: 0, scale: 1 }}
           transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
           className="p-12 md:p-20 text-center relative overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">NYC's Boutique Favorite</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-10 whitespace-normal [text-shadow:0_4px_24px_rgba(0,0,0,0.5)]">
            Your Neighborhood <br />
            <span className="text-gradient-gold">Pet Store</span> & Much More
          </h1>

          <p className="text-xl md:text-2xl text-white font-medium max-w-2xl mx-auto leading-relaxed mb-12 [text-shadow:0_2px_12px_rgba(0,0,0,0.4)]">
            Experience the gold standard in Manhattan pet care. From artisan grooming to boutique lifestyle essentials—we cater to the extraordinary.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-5 rounded-full bg-forest-gradient text-white text-xs font-black uppercase tracking-widest shadow-xl"
            >
              Book Grooming
            </motion.a>
            <motion.a
              href="#shoppix"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-5 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-md text-white text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              Explore Shop
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Floating 3D Scroll Indicator */}
      <div className="absolute bottom-10 left-10 flex flex-col items-center gap-6 pointer-events-none group">
        <div className="w-[1px] h-20 bg-gradient-to-b from-white/60 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 80] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gold"
          />
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 rotate-180 [writing-mode:vertical-lr]">Scroll Down</span>
      </div>
    </section>
  );
}
