import React from 'react';
import { motion } from "motion/react";
import AnimatedGradientButton from '../ui/animated-gradient-button';
import LampEffectPricing from './LampEffectPricing';
import PricingToggle from './PricingToggle';
import BonusPill from './BonusPill';
import FeatureItem from './FeatureItem';

const CoffeeMustacheCard = ({
    selectedPlan,
    setSelectedPlan,
    lampHovered,
    setLampHovered,
    coffeeFeatures,
    aiModels
}) => {
    return (
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

                {/* Lamp Effect */}
                <LampEffectPricing
                    lampHovered={lampHovered}
                    setLampHovered={setLampHovered}
                />

                {/* Logo */}
                <div className="relative z-10 flex items-center gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-8">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-purple-400 to-violet-400 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xs sm:text-sm lg:text-base">AI</span>
                    </div>
                    <span className="text-sm sm:text-base lg:text-xl font-semibold lg:font-bold text-foreground">AI Fiesta</span>
                </div>

                {/* Pricing Toggle */}
                <PricingToggle
                    selectedPlan={selectedPlan}
                    setSelectedPlan={setSelectedPlan}
                />

                {/* Bonus */}
                <div className="relative z-10 mb-4 sm:mb-6 lg:mb-8 text-center">
                    <BonusPill text="ULTIMATE PROMPTBOOK & COMMUNITY ACCESS" />
                </div>

                {/* Features */}
                <div className="relative z-10 space-y-3 lg:space-y-4 mb-6 sm:mb-8 lg:mb-10">
                    {/* All premium AI models included with icons */}
                    <FeatureItem
                        feature="All premium AI models included"
                        index={0}
                        delay={0.2}
                        isPositive={true}
                        showIcons={true}
                        aiModels={aiModels}
                    />

                    {coffeeFeatures.slice(1).map((feature, index) => (
                        <FeatureItem
                            key={index + 1}
                            feature={feature}
                            index={index}
                            delay={0.25}
                            isPositive={true}
                        />
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
    );
};

export default CoffeeMustacheCard;