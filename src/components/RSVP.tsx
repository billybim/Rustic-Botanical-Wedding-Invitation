import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RsvpMessage } from "../types";
import { Send, CheckCircle2, AlertCircle, MessageSquare, Users } from "lucide-react";

// Pre-filled authentic guest wishes representation
const DEFAULT_WISHES: RsvpMessage[] = [
  {
    id: "default-1",
    name: "Ahmad Subardjo",
    message: "Selamat menempuh hidup baru Amanda dan Rizky! Semoga dilimpahi kebahagiaan, sakinah, mawaddah, warahmah sampai akhir hayat nanti. Pengen banget dateng tapi bertepatan tugas di luar kota, doa terbaik kami panjatkan!",
    attendance: "Tidak Hadir",
    timestamp: "10 Juni 2026, 14:15"
  },
  {
    id: "default-2",
    name: "Sindy Permata",
    message: "Aaa kalian berdua serasi banget seh! Masih inget awal cerita kalian dari zaman kuliah. Lancar-lancar ya pernikahannya sampai hari H dan langgeng selamanya ya sweet couple! 🥰",
    attendance: "Hadir",
    timestamp: "11 Juni 2026, 09:30"
  },
  {
    id: "default-3",
    name: "Bambang Pamungkas",
    message: "Selamat ya Rizky dan Amanda! Semoga pernikahan ini dilimpahi rezeki yang berkah, kesehatan, dan lekas dianugerahi keturunan yang saleh dan salehah.",
    attendance: "Hadir",
    timestamp: "11 Juni 2025, 20:05"
  }
];

export default function RSVP() {
  const [messages, setMessages] = useState<RsvpMessage[]>([]);
  const [name, setName] = useState("");
  const [messageText, setMessageText] = useState("");
  const [attendance, setAttendance] = useState<"Hadir" | "Tidak Hadir">("Hadir");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [validationError, setValidationError] = useState("");

  // Load from localStorage or use defaults
  useEffect(() => {
    try {
      const stored = localStorage.getItem("wedding_rsvp_messages");
      if (stored) {
        setMessages(JSON.parse(stored));
      } else {
        setMessages(DEFAULT_WISHES);
        localStorage.setItem("wedding_rsvp_messages", JSON.stringify(DEFAULT_WISHES));
      }
    } catch (e) {
      console.error("Localstorage deserialization error", e);
      setMessages(DEFAULT_WISHES);
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setValidationError("");

    // Simple robust frontend validations
    if (!name.trim()) {
      setValidationError("Silakan masukkan nama Anda.");
      return;
    }
    if (!messageText.trim()) {
      setValidationError("Silakan tulis pesan ucapan Anda.");
      return;
    }

    setIsSubmitting(true);

    // Simulate database network delay beautifully
    setTimeout(() => {
      const dateOption: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      
      const newMessage: RsvpMessage = {
        id: `msg-${Date.now()}`,
        name: name.trim(),
        message: messageText.trim(),
        attendance,
        timestamp: new Date().toLocaleDateString("id-ID", dateOption),
      };

      const updatedMessages = [newMessage, ...messages];
      setMessages(updatedMessages);
      localStorage.setItem("wedding_rsvp_messages", JSON.stringify(updatedMessages));

      // Reset form variables
      setName("");
      setMessageText("");
      setAttendance("Hadir");
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Dismiss victory flash banner after a moment
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1000);
  };

  // Count attendances
  const totalAttending = messages.filter((m) => m.attendance === "Hadir").length;

  return (
    <section id="rsvp" className="py-24 px-4 bg-wood-50 paper-texture">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-sage-600 block mb-3">Reservasi & Doa</span>
          <h2 className="text-3xl md:text-4xl font-display text-wood-800 font-bold mb-3">Buku Tamu & RSVP</h2>
          <p className="text-xs text-sage-500 italic font-serif">Simfoni Doa & Konfirmasi Kehadiran Tamu Agung</p>
          <div className="botanical-divider w-32 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Form Side */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-cream-50 rounded-3xl p-6 md:p-8 border border-wood-100 shadow-xl relative overflow-hidden glow-subtle"
            >
              {/* Floating Leaf motif */}
              <div className="absolute right-[-10px] bottom-[-10px] opacity-5 pointer-events-none w-32 h-32">
                <svg className="w-full h-full text-sage-700" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50,0 C75,25 75,75 50,100 C25,75 25,25 50,0 Z" />
                </svg>
              </div>

              <h3 className="text-lg font-display font-bold text-wood-800 mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-sage-600" />
                <span>Kirim Ucapan & RSVP</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="input-name" className="text-xs font-bold text-sage-600 uppercase tracking-widest block mb-2">
                    Nama Anda
                  </label>
                  <input
                    id="input-name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setValidationError("");
                      setName(e.target.value);
                    }}
                    placeholder="Contoh: Billy Bimara"
                    className="w-full px-4 py-3 bg-white border border-wood-100 rounded-xl text-sm text-wood-800 placeholder-sage-400/60 focus:outline-none focus:ring-2 focus:ring-sage-500/30 focus:border-sage-500 transition-all font-sans"
                  />
                </div>

                {/* Confirm attendance */}
                <div>
                  <label className="text-xs font-bold text-sage-600 uppercase tracking-widest block mb-3">
                    Konfirmasi Kehadiran
                  </label>
                  
                  {/* Styled Radio Group */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      id="radio-hadir"
                      onClick={() => setAttendance("Hadir")}
                      className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold tracking-wider uppercase border cursor-pointer transition-all ${
                        attendance === "Hadir"
                          ? "bg-sage-600 text-white border-sage-600 shadow-md shadow-sage-600/10"
                          : "bg-white text-sage-600 border-wood-100/70 hover:border-sage-300"
                      }`}
                    >
                      <span className={`w-2.5 h-2.5 rounded-full ${attendance === "Hadir" ? "bg-white" : "bg-sage-600"}`} />
                      <span>Hadir</span>
                    </button>
                    
                    <button
                      type="button"
                      id="radio-absen"
                      onClick={() => setAttendance("Tidak Hadir")}
                      className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold tracking-wider uppercase border cursor-pointer transition-all ${
                        attendance === "Tidak Hadir"
                          ? "bg-terracotta-500 text-white border-terracotta-500 shadow-md shadow-terracotta-500/10"
                          : "bg-white text-sage-600 border-wood-100/70 hover:border-sage-300"
                      }`}
                    >
                      <span className={`w-2.5 h-2.5 rounded-full ${attendance === "Tidak Hadir" ? "bg-white" : "bg-terracotta-500"}`} />
                      <span>Absen</span>
                    </button>
                  </div>
                </div>

                {/* Message text */}
                <div>
                  <label htmlFor="input-message" className="text-xs font-bold text-sage-600 uppercase tracking-widest block mb-2">
                    Ucapan & Doa Tulus
                  </label>
                  <textarea
                    id="input-message"
                    rows={4}
                    value={messageText}
                    onChange={(e) => {
                      setValidationError("");
                      setMessageText(e.target.value);
                    }}
                    placeholder="Tuliskan ucapan selamat dan doa tulus untuk kedua mempelai di sini..."
                    className="w-full px-4 py-3 bg-white border border-wood-100 rounded-xl text-sm text-wood-800 placeholder-sage-400/60 focus:outline-none focus:ring-2 focus:ring-sage-500/30 focus:border-sage-500 transition-all font-sans resize-none"
                  />
                </div>

                {/* Alert Notification */}
                <AnimatePresence mode="wait">
                  {validationError && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex items-center gap-1.5 p-3 rounded-lg bg-orange-50 border border-orange-200 text-orange-800 text-xs text-sans"
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{validationError}</span>
                    </motion.div>
                  )}

                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex items-center gap-1.5 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs text-sans font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span>Ucapan Anda berhasil dikirim & disimpan. Terima kasih!</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  id="btn-rsvp-submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-sage-600 hover:bg-sage-700 text-white font-sans font-medium text-xs tracking-widest uppercase py-3.5 rounded-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 shadow-md hover:shadow-lg"
                >
                  <Send className={`w-3.5 h-3.5 ${isSubmitting ? "animate-ping" : ""}`} />
                  <span>{isSubmitting ? "Mengirim..." : "Kirim Ucapan"}</span>
                </button>
              </form>
            </motion.div>
          </div>

          {/* List Messages Side */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <div className="bg-cream-50/50 rounded-3xl p-6 md:p-8 border border-wood-100 flex flex-col h-full shadow-md">
              
              {/* Counters statistics info */}
              <div className="flex items-center justify-between border-b border-wood-100/50 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-sage-600" />
                  <span className="text-xs tracking-wider font-extrabold uppercase text-wood-700">Wishes Tamu ({messages.length})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-sage-100 text-sage-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {totalAttending} Hadir
                  </span>
                </div>
              </div>

              {/* Message scroll viewport */}
              <div className="space-y-4 max-h-[480px] overflow-y-auto pr-1 overflow-x-hidden scrollbar-thin scrollbar-thumb-sage-200">
                <AnimatePresence initial={false}>
                  {messages.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -15, y: -5 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ type: "spring", damping: 20, stiffness: 200 }}
                      className="bg-white rounded-2xl p-4 md:p-5 border border-wood-100 shadow-sm relative group"
                    >
                      {/* Attendance sticker badge */}
                      <span
                        className={`absolute top-4 right-4 text-[9px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-widest ${
                          item.attendance === "Hadir"
                            ? "bg-sage-50 text-sage-700 border border-sage-200/50"
                            : "bg-red-50 text-red-700 border border-red-100"
                        }`}
                      >
                        {item.attendance === "Hadir" ? "Hadir" : "Absen"}
                      </span>

                      {/* Guest name */}
                      <h4 className="text-sm font-serif font-bold text-wood-800 pr-16 leading-tight flex items-center gap-1.5">
                        {item.name}
                      </h4>

                      {/* Msg timestamp */}
                      <span className="text-[9px] text-gray-400 font-sans block mt-0.5 mb-2.5">
                        {item.timestamp}
                      </span>

                      {/* Word balloon text */}
                      <p className="text-xs text-gray-600 leading-relaxed font-sans pre-line">
                        {item.message}
                      </p>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {messages.length === 0 && (
                  <div className="text-center py-12 text-sage-400/80">
                    <p className="text-sm italic font-serif">Belum ada ucapan. Jadilah yang pertama mengirimkan ucapan hangat!</p>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
