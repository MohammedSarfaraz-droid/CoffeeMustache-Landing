"use client";

import React, { useState } from 'react';
import PricingHeader from './PricingComponents/PricingHeader';
import IndividualSubscriptionsCard from './PricingComponents/IndividualSubscriptionsCard';
import VSDivider from './PricingComponents/VSDivider';
import CoffeeMustacheCard from './PricingComponents/CoffeeMustacheCard';
import { aiModels, aiModelFeatures, coffeeFeatures } from './PricingComponents/aiModelsData';

const Pricing = () => {
    const [selectedPlan, setSelectedPlan] = useState('monthly');
    const [lampHovered, setLampHovered] = useState(false);

    return (
        <section id="pricing" className="w-full py-10 overflow-x-hidden overflow-y-hidden min-h-0">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full overflow-x-hidden overflow-y-hidden min-h-0">
                {/* Header */}
                <PricingHeader
                    title="Get 6 Premium AI Models for Half the Price of One"
                    highlightText="Half the Price of One"
                    promoText="Limited time: Save 90% compared to individual subscriptions"
                />

                {/* Pricing Comparison */}
                <div className="w-full max-w-full mx-auto">
                    {/* Responsive Layout */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 w-full max-w-full mx-auto overflow-x-hidden overflow-y-hidden min-h-0">
                        {/* Individual AI Subscriptions */}
                        <IndividualSubscriptionsCard
                            aiModels={aiModels}
                            aiModelFeatures={aiModelFeatures}
                        />

                        {/* VS Divider */}
                        <VSDivider />

                        {/* Coffee Mustache Plan */}
                        <CoffeeMustacheCard
                            selectedPlan={selectedPlan}
                            setSelectedPlan={setSelectedPlan}
                            lampHovered={lampHovered}
                            setLampHovered={setLampHovered}
                            coffeeFeatures={coffeeFeatures}
                            aiModels={aiModels}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;