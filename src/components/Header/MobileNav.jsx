import React, { useState } from "react";
import { ThemeToggle } from "../ThemeToggle";
import AnimatedGradientButton from "../ui/animated-gradient-button";

const MobileNav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg bg-foreground/10 backdrop-blur-md border border-foreground/20 dark:bg-white/10 dark:border-white/20 transition-colors duration-200 relative"
            >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <span className="block h-0.5 w-6 bg-foreground dark:bg-white rounded-full origin-center" />
                    <span className="block h-0.5 w-6 bg-foreground dark:bg-white rounded-full mt-1.5 origin-center" />
                    <span className="block h-0.5 w-6 bg-foreground dark:bg-white rounded-full mt-1.5 origin-center" />
                </div>
            </button>
            {/* Mobile Menu Backdrop */}
            {isMobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 z-40 bg-black/20 dark:bg-black/40"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 z-50 mt-2 px-3 xs:px-4 sm:px-6">
                    <div className="bg-foreground/10 backdrop-blur-md border border-foreground/20 dark:bg-white/10 dark:border-white/20 rounded-2xl p-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
                        {/* Navigation Links */}
                        <nav className="flex flex-col space-y-4 mb-6">
                            {/* Use NavLinks with isMobile */}
                            {/* ...existing code... */}
                        </nav>
                        {/* Login Button */}
                        <AnimatedGradientButton
                            size="mobile"
                            variant="primary"
                            showArrow={true}
                            arrowDirection="right"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Log In
                        </AnimatedGradientButton>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileNav;
