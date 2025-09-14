import React from 'react';
import { motion } from "motion/react";
import AnimatedGradientButton from '../ui/animated-gradient-button';

const HeroCTA = ({ 
    buttonText = "Get Started Now", 
    subText = "Experience richer & more flavorful coffee",
    onButtonClick
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 1.7,
                duration: 0.8,
                ease: "easeInOut",
            }}
            className="space-y-3 xs:space-y-4"
        >
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 xs:gap-4">
                <AnimatedGradientButton
                    size="lg"
                    variant="primary"
                    showArrow={true}
                    arrowDirection="right"
                    className="w-auto"
                    onClick={onButtonClick}
                >
                    {buttonText}
                </AnimatedGradientButton>
            </div>
            <p className="text-xs xs:text-sm text-foreground/60 dark:text-white/60 text-center lg:text-left">
                {subText}
            </p>
        </motion.div>
    );
};

export default HeroCTA;