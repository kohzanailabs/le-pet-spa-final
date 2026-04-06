"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#mission" },
    { label: "Services", href: "#services" },
    { label: "Highlights", href: "#shoppix" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 ${
        scrolled ? "bg-white/95 backdrop-blur-md py-2 shadow-glass-sm" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section - Streamlined */}
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className={`relative transition-all duration-500 ${scrolled ? "w-12 h-12" : "w-16 h-16"}`}>
            <div className="absolute inset-0 bg-gold/10 rounded-full blur-xl group-hover:bg-gold/25 transition-all" />
            <Image 
              src="/logo.avif"
              alt="Le Pet Spa Logo"
              fill
              className="object-contain relative z-10 p-1"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className={`font-black uppercase tracking-tighter leading-none transition-all duration-500 ${
              scrolled ? "text-lg text-black" : "text-2xl text-white"
            }`}>
              Le Pet Spa
            </span>
            <span className={`text-[8px] font-black uppercase tracking-[0.4em] mt-1 transition-all duration-500 ${
              scrolled ? "text-gold" : "text-gold-light"
            }`}>
              Battery Park City
            </span>
          </div>
        </div>

        {/* Desktop Nav - Thinner & Cleaner */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[9px] font-black uppercase tracking-[0.3em] transition-all relative group ${
                scrolled ? "text-black hover:text-gold" : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="mailto:lepetspa@lepetspabpc.com"
            className="px-8 py-2.5 rounded-full bg-forest-gradient text-white text-[9px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl"
          >
            Email Us
          </a>
        </div>
      </div>
    </nav>
  );
}
