import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

const K10_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/wujHIjLXtKGyopZZ.jpg";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${K10_URL})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/75" />
        <div className="container relative z-10">
          <div className="max-w-3xl text-center mx-auto">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              About Us
            </span>
            <h1 className="sign-title text-white mt-4 mb-6" style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}>
              ARTISTRY FORGED THROUGH STEEL
            </h1>
            <p className="text-xl text-white/85 brand-script">
              Built to Outlast the Ordinary
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 border-b border-accent/20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="brand-script text-accent text-xl">The Origin</p>
              <h2 className="text-4xl font-bold hero-title">How It Started</h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Headwaters Customs was born out of a friendship that started fourteen years ago. Clay and his best friend moved to Ennis looking for a place to start a mechanic shop. A mutual friend made the introduction, asked Mike if he knew of anywhere they could rent and if he could help them get settled. He liked both of them right away. The rest, as Mike puts it, is kind of history.
                </p>
                <p>
                  The shop officially opened in January 2025, with a grand opening in May of that same year. What started as a shared passion for vintage iron and a belief that classic vehicles deserve more than a standard restoration became something bigger — a full-service custom shop in the heart of Southwest Montana.
                </p>
                <p>
                  The name is a nod to where they live. Ennis sits on the banks of the Madison River — one of the world's most famous Blue Ribbon trout streams, and one of the three headwater tributaries that form the Missouri River. Everybody in the area names their business "Madison something." Mike and Clay wanted to pay homage to the river in a different way — recognizing it as a headwater, something unique to where they are. It fit.
                </p>
              </div>
            </div>

            {/* The Shop card */}
            <Card className="p-8 bg-card border-border sticky top-8">
              <h3 className="text-2xl font-bold mb-6 hero-title">THE SHOP</h3>
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="text-muted-foreground">Founded</span>
                  <span className="text-3xl font-bold text-accent">January 2025</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="text-muted-foreground">Location</span>
                  <span className="text-lg font-bold text-accent">Ennis, Montana</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="text-muted-foreground">Total Facility</span>
                  <span className="text-3xl font-bold text-accent">8,000 <span className="text-lg font-normal">sq ft</span></span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <span className="text-muted-foreground">Paint &amp; Body</span>
                  <span className="text-2xl font-bold text-accent">3,000 <span className="text-base font-normal">sq ft</span></span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Fab &amp; Mechanical</span>
                  <span className="text-2xl font-bold text-accent">5,000 <span className="text-base font-normal">sq ft</span></span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-card/30 border-b border-accent/20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="brand-script text-accent text-xl">What We Stand For</p>
            <h2 className="text-4xl font-bold hero-title">Why We Do This</h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-left">
              <p>
                Cars these days lack character. They lack soul. Sure, a new truck might cost enough to demand exclusivity — but at the end of the day, what you have is an expensive payment and the same thing your neighbor has. The one thing that old classic vintage vehicles always had was character. They had soul. Every one of them had a story.
              </p>
              <p>
                Headwaters is the place where we take that character and soul and turn it into something exclusive. Something special. Something that is hardly ordinary. Each build is a work of art — artistry forged through steel, built to outlast the ordinary.
              </p>
              <p>
                We started this shop because of our passion for vintage cars, horsepower, and speed. It's also a way for us to release our creativity. We want to offer access to our skills because of our love for these American icons. We don't believe in milking your wallet dry. Quality craftsmanship at a premium yet honest price. No BS, no padded bills — straight-up honesty. The only marriage you'll have to commit to when we build your car is the one between you, your vehicle, and the way it makes you fall in love with the road.
              </p>
              <p>
                We specialize in all makes and models, but our hearts are in classic American street iron — the kind of vehicle that everyone has some story about from growing up. If we had to pick a sweet spot, it's the Chevy square body, the GM muscle car, restomods, and LS swaps. Those get us excited.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* One-Stop Shop */}
      <section className="py-16 border-b border-accent/20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="brand-script text-accent text-xl">The Difference</p>
            <h2 className="text-4xl font-bold hero-title">ONE STOP. START TO FINISH.</h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-left">
              <p>
                One of the things that sets Headwaters apart is that we are building toward a true one-stop restoration shop. When you bring your vehicle to us, it doesn't leave until the project is complete. No coordinating between three or four different companies, no chasing down subcontractors, no gaps in accountability. Everything — fabrication, bodywork, paint, mechanical, sandblasting, coatings, and more — happens under one roof, managed by the same team from day one to delivery.
              </p>
              <p>
                We offer complete frame-off restorations, ground-up restomod builds, performance upgrades, sandblasting, commercial-grade performance coatings, metal fabrication (from automotive frames and chassis to architectural trusses, staircases, balconies, railings, and custom gates), paint correction, auto refurbishment, sprayable PPF by Peel Clear, 3D printing and modeling, custom paint work, and used auto parts sales. Metal Art by MichaelJ — welded metal art on commission — rounds out the creative side of what comes out of this shop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-card/30 border-b border-accent/20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="brand-script text-accent text-xl mb-2">The People</p>
            <h2 className="text-4xl font-bold hero-title">MEET THE CREW</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {/* Mike */}
            <Card className="p-8 bg-card border-border">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Mike</h3>
                <p className="text-accent font-semibold tracking-wide uppercase text-sm">Co-Founder / Co-Owner</p>
                <div className="space-y-3 text-muted-foreground leading-relaxed text-sm">
                  <p>
                    Mike was born into this trade. His dad did it. His dad's dad did it. He started working professionally at 18 and hasn't stopped — thirty years in the industry, with his primary expertise on the paint and body side of things. Painting is his lane, but metal art and fabrication are where his creativity lives outside the shop.
                  </p>
                  <p>
                    Under the name <span className="text-accent font-medium">Metal Art by MichaelJ</span>, he creates high-end welded metal sculptures on commission — work that feeds directly back into the artistry he brings to every build at Headwaters. The car that got away? A 1972 Chevelle SS. The one that shaped everything that came after.
                  </p>
                  <p>
                    When he's not in the shop, he's with Jax — his two-year-old working line German Shepherd.
                  </p>
                </div>
              </div>
            </Card>

            {/* Clay */}
            <Card className="p-8 bg-card border-border">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Clay</h3>
                <p className="text-accent font-semibold tracking-wide uppercase text-sm">Co-Founder / Co-Owner</p>
                <div className="space-y-3 text-muted-foreground leading-relaxed text-sm">
                  <p>
                    Clay's full story will be here soon — he's a little harder to pin down than Mike, which anyone who knows them will find completely unsurprising.
                  </p>
                  <p>
                    What's clear from the work: his expertise in fabrication and mechanical systems is the backbone of every build that comes out of this shop. The two of them push each other, challenge each other, and by Mike's own admission, complement each other incredibly well. Two alpha males, one shared standard of quality.
                  </p>
                  <p className="text-accent/70 italic text-xs">
                    Clay's full bio coming soon.
                  </p>
                </div>
              </div>
            </Card>

            {/* Alex */}
            <Card className="p-8 bg-card border-border">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Alex</h3>
                <p className="text-accent font-semibold tracking-wide uppercase text-sm">Journeyman &mdash; Production Manager</p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Alex keeps the shop moving. As our journeyman technician and production manager, he coordinates workflow across both departments and ensures every build stays on schedule without cutting corners. The kind of person a shop like this can't function without.
                </p>
              </div>
            </Card>

            {/* Apprentices */}
            <Card className="p-8 bg-card border-border">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Sachem, Easton, Bricen &amp; Dan</h3>
                <p className="text-accent font-semibold tracking-wide uppercase text-sm">Apprentice Technicians</p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Our four apprentices are learning this trade the right way — hands-on, under direct mentorship from the owners and Alex. Each one is developing the skills and the standards that define a Headwaters Customs build. This is how the craft gets passed on.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Montana Identity */}
      <section className="py-16 border-b border-accent/20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="brand-script text-accent text-xl">Where We Are</p>
            <h2 className="text-4xl font-bold hero-title">ENNIS, MONTANA</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We're located at 5088 US Highway 287 North — 1.5 miles north of Ennis, in the heart of the Madison Valley in Southwest Montana. The Gallatin, the Jefferson, and the Madison converge about 40 miles from here to form the Missouri River. The Madison is one of the most famous Blue Ribbon trout streams in the world. This is where we work, where we live, and where every build leaves from.
              </p>
              <p>
                Montana doesn't tolerate ordinary. Neither do we.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold hero-title">READY TO BUILD SOMETHING?</h2>
            <p className="text-xl text-muted-foreground">
              Whether you have a clear vision or just a spark of an idea, we're here to help bring it to life. Let's talk about your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold tracking-widest uppercase" asChild>
                <Link href="/quote">Get a Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-foreground/40 font-bold tracking-widest uppercase" asChild>
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
