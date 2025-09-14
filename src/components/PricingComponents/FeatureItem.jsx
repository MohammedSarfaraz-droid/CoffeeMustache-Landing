import React from 'react';
import { motion } from "motion/react";

const FeatureItem = ({ 
    feature, 
    index, 
    delay = 0, 
    isPositive = true, 
    showIcons = false, 
    aiModels = [] 
}) => {
    const IconComponent = isPositive ? (
        <svg width="10" height="10" className="lg:w-3 lg:h-3" viewBox="0 0 16 16" fill="none">
            <path d="M2.5 9L6 12.5L14 4.5" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ) : (
        <svg width="8" height="8" className="sm:w-3 sm:h-3" viewBox="0 0 16 16" fill="none">
            <path d="M12.5 3.5L3.5 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 dark:text-red-400" />
            <path d="M12.5 12.5L3.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 dark:text-red-400" />
        </svg>
    );

    const iconBgClass = isPositive 
        ? "w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 flex-shrink-0"
        : "w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0";

    return (
        <motion.div
            initial={{ opacity: 0, y: isPositive ? 10 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay + index * (isPositive ? 0.06 : 0.09), ease: 'easeOut' }}
            className={`flex items-start gap-${isPositive ? '3 lg:gap-4' : '2.5 sm:gap-3'}`}
        >
            <div className={iconBgClass}>
                {IconComponent}
            </div>
            <div className="flex-1">
                {showIcons && isPositive ? (
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <span className="text-xs sm:text-sm lg:text-sm text-foreground/90 font-medium lg:font-semibold">{feature}</span>
                        <div className="flex items-center gap-1 lg:ml-4">
                            {aiModels.slice(0, 5).map((model, idx) => (
                                <div key={idx} className="w-5 h-5 lg:w-6 lg:h-6 bg-foreground/10 dark:bg-white/10 rounded-full p-1 flex items-center justify-center">
                                    <div className="w-3 h-3 lg:w-4 lg:h-4">{model.icon}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <span className={`text-xs sm:text-sm ${isPositive ? 'lg:text-sm text-foreground/90 font-medium lg:font-semibold' : 'text-foreground/60'}`}>
                        {feature}
                    </span>
                )}
            </div>
        </motion.div>
    );
};

export default FeatureItem;