import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Calendar, Heart } from "lucide-react";
import FallingLeaves from "./FallingLeaves";
import coupleHero from "../assets/images/couple_hero_1781239748391.jpg";

interface CoverProps {
  onOpen: () => void;
  coupleNames: string;
  weddingDateFormatted: string;
}

export default function Cover({ onOpen, coupleNames, weddingDateFormatted }: CoverProps) {
  const [guestName, setGuestName] = useState("Tamu Undangan");

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const to = params.get("to");
      if (to) {
        // Decode plus signs as spaces and clean up
        const decoded = decodeURIComponent(to.replace(/\+/g, " "));
        setGuestName(decoded);
      }
    } catch (e) {
      console.error("Error parsing guest name from query parameters: ", e);
    }
  }, []);

  return (
    <div className="relative w-full h-[100dvh] bg-wood-50 flex items-center justify-center overflow-hidden paper-texture">
      {/* Absolute Aesthetic Background elements */}
      <FallingLeaves />
      
      {/* Decorative Botanic Circle Rings in Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[400px] max-h-[400px] border-2 border-sage-100 rounded-full opacity-40 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[450px] max-h-[450px] border border-sage-200 rounded-full opacity-35 pointer-events-none" />

      {/* Decorative top corner watercolor botanicals via SVG */}
      <svg className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 text-sage-600/20 pointer-events-none" viewBox="0 0 100 100">
        <path d="M100,0 C80,30 50,40 30,35 C20,30 10,15 0,0 C15,10 30,12 45,8 C65,3 85,1 100,0 Z" fill="currentColor" />
        <path d="M100,20 C85,45 65,55 45,50 C35,45 30,35 25,20" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <path d="M100,5 C90,20 85,30 75,35" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>
      <svg className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 text-sage-600/20 pointer-events-none rotate-180" viewBox="0 0 100 100">
        <path d="M100,0 C80,30 50,40 30,35 C20,30 10,15 0,0 C15,10 30,12 45,8 C65,3 85,1 100,0 Z" fill="currentColor" />
      </svg>

      {/* Main card */}
      <div className="relative z-20 w-full max-w-md mx-4 p-8 rounded-3xl bg-cream-50/90 backdrop-blur-md shadow-2xl border border-wood-100/50 flex flex-col items-center text-center glow-subtle">
        
        {/* Subtle romantic badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage-50 border border-sage-200/50 mb-6"
        >
          <Heart className="w-3.5 h-3.5 text-terracotta-500 fill-terracotta-500 animate-pulse" />
          <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-sage-700">The Wedding Portrait</span>
        </motion.div>

        {/* Elegant couple portrait preview circle inside a botanical frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-44 h-44 mb-6 rounded-full p-2 border border-wood-200/30 overflow-hidden bg-white shadow-inner flex items-center justify-center group"
        >
          {/* Circular SVG botanical trim */}
          <svg className="absolute inset-0 w-full h-full text-sage-500/25 spin-slow pointer-events-none" viewBox="0 0 100 100">
            <defs>
              <path id="circle-path" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
            </defs>
            <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
            <path d="M50,4 A46,46 0 0,1 96,50" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M50,96 A46,46 0 0,1 4,50" fill="none" stroke="currentColor" strokeWidth="1" strokeDelay="0.5" />
          </svg>
          <img
            src={coupleHero}
            alt="Amanda & Rizky"
            className="w-full h-full object-cover rounded-full"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Couple names (Script Font!) */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-4xl sm:text-5xl font-script text-wood-800 my-2 tracking-wide font-normal leading-tight"
        >
          {coupleNames}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="botanical-divider w-full"
        />

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center gap-1.5 text-sage-600 font-serif italic text-sm mt-3"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>{weddingDateFormatted}</span>
        </motion.div>

        {/* Guest information */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="mt-8 mb-6 py-4 px-6 w-full rounded-2xl bg-wood-50 border border-wood-100 text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.18em] text-sage-500 font-medium mb-1">Kepada Yth. Bapak/Ibu/Saudara/i:</p>
          <h2 className="text-lg md:text-xl font-bold font-serif text-wood-800 tracking-tight leading-snug">
            {guestName}
          </h2>
          <p className="text-[10px] text-sage-400 italic mt-1.5">Tanpa Mengurangi Rasa Hormat, Kami Mengundang Anda Untuk Hadir.</p>
        </motion.div>

        {/* CTA Buka Undangan Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 15,
            delay: 1.1 
          }}
          onClick={onOpen}
          id="btn-buka-undangan"
          className="flex items-center gap-2 bg-sage-600 hover:bg-sage-700 text-white font-sans font-medium text-xs tracking-widest uppercase px-6 py-3.5 rounded-xl shadow-lg shadow-sage-600/20 cursor-pointer transition-all duration-300 pointer-events-auto"
        >
          <Mail className="w-4 h-4 animate-bounce" />
          <span>Buka Undangan</span>
        </motion.button>
      </div>

      {/* Aesthetic Footer Branding */}
      <div className="absolute bottom-4 left-0 right-0 text-center z-10 pointer-events-none">
        <p className="text-[9px] tracking-widest text-wood-500/50 uppercase">Wedding of Amanda & Rizky</p>
      </div>
    </div>
  );
}
