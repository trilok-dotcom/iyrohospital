import { motion } from "framer-motion";
import { CalendarCheck, Search, Users, Activity, Clock, ShieldCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppointmentDialog } from "@/components/blocks/AppointmentDialog";

export function Hero() {
  const scrollToDepartments = () => {
    document.getElementById('departments')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-slate-50">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-white to-white opacity-70"></div>
        {/* Animated Blobs */}
        <div className="blob bg-blue-200 w-96 h-96 top-0 left-10"></div>
        <div className="blob bg-green-100 w-96 h-96 top-40 right-20 animation-delay-2000"></div>
        <div className="blob bg-purple-100 w-80 h-80 -bottom-20 left-1/3 animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1.5 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-6 border border-blue-200/50">
                #1 Rated Hospital in Healthcare City
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Advanced Care. <br />
              <span className="text-gradient">Trusted Excellence.</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Providing world-class healthcare with compassion and precision.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <AppointmentDialog>
                <Button size="lg" className="rounded-full px-8 h-14 text-base shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-transform">
                  <CalendarCheck className="mr-2 w-5 h-5" />
                  Book Appointment
                </Button>
              </AppointmentDialog>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base bg-white/50 backdrop-blur-sm border-gray-200 hover:bg-gray-50" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                <Phone className="mr-2 w-5 h-5" />
                Emergency Help
              </Button>
            </motion.div>
          </div>

          {/* Visual / Glassmorphism Stats */}
          <motion.div 
            className="relative lg:ml-auto w-full max-w-md mx-auto lg:max-w-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {/* The generated image could go here, but a beautiful glass UI is cleaner based on the prompt's request for "glassmorphism card overlay" */}
            <div className="relative rounded-3xl p-2 bg-gradient-to-br from-white/60 to-white/10 border border-white/50 shadow-2xl shadow-blue-900/10 backdrop-blur-2xl">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
              
              <div className="grid grid-cols-2 gap-4 p-6 relative z-10">
                <div className="bg-white/80 rounded-2xl p-5 shadow-sm border border-white hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-gray-900">500+</h3>
                  <p className="text-sm text-gray-500 font-medium">Expert Doctors</p>
                </div>
                
                <div className="bg-white/80 rounded-2xl p-5 shadow-sm border border-white hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Activity className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-gray-900">50+</h3>
                  <p className="text-sm text-gray-500 font-medium">Departments</p>
                </div>
                
                <div className="bg-white/80 rounded-2xl p-5 shadow-sm border border-white hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-gray-900">24/7</h3>
                  <p className="text-sm text-gray-500 font-medium">Emergency</p>
                </div>
                
                <div className="bg-white/80 rounded-2xl p-5 shadow-sm border border-white hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-gray-900">1M+</h3>
                  <p className="text-sm text-gray-500 font-medium">Happy Patients</p>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl shadow-black/5 border border-gray-100 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
              </div>
              <span className="text-sm font-semibold">Shortest wait times in CA</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
