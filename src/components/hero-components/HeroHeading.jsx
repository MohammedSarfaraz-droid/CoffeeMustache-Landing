import React from "react";
import { motion } from "motion/react";
import AnimatedMarquee from "./AnimatedMarquee";

const HeroHeading = () => {
  return (
    <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.9,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <h1 className="text-[28px] xs:text-[32px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-bold leading-tight">
          <span className="text-foreground">World's Most </span>
          <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-700 dark:from-yellow-300 dark:via-pink-400 dark:to-purple-400 bg-clip-text text-transparent animate-gradient-x">
            Powerful
          </span>
        </h1>
      </motion.div>

      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.1,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-[28px] xs:text-[32px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-bold"
        >
          <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-700 dark:from-yellow-300 dark:via-pink-400 dark:to-purple-400 bg-clip-text text-transparent animate-gradient-x">
            Café
          </span>
        </motion.h1>

        <AnimatedMarquee words={["Experience.", "Subscription."]} />
      </div>
    </div>
  );
};

export default HeroHeading;
