import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { AnimatedSection } from "@/components/blocks/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useSubmitContact } from "@/hooks/use-hospital";

export function Contact() {
  const submitMutation = useSubmitContact();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData, {
      onSuccess: () => setFormData({ name: "", email: "", message: "" })
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <AnimatedSection>
            <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">We're Here to Help</h3>
            <p className="text-lg text-muted-foreground mb-10">
              Have a question about our services or need help finding the right department? Reach out to our dedicated support team.
            </p>

            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Emergency 24/7</h4>
                  <p className="text-2xl font-bold text-gray-900 font-display">+1 (800) 234-5678</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Email Us</h4>
                  <p className="text-xl font-medium text-gray-900">care@medicare-plus.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-lg font-medium text-gray-900 max-w-xs">123 Medical Center Drive, Healthcare City, CA 90210</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-48 bg-slate-100 rounded-2xl relative overflow-hidden border border-slate-200 flex items-center justify-center group">
               {/* Using Unsplash for a subtle map-like texture or generic city view */}
              {/* city aerial view soft */}
              <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80" alt="Location Map" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity grayscale" />
              <div className="relative z-10">
                <Button variant="default" className="rounded-full shadow-lg">Open in Google Maps</Button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-200">
              <h4 className="text-2xl font-bold font-display text-gray-900 mb-6">Send a Message</h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Full Name</Label>
                  <Input 
                    id="contact-name" 
                    placeholder="John Doe" 
                    className="bg-white h-12" 
                    required
                    value={formData.name}
                    onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email Address</Label>
                  <Input 
                    id="contact-email" 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-white h-12" 
                    required
                    value={formData.email}
                    onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message">How can we help?</Label>
                  <Textarea 
                    id="contact-message" 
                    placeholder="Please describe your inquiry..." 
                    className="bg-white min-h-[150px] resize-none" 
                    required
                    value={formData.message}
                    onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-14 text-base rounded-xl shadow-md"
                  disabled={submitMutation.isPending}
                >
                  <Send className="w-5 h-5 mr-2" />
                  {submitMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
