import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { QuickAccess } from "@/components/sections/QuickAccess";
import { Departments } from "@/components/sections/Departments";
import { WaitTime } from "@/components/sections/WaitTime";
import { Doctors } from "@/components/sections/Doctors";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <QuickAccess />
        <Departments />
        <WaitTime />
        <WhyChooseUs />
        <Doctors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
