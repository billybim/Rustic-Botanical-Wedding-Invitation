import { useEffect, useRef, useState } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";

interface MusicPlayerProps {
  shouldPlay: boolean;
}

export default function MusicPlayer({ shouldPlay }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio player
    const audio = new Audio("https://upload.wikimedia.org/wikipedia/commons/e/e5/Chopin_Nocturne_Op_9_No_2_by_Florian_Noack.mp3");
    audio.loop = true;
    audio.volume = 0.55; // Gentle volumes
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // Sync state when shouldPlay changes (e.g. Buka Undangan is clicked)
  useEffect(() => {
    if (shouldPlay && audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((e) => {
          console.log("Autoplay was prevented by browser, waiting for user click.", e);
        });
    }
  }, [shouldPlay]);

  const togglePlayback = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((e) => {
          console.error("Playback error: ", e);
        });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      {/* Vinyl record disc wrapper */}
      <button
        onClick={togglePlayback}
        id="btn-music-toggle"
        className="relative group w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg active:scale-95 transition-all duration-300 pointer-events-auto"
        aria-label="Toggle Background Music"
      >
        {/* Glowing backdrop border animation */}
        <div className={`absolute -inset-0.5 bg-gradient-to-r from-sage-500 to-terracotta-500 rounded-full blur opacity-40 transition duration-1000 group-hover:opacity-60 ${isPlaying ? "animate-pulse" : ""}`} />

        {/* Vinyl styling */}
        <div className={`relative w-full h-full rounded-full bg-neutral-900 border-2 border-wood-200/50 flex items-center justify-center shadow-md overflow-hidden ${isPlaying ? "animate-vinyl" : ""}`}>
          
          {/* Authentic sound grooving pattern representing visual vinyl surface */}
          <div className="absolute inset-1 border border-neutral-700/40 rounded-full" />
          <div className="absolute inset-2 border border-neutral-800/60 rounded-full" />
          <div className="absolute inset-3.5 border border-neutral-700/20 rounded-full" />
          
          {/* Middle aesthetic golden core sticker */}
          <div className="absolute w-4 h-4 bg-wood-200 rounded-full border border-wood-700/30 flex items-center justify-center">
            {/* Center black spindle pinhole */}
            <div className="w-1.5 h-1.5 bg-neutral-900 rounded-full" />
          </div>

          Ref. {isPlaying}
        </div>

        {/* Volume status micro-badge */}
        <div className="absolute -top-1.5 -left-1.5 w-6 h-6 bg-cream-50 text-sage-600 rounded-full flex items-center justify-center border border-wood-100 shadow-md">
          {isPlaying ? (
            <Volume2 className="w-3 h-3 text-sage-600 animate-pulse" />
          ) : (
            <VolumeX className="w-3 h-3 text-neutral-400" />
          )}
        </div>
      </button>

      {/* Floating interactive hint tooltip - disappears once user interacts or if playing */}
      {!isPlaying && !shouldPlay && (
        <div className="absolute right-14 bg-cream-50 border border-wood-100/70 text-[9px] uppercase tracking-widest text-sage-600 font-semibold px-3 py-1.5 rounded-lg shadow-sm whitespace-nowrap glow-subtle select-none">
          Mulai Musik
        </div>
      )}
    </div>
  );
}
