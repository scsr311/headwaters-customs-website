import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/hero-about.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl text-center mx-auto">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              About Us
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold mt-4 mb-6 text-white hero-title">
              Built on Passion, Driven by Excellence
            </h1>
            <p className="text-xl text-white/90">
              Located 1.5 miles north of Ennis, Montana, Headwaters Customs is where classic automotive 
              craftsmanship meets cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Headwaters Customs was founded on a simple principle: every classic vehicle deserves 
                  to be more than just restored—it deserves to be reimagined. What started as a passion 
                  project has evolved into a full-service custom shop that's redefining what's possible 
                  in the restomod and restoration world.
                </p>
                <p>
                  Our 8,000 square foot facility houses two specialized departments: a 3,000 sq ft paint 
                  and body shop, and a 5,000 sq ft fabrication and mechanical shop. This allows us to 
                  handle every aspect of your build in-house, from initial teardown to final assembly.
                </p>
                <p>
                  We're not about flashy showmanship or over-the-top promises. We're about doing the work 
                  right, communicating honestly, and delivering builds that exceed expectations. That's the 
                  Headwaters way—confident in our craft, humble in our approach.
                </p>
              </div>
            </div>
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-6">The Shop</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="text-muted-foreground">Founded</span>
                  <span className="text-3xl font-bold text-accent">2025</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="text-muted-foreground">Location</span>
                  <span className="text-lg font-bold text-accent">Ennis, MT</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="text-muted-foreground">Facility Size</span>
                  <span className="text-3xl font-bold text-accent">8,000 <span className="text-lg">sq ft</span></span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="text-muted-foreground">Paint &amp; Body</span>
                  <span className="text-3xl font-bold text-accent">3,000 <span className="text-lg">sq ft</span></span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Fab &amp; Mechanical</span>
                  <span className="text-3xl font-bold text-accent">5,000 <span className="text-lg">sq ft</span></span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-card/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet the Team</h2>
            <p className="text-xl text-muted-foreground">
              Our crew brings decades of combined experience in custom fabrication, paint and body, 
              and mechanical restoration. Every member is a craftsman who takes pride in their work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 bg-card border-border">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Mike</h3>
                <p className="text-accent font-semibold">Co-Founder / Co-Owner</p>
                <p className="text-muted-foreground">
                  Mike brings a passion for precision and an eye for detail that's evident in every build.
                  When he's not in the shop, you'll find him with Jax, his two-year-old working line German Shepherd,
                  or creating custom welded metal art on commission.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Clay</h3>
                <p className="text-accent font-semibold">Co-Founder / Co-Owner</p>
                <p className="text-muted-foreground">
                  Clay's expertise in fabrication and mechanical systems ensures that every build not only
                  looks incredible but performs flawlessly. His commitment to quality is the foundation of
                  everything we do.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Alex</h3>
                <p className="text-accent font-semibold">Journeyman &mdash; Production Manager</p>
                <p className="text-muted-foreground">
                  Alex keeps the shop moving. As our production manager and journeyman technician,
                  he coordinates workflow across both departments and ensures every build stays on
                  schedule without cutting corners.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Sachem, Easton &amp; Bricen</h3>
                <p className="text-accent font-semibold">Apprentice Technicians</p>
                <p className="text-muted-foreground">
                  Our three apprentices are learning the trade the right way — hands-on, under direct
                  mentorship from the owners. Each one is developing the skills and standards that
                  define a Headwaters Customs build.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">Ready to Work Together?</h2>
            <p className="text-xl text-muted-foreground">
              Whether you have a clear vision or just a spark of an idea, we're here to help bring 
              your dream build to life. Let's talk about your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <Link href="/quote">Get a Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
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
                <Link href="/services" className="block text-muted-foreground hover:text-accent transition-colors">Services</Link>
                <Link href="/gallery" className="block text-muted-foreground hover:text-accent transition-colors">Gallery</Link>
                <Link href="/about" className="block text-muted-foreground hover:text-accent transition-colors">About</Link>
                <Link href="/contact" className="block text-muted-foreground hover:text-accent transition-colors">Contact</Link>
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
