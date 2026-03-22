import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Activity, Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppointmentDialog } from "@/components/blocks/AppointmentDialog";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg border-b border-border shadow-md py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
              <Activity className="text-white w-6 h-6" />
            </div>
            <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-foreground">
              Ramaiah <span className="text-primary">Memorial Hospital</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection('departments')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Departments</button>
            <button onClick={() => scrollToSection('doctors')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Doctors</button>
            <button onClick={() => scrollToSection('experience')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Services</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact</button>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <AppointmentDialog>
                <Button className="rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                  Book Appointment <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </AppointmentDialog>
            </div>
            
            <button 
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-lg py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-4">
          <button onClick={() => scrollToSection('home')} className="text-left text-lg font-medium p-2 hover:bg-muted rounded-lg w-full">Home</button>
          <button onClick={() => scrollToSection('departments')} className="text-left text-lg font-medium p-2 hover:bg-muted rounded-lg w-full">Departments</button>
          <button onClick={() => scrollToSection('doctors')} className="text-left text-lg font-medium p-2 hover:bg-muted rounded-lg w-full">Doctors</button>
          <button onClick={() => scrollToSection('experience')} className="text-left text-lg font-medium p-2 hover:bg-muted rounded-lg w-full">Services</button>
          <button onClick={() => scrollToSection('contact')} className="text-left text-lg font-medium p-2 hover:bg-muted rounded-lg w-full">Contact</button>
          <div className="pt-4 border-t border-border w-full">
            <AppointmentDialog>
              <Button className="w-full rounded-full" onClick={() => setMobileMenuOpen(false)}>Book Appointment</Button>
            </AppointmentDialog>
          </div>
        </div>
      )}
    </header>
  );
}
