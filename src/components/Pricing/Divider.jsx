import React from 'react';
import { motion } from "motion/react";

const Divider = () => (
    // ...existing code from PricingVS.jsx...
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex items-center justify-center relative w-fit max-w-full lg:w-[120px] flex-shrink-0"
    >
        {/* ...existing code... */}
    </motion.div>
);

export default Divider;
