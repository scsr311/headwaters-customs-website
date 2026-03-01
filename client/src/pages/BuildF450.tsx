import React, { useState } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { ChevronLeft, ChevronRight, X, Zap, Settings, Gauge, Wrench, Shield, Star } from "lucide-react";

const HC_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/octXJdDmJfadwTKn.png";

// Hero image - the dramatic front-facing shot with Montana mountains
const HERO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/ysFjIUXsGURrsjiM.jpg";

const photos = [
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/ysFjIUXsGURrsjiM.jpg", caption: "Front 3/4 — Move bumper, KC HiLiTES rack, Fuel wheels" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/bksxiEjzPuwTTmLG.jpg", caption: "Straight-on front — Move front bumper with dual LED light bars and winch" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/eSLGgBYyPglZwBRT.jpg", caption: "Front stance — aggressive grille guard and custom hood" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/AjZQtpvoBWvPSWHc.jpg", caption: "Driver side 3/4 — full satin black wrap and Bradford flatbed" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/kTmFjpgTEWKltnTr.jpg", caption: "Passenger side — full profile with KC HiLiTES roof rack" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/maNPOrhHxTtFEGCV.jpg", caption: "Driver side profile — Bradford flatbed with custom toolboxes" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/FmKcUsVgdtHzzoRW.jpg", caption: "Passenger side profile — Fuel 20\" black wheels and lift" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/TlUmAzfSxTIUimhO.jpg", caption: "Front — grille guard and LED lighting" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/zphdxJIztFfKBlDf.jpg", caption: "Front 3/4 — Montana mountains backdrop" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/VifapCYATsIaGPMo.jpg", caption: "Front 3/4 — sunset shot" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/hLxlxattbwgifZWp.jpg", caption: "Front 3/4 — dusk lighting" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/sFYNHIrWmdVyUrvT.jpg", caption: "Rear 3/4 — Bradford flatbed and KC rack detail" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/vzdrUzhnPXTAEcmX.jpg", caption: "Rear 3/4 — Move rear bumper and step detail" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/tYDWorTcqtYBTzdM.jpg", caption: "Rear — Move rear bumper with integrated step" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/rfwfEdSmdRicQjMq.jpg", caption: "Rear — Bradford flatbed and toolbox storage" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/szSFKiOQCsButMRK.jpg", caption: "Rear — step detail and hitch receiver" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/ovjQYcsHveDVXrZA.jpg", caption: "Passenger side — full profile at sunset" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/tPqJdPVjoBIqVCUt.jpg", caption: "Driver side — full profile at sunset" },
];

const specs = [
  { icon: Shield, label: "Origin Story", value: "Rollover Restoration — Back to New" },
  { icon: Wrench, label: "Exterior", value: "Vivvid Satin Black Full Wrap" },
  { icon: Star, label: "Bumpers", value: "Move Front & Rear Bumpers" },
  { icon: Settings, label: "Bed", value: "Bradford Flatbed — Custom Fabricated" },
  { icon: Gauge, label: "Suspension", value: "Remote Adjustable Air Bags" },
  { icon: Zap, label: "Lighting", value: "KC HiLiTES — 7-Pod Roof Rack" },
  { icon: Settings, label: "Wheels", value: "Fuel 20\" Black Forged" },
  { icon: Zap, label: "Performance", value: "Bulldog Chip + EGR Delete" },
];

export default function BuildF450() {
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
          backgroundPosition: "center 30%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        <div className="relative z-10 container max-w-5xl mx-auto px-4">
          {/* Back link */}
          <Link href="/gallery">
            <span className="inline-flex items-center gap-1 text-accent text-xs font-bold uppercase tracking-widest mb-6 hover:text-accent/80 transition-colors cursor-pointer">
              <ChevronLeft className="w-3 h-3" /> Back to Gallery
            </span>
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <img src={HC_LOGO} alt="HC" className="w-14 h-14 object-contain opacity-90" />
            <div>
              <p className="text-accent text-xs font-bold uppercase tracking-[0.3em]">2015 Ford F-450 Super Duty</p>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white leading-none">
                Project<br />
                <span className="text-accent">Hell Bitch</span>
              </h1>
            </div>
          </div>
          <p className="brand-script text-2xl text-white/80 mt-2">
            Risen from the wreckage. Reborn as a weapon.
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
                From Rollover to Road Warrior
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  This 2015 Ford F-450 Super Duty came to us after a significant rollover accident that left most shops 
                  writing it off. We don't write things off. We brought her back to factory-new structural integrity first — 
                  every panel, every frame rail, every weld point inspected and corrected.
                </p>
                <p>
                  Once the foundation was solid, we went to work building something the customer could be proud of. 
                  A full Vivvid Satin Black wrap gives her that blacked-out tactical look. Move bumpers front and rear 
                  add serious protection and presence. A custom-fabricated Bradford flatbed replaces the factory bed, 
                  built to work as hard as the truck itself.
                </p>
                <p>
                  Remote adjustable airbags let the owner dial in ride height and load management on the fly. 
                  Seven KC HiLiTES pods on a custom roof rack turn night into day. Fuel 20" black forged wheels 
                  complete the look. Under the hood, a Bulldog performance chip and EGR delete wake up the 6.7 
                  Power Stroke to its full potential.
                </p>
                <p>
                  Hell Bitch didn't just survive — she came back meaner.
                </p>
              </div>
            </div>

            {/* Specs Grid */}
            <div>
              <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-3">Build Specs</p>
              <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-6">What We Did</h2>
              <div className="grid grid-cols-1 gap-3">
                {specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-4 bg-background/60 border border-border/30 rounded-lg p-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0">
                      <spec.icon className="w-4 h-4 text-accent" />
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
          <div className="text-center mb-10">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-2">Build Gallery</p>
            <h2 className="text-4xl font-black uppercase tracking-tight text-white">
              18 Photos — Every Angle
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group border border-border/20 hover:border-accent/50 transition-all duration-300"
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
            Ready to Build Yours?
          </h2>
          <p className="brand-script text-2xl text-accent mb-8">
            Every build starts with a conversation.
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
          <button
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10"
            onClick={closeLightbox}
          >
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
