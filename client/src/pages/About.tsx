import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

export default function About() {
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
                <a className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
              </Link>
              <Link href="/gallery">
                <a className="text-muted-foreground hover:text-foreground transition-colors">Gallery</a>
              </Link>
              <Link href="/about">
                <a className="text-accent font-medium">About</a>
              </Link>
              <Link href="/contact">
                <a className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              About Us
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Built on Passion, Driven by Excellence
            </h1>
            <p className="text-xl text-muted-foreground">
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
              <h3 className="text-2xl font-bold mb-6">By the Numbers</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="text-muted-foreground">Years in Business</span>
                  <span className="text-3xl font-bold text-accent">15+</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="text-muted-foreground">Completed Builds</span>
                  <span className="text-3xl font-bold text-accent">200+</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="text-muted-foreground">Expert Technicians</span>
                  <span className="text-3xl font-bold text-accent">5</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="text-muted-foreground">Facility Size</span>
                  <span className="text-3xl font-bold text-accent">8,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Customer Satisfaction</span>
                  <span className="text-3xl font-bold text-accent">100%</span>
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
                  or creating custom metal art.
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
          </div>

          <div className="max-w-3xl mx-auto mt-12">
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-4">Our Departments</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-2 text-accent">Paint & Body Department</h4>
                  <p className="text-muted-foreground text-sm mb-2">3,000 sq ft dedicated space</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• 1 Journeyman (Owner)</li>
                    <li>• 1 Apprentice (2 years experience)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-accent">Mechanic / Fabrication Department</h4>
                  <p className="text-muted-foreground text-sm mb-2">5,000 sq ft dedicated space</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• 1 Journeyman (Owner)</li>
                    <li>• 1 Apprentice (4 years experience)</li>
                    <li>• 1 Apprentice (2 years experience)</li>
                  </ul>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mt-6">
                Both departments work closely together, cross-training and assisting as needed to ensure 
                every build receives the attention it deserves.
              </p>
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
