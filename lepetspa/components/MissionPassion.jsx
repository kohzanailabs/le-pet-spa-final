"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function MissionPassion() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section id="mission" className="section-padding relative overflow-hidden bg-white" ref={containerRef}>
      {/* Background accents */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-forest-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-10"
          >
            <div className="relative group">
              <div className="relative aspect-video overflow-hidden shadow-glass-lg" style={{ borderRadius: '40px' }}>
                <Image
                  src="/mission.png"
                  alt="Our Boutique Mission"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <span className="text-gold-light text-[10px] font-black tracking-[0.4em] uppercase block mb-1">Boutique Heritage</span>
                  <span className="text-white font-black text-4xl tracking-tighter">BPC • 2021</span>
                </div>
              </div>
            </div>

            <div className="px-4">
              <h2 className="text-5xl md:text-6xl font-black text-black mb-6 tracking-tighter leading-none">
                Our <span className="text-gradient-gold">Mission</span>
              </h2>
              <p className="text-xl text-black/70 font-medium leading-relaxed">
                We believe every pet deserves a touch of luxury. Our mission is to provide an 
                unparalleled boutique experience where wellness meets high-end artistry in the heart of Manhattan.
              </p>
            </div>
          </motion.div>

          {/* Passion Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-10"
          >
            <div className="relative group">
              <div className="relative aspect-video overflow-hidden shadow-glass-lg" style={{ borderRadius: '40px' }}>
                <Image
                  src="/passion.png"
                  alt="Our Boutique Passion"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <span className="text-gold-light text-[10px] font-black tracking-[0.4em] uppercase block mb-1">Curation</span>
                  <span className="text-white font-black text-4xl tracking-tighter">Artisan Quality</span>
                </div>
              </div>
            </div>

            <div className="px-4">
              <h2 className="text-5xl md:text-6xl font-black text-black mb-6 tracking-tighter leading-none">
                Our <span className="text-gradient-gold">Passion</span>
              </h2>
              <p className="text-xl text-black/70 font-medium leading-relaxed">
                More than just a store; we are a community obsessed with quality. From hand-picked couture treats to bespoke styles, our passion is reflected in every detail.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


