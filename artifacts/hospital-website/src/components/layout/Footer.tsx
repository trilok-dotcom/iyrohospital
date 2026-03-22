import { Link } from "wouter";
import { Activity, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={scrollToTop}>
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <Activity className="text-white w-6 h-6" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                MediCare<span className="text-primary">+</span>
              </span>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm">
              Delivering premium healthcare experiences with world-class specialists and state-of-the-art technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#departments" className="hover:text-primary transition-colors">Departments</a></li>
              <li><a href="#doctors" className="hover:text-primary transition-colors">Our Doctors</a></li>
              <li><a href="#experience" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">For Patients</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-primary transition-colors">Patient Portal</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Online Reports</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Billing & Insurance</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Visitor Guidelines</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} MediCare+ Hospital. All rights reserved.</p>
          <p>Designed for excellence.</p>
        </div>
      </div>
    </footer>
  );
}
