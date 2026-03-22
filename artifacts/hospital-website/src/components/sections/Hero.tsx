import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { CalendarCheck, Search, Users, Activity, Clock, ShieldCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppointmentDialog } from "@/components/blocks/AppointmentDialog";
import { useState, useEffect, useRef } from "react";

function Counter({ value, suffix = "" }: { value: number, suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center flex-col-reverse lg:flex-row">
          
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
              className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-6"
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
              className="flex flex-col sm:flex-row gap-4 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <AppointmentDialog>
                <Button size="lg" className="w-full sm:w-auto rounded-full px-8 h-14 text-base shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-transform">
                  <CalendarCheck className="mr-2 w-5 h-5" />
                  Book Appointment
                </Button>
              </AppointmentDialog>
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 h-14 text-base bg-white/50 backdrop-blur-sm border-gray-200 hover:bg-gray-50" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                <Phone className="mr-2 w-5 h-5" />
                Emergency Help
              </Button>
            </motion.div>
          </div>

          {/* Visual / Glassmorphism Stats 3D */}
          <motion.div 
            className="relative lg:ml-auto w-full max-w-md mx-auto lg:max-w-none mt-10 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ perspective: "1000px" }}
          >
            {/* Blurred 3D Orb behind stats */}
            <motion.div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-tr from-primary/40 to-purple-400/40 blur-3xl -z-10"
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            />

            <motion.div 
              className="relative w-full"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="relative rounded-3xl p-2 bg-gradient-to-br from-white/60 to-white/10 border border-white/50 shadow-2xl shadow-blue-900/10 backdrop-blur-2xl">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
                
                <div className="grid grid-cols-2 gap-4 p-4 sm:p-6 relative z-10" style={{ transform: "translateZ(30px)" }}>
                  <div className="bg-white/80 rounded-2xl p-4 sm:p-5 shadow-sm border border-white hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3 sm:mb-4">
                      <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900"><Counter value={500} suffix="+" /></h3>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">Expert Doctors</p>
                  </div>
                  
                  <div className="bg-white/80 rounded-2xl p-4 sm:p-5 shadow-sm border border-white hover:shadow-md transition-shadow" style={{ transform: "translateZ(10px)" }}>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center mb-3 sm:mb-4">
                      <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900"><Counter value={50} suffix="+" /></h3>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">Departments</p>
                  </div>
                  
                  <div className="bg-white/80 rounded-2xl p-4 sm:p-5 shadow-sm border border-white hover:shadow-md transition-shadow" style={{ transform: "translateZ(15px)" }}>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-100 flex items-center justify-center mb-3 sm:mb-4">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900">24/7</h3>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">Emergency</p>
                  </div>
                  
                  <div className="bg-white/80 rounded-2xl p-4 sm:p-5 shadow-sm border border-white hover:shadow-md transition-shadow" style={{ transform: "translateZ(25px)" }}>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-100 flex items-center justify-center mb-3 sm:mb-4">
                      <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900"><Counter value={1} suffix="M+" /></h3>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">Happy Patients</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative element */}
              <div 
                className="absolute -bottom-6 -left-2 sm:-left-6 bg-white rounded-2xl p-3 sm:p-4 shadow-xl shadow-black/5 border border-gray-100 flex items-center gap-3 sm:gap-4 animate-bounce" 
                style={{ animationDuration: '3s', transform: "translateZ(40px)" }}
              >
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                </div>
                <span className="text-xs sm:text-sm font-semibold">Shortest wait times in CA</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
