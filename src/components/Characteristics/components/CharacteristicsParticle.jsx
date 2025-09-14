import React from 'react';

const CharacteristicsParticle = ({ style }) => (
    <div
        className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 opacity-30 animate-pulse"
        style={style}
    />
);

export default CharacteristicsParticle;
