import React from "react";
import { motion } from "motion/react";
import CuratorBadge from "./CuratorBadge";
import HeroHeading from "./HeroHeading";
import HeroSubheading from "./HeroSubheading";
import HeroCTA from "./HeroCTA";

const HeroContent = ({
  badgeText = "Built by Coffee Enthusiasts",
  subheadingText = "Stop juggling coffee shops and subscriptions - Coffee Mustache gives you access to the world's best coffee experiences for just $12/month. That's almost half of what you'd pay for premium coffee subscriptions.",
  buttonText = "Get Started Now",
  ctaSubText = "Experience richer & more flavorful coffee",
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
      <div className="space-y-4 xs:space-y-5 sm:space-y-6">
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
