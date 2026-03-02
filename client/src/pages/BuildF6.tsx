import { useState } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { ChevronLeft, ChevronRight, X, Zap, Settings, Wrench, Gauge, Beer } from "lucide-react";

const HC_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/octXJdDmJfadwTKn.png";

// CDN URLs for all 14 Madison photos
// IMG_2666 — front 3/4 view, full truck exterior
// IMG_2667 — side profile, beer crate bed detail
// IMG_2669 — rear 3/4, tap system visible
// IMG_2679 — tap handles detail
// IMG_2684 — interior cooler / refrigeration unit
// IMG_2683 — tap system close-up
// IMG_2688 — beer crate bed conversion detail
// IMG_2682 — full side profile with bed
// IMG_2714 — exterior detail / trim
// IMG_2715 — exterior detail / grille or cab
// IMG_2672 — rear view, tap bar open
// IMG_2625 — build process / fabrication
// IMG_2624 — build process / fabrication
// IMG_2626 — build process / fabrication

const HERO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/TKYLEmtQYckTWsZB.jpg"; // IMG_2666 — front 3/4 hero

const photos = [
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/TKYLEmtQYckTWsZB.jpg", caption: "Madison — 1951 Ford F6, front 3/4 view" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/IGBTdukcfcSTacMF.jpg", caption: "Side profile — beer crate bed conversion" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/lJLMEZTFwQiuzTIP.jpg", caption: "Rear 3/4 — 13-tap draft system" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/jpkcyFaeuZeXKRlR.jpg", caption: "Full side profile with custom bed" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/psAEoMPPQFeQukRu.jpg", caption: "Tap handles — 13 draft lines" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/JYkHszQPXnivCcpA.jpg", caption: "Custom refrigerated cooler interior" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/qIYCSjfGqQEyXWSD.jpg", caption: "Tap system close-up — commercial grade" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/QbvSGBjVlfYyNtdf.jpg", caption: "Beer crate bed detail — custom fabricated" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/qRjGpCDCzblmYLwP.jpg", caption: "Exterior trim and detail" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/VctmnBlhXftehqvE.jpg", caption: "Cab and grille detail" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/IxCrSqRNaJptZPNJ.jpg", caption: "Rear view — tap bar open for service" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/oIkzKlpOrrAkZFLY.jpg", caption: "Build process — custom fabrication" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/nCKifRqVDlGtlVDG.jpg", caption: "Build process — refrigeration system install" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/xvjaXnIvFPXntPtw.jpg", caption: "Build process — bed conversion fabrication" },
];

const specs = [
  { icon: Beer, label: "Build Name", value: "Madison" },
  { icon: Settings, label: "Vehicle", value: "1951 Ford F6" },
  { icon: Zap, label: "Tap System", value: "13-Tap Commercial Draft Beer" },
  { icon: Wrench, label: "Cooling", value: "Custom Fabricated Refrigerated Cooler" },
  { icon: Gauge, label: "Bed Conversion", value: "Old School Beer Crate Styling" },
  { icon: Settings, label: "Use", value: "Mobile Draft Beer Service" },
];

export default function BuildF6() {
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
          backgroundPosition: "center 40%",
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
              <p className="text-accent text-xs font-bold uppercase tracking-[0.3em]">1951 Ford F6</p>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white leading-none">
                Madison
              </h1>
              <p className="text-white/70 text-lg font-bold uppercase tracking-widest mt-1">
                The Beer Tap Truck
              </p>
            </div>
          </div>
          <p className="brand-script text-2xl text-white/80 mt-2">
            Where classic iron meets cold craft beer.
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
                A 1951 Ford F6 Reimagined as a Rolling Taproom
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Most people look at a 1951 Ford F6 and see a piece of history. The team at Headwaters Customs looked at it and saw a bar on wheels waiting to happen.
                </p>
                <p>
                  Madison started as a commission unlike anything the shop had taken on before. The goal was to transform this classic cab-over work truck into a fully functional mobile draft beer service vehicle — one that looked like it belonged in 1951 while serving cold craft beer in the present.
                </p>
                <p>
                  The bed was completely reimagined. What was once a standard flatbed was converted into a custom-fabricated enclosure styled to look like it's hauling stacked old school beer crates — the kind you'd have seen on a delivery truck rolling through downtown in the early 1950s. Behind that nostalgic facade is a fully insulated, refrigerated cooler built from scratch to maintain serving temperature across all 13 lines.
                </p>
                <p>
                  The tap system itself is commercial grade — 13 independent draft lines, each capable of serving a different beer. The entire rear of the truck opens for service, revealing the tap handles and cooler in a way that stops people in their tracks at any event.
                </p>
                <p>
                  Madison isn't a hot rod. It's not a restomod. It's a one-of-a-kind functional piece of rolling art that proves Headwaters Customs can build anything a client can dream up.
                </p>
              </div>
            </div>

            {/* Specs */}
            <div>
              <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-3">Build Specs</p>
              <div className="space-y-3 mb-8">
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

              {/* Highlight callout */}
              <div className="p-6 bg-accent/10 border border-accent/40 rounded-lg">
                <p className="text-accent font-black uppercase tracking-widest text-sm mb-2">What Makes Madison Unique</p>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Every element of this build serves a purpose. The beer crate bed styling isn't decoration — it conceals a fully functional commercial refrigeration system. The 13 tap handles aren't props. Madison is a working vehicle that earns its keep at every event it attends.
                </p>
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
            The Build in Detail
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
          <p className="brand-script text-accent text-3xl mb-2">Have a Vision Like This?</p>
          <p className="text-muted-foreground mb-8">
            Madison started as a conversation. If you have a concept — no matter how unconventional — bring it to Headwaters Customs and let's talk about what's possible.
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
