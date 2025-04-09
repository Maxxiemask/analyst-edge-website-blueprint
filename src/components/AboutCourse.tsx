
import React, { useEffect, useRef } from "react";
import { ChevronRight, BarChart2, Database, BookOpen, LineChart, Code, Github } from "lucide-react";

const AboutCourse = () => {
  const elementsRef = useRef<HTMLDivElement[]>([]);

  const checkScroll = () => {
    elementsRef.current.forEach(element => {
      if (!element) return;
      
      const top = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (top < windowHeight * 0.85) {
        element.classList.add('animated');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 animate-on-scroll" ref={addToRefs}>
            About The Analyst's Edge
          </h2>
          <p className="text-lg text-charcoal/80 animate-on-scroll" ref={addToRefs}>
            Our comprehensive eBook series takes you from complete beginner to professional data analyst through practical, project-based learning. Each book builds upon the previous one, creating a seamless learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8 animate-on-scroll" ref={addToRefs}>
              <h3 className="text-2xl font-bold text-navy mb-4">
                A Complete Learning Pathway
              </h3>
              <p className="text-charcoal/80 mb-4">
                Whether you're transitioning into tech, enhancing your business skills, or a recent graduate, our structured pathway ensures you master data analytics from foundation to advanced techniques.
              </p>
              <a href="#ebooks" className="text-navy font-medium inline-flex items-center hover:underline">
                Explore the eBooks <ChevronRight size={16} />
              </a>
            </div>

            <div className="space-y-4 animate-on-scroll" ref={addToRefs}>
              <div className="bg-white p-4 rounded-lg shadow-sm flex gap-4">
                <div className="bg-navy/10 p-3 rounded-lg">
                  <BarChart2 className="text-navy" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Practical Skills First</h4>
                  <p className="text-sm text-charcoal/70">Start with Excel & Power BI for immediate job-ready skills</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm flex gap-4">
                <div className="bg-navy/10 p-3 rounded-lg">
                  <Code className="text-navy" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Progress to Programming</h4>
                  <p className="text-sm text-charcoal/70">Move to SQL & Python as your confidence grows</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm flex gap-4">
                <div className="bg-navy/10 p-3 rounded-lg">
                  <LineChart className="text-navy" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Advanced Techniques</h4>
                  <p className="text-sm text-charcoal/70">Master visualization, ML, and time series analysis</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] animate-on-scroll" ref={addToRefs}>
            {/* Learning path visualization */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200">
              <div className="absolute left-0 top-0 bottom-1/2 w-full bg-gradient-to-b from-navy to-lightblue"></div>
            </div>
            
            <div className="space-y-12 relative">
              <div className="pl-8 relative">
                <div className="absolute left-0 top-2 w-8 h-[3px] bg-navy"></div>
                <div className="absolute left-[-8px] top-0 w-5 h-5 rounded-full border-2 border-navy bg-white"></div>
                <h4 className="text-lg font-semibold text-navy">Foundational Skills</h4>
                <p className="text-sm text-charcoal/70">Excel, Power BI basics & data cleaning</p>
              </div>
              
              <div className="pl-8 relative">
                <div className="absolute left-0 top-2 w-8 h-[3px] bg-navy"></div>
                <div className="absolute left-[-8px] top-0 w-5 h-5 rounded-full border-2 border-navy bg-white"></div>
                <h4 className="text-lg font-semibold text-navy">Data Management</h4>
                <p className="text-sm text-charcoal/70">SQL, relational databases & dashboards</p>
              </div>
              
              <div className="pl-8 relative">
                <div className="absolute left-0 top-2 w-8 h-[3px] bg-navy"></div>
                <div className="absolute left-[-8px] top-0 w-5 h-5 rounded-full border-2 border-navy bg-white"></div>
                <h4 className="text-lg font-semibold text-navy">Programming & Analysis</h4>
                <p className="text-sm text-charcoal/70">Python, data wrangling & visualization</p>
              </div>
              
              <div className="pl-8 relative">
                <div className="absolute left-0 top-2 w-8 h-[3px] bg-navy"></div>
                <div className="absolute left-[-8px] top-0 w-5 h-5 rounded-full border-2 border-navy bg-white"></div>
                <h4 className="text-lg font-semibold text-navy">Advanced Applications</h4>
                <p className="text-sm text-charcoal/70">GitHub, cloud platforms & business strategy</p>
              </div>
              
              <div className="pl-8 relative">
                <div className="absolute left-0 top-2 w-8 h-[3px] bg-navy"></div>
                <div className="absolute left-[-8px] top-0 w-5 h-5 rounded-full border-2 border-gold bg-white"></div>
                <h4 className="text-lg font-semibold text-gold">Professional Analyst</h4>
                <p className="text-sm text-charcoal/70">Machine learning & time series forecasting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCourse;
