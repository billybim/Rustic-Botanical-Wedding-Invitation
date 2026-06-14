import { useState, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import couple1 from "../assets/images/couple_photo_1_1781239763916.jpg";
import couple2 from "../assets/images/couple_photo_2_1781239778466.jpg";
import couple3 from "../assets/images/couple_photo_3_1781239798534.jpg";
import coupleHero from "../assets/images/couple_hero_1781239748391.jpg";

const GALLERY_IMAGES = [
  {
    src: couple1,
    title: "Kebersamaan Hangat",
    desc: "Tertawa bersama di rimbunnya kebun raya",
    size: "md:col-span-2 md:row-span-1"
  },
  {
    src: couple2,
    title: "Ikatan Suci",
    desc: "Simbol komitmen seumur hidup",
    size: "md:col-span-1 md:row-span-1"
  },
  {
    src: couple3,
    title: "Berjalan Bersama",
    desc: "Langkah awal menyusuri takdir bersama",
    size: "md:col-span-1 md:row-span-1"
  },
  {
    src: coupleHero,
    title: "Janji Di Bawah Rindang",
    desc: "Menatap masa depan berdua",
    size: "md:col-span-2 md:row-span-1"
  }
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : GALLERY_IMAGES.length - 1));
  };

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev !== null && prev < GALLERY_IMAGES.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="gallery" className="py-24 px-4 bg-cream-50 paper-texture">
      <div className="max-w-4xl mx-auto">
        
        {/* Gallery Title */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-sage-600 block mb-3">Galeri Memori</span>
          <h2 className="text-3xl md:text-4xl font-display text-wood-800 font-bold mb-3">Kisah Kebersamaan</h2>
          <p className="text-xs text-sage-500 italic font-serif">Momen-momen Indah Menyulam Nilai Cinta</p>
          <div className="botanical-divider w-32 mx-auto mt-4" />
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveIndex(index)}
              className={`relative rounded-3xl overflow-hidden cursor-pointer shadow-md group border border-wood-100 ${img.size} aspect-4/3`}
            >
              {/* Overlay background for info */}
              <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-6" />
              
              <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-cream-50/80 backdrop-blur-sm shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-4 h-4 text-sage-600" />
              </div>

              {/* Text overlays */}
              <div className="absolute bottom-0 inset-x-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white">
                <h4 className="text-lg font-serif italic mb-0.5">{img.title}</h4>
                <p className="text-[10px] uppercase tracking-wider text-sage-100">{img.desc}</p>
              </div>

              {/* actual image */}
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 font-sans"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

        {/* Full screen Lightbox overlay */}
        <AnimatePresence>
          {activeIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveIndex(null)}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            >
              {/* Close Button top right */}
              <button
                onClick={() => setActiveIndex(null)}
                className="absolute top-6 right-6 w-11 h-11 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full flex items-center justify-center cursor-pointer pointer-events-auto transition-colors shadow-md border border-neutral-700"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation Left */}
              <button
                onClick={handlePrev}
                className="absolute left-6 w-11 h-11 bg-neutral-800/80 hover:bg-neutral-800 text-white rounded-full flex items-center justify-center cursor-pointer pointer-events-auto transition text-white outline-none"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Image Frame */}
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl max-h-[75vh] md:max-h-[80vh] flex flex-col items-center select-none"
              >
                <img
                  src={GALLERY_IMAGES[activeIndex].src}
                  alt={GALLERY_IMAGES[activeIndex].title}
                  className="rounded-2xl max-w-full max-h-[65vh] object-contain shadow-2xl border border-neutral-800"
                  referrerPolicy="no-referrer"
                />
                
                {/* Image details */}
                <div className="text-center mt-4">
                  <h3 className="text-white text-lg font-serif italic">
                    {GALLERY_IMAGES[activeIndex].title}
                  </h3>
                  <p className="text-sage-400 text-xs mt-0.5 font-sans uppercase tracking-[0.1em]">
                    {GALLERY_IMAGES[activeIndex].desc}
                  </p>
                </div>
              </motion.div>

              {/* Navigation Right */}
              <button
                onClick={handleNext}
                className="absolute right-6 w-11 h-11 bg-neutral-800/80 hover:bg-neutral-800 text-white rounded-full flex items-center justify-center cursor-pointer pointer-events-auto transition text-white outline-none"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Info counter bottom center */}
              <div className="absolute bottom-6 left-0 right-0 text-center select-none">
                <span className="text-neutral-500 text-xs font-mono">
                  {activeIndex + 1} / {GALLERY_IMAGES.length}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
