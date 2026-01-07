import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandsStrip from "@/components/BrandsStrip";
import WorkSection from "@/components/WorkSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8ddbf] text-[#2f0003]">
      <Header />
      <main className="relative">
        <Hero />
        <BrandsStrip />
        <WorkSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
