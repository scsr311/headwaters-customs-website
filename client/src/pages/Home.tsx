import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, FileText, Wrench, ChevronRight, Zap, Settings, Gauge } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/61587446398372/",
  instagram: "https://www.instagram.com/headwaterscustomsmt",
  linktree: "https://linktr.ee/hwcmt",
  venmo: "https://www.venmo.com/hwcmt",
  google: "https://www.google.com/maps/place/Headwaters+Customs+LLC/@45.374515,-111.7302046,17z",
};

const HC_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/octXJdDmJfadwTKn.png";
const K10_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/wujHIjLXtKGyopZZ.jpg";
const SCOUT_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/TKnpUSmOOzrJVFtW.jpg";
const C20_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/LtFALGpraINijolX.jpg";
const K20_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/YfwgnYwNKuLMlHWp.jpg";
const F450_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/RfTnqLJyCpNNKxFo.jpg";
const F6_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/TKYLEmtQYckTWsZB.jpg";

interface FoundingBuild {
  id: string;
  year: string;
  name: string;
  nickname: string;
  color: string;
  image: string;
  isFeatured: boolean;
  specs: { icon: React.ElementType; label: string; value: string }[];
  description: string;
  link?: string;
}

const foundingBuilds: FoundingBuild[] = [
  {
    id: "k10",
    year: "1979",
    name: "K10 Silverado",
    nickname: "Project Bill's Banshee",
    color: "Bill's Banshee",
    image: K10_URL,
    isFeatured: true,
    specs: [
      { icon: Settings, label: "Chassis", value: "Full AWD Denali Platform" },
      { icon: Gauge, label: "Engine", value: "408ci Stroker LS (6.0 base)" },
      { icon: Zap, label: "Power", value: "1,200–1,300 HP Turbocharged" },
    ],
    description:
      "The build that defines Headwaters Customs. A '79 K10 body dropped onto a full all-wheel-drive Denali chassis, powered by a 6.0 LS bored and stroked to 408 cubic inches, then force-fed by a turbocharger to produce an estimated 1,200–1,300 horsepower. Vintage soul. Modern muscle. Montana made.",
    link: "/builds/k10",
  },
  {
    id: "scout",
    year: "1961",
    name: "IH Scout 80",
    nickname: "Steffanie's Scout",
    color: "Pull Me Over Red & White Two-Tone",
    image: SCOUT_URL,
    isFeatured: false,
    specs: [],
    description: "One of First 500 Built · 5.3 LS 500hp · 4L60E · Dana 44/60 · Half-Cab Conversion",
    link: "/builds/scout",
  },
  {
    id: "c20",
    year: "1972",
    name: "C20 Cheyenne Custom Camper Special",
    nickname: "The 28-Day Challenge",
    color: "Shamrock Green on Pearl White",
    image: C20_URL,
    isFeatured: false,
    specs: [],
    description: "402/396 Big Block · Turbo 400 · Custom Reverse Hood Scoops · Wooden Bed · Frame-Off in 28 Days",
    link: "/builds/c20",
  },
  {
    id: "k20",
    year: "1975",
    name: "K20 Flatbed",
    nickname: "Project Tweety Bird",
    color: "Blue Me Away",
    image: K20_URL,
    isFeatured: false,
    specs: [],
    description: "5.3 LS · 400 HP · 4L80E · Custom Interior with Distressed Leather Accents",
    link: "/builds/k20",
  },
  {
    id: "f450",
    year: "2015",
    name: "Ford F-450 Super Duty",
    nickname: "Project Hell Bitch",
    color: "Vivvid Satin Black Wrap",
    image: F450_URL,
    isFeatured: false,
    specs: [],
    description: "Rollover Restoration · Move Bumpers · Custom Made In-House Western Hauler Flatbed · KC HiLiTES · Bulldog Chip + EGR Delete",
    link: "/builds/f450",
  },
  {
    id: "f6",
    year: "1951",
    name: "Ford F6",
    nickname: "Madison",
    color: "Natural Patina",
    image: F6_URL,
    isFeatured: false,
    specs: [],
    description: "13-Tap Draft Beer System · Custom Refrigerated Cooler · Beer Crate Bed Conversion · Mobile Taproom",
    link: "/builds/f6",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">

      {/* ─── HERO ─── */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* K10 as hero background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${K10_URL})` }}
        />
        {/* Layered dark overlay — darker at top for nav readability, lighter at center */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/70" />

        {/* Floating nav over hero */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navigation />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 pt-20">
          <div className="mb-6">
            <img
              src={HC_LOGO}
              alt="Headwaters Customs"
              className="mx-auto w-48 h-auto md:w-72 drop-shadow-2xl"
            />
          </div>

          <h1 className="sign-title text-white mb-2 drop-shadow-2xl" style={{ fontSize: 'clamp(1.8rem, 6.5vw, 5.5rem)' }}>
            HEADWATERS CUSTOMS
          </h1>

          <p className="brand-script text-gold mb-4 text-2xl md:text-3xl drop-shadow-lg">
            Built to Outlast the Ordinary
          </p>

          <p className="hero-title text-white/80 mb-10 text-base md:text-lg tracking-[0.25em] uppercase">
            Frame-Off Restorations &nbsp;•&nbsp; LS Swaps &nbsp;•&nbsp; Montana Built
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base font-bold tracking-widest uppercase cursor-pointer"
              asChild
            >
              <Link href="/dream-build">
                <Sparkles className="w-5 h-5 mr-2" />
                AI Dream Build
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/80 text-white hover:bg-white hover:text-black px-8 py-6 text-base font-bold tracking-widest uppercase cursor-pointer"
              asChild
            >
              <Link href="/quote">
                <FileText className="w-5 h-5 mr-2" />
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>

        {/* Bottom contact strip */}
        <div className="absolute bottom-6 left-0 right-0 z-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-center text-white/70 text-sm tracking-wide gap-3">
              <span>5088 US Hwy 287 N, Ennis, MT 59729</span>
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" title="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" title="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href={SOCIAL_LINKS.linktree} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" title="Linktree">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.973.89 1.703 1.864 1.703h4.527c.974 0 1.784-.73 1.864-1.703 0-.162 0-.323-.08-.486l-3.134-5.49 3.134-5.49c.08-.162.08-.323.08-.486C16.048 2.627 15.238 1.897 14.264 1.897H9.737c-.974 0-1.784.73-1.864 1.703 0 .163 0 .324.08.486l3.134 5.49-3.134 5.49zm4.047-9.98l2.107 3.694H9.893l2.107-3.694zm0 7.387l-2.107 3.694h4.214l-2.107-3.694zM12 22.5c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5 1.5 6.201 1.5 12 6.201 22.5 12 22.5z"/></svg>
                </a>
                <a href={SOCIAL_LINKS.venmo} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" title="Venmo">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.014 1.989c.484.803.701 1.63.701 2.674 0 3.328-2.84 7.657-5.147 10.697H9.455L7.2 2.916l4.7-.451 1.148 9.157c1.073-1.748 2.395-4.489 2.395-6.358 0-1.022-.175-1.72-.452-2.29l4.023-.985z"/></svg>
                </a>
                <a href={SOCIAL_LINKS.google} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" title="Google Business">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
                </a>
              </div>
              <div className="flex gap-6">
                <a href="tel:406-451-1394" className="hover:text-accent transition-colors">406-451-1394</a>
                <a href="tel:816-645-7054" className="hover:text-accent transition-colors">816-645-7054</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED HERO BUILD: '79 K10 ─── */}
      <section className="py-20 bg-background border-b border-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="brand-script text-accent text-2xl mb-2">The Build That Started It All</p>
            <h2 className="hero-title text-foreground text-4xl md:text-6xl">BILL'S BANSHEE</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Photo */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-accent/40 to-transparent rounded-lg blur-sm group-hover:blur-md transition-all" />
              <img
                src={K10_URL}
                alt="1979 K10 Silverado - Headwaters Customs Flagship Build"
                className="relative w-full rounded-lg object-cover shadow-2xl shadow-black/60"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded border border-accent/40">
                <span className="brand-script text-accent text-lg">1979 K10 Silverado</span>
              </div>
            </div>

            {/* Specs + Description */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-accent hero-title text-lg tracking-widest">BILL'S BANSHEE</span>
                <span className="h-px flex-1 bg-accent/30" />
              </div>

              <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                The build that defines Headwaters Customs. A '79 K10 body dropped onto a full
                all-wheel-drive Denali chassis, powered by a 6.0 LS bored and stroked to 408 cubic
                inches, then force-fed by a turbocharger to produce an estimated 1,200–1,300
                horsepower. Vintage soul. Modern muscle. Montana made.
              </p>

              {/* Spec callouts */}
              <div className="grid grid-cols-1 gap-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-accent/20">
                  <Settings className="w-8 h-8 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Chassis</p>
                    <p className="text-foreground font-bold text-lg">Full AWD Denali Platform</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-accent/20">
                  <Gauge className="w-8 h-8 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Engine</p>
                    <p className="text-foreground font-bold text-lg">408ci Stroker LS (6.0 Base)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-accent/20">
                  <Zap className="w-8 h-8 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Output</p>
                    <p className="text-foreground font-bold text-lg">1,200–1,300 HP Turbocharged</p>
                  </div>
                </div>
              </div>

              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold tracking-widest uppercase cursor-pointer" asChild>
                <Link href="/gallery">
                  View Full Gallery <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE FOUNDING FLEET ─── */}
      <section className="py-20 bg-card/30 border-b border-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="brand-script text-accent text-2xl mb-2">Where It All Began</p>
            <h2 className="hero-title text-foreground text-4xl md:text-5xl">THE FOUNDING FLEET</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Five builds. Five stories. The vehicles that put Headwaters Customs on the map and set
              the standard for everything that followed.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {foundingBuilds.filter(b => !b.isFeatured).map((build) => (
              <div
                key={build.id}
                className="group relative overflow-hidden rounded-lg border border-accent/20 hover:border-accent/60 transition-all duration-300 bg-card"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={build.image}
                    alt={`${build.year} ${build.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <p className="text-white font-bold text-sm tracking-wide">{build.year} {build.name}</p>
                    <p className="brand-script text-accent text-sm">{build.nickname}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{build.color}</p>
                  <p className="text-foreground/70 text-sm mb-3">{build.description}</p>
                  {build.link && (
                    <Link href={build.link}>
                      <span className="inline-flex items-center gap-1 text-accent text-xs font-bold uppercase tracking-widest hover:text-accent/80 transition-colors cursor-pointer">
                        View Full Build <ChevronRight className="w-3 h-3" />
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES OVERVIEW ─── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="brand-script text-accent text-2xl mb-2">What We Do</p>
            <h2 className="hero-title text-foreground text-4xl md:text-5xl">BUILT FOR THE SERIOUS</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 border border-accent/20 rounded-lg hover:border-accent/60 transition-all bg-card/50 text-center">
              <Sparkles className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="hero-title text-xl mb-3">AI DREAM BUILD</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                Describe your vision and watch AI generate photorealistic renderings before we turn a single wrench.
              </p>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold tracking-widest uppercase text-sm cursor-pointer" asChild>
                <Link href="/dream-build">Try It Now</Link>
              </Button>
            </div>

            <div className="p-8 border border-accent/20 rounded-lg hover:border-accent/60 transition-all bg-card/50 text-center">
              <FileText className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="hero-title text-xl mb-3">AI-ASSISTED QUOTE</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                Upload photos, select your modifications, and receive a detailed project summary. Custom quote within 48 hours.
              </p>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold tracking-widest uppercase text-sm cursor-pointer" asChild>
                <Link href="/quote">Get Started</Link>
              </Button>
            </div>

            <div className="p-8 border border-accent/20 rounded-lg hover:border-accent/60 transition-all bg-card/50 text-center">
              <Wrench className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="hero-title text-xl mb-3">FULL-SERVICE SHOP</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                Sandblasting, commercial coatings, frame-off restorations, custom fabrication, and 3D printing — all handled in-house.
              </p>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold tracking-widest uppercase text-sm cursor-pointer" asChild>
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BRAND TAGLINE STRIP ─── */}
      <section className="py-12 bg-accent/10 border-y border-accent/30">
        <div className="container mx-auto px-4 text-center">
          <p className="brand-script text-accent text-3xl md:text-4xl">
            Vintage Soul. Modern Muscle. Montana Made.
          </p>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-accent/20 bg-card/50 mt-auto">
        <div className="container mx-auto px-4 py-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src={HC_LOGO} alt="Headwaters Customs" className="h-12 w-auto mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed">
                5088 US Hwy 287 N<br />
                Ennis, MT 59729<br />
                1.5 mi north of Ennis
              </p>
            </div>
            <div>
              <h3 className="hero-title text-sm tracking-widest mb-4 text-foreground">QUICK LINKS</h3>
              <div className="space-y-2 text-sm">
                <Link href="/services"><span className="block text-muted-foreground hover:text-accent transition-colors cursor-pointer">Services</span></Link>
                <Link href="/gallery"><span className="block text-muted-foreground hover:text-accent transition-colors cursor-pointer">Gallery</span></Link>
                <Link href="/about"><span className="block text-muted-foreground hover:text-accent transition-colors cursor-pointer">About</span></Link>
                <Link href="/contact"><span className="block text-muted-foreground hover:text-accent transition-colors cursor-pointer">Contact</span></Link>
              </div>
            </div>
            <div>
              <h3 className="hero-title text-sm tracking-widest mb-4 text-foreground">GET IN TOUCH</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><a href="tel:406-451-1394" className="hover:text-accent transition-colors">406-451-1394 (Mike)</a></p>
                <p><a href="tel:816-645-7054" className="hover:text-accent transition-colors">816-645-7054 (Clay)</a></p>
                <p><a href="mailto:mikehwcmt@gmail.com" className="hover:text-accent transition-colors">mikehwcmt@gmail.com</a></p>
              </div>
            </div>
          </div>
          {/* Social Links in Footer */}
          <div className="border-t border-accent/20 mt-8 pt-6 flex flex-col items-center gap-4">
            <div className="flex items-center gap-5">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" title="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" title="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href={SOCIAL_LINKS.linktree} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" title="Linktree">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.973.89 1.703 1.864 1.703h4.527c.974 0 1.784-.73 1.864-1.703 0-.162 0-.323-.08-.486l-3.134-5.49 3.134-5.49c.08-.162.08-.323.08-.486C16.048 2.627 15.238 1.897 14.264 1.897H9.737c-.974 0-1.784.73-1.864 1.703 0 .163 0 .324.08.486l3.134 5.49-3.134 5.49zm4.047-9.98l2.107 3.694H9.893l2.107-3.694zm0 7.387l-2.107 3.694h4.214l-2.107-3.694zM12 22.5c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5 1.5 6.201 1.5 12 6.201 22.5 12 22.5z"/></svg>
              </a>
              <a href={SOCIAL_LINKS.venmo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" title="Venmo">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.014 1.989c.484.803.701 1.63.701 2.674 0 3.328-2.84 7.657-5.147 10.697H9.455L7.2 2.916l4.7-.451 1.148 9.157c1.073-1.748 2.395-4.489 2.395-6.358 0-1.022-.175-1.72-.452-2.29l4.023-.985z"/></svg>
              </a>
              <a href={SOCIAL_LINKS.google} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" title="Google Business">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
              </a>
            </div>
            <p className="text-xs text-muted-foreground tracking-widest uppercase">
              © {new Date().getFullYear()} Headwaters Customs LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
