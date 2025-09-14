"use client";

import React from 'react';
import HeroContent from './HeroComponents/HeroContent';
import HeroVisual from './HeroComponents/HeroVisual';

const Hero = () => {
    const handleGetStartedClick = () => {
        // Handle button click logic here
        console.log('Get Started clicked');
    };

    return (
        <section className="relative w-full bg-transparent text-foreground overflow-x-hidden pt-20 xs:pt-28 sm:pt-36 md:pt-28 lg:pt-24 xl:pt-28 lg:px-20 xl:px-24 2xl:px-32">
            <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 relative z-20 w-full max-w-full overflow-x-hidden">
                <div className="hero-main flex flex-col lg:flex-row items-center justify-between min-h-[70vh] xs:min-h-[75vh] sm:min-h-[80vh] gap-4 xs:gap-6 sm:gap-8 lg:gap-12 max-w-full overflow-x-hidden">

                    {/* Hero Content */}
                    <HeroContent
                        badgeText="Built by Coffee Enthusiasts"
                        subheadingText="Stop juggling coffee shops and subscriptions - Coffee Mustache gives you access to the world's best coffee experiences for just $12/month. That's almost half of what you'd pay for premium coffee subscriptions."
                        buttonText="Get Started Now"
                        ctaSubText="Experience richer & more flavorful coffee"
                        onButtonClick={handleGetStartedClick}
                    />

                    {/* Hero Visual */}
                    <HeroVisual
                        videoSources={{
                            mp4: "https://cdn.prod.website-files.com/689597cc2d57ee623f5a24a2/689c3850b8428d2531672b1f_hero-transcode.mp4",
                            webm: "https://cdn.prod.website-files.com/689597cc2d57ee623f5a24a2/689c3850b8428d2531672b1f_hero-transcode.webm"
                        }}
                        posterImage="https://cdn.prod.website-files.com/689597cc2d57ee623f5a24a2/689c3850b8428d2531672b1f_hero-poster-00001.jpg"
                        backgroundImage="/Images/background-glare.avif"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;