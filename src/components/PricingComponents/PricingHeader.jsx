import React from 'react';
import { motion } from "motion/react";

const PricingHeader = ({
    title = "Get 6 Premium AI Models for Half the Price of One",
    highlightText = "Half the Price of One",
    promoText = "Limited time: Save 90% compared to individual subscriptions"
}) => {
    return (
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
                <span className="block sm:inline">for <span className="text-purple-500">{highlightText}</span></span>
            </h2>
            <div className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full inline-flex max-w-full backdrop-blur-md border-1 border-[#e66b6b] text-[#e66b6b] bg-[#e66b6b]/10">
                <span className="text-base sm:text-lg flex-shrink-0">🔥</span>
                <span className="text-xs sm:text-sm font-medium text-center">{promoText}</span>
            </div>
        </motion.div>
    );
};

export default PricingHeader;