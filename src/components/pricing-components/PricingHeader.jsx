import React from "react";
import { motion } from "motion/react";

const PricingHeader = ({
  title = "Two Ways to Grow Your Café with Coffee Mustache",
  highlightText = "Your Choice",
  promoText = "Layer on your existing POS for ₹999/month, or upgrade to Coffee Mustache POS at zero cost.",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center mb-8 sm:mb-12 lg:mb-16"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 leading-tight">
        <span className="block sm:inline">A Café Platform at</span>
        <br className="hidden sm:block" />
        <span className="block sm:inline">
          <span className="text-purple-500">{highlightText}</span>
        </span>
      </h2>
      <div className="items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full inline-flex max-w-full backdrop-blur-md border border-purple-500 text-purple-600 bg-purple-100/20 dark:bg-purple-900/20">
        <span className="text-base sm:text-lg flex-shrink-0">☕</span>
        <span className="text-xs sm:text-sm font-medium text-center">
          {promoText}
        </span>
      </div>
    </motion.div>
  );
};

export default PricingHeader;
