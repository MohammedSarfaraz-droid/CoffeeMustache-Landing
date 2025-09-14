import React, { useState, useEffect } from "react";

const navItems = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faqs", label: "FAQs" }
];

const NavLinks = ({ isMobile = false }) => {
    const [activeSection, setActiveSection] = useState(navItems[0].href);

    useEffect(() => {
        const handleScroll = () => {
            let found = navItems[0].href;
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

    // Smooth scroll to section
    const handleSmoothScroll = (e, href) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                    <a
                        key={item.href}
                        href={item.href}
                        className={
                            isMobile
                                ? `text-foreground/90 hover:text-foreground dark:text-white/90 dark:hover:text-white transition-colors duration-200 py-2 text-lg font-medium border-b border-foreground/10 dark:border-white/10 last:border-0${isActive ? ' !text-xl !font-extrabold' : ''}`
                                : `nav-link nav-txt w-nav-link text-[15px] xl:text-[16px] text-gray-800 hover:text-black dark:text-white/90 dark:hover:text-white transition-all duration-200 hover:scale-105 font-medium px-4 py-2 rounded-full${isActive ? ' !text-xl !font-extrabold' : ''}`
                        }
                        style={{ maxWidth: '1400px' }}
                        onClick={(e) => handleSmoothScroll(e, item.href)}
                    >
                        {item.label}
                    </a>
                );
            })}
        </>
    );
};

export default NavLinks;
