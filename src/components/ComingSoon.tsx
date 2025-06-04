
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, Video } from "lucide-react";

const ComingSoon = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 animate-on-scroll">
            More Content Coming
          </h2>
          <p className="text-lg text-slate-700 animate-on-scroll">
            More content is being added over time — video tutorials, new eBooks, and full bundles based on real-world learning. Stay tuned!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-amber-200 bg-amber-50/50 animate-on-scroll">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-amber-100 rounded-full w-fit">
                <Clock className="h-8 w-8 text-amber-600" />
              </div>
              <Badge variant="secondary" className="bg-amber-100 text-amber-700 border-0 mb-2 w-fit mx-auto">
                IN DEVELOPMENT
              </Badge>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Expanding Content Library
              </h3>
              <p className="text-slate-600 text-sm">
                New resources added regularly based on real learning experiences and student needs.
              </p>
            </CardHeader>
            
            <CardContent className="text-center">
              <div className="space-y-3 mb-6 text-sm text-slate-600">
                <div className="flex items-center justify-center gap-2">
                  <Video size={16} className="text-amber-600" />
                  <span>Video tutorials and walkthroughs</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <BookOpen size={16} className="text-amber-600" />
                  <span>Additional specialized eBooks</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  <span>Comprehensive learning bundles</span>
                </div>
              </div>
              
              <div className="bg-white/60 p-4 rounded-lg border border-amber-200">
                <p className="text-sm text-slate-600">
                  Subscribe to the newsletter below to be notified when new content becomes available!
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
