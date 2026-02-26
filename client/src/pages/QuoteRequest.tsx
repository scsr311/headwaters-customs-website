import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FileText, Upload, Loader2, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

const modifications = [
  { id: "engine_swap", label: "Engine Swap (LS/Coyote/Hemi)" },
  { id: "transmission", label: "Transmission Upgrade" },
  { id: "suspension", label: "Suspension & Handling" },
  { id: "brakes", label: "Brake System Upgrade" },
  { id: "paint", label: "Paint & Body Work" },
  { id: "interior", label: "Interior Restoration/Upgrade" },
  { id: "electrical", label: "Wiring & Electronics" },
  { id: "ac", label: "Air Conditioning" },
  { id: "audio", label: "Audio System" },
  { id: "wheels", label: "Wheels & Tires" },
  { id: "exhaust", label: "Custom Exhaust" },
  { id: "fuel_system", label: "Fuel System" },
  { id: "cooling", label: "Cooling System" },
  { id: "fabrication", label: "Custom Fabrication" },
  { id: "frame_off", label: "Frame-Off Restoration" },
];

const getSessionId = () => {
  let sessionId = localStorage.getItem("quoteSessionId");
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem("quoteSessionId", sessionId);
  }
  return sessionId;
};

export default function QuoteRequest() {
  const [sessionId] = useState(getSessionId);
  const [step, setStep] = useState<"form" | "success">("form");
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
  });
  const [selectedMods, setSelectedMods] = useState<string[]>([]);
  const [photoUrls, setPhotoUrls] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const submitMutation = trpc.quoteRequest.submit.useMutation();

  const handleModToggle = (modId: string) => {
    setSelectedMods(prev =>
      prev.includes(modId)
        ? prev.filter(id => id !== modId)
        : [...prev, modId]
    );
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    if (photoUrls.length + files.length > 10) {
      toast.error("Maximum 10 photos allowed");
      return;
    }

    setIsUploading(true);
    
    // TODO: Implement actual S3 upload
    // For now, create data URLs (in production, upload to S3)
    const newUrls: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.startsWith("image/")) {
        const dataUrl = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(file);
        });
        newUrls.push(dataUrl);
      }
    }

    setPhotoUrls(prev => [...prev, ...newUrls]);
    setIsUploading(false);
    toast.success(`${newUrls.length} photo(s) uploaded`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (photoUrls.length === 0) {
      toast.error("Please upload at least one photo of your vehicle");
      return;
    }

    if (selectedMods.length === 0) {
      toast.error("Please select at least one modification");
      return;
    }

    try {
      const result = await submitMutation.mutateAsync({
        customerName: formData.customerName,
        customerEmail: formData.customerEmail,
        customerPhone: formData.customerPhone || undefined,
        vehiclePhotos: photoUrls,
        selectedModifications: selectedMods.map(id => 
          modifications.find(m => m.id === id)?.label || id
        ),
        sessionId,
      });

      setStep("success");
      toast.success("Quote request submitted successfully!");
    } catch (error: any) {
      toast.error(error.message || "Failed to submit quote request");
    }
  };

  if (step === "success") {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />

        <div className="flex-1 flex items-center justify-center py-20">
          <Card className="max-w-2xl mx-auto p-12 bg-card border-border text-center">
            <CheckCircle2 className="w-20 h-20 text-accent mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Quote Request Submitted!</h1>
            <p className="text-xl text-muted-foreground mb-8">
              We've received your request and our AI has analyzed your vehicle photos. 
              We'll review everything and send you a detailed quote within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Back to Home
                </Button>
              </Link>
              <Link href="/dream-build">
                <Button size="lg" variant="outline">
                  Try AI Dream Build
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/hero-quote.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6">
              <FileText className="w-5 h-5 text-accent" />
              <span className="text-accent text-sm font-semibold">AI-Assisted Analysis</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white hero-title">
              Get Your Custom Quote
            </h1>
            <p className="text-xl text-white/90">
              Upload photos of your vehicle, select your desired modifications, and let our AI 
              analyze everything. We'll provide a detailed quote within 48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12">
        <div className="container max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact Information */}
            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.customerName}
                    onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                    required
                    placeholder="Your name"
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.customerEmail}
                    onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                    required
                    placeholder="your@email.com"
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.customerPhone}
                    onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
                    placeholder="(555) 123-4567"
                    className="bg-background"
                  />
                </div>
              </div>
            </Card>

            {/* Vehicle Photos */}
            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-bold mb-6">Vehicle Photos</h2>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <Label htmlFor="photos" className="cursor-pointer">
                    <span className="text-accent hover:underline">Click to upload</span> or drag and drop
                  </Label>
                  <p className="text-sm text-muted-foreground mt-2">
                    Upload 5-10 photos showing all angles of your vehicle (Max 10 photos)
                  </p>
                  <Input
                    id="photos"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>

                {photoUrls.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {photoUrls.map((url, index) => (
                      <div key={index} className="relative aspect-square rounded-lg overflow-hidden border border-border">
                        <img src={url} alt={`Vehicle ${index + 1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}

                {isUploading && (
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Uploading...</span>
                  </div>
                )}
              </div>
            </Card>

            {/* Desired Modifications */}
            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-bold mb-6">Desired Modifications</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {modifications.map((mod) => (
                  <div key={mod.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={mod.id}
                      checked={selectedMods.includes(mod.id)}
                      onCheckedChange={() => handleModToggle(mod.id)}
                    />
                    <Label htmlFor={mod.id} className="cursor-pointer">
                      {mod.label}
                    </Label>
                  </div>
                ))}
              </div>
            </Card>

            {/* Submit */}
            <div className="flex justify-center">
              <Button
                type="submit"
                size="lg"
                disabled={submitMutation.isPending}
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-12"
              >
                {submitMutation.isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <FileText className="w-5 h-5 mr-2" />
                    Submit Quote Request
                  </>
                )}
              </Button>
            </div>
          </form>
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
