import { useState } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { ChevronLeft, ChevronRight, X, Zap, Settings, Wrench, Gauge, Star } from "lucide-react";

const HC_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/octXJdDmJfadwTKn.png";

// Photo CDN URLs — 7 shots of Bill's Banshee
// IMG_1032 — driver-side 3/4 front, chrome wheels, sunset
// IMG_1033 — passenger-side 3/4 front, billet grille, sunset
// IMG_1034 — straight-on front, dual round LED headlights, mountains
// IMG_1035 — driver-side full profile, Silverado badge, sunrise
// IMG_1036 — passenger-side full profile, shop in background
// IMG_1037 — driver-side 3/4 front, shop wall backdrop
// IMG_1038 — driver-side 3/4 front, chrome wheels close, sunset

const HERO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/wujHIjLXtKGyopZZ.jpg"; // straight-on front — most dramatic hero shot

const photos = [
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/wujHIjLXtKGyopZZ.jpg", caption: "Straight-on front — dual round LED headlights, billet grille, Montana mountains" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/DWWmJzmSyodiYtiF.jpg", caption: "Driver-side 3/4 front — Silverado badge, chrome mirrors, chrome wheels" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/itCtsJSfrPPeCoJZ.jpg", caption: "Passenger-side 3/4 front — billet grille, LED headlights, sunset sky" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/qJLzUDKoLVgCPoMf.jpg", caption: "Driver-side full profile — Silverado 10 badge, two-tone blue, chrome wheels" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/oCfgqMGqKSzDjjVS.jpg", caption: "Passenger-side full profile — shop in background, Montana sunrise" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/gsRzyDfIyPVzwIhy.jpg", caption: "Driver-side 3/4 front — chrome detail, Headwaters Customs shop backdrop" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/LpkeTnSzeUftAuNc.jpg", caption: "Driver-side 3/4 front — chrome wheels close, sunset glow" },
];

const specs = [
  { icon: Star, label: "Build Name", value: "Project Bill's Banshee" },
  { icon: Zap, label: "Engine", value: "408ci Stroker LS (6.0 Base)" },
  { icon: Gauge, label: "Power", value: "1,200–1,300 HP Turbocharged" },
  { icon: Settings, label: "Chassis", value: "Full AWD Denali Platform" },
  { icon: Wrench, label: "Paint", value: "Bill's Banshee Two-Tone" },
  { icon: Settings, label: "Wheels", value: "Chrome Custom Wheels" },
  { icon: Gauge, label: "Headlights", value: "Dual Round LED Retrofit" },
  { icon: Wrench, label: "Grille", value: "Custom Billet Grille" },
];

export default function BuildK10() {
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
        className="relative min-h-[75vh] flex items-end pb-16"
        style={{
          backgroundImage: `url(${HERO_URL})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
        <div className="relative z-10 container max-w-5xl mx-auto px-4">
          <Link href="/gallery">
            <span className="inline-flex items-center gap-1 text-accent text-xs font-bold uppercase tracking-widest mb-6 hover:text-accent/80 transition-colors cursor-pointer">
              <ChevronLeft className="w-3 h-3" /> Back to Gallery
            </span>
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <img src={HC_LOGO} alt="HC" className="w-14 h-14 object-contain opacity-90" />
            <div>
              <p className="text-accent text-xs font-bold uppercase tracking-[0.3em]">1979 Chevrolet K10 Silverado</p>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white leading-none">
                Project<br />
                <span className="text-accent">Bill's Banshee</span>
              </h1>
            </div>
          </div>
          <p className="brand-script text-2xl text-white/80 mt-2">
            The build that defines Headwaters Customs.
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
                Vintage Soul. Modern Muscle. Montana Made.
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Some builds are about transportation. Some are about nostalgia. Project Bill's Banshee is about neither — it's about what happens when you take one of the cleanest square-body bodies ever made and give it the drivetrain of a modern performance SUV, then add another 500hp. You get something that's unadulterated. Something that screams down the road that is accurately described by nothing better than, well, a banshee.
                </p>
                <p>
                  The foundation is a 1979 Chevrolet K10 Silverado — a truck that already had presence in factory form. The two-tone blue paint, the chrome trim, the Silverado badge — all of it preserved and restored to a standard that makes it look like it just rolled off a GM show floor in 1979. Except it didn't. It rolled out of Headwaters Customs in Ennis, Montana.
                </p>
                <p>
                  Under that classic hood lives a 6.0 LS bored and stroked to 408 cubic inches, force-fed by a turbocharger to produce an estimated 1,200 to 1,300 horsepower. The entire truck rides on a full all-wheel-drive Denali chassis — modern geometry, modern braking, modern everything — wrapped in a body that looks like it belongs in 1979.
                </p>
                <p>
                  The LED headlights, custom billet grille, and chrome wheels are the only tells. Everything else is period-perfect. That's the point. Bill's Banshee doesn't announce itself. It just goes.
                </p>
              </div>
            </div>

            {/* Specs */}
            <div>
              <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-3">Build Specs</p>
              <div className="space-y-3">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center gap-4 p-4 bg-card rounded-lg border border-accent/20"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0">
                      <spec.icon className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest">{spec.label}</p>
                      <p className="text-foreground font-bold">{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-background">
        <div className="container max-w-5xl mx-auto px-4">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-3">Gallery</p>
          <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-8">
            Every Angle
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group border border-border/20 hover:border-accent/50 transition-all duration-300"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold uppercase tracking-widest">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent/10 border-y border-accent/30 text-center">
        <div className="container max-w-3xl mx-auto px-4">
          <p className="brand-script text-accent text-3xl mb-2">Ready to Build Your Legacy?</p>
          <p className="text-muted-foreground mb-8">
            Bill's Banshee started as a vision. Your build can too. Tell us what you're thinking and we'll tell you what's possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <span className="inline-block bg-accent text-black font-black uppercase tracking-widest px-8 py-4 rounded hover:bg-accent/90 transition-colors cursor-pointer">
                Get a Quote
              </span>
            </Link>
            <Link href="/dream-build">
              <span className="inline-block border border-accent text-accent font-black uppercase tracking-widest px-8 py-4 rounded hover:bg-accent/10 transition-colors cursor-pointer">
                AI Dream Build
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
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
          <div className="max-w-4xl max-h-[85vh] mx-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[lightboxIndex].url}
              alt={photos[lightboxIndex].caption}
              className="max-w-full max-h-[75vh] object-contain rounded-lg"
            />
            <p className="text-white/70 text-center text-sm mt-3 italic">{photos[lightboxIndex].caption}</p>
            <p className="text-muted-foreground text-center text-xs mt-1">{lightboxIndex + 1} / {photos.length}</p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-accent/20 bg-card/50">
        <div className="container mx-auto px-4 py-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src={HC_LOGO} alt="Headwaters Customs" className="h-12 w-auto mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed">
                5088 US Hwy 287 N<br />Ennis, MT 59729<br />1.5 mi north of Ennis
              </p>
            </div>
            <div>
              <h3 className="hero-title text-sm tracking-widest mb-4">QUICK LINKS</h3>
              <div className="space-y-2 text-sm">
                <Link href="/services"><span className="block text-muted-foreground hover:text-accent transition-colors cursor-pointer">Services</span></Link>
                <Link href="/gallery"><span className="block text-muted-foreground hover:text-accent transition-colors cursor-pointer">Gallery</span></Link>
                <Link href="/about"><span className="block text-muted-foreground hover:text-accent transition-colors cursor-pointer">About</span></Link>
                <Link href="/contact"><span className="block text-muted-foreground hover:text-accent transition-colors cursor-pointer">Contact</span></Link>
              </div>
            </div>
            <div>
              <h3 className="hero-title text-sm tracking-widest mb-4">GET IN TOUCH</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><a href="tel:406-451-1394" className="hover:text-accent transition-colors">406-451-1394 (Mike)</a></p>
                <p><a href="tel:816-645-7054" className="hover:text-accent transition-colors">816-645-7054 (Clay)</a></p>
                <p><a href="mailto:mikehwcmt@gmail.com" className="hover:text-accent transition-colors">mikehwcmt@gmail.com</a></p>
              </div>
            </div>
          </div>
          <div className="border-t border-accent/20 mt-8 pt-6 text-center text-xs text-muted-foreground tracking-widest uppercase">
            © {new Date().getFullYear()} Headwaters Customs LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
