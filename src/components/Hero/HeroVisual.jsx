import React from 'react';
import { motion } from "motion/react";

const HeroVisual = () => (
    <motion.div
        initial={{ opacity: 0.3, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
        }}
        className="hero-visual flex-1 order-2 w-full flex items-center justify-center lg:justify-end"
    >
        <div className="relative w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl aspect-square mx-auto lg:mx-0">
            {/* Main Coffee Cup Image */}
            <motion.img
                src="/Images/logo.svg"
                alt="Coffee Mustache Logo"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    delay: 1.2,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="absolute inset-0 w-full h-full object-contain z-10"
            />

            {/* Glowing Effect */}
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    delay: 1.4,
                    duration: 1.2,
                    ease: "easeInOut",
                }}
                className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-br from-yellow-400/30 via-pink-400/20 to-purple-700/30 blur-2xl z-0"
            />

            {/* Premium Stars Animation */}
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    delay: 1.6,
                    duration: 1.2,
                    ease: "easeInOut",
                }}
                className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-2 z-20"
            >
                <img src="/src/components/ui/premium-stars.svg" alt="Premium Stars" className="h-6 w-auto" />
            </motion.div>
        </div>
    </motion.div>
);

export default HeroVisual;
