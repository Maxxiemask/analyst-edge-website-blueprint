
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-blue-50/50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 animate-on-scroll">
              About The Analyst's Journey
            </h2>
          </div>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-on-scroll">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="mx-auto mb-6 p-4 bg-blue-100 rounded-full w-fit">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                This site is built by a self-taught analyst on a mission to make data skills accessible. 
                I'm currently studying in the <span className="font-semibold text-blue-600">Multiverse Advanced Data Fellowship</span> and 
                documenting my journey so you can learn with me.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="mx-auto mb-3 p-3 bg-blue-100 rounded-full w-fit">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-navy mb-2">Learning Together</h3>
                  <p className="text-sm text-gray-600">
                    I share what I'm learning as I progress through my own data journey
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mx-auto mb-3 p-3 bg-blue-100 rounded-full w-fit">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-navy mb-2">Beginner-Focused</h3>
                  <p className="text-sm text-gray-600">
                    Resources designed for people starting their data analysis journey
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mx-auto mb-3 p-3 bg-blue-100 rounded-full w-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                  <h3 className="font-semibold text-navy mb-2">Affordable Access</h3>
                  <p className="text-sm text-gray-600">
                    Quality learning materials that won't break your budget
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
