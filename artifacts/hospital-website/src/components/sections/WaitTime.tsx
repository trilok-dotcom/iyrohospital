import { motion } from "framer-motion";
import { Coffee, Wifi, BookOpen, Sofa, Pill, Clock } from "lucide-react";
import { AnimatedSection } from "@/components/blocks/AnimatedSection";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const amenities = [
  { icon: Wifi, title: "High-Speed WiFi", desc: "Stay connected while you wait" },
  { icon: Coffee, title: "Premium Cafeteria", desc: "Fresh coffee and healthy meals" },
  { icon: Sofa, title: "Relaxation Lounge", desc: "Quiet zones with comfortable seating" },
  { icon: BookOpen, title: "Health Library", desc: "Educational resources and magazines" },
  { icon: Pill, title: "24/7 Pharmacy", desc: "Collect prescriptions instantly" },
];

export function WaitTime() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar on load
    const timer = setTimeout(() => setProgress(65), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="experience" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-50/50 rounded-l-full blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <AnimatedSection>
            <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">The Experience</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">Designed Around Your Time</h3>
            <p className="text-lg text-muted-foreground mb-8">
              We aim to reduce waiting stress and improve patient comfort.
            </p>
            
            {/* Wait time UI Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-black/5 border border-slate-100 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Outpatient Dept.</h4>
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                      </span>
                      <span className="text-sm text-gray-500 font-medium">Live Status</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-2xl font-bold text-gray-900 font-display">~15 min</span>
                  <span className="text-sm text-gray-500">Current Wait</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-primary">You are next</span>
                  <span className="text-gray-500">Slot: 2:30 PM</span>
                </div>
                <Progress value={progress} className="h-3 bg-slate-100" />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-black/5 border border-slate-100">
              <h4 className="text-xl font-bold font-display text-gray-900 mb-6">While You Wait</h4>
              <div className="space-y-6">
                {amenities.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">{item.title}</h5>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
