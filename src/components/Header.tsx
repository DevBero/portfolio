"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { ShimmerButton } from "./ui/shimmer-button";
import { Navigation } from "./Navigation";
import { MobileNavigation } from "./Mobile-Navigation";

const Header = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
    const isScrollingUp = latest < lastScrollY;
    const isAtTop = latest < 10;

    if (isScrollingUp || isAtTop) {
      setIsVisible(true);
    } else if (latest > 150) {
      setIsVisible(false);
    }
    setLastScrollY(latest);
  });

  return (
    <motion.header
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
      <div className="w-[100px] relative transition-transform hover:scale-105 active:scale-95">
        <img alt="Berat Uzun - Software Engineer" src="/beyou.svg" />
      </div>

      <Navigation />

      <div className="flex items-center gap-4">
        <div className="hidden sm:block">
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white">
              Download CV
            </span>
          </ShimmerButton>
        </div>

        <MobileNavigation />
      </div>
    </motion.header>
  );
};

export default Header;
