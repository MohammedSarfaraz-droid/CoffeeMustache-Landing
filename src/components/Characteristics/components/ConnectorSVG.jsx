import React from 'react';

const ConnectorSVG = ({ paths, containerSize }) => (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox={`0 0 ${containerSize.width} ${containerSize.height}`} preserveAspectRatio="none">
        <defs>
            <linearGradient id="connGradientL" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#D946EF" stopOpacity="0.75" />
            </linearGradient>
            <linearGradient id="connGradientR" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#D946EF" stopOpacity="0.75" />
            </linearGradient>
        </defs>
        {paths.map((p) => (
            <path
                key={p.id}
                d={p.d}
                stroke={p.side === 'left' ? 'url(#connGradientL)' : 'url(#connGradientR)'}
                strokeWidth={2}
                fill="none"
                opacity={0.7}
            />
        ))}
    </svg>
);

export default ConnectorSVG;
