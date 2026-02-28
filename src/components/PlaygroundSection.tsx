"use client";

import FadeUp from "./FadeUp";
import { motion } from "framer-motion";
import { ComicText } from "./ui/comic-text";
const items = [
  {
    title: "Identity Systems — Simplifyd",
    category: "Brand Design",
    span: "md:col-span-2 md:row-span-2",
    image: "/playground/simplifyd-logo.png",
  },
  {
    title: "Cinematic Visuals",
    category: "Photography",
    span: "md:col-span-1 md:row-span-1",
    image: "/playground/wedding.jpeg",
  },
  {
    title: "Dynamic Motion Content",
    category: "Videography",
    span: "md:col-span-1 md:row-span-1",
    video: "/playground/social-media-video.MP4",
  },
  {
    title: "Kinetic Typography",
    category: "Motion Design",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Commercial Brand Story",
    category: "Photography",
    span: "md:col-span-1 md:row-span-1",
    image: "/playground/brand.JPG",
  },
];

const PlaygroundSection = () => (
  <section id="playground" className="py-32 relative bg-black">
    <div className="container mx-auto px-6">
      <FadeUp>
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3 text-center">
          Creative Lab
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 font-poppins text-white">
          The Playground
        </h2>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto auto-rows-[250px]">
        {items.map((item, i) => (
          <FadeUp key={item.title} delay={i * 0.08} className={item.span}>
            <motion.div
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl bg-card border border-white/10 overflow-hidden cursor-pointer group h-full"
            >
              {item.video ? (
                <video
                  src={item.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
              ) : item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
              ) : (
                <div className="flex w-full items-center justify-center h-full bg-surface-light/30">
                  <ComicText>Comic Text</ComicText>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-10">
                <p className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.category}
                </p>
                <h3 className="text-lg font-bold text-white font-poppins">
                  {item.title}
                </h3>
              </div>

              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default PlaygroundSection;
