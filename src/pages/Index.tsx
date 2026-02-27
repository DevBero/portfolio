// import Navbar from "@/components/Navbar";
// import HeroSection from "@/components/HeroSection";
// import SkillsSection from "@/components/SkillsSection";
// import ProjectsSection from "@/components/ProjectsSection";
// import PlaygroundSection from "@/components/PlaygroundSection";
// import FooterSection from "@/components/FooterSection";

import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PlaygroundSection from "@/components/PlaygroundSection";
import ProjectsSection from "@/components/ProjectsSections";
import SkillsSection from "@/components/SkillsSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    {/* <Header/> */}
    <HeroSection/>
    <SkillsSection/>
    <ProjectsSection/>
    <PlaygroundSection/>
    <Footer/>
  </div>
);

export default Index;
