"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const shopImages = [
  { id: 1, src: "/shop-1.jpg", alt: "Premium Pet Supplies", span: "row-span-1" },
  { id: 2, src: "/shop-2.jpg", alt: "Wholesome Nutrition Pantry", span: "row-span-2" },
  { id: 3, src: "/shop-3.jpg", alt: "Boutique Displays", span: "row-span-1" },
  { id: 4, src: "/shop-4.jpg", alt: "Luxury Grooming Studio", span: "row-span-1" },
  { id: 5, src: "/shop-5.jpg", alt: "Boutique Entrance", span: "row-span-1" },
];

export default function ShopPix() {
  return (
    <section id="shoppix" className="section-padding bg-white relative overflow-hidden">
      {/* Subtle Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 pointer-events-none opacity-[0.03] select-none">
        <span className="text-[20vw] font-black uppercase whitespace-nowrap text-black">Authentic Moments</span>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <span className="text-gold-DEFAULT font-black text-xs uppercase tracking-[0.4em] block mb-4">The Real Experience</span>
            <h2 className="text-5xl md:text-6xl font-black text-black leading-none tracking-tighter">
              Our <span className="text-gradient-gold">Shop Pix</span>
            </h2>
            <p className="text-black/60 font-medium text-lg mt-6">
              A glimpse into the daily life at Le Pet Spa. Authentic, candid, and full of tail-wagging joy.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="w-40 h-40 rounded-full border border-black/5 flex items-center justify-center p-4 text-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-black/20">EST. 2021 <br/>Battery Park City</span>
            </div>
          </motion.div>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shopImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden group rounded-[2rem] border border-black/5 ${image.span}`}
            >
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-700 z-10 flex items-center justify-center backdrop-blur-sm">
                <span className="text-white text-[10px] font-black uppercase tracking-[0.3em] translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                  {image.alt}
                </span>
              </div>
              
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={1000}
                className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
              
              {/* Iridescent Border Line */}
              <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-gold-light/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </motion.div>
          ))}

          {/* Extra Aesthetic Card */}
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-cream-dark/50 rounded-[2rem] border-2 border-dashed border-black/5 flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="text-4xl mb-4">📸</div>
            <h4 className="text-black font-black uppercase text-xs tracking-widest mb-2">Tag Us</h4>
            <p className="text-black/40 text-[10px] font-medium leading-relaxed">
              Snap a photo during your visit and tag <span className="text-forest-900 font-black">#LePetSpaBPC</span> for a chance to be featured.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
