import FadeUp from "./FadeUp";
import { motion } from "framer-motion";

const items = [
  { title: "Neon Portraits", category: "Photography", span: "md:col-span-2 md:row-span-2" },
  { title: "Kinetic Type", category: "Motion", span: "" },
  { title: "Urban Geometry", category: "Photography", span: "" },
  { title: "Liquid Flow", category: "Motion", span: "md:col-span-2" },
  { title: "Abstract Series", category: "Experiment", span: "" },
];

const PlaygroundSection = () => (
  <section id="playground" className="py-32 relative">
    <div className="container mx-auto px-6">
      <FadeUp>
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3 text-center">
          Creative Lab
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          The Playground
        </h2>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto auto-rows-[200px]">
        {items.map((item, i) => (
          <FadeUp key={item.title} delay={i * 0.08} className={item.span}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-xl bg-gradient-to-br from-surface-light to-card border border-border overflow-hidden cursor-pointer group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-card via-card/80 to-transparent">
                <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">
                  {item.category}
                </p>
                <h3 className="text-base font-semibold">{item.title}</h3>
              </div>
            </motion.div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default PlaygroundSection;
