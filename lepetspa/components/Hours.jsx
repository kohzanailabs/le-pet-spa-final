"use client";

import { motion } from "framer-motion";
import { business } from "@/config/business";

export default function Hours() {
  return (
    <section id="hours" className="section-padding bg-cream-light relative overflow-hidden">
      {/* Subtle Background Graphics */}
      <div className="absolute -top-24 -left-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-10 w-64 h-64 bg-forest-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-gold mb-4"
          >
            Planning Your Visit
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-black tracking-tighter leading-none"
          >
            Operating <span className="text-gradient-gold">Hours</span>
          </motion.h2>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="bg-white rounded-[40px] border border-black/5 shadow-glass-lg p-10 md:p-16 relative overflow-hidden"
        >
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-2xl" />

          <div className="flex flex-col gap-10">
            {business.hours.map((slot) => (
              <div 
                key={slot.day} 
                className="flex items-center justify-between border-b border-black/5 pb-6 last:border-0 last:pb-0 group"
              >
                <div className="flex flex-col">
                   <span className="text-2xl font-black text-black tracking-tighter group-hover:text-gold transition-colors duration-300">
                     {slot.day}
                   </span>
                   {slot.closed && (
                     <span className="text-[9px] font-black text-red-500 uppercase tracking-widest mt-2">Special Holiday Hours May Apply</span>
                   )}
                </div>

                <div className="flex items-center gap-4">
                  {slot.closed ? (
                    <span className="px-6 py-3 rounded-full border border-black/5 bg-cream/30 text-black/40 text-[10px] font-black uppercase tracking-widest">
                      Closed
                    </span>
                  ) : (
                    <div className="flex items-center gap-6">
                      <span className="text-black font-black text-xl tracking-tight">{slot.open}</span>
                      <div className="w-10 h-[1.5px] bg-gold/20" />
                      <span className="text-black font-black text-xl tracking-tight">{slot.close}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-10 rounded-[30px] bg-cream border border-black/5 text-center">
            <p className="text-black/40 font-black text-[10px] uppercase tracking-[0.2em] leading-relaxed max-w-sm mx-auto">
              Operating hours are strictly followed. For bespoke appointments outside these times, please call <span className="text-gold">{business.contact.phone}</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
