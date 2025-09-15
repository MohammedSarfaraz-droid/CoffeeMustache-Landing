'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedGradientButton from './ui/animated-gradient-button';

// Inline SVG icons
const CheckBadge = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3.75 13.5L9 18.75L21 6.75" stroke="#39D47A" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const WarningBadge = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M13.35 3.77L21.55 18.01C22.12 19.01 21.38 20.25 20.2 20.25H3.8C2.62 20.25 1.88 19.01 2.45 18.01L10.65 3.77C11.24 2.74 12.76 2.74 13.35 3.77Z" stroke="#DD910B" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 13.5V9.75" stroke="#DD910B" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 18C12.62 18 13.13 17.49 13.13 16.87C13.13 16.25 12.62 15.75 12 15.75C11.38 15.75 10.88 16.25 10.88 16.87C10.88 17.49 11.38 18 12 18Z" fill="#DD910B" />
    </svg>
);

const ErrorBadge = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M18.75 5.25L5.25 18.75" stroke="#E66B6B" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.75 18.75L5.25 5.25" stroke="#E66B6B" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ResultRow = ({ tone = 'green', title, subtitle }) => {
    const tones = {
        green: {
            bg: 'bg-emerald-500/10',
            border: 'border-emerald-500/25',
            ring: 'ring-emerald-500/10',
            Icon: CheckBadge,
            title: 'text-emerald-600 dark:text-emerald-300',
            subtitle: 'text-emerald-500/70 dark:text-emerald-200/70',
        },
        yellow: {
            bg: 'bg-purple-500/10',
            border: 'border-purple-500/25',
            ring: 'ring-purple-500/10',
            Icon: WarningBadge,
            title: 'text-purple-600 dark:text-purple-300',
            subtitle: 'text-purple-500/70 dark:text-purple-200/70',
        },
        red: {
            bg: 'bg-rose-500/10',
            border: 'border-rose-500/25',
            ring: 'ring-rose-500/10',
            Icon: ErrorBadge,
            title: 'text-rose-600 dark:text-rose-300',
            subtitle: 'text-rose-500/70 dark:text-rose-200/70',
        },
    };

    const { bg, border, ring, Icon, title: titleCls, subtitle: subtitleCls } = tones[tone];

    return (
        <div className={`relative flex items-center gap-3 sm:gap-3 rounded-2xl ${bg} border ${border} ring-1 ${ring} px-3 py-3 lg:px-4 lg:py-4 backdrop-blur-sm`}>
            <div className={`grid place-items-center rounded-xl ${bg} border ${border} p-1.5 shrink-0`}>
                <Icon />
            </div>
            <div className="flex-1 min-w-0">
                <div className={`text-sm sm:text-base font-semibold ${titleCls} truncate`}>{title}</div>
                <div className={`text-[11px] sm:text-xs ${subtitleCls}`}>{subtitle}</div>
            </div>
        </div>
    );
};

export default function VideoShowcase() {
    return (
        <section className="video-section py-10 relative">
            <div className="absolute inset-0 pointer-events-none">
                <div className="mx-auto max-w-7xl h-36 blur-3xl bg-purple-400/10 rounded-[4rem]" />
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="workflow-heading text-center mb-4 sm:mb-6">
                    <h2 className="cards-head text-[24px] sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground tracking-tight">
                        See How Coffee Mustache <span className="text-purple-600 dark:text-purple-400">Transforms Your Café</span>
                    </h2>
                    <div className="card-subhead text-base sm:text-lg text-foreground/70 mt-1">
                        From traditional POS limitations to AI-powered café growth. Watch the transformation.
                    </div>
                </div>

                <div className="video-wrapper grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-stretch lg:[grid-template-columns:1.15fr_0.85fr] xl:[grid-template-columns:1.2fr_0.8fr]">
                    {/* Left: Video */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="hero-div-left"
                    >
                        <div className="relative hero-video-wrapper h-full min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] flex items-center justify-center w-full max-w-[600px] mx-auto">
                            {/* Outer purple glow to match coffee theme */}
                            <div className="absolute -inset-3 rounded-3xl blur-2xl bg-gradient-to-r from-purple-400/25 via-orange-400/20 to-yellow-400/25" />

                            {/* Dummy image card for replacement */}
                            <div className="relative video-wraper rounded-2xl border border-purple-400/30 bg-black/60 overflow-hidden shadow-[0_10px_40px_rgba(245,158,11,0.15)] flex items-center justify-center h-full min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] w-full max-w-[600px] mx-auto">
                                <img
                                    src="/public/Images/upload-image-ai.png"
                                    alt="Demo Placeholder"
                                    className="object-contain w-full h-full max-h-[400px] sm:max-h-[480px] max-w-[600px]"
                                />
                            </div>

                            {/* Background image glow (decorative) */}
                            <img
                                src="https://cdn.prod.website-files.com/689597cc2d57ee623f5a24a2/6895b0d04eb7d9f9e28527dd_div%201.avif"
                                alt="VIDEO-BG"
                                className="video-img hidden md:block absolute -z-10 -inset-10 opacity-40 blur-2xl"
                                loading="lazy"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Results + CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="div-block-29 w-full max-w-md lg:max-w-lg xl:max-w-xl justify-self-end"
                    >
                        <h3 className="heading-4 text-foreground text-xl sm:text-2xl font-extrabold mb-3">
                            Why Cafés Choose Coffee Mustache
                        </h3>

                        <div className="video-result-wrapper space-y-3">
                            <ResultRow
                                tone="green"
                                title="100% Café-Focused Platform"
                                subtitle="Built exclusively for cafés, not generic restaurants or retail"
                            />
                            <ResultRow
                                tone="green"
                                title="AI Agents Execute Actions"
                                subtitle="Beyond analytics—AI takes action to grow your business automatically"
                            />
                            <ResultRow
                                tone="green"
                                title="One-Stop Growth Solution"
                                subtitle="Customer app + AI analytics + actionable insights in one platform"
                            />
                            <ResultRow
                                tone="yellow"
                                title="Zero Setup or Subscription Fees"
                                subtitle="We only earn when your café grows—aligned incentives for success"
                            />
                        </div>

                        {/* CTA */}
                        <div className="video-btn mt-3">
                            <AnimatedGradientButton
                                size="mobile"
                                variant="primary"
                                className="sm:w-auto whitespace-nowrap text-xs sm:text-sm px-3 sm:px-5"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const target = document.querySelector('#pricing');
                                    if (target) {
                                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    } else {
                                        window.location.hash = 'pricing';
                                    }
                                }}
                            >
                                Start Growing Your Café Today
                            </AnimatedGradientButton>
                            <div className="text-block text-foreground/60 text-[11px] sm:text-xs mt-2">
                                Join cafés already using AI to boost order value and customer loyalty
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}