"use client";

import React from 'react';
import { motion } from "motion/react";
import AnimatedGradientButton from './ui/animated-gradient-button';

const Hero = () => {
    return (
        <section className="relative w-full bg-transparent text-foreground mx-2 xs:mx-3 sm:mx-4 md:mx-0">
            <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-6 xs:py-8 sm:py-12 lg:py-16">
                <div className="flex flex-col lg:flex-row items-center justify-between min-h-[70vh] xs:min-h-[75vh] sm:min-h-[80vh] gap-6 xs:gap-8 sm:gap-10 lg:gap-12">

                    {/* Hero Content - First on all screens */}
                    <motion.div
                        initial={{ opacity: 0.3, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 0.5,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="flex-1 order-1 text-center lg:text-left w-full"
                    >
                        <div className="space-y-4 xs:space-y-5 sm:space-y-6">
                            {/* Curator Info Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.7,
                                    duration: 0.6,
                                    ease: "easeInOut",
                                }}
                                className="inline-block"
                            >
                                <div className="px-3 xs:px-4 py-1.5 xs:py-2 rounded-full bg-purple-100/80 dark:bg-purple-900/30 border border-purple-200/50 dark:border-purple-700/50 backdrop-blur-sm">
                                    <span className="text-xs xs:text-sm font-medium text-purple-700 dark:text-purple-300">
                                        Built by Coffee Enthusiasts
                                    </span>
                                </div>
                            </motion.div>

                            {/* Hero Heading */}
                            <div className="space-y-3 xs:space-y-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: 0.9,
                                        duration: 0.8,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                                        World's Most Powerful
                                    </h1>
                                </motion.div>

                                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 xs:gap-3 sm:gap-4">
                                    <motion.h1
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 1.1,
                                            duration: 0.8,
                                            ease: "easeInOut",
                                        }}
                                        className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground"
                                    >
                                        Coffee
                                    </motion.h1>

                                    {/* Animated Marquee Text */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            delay: 1.3,
                                            duration: 0.6,
                                            ease: "easeInOut",
                                        }}
                                        className="relative overflow-hidden h-12 xs:h-14 sm:h-16 md:h-18 lg:h-20 w-36 xs:w-40 sm:w-48 md:w-52 lg:w-64 xl:w-72 rounded-lg bg-gradient-to-r from-purple-100/50 to-purple-200/50 dark:from-purple-900/30 dark:to-purple-800/30 border border-purple-200/30 dark:border-purple-700/30 backdrop-blur-sm"
                                    >
                                        <motion.div
                                            animate={{ y: [0, -56, -112] }}
                                            transition={{
                                                duration: 6,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: 2
                                            }}
                                            className="absolute inset-0"
                                        >
                                            <div className="h-full flex items-center justify-center px-1 xs:px-2">
                                                <span className="text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-purple-700 dark:text-purple-300">
                                                    Experience.
                                                </span>
                                            </div>
                                            <div className="h-full flex items-center justify-center px-1 xs:px-2">
                                                <span className="text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-purple-700 dark:text-purple-300">
                                                    Subscription.
                                                </span>
                                            </div>
                                            <div className="h-full flex items-center justify-center px-1 xs:px-2">
                                                <span className="text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-purple-700 dark:text-purple-300">
                                                    Experience.
                                                </span>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Hero Subheading */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 1.5,
                                    duration: 0.8,
                                    ease: "easeInOut",
                                }}
                                className="text-sm xs:text-base sm:text-lg md:text-xl text-foreground/80 dark:text-white/80 leading-relaxed max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto lg:mx-0"
                            >
                                Stop juggling coffee shops and subscriptions - Coffee Mustache gives you access to the world's best coffee experiences for just $12/month. That's almost half of what you'd pay for premium coffee subscriptions.
                            </motion.p>

                            {/* CTA Buttons */}
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
                                    >
                                        Get Started Now
                                    </AnimatedGradientButton>
                                </div>
                                <p className="text-xs xs:text-sm text-foreground/60 dark:text-white/60 text-center lg:text-left">
                                    Experience richer & more flavorful coffee
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Hero Visual - Below text on small screens, right side on desktop */}
                    <motion.div
                        initial={{ opacity: 0.3, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 0.5,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="flex-1 order-2 w-full"
                    >
                        <div className="relative w-full h-[280px] xs:h-[320px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px] rounded-xl xs:rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100/20 to-purple-200/20 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200/30 dark:border-purple-700/30 backdrop-blur-sm">
                            {/* Background Image/Pattern */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-purple-100/50 dark:from-purple-900/30 dark:to-purple-800/30"></div>

                            {/* Coffee Cup Illustration or Video Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        delay: 1.2,
                                        duration: 1.0,
                                        ease: "easeInOut",
                                    }}
                                    className="text-center space-y-4"
                                >
                                    {/* Coffee Cup Icon */}
                                    <div className="w-20 h-20 xs:w-24 xs:h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-48 xl:h-48 mx-auto bg-gradient-to-br from-purple-200 to-purple-300 dark:from-purple-700 dark:to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                                        <svg className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-24 xl:h-24 text-purple-700 dark:text-purple-200" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M2 21l.02-3.13c.14-2.51 2.14-4.58 4.65-4.87L9 13v-2c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2l2.33-.13c2.51.29 4.51 2.36 4.65 4.87L24 21H2zm16-4H6c-1.1 0-2-.9-2-2s.9-2 2-2h12c1.1 0 2 .9 2 2s-.9 2-2 2z" />
                                            <path d="M12 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0-8c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" />
                                        </svg>
                                    </div>
                                    <p className="text-sm xs:text-base sm:text-lg md:text-xl font-medium text-purple-700 dark:text-purple-300">
                                        Premium Coffee Experience
                                    </p>
                                </motion.div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [0, 5, 0]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute top-4 xs:top-6 sm:top-8 right-4 xs:right-6 sm:right-8 w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 bg-purple-200/50 dark:bg-purple-700/50 rounded-full blur-sm"
                            />
                            <motion.div
                                animate={{
                                    y: [0, 15, 0],
                                    rotate: [0, -5, 0]
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                                className="absolute bottom-6 xs:bottom-8 sm:bottom-12 left-4 xs:left-6 sm:left-8 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-purple-300/50 dark:bg-purple-600/50 rounded-full blur-sm"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
