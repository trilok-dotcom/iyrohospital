import { CalendarPlus, UserCheck, Stethoscope, FileText } from "lucide-react";
import { AnimatedSection } from "@/components/blocks/AnimatedSection";
import { AppointmentDialog } from "@/components/blocks/AppointmentDialog";
import { useState, useRef } from "react";

const quickLinks = [
  {
    title: "Book Appointment",
    description: "Schedule your visit instantly",
    icon: CalendarPlus,
    color: "bg-blue-50 text-blue-600",
    action: "dialog"
  },
  {
    title: "Find Doctor",
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
    title: "View Reports",
    description: "Access your medical records",
    icon: FileText,
    color: "bg-emerald-50 text-emerald-600",
    action: "toast",
    message: "Patient portal integration required."
  }
];

function TiltCard({ link, onClick }: { link: typeof quickLinks[0], onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const rotateY = ((mouseX / width) - 0.5) * 30; // max 15deg
    const rotateX = ((mouseY / height) - 0.5) * -30;
    
    setRotation({ x: rotateX, y: rotateY });
    setGlare({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
      opacity: 0.15
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setGlare({ ...glare, opacity: 0 });
  };

  return (
    <div 
      style={{ perspective: "1000px" }}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d"
        }}
        className="group relative cursor-pointer h-full rounded-2xl p-5 border border-slate-100 bg-white hover:bg-slate-50 hover:border-slate-200 transition-all duration-200 shadow-sm hover:shadow-xl"
      >
        <div 
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-200"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, white, transparent 60%)`,
            opacity: glare.opacity,
            transform: "translateZ(1px)"
          }}
        />
        <div style={{ transform: "translateZ(20px)" }}>
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${link.color}`}>
            <link.icon className="w-6 h-6" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">{link.title}</h3>
          <p className="text-xs text-gray-500 leading-relaxed">{link.description}</p>
        </div>
      </div>
    </div>
  );
}

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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {quickLinks.map((link, idx) => {
                if (link.action === "dialog") {
                  return (
                    <AppointmentDialog key={idx}>
                      <TiltCard link={link} onClick={() => {}} />
                    </AppointmentDialog>
                  );
                }

                return (
                  <TiltCard key={idx} link={link} onClick={() => handleCardClick(link)} />
                );
              })}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
