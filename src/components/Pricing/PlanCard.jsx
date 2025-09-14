import React from 'react';
import { motion } from "motion/react";
import AnimatedGradientButton from '../ui/animated-gradient-button';

const PlanCard = ({
    selectedPlan,
    setSelectedPlan,
    aiModels,
    coffeeFeatures
}) => (
    // ...existing code from PricingCoffeeMustache.jsx...
    <motion.div
        initial={{ opacity: 0, x: 60, scale: 0.97 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        className="relative w-full max-w-full sm:max-w-md lg:max-w-none lg:w-[600px] flex-shrink-0 shadow-xl shadow-purple-400/10 dark:shadow-purple-900/10"
    >
        {/* ...existing code... */}
    </motion.div>
);

export default PlanCard;
