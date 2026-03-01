import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, ArrowRight, Loader2, Download } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

// Generate a session ID for rate limiting
const getSessionId = () => {
  let sessionId = localStorage.getItem("dreamBuildSessionId");
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem("dreamBuildSessionId", sessionId);
  }
  return sessionId;
};

const examplePrompts = [
  "1967 Chevy C10, matte black paint, lowered stance, LS3 engine swap, modern wheels, Montana mountain background",
  "1969 Camaro SS, candy apple red, white racing stripes, pro-touring build, Forgeline wheels",
  "1970 Ford Bronco, desert tan, lifted suspension, 35-inch tires, Coyote V8, off-road bumpers",
  "1932 Ford Coupe hot rod, chopped top, flame paint job, exposed chrome engine, traditional build",
];

export default function DreamBuild() {
  const [sessionId] = useState(getSessionId);
  const [prompt, setPrompt] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  
  const generateMutation = trpc.dreamBuild.generate.useMutation();
  const { data: limitStatus } = trpc.dreamBuild.checkLimit.useQuery({ sessionId });
  const { data: history } = trpc.dreamBuild.getHistory.useQuery({ sessionId });

  useEffect(() => {
    if (history && history.length > 0) {
      const allImages = history.flatMap(build => build.generatedImages);
      setGeneratedImages(allImages);
    }
  }, [history]);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a description of your dream build");
      return;
    }

    if (limitStatus && limitStatus.remaining <= 0 && !userEmail) {
      setShowEmailCapture(true);
      toast.error("You've used your free renders. Enter your email to continue!");
      return;
    }

    try {
      const result = await generateMutation.mutateAsync({
        prompt: prompt.trim(),
        sessionId,
        userEmail: userEmail || undefined,
      });

      setGeneratedImages(prev => [result.imageUrl, ...prev]);
      toast.success("Dream build generated! 🎨");
      
      if (result.remainingRenders <= 2) {
        toast.info(`${result.remainingRenders} free renders remaining`);
      }
    } catch (error: any) {
      if (error.message.includes("Rate limit")) {
        setShowEmailCapture(true);
        toast.error(error.message);
      } else {
        toast.error("Failed to generate image. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/hero-dreambuild.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-accent text-sm font-semibold">AI-Powered Visualization</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white hero-title">
              Dream It. See It. Build It.
            </h1>
            <p className="text-xl text-white/90">
              Describe your dream vehicle build in plain English and watch AI generate photorealistic 
              renderings in seconds. No design skills required—just your vision.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Section */}
            <div className="space-y-6">
              <Card className="p-8 bg-card border-border">
                <h2 className="text-2xl font-bold mb-6">Describe Your Dream Build</h2>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="prompt">Build Description *</Label>
                    <Textarea
                      id="prompt"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Example: 1969 Camaro SS, candy apple red, white racing stripes, pro-touring build, Forgeline wheels, Montana backdrop"
                      rows={6}
                      className="bg-background"
                    />
                    <p className="text-sm text-muted-foreground">
                      Include: vehicle year/make/model, color, modifications, wheels, and setting
                    </p>
                  </div>

                  {showEmailCapture && (
                    <div className="space-y-2 p-4 bg-accent/10 rounded-lg border border-accent/20">
                      <Label htmlFor="email">Email (unlock more renders)</Label>
                      <Input
                        id="email"
                        type="email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="bg-background"
                      />
                      <p className="text-sm text-muted-foreground">
                        We'll send you your generated images and follow up about your build
                      </p>
                    </div>
                  )}

                  <Button
                    onClick={handleGenerate}
                    disabled={generateMutation.isPending}
                    size="lg"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    {generateMutation.isPending ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5 mr-2" />
                        Generate Dream Build
                      </>
                    )}
                  </Button>

                  {limitStatus && (
                    <div className="text-center text-sm text-muted-foreground">
                      {limitStatus.remaining} free renders remaining
                    </div>
                  )}
                </div>
              </Card>

              {/* Example Prompts */}
              <Card className="p-6 bg-card border-border">
                <h3 className="font-bold mb-4">Example Prompts</h3>
                <div className="space-y-2">
                  {examplePrompts.map((example, index) => (
                    <button
                      key={index}
                      onClick={() => setPrompt(example)}
                      className="w-full text-left p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-sm"
                    >
                      {example}
                    </button>
                  ))}
                </div>
              </Card>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Your Dream Builds</h2>
                {generatedImages.length > 0 && (
                  <span className="text-sm text-muted-foreground">
                    {generatedImages.length} {generatedImages.length === 1 ? "render" : "renders"}
                  </span>
                )}
              </div>

              {generatedImages.length === 0 ? (
                <Card className="p-12 bg-card border-border border-dashed">
                  <div className="text-center space-y-4">
                    <Sparkles className="w-16 h-16 text-muted-foreground mx-auto" />
                    <p className="text-muted-foreground">
                      Your generated builds will appear here
                    </p>
                  </div>
                </Card>
              ) : (
                <div className="space-y-6">
                  {generatedImages.map((imageUrl, index) => (
                    <Card key={index} className="overflow-hidden bg-card border-border">
                      <img
                        src={imageUrl}
                        alt={`Dream build ${index + 1}`}
                        className="w-full aspect-square object-cover"
                      />
                      <div className="p-4 space-y-3">
                        <div className="flex gap-2">
                          <a href={imageUrl} download target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm" className="flex-1">
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </Button>
                          </a>
                          <Button size="sm" className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                            <Link href="/quote">
                              Make It Real
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">Ready to Make It Real?</h2>
            <p className="text-xl text-muted-foreground">
              Love what you see? Let's turn your AI-generated dream into a reality. 
              Get a detailed quote and timeline for your custom build.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <Link href="/quote">
                  Get a Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
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
