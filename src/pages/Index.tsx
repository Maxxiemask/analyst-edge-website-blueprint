
import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedContent from "@/components/FeaturedContent";
import About from "@/components/About";
import ComingSoon from "@/components/ComingSoon";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Animation for elements with animate-on-scroll class
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if (position.top < window.innerHeight * 0.85) {
          element.classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', animateElements);
    animateElements(); // Run once to check elements in view on load
    
    // Welcome toast notification
    setTimeout(() => {
      toast({
        title: "Welcome to The Analyst's Journey",
        description: "Learn data analysis from someone doing it in real time.",
        duration: 5000,
      });
    }, 2000);

    return () => window.removeEventListener('scroll', animateElements);
  }, [toast]);

  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <FeaturedContent />
        <About />
        <ComingSoon />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
