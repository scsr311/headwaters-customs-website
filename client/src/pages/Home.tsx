import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, FileText, Wrench, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/60 to-transparent">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/octXJdDmJfadwTKn.png" 
                alt="Headwaters Customs" 
                className="h-12 w-auto cursor-pointer hover:opacity-90 transition-opacity"
              />
            </Link>
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/about">
                <span className="text-white hover:text-accent transition-colors cursor-pointer nav-link">
                  About
                </span>
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger className="text-white hover:text-accent transition-colors nav-link flex items-center gap-1">
                  Services <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/services">
                      <span className="cursor-pointer">Services Offered</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/process">
                      <span className="cursor-pointer">Our Process</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <DropdownMenu>
                <DropdownMenuTrigger className="text-white hover:text-accent transition-colors nav-link flex items-center gap-1">
                  AI Tools <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/dream-build">
                      <span className="cursor-pointer">Dream Build</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/quote">
                      <span className="cursor-pointer">Cost Calculator</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Link href="/gallery">
                <span className="text-white hover:text-accent transition-colors cursor-pointer nav-link">
                  Gallery
                </span>
              </Link>
              
              <Link href="/marketplace">
                <span className="text-white hover:text-accent transition-colors cursor-pointer nav-link">
                  Marketplace
                </span>
              </Link>
              
              <Link href="/store">
                <span className="text-white hover:text-accent transition-colors cursor-pointer nav-link">
                  Store
                </span>
              </Link>
              
              <Link href="/builds">
                <span className="text-white hover:text-accent transition-colors cursor-pointer nav-link">
                  Follow Builds
                </span>
              </Link>
              
              <Link href="/contact">
                <span className="text-white hover:text-accent transition-colors cursor-pointer nav-link">
                  Contact
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Screen Montana Landscape */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/hero-home.jpg)' }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/octXJdDmJfadwTKn.png" 
              alt="Headwaters Customs Logo" 
              className="mx-auto w-64 h-auto md:w-96 drop-shadow-2xl"
            />
          </div>

          {/* Main Heading */}
          <h1 className="hero-title text-white mb-2 text-5xl md:text-7xl lg:text-8xl drop-shadow-2xl">
            BORN AT THE HEADWATERS
          </h1>

          {/* Script Tagline */}
          <p className="brand-script text-gold mb-3 text-2xl md:text-3xl drop-shadow-lg">
            Built to Outlast the Ordinary
          </p>
          
          {/* Services Tagline */}
          <p className="hero-title text-white/90 mb-12 text-lg md:text-xl tracking-widest">
            Frame-Off Restorations • LS Swaps • Montana Built
          </p>

          {/* Location */}
          <p className="text-white/80 text-lg mb-8 font-light">
            Ennis, Montana
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dream-build">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg cursor-pointer"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                AI Dream Build
              </Button>
            </Link>
            <Link href="/quote">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-foreground px-8 py-6 text-lg cursor-pointer"
              >
                <FileText className="w-5 h-5 mr-2" />
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>

        {/* Contact Info at Bottom */}
        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-center text-white text-sm">
              <p className="mb-2 sm:mb-0">5088 US Hwy 287 N, Ennis, MT 59729</p>
              <div className="flex gap-6">
                <a href="tel:406-451-1394" className="hover:text-accent transition-colors">
                  406-451-1394
                </a>
                <a href="tel:816-645-7054" className="hover:text-accent transition-colors">
                  816-645-7054
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-2 hover:border-accent transition-all">
              <div className="flex justify-center mb-4">
                <Sparkles className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">AI Dream Build</h3>
              <p className="text-center text-muted-foreground mb-6">
                Describe your dream build and watch AI generate photorealistic renderings in seconds. 
                See your vision before we turn a single wrench.
              </p>
              <Link href="/dream-build">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 cursor-pointer">
                  Try It Now
                </Button>
              </Link>
            </Card>

            <Card className="p-8 border-2 hover:border-accent transition-all">
              <div className="flex justify-center mb-4">
                <FileText className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">AI-Assisted Quote</h3>
              <p className="text-center text-muted-foreground mb-6">
                Upload photos of your vehicle, select your desired modifications, and receive a 
                detailed project summary. We'll provide a custom quote within 48 hours.
              </p>
              <Link href="/quote">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 cursor-pointer">
                  Get Started
                </Button>
              </Link>
            </Card>

            <Card className="p-8 border-2 hover:border-accent transition-all">
              <div className="flex justify-center mb-4">
                <Wrench className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Full-Service Shop</h3>
              <p className="text-center text-muted-foreground mb-6">
                From sandblasting and powder coating to complete frame-off restorations and custom 
                fabrication. We handle every aspect of your build in-house.
              </p>
              <Link href="/services">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 cursor-pointer">
                  View Services
                </Button>
              </Link>
            </Card>
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
                <Link href="/services"><span className="block text-muted-foreground hover:text-accent transition-colors cursor-pointer">Services</span></Link>
                <Link href="/gallery"><span className="block text-muted-foreground hover:text-accent transition-colors cursor-pointer">Gallery</span></Link>
                <Link href="/about"><span className="block text-muted-foreground hover:text-accent transition-colors cursor-pointer">About</span></Link>
                <Link href="/contact"><span className="block text-muted-foreground hover:text-accent transition-colors cursor-pointer">Contact</span></Link>
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
