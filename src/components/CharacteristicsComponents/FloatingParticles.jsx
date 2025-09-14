import React from 'react';
import { motion } from "motion/react";

const FloatingParticles = ({ count = 18 }) => {
    return (
        <div className="absolute inset-0 pointer-events-none">
            {[...Array(count)].map((_, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0, 1, 0] }}
                    viewport={{ once: true }}
                    transition={{ 
                        duration: 3.2, 
                        delay: (i % 6) * 0.3, 
                        repeat: Infinity, 
                        repeatDelay: 1.2 
                    }}
                    className="absolute w-1 h-1 rounded-full bg-fuchsia-500/30 dark:bg-fuchsia-400/40"
                    style={{ 
                        left: `${(i * 53) % 100}%`, 
                        top: `${(i * 37) % 100}%` 
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingParticles;