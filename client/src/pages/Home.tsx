import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, FileText, Wrench, ChevronRight, Zap, Settings, Gauge } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

const HC_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/octXJdDmJfadwTKn.png";
const K10_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/BGaiChCergqUomgF.jpg";
const SCOUT_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/TKnpUSmOOzrJVFtW.jpg";
const C20_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/NtDMdgSFayrQbEgp.jpg";
const K20_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/YfwgnYwNKuLMlHWp.jpg";
const F450_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/RfTnqLJyCpNNKxFo.jpg";

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
    nickname: "The Flagship",
    color: "Blue on Blue",
    image: K10_URL,
    isFeatured: true,
    specs: [
      { icon: Settings, label: "Chassis", value: "Full AWD Denali Platform" },
      { icon: Gauge, label: "Engine", value: "408ci Stroker LS (6.0 base)" },
      { icon: Zap, label: "Power", value: "1,200–1,300 HP Turbocharged" },
    ],
    description:
      "The build that defines Headwaters Customs. A '79 K10 body dropped onto a full all-wheel-drive Denali chassis, powered by a 6.0 LS bored and stroked to 408 cubic inches, then force-fed by a turbocharger to produce an estimated 1,200–1,300 horsepower. Vintage soul. Modern muscle. Montana made.",
  },
  {
    id: "scout",
    year: "1961",
    name: "International Scout",
    nickname: "The Red Menace",
    color: "Candy Red / White",
    image: SCOUT_URL,
    isFeatured: false,
    specs: [],
    description: "Full build details coming soon. Stay tuned.",
  },
  {
    id: "c20",
    year: "1972",
    name: "C20 Cheyenne",
    nickname: "The Green Machine",
    color: "Forest Green / White",
    image: C20_URL,
    isFeatured: false,
    specs: [],
    description: "Full build details coming soon. Stay tuned.",
  },
  {
    id: "k20",
    year: "1975",
    name: "K20 Flatbed",
    nickname: "The Workhorse",
    color: "Royal Blue",
    image: K20_URL,
    isFeatured: false,
    specs: [],
    description: "5.3 LS · 400 HP · 4L80E · Custom Distressed Leather Interior",
    link: "/builds/k20",
  },
  {
    id: "f450",
    year: "2015",
    name: "Ford F-450",
    nickname: "The Enforcer",
    color: "Matte Black",
    image: F450_URL,
    isFeatured: false,
    specs: [],
    description: "Full build details coming soon. Stay tuned.",
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

          <h1 className="hero-title text-white mb-2 text-5xl md:text-7xl lg:text-8xl drop-shadow-2xl leading-none">
            BORN AT THE HEADWATERS
          </h1>

          <p className="brand-script text-gold mb-4 text-2xl md:text-3xl drop-shadow-lg">
            Built to Outlast the Ordinary
          </p>

          <p className="hero-title text-white/80 mb-10 text-base md:text-lg tracking-[0.25em] uppercase">
            Frame-Off Restorations &nbsp;•&nbsp; LS Swaps &nbsp;•&nbsp; Montana Built
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dream-build">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base font-bold tracking-widest uppercase cursor-pointer"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                AI Dream Build
              </Button>
            </Link>
            <Link href="/quote">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/80 text-white hover:bg-white hover:text-black px-8 py-6 text-base font-bold tracking-widest uppercase cursor-pointer"
              >
                <FileText className="w-5 h-5 mr-2" />
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom contact strip */}
        <div className="absolute bottom-6 left-0 right-0 z-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-center text-white/70 text-sm tracking-wide">
              <span>5088 US Hwy 287 N, Ennis, MT 59729</span>
              <div className="flex gap-6 mt-2 sm:mt-0">
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
            <h2 className="hero-title text-foreground text-4xl md:text-6xl">THE FLAGSHIP</h2>
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
                <span className="text-accent hero-title text-lg tracking-widest">BLUE ON BLUE</span>
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

              <Link href="/gallery">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold tracking-widest uppercase cursor-pointer">
                  View Full Gallery <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
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
              <Link href="/dream-build">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold tracking-widest uppercase text-sm cursor-pointer">
                  Try It Now
                </Button>
              </Link>
            </div>

            <div className="p-8 border border-accent/20 rounded-lg hover:border-accent/60 transition-all bg-card/50 text-center">
              <FileText className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="hero-title text-xl mb-3">AI-ASSISTED QUOTE</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                Upload photos, select your modifications, and receive a detailed project summary. Custom quote within 48 hours.
              </p>
              <Link href="/quote">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold tracking-widest uppercase text-sm cursor-pointer">
                  Get Started
                </Button>
              </Link>
            </div>

            <div className="p-8 border border-accent/20 rounded-lg hover:border-accent/60 transition-all bg-card/50 text-center">
              <Wrench className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="hero-title text-xl mb-3">FULL-SERVICE SHOP</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                Sandblasting, powder coating, frame-off restorations, and custom fabrication — all handled in-house.
              </p>
              <Link href="/services">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold tracking-widest uppercase text-sm cursor-pointer">
                  View Services
                </Button>
              </Link>
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
          <div className="border-t border-accent/20 mt-8 pt-6 text-center text-xs text-muted-foreground tracking-widest uppercase">
            © {new Date().getFullYear()} Headwaters Customs LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
