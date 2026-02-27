import { Link, useLocation } from "wouter";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const HC_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/octXJdDmJfadwTKn.png";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  const linkClass = (path?: string) =>
    `transition-colors cursor-pointer font-semibold tracking-wide text-sm uppercase ${
      path && location === path
        ? "text-accent"
        : "text-foreground/90 hover:text-accent"
    }`;

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-accent/20 bg-background/95 backdrop-blur-md shadow-lg shadow-black/40">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <img
                src={HC_LOGO}
                alt="Headwaters Customs"
                className="h-12 w-auto cursor-pointer hover:opacity-90 transition-opacity drop-shadow-md"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-7">
              <Link href="/about">
                <span className={linkClass("/about")}>About</span>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger className={`${linkClass()} flex items-center gap-1`}>
                  Services <ChevronDown className="w-3 h-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-card border-accent/30">
                  <DropdownMenuItem className="hover:text-accent focus:text-accent">
                    <Link href="/services">
                      <span className="cursor-pointer text-sm uppercase tracking-wide font-semibold">Services Offered</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:text-accent focus:text-accent">
                    <Link href="/process">
                      <span className="cursor-pointer text-sm uppercase tracking-wide font-semibold">Our Process</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className={`${linkClass()} flex items-center gap-1`}>
                  AI Tools <ChevronDown className="w-3 h-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-card border-accent/30">
                  <DropdownMenuItem className="hover:text-accent focus:text-accent">
                    <Link href="/dream-build">
                      <span className="cursor-pointer text-sm uppercase tracking-wide font-semibold">Dream Build</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:text-accent focus:text-accent">
                    <Link href="/quote">
                      <span className="cursor-pointer text-sm uppercase tracking-wide font-semibold">Cost Calculator</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/gallery">
                <span className={linkClass("/gallery")}>Gallery</span>
              </Link>

              <Link href="/marketplace">
                <span className={linkClass("/marketplace")}>Marketplace</span>
              </Link>

              <Link href="/store">
                <span className={linkClass("/store")}>Store</span>
              </Link>

              <Link href="/builds">
                <span className={linkClass("/builds")}>Follow Builds</span>
              </Link>

              <Link href="/contact">
                <span className="cursor-pointer font-bold tracking-wide text-sm uppercase px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all rounded-sm">
                  Contact
                </span>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden text-foreground hover:text-accent transition-colors p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-accent/20 bg-background/98 backdrop-blur-md">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              <Link href="/about" onClick={() => setMobileOpen(false)}>
                <span className="block py-3 px-2 text-sm font-semibold uppercase tracking-wide text-foreground/90 hover:text-accent border-b border-border/30 transition-colors">About</span>
              </Link>
              <Link href="/services" onClick={() => setMobileOpen(false)}>
                <span className="block py-3 px-2 text-sm font-semibold uppercase tracking-wide text-foreground/90 hover:text-accent border-b border-border/30 transition-colors">Services Offered</span>
              </Link>
              <Link href="/process" onClick={() => setMobileOpen(false)}>
                <span className="block py-3 px-2 text-sm font-semibold uppercase tracking-wide text-foreground/90 hover:text-accent border-b border-border/30 transition-colors">Our Process</span>
              </Link>
              <Link href="/dream-build" onClick={() => setMobileOpen(false)}>
                <span className="block py-3 px-2 text-sm font-semibold uppercase tracking-wide text-foreground/90 hover:text-accent border-b border-border/30 transition-colors">AI Dream Build</span>
              </Link>
              <Link href="/quote" onClick={() => setMobileOpen(false)}>
                <span className="block py-3 px-2 text-sm font-semibold uppercase tracking-wide text-foreground/90 hover:text-accent border-b border-border/30 transition-colors">Cost Calculator</span>
              </Link>
              <Link href="/gallery" onClick={() => setMobileOpen(false)}>
                <span className="block py-3 px-2 text-sm font-semibold uppercase tracking-wide text-foreground/90 hover:text-accent border-b border-border/30 transition-colors">Gallery</span>
              </Link>
              <Link href="/marketplace" onClick={() => setMobileOpen(false)}>
                <span className="block py-3 px-2 text-sm font-semibold uppercase tracking-wide text-foreground/90 hover:text-accent border-b border-border/30 transition-colors">Marketplace</span>
              </Link>
              <Link href="/store" onClick={() => setMobileOpen(false)}>
                <span className="block py-3 px-2 text-sm font-semibold uppercase tracking-wide text-foreground/90 hover:text-accent border-b border-border/30 transition-colors">Store</span>
              </Link>
              <Link href="/builds" onClick={() => setMobileOpen(false)}>
                <span className="block py-3 px-2 text-sm font-semibold uppercase tracking-wide text-foreground/90 hover:text-accent border-b border-border/30 transition-colors">Follow Builds</span>
              </Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                <span className="block py-3 px-2 text-sm font-bold uppercase tracking-wide text-accent border-b border-border/30 transition-colors">Contact Us</span>
              </Link>
              <a href="tel:406-451-1394" className="flex items-center gap-2 py-3 px-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors mt-1">
                <Phone className="w-4 h-4" />
                406-451-1394
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
