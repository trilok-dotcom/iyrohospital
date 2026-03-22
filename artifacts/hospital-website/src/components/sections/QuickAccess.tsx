import { CalendarPlus, UserCheck, Stethoscope, FileText, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/blocks/AnimatedSection";
import { AppointmentDialog } from "@/components/blocks/AppointmentDialog";

const quickLinks = [
  {
    title: "Book Appointment",
    description: "Schedule your visit instantly",
    icon: CalendarPlus,
    color: "bg-blue-50 text-blue-600",
    action: "dialog"
  },
  {
    title: "Find a Doctor",
    description: "Search by specialty or name",
    icon: UserCheck,
    color: "bg-indigo-50 text-indigo-600",
    action: "scroll",
    target: "doctors"
  },
  {
    title: "Emergency Services",
    description: "Get immediate medical care",
    icon: Stethoscope,
    color: "bg-red-50 text-red-500",
    action: "scroll",
    target: "contact"
  },
  {
    title: "Check Reports",
    description: "Access your medical records",
    icon: FileText,
    color: "bg-emerald-50 text-emerald-600",
    action: "toast",
    message: "Patient portal integration required."
  },
  {
    title: "Locations",
    description: "Find our facilities easily",
    icon: MapPin,
    color: "bg-orange-50 text-orange-500",
    action: "scroll",
    target: "contact"
  }
];

export function QuickAccess() {
  
  const handleCardClick = (link: typeof quickLinks[0]) => {
    if (link.action === "scroll" && link.target) {
      document.getElementById(link.target)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative -mt-10 z-20 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-black/5 border border-slate-100">
            <h2 className="text-xl font-bold mb-6 font-display text-gray-900">Quick Access</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {quickLinks.map((link, idx) => {
                const CardContent = (
                  <div 
                    className="group cursor-pointer rounded-2xl p-5 border border-slate-100 bg-white hover:bg-slate-50 hover:border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    onClick={() => handleCardClick(link)}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${link.color}`}>
                      <link.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{link.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{link.description}</p>
                  </div>
                );

                if (link.action === "dialog") {
                  return (
                    <AppointmentDialog key={idx}>
                      {CardContent}
                    </AppointmentDialog>
                  );
                }

                return (
                  <div key={idx}>
                    {CardContent}
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
