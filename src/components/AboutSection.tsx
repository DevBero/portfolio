import FadeUp from "./FadeUp";

const AboutSection = () => (
  <section id="about" className="py-24 relative">
    <div className="container mx-auto px-6 max-w-3xl text-center">
      <FadeUp>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          About <span className="text-gradient">Me</span>
        </h2>
      </FadeUp>
      <FadeUp delay={0.15}>
        <p className="text-muted-foreground text-lg leading-relaxed">
          I'm someone who thrives on creativity and curiosity. I love exploring
          different disciplines — whether it's writing code, designing
          interfaces, capturing moments through a lens, or bringing ideas to
          life with motion. I believe the best work happens when you refuse to
          stay in one lane. Every new skill feeds the others, and that
          cross-pollination is what keeps my work fresh and my passion alive.
        </p>
      </FadeUp>
    </div>
  </section>
);

export default AboutSection;
