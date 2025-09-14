import React from 'react';
import { motion } from "motion/react";

const Logo = () => {
    return (
        <motion.div
            initial={{ opacity: 0.3, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
            className="flex items-center flex-shrink-0"
        >
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground truncate">
                <span className="hidden sm:inline">Coffee Mustache</span>
                <span className="sm:hidden">CM</span>
            </h1>
        </motion.div>
    );
};

export default Logo;