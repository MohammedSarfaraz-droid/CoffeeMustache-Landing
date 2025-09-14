import React from 'react';

const CenterLogo = ({ children }) => (
    <div className="absolute inset-0 m-[140px] rounded-full bg-white/80 dark:bg-background/80 backdrop-blur-sm border border-neutral-200/70 dark:border-white/10 flex items-center justify-center shadow-2xl">
        {children}
    </div>
);

export default CenterLogo;
