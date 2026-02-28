import FadeUp from "./FadeUp";
import { ArrowUpRight } from "lucide-react";
import { Lens } from "./ui/lens";

const projects = [
  {
    title: "Finance Advisor — Brand & Web Experience",
    description:
      "Complete visual identity and website for a finance advisor. Designed logo, branding system, and corporate identity, then built a modern, trust-focused website aligned with the brand strategy.",
    tags: ["Branding", "Logo Design", "CI/CD", "Web Design", "Frontend"],
    image: "/projects/baharfinanzen.png",
    label: "baharfinazen.de",
    link: "https://baharfinanzen.de",
  },
  {
    title: "HospitalFlow — Room & Patient Management App",
    description:
      "A hospital management system for controlling room bookings, patient assignments, and medical notes. Includes role-based access for admins and cleaners, real-time room status updates. Not visitable since hosted in private network.",
    tags: [
      "App Development",
      "User Roles",
      "Dashboard",
      "Healthcare",
      "AWS Cognito",
    ],
    image: "/projects/wischwunder.png",
    label: "wischwunder.com",
  },
  {
    title: "Simplifyd — Modern Digital Solutions Branding",
    description:
      "Crafted a cohesive brand identity and web presence for my digital agency. Developed the visual language from the logo and color palette to the high-performance website architecture, ensuring a seamless end-to-end user experience.",
    tags: [
      "Branding",
      "Visual Identity",
      "Logo Design",
      "Product Strategy",
      "Vite",
      "AWS Cognito",
    ],
    image: "/projects/simplifyd.png",
    label: "simplifyd.site",
    link: "https://simplifyd.site",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-32 relative bg-background">
    <div className="container mx-auto px-6">
      <FadeUp>
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3 text-center">
          Portfolio
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 font-poppins text-white">
          Selected Projects
        </h2>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <FadeUp key={project.title} delay={i * 0.12}>
            <div className="group relative rounded-2xl bg-card border border-white/10 card-hover overflow-hidden h-full flex flex-col cursor-pointer transition-all duration-500">
              <div className="relative h-56 w-full overflow-hidden">
                <Lens
                  zoomFactor={2}
                  lensSize={150}
                  isStatic={false}
                  ariaLabel="Zoom Area"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </Lens>
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />

                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors font-poppins">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex items-center flex-col justify-between mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md bg-secondary text-muted-foreground border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    className="w-full mt-8 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-[0_0_15px_rgba(146,65,212,0.3)]"
                  >
                    {project.label}
                    {project.link ? (
                      <ArrowUpRight className="w-5 h-5" />
                    ) : undefined}
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
