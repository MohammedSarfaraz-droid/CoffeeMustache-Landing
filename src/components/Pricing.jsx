"use client";

import React, { useState } from 'react';
import { motion } from "motion/react";
import AnimatedGradientButton from './ui/animated-gradient-button';
import { LampContainer } from './ui/lamp';

const Pricing = () => {
    const [selectedPlan, setSelectedPlan] = useState('monthly');
    const [lampHovered, setLampHovered] = useState(false);

    // AI Models data
    const aiModels = [
        {
            name: "ChatGPT Plus GPT-5",
            price: "$20/mo",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clipPath="url(#clip0_chatgpt)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.958 8.33672C18.166 7.71979 18.2382 7.06514 18.1694 6.4177C18.1007 5.77026 17.8926 5.14536 17.5596 4.58589C16.5455 2.84422 14.508 1.94755 12.518 2.36922C12.0772 1.88122 11.5381 1.49206 10.9362 1.22735C10.3342 0.962643 9.68304 0.828377 9.02547 0.833387C6.99131 0.829221 5.18631 2.12172 4.56047 4.03172C3.91719 4.16049 3.30863 4.42458 2.77518 4.80646C2.24173 5.18834 1.79557 5.67928 1.46631 6.24672C0.968623 7.09194 0.755922 8.0748 0.85961 9.05016C0.963299 10.0255 1.37788 10.9417 2.04214 11.6634C1.83382 12.2804 1.76148 12.9352 1.83009 13.5827C1.89871 14.2303 2.10665 14.8554 2.43964 15.4151C3.45381 17.1567 5.49131 18.0526 7.48131 17.6317C7.92192 18.1196 8.46088 18.5087 9.06271 18.7733C9.66454 19.0378 10.3156 19.1719 10.973 19.1667C13.0088 19.1717 14.8146 17.8784 15.4405 15.9667C16.0842 15.838 16.6932 15.5737 17.2269 15.1916C17.7607 14.8094 18.207 14.318 18.5363 13.7501C19.033 12.9049 19.2451 11.9225 19.1411 10.9477C19.0371 9.97286 18.6226 9.05726 17.9588 8.33589L17.958 8.33672Z" fill="white" fillOpacity="0.8" />
                    </g>
                    <defs>
                        <clipPath id="clip0_chatgpt">
                            <rect width="20" height="20" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            )
        },
        {
            name: "Google Gemini 2.5 Pro",
            price: "$20/mo",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clipPath="url(#clip0_gemini)">
                        <path d="M10 20C9.61883 17.4841 8.44253 15.1561 6.6432 13.3568C4.84386 11.5575 2.51593 10.3812 0 10C2.51593 9.61883 4.84386 8.44253 6.6432 6.6432C8.44253 4.84386 9.61883 2.51593 10 0C10.3813 2.51588 11.5576 4.84374 13.3569 6.64306C15.1563 8.44237 17.4841 9.61871 20 10C17.4841 10.3813 15.1563 11.5576 13.3569 13.3569C11.5576 15.1563 10.3813 17.4841 10 20Z" fill="white" fillOpacity="0.8" />
                    </g>
                    <defs>
                        <clipPath id="clip0_gemini">
                            <rect width="20" height="20" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            )
        },
        {
            name: "Perplexity Pro",
            price: "$20/mo",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.4875 0.00012207V6.06012H18.75V14.6835H16.3042V20.0001L10.44 14.8385V19.9593H9.53083V14.8326L3.66 20.0001V14.6126H1.25V5.99012H3.65333V0.00012207L9.53083 5.41179V0.158455H10.4392V5.56679L16.4875 0.00012207Z" fill="white" fillOpacity="0.8" />
                </svg>
            )
        },
        {
            name: "Claude Pro - Sonnet 4",
            price: "$20/mo",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3.92417 13.2958L7.8575 11.09L7.92417 10.8983L7.8575 10.7917H7.66667L7.00833 10.7517L4.76 10.6908L2.81083 10.61L0.9225 10.5083L0.446667 10.4075L0 9.82L0.0458333 9.52667L0.445833 9.25917L1.0175 9.30917L2.28417 9.395L4.1825 9.52667L5.55917 9.6075L7.6 9.82H7.92417L7.97 9.68917L7.85833 9.6075L7.7725 9.52667L5.8075 8.19667L3.68083 6.79L2.5675 5.98L1.96417 5.57083L1.66083 5.18583L1.52917 4.34583L2.07583 3.74417L2.81 3.79417L2.9975 3.845L3.74167 4.41667L5.33167 5.64667L7.4075 7.17417L7.71167 7.4275L7.8325 7.34167L7.84833 7.28083L7.71167 7.0525L6.5825 5.01417L5.3775 2.93917L4.84083 2.07917L4.69917 1.56333C4.64519 1.36521 4.61608 1.16114 4.6125 0.955833L5.23583 0.111667L5.58 0L6.41 0.111667L6.76 0.415L7.27667 1.59333L8.11167 3.45083L9.4075 5.97583L9.7875 6.72417L9.99 7.4175L10.0658 7.63H10.1975V7.50833L10.3042 6.08667L10.5017 4.34083L10.6933 2.095L10.76 1.46167L11.0733 0.703333L11.6958 0.293333L12.1825 0.526667L12.5825 1.0975L12.5267 1.4675L12.2883 3.01L11.8225 5.42917L11.5192 7.0475H11.6958L11.8983 6.84583L12.7192 5.7575L14.0958 4.0375L14.7042 3.35417L15.4125 2.60083L15.8683 2.24167H16.7292L17.3625 3.1825L17.0792 4.15417L16.1925 5.27667L15.4583 6.22833L14.405 7.645L13.7467 8.77833L13.8075 8.87L13.9642 8.85333L16.3442 8.34833L17.63 8.115L19.1642 7.8525L19.8583 8.17583L19.9342 8.505L19.6608 9.1775L18.02 9.5825L16.0958 9.9675L13.23 10.645L13.195 10.67L13.2358 10.7208L14.5267 10.8425L15.0783 10.8725H16.43L18.9467 11.06L19.605 11.495L20 12.0267L19.9342 12.4308L18.9217 12.9475L17.555 12.6233L14.3642 11.865L13.2708 11.5908H13.1192V11.6825L14.03 12.5725L15.7017 14.0808L17.7925 16.0225L17.8983 16.5042L17.63 16.8833L17.3467 16.8425L15.5092 15.4617L14.8 14.8392L13.195 13.4892H13.0883V13.6308L13.4583 14.1717L15.4125 17.1058L15.5142 18.0058L15.3725 18.3L14.8658 18.4775L14.3092 18.3758L13.1642 16.7717L11.985 14.9658L11.0325 13.3467L10.9158 13.4133L10.3542 19.4583L10.0908 19.7667L9.48333 20L8.9775 19.6158L8.70917 18.9933L8.9775 17.7633L9.30167 16.16L9.56417 14.885L9.8025 13.3017L9.94417 12.775L9.93417 12.74L9.8175 12.755L8.6225 14.3942L6.80583 16.8483L5.3675 18.3858L5.0225 18.5225L4.425 18.2142L4.48083 17.6625L4.815 17.1717L6.805 14.6417L8.005 13.0733L8.78 12.1683L8.775 12.0367H8.72917L3.44333 15.4667L2.50167 15.5883L2.09583 15.2083L2.14667 14.5867L2.33917 14.3842L3.92917 13.2908L3.92417 13.2958Z" fill="white" fillOpacity="0.8" />
                </svg>
            )
        },
        {
            name: "Grok 4",
            price: "$30/mo",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.725 12.7418L14.3733 7.82764C14.6992 7.58598 15.165 7.68014 15.3208 8.05431C16.1375 10.0285 15.7725 12.4001 14.1458 14.0285C12.52 15.6568 10.2567 16.0135 8.18833 15.2001L5.92917 16.2476C9.17 18.4651 13.105 17.9168 15.5642 15.4535C17.515 13.5001 18.1192 10.8376 17.5542 8.43681L17.5592 8.44264C16.74 4.91598 17.7608 3.50598 19.8508 0.623476C19.9008 0.555142 19.9508 0.486809 20 0.416809L17.2492 3.17098V3.16264L7.7225 12.7435M6.3525 13.936C4.02583 11.711 4.4275 8.26848 6.41167 6.28264C7.87917 4.81348 10.2842 4.21348 12.3833 5.09514L14.6375 4.05348C14.169 3.70882 13.6564 3.42855 13.1133 3.22014C11.7482 2.66139 10.2482 2.5188 8.80224 2.81032C7.35623 3.10183 6.02872 3.81443 4.98667 4.85848C2.87583 6.97181 2.21167 10.2218 3.35167 12.9951C4.20333 15.0676 2.8075 16.5335 1.40167 18.0135C0.9025 18.5385 0.4025 19.0626 0 19.6176L6.35 13.9385" fill="white" fillOpacity="0.8" />
                </svg>
            )
        }
    ];

    const aiModelFeatures = [
        "Multiple subscriptions to manage - expensive",
        "Constant tab switching",
        "No comparison features"
    ];

    const coffeeFeatures = [
        "All premium AI models included",
        "Side-by-side comparison",
        "3 million tokens/month (Premium models count as 4×)",
        "Instant prompt enhancement",
        "Image generation & Audio transcription"
    ];

    return (
    <section id="pricing" className="w-full py-10 overflow-x-hidden overflow-y-hidden min-h-0">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full overflow-x-hidden overflow-y-hidden min-h-0">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-center mb-8 sm:mb-12 lg:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 leading-tight">
                        <span className="block sm:inline">Get 6 Premium AI Models</span>
                        <br className="hidden sm:block" />
                        <span className="block sm:inline">for <span className="text-purple-500">Half the Price of One</span></span>
                    </h2>
                    <div className="flex items-center justify-center gap-2 text-orange-500 bg-orange-500/10 px-3 sm:px-4 py-2 rounded-full inline-flex max-w-full">
                        <span className="text-base sm:text-lg flex-shrink-0">🔥</span>
                        <span className="text-xs sm:text-sm font-medium text-center">Limited time: Save 90% compared to individual subscriptions</span>
                    </div>
                </motion.div>

                {/* Pricing Comparison */}
                <div className="w-full max-w-full mx-auto">
                    {/* Responsive Layout */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 w-full max-w-full mx-auto overflow-x-hidden overflow-y-hidden min-h-0">
                        {/* Individual AI Subscriptions */}
                        <motion.div
                            initial={{ opacity: 0, x: -60, scale: 0.97 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                            className="bg-black/5 dark:bg-black/30 backdrop-blur-sm border border-foreground/10 dark:border-white/20 rounded-xl lg:rounded-2xl p-4 sm:p-6 w-full max-w-full sm:max-w-md lg:max-w-none lg:w-[400px] flex-shrink-0 shadow-xl shadow-black/10 dark:shadow-purple-900/10"
                        >
                            <div className="text-center mb-4 sm:mb-6">
                                <h3 className="text-base sm:text-lg font-medium lg:font-semibold text-foreground/90 mb-3 lg:mb-4">Individual AI Subscriptions</h3>
                                <div className="mb-2">
                                    <span className="text-2xl sm:text-3xl font-bold text-red-500 dark:text-red-400">$110</span>
                                    <span className="text-sm lg:text-base text-foreground/60 ml-2">(~₹10,000)</span>
                                </div>
                                <p className="text-xs sm:text-sm text-foreground/50">What you're paying now</p>
                            </div>

                            {/* AI Models List */}
                            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 lg:grid lg:grid-cols-1 xl:space-y-2">
                                {aiModels.map((model, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 18 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.45, delay: 0.18 + index * 0.09, ease: 'easeOut' }}
                                        className="flex items-center justify-between p-2.5 sm:p-3 bg-foreground/[0.02] dark:bg-white/[0.01] lg:bg-foreground/[0.03] lg:dark:bg-white/[0.02] rounded-lg shadow-sm"
                                    >
                                        <div className="flex items-center gap-2 sm:gap-2.5">
                                            <div className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0">{model.icon}</div>
                                            <span className="text-xs sm:text-sm text-foreground/80 truncate">{model.name}</span>
                                        </div>
                                        <span className="text-xs sm:text-sm text-red-500 dark:text-red-400 font-medium flex-shrink-0">{model.price}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Features */}
                            <div className="space-y-2.5 sm:space-y-3">
                                {aiModelFeatures.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 14 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.28 + index * 0.09, ease: 'easeOut' }}
                                        className="flex items-center gap-2.5 sm:gap-3"
                                    >
                                        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                                            <svg width="8" height="8" className="sm:w-3 sm:h-3" viewBox="0 0 16 16" fill="none">
                                                <path d="M12.5 3.5L3.5 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 dark:text-red-400" />
                                                <path d="M12.5 12.5L3.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 dark:text-red-400" />
                                            </svg>
                                        </div>
                                        <span className="text-xs sm:text-sm text-foreground/60">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* VS Divider */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex items-center justify-center relative w-fit max-w-full lg:w-[120px] flex-shrink-0"
                        >
                            {/* Main VS circle with prominent glow */}
                            <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 font-black text-sm sm:text-base lg:text-lg tracking-wider shadow-lg border border-gray-300 dark:border-gray-600">
                                {/* Multiple glow layers for prominence */}
                                <div className="absolute inset-0 rounded-full bg-purple-400/60 blur-lg scale-150 -z-10"></div>
                                <div className="absolute inset-0 rounded-full bg-purple-400/40 blur-md scale-125 -z-10"></div>
                                <div className="absolute inset-0 rounded-full bg-purple-400/50 blur-sm -z-10"></div>
                                VS
                            </div>
                        </motion.div>

                        {/* Coffee Mustache Plan */}
                        <motion.div
                            initial={{ opacity: 0, x: 60, scale: 0.97 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                            className="relative w-full max-w-full sm:max-w-md lg:max-w-none lg:w-[600px] flex-shrink-0 shadow-xl shadow-purple-400/10 dark:shadow-purple-900/10"
                        >
                            {/* Outer glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-violet-400/10 rounded-xl lg:rounded-2xl blur-xl scale-105"></div>

                            {/* Card content */}
                            <div className="relative bg-gradient-to-br from-purple-50/70 to-violet-50/60 dark:from-purple-900/20 dark:to-violet-800/15 backdrop-blur-sm border border-purple-400/30 rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 overflow-hidden">
                                {/* Inner glow effect */}
                                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>

                                {/* Very Prominent Lamp Head with Thick Line */}
                                <div className="absolute left-1/2 -translate-x-1/2 -top-24 z-20 pointer-events-none">
                                    {/* Lamp Head - VERY THICK and PROMINENT */}
                                    <motion.div
                                        initial={{ opacity: 0, scaleY: 0.3 }}
                                        whileInView={{ opacity: 1, scaleY: 1 }}
                                        whileHover={{ scale: 1.04, boxShadow: "0 0 40px 10px #a78bfa" }}
                                        onHoverStart={() => setLampHovered(true)}
                                        onHoverEnd={() => setLampHovered(false)}
                                        transition={{ duration: 2.5, ease: "easeOut" }}
                                        className="relative cursor-pointer"
                                    >
                                        {/* Main Lamp Housing - EXTREMELY THICK and PROMINENT */}
                                        <div className="w-56 h-20 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500 rounded-t-3xl shadow-2xl relative mx-auto" style={{ borderWidth: '16px', border: '16px solid #4b5563' }}>
                                            {/* Lamp Reflections */}
                                            <div className="absolute top-3 left-6 w-8 h-4 bg-white/70 rounded-full blur-sm"></div>
                                            <div className="absolute top-3 right-6 w-10 h-3 bg-white/50 rounded-full"></div>
                                            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-2 bg-gray-400 rounded-full"></div>
                                            {/* Additional metallic details */}
                                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-500 rounded-full"></div>
                                        </div>

                                        {/* Light Emission Surface - EXTREMELY THICK */}
                                        <div className="w-52 h-12 bg-gradient-to-r from-yellow-100 via-white to-yellow-100 rounded-b-2xl -mt-3 mx-auto shadow-2xl shadow-purple-300/70 relative" style={{ borderWidth: '8px', border: '8px solid #fef08a' }}>
                                            {/* Bright center emission - Much Thicker */}
                                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-5 bg-white rounded-full shadow-xl shadow-white/90"></div>
                                            {/* Additional light emission layers */}
                                            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-36 h-3 bg-yellow-100 rounded-full"></div>
                                        </div>
                                    </motion.div>

                                    {/* Purple Light Beams - Narrower Width, Same Distance */}
                                    <motion.div
                                        initial={{ opacity: 0.2, width: "8rem" }}
                                        whileInView={{ opacity: 0.8, width: "40rem" }}
                                        transition={{
                                            delay: 1.5,
                                            duration: 4.0,
                                            ease: [0.25, 0.1, 0.25, 1],
                                        }}
                                        style={{
                                            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                                        }}
                                        className="absolute top-12 right-1/2 h-72 bg-gradient-conic from-purple-600/80 via-purple-500/95 to-transparent dark:from-purple-400/95 dark:via-purple-300/80 [--conic-position:from_70deg_at_center_top]"
                                    />

                                    <motion.div
                                        initial={{ opacity: 0.2, width: "8rem" }}
                                        whileInView={{ opacity: 0.8, width: "40rem" }}
                                        transition={{
                                            delay: 1.5,
                                            duration: 4.0,
                                            ease: [0.25, 0.1, 0.25, 1],
                                        }}
                                        style={{
                                            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                                        }}
                                        className="absolute top-12 left-1/2 h-72 bg-gradient-conic from-transparent via-purple-500/95 to-purple-600/80 dark:via-purple-300/80 dark:to-purple-400/95 [--conic-position:from_290deg_at_center_top]"
                                    />

                                    {/* Central bright glow - Narrower Width */}
                                    <motion.div
                                        initial={{ width: "4rem", opacity: 0.5 }}
                                        whileInView={{ width: "24rem", opacity: 0.9 }}
                                        transition={{
                                            delay: 2.0,
                                            duration: 3.5,
                                            ease: [0.25, 0.1, 0.25, 1],
                                        }}
                                        className="absolute top-16 left-1/2 -translate-x-1/2 h-20 rounded-full bg-purple-500/85 dark:bg-purple-400/75 blur-2xl"
                                    />

                                    {/* Pulsing outer glow - Narrower but Far */}
                                    <motion.div
                                        animate={{
                                            opacity: [0.15, 0.5, 0.15],
                                            scale: [1, 2.2, 1]
                                        }}
                                        transition={{
                                            delay: 2.5,
                                            duration: 6,
                                            ease: "easeInOut",
                                            repeat: Infinity,
                                            repeatDelay: 2
                                        }}
                                        className="absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-full sm:max-w-md lg:w-[400px] h-80 bg-gradient-to-b from-purple-400/25 via-purple-400/15 to-transparent rounded-full blur-3xl"
                                    />
                                </div>

                                {/* Logo */}
                                <div className="relative z-10 flex items-center gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-8">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-purple-400 to-violet-400 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold text-xs sm:text-sm lg:text-base">AI</span>
                                    </div>
                                    <span className="text-sm sm:text-base lg:text-xl font-semibold lg:font-bold text-foreground">AI Fiesta</span>
                                </div>

                                {/* Pricing Toggle */}
                                <div className="relative z-10 grid grid-cols-2 gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-8">
                                    <button
                                        onClick={() => setSelectedPlan('monthly')}
                                        className={`relative p-3 lg:p-4 rounded-xl border transition-all duration-200 ${selectedPlan === 'monthly'
                                            ? 'bg-purple-500/10 border-purple-400/40 text-foreground'
                                            : 'bg-foreground/[0.02] dark:bg-white/[0.02] border-foreground/[0.08] dark:border-white/[0.08] text-foreground/70'
                                            }`}
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="text-left">
                                                <div className="text-lg sm:text-xl font-bold">₹999</div>
                                                <div className="text-xs sm:text-sm opacity-70 font-medium">/Month</div>
                                                <div className="text-xs sm:text-sm opacity-60 font-medium">Monthly</div>
                                            </div>
                                            <div className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full border-2 flex items-center justify-center ${selectedPlan === 'monthly'
                                                ? 'border-purple-400 bg-purple-400'
                                                : 'border-foreground/30 dark:border-white/30'
                                                }`}>
                                                {selectedPlan === 'monthly' && (
                                                    <svg width="14" height="14" className="sm:w-4 sm:h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none">
                                                        <path d="M9 12l2 2 4-4" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                )}
                                            </div>
                                        </div>
                                    </button>
                                    <button
                                        onClick={() => setSelectedPlan('yearly')}
                                        className={`relative p-3 lg:p-4 rounded-xl border transition-all duration-200 ${selectedPlan === 'yearly'
                                            ? 'bg-purple-500/10 border-purple-400/40 text-foreground'
                                            : 'bg-foreground/[0.02] dark:bg-white/[0.02] border-foreground/[0.08] dark:border-white/[0.08] text-foreground/70'
                                            }`}
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="text-left">
                                                <div className="text-lg sm:text-xl font-bold">₹9,999</div>
                                                <div className="text-xs sm:text-sm opacity-70 font-medium">/Year</div>
                                                <div className="text-xs sm:text-sm text-green-400 font-semibold">Yearly (Save 17%)</div>
                                            </div>
                                            <div className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full border-2 flex items-center justify-center ${selectedPlan === 'yearly'
                                                ? 'border-purple-400 bg-purple-400'
                                                : 'border-foreground/30 dark:border-white/30'
                                                }`}>
                                                {selectedPlan === 'yearly' && (
                                                    <svg width="14" height="14" className="sm:w-4 sm:h-4 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none">
                                                        <path d="M9 12l2 2 4-4" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                )}
                                            </div>
                                        </div>
                                    </button>
                                </div>

                                {/* Bonus */}
                                <div className="relative z-10 mb-4 sm:mb-6 lg:mb-8 text-center">
                                    <div className="bonus-pill">
                                        <span className="label">ULTIMATE PROMPTBOOK & COMMUNITY ACCESS</span>
                                        <div className="div-block-35">
                                            <div className="shine shine-2"></div>
                                        </div>
                                    </div>
                                    <style jsx>{`
                                        .bonus-pill {
                                            --theme-color: rgb(0,0,0);
                                            --theme-contrast-color: #fff;
                                            --shiny-cta-bg: #040404;
                                            --shiny-cta-fg: #ffffff;
                                            --shiny-cta-highlight: rgba(255, 255, 255, 1);
                                            position: relative;
                                            display: inline-flex;
                                            align-items: center;
                                            justify-content: center;
                                            gap: 7px;
                                            padding: 7px 10px;
                                            background: var(--shiny-cta-bg);
                                            border-radius: 9999px;
                                            border: 1px solid rgba(230, 193, 90, 0.35);
                                            box-shadow:
                                                inset 0 0 0 1px rgba(255, 230, 150, 0.12),
                                                0 10px 30px rgba(0, 0, 0, 0.45),
                                                0 2px 10px rgba(230, 193, 90, 0.06);
                                            overflow: hidden;
                                            isolation: isolate;
                                            max-width: 95vw;
                                        }
                                        .label {
                                            color: var(--shiny-cta-fg);
                                            font-weight: 800;
                                            letter-spacing: 0.04em;
                                            text-transform: uppercase;
                                            font-size: 0.7rem;
                                            white-space: normal;
                                            word-break: break-word;
                                            line-height: 1.2;
                                            text-align: center;
                                        }
                                        .div-block-35 {
                                            -webkit-text-size-adjust: 100%;
                                            color: #333;
                                            font-family: Arial,Helvetica Neue,Helvetica,sans-serif;
                                            font-size: 14px;
                                            line-height: 20px;
                                            box-sizing: border-box;
                                            z-index: 0;
                                            position: absolute;
                                            inset: 0;
                                            overflow: hidden;
                                        }
                                        .shine {
                                            transform: translate3d(128.803%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(-30deg, 0deg);
                                            transform-style: preserve-3d;
                                            will-change: transform;
                                            position: absolute;
                                            inset: 0;
                                            background: linear-gradient(90deg,
                                                rgba(255, 255, 255, 0) 0%,
                                                rgba(255, 255, 255, 0.3) 40%,
                                                var(--shiny-cta-highlight) 50%,
                                                rgba(255, 255, 255, 0.3) 60%,
                                                rgba(255, 255, 255, 0) 100%);
                                            animation: shineAnimation 2.4s linear infinite;
                                            border-radius: 9999px;
                                            pointer-events: none;
                                        }
                                        @keyframes shineAnimation {
                                            from { 
                                                transform: translate3d(-200%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(-30deg, 0deg);
                                            }
                                            to { 
                                                transform: translate3d(400%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(-30deg, 0deg);
                                            }
                                        }
                                        @media (min-width: 640px) { /* sm */
                                            .bonus-pill { gap: 12px; padding: 12px 18px; }
                                            .label { font-size: 0.85rem; white-space: nowrap; }
                                        }
                                        @media (min-width: 1024px) { /* lg */
                                            .bonus-pill { padding: 12px 20px; }
                                            .label { font-size: 0.9rem; }
                                        }
                                    `}</style>
                                </div>

                                {/* Features */}
                                <div className="relative z-10 space-y-3 lg:space-y-4 mb-6 sm:mb-8 lg:mb-10">
                                    {/* All premium AI models included with icons */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.2 }}
                                        className="flex items-start gap-3 lg:gap-4"
                                    >
                                        <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                                            <svg width="10" height="10" className="lg:w-3 lg:h-3" viewBox="0 0 16 16" fill="none">
                                                <path d="M2.5 9L6 12.5L14 4.5" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                <span className="text-xs sm:text-sm lg:text-sm text-foreground/90 font-medium lg:font-semibold">All premium AI models included</span>
                                                <div className="flex items-center gap-1 lg:ml-4">
                                                    {aiModels.slice(0, 5).map((model, index) => (
                                                        <div key={index} className="w-5 h-5 lg:w-6 lg:h-6 bg-foreground/10 dark:bg-white/10 rounded-full p-1 flex items-center justify-center">
                                                            <div className="w-3 h-3 lg:w-4 lg:h-4">{model.icon}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {coffeeFeatures.slice(1).map((feature, index) => (
                                        <motion.div
                                            key={index + 1}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: 0.25 + index * 0.06 }}
                                            className="flex items-start gap-3 lg:gap-4"
                                        >
                                            <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                                                <svg width="10" height="10" className="lg:w-3 lg:h-3" viewBox="0 0 16 16" fill="none">
                                                    <path d="M2.5 9L6 12.5L14 4.5" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <span className="text-xs sm:text-sm lg:text-sm text-foreground/90 font-medium lg:font-semibold">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <motion.div
                                    className="relative z-10 mb-3 lg:mb-4"
                                    initial={{ opacity: 0, y: 18, scale: 0.98 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.22, ease: 'easeOut' }}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.04, boxShadow: "0 0 32px 8px #a78bfa" }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        <AnimatedGradientButton
                                            size="default"
                                            variant="primary"
                                            showArrow={true}
                                            arrowDirection="right"
                                            className="w-full text-white font-bold py-3 sm:py-4 px-6 lg:px-8 rounded-xl text-sm sm:text-base transition-all duration-200 shadow-lg shadow-purple-500/20"
                                        >
                                            Get Started Now
                                        </AnimatedGradientButton>
                                    </motion.div>
                                </motion.div>

                                <p className="relative z-10 text-xs sm:text-sm text-center text-foreground/60 flex items-center justify-center gap-1 lg:gap-2 font-medium">
                                    <span>🔒</span>
                                    <span className="text-center">Payments are processed by TagMango using Razorpay & Stripe</span>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Pricing;