'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedGradientButton from './ui/animated-gradient-button';

export default function FooterCTA() {
    return (
        <footer className="relative overflow-hidden">
            {/* Background image */}
            <Image
                src="/Images/footerbg.png"
                alt=""
                aria-hidden="true"
                fill
                priority
                sizes="100vw"
                className="absolute inset-0 -z-10 object-cover object-center opacity-40 dark:opacity-80"
            />
            {/* Top soft fade overlay to make image start subtle */}
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-[5] h-32 sm:h-48 lg:h-56 bg-gradient-to-b from-white via-white/40 to-transparent dark:from-black dark:via-black/40 dark:to-transparent" />
            {/* Ambient arc/gradient overlay */}
            <div className="pointer-events-none absolute inset-x-0 -top-40 sm:-top-60 -z-20 h-[420px] sm:h-[520px] bg-gradient-to-b from-emerald-500/10 via-teal-500/5 to-transparent dark:from-emerald-500/10 dark:via-teal-500/5 dark:to-transparent" />

            <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                {/* CTA block */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                    className="text-center pt-14 sm:pt-20 lg:pt-28"
                >
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                        className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground tracking-tight leading-tight"
                    >
                        <span className="block">Ready to experience <span className="text-purple-600 dark:text-purple-400">smarter & more accurate AI answers</span>?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                        className="mx-auto mt-3 sm:mt-4 max-w-3xl md:max-w-4xl text-foreground/80 text-sm xs:text-base sm:text-lg leading-relaxed"
                    >
                        <span className="block">Gain an edge with our exclusive Promptbook, designed</span>
                        <span className="block">to provide you with tailored insights and guidance</span>
                        <span className="block">across every industry and subject.</span>
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <AnimatedGradientButton
                            size="mobile"
                            variant="primary"
                            showArrow={true}
                            arrowDirection="right"
                            className="sm:w-auto mt-6 sm:mt-8 text-base sm:text-lg"
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
                            Get Started Now
                        </AnimatedGradientButton>
                    </motion.div>
                </motion.div>

                {/* Footer branding and links */}
                <div className="mt-16 sm:mt-20 lg:mt-24 pb-6 sm:pb-10 lg:pb-14 pb-[env(safe-area-inset-bottom)]">
                    <div className="flex flex-col items-center gap-3">
                        {/* Logo mark (placeholder glow star) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1.04 }}
                            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], repeat: Infinity, repeatType: 'reverse' }}
                            className="grid place-items-center rounded-full p-2 bg-gradient-to-r from-emerald-400/30 to-sky-400/30 ring-1 ring-foreground/10 shadow-lg"
                        >
                            {/* Using same star/crest style from provided SVG color palette */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" fill="none">
                                <path d="M12 22c-.26-1.79-1.08-3.49-2.34-4.75A8.5 8.5 0 0 0 4.9 14.9c1.79-.26 3.49-1.08 4.75-2.34A8.5 8.5 0 0 0 12 7.8c.26 1.79 1.08 3.49 2.34 4.75a8.5 8.5 0 0 0 4.76 2.35 8.5 8.5 0 0 0-4.76 2.35C13.08 18.51 12.26 20.21 12 22Z" fill="#39D47A" fillOpacity="0.8" />
                            </svg>
                        </motion.div>
                        <span className="text-foreground text-2xl sm:text-3xl font-semibold">AI Fiesta</span>
                    </div>

                    {/* Email */}
                    <div className="mt-3 flex items-center gap-2 text-foreground/85 text-sm sm:text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className="w-5 h-5" fill="none">
                            <path d="M21.2832 3.69011c-.101-.10075-.2289-.17052-.3684-.20108-.1395-.03056-.2848-.02065-.4189.02856L3.99573 9.51761A.75.75 0 0 0 3.51172 10.2189c0 .1521.0463.3007.13275.426.08645.1252.20897.2211.35127.2751l6.44246 2.5725 4.755-4.77 1.0575 1.0575-4.7775 4.7775 2.58 6.4425a.75.75 0 0 0 1.4112-.0698l6-16.5a.75.75 0 0 0-.1969-.7875Z" fill="currentColor" />
                        </svg>
                        <a href="mailto:support@aifiesta.ai" className="hover:underline">support@aifiesta.ai</a>
                    </div>

                    {/* Divider under contact row */}
                    <div className="mt-6 w-full">
                        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-purple-500/80 to-transparent shadow-sm shadow-purple-500/20" />
                    </div>

                    {/* Bottom row: links left, copyright right */}
                    <div className="mt-6 w-full flex flex-col-reverse sm:flex-row items-center sm:items-center justify-between gap-3 sm:gap-4 text-foreground/70 text-sm">
                        <div className="flex items-center gap-4 flex-wrap">
                            <a href="https://chat.aifiesta.ai/privacy" target="_blank" className="hover:text-foreground">Privacy Policy</a>
                            <a href="https://chat.aifiesta.ai/terms" target="_blank" className="hover:text-foreground">Terms & Conditions</a>
                        </div>
                        <div className="opacity-80 sm:text-right w-full sm:w-auto text-center sm:text-right">© 2025 AI Fiesta. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
