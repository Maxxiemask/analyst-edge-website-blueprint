
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-hero-pattern text-white min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-navy/60"></div>
      
      {/* Abstract grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-10 h-full w-full">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="border border-white/20"></div>
          ))}
        </div>
      </div>
      
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-3xl">
          <h3 className="text-gold font-medium mb-2 animate-fade-in">
            Professional Data Analytics Course
          </h3>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in" style={{animationDelay: "0.1s"}}>
            Become a Data Analyst.<br />
            One eBook at a Time.
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl animate-fade-in" style={{animationDelay: "0.2s"}}>
            Practical, project-based learning from Excel to Machine Learning.
            Master industry-standard tools and techniques through our comprehensive
            15-book series designed for aspiring analysts.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <Button
              size="lg"
              className="bg-gold hover:bg-gold/90 text-navy font-medium flex items-center gap-2"
              asChild
            >
              <a href="#ebooks">
                <BookOpen size={18} /> View eBooks
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-medium flex items-center gap-2"
              asChild
            >
              <a href="#pricing">
                Buy Full Bundle <ChevronRight size={16} />
              </a>
            </Button>
          </div>
          
          <div className="mt-16 flex flex-wrap items-center gap-8 text-sm text-gray-200 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <BookOpen className="text-white" size={24} />
              </div>
              <span>15 Comprehensive<br />eBooks</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
              <span>Industry-Recognized<br />Skills</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
              </div>
              <span>Real-World<br />Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
