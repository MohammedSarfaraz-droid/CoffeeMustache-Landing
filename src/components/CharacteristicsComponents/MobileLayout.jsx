import React from 'react';
import AIModelCard from './AIModelCard';

const MobileLayout = ({ aiModels }) => {
    return (
        <div className="flex flex-col items-center gap-4 sm:gap-6 w-full max-w-2xl mx-auto mt-8">
            {aiModels.map((model, idx) => (
                <AIModelCard
                    key={model.id || model.name}
                    model={model}
                    index={idx}
                    isDesktop={false}
                />
            ))}
        </div>
    );
};

export default MobileLayout;