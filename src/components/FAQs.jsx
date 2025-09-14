'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Chevron = ({ open }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
    >
        <path
            d="M20.031 10.003L12.531 17.503c-.07.07-.152.126-.243.164a.75.75 0 0 1-.574 0 1.01 1.01 0 0 1-.243-.164L3.97 10.003A.75.75 0 0 1 4.5 8.722c.199 0 .39.079.53.22l6.97 6.97 6.97-6.97c.07-.07.153-.125.244-.163.091-.038.188-.058.287-.058.098 0 .196.02.287.058.091.038.174.093.244.163a.75.75 0 0 1 0 1.06Z"
            fill="currentColor"
        />
    </svg>
);

const faqs = [
    {
        q: 'How is AI Fiesta different from subscribing to each AI separately?',
        a: "AI Fiesta brings together the world’s most powerful AI models — Grok 4, ChatGPT 5, Gemini 2.5 Pro, DeepSeek, Claude Sonnet 4, and Perplexity Sonar Pro — in one place. Instead of juggling multiple subscriptions and browser tabs, you get all answers side-by-side in a single chat window, plus exclusive features like Prompt Enhancer and Custom Projects.",
    },
    {
        q: 'Can I choose which AI models to use?',
        a: 'Yes! You can toggle AI models on or off at any time during your chat and turn them back on later without losing your chat history.',
    },
    {
        q: 'Do I get unlimited messages?',
        a: 'You get 3,000,000 tokens per month with your subscription. Each token is approximately ¾ of a word. For most users, this is far more than needed — the average usage is around 200,000 tokens per month. Standard models consume tokens at 1x rate whereas Premium models consume tokens at 4x rate.',
    },
    {
        q: 'What happens if I run out of tokens?',
        a: '3 million tokens is a very large allowance, and 99% of users never come close to exhausting it. You’ll see warnings before hitting zero.​ That said, if you reach that limit, please reach out to us at Support to get more tokens on paid basis.',
    },
    {
        q: 'Do you offer refunds?',
        a: 'No. All payments are non-refundable, regardless of usage. You may cancel any time to stop future billing (see our Terms & Conditions).',
    },
    {
        q: 'How can I manage or cancel my subscription?',
        a: 'Log in to AI Fiesta, go to Settings, and select your subscription management option.',
    },
    {
        q: 'Where can I access the Community and the Promptbook?',
        a: 'You can log in at community.aifiesta.ai using your registered email. Please note: this feature is only available to paid users.',
    },
    {
        q: 'Can I use AI Fiesta on my phone?',
        a: 'Yes! You can use AI Fiesta in your mobile browser at chat.aifiesta.ai or install our dedicated apps — Android and iOS — to access the platform anytime, anywhere.',
    },
    {
        q: 'Will I get free upgrades when new AI versions are released?',
        a: 'Yes! If ChatGPT releases Model 6 or another AI provider launches a higher version, you will get access at no extra cost.',
    },
];

export default function FAQs() {
    const [open, setOpen] = useState(() => new Set());

    const toggle = (idx) => {
        setOpen((prev) => {
            const next = new Set(prev);
            next.has(idx) ? next.delete(idx) : next.add(idx);
            return next;
        });
    };

    return (
        <section id="faqs" className="relative py-16 sm:py-20 lg:py-24">
            {/* Subtle glow background */}
            <div className="absolute inset-0 -z-10">
                <div className="mx-auto max-w-6xl h-48 blur-3xl bg-emerald-400/10 rounded-[4rem]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-center text-[24px] sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-6 sm:mb-8">
                        Frequently Asked Questions (<span className="text-purple-600 dark:text-purple-400">FAQs</span>)
                    </h2>

                    <div className="mx-auto max-w-5xl rounded-2xl md:rounded-3xl border border-purple-500/40 bg-black/5 dark:bg-black/40 backdrop-blur-sm p-5 sm:p-8 lg:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.25)] overflow-hidden">
                        <div className="divide-y divide-foreground/10">
                            {faqs.map((item, idx) => {
                                const isOpen = open.has(idx);
                                const panelId = `faq-panel-${idx}`;
                                return (
                                    <motion.div
                                        key={idx}
                                        className="py-5 sm:py-6 lg:py-8"
                                        initial={{ opacity: 0, y: 14 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.15 }}
                                        transition={{ duration: 0.4, delay: Math.min(idx * 0.06, 0.24) }}
                                    >
                                        <button
                                            type="button"
                                            onClick={() => toggle(idx)}
                                            className="w-full flex items-start justify-between gap-3 sm:gap-4 text-left"
                                            aria-expanded={isOpen}
                                            aria-controls={panelId}
                                        >
                                            <h3 className="text-base sm:text-xl lg:text-2xl font-semibold text-foreground/95">
                                                {item.q}
                                            </h3>
                                            <span className="text-foreground/70 shrink-0">
                                                <Chevron open={isOpen} />
                                            </span>
                                        </button>
                                        <div
                                            id={panelId}
                                            className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}
                                                `}
                                        >
                                            <div className="overflow-hidden">
                                                <motion.p
                                                    className="mt-3 text-xs sm:text-base lg:text-lg text-foreground/70 leading-relaxed"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: isOpen ? 1 : 0 }}
                                                    transition={{ duration: 0.25 }}
                                                >
                                                    {item.a}
                                                </motion.p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
