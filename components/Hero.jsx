"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden py-24 md:py-0">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/30" />
      </div>

      {/* Main Hero Card - Fixed Centering & Responsive Typography */}
      <div className="relative z-10 w-full max-w-6xl px-6">
        <motion.div
           initial={{ opacity: 0, y: 30, scale: 0.98 }}
           animate={{ opacity: 1, y: 0, scale: 1 }}
           transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
           className="p-2 md:p-20 text-center relative overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="inline-flex items-center gap-2 mb-4 md:mb-10 px-6 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-lg"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-white">NYC Favorite</span>
          </motion.div>

          <h1 className="text-4xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-6 md:mb-12 whitespace-normal [text-shadow:0_8px_32px_rgba(0,0,0,0.4)]">
            Your Neighborhood <br className="hidden md:block" />
            <span className="text-gradient-gold">Pet Store</span> & Much More
          </h1>

          <p className="text-sm md:text-2xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed mb-8 md:mb-14 px-2 md:px-4 [text-shadow:0_2px_12px_rgba(0,0,0,0.3)]">
            Experience the gold standard in Manhattan pet care. Artisan grooming and boutique lifestyle essentials in the heart of BPC.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-8">
            <motion.a
              href="mailto:lepetspa@lepetspabpc.com"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-10 md:px-14 py-4 md:py-6 rounded-full bg-forest-gradient text-white text-[9px] md:text-xs font-black uppercase tracking-widest shadow-2xl transition-all"
            >
              Book Grooming
            </motion.a>
            <motion.a
              href="#shoppix"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-10 md:px-14 py-4 md:py-6 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-lg text-white text-[9px] md:text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-xl"
            >
              Explore Shop
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Floating 3D Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 flex flex-col items-center gap-4 md:gap-6 pointer-events-none group hidden xs:flex">
        <div className="w-[1px] h-12 md:h-20 bg-gradient-to-b from-white/60 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 80] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gold"
          />
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 rotate-180 [writing-mode:vertical-lr]">Scroll</span>
      </div>
    </section>
  );
}
