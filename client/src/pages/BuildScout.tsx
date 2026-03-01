import React, { useState } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { ChevronLeft, ChevronRight, X, Zap, Settings, Gauge, Wrench, Heart, Star } from "lucide-react";

const HC_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/octXJdDmJfadwTKn.png";

// Hero — front 3/4 shot showing the full red and white two-tone
const HERO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/tffpgntGcckGJlon.jpg";

const photos = [
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/tffpgntGcckGJlon.jpg", caption: "Front 3/4 — red & white two-tone with half-cab conversion" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/PWdtWkzDvZOJUGrF.jpg", caption: "Straight-on front — LED headlights and custom grille bar" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/vDTzCRRBLzLuZhoy.jpg", caption: "Front 3/4 — Montana mountain backdrop" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/iVGEPoDBqKvLedpR.jpg", caption: "Front 3/4 — Headwaters Customs shop in background" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/AafKHARTNNAcYSSW.jpg", caption: "Driver side profile — half-cab body and massive mud tires" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/rItgRbTMJywCSKoo.jpg", caption: "Passenger side — Headwaters Customs shop backdrop" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/abRYpgjVVInMHwjc.jpg", caption: "Rear 3/4 — IH badge and custom rear bumper" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/khCRJLkWgyjvUAmt.jpg", caption: "Rear — IH badge, Montana plate, custom bumper and hitch" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/WWzMNcjMvuCKwLHg.jpg", caption: "Rear detail — IH badge and Headwaters Customs shop" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/qypyrojrNUYkLTFY.jpg", caption: "Fender badge — Scout All Wheel Drive emblem" },
];

const specs = [
  { icon: Star, label: "Rarity", value: "One of the First 500 Scout 80s Ever Built" },
  { icon: Heart, label: "Built For", value: "Steffanie — Clay's Wife" },
  { icon: Zap, label: "Engine", value: "5.3 LS — 500 HP" },
  { icon: Settings, label: "Transmission", value: "4L60E Automatic" },
  { icon: Wrench, label: "Front Axle", value: "Dana 44 — Cut to Fit" },
  { icon: Wrench, label: "Rear Axle", value: "Dana 60 — Cut to Fit" },
  { icon: Gauge, label: "Body", value: "Half-Cab Conversion" },
  { icon: Settings, label: "Lighting", value: "LED Headlights + Grille Light Bar" },
];

export default function BuildScout() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevPhoto = () => setLightboxIndex((i) => (i !== null ? (i - 1 + photos.length) % photos.length : 0));
  const nextPhoto = () => setLightboxIndex((i) => (i !== null ? (i + 1) % photos.length : 0));

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
              <p className="text-accent text-xs font-bold uppercase tracking-[0.3em]">1961 International Harvester Scout 80</p>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white leading-none">
                Steffanie's<br />
                <span className="text-red-500">Scout</span>
              </h1>
            </div>
          </div>
          <p className="brand-script text-2xl text-white/80 mt-2">
            Built with love. One of the first 500 ever made.
          </p>
        </div>
      </section>

      {/* Build Story */}
      <section className="py-16 bg-card/40">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-3">The Story</p>
              <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-6">
                A Piece of History, Built for the Woman He Loves
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  The International Harvester Scout 80 debuted as a 1961 model year vehicle, with the very first units 
                  rolling off the assembly line in December of 1960. This particular Scout is among the first 500 ever 
                  built — a genuine piece of American automotive history that predates the entire off-road SUV category 
                  it helped create.
                </p>
                <p>
                  Headwaters Customs co-founder/co-owner Clay built this Scout as a personal project for his wife, 
                  Steffanie. When you're building something for the person you love, you don't cut corners — and this 
                  build reflects that. Every decision was made with intention, from the Dana 44 front and Dana 60 rear 
                  axles cut down to fit the narrow Scout body, to the half-cab conversion that gives it a look unlike 
                  anything else on the road.
                </p>
                <p>
                  Under the hood, a 5.3 LS pumping 500 horsepower breathes new life into a 60-year-old body. The 4L60E 
                  automatic transmission makes it as easy to drive as it is impressive to look at. LED headlights 
                  modernize the classic round housings without losing the original character. The red and white two-tone 
                  paint with period-correct Scout striping honors the original design while making it unmistakably fresh.
                </p>
                <p>
                  This is what Headwaters Customs is about — taking something irreplaceable and making it better 
                  without losing what made it special.
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
                    <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                      <spec.icon className="w-4 h-4 text-red-400" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest">{spec.label}</p>
                      <p className="text-white font-bold text-sm">{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Historical note */}
              <div className="mt-6 p-4 border border-accent/20 bg-accent/5 rounded-lg">
                <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">Historical Note</p>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  The Scout 80 was introduced in November 1960 for the 1961 model year, predating the Ford Bronco 
                  by five years and the Chevy Blazer by eight. International Harvester produced only a limited run 
                  of early units before ramping up production — making the first 500 exceptionally rare today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-2">Build Gallery</p>
            <h2 className="text-4xl font-black uppercase tracking-tight text-white">
              10 Photos — Every Angle
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group border border-border/20 hover:border-red-500/50 transition-all duration-300"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
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
            Let's talk about what's possible.
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
              src={photos[lightboxIndex].url}
              alt={photos[lightboxIndex].caption}
              className="max-w-full max-h-[75vh] object-contain rounded-lg"
            />
            <p className="text-center text-white/70 text-sm mt-3">{photos[lightboxIndex].caption}</p>
            <p className="text-center text-accent/60 text-xs mt-1">{lightboxIndex + 1} / {photos.length}</p>
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
