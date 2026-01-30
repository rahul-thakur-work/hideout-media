import Header from "@/components/Header";
import VideoHero from "@/components/VideoHero";
import AboutComedy from "@/components/AboutComedy";
import BrandSlider from "@/components/BrandSlider";
import ServicesSection from "@/components/ServicesSection";
import ComedianRoster from "@/components/ComedianRoster";
import ComedyClubSection from "@/components/ComedyClubSection";
import WorkShowcase from "@/components/WorkShowcase";
import MinimalContact from "@/components/MinimalContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#2f0003]">
      <Header />
      <main className="relative">
        <VideoHero />
        <AboutComedy />
        <BrandSlider />
        <ServicesSection />
        <ComedianRoster />
        <WorkShowcase />
        <ComedyClubSection />
        
        <MinimalContact />
        <Footer />
      </main>
    </div>
  );
}
