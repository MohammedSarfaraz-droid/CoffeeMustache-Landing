import React from 'react';

const CharacteristicsCardStack = ({ models, side, cardRefs }) => (
    <div className={`absolute ${side === 'left' ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 flex flex-col gap-6 md:gap-8 ${side === 'right' ? 'items-end' : ''}`}>
        {models.map((model, idx) => (
            <div
                key={model.id}
                className="relative group w-[420px] md:w-[460px]"
                ref={el => { if (el) cardRefs.current[model.id] = el; }}
            >
                <CharacteristicsCard
                    icon={model.icon}
                    name={model.name}
                    tag={model.tag}
                    description={model.description}
                />
            </div>
        ))}
    </div>
);

export default CharacteristicsCardStack;
