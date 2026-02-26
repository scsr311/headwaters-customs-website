import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Image } from "lucide-react";

export default function Gallery() {
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
                <a className="text-accent font-medium">Gallery</a>
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
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              Our Work
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Finished Projects
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our portfolio of completed builds. Each project represents hundreds of hours 
              of craftsmanship, attention to detail, and passion for automotive excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16">
        <div className="container">
          <Card className="p-20 bg-card border-border border-dashed">
            <div className="text-center space-y-6">
              <Image className="w-20 h-20 text-muted-foreground mx-auto" />
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Gallery Coming Soon</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  We're currently building out our project gallery. Check back soon to see our 
                  completed builds, or contact us to discuss your project.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/dream-build">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Try AI Dream Build
                  </Button>
                </Link>
                <Link href="/quote">
                  <Button size="lg" variant="outline">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
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
