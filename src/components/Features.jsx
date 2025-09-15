"use client";

const cards = [
    {
        id: 1,
        title: "Compare All Premium AIs at Once",
        description:
            "Free AI models often deliver restricted and inferior answers. With AI Fiesta, you get access to multiple top-tier premium models, all in one place. Compare their responses side-by-side to experience faster, smarter, and most accurate answers.",
        features: [
            "Save hours of manual comparison",
            "Customize your AI team instantly",
            "Never miss the most accurate answer again",
        ],
        color: "#1e3a8a",
        icon: "⚡",
    },
    {
        id: 2,
        title: "Prompt Boost - Instant Enhancement",
        description:
            "No need to craft the perfect question. Just write what you want, hit Enhance Prompt, and watch every AI respond with smarter, richer answers.",
        features: [
            "Turn rough ideas into perfect prompts",
            "Get 10x better responses instantly",
            "No prompt engineering skills needed",
        ],
        color: "#14b8a6",
        icon: "🚀",
    },
    {
        id: 3,
        title: "Generate Images & Transcribe Audio",
        description:
            "Bring your creative and content ideas to life instantly with AI-powered image generation and fast, accurate audio transcription — no extra tools needed.",
        features: [
            "Generate high-quality images for any purpose",
            "Get instant, clear transcripts from your recorded audio",
            "Effortlessly edit outputs to meet specific project needs",
        ],
        color: "#ec4899",
        icon: "🎨",
    },
    {
        id: 4,
        title: "Custom Projects with System Instructions",
        description:
            "Create unique projects with tailored system guidelines. Set 'Marketing Mode' or 'Code Review Mode' once, ensuring every AI model follows your project's direction throughout.",
        features: [
            "One-time setup keeps all AI replies on-brand and on-task",
            "Instantly switch modes across chats",
            "Maintain consistent tone and rules without repetition",
        ],
        color: "#f97316",
        icon: "⚙️",
    },
];

const Card = ({ card }) => {
    return (
        <div className="w-full">
            <div
                className="max-w-7xl mx-auto rounded-3xl p-8 sm:p-12 border relative backdrop-blur-md shadow-xl border-neutral-200 dark:border-white/10 bg-gradient-to-br from-purple-300 via-blue-200 to-teal-100 opacity-95 dark:bg-gradient-to-br dark:from-purple-700 dark:via-blue-900 dark:to-teal-900 dark:opacity-95"
            >
                <div className="absolute inset-0 -z-10 pointer-events-none rounded-2xl">
                    <div className="w-full h-full rounded-2xl bg-[radial-gradient(circle,_rgba(168,85,247,0.45)_1px,_transparent_1px)] bg-[length:7px_7px] opacity-20 dark:bg-[radial-gradient(circle,_rgba(168,85,247,0.7)_1px,_transparent_1px)]" />
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <div className="space-y-6 text-gray-900 dark:text-white">
                        <div className="w-16 h-16 bg-white/30 dark:bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl">
                            {card.icon}
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                            {card.title}
                        </h2>
                        <p className="text-sm text-gray-700 dark:text-white/80 leading-relaxed max-w-2xl">
                            {card.description}
                        </p>
                        <div className="space-y-3">
                            {card.features.map((f, idx) => (
                                <div key={idx} className="flex items-center space-x-3">
                                    <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
                                        <svg
                                            className="w-4 h-4 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 dark:text-white/80">{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right placeholder */}
                    <div className="relative">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                            <div className="relative bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 min-h-[300px] flex items-center justify-center">
                                <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent rounded-xl flex items-center justify-center"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Features = () => {
    const headingRef = useRef(null);
    const inView = useInView(headingRef, { once: true, margin: "-100px" });

    return (
        <div id="features" className="w-full relative">
            {/* Header Section */}
            <div className="text-center py-16 px-4 sm:px-6 lg:px-8" ref={headingRef}>
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                    className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground dark:text-white leading-tight"
                >
                    One Window. Six Perspectives.
                    <br />
                    <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                        Achieve Optimal Efficiency.
                    </span>
                </motion.h2>
            </div>

            {/* Cards Section */}
            <div className="px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-16 pb-16">
                {cards.map((card, index) => (
                    <Card key={card.id} card={card} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Features;
