"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Characteristics section for Coffee Mustache - showcasing café-focused features
const CafeCharacteristics = () => {
    const cafeFeatures = [
        {
            id: 1,
            name: "Café-Only Focus",
            tag: "100% Specialized",
            description: "Built exclusively for cafés, not generic restaurants or retail. Every feature optimized for coffee shop operations.",
            icon: (
                // Coffee shop icon
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M3 21V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><rect x="7" y="10" width="10" height="7" rx="2" fill="white" /><path d="M9 17v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            ),
            position: "top-left"
        },
        {
            id: 2,
            name: "AI Dashboard + Actions",
            tag: "Beyond Analytics",
            description: "AI agents don't just show insights—they execute actions. From marketing campaigns to menu optimization, AI handles it.",
            icon: (
                // AI/robot icon
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><rect x="3" y="7" width="18" height="10" rx="5" fill="white" /><rect x="7" y="3" width="10" height="4" rx="2" fill="white" /><circle cx="8.5" cy="12" r="1.5" fill="white" /><circle cx="15.5" cy="12" r="1.5" fill="white" /><path d="M12 17v2" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
            ),
            position: "middle-left"
        },
        {
            id: 3,
            name: "Growth-Driven Operations",
            tag: "Not Just Smooth",
            description: "Beyond operational efficiency—every feature designed to increase order value, frequency, and customer loyalty.",
            icon: (
                // Growth chart icon
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M4 20V10m4 10V4m4 16v-7m4 7v-4" stroke="white" strokeWidth="2" strokeLinecap="round" /><path d="M4 20h16" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
            ),
            position: "bottom-left"
        },
        {
            id: 4,
            name: "Complete Ecosystem",
            tag: "One-Stop Solution",
            description: "Customer app, AI analytics, staff management, and POS integration—everything cafés need in one platform.",
            icon: (
                // Ecosystem/network icon
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" fill="white" /><circle cx="5" cy="5" r="2" fill="white" /><circle cx="19" cy="5" r="2" fill="white" /><circle cx="5" cy="19" r="2" fill="white" /><circle cx="19" cy="19" r="2" fill="white" /><path d="M12 9V5m0 10v4m7-7h-4m-6 0H5m10.6-6.6L14 9m-4 0L6.4 6.4m11.2 11.2L14 15m-4 0l-3.6 3.6" stroke="white" strokeWidth="1.5" /></svg>
            ),
            position: "top-right"
        },
        {
            id: 5,
            name: "AI Personalization",
            tag: "Customer Experience",
            description: "Personalized recommendations, one-click reorders, intelligent upsells—turning visitors into loyal regulars.",
            icon: (
                // Heart/star user icon
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" fill="white" /><path d="M4 20c0-4 4-7 8-7s8 3 8 7" stroke="white" strokeWidth="2" /><path d="M12 14l1.5 3.5L17 18l-2.75 2.25L15 23l-3-2-3 2 1.75-2.75L7 18l3.5-0.5L12 14z" fill="white" /></svg>
            ),
            position: "middle-right"
        },
        {
            id: 6,
            name: "Risk-Free Partnership",
            tag: "Aligned Success",
            description: "Zero setup costs, zero subscriptions. We only earn when your café grows—true partnership alignment.",
            icon: (
                // Handshake icon
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M8 13l-4-4a2 2 0 0 1 2.83-2.83l3.17 3.17 3.17-3.17A2 2 0 0 1 18 9l-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 13l4 4 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            ),
            position: "bottom-right"
        }
    ];

    const centerLogo = (
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="104" viewBox="0 0 120 104" fill="none" aria-label="Coffee Mustache Logo">
            <g>
                {/* Coffee Cup */}
                <path d="M30 25h50v45c0 8.284-6.716 15-15 15H45c-8.284 0-15-6.716-15-15V25z"
                    fill="url(#coffeeCupPurple)" stroke="url(#cupBorderPurple)" strokeWidth="2" />
                {/* Handle */}
                <path d="M80 35h8c6.627 0 12 5.373 12 12s-5.373 12-12 12h-8"
                    fill="none" stroke="url(#cupBorderPurple)" strokeWidth="3" strokeLinecap="round" />
                {/* Steam */}
                <path d="M40 20c0-3 2-5 2-8s-2-5-2-8"
                    fill="none" stroke="url(#steamPurple)" strokeWidth="2" strokeLinecap="round" className="animate-pulse" />
                <path d="M50 20c0-3 2-5 2-8s-2-5-2-8"
                    fill="none" stroke="url(#steamPurple)" strokeWidth="2" strokeLinecap="round" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                <path d="M60 20c0-3 2-5 2-8s-2-5-2-8"
                    fill="none" stroke="url(#steamPurple)" strokeWidth="2" strokeLinecap="round" className="animate-pulse" style={{ animationDelay: '1s' }} />
                {/* Mustache */}
                <path d="M35 75c5-3 10-3 15 0s10 3 15 0s10-3 15 0"
                    fill="none" stroke="url(#mustachePurple)" strokeWidth="4" strokeLinecap="round" />
                <ellipse cx="42" cy="75" rx="3" ry="1.5" fill="url(#mustachePurple)" />
                <ellipse cx="58" cy="75" rx="3" ry="1.5" fill="url(#mustachePurple)" />
                <ellipse cx="74" cy="75" rx="3" ry="1.5" fill="url(#mustachePurple)" />
            </g>
            <defs>
                <linearGradient id="coffeeCupPurple" x1="30" y1="25" x2="80" y2="85">
                    <stop offset="0%" stopColor="#A78BFA" />
                    <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
                <linearGradient id="cupBorderPurple" x1="30" y1="25" x2="80" y2="85">
                    <stop offset="0%" stopColor="#7C3AED" />
                    <stop offset="100%" stopColor="#A78BFA" />
                </linearGradient>
                <linearGradient id="steamPurple" x1="0" y1="0" x2="0" y2="20">
                    <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="mustachePurple" x1="35" y1="70" x2="80" y2="80">
                    <stop offset="0%" stopColor="#7C3AED" />
                    <stop offset="100%" stopColor="#A78BFA" />
                </linearGradient>
            </defs>
        </svg>
    );

    // Refs and state for dynamic connector paths
    const containerRef = useRef(null);
    const hubRef = useRef(null);
    const cardRefs = useRef({});
    const [containerSize, setContainerSize] = useState({ width: 1200, height: 800 });
    const [paths, setPaths] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    // Connection helpers: map card position -> line width to central hub (used for spacing only)
    const getConnectionConfig = (position) => {
        switch (position) {
            case "top-left":
                return { side: "left", lineW: "360px", offsetY: "-12px" };
            case "middle-left":
                return { side: "left", lineW: "330px", offsetY: "0px" };
            case "bottom-left":
                return { side: "left", lineW: "360px", offsetY: "12px" };
            case "top-right":
                return { side: "right", lineW: "360px", offsetY: "-12px" };
            case "middle-right":
                return { side: "right", lineW: "330px", offsetY: "0px" };
            case "bottom-right":
                return { side: "right", lineW: "360px", offsetY: "12px" };
            default:
                return { side: "left", lineW: "320px", offsetY: "0px" };
        }
    };

    // Build curved-then-straight connector path between a card and the hub boundary
    const buildPath = (side, sx, sy, ex, ey) => {
        const elbow = 80;
        const cp1x = side === 'left' ? sx + elbow : sx - elbow;
        const cp1y = sy;
        const cp2x = side === 'left' ? ex - elbow : ex + elbow;
        const cp2y = ey;
        return `M ${sx} ${sy} C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${ex} ${ey}`;
    };
    const buildStraight = (sx, sy, ex, ey) => `M ${sx} ${sy} L ${ex} ${ey}`;

    // Intersection Observer for animations
    useEffect(() => {
        let observer;
        const target = containerRef.current || document.getElementById('characteristics');
        if ('IntersectionObserver' in window && target) {
            observer = new window.IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                },
                { threshold: 0.1 }
            );
            observer.observe(target);
            return () => observer.disconnect();
        } else {
            // Fallback for browsers/environments where IntersectionObserver is not available
            setIsVisible(true);
            return () => { };
        }
    }, []);

    // Measure and compute paths on layout changes
    useEffect(() => {
        const measure = () => {
            const c = containerRef.current;
            const hub = hubRef.current;
            if (!c || !hub) return;
            const crect = c.getBoundingClientRect();
            const hrect = hub.getBoundingClientRect();
            const width = Math.max(1, Math.round(crect.width));
            const height = Math.max(1, Math.round(crect.height));
            setContainerSize({ width, height });

            const hx = hrect.left - crect.left + hrect.width / 2;
            const hy = hrect.top - crect.top + hrect.height / 2;
            const r = Math.min(hrect.width, hrect.height) / 2;
            const endLeftX = hx - r + 2;
            const endRightX = hx + r - 2;

            const joinOffset = 25;
            const joinLeftX = hx - r - joinOffset;
            const joinRightX = hx + r + joinOffset;

            const nextPaths = [];

            const leftFeatures = cafeFeatures.filter(m => m.position.includes('left'));
            for (const feature of leftFeatures) {
                const el = cardRefs.current[feature.id];
                if (!el) continue;
                const rect = el.getBoundingClientRect();
                const sx = rect.right - crect.left;
                const sy = rect.top - crect.top + rect.height / 2;
                if (feature.position === 'middle-left') {
                    nextPaths.push({ id: `${feature.id}-to-join`, side: 'left', d: buildStraight(sx, sy, joinLeftX, hy) });
                } else {
                    nextPaths.push({ id: `${feature.id}-to-join`, side: 'left', d: buildPath('left', sx, sy, joinLeftX, hy) });
                }
            }
            if (leftFeatures.length) {
                nextPaths.push({ id: `left-join-to-hub`, side: 'left', d: buildStraight(joinLeftX, hy, endLeftX, hy) });
            }

            const rightFeatures = cafeFeatures.filter(m => m.position.includes('right'));
            for (const feature of rightFeatures) {
                const el = cardRefs.current[feature.id];
                if (!el) continue;
                const rect = el.getBoundingClientRect();
                const sx = rect.left - crect.left;
                const sy = rect.top - crect.top + rect.height / 2;
                if (feature.position === 'middle-right') {
                    nextPaths.push({ id: `${feature.id}-to-join`, side: 'right', d: buildStraight(sx, sy, joinRightX, hy) });
                } else {
                    nextPaths.push({ id: `${feature.id}-to-join`, side: 'right', d: buildPath('right', sx, sy, joinRightX, hy) });
                }
            }
            if (rightFeatures.length) {
                nextPaths.push({ id: `right-join-to-hub`, side: 'right', d: buildStraight(joinRightX, hy, endRightX, hy) });
            }
            setPaths(nextPaths);
        };

        const ro = new ResizeObserver(() => measure());
        if (containerRef.current) ro.observe(containerRef.current);
        if (hubRef.current) ro.observe(hubRef.current);
        Object.values(cardRefs.current).forEach((el) => el && ro.observe(el));

        window.addEventListener('resize', measure);
        const id = requestAnimationFrame(measure);
        return () => {
            window.removeEventListener('resize', measure);
            cancelAnimationFrame(id);
            ro.disconnect();
        };
    }, []);

    return (
        <section id="characteristics" className="relative py-8 text-foreground overflow-hidden">
            <div className="container mx-auto px-2 sm:px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-[20px] sm:text-2xl md:text-3xl lg:text-[48px] font-bold mb-2 sm:mb-3 md:mb-4 leading-tight">
                        The <span className="text-purple-600 dark:text-purple-400">growth partner</span>
                        <br />
                        built only for <span className="text-purple-600 dark:text-purple-400">cafés</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-3xl mx-auto">
                        Unlike generic POS systems, Coffee Mustache is designed exclusively for café success with AI-driven insights and actions.
                    </p>
                </motion.div>

                {/* Responsive layout */}
                <div className="relative mx-auto w-full">
                    {/* Desktop layout: show logo, connectors, left/right stacks only for xl and up */}
                    <div className="hidden xl:block">
                        <div ref={containerRef} className="relative mx-auto max-w-7xl h-[760px] xl:max-w-[1400px] xl:h-[820px]" style={{ maxWidth: '100vw' }}>
                            {/* Connector overlay (SVG) */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox={`0 0 ${containerSize.width} ${containerSize.height}`} preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="connGradientL" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#D97706" stopOpacity="0.75" />
                                        <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.75" />
                                    </linearGradient>
                                    <linearGradient id="connGradientR" x1="100%" y1="0%" x2="0%" y2="0%">
                                        <stop offset="0%" stopColor="#D97706" stopOpacity="0.75" />
                                        <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.75" />
                                    </linearGradient>
                                </defs>
                                {paths.map((p, index) => (
                                    <path
                                        key={p.id}
                                        d={p.d}
                                        stroke={p.side === 'left' ? 'url(#connGradientL)' : 'url(#connGradientR)'}
                                        strokeWidth={2}
                                        fill="none"
                                        opacity="0.7"
                                        strokeDasharray="5,5"
                                        className={isVisible ? 'animate-pulse' : ''}
                                        style={{
                                            animationDelay: `${index * 0.2}s`,
                                            animationDuration: '2s'
                                        }}
                                    />
                                ))}
                            </svg>

                            {/* Central Hub */}
                            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                <div className="relative">
                                    <div className="absolute -inset-[180px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,139,250,0.10)_0%,rgba(124,58,237,0.06)_35%,transparent_70%)] blur-2xl" />
                                    <div className="relative w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,139,250,0.08)_0%,rgba(124,58,237,0.05)_45%,transparent_60%)]" />
                                    <div
                                        ref={hubRef}
                                        className={`absolute inset-0 m-[140px] rounded-full bg-white/80 dark:bg-background/80 backdrop-blur-sm border border-neutral-200/70 dark:border-white/10 flex items-center justify-center shadow-2xl transition-all duration-800 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                                    >
                                        {centerLogo}
                                    </div>
                                </div>
                            </div>

                            {/* Left stack */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 md:gap-8">
                                {cafeFeatures.filter(m => m.position.includes('left')).map((feature, idx) => {
                                    return (
                                        <div
                                            key={feature.id}
                                            className={`relative group w-[420px] md:w-[460px] transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                                            style={{ transitionDelay: `${idx * 100}ms` }}
                                            ref={(el) => {
                                                if (el) cardRefs.current[feature.id] = el;
                                            }}
                                        >
                                            <div className="relative bg-white/80 dark:bg-[#0C0F10]/90 backdrop-blur-md border border-neutral-200/70 dark:border-white/10 border-r-4 border-b-4 border-r-purple-500 border-b-purple-500 dark:border-r-purple-400 dark:border-b-purple-400 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
                                                <div className="flex items-start gap-3">
                                                    <div className="relative p-3 bg-purple-700/80 bg-gradient-to-br from-purple-600/20 to-orange-600/20 dark:from-purple-500/25 dark:to-orange-500/25 rounded-xl border border-purple-600/20 dark:border-purple-400/25">{feature.icon}</div>
                                                    <div className="flex-1">
                                                        <h3 className="text-lg md:text-xl font-semibold">{feature.name}</h3>
                                                        <div className="mt-1 inline-block px-3 py-1 bg-purple-500/10 dark:bg-purple-500/15 text-purple-700 dark:text-purple-300 text-xs md:text-sm rounded-full border border-purple-600/20 dark:border-purple-400/25">{feature.tag}</div>
                                                        <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{feature.description}</p>
                                                    </div>
                                                </div>
                                                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Right stack */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 md:gap-8 items-end">
                                {cafeFeatures.filter(m => m.position.includes('right')).map((feature, idx) => {
                                    return (
                                        <div
                                            key={feature.id}
                                            className={`relative group w-[420px] md:w-[460px] transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                                            style={{ transitionDelay: `${idx * 100}ms` }}
                                            ref={(el) => {
                                                if (el) cardRefs.current[feature.id] = el;
                                            }}
                                        >
                                            <div className="relative bg-white/80 dark:bg-[#0C0F10]/90 backdrop-blur-md border border-neutral-200/70 dark:border-white/10 border-r-4 border-b-4 border-r-purple-500 border-b-purple-500 dark:border-r-purple-400 dark:border-b-purple-400 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
                                                <div className="flex items-start gap-3">
                                                    <div className="relative p-3 bg-purple-700/80 bg-gradient-to-br from-purple-600/20 to-orange-600/20 dark:from-purple-500/25 dark:to-orange-500/25 rounded-xl border border-purple-600/20 dark:border-purple-400/25">{feature.icon}</div>
                                                    <div className="flex-1">
                                                        <h3 className="text-lg md:text-xl font-semibold">{feature.name}</h3>
                                                        <div className="mt-1 inline-block px-3 py-1 bg-purple-500/10 dark:bg-purple-500/15 text-purple-700 dark:text-purple-300 text-xs md:text-sm rounded-full border border-purple-600/20 dark:border-purple-400/25">{feature.tag}</div>
                                                        <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{feature.description}</p>
                                                    </div>
                                                </div>
                                                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-l from-purple-400/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Floating particles */}
                            <div className="absolute inset-0 pointer-events-none">
                                {[...Array(18)].map((_, i) => (
                                    <span
                                        key={i}
                                        className={`absolute w-1 h-1 rounded-full bg-purple-500/30 dark:bg-purple-400/40 ${isVisible ? 'animate-pulse' : ''}`}
                                        style={{
                                            left: `${(i * 53) % 100}%`,
                                            top: `${(i * 37) % 100}%`,
                                            animationDelay: `${(i % 6) * 300}ms`,
                                            animationDuration: '3s'
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Medium and small screens: stacked cards */}
                    <div className="block xl:hidden">
                        <div className="flex flex-col items-center gap-4 sm:gap-6 w-full max-w-2xl mx-auto mt-8">
                            {cafeFeatures.map((feature, idx) => (
                                <motion.div
                                    key={feature.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                                    className="w-full"
                                >
                                    <div className="relative bg-white/80 dark:bg-[#0C0F10]/90 backdrop-blur-md border border-neutral-200/70 dark:border-white/10 border-r-4 border-b-4 border-r-purple-500 border-b-purple-500 dark:border-r-purple-400 dark:border-b-purple-400 rounded-2xl p-3 sm:p-4 shadow-xl min-h-[110px] hover:shadow-2xl transition-shadow">
                                        <div className="flex items-start gap-2 sm:gap-3">
                                            <div className="relative p-2 sm:p-3 bg-purple-700/80 bg-gradient-to-br from-purple-600/20 to-orange-600/20 dark:from-purple-500/25 dark:to-orange-500/25 rounded-xl border border-purple-600/20 dark:border-purple-400/25">{feature.icon}</div>
                                            <div className="flex-1">
                                                <h3 className="text-base sm:text-lg md:text-xl font-semibold">{feature.name}</h3>
                                                <div className="mt-1 inline-block px-2 sm:px-3 py-1 bg-purple-500/10 dark:bg-purple-500/15 text-purple-700 dark:text-purple-300 text-xs sm:text-sm rounded-full border border-purple-600/20 dark:border-purple-400/25">{feature.tag}</div>
                                                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-foreground/70 leading-relaxed">{feature.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CafeCharacteristics;