import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, FileText, Wrench } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
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
                <a className="text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </a>
              </Link>
              <Link href="/gallery">
                <a className="text-muted-foreground hover:text-foreground transition-colors">
                  Gallery
                </a>
              </Link>
              <Link href="/about">
                <a className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </Link>
              <Link href="/contact">
                <a className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </Link>
              <Link href="/dream-build">
                <Button variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI Dream Build
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Asymmetric Layout */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background with diagonal cut */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/20 to-transparent" 
                 style={{clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)'}} />
          </div>
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                    Ennis, Montana
                  </span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Build Your
                  <span className="block text-accent">Dream Machine</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl">
                  High-end custom car restoration, restomod builds, and classic vehicle services. 
                  From frame-off restorations to LS swaps, we bring your vision to life.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/dream-build">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Visualize Your Build
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/quote">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    <FileText className="w-5 h-5 mr-2" />
                    Get a Quote
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                <div>
                  <div className="text-3xl font-bold text-accent">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">200+</div>
                  <div className="text-sm text-muted-foreground">Builds Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">5</div>
                  <div className="text-sm text-muted-foreground">Expert Technicians</div>
                </div>
              </div>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="space-y-6">
              <Card className="p-6 bg-card/80 backdrop-blur border-border hover:border-accent/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">AI Dream Build Visualizer</h3>
                    <p className="text-muted-foreground mb-4">
                      Describe your dream build in plain English and watch AI generate photorealistic renderings in seconds. 
                      See your vision before we turn a single wrench.
                    </p>
                    <Link href="/dream-build">
                      <Button variant="ghost" className="text-accent hover:text-accent/80 p-0">
                        Try it now <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur border-border hover:border-accent/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <FileText className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">AI-Assisted Quote Request</h3>
                    <p className="text-muted-foreground mb-4">
                      Upload photos of your vehicle, select your desired modifications, and receive a detailed 
                      project summary. We'll review and provide a custom quote within 48 hours.
                    </p>
                    <Link href="/quote">
                      <Button variant="ghost" className="text-accent hover:text-accent/80 p-0">
                        Get started <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur border-border hover:border-accent/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Wrench className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Full-Service Shop</h3>
                    <p className="text-muted-foreground mb-4">
                      From sandblasting and powder coating to complete frame-off restorations and custom fabrication. 
                      We handle every aspect of your build in-house.
                    </p>
                    <Link href="/services">
                      <Button variant="ghost" className="text-accent hover:text-accent/80 p-0">
                        View services <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
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
