import React from 'react';
import { motion } from "motion/react";

const HeroSubheading = ({ text }) => {
    return (
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 1.5,
                duration: 0.8,
                ease: "easeInOut",
            }}
            className="text-sm xs:text-sm sm:text-base md:text-lg text-foreground/80 dark:text-white/80 leading-snug max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto lg:mx-0"
        >
            {text}
        </motion.p>
    );
};

export default HeroSubheading;