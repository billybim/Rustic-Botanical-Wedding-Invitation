import { motion } from "motion/react";
import { Heart, Stars } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-wood-800 text-white/90 py-24 px-4 text-center relative overflow-hidden paper-texture">
      {/* Absolute subtle glowing overlays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-sage-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Simple elegant motif badge */}
        <div className="flex justify-center mb-8 text-cream-200">
          <Heart className="w-10 h-10 fill-terracotta-500 text-terracotta-500 animate-pulse" />
        </div>

        {/* Closing Remarks and Quote */}
        <h3 className="text-3xl md:text-4xl font-script text-cream-200 mb-6 font-normal">
          Terima Kasih
        </h3>
        
        <p className="text-sm text-wood-100 leading-relaxed font-sans max-w-lg mb-8">
          Merupakan suatu kehormatan dan kebahagiaan yang tak terhingga bagi kami sekeluarga apabila Bapak/Buku/Saudara/i berkenan hadir serta menyertakan doa restu bagi lembaran baru bahtera rumah tangga kami.
        </p>

        <p className="text-xs text-sage-200 font-serif italic mb-16">
          Sampai Jumpa Di Hari Bahagia Kami!
        </p>

        {/* Couple signatures */}
        <div className="flex items-center gap-4 mb-20 select-none">
          <span className="text-2xl font-script text-cream-200">Amanda</span>
          <span className="text-xs text-wood-200 font-serif italic">&</span>
          <span className="text-2xl font-script text-cream-200">Rizky</span>
        </div>

        {/* Separator line */}
        <div className="w-20 h-[1px] bg-white/20 mb-8" />

        {/* Copyright notice and active bimaraweb.com link */}
        <div className="space-y-1 text-[10px] tracking-widest text-wood-300 font-sans uppercase">
          <p>© 2026 All Rights Reserved.</p>
          <p>
            Wedding Invitation by{" "}
            <a
              href="https://bimaraweb.com"
              target="_blank"
              rel="noopener noreferrer"
              id="copyright-link"
              className="text-cream-200 hover:text-white underline underline-offset-4 decoration-terracotta-500/50 hover:decoration-terracotta-500 transition-colors pointer-events-auto"
            >
              bimaraweb.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
