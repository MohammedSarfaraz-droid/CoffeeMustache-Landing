"use client";

import React, { useState } from "react";
import PricingHeader from "./pricing-components/PricingHeader";
import ExistingPosCard from "./pricing-components/ExistingPosCard";
import VSDivider from "./pricing-components/VSDivider";
import CoffeeMustacheCard from "./pricing-components/CoffeeMustacheCard";
import {
  aiModels,
  existingPosFlaws,
  coffeeFeatures,
} from "./pricing-components/aiModelsData";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState("cmPOS");
  const [lampHovered, setLampHovered] = useState(false);

  return (
    <section
      id="pricing"
      className="w-full py-10 min-h-0 overflow-x-clip"
    >
      <div className="container mx-auto px-4 sm:px-6 xl:px-8 max-w-7xl w-full">
        {/* Header */}
        <PricingHeader
          title="Two Ways to Grow Your Café with Coffee Mustache"
          highlightText="Your Choice"
          promoText="Layer on your existing POS for ₹999/month, or upgrade to Coffee Mustache POS at zero cost."
        />

        {/* Pricing Comparison */}
  <div className="w-full mx-auto overflow-x-clip">
          {/* Responsive Layout: stacked until 1280px (xl), row above */}
          <div className="flex flex-col xl:flex-row items-center justify-center gap-6 xl:gap-8 w-full mx-auto">
            {/* Individual AI Subscriptions */}
            <ExistingPosCard
              aiModels={aiModels}
              existingPosFlaws={existingPosFlaws}
            />

            {/* VS Divider */}
            <VSDivider />

            {/* Coffee Mustache Plan */}
            <CoffeeMustacheCard
              selectedPlan={selectedPlan}
              setSelectedPlan={setSelectedPlan}
              lampHovered={lampHovered}
              setLampHovered={setLampHovered}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
