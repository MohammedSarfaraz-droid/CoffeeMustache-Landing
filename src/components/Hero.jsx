"use client";

import React from "react";
import HeroContent from "./hero-components/HeroContent";
import HeroVisual from "./hero-components/HeroVisual";

const Hero = () => {
  const handleGetStartedClick = () => {
    console.log("Get Started clicked");
  };

  return (
    <section className="w-full pt-32 lg:pt-24 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center justify-between min-h-[83vh] gap-8 lg:gap-12 relative z-10">
        <HeroContent
          badgeText="Built Exclusively for Cafés"
          subheadingText="Coffee Mustache isn’t just another POS—it’s your AI-powered growth partner. We align with your success: our revenue grows only when your café grows."
          buttonText="Join the Future of Cafés"
          ctaSubText="AI-Agentic insights & actions to boost loyalty and revenue"
          onButtonClick={handleGetStartedClick}
        />
        <HeroVisual />
      </div>
    </section>
  );
};

export default Hero;
