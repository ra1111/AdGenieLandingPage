import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Platforms from "@/components/Platforms";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useScroll, useResponsive } from "@/hooks/use-responsive";
import { useEffect } from "react";

export default function Home() {
  // Use custom hooks for scroll and responsive design
  const { hasScrolled } = useScroll();
  const { isMobile, isTablet, isDesktop, width } = useResponsive();
  
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Log device type for debugging
  useEffect(() => {
    const deviceType = isMobile ? 'Mobile' : isTablet ? 'Tablet' : 'Desktop';
  }, [isMobile, isTablet, isDesktop, width]);

  return (
    <div className="font-sans text-gray-800 bg-gray-50 overflow-x-hidden">
      <Header hasScrolled={hasScrolled} />
      
      <motion.main
        className="flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <ValueProps />
        <Platforms />
        <HowItWorks />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </motion.main>
    </div>
  );
}
