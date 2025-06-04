
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, BookOpen, TrendingUp, Target } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-slate-700/30"></div>
          ))}
        </div>
      </div>
      
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-4 animate-fade-in">
            <Target className="text-teal-400" size={20} />
            <span className="text-teal-400 font-medium text-sm">Real learning, real progress</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            Affordable data analysis learning from someone doing it in real time
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl animate-fade-in" style={{animationDelay: "0.1s"}}>
            Join the journey, build your skills, and change your career. No overwhelm, 
            no jargon — just practical content that grows with you.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <Button
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white font-medium flex items-center gap-2"
              asChild
            >
              <a href="#featured">
                <TrendingUp size={18} /> Start Learning Today
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-400 text-slate-300 hover:bg-slate-800 font-medium flex items-center gap-2"
              asChild
            >
              <a href="#about">
                My Story <ChevronRight size={16} />
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-300 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <div className="flex items-center gap-3 bg-slate-800/60 p-4 rounded-lg backdrop-blur-sm border border-slate-700/30">
              <div className="w-10 h-10 rounded-full bg-teal-600/20 flex items-center justify-center">
                <BookOpen className="text-teal-400" size={20} />
              </div>
              <div>
                <div className="font-semibold text-white">Real Experience</div>
                <div>From an active learner</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-slate-800/60 p-4 rounded-lg backdrop-blur-sm border border-slate-700/30">
              <div className="w-10 h-10 rounded-full bg-teal-600/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-400"><path d="M9 11H1v3h8v3l3-4-3-4v2z"/><path d="M22 12h-6l3 4 3-4z"/></svg>
              </div>
              <div>
                <div className="font-semibold text-white">Practical Focus</div>
                <div>Skills you'll actually use</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-slate-800/60 p-4 rounded-lg backdrop-blur-sm border border-slate-700/30">
              <div className="w-10 h-10 rounded-full bg-teal-600/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-400"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <div>
                <div className="font-semibold text-white">Affordable</div>
                <div>Quality without the cost</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
