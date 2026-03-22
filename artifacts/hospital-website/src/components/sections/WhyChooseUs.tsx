import { ShieldCheck, Award, HeartHandshake, Clock } from "lucide-react";
import { AnimatedSection } from "@/components/blocks/AnimatedSection";

const features = [
  {
    icon: Award,
    title: "Experienced Doctors",
    desc: "Equipped with latest medical technology and state-of-the-art operation theaters for precise treatments."
  },
  {
    icon: HeartHandshake,
    title: "Patient-Centered Approach",
    desc: "Every protocol is designed around your comfort, privacy, and speed of recovery."
  },
  {
    icon: ShieldCheck,
    title: "Advanced Medical Technology",
    desc: "A multidisciplinary board of certified doctors collaborating for your complete wellness."
  },
  {
    icon: Clock,
    title: "24/7 Emergency Care",
    desc: "Round-the-clock emergency response with dedicated trauma specialists always on standby."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-400 tracking-wider uppercase mb-3">Our Standards</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Why Thousands Trust Us</h3>
          <p className="text-lg text-slate-300">
            We don't just treat symptoms; we deliver a comprehensive healthcare experience that prioritizes your peace of mind.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          {features.map((feat, i) => (
            <AnimatedSection key={i} delay={0.1 * i}>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:bg-slate-800 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6">
                  <feat.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h4 className="text-2xl font-bold font-display mb-3">{feat.title}</h4>
                <p className="text-slate-400 leading-relaxed text-lg">{feat.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
