import { Navbar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { ContactSection } from "../components/ContactSection";
import StarBackground from "../components/StarBackground";

export const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <StarBackground />
      <Navbar />
      <main>
        <HeroSection />
        {/* <AboutSection />
        <SkillsSection />
        <ProjectsSection /> */}
        <ContactSection />
      </main>
    </div>
  );
};
