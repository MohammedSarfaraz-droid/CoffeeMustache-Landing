import React from 'react';
import { motion } from "motion/react";

const CuratorBadge = ({ text = "Built by Coffee Enthusiasts" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.7,
                duration: 0.6,
                ease: "easeInOut",
            }}
            className="inline-block"
        >
            <div className="px-3 xs:px-4 py-1.5 xs:py-2 rounded-full bg-purple-200 dark:bg-purple-900/30 border border-purple-500 dark:border-purple-700/70 backdrop-blur-sm">
                <span className="text-xs xs:text-sm font-medium text-purple-700 dark:text-purple-300">
                    {text}
                </span>
            </div>
        </motion.div>
    );
};

export default CuratorBadge;