import { useEffect, useRef, useState } from "react";

interface SplashScreenProps {
  onEnter: () => void;
}

export default function SplashScreen({ onEnter }: SplashScreenProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [phase, setPhase] = useState<"video" | "button" | "exiting">("video");
  const [buttonVisible, setButtonVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(false); // Sound ON by default

  // Preload audio and set volume
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.85;
      audio.muted = false;
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      // Start audio in sync with video
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {
          // Browser blocked autoplay with sound — silently fail, user can unmute
        });
      }
    };

    video.addEventListener("play", handlePlay);

    const handleEnded = () => {
      // Video finished — fade in the button
      setPhase("button");
      setTimeout(() => setButtonVisible(true), 100);
    };

    video.addEventListener("ended", handleEnded);

    // Fallback: if video doesn't fire ended event, show button after 16s
    const fallback = setTimeout(() => {
      if (phase === "video") {
        setPhase("button");
        setTimeout(() => setButtonVisible(true), 100);
      }
    }, 16000);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("ended", handleEnded);
      clearTimeout(fallback);
    };
  }, [phase]);

  const handleEnter = () => {
    setPhase("exiting");
    setTimeout(() => {
      onEnter();
    }, 800);
  };

  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    if (videoRef.current) videoRef.current.muted = newMuted;
    if (audioRef.current) audioRef.current.muted = newMuted;
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-800 ${
        phase === "exiting" ? "opacity-0" : "opacity-100"
      }`}
      style={{ transition: "opacity 0.8s ease" }}
    >
      {/* Audio Layer */}
      <audio
        ref={audioRef}
        src="/hwc_splash_audio.mp3"
        preload="auto"
      />

      {/* Video Layer */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/hwc_splash.mp4"
        autoPlay
        muted={isMuted}
        playsInline
        preload="auto"
      />

      {/* Mute/Unmute toggle — prominent, top right, clearly visible */}
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

      {/* Skip button — subtle, top left */}
      {phase === "video" && (
        <button
          onClick={handleEnter}
          className="absolute top-5 left-5 z-20 text-white/30 hover:text-white/60 transition-colors text-xs tracking-widest uppercase"
        >
          Skip →
        </button>
      )}

      {/* Enter Button — Logo + CTA */}
      {phase === "button" && (
        <div
          className={`relative z-10 flex flex-col items-center gap-4 transition-all duration-1000 ${
            buttonVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transition: "opacity 1s ease, transform 1s ease" }}
        >
          {/* Logo as clickable button */}
          <button
            onClick={handleEnter}
            className="group relative focus:outline-none"
            aria-label="Enter Headwaters Customs"
          >
            {/* Glow ring on hover */}
            <div className="absolute inset-0 rounded-full bg-amber-500/20 scale-0 group-hover:scale-110 transition-transform duration-500 blur-xl" />
            <img
              src="/hwc_fire_logo.jpg"
              alt="Headwaters Customs LLC"
              className="w-40 h-40 object-contain rounded-full group-hover:scale-105 transition-transform duration-300 cursor-pointer"
              style={{
                filter: "drop-shadow(0 0 20px rgba(251,191,36,0.4))",
              }}
            />
          </button>

          {/* CTA text */}
          <button
            onClick={handleEnter}
            className="text-white/70 hover:text-white transition-colors duration-300 text-sm tracking-[0.2em] uppercase cursor-pointer font-light"
          >
            Leave Ordinary Behind
          </button>

          {/* Subtle animated arrow */}
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
