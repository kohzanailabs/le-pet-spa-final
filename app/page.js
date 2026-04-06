"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionPassion from "@/components/MissionPassion";
import Services from "@/components/Services";
import BoutiqueHighlights from "@/components/BoutiqueHighlights";
import Hours from "@/components/Hours";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import InteractiveElements from "@/components/InteractiveElements";
import ScrollPet from "@/components/ScrollPet";

const scrollReveal = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } 
  },
};

export default function Home() {
  return (
    <main className="relative bg-cream-light min-h-screen">
      {/* Dynamic Background Interactions */}
      <InteractiveElements />
      <ScrollPet />
      
      {/* Fixed Navigation */}
      <Navbar />

      {/* Boutique Sections with High-End Scroll Reveal */}
      <section className="relative">
        <Hero />
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollReveal}
      >
        <MissionPassion />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollReveal}
      >
        <Services />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollReveal}
      >
        <BoutiqueHighlights />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollReveal}
      >
        <Hours />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollReveal}
      >
        <Contact />
      </motion.section>

      <Footer />
      
      {/* Mobile-Only UI */}
      <MobileNav />
    </main>
  );
}
