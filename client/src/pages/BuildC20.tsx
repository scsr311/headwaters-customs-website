import React, { useState } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { ChevronLeft, ChevronRight, X, Zap, Settings, Gauge, Wrench, Calendar, Trophy, Timer } from "lucide-react";

const HC_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/octXJdDmJfadwTKn.png";

// Hero — C20 in front of Headwaters Customs shop sign (IMG_3076)
const HERO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/LtFALGpraINijolX.jpg";

// All 21 photos: build process first, then finished truck
const photos = [
  // ---- Build Process ----
  // IMG_2742 - bare frame/chassis early teardown
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/fKqqQDuNRrvPJlsR.jpg", caption: "Frame-off teardown begins — bare chassis", tag: "Build Process" },
  // IMG_2743
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/XFajOecyDSdtYVmu.jpg", caption: "Chassis work in progress", tag: "Build Process" },
  // IMG_2744
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/DpAWOyjhIcDdcyWt.jpg", caption: "Frame restoration underway", tag: "Build Process" },
  // IMG_2745
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/EFOYyEXuExfQjqjD.jpg", caption: "Frame and suspension work", tag: "Build Process" },
  // IMG_2767 - bare cab on rotisserie, passenger side
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/zzKPLnBKdYslQFUk.jpg", caption: "Bare cab on rotisserie jig — passenger side", tag: "Build Process" },
  // IMG_2768 - bare cab on rotisserie, driver side
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/lITCcQvrzudvvvGw.jpg", caption: "Bare cab on rotisserie jig — driver side", tag: "Build Process" },
  // IMG_2769 - cab in epoxy primer
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/WVibAzHfeSGGnXBm.jpg", caption: "Cab in epoxy primer — body work underway", tag: "Build Process" },
  // IMG_3041 - wooden bed installed, shop interior
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/CFHyecIuRrAINbAL.jpg", caption: "Custom wooden bed installed — shop interior", tag: "Build Process" },
  // IMG_3087 - wooden bed dusk, Montana mountains
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/NRWhmBjbiuTzbPZG.jpg", caption: "Wooden bed — dusk, Montana mountains in background", tag: "Build Process" },
  // IMG_3084 - wooden bed night shot
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/VPGUPkcHjNmYjTEY.jpg", caption: "Wooden bed — night shot, warm lighting", tag: "Build Process" },
  // IMG_3088 - wooden bed shop floor
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/jKwvqNxNCsVEZFpf.jpg", caption: "Wooden bed — near completion, shop floor", tag: "Build Process" },
  // ---- Finished Truck ----
  // IMG_3076 - in front of HC shop sign, golden hour
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/LtFALGpraINijolX.jpg", caption: "Finished — in front of Headwaters Customs shop (golden hour)", tag: "Finished" },
  // IMG_3077 - in front of HC shop sign, morning light
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/eEFeRKMDMIddtzpn.jpg", caption: "Finished — in front of Headwaters Customs shop (morning light)", tag: "Finished" },
  // IMG_3078 - front 3/4 at shop
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/QRdcjMbkwkuxKrYj.jpg", caption: "Finished — front 3/4 view at shop", tag: "Finished" },
  // IMG_3059 - front 3/4 inside shop, reverse hood scoops
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/YjAfuoGeIiNGxfMb.jpg", caption: "Finished — front 3/4 inside shop, reverse hood scoops", tag: "Finished" },
  // IMG_3058 - front 3/4 inside shop, Shamrock green
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/XjpSSkeRewweLdFg.jpg", caption: "Finished — front 3/4 inside shop, Shamrock green paint", tag: "Finished" },
  // IMG_3057 - straight-on front, LED halos
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/ktPWHcDEOuMBBkMf.jpg", caption: "Finished — straight-on front, LED halo headlights", tag: "Finished" },
  // IMG_3060 - driver side profile, full length
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/smuPsWEUuPrsbpIP.jpg", caption: "Finished — driver side profile, full length", tag: "Finished" },
  // IMG_3073 - front 3/4 outside shop
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/iyvFvwBhewUTBoxg.jpg", caption: "Finished — front 3/4 outside shop", tag: "Finished" },
  // IMG_3074 - straight-on front, outside
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/HkABmjbxodBpHjdY.jpg", caption: "Finished — straight-on front, outside", tag: "Finished" },
  // IMG_3075 - front 3/4 outside, golden hour
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/TwrhwtAJshQfVnKr.jpg", caption: "Finished — front 3/4 outside, golden hour", tag: "Finished" },
];

const specs = [
  { icon: Zap, label: "Engine", value: "402/396 Big Block — In-House Rebuilt" },
  { icon: Settings, label: "Transmission", value: "Turbo 400 Automatic" },
  { icon: Wrench, label: "Hood", value: "Custom Reverse Hood Scoops (In-House Design)" },
  { icon: Wrench, label: "Bed", value: "Custom Wooden Bed" },
  { icon: Gauge, label: "Paint", value: "Shamrock Green on Pearl White" },
  { icon: Gauge, label: "Lighting", value: "LED Halo Headlights in Factory Housings" },
  { icon: Trophy, label: "Restoration Type", value: "Frame-Off — Nut & Bolt" },
  { icon: Timer, label: "Build Time", value: "28 Days — Finished 2 Days Early" },
  { icon: Calendar, label: "Unveiled", value: "July 4th, 2025" },
];

const PROCESS_PHOTOS = photos.filter(p => p.tag === "Build Process");
const FINISHED_PHOTOS = photos.filter(p => p.tag === "Finished");

export default function BuildC20() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"all" | "process" | "finished">("all");

  const displayPhotos = activeTab === "all" ? photos : activeTab === "process" ? PROCESS_PHOTOS : FINISHED_PHOTOS;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevPhoto = () => setLightboxIndex((i) => (i !== null ? (i - 1 + displayPhotos.length) % displayPhotos.length : 0));
  const nextPhoto = () => setLightboxIndex((i) => (i !== null ? (i + 1) % displayPhotos.length : 0));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section
        className="relative min-h-[70vh] flex items-end pb-16"
        style={{
          backgroundImage: `url(${HERO_URL})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        <div className="relative z-10 container max-w-5xl mx-auto px-4">
          <Link href="/gallery">
            <span className="inline-flex items-center gap-1 text-accent text-xs font-bold uppercase tracking-widest mb-6 hover:text-accent/80 transition-colors cursor-pointer">
              <ChevronLeft className="w-3 h-3" /> Back to Gallery
            </span>
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <img src={HC_LOGO} alt="HC" className="w-14 h-14 object-contain opacity-90" />
            <div>
              <p className="text-accent text-xs font-bold uppercase tracking-[0.3em]">1972 Chevrolet C20 Cheyenne Custom Camper Special</p>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white leading-none">
                The 28-Day<br />
                <span className="text-green-400">Challenge</span>
              </h1>
            </div>
          </div>
          <p className="brand-script text-2xl text-white/80 mt-2">
            Frame off. No shortcuts. Finished in 28 days.
          </p>

          {/* Challenge badge */}
          <div className="flex gap-4 mt-6 flex-wrap">
            <div className="bg-green-500/20 border border-green-500/40 rounded-lg px-4 py-2 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-green-400" />
              <span className="text-green-300 text-sm font-bold uppercase tracking-wider">Challenge: 30 Days</span>
            </div>
            <div className="bg-accent/20 border border-accent/40 rounded-lg px-4 py-2 flex items-center gap-2">
              <Timer className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-bold uppercase tracking-wider">Finished: 28 Days</span>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-white/70" />
              <span className="text-white/70 text-sm font-bold uppercase tracking-wider">Unveiled: July 4th, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Build Story */}
      <section className="py-16 bg-card/40">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-3">The Story</p>
              <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-6">
                A Bet. A Build. A Statement.
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Every shop talks about quality. Fewer talk about speed. Headwaters Customs decided to prove both at the 
                  same time. Co-founders Mike and Clay made a bet: they could take a 1972 C20 Cheyenne Custom Camper Special 
                  from bare frame to finished truck — a complete, no-compromises frame-off restoration — in 30 days.
                </p>
                <p>
                  The rules were simple and unforgiving. Frame off meant frame off. Every nut and bolt would be addressed. 
                  The big block would be rebuilt in-house. The body would be stripped, straightened, and painted to show 
                  quality. No shortcuts, no farming out work, no cutting corners to make the deadline.
                </p>
                <p>
                  The engine is a factory 402/396 big block — rebuilt completely in-house by the Headwaters team. Behind 
                  it, a Turbo 400 automatic. The body got custom reverse hood scoops designed and fabricated in-house, 
                  giving the truck an aggressive stance that wasn't there from the factory. The bed received a custom 
                  wooden floor, hand-fitted and finished to complement the Shamrock green on pearl white two-tone paint.
                </p>
                <p>
                  The unveiling was set for the 4th of July, 2025. They finished on July 2nd — two days early. The bet 
                  was won. More importantly, a point was made: Headwaters Customs doesn't just build quality trucks. 
                  They build them on time.
                </p>
              </div>
            </div>

            {/* Specs */}
            <div>
              <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-3">Build Specs</p>
              <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-6">What We Built</h2>
              <div className="grid grid-cols-1 gap-3">
                {specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-4 bg-background/60 border border-border/30 rounded-lg p-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                      <spec.icon className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest">{spec.label}</p>
                      <p className="text-white font-bold text-sm">{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-2">Build Gallery</p>
            <h2 className="text-4xl font-black uppercase tracking-tight text-white mb-6">
              {photos.length} Photos — From Bare Metal to Finished
            </h2>

            {/* Tab filters */}
            <div className="flex justify-center gap-3 flex-wrap">
              {(["all", "process", "finished"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded text-xs font-black uppercase tracking-widest transition-all ${
                    activeTab === tab
                      ? "bg-accent text-black"
                      : "border border-border/40 text-muted-foreground hover:border-accent/50 hover:text-accent"
                  }`}
                >
                  {tab === "all" ? `All (${photos.length})` : tab === "process" ? `Build Process (${PROCESS_PHOTOS.length})` : `Finished (${FINISHED_PHOTOS.length})`}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {displayPhotos.map((photo, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group border border-border/20 hover:border-green-500/50 transition-all duration-300"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 left-2">
                  <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    photo.tag === "Build Process" ? "bg-amber-500/80 text-black" : "bg-green-500/80 text-black"
                  }`}>
                    {photo.tag}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-2">
                  <p className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-tight">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card/40 border-t border-border/20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <img src={HC_LOGO} alt="Headwaters Customs" className="w-16 h-16 object-contain mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl font-black uppercase tracking-tight text-white mb-4">
            Have a Classic That Deserves This Treatment?
          </h2>
          <p className="brand-script text-2xl text-accent mb-8">
            Quality work. On time. Every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <span className="inline-block bg-accent text-black font-black uppercase tracking-widest px-8 py-4 rounded hover:bg-accent/90 transition-colors cursor-pointer">
                Get a Quote
              </span>
            </Link>
            <Link href="/contact">
              <span className="inline-block border border-accent text-accent font-black uppercase tracking-widest px-8 py-4 rounded hover:bg-accent/10 transition-colors cursor-pointer">
                Contact Us
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10" onClick={closeLightbox}>
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors z-10 bg-black/50 rounded-full p-2"
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors z-10 bg-black/50 rounded-full p-2"
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <div className="max-w-5xl max-h-[85vh] mx-8" onClick={(e) => e.stopPropagation()}>
            <img
              src={displayPhotos[lightboxIndex].url}
              alt={displayPhotos[lightboxIndex].caption}
              className="max-w-full max-h-[75vh] object-contain rounded-lg"
            />
            <p className="text-center text-white/70 text-sm mt-3">{displayPhotos[lightboxIndex].caption}</p>
            <p className="text-center text-accent/60 text-xs mt-1">{lightboxIndex + 1} / {displayPhotos.length}</p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 border-t border-border/20 bg-black/40">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Headwaters Customs LLC · 5088 US Hwy 287 N, Ennis, MT 59729 · 406-451-1394
          </p>
        </div>
      </footer>
    </div>
  );
}
