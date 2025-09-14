import React from 'react';
import AIModelCard from './AIModelCard';
import CentralHub from './CentralHub';
import ConnectorPaths from './ConnectorPaths';
import FloatingParticles from './FloatingParticles';

const DesktopLayout = ({
    containerRef,
    hubRef,
    cardRefs,
    aiModels,
    containerSize,
    paths,
    getConnectionConfig
}) => {
    return (
        <div ref={containerRef} className="relative mx-auto max-w-7xl h-[760px]">
            {/* Connector overlay (SVG) */}
            <ConnectorPaths paths={paths} containerSize={containerSize} />

            {/* Central Hub with layered glow/rings */}
            <CentralHub ref={hubRef} />

            {/* Left stack */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 md:gap-8">
                {aiModels.filter(m => m.position && m.position.includes('left')).map((model, idx) => {
                    const { lineW, offsetY } = getConnectionConfig(model.position);
                    return (
                        <div
                            key={model.id}
                            style={{ ['--line-w']: lineW, ['--offset-y']: offsetY }}
                        >
                            <AIModelCard
                                model={model}
                                index={idx}
                                isDesktop={true}
                                ref={(el) => {
                                    if (el) cardRefs.current[model.id] = el;
                                }}
                            />
                        </div>
                    );
                })}
            </div>

            {/* Right stack */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 md:gap-8 items-end">
                {aiModels.filter(m => m.position && m.position.includes('right')).map((model, idx) => {
                    const { lineW, offsetY } = getConnectionConfig(model.position);
                    return (
                        <div
                            key={model.id}
                            style={{ ['--line-w']: lineW, ['--offset-y']: offsetY }}
                        >
                            <AIModelCard
                                model={model}
                                index={idx}
                                isDesktop={true}
                                ref={(el) => {
                                    if (el) cardRefs.current[model.id] = el;
                                }}
                            />
                        </div>
                    );
                })}
            </div>

            {/* Subtle floating particles */}
            <FloatingParticles />
        </div>
    );
};

export default DesktopLayout;