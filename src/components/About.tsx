
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 animate-on-scroll">
              About Me — The Analyst's Journey
            </h2>
          </div>

          <Card className="border-0 shadow-lg bg-white animate-on-scroll">
            <CardContent className="p-8 md:p-12">
              <div className="mx-auto mb-6 p-4 bg-teal-100 rounded-full w-fit">
                <BookOpen className="h-8 w-8 text-teal-600" />
              </div>
              
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
                <p>
                  The Analyst's Journey is run by a self-taught data enthusiast working through a{" "}
                  <strong>degree-level data-analytics curriculum</strong> — all while holding down a full-time job.
                </p>
                
                <p>
                  I set aside <strong>1–2 focused hours every day</strong> to study, practise, and build projects, 
                  then turn those lessons into the e-books, guides, and tools you'll find here.
                </p>

                <p>
                  Every resource has been <strong>road-tested in real life</strong>: no jargon, no fluff — 
                  just practical content that fits into a busy schedule and grows with you. If you're a working 
                  professional with limited time, you're exactly who I'm building this for.
                </p>

                <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500 my-8">
                  <h3 className="font-semibold text-slate-900 mb-4 flex items-center">
                    <Users className="h-5 w-5 text-teal-600 mr-2" />
                    Join the journey:
                  </h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      Follow the daily/weekly updates.
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      Match my 1–2-hour study blocks — or dip in whenever you can.
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      Need extra support? I'm planning live problem-solving workshops and real-time chat sessions so we can tackle challenges together.
                    </li>
                  </ul>
                </div>

                <p className="text-center text-lg font-medium text-slate-800">
                  Whether you're switching careers or simply curious about data, let's learn side-by-side and cheer each other on. 
                  <br />
                  <strong className="text-teal-600">This isn't just my path — it's ours.</strong>
                </p>
              </div>
              
              <div className="text-center mt-8">
                <Button 
                  asChild
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg"
                >
                  <a href="/store">
                    Browse the Learning Store
                  </a>
                </Button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-200">
                <div className="text-center">
                  <div className="mx-auto mb-3 p-3 bg-teal-100 rounded-full w-fit">
                    <Clock className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Daily Learning</h3>
                  <p className="text-sm text-slate-600">
                    1-2 hours daily, real-world tested content for busy professionals
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mx-auto mb-3 p-3 bg-teal-100 rounded-full w-fit">
                    <GraduationCap className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Degree-Level Curriculum</h3>
                  <p className="text-sm text-slate-600">
                    Following structured data analytics program while working full-time
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mx-auto mb-3 p-3 bg-teal-100 rounded-full w-fit">
                    <Users className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Learn Together</h3>
                  <p className="text-sm text-slate-600">
                    Join live workshops and chat sessions for collaborative learning
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
