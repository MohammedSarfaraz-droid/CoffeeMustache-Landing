import React from "react";
import { motion } from "motion/react";
import CuratorBadge from "./CuratorBadge";
import HeroHeading from "./HeroHeading";
import HeroSubheading from "./HeroSubheading";
import HeroCTA from "./HeroCTA";

const HeroContent = ({
  badgeText = "Built Exclusively for Cafés",
  subheadingText = "Coffee Mustache isn’t just another POS—it’s your AI-powered growth partner. We align with your success: our revenue grows only when your café grows.",
  buttonText = "Join the Future of Cafés",
  ctaSubText = "AI-Agentic insights & actions to boost loyalty and revenue",
  onButtonClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0.3, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.5,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="hero-content flex-1 text-center lg:text-left w-full lg:w-6/10"
    >
      <div className="space-y-6 xs:space-y-7 sm:space-y-8 md:space-y-10 lg:space-y-6">
        <CuratorBadge text={badgeText} />
        <HeroHeading />
        <HeroSubheading text={subheadingText} />
        <HeroCTA
          buttonText={buttonText}
          subText={ctaSubText}
          onButtonClick={onButtonClick}
        />
      </div>
    </motion.div>
  );
};

export default HeroContent;
