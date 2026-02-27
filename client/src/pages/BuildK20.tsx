import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { ChevronLeft, ChevronRight, X, Settings, Gauge, Wrench, Star } from "lucide-react";

const HC_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/octXJdDmJfadwTKn.png";

const K20_PHOTOS = [
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/pmPDAhynayFwiGbU.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/MbXHZluxUaFTnaAU.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/RkCNiehVzxLBumww.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/GprUifaOtmqXfqhF.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/SehyzTteaYmePCmY.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/DtrsSDiMZtfDUofE.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/SJBZSpRXqAIveKdm.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/bgAKnwZvxSDSxwzc.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/SMwetlROOOpjPmzl.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/CaGPoznYMVOiJRZE.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/dhuQuwmkFfHWBvvn.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/RFzbMyXJYsuLtWea.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/OXmQTlHEnMcVQyPC.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/pwhzwGcXBahXdOqY.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/lzZrhlWdayxldIxN.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/mbgogbGMnzRYLqza.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/hplVgYdCVNldObrO.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/fGDECvGuSYIQMInU.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/SrSGmVWimGGzodtP.jpg",
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/qqijJZkpesyzwpFu.jpg",
];

const SPECS = [
  { icon: Settings, label: "Drivetrain", value: "4WD — Full Nut & Bolt Restoration" },
  { icon: Gauge, label: "Engine", value: "5.3L LS V8 — 400 HP" },
  { icon: Wrench, label: "Transmission", value: "4L80E Automatic" },
  { icon: Star, label: "Interior", value: "Custom Distressed Leather Headliner — In-House Fabrication" },
];

export default function BuildK20() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevPhoto = () => setLightboxIndex(i => (i !== null ? (i - 1 + K20_PHOTOS.length) % K20_PHOTOS.length : 0));
  const nextPhoto = () => setLightboxIndex(i => (i !== null ? (i + 1) % K20_PHOTOS.length : 0));

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="relative py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${K20_PHOTOS[0]})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="container relative z-10 text-center">
          <Link href="/gallery">
            <span className="inline-flex items-center gap-1 text-accent/80 hover:text-accent text-sm uppercase tracking-widest cursor-pointer mb-6 transition-colors">
              <ChevronLeft className="w-4 h-4" /> Back to Gallery
            </span>
          </Link>
          <p className="brand-script text-accent text-2xl mb-2">The Founding Fleet</p>
          <h1 className="hero-title text-white text-5xl lg:text-7xl mb-3">1975 K20</h1>
          <p className="text-white/80 text-lg tracking-widest uppercase">Royal Blue &nbsp;•&nbsp; Full Restoration &nbsp;•&nbsp; LS Swap</p>
        </div>
      </section>

      {/* Build Story + Specs */}
      <section className="py-20 bg-background border-b border-accent/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* Story */}
            <div>
              <p className="brand-script text-accent text-xl mb-2">The Build Story</p>
              <h2 className="hero-title text-foreground text-3xl md:text-4xl mb-6">BUILT FOR A LOCAL RESIDENT</h2>
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                This 1975 K20 was a full commission build for a local Montana resident who wanted
                something that drove as good as it looked. Every gear, every box, every nut and bolt
                was gone through or replaced — nothing was left to chance.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                Under the hood sits a 5.3L LS V8 producing 400 horsepower, backed by a bulletproof
                4L80E automatic transmission. The combination delivers modern reliability and power
                wrapped in a classic square-body package.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed">
                The interior was taken to another level with a custom distressed leather headliner —
                designed, fabricated, and installed entirely in-house at Headwaters Customs. It's the
                kind of detail that separates a restoration from a build.
              </p>
            </div>

            {/* Spec Cards */}
            <div className="grid gap-4">
              {SPECS.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-5 p-5 bg-card rounded-lg border border-accent/20 hover:border-accent/50 transition-all">
                  <Icon className="w-8 h-8 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{label}</p>
                    <p className="text-foreground font-bold text-lg leading-tight">{value}</p>
                  </div>
                </div>
              ))}

              <div className="mt-4 p-5 bg-accent/10 rounded-lg border border-accent/30">
                <p className="text-accent hero-title text-sm tracking-widest mb-2">BUILD STANDARD</p>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Every gear box, nut, and bolt inspected, refurbished, or replaced. This is what
                  a Headwaters Customs full restoration means — no shortcuts, no compromises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="brand-script text-accent text-xl mb-1">The Build in Detail</p>
            <h2 className="hero-title text-foreground text-4xl">PHOTO GALLERY</h2>
            <p className="text-muted-foreground mt-3 text-sm">Click any photo to view full size</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {K20_PHOTOS.map((url, i) => (
              <div
                key={i}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer border border-accent/10 hover:border-accent/50 transition-all"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={url}
                  alt={`1975 K20 build photo ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold tracking-widest uppercase">View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent/10 border-y border-accent/30 text-center">
        <div className="container mx-auto px-4">
          <p className="brand-script text-accent text-3xl mb-2">Want a Build Like This?</p>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Every build starts with a conversation. Tell us what you have and what you want — we'll take it from there.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold tracking-widest uppercase cursor-pointer">
                Get a Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-accent/60 text-foreground hover:border-accent font-bold tracking-widest uppercase cursor-pointer">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-accent/20 bg-card/50 mt-auto">
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
                <Link href="/gallery"><span className="block text-muted-foreground hover:text-accent transition-colors cursor-pointer">Gallery</span></Link>
                <Link href="/services"><span className="block text-muted-foreground hover:text-accent transition-colors cursor-pointer">Services</span></Link>
                <Link href="/about"><span className="block text-muted-foreground hover:text-accent transition-colors cursor-pointer">About</span></Link>
                <Link href="/contact"><span className="block text-muted-foreground hover:text-accent transition-colors cursor-pointer">Contact</span></Link>
              </div>
            </div>
            <div>
              <h3 className="hero-title text-sm tracking-widest mb-4">GET IN TOUCH</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><a href="tel:406-451-1394" className="hover:text-accent transition-colors">406-451-1394 (Mike)</a></p>
                <p><a href="tel:816-645-7054" className="hover:text-accent transition-colors">816-645-7054 (Clay)</a></p>
              </div>
            </div>
          </div>
          <div className="border-t border-accent/20 mt-8 pt-6 text-center text-xs text-muted-foreground tracking-widest uppercase">
            © {new Date().getFullYear()} Headwaters Customs LLC. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <img
            src={K20_PHOTOS[lightboxIndex]}
            alt={`K20 photo ${lightboxIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-4 text-white/50 text-sm tracking-widest">
            {lightboxIndex + 1} / {K20_PHOTOS.length}
          </p>
        </div>
      )}
    </div>
  );
}
