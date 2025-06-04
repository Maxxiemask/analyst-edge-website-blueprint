
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, Clock, Bell } from "lucide-react";

const ComingSoon = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 animate-on-scroll">
            Coming Soon
          </h2>
          <p className="text-lg text-charcoal/80 animate-on-scroll">
            I'm working on curated bundles to help you learn more efficiently and save money.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-orange-200 bg-orange-50/50 animate-on-scroll">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-orange-100 rounded-full w-fit">
                <Package className="h-8 w-8 text-orange-600" />
              </div>
              <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-0 mb-2 w-fit mx-auto">
                IN DEVELOPMENT
              </Badge>
              <h3 className="text-xl font-bold text-navy mb-2">
                Learning Path Bundles
              </h3>
              <p className="text-gray-600 text-sm">
                Carefully curated collections of eBooks that follow a logical learning progression.
              </p>
            </CardHeader>
            
            <CardContent className="text-center">
              <div className="space-y-3 mb-6 text-sm text-gray-600">
                <div className="flex items-center justify-center gap-2">
                  <Clock size={16} className="text-orange-600" />
                  <span>Beginner to Advanced pathways</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  <span>Significant savings over individual purchases</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Bell size={16} className="text-orange-600" />
                  <span>Bonus materials and templates</span>
                </div>
              </div>
              
              <div className="bg-white/60 p-4 rounded-lg border border-orange-200">
                <p className="text-sm text-gray-600">
                  Sign up for the newsletter below to be the first to know when bundles are available!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
