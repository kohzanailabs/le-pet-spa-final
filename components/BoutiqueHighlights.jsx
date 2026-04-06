"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const boutiqueMedia = [
  { id: 1, type: "image", src: "/shop-1.jpg", alt: "Premium Supplies", span: "row-span-1" },
  { id: 2, type: "video", src: "/groomer-brushing.mp4", alt: "Luxury Grooming", span: "row-span-2 col-span-2" },
  { id: 3, type: "image", src: "/shop-2.jpg", alt: "Nutrition Pantry", span: "row-span-1" },
  { id: 4, type: "image", src: "/shop-3.jpg", alt: "Boutique Display", span: "row-span-1" },
  { id: 5, type: "image", src: "/shop-4.jpg", alt: "Cozy Corners", span: "row-span-1" },
  { id: 6, type: "image", src: "/shop-5.jpg", alt: "Store Entrance", span: "row-span-1" },
];

export default function BoutiqueHighlights() {
  return (
    <section id="shoppix" className="section-padding bg-white relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-cream-light/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="text-gold font-black text-[10px] uppercase tracking-[0.4em] block mb-4">The Selection</span>
            <h2 className="text-5xl md:text-7xl font-black text-black leading-none tracking-tighter">
              Boutique <span className="text-gradient-gold">Highlights</span>
            </h2>
            <p className="text-black/60 font-medium text-lg mt-8 leading-relaxed">
              A curated look into the heart of Le Pet Spa. Authentic moments, cinematic care, and premium lifestyle essentials.
            </p>
          </motion.div>
          
          <div className="hidden lg:block">
            <div className="w-40 h-40 rounded-full border border-black/5 flex items-center justify-center p-6 text-center shadow-glass-sm animate-float">
              <span className="text-[9px] font-black uppercase tracking-widest text-black/20 leading-relaxed">Battery Park <br/> City • NYC</span>
            </div>
          </div>
        </div>

        {/* Cinematic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
          {boutiqueMedia.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative overflow-hidden group rounded-[30px] border border-black/5 shadow-glass-sm ${item.span}`}
            >
              {item.type === "video" ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-700 z-10 flex items-end p-8 backdrop-blur-[2px]">
                <div className="translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                  <span className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-2 block opacity-60">Insight</span>
                  <span className="text-white text-lg font-black tracking-tight">{item.alt}</span>
                </div>
              </div>
              
              {/* Iridescent Accent */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-700 pointer-events-none rounded-[30px]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
