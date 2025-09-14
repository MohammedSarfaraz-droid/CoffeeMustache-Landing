import React from 'react';

const NavLinks = ({ isMobile = false, activeSection, handleSmoothScroll, navItems }) => {
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