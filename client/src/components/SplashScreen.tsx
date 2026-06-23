import { useEffect, useRef, useState } from "react";

interface SplashScreenProps {
  onEnter: () => void;
}

export default function SplashScreen({ onEnter }: SplashScreenProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [phase, setPhase] = useState<"loading" | "video" | "button" | "exiting">("loading");
  const [buttonVisible, setButtonVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const startVideo = () => {
      setPhase("video");
      video.play().catch(() => {});
      // Try to start audio
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.volume = 0.85;
        audioRef.current.play().catch(() => {});
      }
    };

    const handleEnded = () => {
      setPhase("button");
      setTimeout(() => setButtonVisible(true), 200);
    };

    const handleCanPlay = () => {
      setVideoReady(true);
      startVideo();
    };

    const handleCanPlayThrough = () => {
      setVideoReady(true);
      startVideo();
    };

    // If video already has enough data, start immediately
    if (video.readyState >= 3) {
      setVideoReady(true);
      startVideo();
    } else {
      video.addEventListener("canplay", handleCanPlay, { once: true });
      video.addEventListener("canplaythrough", handleCanPlayThrough, { once: true });
    }

    video.addEventListener("ended", handleEnded);

    // Fallback: show button after 20s regardless
    const fallback = setTimeout(() => {
      setPhase("button");
      setTimeout(() => setButtonVisible(true), 200);
    }, 20000);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("canplaythrough", handleCanPlayThrough);
      video.removeEventListener("ended", handleEnded);
      clearTimeout(fallback);
    };
  }, []);

  const handleEnter = () => {
    setPhase("exiting");
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setTimeout(() => {
      onEnter();
    }, 800);
  };

  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    // Video is always muted (no audio track) — only toggle the audio element
    if (audioRef.current) audioRef.current.muted = newMuted;
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black`}
      style={{
        opacity: phase === "exiting" ? 0 : 1,
        transition: "opacity 0.8s ease",
      }}
    >
      {/* Audio */}
      <audio ref={audioRef} src="/hwc_splash_audio.mp3" preload="auto" />

      {/* Video — always in DOM so it preloads */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-contain"
        src="/hwc_splash.mp4"
        muted
        playsInline
        preload="auto"
        autoPlay
        style={{ opacity: phase === "loading" ? 0 : 1, transition: "opacity 0.5s ease" }}
      />

      {/* Loading indicator */}
      {phase === "loading" && (
        <div className="relative z-10 flex flex-col items-center gap-4">
          <img
            src="/hwc_fire_logo.jpg"
            alt="Headwaters Customs"
            className="w-24 h-24 object-contain rounded-full opacity-60"
          />
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      )}

      {/* Mute toggle — top right, always visible */}
      {phase !== "loading" && (
        <button
          onClick={toggleMute}
          className="absolute top-5 right-5 z-20 flex items-center gap-2 px-4 py-2 rounded-full border border-white/40 bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 hover:border-white/70 transition-all duration-200 text-sm font-medium tracking-wide"
          aria-label={isMuted ? "Turn sound on" : "Turn sound off"}
        >
          {isMuted ? (
            <>
              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0017.73 19L19 20.27 20.27 19 5.27 4 4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
              </svg>
              <span className="text-amber-400">Sound Off</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
              </svg>
              <span>Sound On</span>
            </>
          )}
        </button>
      )}

      {/* Skip button */}
      {phase === "video" && (
        <button
          onClick={handleEnter}
          className="absolute top-5 left-5 z-20 text-white/30 hover:text-white/60 transition-colors text-xs tracking-widest uppercase"
        >
          Skip →
        </button>
      )}

      {/* Enter button — logo + CTA */}
      {phase === "button" && (
        <div
          className="relative z-10 flex flex-col items-center gap-4"
          style={{
            opacity: buttonVisible ? 1 : 0,
            transform: buttonVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 1s ease, transform 1s ease",
          }}
        >
          <button
            onClick={handleEnter}
            className="group relative focus:outline-none"
            aria-label="Enter Headwaters Customs"
          >
            <div className="absolute inset-0 rounded-full bg-amber-500/20 scale-0 group-hover:scale-110 transition-transform duration-500 blur-xl" />
            <img
              src="/hwc_fire_logo.jpg"
              alt="Headwaters Customs LLC"
              className="w-44 h-44 object-contain rounded-full group-hover:scale-105 transition-transform duration-300 cursor-pointer"
              style={{ filter: "drop-shadow(0 0 24px rgba(251,191,36,0.5))" }}
            />
          </button>

          <button
            onClick={handleEnter}
            className="text-white/80 hover:text-white transition-colors duration-300 text-sm tracking-[0.25em] uppercase cursor-pointer font-light"
          >
            Leave Ordinary Behind
          </button>

          <div className="text-amber-400/60 animate-bounce mt-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
