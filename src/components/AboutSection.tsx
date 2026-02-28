import { useEffect, useState } from "react";
import FadeUp from "./FadeUp";
import { OrbitingCircles } from "./ui/orbiting-circles";

const TechIcon = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-card border border-white/10 p-2 md:p-3 shadow-[0_0_20px_rgba(146,65,212,0.25)] hover:border-primary/50 transition-colors">
    <img src={src} alt={alt} className="w-full h-full object-contain" />
  </div>
);

const AboutSection = () => {
  // Logic to adjust radius for mobile
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Left: Text Content */}
          <div className="flex-1 text-center md:text-left max-w-lg mb-[10rem] md:mb-0">
            <FadeUp>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                About <span className="text-gradient">Me</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm someone who thrives on creativity and curiosity. I love
                exploring different disciplines — whether it's writing code,
                designing interfaces, capturing moments through a lens, or
                bringing ideas to life with motion. I believe the best work
                happens when you refuse to stay in one lane. Every new skill
                feeds the others, and that cross-pollination is what keeps my
                work fresh and my passion alive.
              </p>
            </FadeUp>
          </div>

          {/* Right: Orbit */}
          <div className="flex-1 relative h-[400px] w-full md:h-[600px] mb-[5rem] md:mb-0">
            <FadeUp className="h-full w-full">
              <div className="relative h-full w-full flex items-center justify-center overflow-visible">
                {/* Center Label */}
                <div className="absolute z-10 text-gradient font-bold text-xl md:text-3xl">
                  My Stack
                </div>

                {/* Inner Orbit - Desktop: 140, Mobile: 80 */}
                <OrbitingCircles
                  radius={mobile ? 80 : 140}
                  duration={20}
                  iconSize={mobile ? 40 : 56}
                >
                  <TechIcon src="/orbit/adobexd.svg" alt="Adobe XD" />
                  <TechIcon src="/orbit/figma.svg" alt="Figma" />
                  <TechIcon src="/orbit/lightroom.svg" alt="Lightroom" />
                  <TechIcon src="/orbit/photoshop.svg" alt="Photoshop" />
                  <TechIcon
                    src="/orbit/after-effects.svg"
                    alt="After Effects"
                  />
                  <TechIcon
                    src="/orbit/illustrator.svg"
                    alt="Adobe Illustrator"
                  />
                </OrbitingCircles>

                {/* Outer Orbit - Desktop: 260, Mobile: 150 */}
                <OrbitingCircles
                  radius={mobile ? 150 : 260}
                  duration={35}
                  reverse
                  iconSize={mobile ? 40 : 56}
                >
                  <TechIcon src="/orbit/react.svg" alt="React" />
                  <TechIcon src="/orbit/aws.svg" alt="React" />
                  <TechIcon src="/orbit/git.svg" alt="Git" />
                  <TechIcon src="/orbit/docker.svg" alt="Docker" />
                  <TechIcon src="/orbit/davinci.png" alt="DaVinci" />
                  <TechIcon src="/orbit/tailwind.svg" alt="Tailwind" />
                  <TechIcon src="/orbit/instagram.svg" alt="Instagram" />
                  <TechIcon src="/orbit/tiktok.svg" alt="Tiktok" />
                </OrbitingCircles>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
