"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { ShimmerButton } from "./ui/shimmer-button";
import { Navigation } from "./Navigation";

const Header = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // 1. Background Logic: Change style after 50px
    setIsScrolled(latest > 50);

    // 2. Visibility Logic (Transferred from reference)
    // Show if: scrolling up OR at the very top (less than 10px)
    const isScrollingUp = latest < lastScrollY;
    const isAtTop = latest < 10;

    if (isScrollingUp || isAtTop) {
      setIsVisible(true);
    } else if (latest > 150) {
      // Hide only if we've scrolled down a bit to prevent flickering at the top
      setIsVisible(false);
    }

    setLastScrollY(latest);
  });

  return (
    <motion.header
      // Framer Motion handles the initial page-load fade-down
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        opacity: { duration: 1.2, delay: 0.5, ease: "easeOut" },
        y: {
          type: "spring",
          stiffness: 50,
          damping: 20,
          delay: 0.5,
          duration: 1.5,
        },
      }}
      // Tailwind transitions handle the scroll hide/show smoothly
      className={`
        fixed top-0 left-0 right-0 z-50 flex items-center justify-between 
        h-20 px-6 md:px-12 transition-all duration-700 ease-in-out
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        ${
          isScrolled
            ? "bg-black/60 backdrop-blur-xl border-b border-white/10 py-4"
            : "bg-transparent py-8"
        }
      `}
    >
      <div className="w-[100px] relative aspect-video transition-transform hover:scale-105 active:scale-95">
        <img alt="Berat Uzun - Software Engineer" src="/beyou.svg" />
      </div>

      <Navigation />

      <div className="flex items-center gap-4">
        <ShimmerButton className="shadow-2xl">
          <span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white">
            Download CV
          </span>
        </ShimmerButton>
      </div>
    </motion.header>
  );
};

export default Header;
