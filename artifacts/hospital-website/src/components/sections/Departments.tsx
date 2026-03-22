import { useState } from "react";
import { Search, HeartPulse, Brain, Bone, Baby, Eye, Ear, Sparkles, Activity, Stethoscope, Microscope } from "lucide-react";
import { Input } from "@/components/ui/input";
import { AnimatedSection } from "@/components/blocks/AnimatedSection";
import { AppointmentDialog } from "@/components/blocks/AppointmentDialog";

const departments = [
  { id: 'cardiology', name: "Cardiology", icon: HeartPulse, desc: "Heart & vascular care" },
  { id: 'neurology', name: "Neurology", icon: Brain, desc: "Brain & nervous system" },
  { id: 'orthopedics', name: "Orthopedics", icon: Bone, desc: "Bones, joints & muscles" },
  { id: 'oncology', name: "Oncology", icon: Activity, desc: "Cancer care & treatment" },
  { id: 'pediatrics', name: "Pediatrics", icon: Baby, desc: "Children's healthcare" },
  { id: 'nephrology', name: "Nephrology", icon: Microscope, desc: "Kidney care & treatment" },
];

export function Departments() {
  const [search, setSearch] = useState("");
  
  const filteredDeps = departments.filter(d => 
    d.name.toLowerCase().includes(search.toLowerCase()) || 
    d.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="departments" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">Specialties</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">Centers of Excellence</h3>
          <p className="text-lg text-muted-foreground">
            Comprehensive care across multiple disciplines, delivered by world-class specialists using state-of-the-art technology.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="max-w-xl mx-auto mb-12 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input 
            className="pl-12 h-14 rounded-full bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-primary/20 text-lg shadow-sm"
            placeholder="Find doctors, departments, services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {filteredDeps.map((dept, i) => (
            <AnimatedSection key={dept.name} delay={0.1 * (i % 5)}>
              <AppointmentDialog defaultDepartment={dept.id}>
                <div className="group cursor-pointer h-full bg-slate-50 hover:bg-primary border border-transparent hover:border-primary/20 rounded-2xl p-6 transition-all duration-300 text-center flex flex-col items-center justify-center hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <dept.icon className="w-8 h-8 text-primary group-hover:text-primary transition-colors" />
                  </div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-white transition-colors">{dept.name}</h4>
                  <p className="text-sm text-gray-500 mt-2 group-hover:text-blue-100 transition-colors">{dept.desc}</p>
                </div>
              </AppointmentDialog>
            </AnimatedSection>
          ))}
        </div>
        
        {filteredDeps.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No departments found matching your search.
          </div>
        )}
      </div>
    </section>
  );
}
