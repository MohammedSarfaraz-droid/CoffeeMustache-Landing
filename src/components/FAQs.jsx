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
        q: 'How is Coffee Mustache different from traditional POS systems?',
        a: "Coffee Mustache is built exclusively for cafés, not as a generic solution for restaurants or retail. Unlike traditional POS systems that just process transactions, we're your AI growth partner. Our platform combines a personalized customer app with AI Agentic Business Intelligence that doesn't just provide reports—it takes actionable steps to grow your business automatically.",
    },
    {
        q: 'Do I need to replace my existing POS system?',
        a: 'Not necessarily! Coffee Mustache can work in two ways: (1) Layer on top of your existing POS as an AI analytics and growth tool, or (2) Upgrade to our full Coffee Mustache POS with integrated AI agents that execute actions automatically. You choose what works best for your café.',
    },
    {
        q: 'What does "zero cost for cafés" really mean?',
        a: 'We have aligned incentives with your success. There are no setup fees, monthly subscriptions, or upfront costs for café owners. We only earn through a small customer convenience fee (₹4–₹19 per order) when customers use our platform. If your café grows, we grow. If you don\'t succeed, we don\'t either.',
    },
    {
        q: 'How do AI agents actually help my café grow?',
        a: 'Our AI agents monitor your café\'s data 24/7, analyze customer behavior, menu performance, and sales trends, then automatically execute growth actions like personalized customer recommendations, menu optimization suggestions, targeted marketing campaigns, and loyalty program adjustments. It\'s like having a business consultant working around the clock.',
    },
    {
        q: 'Will customers complain about the convenience fee?',
        a: 'Our model is market-proven with less than 1% customer complaints. The convenience fee covers premium features like AI personalization, one-click reorders, intelligent menu recommendations, and seamless service that customers value. Most customers appreciate the enhanced experience.',
    },
    {
        q: 'What kind of insights and analytics do I get?',
        a: 'You get a complete 360° business view including executive summaries, revenue and sales trends, menu performance analysis, customer behavior and loyalty insights, and staff performance metrics. Our AI agents deliver clear, actionable insights rather than confusing data dumps, plus downloadable reports anytime.',
    },
    {
        q: 'Can I use Coffee Mustache if I\'m not tech-savvy?',
        a: 'Absolutely! Coffee Mustache is designed to be intuitive for café owners, not tech experts. Our AI agents do the heavy lifting of data analysis and provide simple, clear recommendations. The customer app is user-friendly, and our dashboard presents insights in plain English, not technical jargon.',
    },
    {
        q: 'How quickly will I see results in my café?',
        a: 'Most cafés see immediate improvements in customer experience through personalized recommendations and streamlined ordering. Business growth typically becomes visible within 2-4 weeks as AI agents optimize menu positioning, boost order values through intelligent upselling, and increase customer return frequency.',
    },
    {
        q: 'What happens to my data and customer information?',
        a: 'Your data remains secure and private. We use enterprise-grade security measures to protect customer information and business data. The AI analysis happens within secure systems, and we never share your sensitive business information with third parties.',
    },
    {
        q: 'Can I customize the platform for my café\'s specific needs?',
        a: 'Yes! While Coffee Mustache is purpose-built for cafés, we understand each café has unique characteristics. Our AI agents learn your specific customer patterns, menu preferences, and business rhythms to provide increasingly personalized recommendations and actions tailored to your café\'s success.',
    },
    {
        q: 'How do I get started with Coffee Mustache?',
        a: 'Getting started is simple and risk-free. Contact us at teja@coffeemustache.com or visit coffeemustache.in to schedule a demo. We\'ll show you how Coffee Mustache can transform your café\'s growth, and you can choose whether to layer it on your existing system or upgrade to our full POS solution.',
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
            {/* Subtle coffee-themed glow background */}
            <div className="absolute inset-0 -z-10">
                <div className="mx-auto max-w-6xl h-48 blur-3xl bg-purple-400/10 rounded-[4rem]" />
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