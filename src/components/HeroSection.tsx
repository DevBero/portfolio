import { motion } from "motion/react";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShinyButton } from "@/components/ui/shiny-button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import Meteors from "./Meteors";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Meteors count={20} />
      </div>

      <div className="relative z-10 mx-auto w-full px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 1.7 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm md:text-base bg-white/5"
            >
              <AnimatedShinyText>
                ✨ Not your typical Software Engineer
              </AnimatedShinyText>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-white font-poppins">
              <motion.span
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
                className="inline-block"
              >
                Hi, i&apos;m <AuroraText>Berat</AuroraText> 👋🏼
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 2.5 }}
              className="mt-5 text-lg md:text-xl text-muted-foreground max-w-xl font-poppins"
            >
              I design and build digital products end-to-end — from UX/UI and
              engineering to motion, photo, and video. If you want someone who
              turns ideas into polished experiences, you’re in the right place.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 2.7 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <ShinyButton>View my Projects</ShinyButton>
              <InteractiveHoverButton>
                Let&apos;s connect
              </InteractiveHoverButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
            className="relative"
          >
            <div className="relative mx-auto w-[280px] h-[360px] md:w-[360px] md:h-[460px] lg:w-[420px] lg:h-[520px] rounded-3xl overflow-hidden">
              <img
                src="/berat-uzun.png"
                alt="Berat Uzun - Portfolio"
                className="object-cover"
              />
            </div>
            <div className="absolute -inset-4 bg-purple-500/20 blur-3xl -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
