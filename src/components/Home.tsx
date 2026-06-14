import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Instagram, Heart, Sparkles, Calendar, Clock } from "lucide-react";
import groomPortrait from "../assets/images/groom_bio_portrait_1781239923038.jpg";
import bridePortrait from "../assets/images/bride_bio_portrait_1781239907755.jpg";

interface HomeProps {
  weddingDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Home({ weddingDate }: HomeProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +weddingDate - +new Date();
      let newTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      setTimeLeft(newTimeLeft);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <section id="introduction" className="py-20 px-4 max-w-4xl mx-auto flex flex-col items-center">
      {/* Warm Sapaan Greeting header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="text-center mb-16 max-w-xl"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-sage-600 block mb-3">Sapaan Hangat</span>
        <h2 className="text-3xl font-display text-wood-800 font-bold mb-4">Maha Suci Allah,</h2>
        <p className="text-gray-600 font-sans text-sm leading-relaxed mb-6">
          Dengan rahmat dan rida-Nya yang melimpah, Kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri hari bahagia penyatuan suci kami:
        </p>
        <div className="flex justify-center items-center gap-2 text-sage-500 my-4 text-xs font-serif italic">
          <Sparkles className="w-4 h-4 text-terracotta-500 animate-pulse" />
          <span>"Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri."</span>
          <Sparkles className="w-4 h-4 text-terracotta-500 animate-pulse" />
        </div>
      </motion.div>

      {/* Couples Profiles Showcase */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 mb-24 relative">
        {/* Heart center icon in absolute center */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
          <div className="w-[50px] h-[50px] rounded-full bg-cream-50 border border-wood-200/50 flex items-center justify-center shadow-md text-terracotta-500 scale-100 animate-pulse">
            <Heart className="w-5 h-5 fill-terracotta-500" />
          </div>
        </div>

        {/* Groom Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-cream-50/80 backdrop-blur-sm rounded-3xl p-6 border border-wood-100 shadow-xl glow-subtle flex flex-col items-center text-center group"
        >
          {/* Portrait Container */}
          <div className="relative w-44 h-44 mb-6 rounded-2xl overflow-hidden shadow-md border-3 border-white">
            <img
              src={groomPortrait}
              alt="Rizky Pratama"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>

          <span className="text-[10px] tracking-[0.2em] font-bold text-sage-600 uppercase mb-1 block">Mempelai Pria</span>
          <h3 className="text-3xl font-script text-wood-800 font-normal leading-none my-1">Rizky Pratama, S.E.</h3>
          
          <div className="w-16 h-[1px] bg-wood-200/50 my-3" />
          
          <p className="text-xs text-sage-600/90 italic mb-1 font-serif">Putra Sulung dari:</p>
          <div className="text-sm font-sans font-medium text-wood-700">
            Bapak Heri Pratama, M.B.A.
          </div>
          <div className="text-xs text-gray-500">
            & Ibu Sri Wahyuni
          </div>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            id="social-groom"
            className="mt-6 flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-neutral-50 text-sage-600 border border-sage-200/50 hover:border-sage-500/30 text-xs font-semibold tracking-wider uppercase shadow-sm hover:shadow transition-all duration-300"
          >
            <Instagram className="w-4 h-4 text-terracotta-500" />
            <span>@rizkypratama_</span>
          </a>
        </motion.div>

        {/* Bride Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-cream-50/80 backdrop-blur-sm rounded-3xl p-6 border border-wood-100 shadow-xl glow-subtle flex flex-col items-center text-center group"
        >
          {/* Portrait Container */}
          <div className="relative w-44 h-44 mb-6 rounded-2xl overflow-hidden shadow-md border-3 border-white">
            <img
              src={bridePortrait}
              alt="Amanda Putri"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>

          <span className="text-[10px] tracking-[0.2em] font-bold text-sage-600 uppercase mb-1 block">Mempelai Wanita</span>
          <h3 className="text-3xl font-script text-wood-800 font-normal leading-none my-1">Amanda Putri, S.I.Kom.</h3>
          
          <div className="w-16 h-[1px] bg-wood-200/50 my-3" />
          
          <p className="text-xs text-sage-600/90 italic mb-1 font-serif">Putri Bungsu dari:</p>
          <div className="text-sm font-sans font-medium text-wood-700">
            Bapak Budi Prasetyo, M.M.
          </div>
          <div className="text-xs text-gray-500">
            & Ibu Endang Lestari
          </div>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            id="social-bride"
            className="mt-6 flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-neutral-50 text-sage-600 border border-sage-200/50 hover:border-sage-500/30 text-xs font-semibold tracking-wider uppercase shadow-sm hover:shadow transition-all duration-300"
          >
            <Instagram className="w-4 h-4 text-terracotta-500" />
            <span>@amandaputri_</span>
          </a>
        </motion.div>
      </div>

      {/* Dynamic Count down block */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="w-full bg-sage-50 rounded-3xl p-8 border border-sage-200/60 shadow-lg text-center relative overflow-hidden"
      >
        {/* Subtle leafy background outline */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <Heart className="w-64 h-64 text-sage-900" />
        </div>

        <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-sage-600/80 mb-2 block">Menuju Hari Bahagia</span>
        <h3 className="text-2xl font-display text-wood-800 font-bold mb-6">Hitung Mundur Acara</h3>

        {/* Counter elements */}
        <div className="grid grid-cols-4 gap-3 max-w-md mx-auto">
          {[
            { label: "Hari", value: timeLeft.days },
            { label: "Jam", value: timeLeft.hours },
            { label: "Menit", value: timeLeft.minutes },
            { label: "Detik", value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl py-4 px-2 border border-sage-100 shadow-sm flex flex-col items-center justify-center relative group overflow-hidden"
            >
              {/* Colored hover glow bar */}
              <div className="absolute bottom-0 inset-x-0 h-1 bg-terracotta-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              
              <span className="text-2xl md:text-3xl font-serif text-wood-700 font-bold tracking-tight">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="text-[10px] text-sage-500 uppercase font-semibold tracking-widest mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-sage-600/80">
          <div className="flex items-center gap-1.5 bg-white/70 px-4 py-1.5 rounded-full border border-sage-200/40">
            <Calendar className="w-3.5 h-3.5 text-sage-500" />
            <span className="font-medium">Day, DD MMMM YYYY</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/70 px-4 py-1.5 rounded-full border border-sage-200/40">
            <Clock className="w-3.5 h-3.5 text-sage-500" />
            <span className="font-medium">09:00 WIB - Selesai</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
