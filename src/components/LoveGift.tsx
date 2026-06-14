import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Copy, Check, Gift, Landmark, Send, MapPin } from "lucide-react";

interface GiftCard {
  id: string;
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  bankCodeName: string; // for logos
}

const GIFT_ACCOUNTS: GiftCard[] = [
  {
    id: "bca",
    bankName: "Bank Central Asia (BCA)",
    accountNumber: "0123456789",
    accountHolder: "Rizky Pratama",
    bankCodeName: "BCA"
  },
  {
    id: "mandiri",
    bankName: "Bank Mandiri",
    accountNumber: "9876543210",
    accountHolder: "Amanda Putri",
    bankCodeName: "MANDIRI"
  }
];

export default function LoveGift() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [showAddress, setShowAddress] = useState(false);

  const physicalAddress = "Cluster Botanical Raya Blok C-12, Cilandak KKO, Jakarta Selatan (UP: Amanda Putri - 08123456789)";

  const handleCopy = (id: string, text: string, isAddress = false) => {
    navigator.clipboard.writeText(text).then(() => {
      if (isAddress) {
        setCopiedAddress(true);
        setTimeout(() => setCopiedAddress(false), 2000);
      } else {
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
      }
    }).catch(err => {
      console.warn("Clipboard copying failed. Fallback or browser restriction in iframe.", err);
    });
  };

  return (
    <section id="gift" className="py-24 px-4 bg-cream-50 paper-texture">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-sage-600 block mb-3">Tanda Kasih</span>
          <h2 className="text-3xl md:text-4xl font-display text-wood-800 font-bold mb-3">Love Gift Digital</h2>
          <p className="text-xs text-sage-500 italic font-serif">Kebaikan & Kasih Bapak/Ibu Merajut Senyum Bahagia Kami</p>
          <div className="botanical-divider w-32 mx-auto mt-4" />
        </div>

        <div className="max-w-xl mx-auto text-center mb-12">
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            Bagi keluarga dan sahabat yang ingin memberikan tanda kasih untuk menemani perjalanan hidup baru kami, dapat mengirimkannya melalui kanal-kanal berkat berikut:
          </p>
        </div>

        {/* Bank accounts list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          {GIFT_ACCOUNTS.map((acc) => (
            <motion.div
              key={acc.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 border border-wood-100 shadow-xl relative overflow-hidden group glow-subtle flex flex-col justify-between"
            >
              {/* Card visual detail */}
              <div className="absolute right-0 top-0 w-24 h-24 bg-sage-50 rounded-bl-full opacity-30" />
              
              <div>
                {/* Bank Header Card visual */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="p-2 bg-sage-100 text-sage-700 rounded-xl">
                      <Landmark className="w-5 h-5 text-sage-600" />
                    </span>
                    <span className="text-xs tracking-wider uppercase font-bold text-sage-700">TRANSFER BANK</span>
                  </div>
                  
                  {/* Mimic stylish bank badge */}
                  <span className="text-xs tracking-widest font-mono font-bold bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full border border-neutral-200">
                    {acc.bankCodeName}
                  </span>
                </div>

                {/* Account Details */}
                <div className="space-y-4 text-left">
                  <div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-0.5">Atas Nama (Holder)</span>
                    <span className="text-md font-serif font-bold text-wood-800 block">
                      {acc.accountHolder}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-1">Nomor Rekening</span>
                    <div className="flex items-center justify-between gap-3 bg-wood-50 rounded-2xl px-4 py-3 border border-wood-100">
                      <code className="text-sm md:text-sm font-mono font-bold text-wood-700 select-all tracking-wider">
                        {acc.accountNumber}
                      </code>
                      
                      {/* Copy Action Button */}
                      <button
                        onClick={() => handleCopy(acc.id, acc.accountNumber)}
                        className={`relative w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer border ${
                          copiedId === acc.id
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : "bg-white text-sage-600 border-wood-100/50 hover:border-sage-500 hover:text-sage-700"
                        } transition-colors`}
                        aria-label="Copy Account Number"
                        id={`btn-copy-${acc.id}`}
                      >
                        <AnimatePresence mode="wait">
                          {copiedId === acc.id ? (
                            <motion.div
                              key="copied"
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.5 }}
                            >
                              <Check className="w-4 h-4" />
                            </motion.div>
                          ) : (
                            <motion.div
                              key="copy"
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.5 }}
                            >
                              <Copy className="w-4 h-4" />
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Tooltip confirmation pop */}
                        {copiedId === acc.id && (
                          <span className="absolute bottom-10 bg-emerald-700 text-white text-[9px] font-sans font-bold uppercase px-2 py-1 rounded shadow-lg whitespace-nowrap z-30 animate-bounce tracking-widest">
                            Tersalin!
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-wood-100/40 text-left">
                <p className="text-[10px] text-sage-500/80 italic font-mono uppercase tracking-wider">
                  *Silakan transfer ke nomor di atas
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Physical Gift shipping address collapsible toggle */}
        <div className="text-center">
          <button
            onClick={() => setShowAddress(!showAddress)}
            id="toggle-address"
            className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-cream-100/80 hover:bg-cream-200 text-sage-700 font-sans font-bold text-xs tracking-wider uppercase border border-wood-200 cursor-pointer transition-all hover:scale-102 hover:shadow"
          >
            <Gift className="w-4 h-4 text-terracotta-500" />
            <span>{showAddress ? "Tutup Alamat Kirim Kado" : "Kirim Kado Kiriman Fisik"}</span>
          </button>

          <AnimatePresence>
            {showAddress && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="max-w-md mx-auto mt-6"
              >
                <div className="bg-cream-50 p-6 rounded-2xl border border-wood-200/50 shadow-inner text-left glow-subtle">
                  <div className="flex gap-3 items-start">
                    <MapPin className="w-5 h-5 text-terracotta-500 mt-1 flex-shrink-0" />
                    <div className="space-y-3 flex-grow">
                      <div>
                        <h4 className="text-xs font-bold text-sage-600 uppercase tracking-widest">Alamat Pengiriman</h4>
                        <p className="text-sm font-sans text-wood-800 leading-relaxed font-medium mt-1">
                          Cluster Botanical Raya Blok C-12, Cilandak KKO, Jakarta Selatan
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5 italic">A/N Amanda Putri (08123456789)</p>
                      </div>

                      {/* Code layout with copy button */}
                      <button
                        onClick={() => handleCopy("address", physicalAddress, true)}
                        className="relative flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-[10px] font-bold tracking-wider uppercase border border-sage-300 hover:bg-sage-50 text-sage-700 cursor-pointer transition-all ml-auto outline-none"
                      >
                        {copiedAddress ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Alamat Tersalin!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Salin Alamat</span>
                          </>
                        )}

                        {/* Speech bubble copy confirmaton */}
                        {copiedAddress && (
                          <span className="absolute bottom-10 right-2 bg-emerald-700 text-white text-[8px] font-sans font-bold uppercase px-2 py-1 rounded shadow-md whitespace-nowrap animate-bounce">
                            Tersalin!
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
