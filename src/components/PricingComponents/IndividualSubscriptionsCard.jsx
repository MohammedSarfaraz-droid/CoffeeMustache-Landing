import React from 'react';
import { motion } from "motion/react";
import AIModelItem from './AIModelItem';
import FeatureItem from './FeatureItem';

const IndividualSubscriptionsCard = ({ aiModels, aiModelFeatures }) => {
    return (
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
                    <AIModelItem 
                        key={index}
                        model={model}
                        index={index}
                        delay={0.18}
                    />
                ))}
            </div>

            {/* Features */}
            <div className="space-y-2.5 sm:space-y-3">
                {aiModelFeatures.map((feature, index) => (
                    <FeatureItem
                        key={index}
                        feature={feature}
                        index={index}
                        delay={0.28}
                        isPositive={false}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default IndividualSubscriptionsCard;