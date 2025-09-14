import React from 'react';
import { motion } from "motion/react";

const SectionHeader = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
        >
            <h2 className="text-[24px] sm:text-3xl md:text-4xl lg:text-[60px] font-bold mb-4">
                Pick the best <span className="text-violet-600 dark:text-violet-400">characteristics</span>
                <br />
                of each <span className="text-violet-600 dark:text-violet-400">AI model</span>
            </h2>
        </motion.div>
    );
};

export default SectionHeader;