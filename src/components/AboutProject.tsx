
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Youtube, Mail } from "lucide-react";

const AboutProject = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 animate-on-scroll">
              About This Project
            </h2>
          </div>

          <Card className="border-0 shadow-lg bg-white animate-on-scroll">
            <CardContent className="p-8 md:p-12 text-center">
              <p className="text-lg text-slate-700 leading-relaxed mb-6 max-w-3xl mx-auto">
                Hi, I'm documenting my real journey into data analysis — starting completely self-taught and soon moving into a formal degree-level course at the end of June.
              </p>
              
              <p className="text-lg text-slate-700 leading-relaxed mb-6 max-w-3xl mx-auto">
                These books are the exact notes I've used to teach myself tools like SQL, Power BI, Excel, Python, and GitHub — rewritten into practical guides for beginners like me. I'll continue uploading more eBooks, walkthroughs, and real practice examples as I go.
              </p>
              
              <p className="text-lg text-slate-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                Come follow along! I'll be sharing daily and weekly updates through video content, screenshots, and more on my social media channels. Let's learn together!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="https://www.instagram.com/analystsjourney/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-700 hover:text-teal-600 transition-colors"
                >
                  <Instagram size={20} />
                  <span>@analystsjourney</span>
                </a>
                
                <a 
                  href="https://www.youtube.com/@analystsjourney" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-700 hover:text-teal-600 transition-colors"
                >
                  <Youtube size={20} />
                  <span>@analystsjourney</span>
                </a>
                
                <a 
                  href="mailto:analystsjourney@gmail.com"
                  className="flex items-center gap-2 text-slate-700 hover:text-teal-600 transition-colors"
                >
                  <Mail size={20} />
                  <span>analystsjourney@gmail.com</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
