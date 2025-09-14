import React from 'react';

const CharacteristicsCard = ({ icon, name, tag, description }) => (
    <div className="relative bg-white/80 dark:bg-[#0C0F10]/90 backdrop-blur-md border border-neutral-200/70 dark:border-white/10 border-r-4 border-b-4 border-r-violet-500 border-b-violet-500 dark:border-r-violet-400 dark:border-b-violet-400 rounded-2xl p-6 shadow-xl">
        <div className="flex items-start gap-3">
            <div className="relative p-3 bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 dark:from-violet-500/15 dark:to-fuchsia-500/15 rounded-xl border border-violet-600/20 dark:border-violet-400/25">{icon}</div>
            <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold">{name}</h3>
                <div className="mt-1 inline-block px-3 py-1 bg-violet-500/10 dark:bg-violet-500/15 text-violet-700 dark:text-violet-300 text-xs md:text-sm rounded-full border border-violet-600/20 dark:border-violet-400/25">{tag}</div>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{description}</p>
            </div>
        </div>
        {/* hover glow */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-400/10 to-fuchsia-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
);

export default CharacteristicsCard;
