import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Cover from "./components/Cover";
import Home from "./components/Home";
import Event from "./components/Event";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import LoveGift from "./components/LoveGift";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";

const WEDDING_DATE = new Date("2029-10-17T09:00:00"); // Future Saturday perfect for autumn/botanical wedding

export default function App() {
  const [isOpened, setIsOpened] = useState(false);

  // Disable scrolling on body until invitation is opened
  useEffect(() => {
    if (!isOpened) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpened]);

  const handleOpenInvitation = () => {
    setIsOpened(true);
  };

  return (
    <div className="min-h-screen bg-wood-50 text-neutral-800 antialiased font-sans flex flex-col selection:bg-sage-200/50 selection:text-sage-800">
      
      {/* Background Music Player */}
      <MusicPlayer shouldPlay={isOpened} />

      {/* Primary Transition Coordinator */}
      <AnimatePresence mode="wait">
        {!isOpened ? (
          <motion.div
            key="cover"
            initial={{ opacity: 1 }}
            exit={{ 
              y: "-100vh", 
              opacity: 0,
              transition: { 
                duration: 1.1, 
                ease: [0.77, 0, 0.175, 1] 
              } 
            }}
            className="fixed inset-0 z-50 w-full h-[100dvh]"
          >
            <Cover 
              onOpen={handleOpenInvitation} 
              coupleNames="Amanda & Rizky"
              weddingDateFormatted="Day, DD MMMM YYYY"
            />
          </motion.div>
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              transition: { 
                duration: 1.2, 
                ease: [0.25, 1, 0.5, 1],
                delay: 0.1 
              } 
            }}
            className="relative flex-grow flex flex-col"
          >
            {/* Visual Header Decoration Accent */}
            <div className="sticky top-0 z-40 bg-cream-50/80 backdrop-blur-sm border-b border-wood-100/40 py-3.5 px-4 flex items-center justify-center glow-subtle">
              <span className="text-[9px] tracking-[0.25em] uppercase font-bold text-sage-600">The Wedding Celebration of Amanda & Rizky</span>
            </div>

            {/* Seamless Section Flows */}
            <Home weddingDate={WEDDING_DATE} />
            
            {/* Decorative organic transition border divider */}
            <div className="w-full h-8 bg-gradient-to-b from-cream-50 to-wood-50 opacity-50" />
            
            <Event />
            
            <div className="w-full h-8 bg-gradient-to-b from-wood-50 to-cream-50 opacity-50" />
            
            <Gallery />
            
            <div className="w-full h-8 bg-gradient-to-b from-cream-50 to-wood-50 opacity-50" />
            
            <RSVP />
            
            <div className="w-full h-8 bg-gradient-to-b from-wood-50 to-cream-50 opacity-50" />
            
            <LoveGift />
            
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
