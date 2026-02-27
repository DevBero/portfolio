import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PlaygroundSection from "@/components/PlaygroundSection";
import ProjectsSection from "@/components/ProjectsSections";
import SkillsSection from "@/components/SkillsSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <PlaygroundSection />
    <Footer />
  </div>
);

export default Index;
