import { Code2, Palette, Camera, Film } from "lucide-react";
import FadeUp from "./FadeUp";

const skills = [
  {
    icon: Code2,
    title: "Engineering",
    description:
      "Building performant, scalable applications with modern frameworks.",
    tools: ["React", "Next.js", "TypeScript", "Node.js"],
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "Crafting intuitive interfaces and design systems that delight users.",
    tools: ["Figma", "UI/UX", "Design Systems", "Prototyping"],
  },
  {
    icon: Camera,
    title: "Visuals",
    description: "Capturing and editing visuals that tell compelling stories.",
    tools: ["Photoshop", "Lightroom", "Photography", "Retouching"],
  },
  {
    icon: Film,
    title: "Motion",
    description:
      "Creating dynamic motion graphics and cinematic video content.",
    tools: ["After Effects", "Premiere Pro", "Motion Design", "Color Grading"],
  },
];

const SkillsSection = () => (
  <section id="what-i-do" className="py-32 relative">
    <div className="container mx-auto px-6">
      <FadeUp>
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3 text-center">
          Capabilities
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          What I Do
        </h2>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {skills.map((skill, i) => (
          <FadeUp key={skill.title} delay={i * 0.1}>
            <div className="group relative p-6 rounded-xl bg-card border border-border card-hover h-full">
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary/5 to-transparent" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
