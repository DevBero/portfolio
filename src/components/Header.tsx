"use client";

import { motion } from "motion/react";
import { ShimmerButton } from "./ui/shimmer-button";
import { Navigation } from "./Navigation";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 3,
        duration: 0.7,
        ease: "easeOut",
      }}
      className="flex items-center w-full justify-between max-w-7xl mx-auto h-24 bg-red-200"
    >
      <div className="w-[100px] relative aspect-video">
        <img alt="Berat Uzun - Software Engineer" src="/beyou.svg"/>
      </div>

      <Navigation />

      <ShimmerButton>Download CV</ShimmerButton>
    </motion.header>
  );
};

export default Header;