"use client";

import React from "react";
import HeroContent from "./HeroComponents/HeroContent";
import HeroVisual from "./HeroComponents/HeroVisual";

const Hero = () => {
  const handleGetStartedClick = () => {
    console.log("Get Started clicked");
  };

  return (
    <section className="relative w-full pt-24 md:pt-40 px-6 lg:px-20">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-2 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-2 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-purple-400/5 dark:bg-purple-400/10 rounded-full blur-3xl" />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between min-h-[70vh] gap-8 lg:gap-12 relative z-10">
        <HeroContent
          badgeText="Built by Coffee Enthusiasts"
          subheadingText="Stop juggling coffee shops and subscriptions - Coffee Mustache gives you access to the world's best coffee experiences for just $12/month. That's almost half of what you'd pay for premium coffee subscriptions."
          buttonText="Get Started Now"
          ctaSubText="Experience richer & more flavorful coffee"
          onButtonClick={handleGetStartedClick}
        />
        <HeroVisual />
      </div>
    </section>
  );
};

export default Hero;
