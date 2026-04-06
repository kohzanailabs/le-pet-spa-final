"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { business } from "@/config/business";

const socialLinks = [
  {
    name: "Facebook",
    href: business.social.facebook,
    id: "social-facebook",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
    color: "#1877F2",
    glow: "rgba(24,119,242,0.4)",
  },
  {
    name: "Instagram",
    href: business.social.instagram,
    id: "social-instagram",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    color: "#E1306C",
    glow: "rgba(225,48,108,0.4)",
  },
  {
    name: "X / Twitter",
    href: business.social.twitter,
    id: "social-twitter",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: "#1DA1F2",
    glow: "rgba(29,161,242,0.4)",
  },
  {
    name: "Yelp",
    href: business.social.yelp,
    id: "social-yelp",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l3.897-5.592c.25-.364.763-.31 1.025.048C21.2 9.088 21.4 11.448 20.16 12.594zM9.768 20.484l1.697-4.887c.327-.94 1.625-.94 1.953 0l1.697 4.887c.102.293.03.617-.196.84C14.208 21.77 12 22.5 12 22.5s-2.208-.729-2.92-1.176c-.226-.223-.297-.547-.196-.84zm3.77-8.1c.19.23.285.52.252.816l-.617 5.17c-.076.636-.94.823-1.29.285L8.25 13.53c-.348-.538-.012-1.25.616-1.3l5.084-.395c.296-.023.59.095.788.325zm-8.624-.924l4.995 1.433c.96.276.96 1.656 0 1.932l-4.995 1.433c-.308.088-.631-.02-.833-.274C2.8 14.61 2.6 12.25 3.832 11.174c.2-.18.476-.256.746-.166l.336.05zm.793-5.91l3.897 5.592c.563.83-.217 1.906-1.176 1.63L3.432 11.35c-.308-.09-.53-.358-.565-.678-.126-1.14.15-3.35 1.656-4.636.232-.197.546-.244.82-.102l.374.152z" />
      </svg>
    ),
    color: "#FF1A1A",
    glow: "rgba(255,26,26,0.4)",
  },
];

function Social3DIcon({ link }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-1, 1], [15, -15]), { stiffness: 300, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-1, 1], [-15, 15]), { stiffness: 300, damping: 20 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    y.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      id={link.id}
      aria-label={link.name}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 600 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      className="w-14 h-14 rounded-2xl flex items-center justify-center cursor-pointer transition-shadow duration-300"
      title={link.name}
      sx={{
        background: `linear-gradient(135deg, ${link.color}22, ${link.color}11)`,
        border: `1.5px solid ${link.color}44`,
        boxShadow: `0 4px 20px ${link.glow}, inset 0 1px 0 rgba(255,255,255,0.15)`,
      }}
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 hover:shadow-lg"
        style={{
          background: `linear-gradient(135deg, ${link.color}22, ${link.color}11)`,
          border: `1.5px solid ${link.color}44`,
          boxShadow: `0 4px 20px ${link.glow}`,
          color: link.color,
        }}
      >
        {link.icon}
      </div>
    </motion.a>
  );
}

export default function Contact() {
  const socialIcons = [
    { 
      id: "fb", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#1877F2" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ), 
      label: "Facebook", 
      href: business.social.facebook 
    },
    { 
      id: "ig", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="url(#ig-grad)" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#f09433" }} />
              <stop offset="25%" style={{ stopColor: "#e6683c" }} />
              <stop offset="50%" style={{ stopColor: "#dc2743" }} />
              <stop offset="75%" style={{ stopColor: "#cc2366" }} />
              <stop offset="100%" style={{ stopColor: "#bc1888" }} />
            </linearGradient>
          </defs>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ), 
      label: "Instagram", 
      href: business.social.instagram 
    },
    { 
      id: "x", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#000000" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ), 
      label: "Twitter", 
      href: business.social.twitter 
    },
    { 
      id: "yp", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#D32323" viewBox="0 0 24 24">
          <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l3.897-5.592c.25-.364.763-.31 1.025.048C21.2 9.088 21.4 11.448 20.16 12.594zM9.768 20.484l1.697-4.887c.327-.94 1.625-.94 1.953 0l1.697 4.887c.102.293.03.617-.196.84C14.208 21.77 12 22.5 12 22.5s-2.208-.729-2.92-1.176c-.226-.223-.297-.547-.196-.84zm3.77-8.1c.19.23.285.52.252.816l-.617 5.17c-.076.636-.94.823-1.29.285L8.25 13.53c-.348-.538-.012-1.25.616-1.3l5.084-.395c.296-.023.59.095.788.325zm-8.624-.924l4.995 1.433c.96.276.96 1.656 0 1.932l-4.995 1.433c-.308.088-.631-.02-.833-.274C2.8 14.61 2.6 12.25 3.832 11.174c.2-.18.476-.256.746-.166l.336.05zm.793-5.91l3.897 5.592c.563.83-.217 1.906-1.176 1.63L3.432 11.35c-.308-.09-.53-.358-.565-.678-.126-1.14.15-3.35 1.656-4.636.232-.197.546-.244.82-.102l.374.152z"/>
        </svg>
      ), 
      label: "Yelp", 
      href: business.social.yelp 
    },
  ];

  return (
    <section id="contact" className="section-padding bg-cream-light relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold/5 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-forest-500/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Boutique Location */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-black text-[10px] uppercase tracking-[0.4em] block mb-4">The Destination</span>
            <h2 className="text-5xl md:text-7xl font-black text-black leading-none tracking-tighter mb-10">
              Visit Our <span className="text-gradient-gold">Boutique</span>
            </h2>
            <p className="text-black/60 font-medium text-xl mb-12 max-w-lg leading-relaxed">
              Nestled in the heart of Battery Park City, serving Manhattan's beloved pets with dedication and care.
            </p>

            <div className="rounded-[40px] overflow-hidden shadow-glass-lg border border-black/5 aspect-video md:aspect-auto md:h-[450px]">
              <iframe
                title="Le Pet Spa Location Map"
                src={business.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.1) contrast(1.1) brightness(1.1)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                id="google-map"
              />
            </div>
          </motion.div>

          {/* Right Side: Contact & Social Hub */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-10"
          >
            {/* Address & Phone */}
            {[
              {
                id: "contact-address",
                icon: "📍",
                label: "Visit Us",
                value: business.address.full,
                href: `https://maps.google.com/?q=${encodeURIComponent(business.address.full)}`,
              },
              {
                id: "contact-phone",
                icon: "📞",
                label: "Direct Line",
                value: business.contact.phone,
                href: `tel:${business.contact.phoneRaw}`,
              },
              {
                id: "contact-email",
                icon: "📧",
                label: "Email Address",
                value: business.contact.email,
                href: `mailto:${business.contact.email}`,
              },
            ].map((item) => (
              <motion.a
                key={item.id}
                href={item.href}
                target={item.id === "contact-address" ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-6 p-8 md:p-10 rounded-[30px] bg-white border border-black/5 shadow-glass-sm transition-all group overflow-hidden relative"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-cream flex items-center justify-center text-2xl md:text-3xl group-hover:bg-gold-light/20 transition-colors relative z-10 shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0 relative z-10">
                  <div className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-gold mb-3">{item.label}</div>
                  <div className="text-lg md:text-xl font-black text-black tracking-tighter truncate">
                    {item.value}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.a>
            ))}

            {/* Social Hub - High Contrast SVGs */}
            <div className="p-10 md:p-12 rounded-[40px] bg-white shadow-glass-lg border border-black/5 relative overflow-hidden">
               <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gold mb-10">Boutique Social</div>
               <div className="grid grid-cols-4 gap-4 md:gap-6">
                 {socialIcons.map((social) => (
                   <motion.a
                     key={social.id}
                     href={social.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     whileHover={{ scale: 1.1, y: -5 }}
                     className="bg-cream-light aspect-square rounded-2xl flex flex-col items-center justify-center gap-2 group cursor-pointer border border-black/5"
                   >
                     <div className="transition-transform duration-500 group-hover:scale-110">
                        {social.icon}
                     </div>
                     <span className="text-[8px] font-black uppercase tracking-widest text-black/40 group-hover:text-black transition-colors">{social.id}</span>
                   </motion.a>
                 ))}
               </div>
            </div>

            {/* Contact Final CTA */}
            <motion.a
               href={`mailto:${business.contact.email}`}
               whileHover={{ scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
               className="mt-4 p-10 md:p-12 rounded-[40px] bg-gold text-white text-center shadow-gold-lg relative group overflow-hidden"
            >
               <span className="text-xs font-black uppercase tracking-[0.4em] block mb-3 opacity-80">Ready to Book?</span>
               <span className="text-2xl md:text-3xl font-black tracking-tighter">Contact Our Master Groomers</span>
               <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


