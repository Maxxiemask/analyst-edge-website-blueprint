
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, BookOpen, TrendingUp } from "lucide-react";

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
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            Launch Your Data Analyst Career with Affordable, Expert-Led Courses
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-3xl animate-fade-in" style={{animationDelay: "0.1s"}}>
            Transform your career with structured learning paths designed by industry experts. 
            Build in-demand skills at a fraction of the cost of traditional bootcamps - starting from just £47.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <Button
              size="lg"
              className="bg-gold hover:bg-gold/90 text-navy font-medium flex items-center gap-2"
              asChild
            >
              <a href="#learning-paths">
                <TrendingUp size={18} /> Start Your Journey
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-medium flex items-center gap-2"
              asChild
            >
              <a href="#pricing">
                View Pricing <ChevronRight size={16} />
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-200 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <BookOpen className="text-gold" size={20} />
              </div>
              <div>
                <div className="font-semibold text-white">16 Expert Modules</div>
                <div>Comprehensive curriculum</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
              <div>
                <div className="font-semibold text-white">Career-Ready Skills</div>
                <div>Industry-recognized expertise</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
              </div>
              <div>
                <div className="font-semibold text-white">Self-Paced Learning</div>
                <div>Learn on your schedule</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
