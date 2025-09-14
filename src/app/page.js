'use client';
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Characteristics from "@/components/Characteristics";
import VideoShowcase from "@/components/VideoShowcase";
import FAQs from "@/components/FAQs";
import FooterCTA from "@/components/FooterCTA";
import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/ui/Loading-Screen";
import BackToTopButton from "@/components/ui/BackToTopButton";


export default function Home() {
  const [hydrated, setHydrated] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      setTimeout(() => setFadeOut(true), 500); // increased delay before fade
    }
  }, [hydrated]);

  if (!hydrated || !fadeOut) {
    return (
      <div className={`transition-opacity duration-500 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <LoadingScreen className="bg-black" text="Loading..." />
      </div>
    );
  }

  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Characteristics />
      <VideoShowcase />
      <FAQs />
      <FooterCTA />
      <BackToTopButton scrollThreshold={180} />
    </>
  );
}
