"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from "motion/react";
import AnimatedGradientButton from './ui/animated-gradient-button';

const Hero = () => {
    return (
        <section className="relative w-full bg-transparent text-foreground overflow-x-hidden pt-20 xs:pt-28 sm:pt-36 md:pt-28 lg:pt-24 xl:pt-28 lg:px-20 xl:px-24 2xl:px-32">
            {/* ...existing code... */}
            <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 relative z-20 w-full max-w-full overflow-x-hidden">
                <div className="hero-main flex flex-col lg:flex-row items-center justify-between min-h-[70vh] xs:min-h-[75vh] sm:min-h-[80vh] gap-4 xs:gap-6 sm:gap-8 lg:gap-12 max-w-full overflow-x-hidden">

                    {/* Hero Content - First on all screens */}
                    <motion.div
                        initial={{ opacity: 0.3, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 0.5,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="hero-content flex-1 order-1 text-center lg:text-left w-full"
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
                            <div className="space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-0">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: 0.9,
                                        duration: 0.8,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <h1 className="text-[36px] sm:text-[60px] font-bold leading-none">
                                        <span className="text-foreground">World's Most </span>
                                        <span
                                            className="bg-gradient-to-r from-purple-700 via-pink-500 to-yellow-400 dark:from-purple-400 dark:via-pink-400 dark:to-yellow-300 bg-clip-text text-transparent animate-gradient-x [background-clip:text] [color:transparent]"
                                        >
                                            Powerful
                                        </span>
                                    </h1>
                                </motion.div>

                                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 xs:gap-3 sm:gap-4 -mt-1">
                                    <motion.h1
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 1.1,
                                            duration: 0.8,
                                            ease: "easeInOut",
                                        }}
                                        className="text-[36px] sm:text-[60px] font-bold"
                                    >
                                        <span
                                            className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-700 dark:from-yellow-300 dark:via-pink-400 dark:to-purple-400 bg-clip-text text-transparent animate-gradient-x [background-clip:text] [color:transparent]"
                                        >
                                            Coffee
                                        </span>
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
                                        className="relative overflow-hidden h-10 xs:h-11 sm:h-12 md:h-14 lg:h-16 w-32 xs:w-36 sm:w-42 md:w-48 lg:w-64 xl:w-72 rounded-lg bg-gradient-to-r from-purple-100/50 to-purple-200/50 dark:from-purple-900/30 dark:to-purple-800/30 border border-purple-200/30 dark:border-purple-700/30 backdrop-blur-sm mt-1 animate-gradient-x"
                                    >
                                        {/* Mobile Animation */}
                                        <motion.div
                                            animate={{
                                                y: [0, -40, -80]
                                            }}
                                            transition={{
                                                duration: 6,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: 2
                                            }}
                                            className="absolute inset-0 sm:hidden"
                                        >
                                            {/* First text */}
                                            <div className="h-10 flex items-center justify-center px-2">
                                                <span className="text-base font-bold text-purple-700 dark:text-purple-300 whitespace-nowrap">
                                                    Experience.
                                                </span>
                                            </div>
                                            {/* Second text */}
                                            <div className="h-10 flex items-center justify-center px-2">
                                                <span className="text-base font-bold text-purple-700 dark:text-purple-300 whitespace-nowrap">
                                                    Subscription.
                                                </span>
                                            </div>
                                            {/* Third text (loop back to first) */}
                                            <div className="h-10 flex items-center justify-center px-2">
                                                <span className="text-base font-bold text-purple-700 dark:text-purple-300 whitespace-nowrap">
                                                    Experience.
                                                </span>
                                            </div>
                                        </motion.div>

                                        {/* Small screens animation */}
                                        <motion.div
                                            animate={{
                                                y: [0, -44, -88]
                                            }}
                                            transition={{
                                                duration: 6,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: 2
                                            }}
                                            className="absolute inset-0 hidden sm:block md:hidden"
                                        >
                                            <div className="h-11 flex items-center justify-center px-2">
                                                <span className="text-lg font-bold text-purple-700 dark:text-purple-300 whitespace-nowrap">
                                                    Experience.
                                                </span>
                                            </div>
                                            <div className="h-11 flex items-center justify-center px-2">
                                                <span className="text-lg font-bold text-purple-700 dark:text-purple-300 whitespace-nowrap">
                                                    Subscription.
                                                </span>
                                            </div>
                                            <div className="h-11 flex items-center justify-center px-2">
                                                <span className="text-lg font-bold text-purple-700 dark:text-purple-300 whitespace-nowrap">
                                                    Experience.
                                                </span>
                                            </div>
                                        </motion.div>

                                        {/* Medium screens animation */}
                                        <motion.div
                                            animate={{
                                                y: [0, -48, -96]
                                            }}
                                            transition={{
                                                duration: 6,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: 2
                                            }}
                                            className="absolute inset-0 hidden md:block lg:hidden"
                                        >
                                            <div className="h-12 flex items-center justify-center px-2">
                                                <span className="text-xl font-bold text-purple-700 dark:text-purple-300 whitespace-nowrap">
                                                    Experience.
                                                </span>
                                            </div>
                                            <div className="h-12 flex items-center justify-center px-2">
                                                <span className="text-xl font-bold text-purple-700 dark:text-purple-300 whitespace-nowrap">
                                                    Subscription.
                                                </span>
                                            </div>
                                            <div className="h-12 flex items-center justify-center px-2">
                                                <span className="text-xl font-bold text-purple-700 dark:text-purple-300 whitespace-nowrap">
                                                    Experience.
                                                </span>
                                            </div>
                                        </motion.div>

                                        {/* Large screens animation */}
                                        <motion.div
                                            animate={{
                                                y: [0, -56, -112]
                                            }}
                                            transition={{
                                                duration: 6,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: 2
                                            }}
                                            className="absolute inset-0 hidden lg:block"
                                        >
                                            <div className="h-14 flex items-center justify-center px-2">
                                                <span className="text-2xl lg:text-3xl xl:text-4xl font-bold text-purple-700 dark:text-purple-300 whitespace-nowrap">
                                                    Experience.
                                                </span>
                                            </div>
                                            <div className="h-14 flex items-center justify-center px-2">
                                                <span className="text-2xl lg:text-3xl xl:text-4xl font-bold text-purple-700 dark:text-purple-300 whitespace-nowrap">
                                                    Subscription.
                                                </span>
                                            </div>
                                            <div className="h-14 flex items-center justify-center px-2">
                                                <span className="text-2xl lg:text-3xl xl:text-4xl font-bold text-purple-700 dark:text-purple-300 whitespace-nowrap">
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
                                className="text-sm xs:text-sm sm:text-base md:text-lg text-foreground/80 dark:text-white/80 leading-snug max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto lg:mx-0"
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
                        initial={{ opacity: 0.2, x: 60, scale: 0.96, boxShadow: "0 0 0 rgba(0,0,0,0)" }}
                        animate={{ opacity: 1, x: 0, scale: 1, boxShadow: "0 8px 48px 0 rgba(80,0,120,0.18)" }}
                        transition={{
                            delay: 0.5,
                            duration: 1.2,
                            ease: [0.23, 1, 0.32, 1],
                        }}
                        className="flex-1 order-2 w-full"
                    >
                        <motion.div
                            initial={{ y: 0 }}
                            animate={{ y: [0, -12, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative w-full h-[200px] xs:h-[220px] sm:h-[260px] md:h-[320px] lg:h-[350px] xl:h-[400px] rounded-xl xs:rounded-2xl overflow-hidden bg-white/10 dark:bg-black/10 border-4 border-white/40 dark:border-white/20 backdrop-blur-xl mx-auto max-w-full xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl overflow-x-hidden shadow-xl"
                        >
                            {/* Glass background image inside card, behind video */}
                            {/* Background glare image inside card, glows through borders */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src="/Images/background-glare.avif"
                                    alt="Background Glare"
                                    fill
                                    className="object-cover"
                                    style={{ filter: 'blur(12px)', opacity: 0.9 }}
                                    priority
                                />
                            </div>
                            <div className="absolute inset-0 z-10 bg-white/10 dark:bg-black/20 backdrop-blur-2xl rounded-xl border border-white/20" />
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                poster="https://cdn.prod.website-files.com/689597cc2d57ee623f5a24a2/689c3850b8428d2531672b1f_hero-poster-00001.jpg"
                                className="relative z-20 w-full h-full object-cover rounded-xl"
                                style={{ background: 'transparent', boxShadow: '0 0 40px rgba(0,255,200,0.3)' }}
                            >
                                <source src="https://cdn.prod.website-files.com/689597cc2d57ee623f5a24a2/689c3850b8428d2531672b1f_hero-transcode.mp4" type="video/mp4" />
                                <source src="https://cdn.prod.website-files.com/689597cc2d57ee623f5a24a2/689c3850b8428d2531672b1f_hero-transcode.webm" type="video/webm" />
                            </video>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
