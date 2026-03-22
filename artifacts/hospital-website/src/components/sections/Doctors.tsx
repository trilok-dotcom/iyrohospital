import { AnimatedSection } from "@/components/blocks/AnimatedSection";
import { Button } from "@/components/ui/button";
import { AppointmentDialog } from "@/components/blocks/AppointmentDialog";

const doctors = [
  { name: "Dr. Sarah Mitchell", spec: "Cardiologist", exp: "15 years", initials: "SM", color: "bg-blue-100 text-blue-700" },
  { name: "Dr. James Chen", spec: "Neurologist", exp: "12 years", initials: "JC", color: "bg-indigo-100 text-indigo-700" },
  { name: "Dr. Priya Sharma", spec: "Orthopedic Surgeon", exp: "10 years", initials: "PS", color: "bg-emerald-100 text-emerald-700" },
  { name: "Dr. Robert Kim", spec: "Oncologist", exp: "18 years", initials: "RK", color: "bg-purple-100 text-purple-700" },
  { name: "Dr. Emily Watson", spec: "Pediatrician", exp: "8 years", initials: "EW", color: "bg-pink-100 text-pink-700" },
  { name: "Dr. Michael Torres", spec: "Radiologist", exp: "14 years", initials: "MT", color: "bg-orange-100 text-orange-700" },
];

export function Doctors() {
  return (
    <section id="doctors" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <AnimatedSection className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">Our Medical Team</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">Meet Our Specialists</h3>
            <p className="text-lg text-muted-foreground">
              Our team comprises internationally trained specialists dedicated to providing the highest standard of clinical care.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Button variant="outline" className="rounded-full px-6">View All Doctors</Button>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc, i) => (
            <AnimatedSection key={i} delay={0.1 * i}>
              <div className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300">
                <div className="flex items-center gap-5 mb-6">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold font-display shadow-inner ${doc.color}`}>
                    {doc.initials}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 font-display group-hover:text-primary transition-colors">{doc.name}</h4>
                    <p className="text-primary font-medium">{doc.spec}</p>
                    <p className="text-sm text-gray-500 mt-1">{doc.exp} experience</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <AppointmentDialog defaultDepartment={doc.spec.toLowerCase()}>
                    <Button className="w-full rounded-xl bg-slate-50 text-gray-900 hover:bg-primary hover:text-white border-none shadow-none">
                      Book Visit
                    </Button>
                  </AppointmentDialog>
                  <Button variant="outline" className="rounded-xl px-4">
                    Profile
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
