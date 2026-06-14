import { motion } from "motion/react";
import { MapPin, Calendar, Clock, Map, Sparkles, BookOpen, Heart } from "lucide-react";

export default function Event() {
  const mapUrl = "https://maps.app.goo.gl/U1XeUpRGM7AoeKt27"; // standard mock URL or actual Plataran Cilandak
  const realPlataranMaps = "https://maps.app.goo.gl/U1XeUpRGM7AoeKt27";
  const calendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Amanda+%26+Rizky&dates=20261017T020000Z/20261017T090000Z&details=Hari+Bahagia+Pernikahan+Amanda+dan+Rizky.+Kami+sangat+menanti+kehadiran+Anda!&location=Plataran+Cilandak,+Jl.+Raya+Cilandak+KKO+No.9,+Cilandak+Tim.,+Jakarta+Selatan";

  return (
    <section id="event" className="py-24 px-4 bg-wood-50 paper-texture">
      <div className="max-w-4xl mx-auto">
        
        {/* Section title */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-sage-600 block mb-3">Informasi Acara</span>
          <h2 className="text-3xl md:text-4xl font-display text-wood-800 font-bold mb-3">Jadwal Keneguhan</h2>
          <p className="text-xs text-sage-500 italic font-serif">Penyatuan Dua Jiwa Dalam Ikatan Suci Abadi</p>
          <div className="botanical-divider w-32 mx-auto mt-4" />
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Akad Nikah Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col bg-cream-50/90 rounded-3xl p-8 border border-wood-100 shadow-xl relative overflow-hidden h-full group glow-subtle"
          >
            {/* Design elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-sage-50 rounded-bl-full opacity-30 group-hover:scale-110 transition-transform duration-500" />
            <BookOpen className="absolute top-6 right-6 w-5 h-5 text-sage-500/30" />

            <div className="flex items-center gap-2 mb-6">
              <span className="p-2.5 bg-sage-100 text-sage-700 rounded-xl">
                <Sparkles className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-xl font-display font-bold text-wood-800">Akad Nikah</h3>
                <p className="text-[9px] uppercase tracking-widest text-sage-500 font-semibold">Ijab Kabul & Sakramen</p>
              </div>
            </div>

            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-start gap-3">
                <Calendar className="w-4.5 h-4.5 text-sage-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs uppercase font-extrabold text-sage-500 tracking-wider">Tanggal</h4>
                  <p className="text-sm font-sans font-medium text-wood-700">Day, DD MMMM YYYY</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4.5 h-4.5 text-sage-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs uppercase font-extrabold text-sage-500 tracking-wider">Waktu</h4>
                  <p className="text-sm font-sans font-medium text-wood-700">09:00 - 11:00 WIB</p>
                  <p className="text-[10px] text-gray-500 italic mt-0.5">(Khusus Pihak Keluarga Inti)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4.5 h-4.5 text-sage-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs uppercase font-extrabold text-sage-500 tracking-wider">Tempat Semadi</h4>
                  <p className="text-sm font-sans font-bold text-wood-800">Garden Pavilion Plataran</p>
                  <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                    Jl. Raya Cilandak KKO No.9, Cilandak Timur, Jakarta Selatan
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-wood-100/40">
              <p className="text-xs font-serif italic text-sage-500 text-center">"Saling Berpaut, Saling Merawat"</p>
            </div>
          </motion.div>

          {/* Resepsi Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col bg-cream-50/90 rounded-3xl p-8 border border-wood-100 shadow-xl relative overflow-hidden h-full group glow-subtle"
          >
            {/* Design elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-terracotta-50/50 rounded-bl-full opacity-30 group-hover:scale-110 transition-transform duration-500" />
            <Sparkles className="absolute top-6 right-6 w-5 h-5 text-terracotta-500/30" />

            <div className="flex items-center gap-2 mb-6">
              <span className="p-2.5 bg-wood-100 text-terracotta-600 rounded-xl">
                <Heart className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-xl font-display font-bold text-wood-800">Resepsi Pernikahan</h3>
                <p className="text-[9px] uppercase tracking-widest text-terracotta-600 font-semibold">The Grand Feast Party</p>
              </div>
            </div>

            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-start gap-3">
                <Calendar className="w-4.5 h-4.5 text-sage-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs uppercase font-extrabold text-sage-500 tracking-wider">Tanggal</h4>
                  <p className="text-sm font-sans font-medium text-wood-700">Day, DD MMMM YYYY</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4.5 h-4.5 text-sage-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs uppercase font-extrabold text-sage-500 tracking-wider">Waktu</h4>
                  <p className="text-sm font-sans font-medium text-wood-700">12:00 - 16:00 WIB</p>
                  <p className="text-[10px] text-gray-500 italic mt-0.5">(Sesi Terbuka Untuk Umum)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4.5 h-4.5 text-sage-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs uppercase font-extrabold text-sage-500 tracking-wider">Tempat Semadi</h4>
                  <p className="text-sm font-sans font-bold text-wood-800">Grand Lawn Area Plataran</p>
                  <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                    Jl. Raya Cilandak KKO No.9, Cilandak Timur, Jakarta Selatan
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-wood-100/40">
              <p className="text-xs font-serif italic text-sage-500 text-center">"Sukacita Hadirin Kebahagiaan Kami"</p>
            </div>
          </motion.div>
        </div>

        {/* Unified Locations Call-to-Actions Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-sage-600 rounded-3xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          {/* Decorative Leaf SVG inside */}
          <div className="absolute right-0 top-0 bottom-0 opacity-10 pointer-events-none w-1/3">
            <svg className="w-full h-full text-white" viewBox="0 0 100 100" fill="currentColor">
              <path d="M0,100 C40,70 70,40 100,0 C80,30 20,90 0,100 Z" />
            </svg>
          </div>

          <div className="text-center md:text-left z-10">
            <h4 className="text-lg font-display font-medium text-cream-50">Petunjuk Peta & Kalender</h4>
            <p className="text-xs text-sage-100 mt-1 max-w-md">
              Gunakan penunjuk jalan Google Maps untuk menavigasi ke Plataran Cilandak, serta simpan alarm tanggal di ponsel pintar Anda.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 z-10 w-full md:w-auto">
            <a
              href={realPlataranMaps}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-maps"
              className="flex items-center justify-center gap-2 w-full sm:w-auto bg-cream-100 hover:bg-white text-sage-700 font-sans font-medium text-xs tracking-wider uppercase px-5 py-3 rounded-xl border border-white hover:shadow-md cursor-pointer transition-all duration-300 pointer-events-auto"
            >
              <Map className="w-4 h-4 text-terracotta-500" />
              <span>Buka Google Maps</span>
            </a>
            
            <a
              href={calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="btn-calendar"
              className="flex items-center justify-center gap-2 w-full sm:w-auto bg-sage-700/60 hover:bg-sage-700 text-white font-sans font-medium text-xs tracking-wider uppercase px-5 py-3 rounded-xl border border-sage-500 hover:shadow-md cursor-pointer transition-all duration-300 pointer-events-auto"
            >
              <Calendar className="w-4 h-4" />
              <span>Simpan Tanggal</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
