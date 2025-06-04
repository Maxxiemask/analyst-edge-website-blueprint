
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 animate-on-scroll">
              About The Analyst's Journey
            </h2>
          </div>

          <Card className="border-0 shadow-lg bg-white animate-on-scroll">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="mx-auto mb-6 p-4 bg-teal-100 rounded-full w-fit">
                <BookOpen className="h-8 w-8 text-teal-600" />
              </div>
              
              <p className="text-lg text-slate-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                The Analyst's Journey is created by someone learning data analysis step-by-step and sharing everything along the way. 
                I've completed a bootcamp in software and data engineering, as well as a short course in cybersecurity. 
                Now I'm pursuing a degree in data and building this resource to help others do the same — whether you're changing careers or just curious about data.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                Every ebook, guide, and tool on this site is something I've used or created while learning. 
                No jargon, no overwhelm — just affordable, practical content that grows with you.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="mx-auto mb-3 p-3 bg-teal-100 rounded-full w-fit">
                    <GraduationCap className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Active Learning</h3>
                  <p className="text-sm text-slate-600">
                    Content based on real study experiences and practical application
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mx-auto mb-3 p-3 bg-teal-100 rounded-full w-fit">
                    <Users className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Career Focused</h3>
                  <p className="text-sm text-slate-600">
                    Resources designed for people transitioning into data careers
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mx-auto mb-3 p-3 bg-teal-100 rounded-full w-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Accessible Pricing</h3>
                  <p className="text-sm text-slate-600">
                    Quality learning materials at prices that make sense
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
