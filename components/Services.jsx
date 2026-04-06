"use client";

import { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { business } from "@/config/business";

function TiltCard({ service, index, featured }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smoothing springs for the tilt
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 100, damping: 20 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Re-map images to AI assets
  const aiImages = {
    grooming: "/grooming.png",
    nutrition: "/nutrition.png",
    supplies: "/supplies.png"
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative group h-full ${featured ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""}`}
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full h-full"
      >
        {/* Iridescent Glowing Frame */}
        <div className="iridescent-border h-full transition-all duration-500 group-hover:shadow-gold-lg group-hover:scale-[1.02]" style={{ borderRadius: '32px', padding: '1px' }}>
          {/* Main Card Content */}
          <div 
            className="relative h-full overflow-hidden bg-white glass-blur-heavy"
            style={{ borderRadius: '31px' }}
          >
            {/* High-Fidelity AI Image */}
            <div className={`relative ${featured ? "h-64 sm:h-80 lg:h-full lg:min-h-[500px]" : "h-56 sm:h-64"}`}>
              <Image
                src={aiImages[service.id] || service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Subtle Elegant Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
            </div>

            {/* Content Overlay - Deep Black Text on clean background */}
            <div 
              className="relative p-8 bg-white/90 backdrop-blur-md"
              style={{ transform: "translateZ(30px)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl filter drop-shadow-sm">{service.icon}</span>
                {featured && (
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-gold-DEFAULT text-white rounded-full">
                    Premium Selection
                  </span>
                )}
              </div>
              
              <h3 className="text-black font-black text-3xl mb-3 tracking-tight group-hover:text-gold-DEFAULT transition-colors">
                {service.title}
              </h3>
              
              <p className="text-black/70 text-sm font-medium leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Action Button */}
              <motion.a
                href={`mailto:${business.contact.email}?subject=Inquiry about ${service.title}`}
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-3 text-black font-black text-xs uppercase tracking-[0.2em] group/btn"
              >
                <span>Curate Experience</span>
                <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover/btn:bg-forest-900 group-hover/btn:text-white transition-all">
                  →
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(180deg, #F5F0E8 0%, #EDE7D9 100%)" }}>
      {/* Background blobs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-forest-500/5 blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gold-DEFAULT/5 blur-3xl" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold tracking-widest text-gold-DEFAULT uppercase mb-3">
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-forest-500 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            From tail-wagging grooming sessions to premium nutrition — we have everything your pet needs.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {business.services.map((service, index) => (
            <TiltCard
              key={service.id}
              service={service}
              index={index}
              featured={service.highlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

