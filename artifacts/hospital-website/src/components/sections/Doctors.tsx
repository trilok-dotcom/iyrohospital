import { AnimatedSection } from "@/components/blocks/AnimatedSection";
import { Button } from "@/components/ui/button";
import { AppointmentDialog } from "@/components/blocks/AppointmentDialog";
import { motion } from "framer-motion";

const doctors = [
  { name: "Dr. Rakesh Sharma", spec: "Cardiologist", exp: "18 years", initials: "RS", color: "bg-blue-100 text-blue-700" },
  { name: "Dr. Priya Nair", spec: "Neurologist", exp: "14 years", initials: "PN", color: "bg-indigo-100 text-indigo-700" },
  { name: "Dr. Arjun Reddy", spec: "Orthopedic Surgeon", exp: "12 years", initials: "AR", color: "bg-emerald-100 text-emerald-700" },
  { name: "Dr. Sneha Iyer", spec: "Pediatrician", exp: "10 years", initials: "SI", color: "bg-purple-100 text-purple-700" },
];

export function Doctors() {
  return (
    <section id="doctors" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <AnimatedSection className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">Our Medical Team</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">Meet Our Specialists</h3>
            <p className="text-lg text-muted-foreground">
              Our team comprises internationally trained specialists dedicated to providing the highest standard of clinical care.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Button variant="outline" className="rounded-full px-6 w-full md:w-auto">View All Doctors</Button>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {doctors.map((doc, i) => (
            <AnimatedSection key={i} delay={0.1 * i} className="h-full">
              <motion.div 
                whileHover={{ scale: 1.04, y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group h-full rounded-3xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-2xl hover:border-slate-200 flex flex-col justify-between"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div style={{ transform: "translateZ(20px)" }}>
                  <div className="flex items-center gap-5 mb-6">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-xl sm:text-2xl font-bold font-display shadow-inner shrink-0 ${doc.color}`}>
                      {doc.initials}
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 font-display group-hover:text-primary transition-colors">{doc.name}</h4>
                      <p className="text-primary font-medium text-sm sm:text-base">{doc.spec}</p>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">{doc.exp} experience</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 sm:gap-3 mt-auto" style={{ transform: "translateZ(30px)" }}>
                  <AppointmentDialog defaultDepartment={doc.spec.toLowerCase()}>
                    <Button className="w-full rounded-xl bg-slate-50 text-gray-900 hover:bg-primary hover:text-white border-none shadow-none text-sm sm:text-base px-2 sm:px-4">
                      Book Visit
                    </Button>
                  </AppointmentDialog>
                  <Button variant="outline" className="rounded-xl px-3 sm:px-4 text-sm sm:text-base">
                    Profile
                  </Button>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
