import React, { forwardRef } from 'react';
import { motion } from "motion/react";

const AIModelCard = forwardRef(({ model, index, isDesktop = false }, ref) => {
    const cardContent = (
        <div className="relative bg-white/80 dark:bg-[#0C0F10]/90 backdrop-blur-md border border-neutral-200/70 dark:border-white/10 border-r-4 border-b-4 border-r-violet-500 border-b-violet-500 dark:border-r-violet-400 dark:border-b-violet-400 rounded-2xl p-3 sm:p-4 lg:p-6 shadow-xl min-h-[110px] lg:min-h-auto">
            <div className="flex items-start gap-2 sm:gap-3">
                <div className="relative p-2 sm:p-3 bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 dark:from-violet-500/15 dark:to-fuchsia-500/15 rounded-xl border border-violet-600/20 dark:border-violet-400/25">
                    {model.icon}
                </div>
                <div className="flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold">{model.name}</h3>
                    <div className="mt-1 inline-block px-2 sm:px-3 py-1 bg-violet-500/10 dark:bg-violet-500/15 text-violet-700 dark:text-violet-300 text-xs sm:text-sm md:text-sm rounded-full border border-violet-600/20 dark:border-violet-400/25">
                        {model.tag}
                    </div>
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm lg:text-sm text-foreground/70 leading-relaxed">
                        {model.description}
                    </p>
                </div>
            </div>
            {/* hover glow */}
            <div className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-${model.position && model.position.includes('left') ? 'r' : 'l'} from-violet-400/10 to-fuchsia-400/10 opacity-0 group-hover:opacity-100 transition-opacity`} />
        </div>
    );

    if (isDesktop) {
        return (
            <motion.div
                initial={{ opacity: 0, x: model.position && model.position.includes('left') ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative group w-[420px] md:w-[460px]"
                ref={ref}
            >
                {cardContent}
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="w-full"
            ref={ref}
        >
            {cardContent}
        </motion.div>
    );
});

AIModelCard.displayName = 'AIModelCard';

export default AIModelCard;