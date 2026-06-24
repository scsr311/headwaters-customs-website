import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, ArrowRight, Loader2, ImageOff } from "lucide-react";
import { Link, useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import { trpc } from "@/lib/trpc";
import { useState } from "react";

export default function DreamGallery() {
  const [, navigate] = useLocation();
  const { data: gallery, isLoading } = trpc.dreamBuild.getGallery.useQuery({ limit: 60 });

  const handleBuildMine = (prompt: string) => {
    // Store the prompt and navigate to dream build
    sessionStorage.setItem("dreamBuildPrompt", prompt);
    navigate("/dream-build");
  };

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-background">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, #b8860b 0%, transparent 50%), radial-gradient(circle at 80% 20%, #8b6914 0%, transparent 40%)"
          }}
        />
        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-accent text-sm font-semibold">Community Dream Builds</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
            The Vision Board
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
            Every build starts as a dream. Browse AI-generated concepts from the Headwaters Customs community — 
            then build your own.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <Link href="/dream-build">
              <Sparkles className="w-5 h-5 mr-2" />
              Generate Your Own
            </Link>
          </Button>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container">
          {isLoading ? (
            <div className="flex items-center justify-center py-32">
              <Loader2 className="w-10 h-10 animate-spin text-accent" />
              <span className="ml-3 text-muted-foreground text-lg">Loading the vision board...</span>
            </div>
          ) : !gallery || gallery.length === 0 ? (
            <div className="text-center py-32 space-y-6">
              <ImageOff className="w-20 h-20 text-muted-foreground mx-auto" />
              <h2 className="text-2xl font-bold text-muted-foreground">No builds yet — be the first.</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                The Vision Board fills up as people generate dream builds. Head over and create yours — it'll show up here.
              </p>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <Link href="/dream-build">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Be the First
                </Link>
              </Button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">
                  {gallery.length} {gallery.length === 1 ? "Build" : "Builds"} in the Vision Board
                </h2>
                <Button variant="outline" asChild>
                  <Link href="/dream-build">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Add Yours
                  </Link>
                </Button>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {gallery.map((build) => (
                  <Card
                    key={build.id}
                    className="overflow-hidden bg-card border-border group hover:border-accent/50 transition-all duration-300"
                  >
                    <div className="relative aspect-square overflow-hidden bg-zinc-900">
                      <img
                        src={build.imageUrl}
                        alt={build.prompt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
                        <Button
                          size="sm"
                          className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                          onClick={() => handleBuildMine(build.prompt)}
                        >
                          Build Mine Like This
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                    <div className="p-4 space-y-3">
                      <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                        {build.prompt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground/60">
                          {formatDate(build.createdAt)}
                        </span>
                        <button
                          onClick={() => handleBuildMine(build.prompt)}
                          className="text-xs text-accent hover:text-accent/80 transition-colors font-medium"
                        >
                          Use this prompt →
                        </button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card/30 mt-auto">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold">Ready to Make It Real?</h2>
            <p className="text-xl text-muted-foreground">
              See something that inspires you? Let's turn a dream build into an actual build. 
              Get a quote from the Headwaters Customs team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <Link href="/quote">
                  Get a Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/dream-build">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Generate Your Own
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
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
                <Link href="/dream-build" className="block text-muted-foreground hover:text-accent transition-colors">Dream Build</Link>
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
