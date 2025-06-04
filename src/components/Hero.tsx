
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, BookOpen, TrendingUp, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 text-charcoal min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-blue-200/30"></div>
          ))}
        </div>
      </div>
      
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-4 animate-fade-in">
            <Heart className="text-blue-500" size={20} />
            <span className="text-blue-600 font-medium text-sm">Made by a learner, for learners</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in text-navy">
            Learn data analysis from someone doing it in real time
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl animate-fade-in" style={{animationDelay: "0.1s"}}>
            Affordable, beginner-friendly resources that grow with you. No overwhelming jargon, 
            just practical skills from someone who understands the learning journey.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center gap-2"
              asChild
            >
              <a href="#featured">
                <TrendingUp size={18} /> Start Learning Today
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 font-medium flex items-center gap-2"
              asChild
            >
              <a href="#about">
                Learn My Story <ChevronRight size={16} />
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <div className="flex items-center gap-3 bg-white/60 p-4 rounded-lg backdrop-blur-sm border border-blue-200/30">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <BookOpen className="text-blue-600" size={20} />
              </div>
              <div>
                <div className="font-semibold text-charcoal">Real Learning</div>
                <div>From a current student</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/60 p-4 rounded-lg backdrop-blur-sm border border-blue-200/30">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
              </div>
              <div>
                <div className="font-semibold text-charcoal">Beginner-Friendly</div>
                <div>No intimidating jargon</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/60 p-4 rounded-lg backdrop-blur-sm border border-blue-200/30">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <div>
                <div className="font-semibold text-charcoal">Affordable</div>
                <div>Learn without breaking the bank</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
