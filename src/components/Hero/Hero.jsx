import React from 'react';
import HeroContent from './HeroContent';
import HeroVisual from './HeroVisual';

const Hero = () => {
    return (
        <section className="relative w-full bg-transparent text-foreground overflow-x-hidden pt-20 xs:pt-28 sm:pt-36 md:pt-28 lg:pt-24 xl:pt-28 lg:px-20 xl:px-24 2xl:px-32">
            <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 relative z-20 w-full max-w-full overflow-x-hidden">
                <div className="hero-main flex flex-col lg:flex-row items-center justify-between min-h-[70vh] xs:min-h-[75vh] sm:min-h-[80vh] gap-4 xs:gap-6 sm:gap-8 lg:gap-12 max-w-full overflow-x-hidden">
                    <HeroContent />
                    <HeroVisual />
                </div>
            </div>
        </section>
    );
};

export default Hero;
