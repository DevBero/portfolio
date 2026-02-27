import FadeUp from "./FadeUp";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Aura — Design System",
    description:
      "A comprehensive design system built for scalability. Tokens, components, and documentation all in one.",
    tags: ["React", "TypeScript", "Figma"],
  },
  {
    title: "Pulse — Analytics Dashboard",
    description:
      "Real-time analytics platform with beautiful data visualizations and predictive insights.",
    tags: ["Next.js", "D3.js", "PostgreSQL"],
  },
  {
    title: "Drift — Mobile App",
    description:
      "A mindfulness and focus app with smooth animations and immersive audio experiences.",
    tags: ["React Native", "Motion Design", "UX"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-32 relative">
    <div className="container mx-auto px-6">
      <FadeUp>
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3 text-center">
          Portfolio
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Selected Projects
        </h2>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <FadeUp key={project.title} delay={i * 0.12}>
            <div className="group relative rounded-xl bg-card border border-border card-hover overflow-hidden h-full flex flex-col cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-primary/10 via-surface-light to-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/5" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all glow-purple-sm">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
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
