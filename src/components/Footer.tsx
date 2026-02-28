import FadeUp from "./FadeUp";
import { Github, Linkedin, Download } from "lucide-react";

const Footer = () => (
  <section id="contact" className="pb-10 relative">
    <div className="container mx-auto px-6 text-center">
      <FadeUp>
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
          Get In Touch
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Connect</h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
          Have a project in mind or just want to chat? I'm always open to new
          opportunities and creative collaborations.
        </p>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="flex items-center justify-center gap-4 mb-16">
          <a
            href="https://de.linkedin.com/in/berat-uzun-289307222"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all card-hover"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/DevBero"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all card-hover"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors glow-purple inline-flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>
      </FadeUp>

      <div className="border-t border-border pt-8">
        <p className="text-sm text-muted-foreground">
          © 2026 Berat. Built with passion and pixels.
        </p>
      </div>
    </div>
  </section>
);

export default Footer;
