import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Wrench, Paintbrush, Cog, Hammer, Zap, Package 
} from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    icon: Wrench,
    title: "Frame-Off Restorations",
    description: "Complete frame-off restorations that bring classic vehicles back to showroom condition. Every nut, bolt, and component is meticulously restored or replaced to factory specifications—or better.",
    features: [
      "Complete disassembly and documentation",
      "Frame sandblasting and powder coating",
      "Body panel restoration or replacement",
      "Original or upgraded mechanical systems",
      "Concours-level detailing"
    ]
  },
  {
    icon: Cog,
    title: "Restomod Builds",
    description: "The best of both worlds: classic styling with modern performance, comfort, and reliability. We specialize in seamlessly integrating contemporary technology into vintage platforms.",
    features: [
      "LS, Coyote, and Hemi engine swaps",
      "Modern transmission conversions",
      "Upgraded suspension and braking",
      "Air conditioning and audio systems",
      "Custom wiring and electronics"
    ]
  },
  {
    icon: Zap,
    title: "Engine Swaps",
    description: "Expert installation of modern powerplants into classic vehicles. We handle all aspects from engine selection to final tuning, ensuring reliable performance and proper integration.",
    features: [
      "GM LS series swaps",
      "Ford Coyote installations",
      "Dodge Hemi conversions",
      "Custom engine mounts and headers",
      "ECU tuning and calibration"
    ]
  },
  {
    icon: Paintbrush,
    title: "Paint & Body",
    description: "Our dedicated 3,000 sq ft paint department delivers show-quality finishes. From subtle repairs to complete color changes, we handle all aspects of bodywork and refinishing.",
    features: [
      "Metal fabrication and repair",
      "Panel alignment and fitment",
      "Custom paint and graphics",
      "Clear coat and ceramic coatings",
      "Color matching and blending"
    ]
  },
  {
    icon: Hammer,
    title: "Sandblasting & Powder Coating",
    description: "In-house sandblasting removes rust, paint, and contaminants down to bare metal. Our powder coating provides a durable, professional finish in virtually any color.",
    features: [
      "Media blasting for all components",
      "Rust removal and surface prep",
      "High-temperature powder coating",
      "Custom colors and finishes",
      "Chassis and suspension coating"
    ]
  },
  {
    icon: Package,
    title: "Custom Fabrication",
    description: "When off-the-shelf parts won't cut it, our fabrication shop creates custom solutions. From one-off brackets to complete chassis modifications, we build what you need.",
    features: [
      "Custom exhaust systems",
      "Fuel system fabrication",
      "Roll cages and safety equipment",
      "Suspension modifications",
      "Specialty brackets and mounts"
    ]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="text-2xl font-bold text-foreground hover:text-accent transition-colors">
                HEADWATERS CUSTOMS
              </a>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/services">
                <a className="text-accent font-medium">Services</a>
              </Link>
              <Link href="/gallery">
                <a className="text-muted-foreground hover:text-foreground transition-colors">Gallery</a>
              </Link>
              <Link href="/about">
                <a className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              </Link>
              <Link href="/contact">
                <a className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/hero-services.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl text-center mx-auto">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              Our Services
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold mt-4 mb-6 text-white hero-title">
              Full-Service Custom Shop
            </h1>
            <p className="text-xl text-white/90">
              From sandblasting to final assembly, we handle every aspect of your build in-house. 
              Our 8,000 sq ft facility houses dedicated paint and fabrication departments staffed by 
              experienced technicians who are passionate about automotive excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-8 bg-card border-border hover:border-accent/50 transition-all">
                  <div className="p-4 bg-accent/10 rounded-lg inline-block mb-6">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-accent mt-1">•</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">Ready to Start Your Build?</h2>
            <p className="text-xl text-muted-foreground">
              Whether you're dreaming of a complete frame-off restoration or a modern restomod, 
              our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Get a Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Headwaters Customs LLC</h3>
              <p className="text-muted-foreground text-sm">
                5088 US Hwy 287 N<br />
                Ennis, MT 59729<br />
                1.5 mi north of Ennis
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <Link href="/services"><a className="block text-muted-foreground hover:text-accent transition-colors">Services</a></Link>
                <Link href="/gallery"><a className="block text-muted-foreground hover:text-accent transition-colors">Gallery</a></Link>
                <Link href="/about"><a className="block text-muted-foreground hover:text-accent transition-colors">About</a></Link>
                <Link href="/contact"><a className="block text-muted-foreground hover:text-accent transition-colors">Contact</a></Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Connect</h3>
              <p className="text-muted-foreground text-sm">
                Ready to start your build? Get in touch with our team today.
              </p>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Headwaters Customs LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
