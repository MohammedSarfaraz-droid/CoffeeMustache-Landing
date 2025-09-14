import React, { forwardRef } from 'react';
import { motion } from "motion/react";

const centerLogo = (
    // Extracted mark from provided ai.svg (only the left logo group)
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="104" viewBox="0 0 46.3 40" fill="none" aria-label="AI Logo">
        <g clipPath="url(#clip0_ai_mark)">
            <path d="M25.3476 32.9657C25.2934 32.7371 25.3843 32.7312 25.5044 32.6111C25.6949 32.4206 27.355 31.0756 27.4795 31.058C30.1418 31.9371 35.9982 33.5855 36.3352 29.2279C36.6517 25.1312 31.3198 18.4016 28.2795 15.8946C27.3564 15.1342 27.1542 14.9012 25.9366 15.3144C23.3535 16.1906 17.9586 20.5759 22.4026 22.7239C22.637 23.0668 21.5088 23.7715 21.1997 23.9093C18.8773 24.9393 17.9938 21.4389 18.1843 19.7217C18.5725 16.2272 25.3623 11.1181 28.7953 13.0345C31.396 14.4866 36.0202 20.5129 37.3447 23.2397C42.1271 33.0946 35.2949 36.8485 26.3733 33.332C26.0334 33.1986 25.8033 32.8602 25.3476 32.9657Z" fill="url(#g0)" />
            <path d="M21.0979 7.47378L18.9499 9.34045C17.7352 8.98001 16.5631 8.52579 15.2927 8.37048C13.366 8.13312 10.5367 8.30162 10.2554 10.769C9.76305 15.1075 14.6246 21.2188 17.7264 23.9588C18.6217 24.75 19.0803 25.4078 20.3755 25.1368C21.8773 24.8218 25.5521 21.9705 25.7748 20.4276C25.9696 19.0782 25.4656 17.9939 24.1235 17.5793C23.9374 17.5602 24.0121 17.3961 24.1015 17.2877C24.2026 17.1661 25.3352 16.3778 25.4891 16.3309C27.6883 15.6701 28.5821 18.7529 28.4092 20.4247C28.0283 24.117 20.9044 29.5851 17.448 27.1632C16.4107 26.4364 14.418 24.3895 13.533 23.3932C10.5543 20.0393 6.20115 13.5544 8.13521 8.94045C10.2275 3.94997 17.2927 5.79173 21.0993 7.47524L21.0979 7.47378Z" fill="url(#g1)" />
            <path d="M10.255 21.9778C10.3005 22.0423 10.5232 22.1258 10.6243 22.262C11.1239 22.9404 11.6968 23.5573 12.1657 24.2576C11.8345 25.6877 11.1444 27.0371 11.0067 28.5155C10.2521 36.5668 18.9935 32.1785 22.4631 29.7155C25.7789 27.3639 28.5159 24.1478 30.9891 20.9536C33.1005 23.128 31.3642 24.8027 29.8184 26.5214C26.1583 30.5917 18.4338 36.8569 12.6228 35.5075C8.17006 34.473 7.98691 29.9456 8.79131 26.2254C8.8719 25.8503 9.11219 25.0445 9.23087 24.6137C9.34955 24.1829 9.52684 23.5895 9.67043 23.1485C9.77739 22.8217 10.0338 22.2518 10.2565 21.9763L10.255 21.9778Z" fill="url(#g2)" />
            <path d="M37.3608 14.2123C37.2744 14.5434 37.0282 15.3727 36.9213 15.6775C36.8685 15.8255 36.5843 16.4643 36.4817 16.7031C36.3498 17.0123 35.9733 17.6584 35.7491 17.8753C35.3813 17.3947 34.1901 16.2826 34.1374 15.7361C34.7938 13.572 36.3645 9.20716 34.1271 7.55441C31.5586 5.65697 26.3909 8.56247 24.1271 10.1361C20.6839 12.5302 17.7081 15.7713 15.3096 19.191C12.9286 16.9918 15.1528 14.9405 16.7733 13.1837C19.9132 9.78005 25.4048 5.46064 30.0275 4.60642C36.8187 3.35221 38.8905 8.35734 37.3608 14.2108V14.2123Z" fill="url(#g3)" />
            {/* soft extras kept minimal */}
        </g>
        <defs>
            <linearGradient id="g0" x1="38.9175" y1="34.6246" x2="16.9475" y2="13.9017" gradientUnits="userSpaceOnUse">
                <stop stopColor="#39D47A" />
                <stop offset="1" stopColor="#009CD0" />
            </linearGradient>
            <linearGradient id="g1" x1="28.4301" y1="27.7618" x2="6.41106" y2="7.02533" gradientUnits="userSpaceOnUse">
                <stop stopColor="#39D47A" />
                <stop offset="1" stopColor="#009CD0" />
            </linearGradient>
            <linearGradient id="g2" x1="31.9675" y1="35.6943" x2="18.7082" y2="14.5132" gradientUnits="userSpaceOnUse">
                <stop stopColor="#39D47A" />
                <stop offset="1" stopColor="#009CD0" />
            </linearGradient>
            <linearGradient id="g3" x1="37.8379" y1="19.191" x2="24.5348" y2="-2.02558" gradientUnits="userSpaceOnUse">
                <stop stopColor="#39D47A" />
                <stop offset="1" stopColor="#009CD0" />
            </linearGradient>
            <clipPath id="clip0_ai_mark">
                <rect width="46.2989" height="40" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const CentralHub = forwardRef((props, ref) => {
    return (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="relative">
                {/* Big radial glow (purple) */}
                <div className="absolute -inset-[180px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.10)_0%,rgba(217,70,239,0.06)_35%,transparent_70%)] blur-2xl" />

                {/* Outer glow (border removed) - purple */}
                <div className="relative w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08)_0%,rgba(217,70,239,0.05)_45%,transparent_60%)]" />

                {/* Logo chip (theme-aware) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div ref={ref} className="absolute inset-0 m-[140px] rounded-full bg-white/80 dark:bg-background/80 backdrop-blur-sm border border-neutral-200/70 dark:border-white/10 flex items-center justify-center shadow-2xl">
                        {centerLogo}
                    </div>
                </motion.div>
            </div>
        </div>
    );
});

CentralHub.displayName = 'CentralHub';

export default CentralHub;