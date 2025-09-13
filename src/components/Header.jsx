"use client";

import React, { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import AnimatedGradientButton from './ui/animated-gradient-button';
import { motion } from "motion/react";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Smooth scroll to section
    const handleSmoothScroll = (e, href) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }

        // Close mobile menu if open
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    };

    // Navigation items data
    const navItems = [
        { href: "#features", label: "Features" },
        { href: "#pricing", label: "Pricing" },
        { href: "#faqs", label: "FAQs" }
    ];

    // Navigation Links Component
    const NavLinks = ({ isMobile = false }) => (
        <>
            {navItems.map((item) => (
                <a
                    key={item.href}
                    href={item.href}
                    className={`${isMobile
                        ? "text-foreground/90 hover:text-foreground dark:text-white/90 dark:hover:text-white transition-colors duration-200 py-2 text-lg font-medium border-b border-foreground/10 dark:border-white/10 last:border-0"
                        : "text-sm xl:text-base text-gray-800 hover:text-black dark:text-white/90 dark:hover:text-white transition-all duration-200 hover:scale-105 font-medium"
                        }`}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                >
                    {item.label}
                </a>
            ))}
        </>
    );

    // Login Button Component
    const LoginButton = ({ isMobile = false, onClick }) => (
        <AnimatedGradientButton
            size={isMobile ? "mobile" : "default"}
            onClick={onClick}
            variant="primary"
            showArrow={true}
            arrowDirection="right"
        >
            Log In
        </AnimatedGradientButton>
    );
    return (
        <header className="fixed top-0 left-0 right-0 w-full bg-transparent text-foreground mx-3 xs:mx-4 sm:mx-0 z-50">
            <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4 md:py-6">
                <div className="flex items-center justify-between">
                    {/* Logo - Animated slide from far left */}
                    <motion.div
                        initial={{ opacity: 0.3, x: -120 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="flex items-center flex-shrink-0"
                    >
                        <h1 className="text-xl sm:text-2xl font-bold text-foreground truncate">
                            <span className="hidden sm:inline">Coffee Mustache</span>
                            <span className="sm:hidden">CM</span>
                        </h1>
                    </motion.div>

                    {/* Center Navigation with Lamp Effect - Hidden on mobile */}
                    <nav className="hidden lg:flex relative">
                        {/* Lamp Effect Container - Wider and more prominent */}
                        <div className="absolute left-1/2 -translate-x-1/2 -top-28 w-[50rem] h-36 flex items-center justify-center overflow-visible pointer-events-none">
                            {/* Left lamp beam - premium slow animation */}
                            <motion.div
                                initial={{ opacity: 0.4, width: "16rem" }}
                                animate={{ opacity: 1, width: "32rem" }}
                                transition={{
                                    delay: 0.4,
                                    duration: 1.4,
                                    ease: [0.25, 0.1, 0.25, 1],
                                }}
                                style={{
                                    backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                                    maskImage: `linear-gradient(to bottom, transparent 0%, white 35%, white 75%, transparent 100%), linear-gradient(to right, transparent 0%, white 25%, white 100%)`,
                                    maskComposite: 'intersect'
                                }}
                                className="absolute inset-auto right-1/2 h-36 w-[32rem] bg-gradient-conic from-purple-700 via-purple-500/80 to-transparent dark:from-purple-400 dark:via-purple-200/60 [--conic-position:from_70deg_at_center_top]"
                            />

                            {/* Right lamp beam - premium slow animation */}
                            <motion.div
                                initial={{ opacity: 0.4, width: "16rem" }}
                                animate={{ opacity: 1, width: "32rem" }}
                                transition={{
                                    delay: 0.4,
                                    duration: 1.4,
                                    ease: [0.25, 0.1, 0.25, 1],
                                }}
                                style={{
                                    backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                                    maskImage: `linear-gradient(to bottom, transparent 0%, white 35%, white 75%, transparent 100%), linear-gradient(to left, transparent 0%, white 25%, white 100%)`,
                                    maskComposite: 'intersect'
                                }}
                                className="absolute inset-auto left-1/2 h-36 w-[32rem] bg-gradient-conic from-transparent via-purple-500/80 to-purple-700 dark:via-purple-200/60 dark:to-purple-400 [--conic-position:from_290deg_at_center_top]"
                            />

                            {/* Additional light spread - delayed for premium feel */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 0.3, scale: 1.2 }}
                                transition={{
                                    delay: 0.8,
                                    duration: 1.0,
                                    ease: [0.25, 0.1, 0.25, 1],
                                }}
                                className="absolute z-20 h-16 w-[24rem] top-10 rounded-full bg-purple-600/40 dark:bg-purple-300/30 blur-2xl left-1/2 -translate-x-1/2"
                            />

                            {/* Central glow - luxurious slow reveal */}
                            <motion.div
                                initial={{ width: "8rem", opacity: 0.3 }}
                                animate={{ width: "20rem", opacity: 0.8 }}
                                transition={{
                                    delay: 0.6,
                                    duration: 1.2,
                                    ease: [0.25, 0.1, 0.25, 1],
                                }}
                                className="absolute z-30 h-12 rounded-full bg-purple-600 dark:bg-purple-300 blur-xl top-10 left-1/2 -translate-x-1/2"
                            />

                            {/* Lamp line - elegant slow expansion */}
                            <motion.div
                                initial={{ width: "10rem" }}
                                animate={{ width: "24rem" }}
                                transition={{
                                    delay: 0.2,
                                    duration: 1.6,
                                    ease: [0.25, 0.1, 0.25, 1],
                                }}
                                className="absolute z-50 h-0.5 bg-purple-700 dark:bg-purple-400 top-0 left-1/2 -translate-x-1/2"
                            />
                        </div>

                        {/* Navigation Links with upward animation */}
                        <motion.div
                            initial={{ opacity: 0.5, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="relative z-50 flex items-center space-x-6 xl:space-x-8 px-6 xl:px-8 py-3 rounded-full bg-white/95 border border-gray-200/50 shadow-lg shadow-black/10 dark:bg-gray-900/95 dark:border-gray-700/50 dark:shadow-lg dark:shadow-black/20 backdrop-blur-sm"
                        >
                            <NavLinks />
                        </motion.div>
                    </nav>

                    {/* Theme Toggle and Login Button - Desktop - Animated slide from far right */}
                    <motion.div
                        initial={{ opacity: 0.3, x: 120 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="hidden lg:flex items-center space-x-4"
                    >
                        <ThemeToggle />
                        <LoginButton />
                    </motion.div>

                    {/* Mobile Menu Button and Theme Toggle - Animated slide from far right */}
                    <motion.div
                        initial={{ opacity: 0.3, x: 120 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="lg:hidden flex items-center space-x-2"
                    >
                        <ThemeToggle />
                        <button
                            onClick={toggleMobileMenu}
                            className="p-2 rounded-lg bg-foreground/10 backdrop-blur-md border border-foreground/20 dark:bg-white/10 dark:border-white/20 transition-colors duration-200 relative"
                        >
                            {/* Animated Hamburger to X Icon */}
                            <div className="w-6 h-6 flex flex-col justify-center items-center">
                                {/* Top line */}
                                <motion.span
                                    animate={isMobileMenuOpen ? {
                                        rotate: 45,
                                        y: 8,
                                        backgroundColor: "currentColor"
                                    } : {
                                        rotate: 0,
                                        y: 0,
                                        backgroundColor: "currentColor"
                                    }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="block h-0.5 w-6 bg-foreground dark:bg-white rounded-full origin-center"
                                />

                                {/* Middle line */}
                                <motion.span
                                    animate={isMobileMenuOpen ? {
                                        opacity: 0,
                                        x: -20
                                    } : {
                                        opacity: 1,
                                        x: 0
                                    }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="block h-0.5 w-6 bg-foreground dark:bg-white rounded-full mt-1.5 origin-center"
                                />

                                {/* Bottom line */}
                                <motion.span
                                    animate={isMobileMenuOpen ? {
                                        rotate: -45,
                                        y: -8,
                                        backgroundColor: "currentColor"
                                    } : {
                                        rotate: 0,
                                        y: 0,
                                        backgroundColor: "currentColor"
                                    }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="block h-0.5 w-6 bg-foreground dark:bg-white rounded-full mt-1.5 origin-center"
                                />
                            </div>
                        </button>
                    </motion.div>
                </div>

                {/* Mobile Menu Backdrop */}
                {isMobileMenuOpen && (
                    <div
                        className="lg:hidden fixed inset-0 z-40 bg-black/20 dark:bg-black/40"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 z-50 mt-2 mx-4">
                        <div className="bg-foreground/10 backdrop-blur-md border border-foreground/20 dark:bg-white/10 dark:border-white/20 rounded-2xl p-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
                            {/* Navigation Links */}
                            <nav className="flex flex-col space-y-4 mb-6">
                                <NavLinks isMobile={true} />
                            </nav>

                            {/* Login Button */}
                            <LoginButton
                                isMobile={true}
                                onClick={() => setIsMobileMenuOpen(false)}
                            />
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;