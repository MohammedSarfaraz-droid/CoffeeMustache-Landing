import React from 'react';
import CharacteristicsSectionHeader from './components/CharacteristicsSectionHeader';
import Card from './components/Card';
import CharacteristicsCardStack from './components/CharacteristicsCardStack';
import CenterLogo from './components/CenterLogo';
import CharacteristicsParticle from './components/CharacteristicsParticle';
import ConnectorSVG from './components/ConnectorSVG';

const Characteristics = ({ aiModels, centerLogo, paths, containerSize, cardRefs }) => (
    <section id="workflow" className="relative py-10 text-foreground overflow-hidden">
        <div className="container mx-auto px-4">
            <CharacteristicsSectionHeader />
            <div className="relative mx-auto w-full">
                <div className="hidden lg:block">
                    <div className="relative mx-auto max-w-7xl h-[760px]">
                        <ConnectorSVG paths={paths} containerSize={containerSize} />
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                            <div className="relative">
                                <div className="absolute -inset-[180px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.10)_0%,rgba(217,70,239,0.06)_35%,transparent_70%)] blur-2xl" />
                                <div className="relative w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08)_0%,rgba(217,70,239,0.05)_45%,transparent_60%)]" />
                                <CenterLogo>{centerLogo}</CenterLogo>
                            </div>
                        </div>
                        <CharacteristicsCardStack models={aiModels.filter(m => m.position.includes('left'))} side="left" cardRefs={cardRefs} />
                        <CharacteristicsCardStack models={aiModels.filter(m => m.position.includes('right'))} side="right" cardRefs={cardRefs} />
                        <div className="absolute inset-0 pointer-events-none">
                            {[...Array(18)].map((_, i) => (
                                <CharacteristicsParticle key={i} style={{ left: `${(i * 53) % 100}%`, top: `${(i * 37) % 100}%` }} />
                            ))}
                        </div>
                    </div>
                </div>
                {/* ...existing code for small screens... */}
            </div>
        </div>
    </section>
);

export default Characteristics;
