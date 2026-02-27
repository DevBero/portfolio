"use client";

import React from "react";
import { motion, type MotionProps } from "motion/react";
import { cn } from "@/lib/utils";

const animationProps: MotionProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
};

interface ShinyButtonProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
    MotionProps {
  children: React.ReactNode;
  className?: string;
}

export const ShinyButton = React.forwardRef<
  HTMLButtonElement,
  ShinyButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <motion.button
      ref={ref}
      // Adjusted: Use hsl(var(--primary)) for the background and border
      className={cn(
        "relative cursor-pointer rounded-lg border border-primary/30 px-6 py-2 font-medium backdrop-blur-xl transition-all duration-300 ease-in-out font-poppins",
        "bg-primary hover:bg-primary/30",
        "hover:shadow-[0_0_20px_hsl(var(--primary)/50%)]", // Purple glow on hover
        className
      )}
      {...animationProps}
      {...props}
    >
      <span
        className="relative block size-full text-sm tracking-wide uppercase text-white"
        style={{
          // The "Shiny" text effect
          maskImage:
            "linear-gradient(-75deg, white calc(var(--x) + 20%), transparent calc(var(--x) + 30%), white calc(var(--x) + 100%))",
          WebkitMaskImage:
            "linear-gradient(-75deg, white calc(var(--x) + 20%), transparent calc(var(--x) + 30%), white calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>

      {/* The Animated Border Beam */}
      <span
        style={{
          mask: "linear-gradient(white, white) content-box exclude, linear-gradient(white, white)",
          WebkitMask:
            "linear-gradient(white, white) content-box exclude, linear-gradient(white, white)",
          backgroundImage:
            "linear-gradient(-75deg, transparent calc(var(--x) + 20%), hsl(var(--primary)) calc(var(--x) + 25%), transparent calc(var(--x) + 100%))",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] p-px"
      />
    </motion.button>
  );
});

ShinyButton.displayName = "ShinyButton";