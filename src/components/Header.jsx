"use client";
import React, { useState, useEffect } from 'react';
import Logo from './HeaderComponents/Logo';
import DesktopNavigation from './HeaderComponents/DesktopNavigation';
import DesktopControls from './HeaderComponents/DesktopControls';
import MobileControls from './HeaderComponents/MobileControls';
import MobileMenu from './HeaderComponents/MobileMenu';

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

    // Track active section for nav highlighting
    const [activeSection, setActiveSection] = useState(navItems[0].href);

    useEffect(() => {
        const handleScroll = () => {
            let found = null;
            for (const item of navItems) {
                const el = document.querySelector(item.href);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 120 && rect.bottom > 120) {
                        found = item.href;
                        break;
                    }
                }
            }
            setActiveSection(found);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 w-full bg-transparent text-foreground z-50 mb-4 sm:mb-6">
            <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-5">
                <div className="flex items-center justify-between flex-wrap gap-y-2 w-full">
                    {/* Logo */}
                    <Logo />

                    {/* Desktop Navigation */}
                    <DesktopNavigation
                        activeSection={activeSection}
                        handleSmoothScroll={handleSmoothScroll}
                        navItems={navItems}
                    />

                    {/* Desktop Controls */}
                    <DesktopControls />

                    {/* Mobile Controls */}
                    <MobileControls
                        isMobileMenuOpen={isMobileMenuOpen}
                        toggleMobileMenu={toggleMobileMenu}
                    />
                </div>

                {/* Mobile Menu */}
                <MobileMenu
                    isMobileMenuOpen={isMobileMenuOpen}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                    activeSection={activeSection}
                    handleSmoothScroll={handleSmoothScroll}
                    navItems={navItems}
                />
            </div>
        </header>
    );
};

export default Header;