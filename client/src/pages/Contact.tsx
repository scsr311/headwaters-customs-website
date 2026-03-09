import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";
import { trpc } from "@/lib/trpc";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const sendMessage = trpc.contact.send.useMutation({
    onSuccess: () => {
      toast.success("Message sent! We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    },
    onError: () => {
      toast.error("Failed to send message. Please call us directly at 406-451-1394.");
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage.mutate(formData);
  };

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
              Get In Touch
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold mt-4 mb-6 text-white hero-title">
              Let's Talk About Your Build
            </h1>
            <p className="text-xl text-white/90">
              Have a question about our services? Ready to start your project? We're here to help. 
              Reach out and let's discuss how we can bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="p-8 bg-card border-border">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="your@email.com"
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 123-4567"
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      placeholder="Tell us about your project..."
                      rows={6}
                      className="bg-background"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                    disabled={sendMessage.isPending}
                  >
                    {sendMessage.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-8 bg-card border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Location</h3>
                    <p className="text-muted-foreground">
                      5088 US Hwy 287 N<br />
                      Ennis, MT 59729<br />
                      <span className="text-sm">(1.5 mi north of Ennis)</span>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Phone</h3>
                    <p className="text-muted-foreground">
                      Call us to discuss your project<br />
                      <a href="tel:406-451-1394" className="text-accent hover:underline">406-451-1394 (Mike)</a><br />
                      <a href="tel:816-645-7054" className="text-accent hover:underline">816-645-7054 (Clay)</a>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      Send us your questions<br />
                      <a href="mailto:mikehwcmt@gmail.com" className="text-accent hover:underline">mikehwcmt@gmail.com</a>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p>Saturday: By Appointment</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-card/30">
        <div className="container">
          <Card className="overflow-hidden border-border">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="w-12 h-12 text-accent mx-auto" />
                <p className="text-muted-foreground">Map integration coming soon</p>
                <p className="text-sm text-muted-foreground">5088 US Hwy 287 N, Ennis, MT 59729</p>
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
