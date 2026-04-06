"use client";

import Image from "next/image";
import { business } from "@/config/business";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Brand Group */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex items-center gap-6 mb-8 group">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border border-black/5 bg-cream shadow-glass-sm p-3">
              <Image 
                src="/logo.avif"
                alt="Le Pet Spa Logo"
                fill
                className="object-contain p-2"
              />
            </div>
            <div>
              <div className="text-black font-black text-3xl tracking-tighter uppercase leading-none">Le Pet Spa</div>
              <div className="text-gold text-[10px] font-black tracking-[0.4em] uppercase mt-2">Battery Park City</div>
            </div>
          </div>
          <p className="text-black/40 text-[10px] uppercase tracking-[0.3em] max-w-xs font-black leading-relaxed">
            The neighborhood destination for luxury grooming and boutique lifestyle essentials.
          </p>
        </div>

        {/* Contact Strip */}
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-32">
          <div className="text-center lg:text-left min-w-[200px]">
            <div className="text-[9px] font-black uppercase tracking-[0.4em] text-gold mb-3">The Boutique</div>
            <div className="text-black font-black text-sm uppercase tracking-tighter leading-relaxed">
              300 Rector Place,<br />
              New York, NY 10280
            </div>
          </div>
          <div className="text-center lg:text-left min-w-[200px]">
            <div className="text-[9px] font-black uppercase tracking-[0.4em] text-gold mb-3">Connect</div>
            <a 
              href="mailto:lepetspa@lepetspabpc.com" 
              className="text-black font-black text-sm uppercase tracking-tighter hover:text-gold transition-colors"
            >
              lepetspa@lepetspabpc.com
            </a>
          </div>
        </div>

        {/* Rights */}
        <div className="text-center lg:text-right">
          <div className="text-[9px] font-black uppercase tracking-[0.4em] text-black/20">
            © Le Pet Spa. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
