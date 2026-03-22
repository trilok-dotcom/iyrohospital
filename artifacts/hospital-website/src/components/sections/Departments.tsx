import { useState } from "react";
import { Search, HeartPulse, Brain, Bone, Baby, Activity, Microscope } from "lucide-react";
import { Input } from "@/components/ui/input";
import { AnimatedSection } from "@/components/blocks/AnimatedSection";
import { AppointmentDialog } from "@/components/blocks/AppointmentDialog";
import { Button } from "@/components/ui/button";

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
            className="pl-12 h-14 rounded-full bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-primary/20 text-lg shadow-sm w-full"
            placeholder="Find doctors, departments, services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredDeps.map((dept, i) => (
            <AnimatedSection key={dept.name} delay={0.1 * (i % 6)}>
              <AppointmentDialog defaultDepartment={dept.id}>
                <div 
                  className="group relative h-[220px] w-full cursor-pointer [perspective:1000px]"
                >
                  <div className="absolute inset-0 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front of card */}
                    <div className="absolute inset-0 bg-slate-50 border border-slate-100 rounded-3xl p-6 flex flex-col items-center justify-center [backface-visibility:hidden] shadow-sm">
                      <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                        <dept.icon className="w-10 h-10 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">{dept.name}</h4>
                    </div>

                    {/* Back of card */}
                    <div className="absolute inset-0 bg-primary text-white rounded-3xl p-6 flex flex-col items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-xl shadow-primary/20">
                      <h4 className="text-xl font-bold mb-2">{dept.name}</h4>
                      <p className="text-blue-100 text-center text-sm mb-6">{dept.desc}</p>
                      <Button variant="secondary" className="rounded-full bg-white text-primary hover:bg-slate-100">
                        Book Now
                      </Button>
                    </div>
                  </div>
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
