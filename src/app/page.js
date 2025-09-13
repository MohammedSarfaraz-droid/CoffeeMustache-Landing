import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Characteristics from "@/components/Characteristics";
import VideoShowcase from "@/components/VideoShowcase";
import FAQs from "@/components/FAQs";
import FooterCTA from "@/components/FooterCTA";

export default function Home() {
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
    </>
  );
}
