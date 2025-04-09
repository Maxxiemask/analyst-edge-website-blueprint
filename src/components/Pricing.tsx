
import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check, BookOpen, Package, ChevronRight } from "lucide-react";

const Pricing = () => {
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
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 animate-on-scroll" ref={addToRefs}>
            Flexible Pricing Options
          </h2>
          <p className="text-lg text-charcoal/80 animate-on-scroll" ref={addToRefs}>
            Choose between individual eBooks or save with our complete bundle. Investment in your data analytics skills with immediate access.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Individual eBook Option */}
          <div className="lg:col-span-1 animate-on-scroll" ref={addToRefs}>
            <Card className="border-t-4 border-t-navy h-full flex flex-col card-hover">
              <CardHeader>
                <div className="bg-navy/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-navy" />
                </div>
                <h3 className="text-2xl font-bold text-navy">Single eBooks</h3>
                <div className="mt-4 flex items-end">
                  <span className="text-3xl font-bold text-charcoal">£7.99</span>
                  <span className="text-gray-500 ml-2"> - £14.99</span>
                </div>
                <p className="text-gray-500 text-sm mt-2">Per eBook</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {[
                    "Focused learning on specific topics",
                    "Lifetime access to individual eBooks",
                    "Self-paced learning experience",
                    "Practice exercises & code downloads",
                    "Choose based on your current needs"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-navy shrink-0 mt-0.5" />
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-navy hover:bg-navy/90">
                  Browse eBooks
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Bundle Option - Highlighted */}
          <div className="lg:col-span-2 animate-on-scroll" ref={addToRefs}>
            <Card className="border-t-4 border-t-gold h-full flex flex-col shadow-lg relative card-hover">
              <div className="absolute top-0 right-0 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                BEST VALUE
              </div>
              <CardHeader>
                <div className="bg-gold/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-navy">Complete Bundle</h3>
                <div className="mt-4 flex items-end">
                  <span className="text-3xl font-bold text-charcoal">£79.99</span>
                  <span className="text-gray-500 ml-2 line-through">£119.85</span>
                  <span className="ml-2 text-sm bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-medium">Save 33%</span>
                </div>
                <p className="text-gray-500 text-sm mt-2">One-time payment</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="grid md:grid-cols-2 gap-x-6 gap-y-3">
                  {[
                    "All 15 eBooks included",
                    "Save over £40 vs. individual purchase",
                    "Lifetime access to all materials",
                    "Structured learning pathway",
                    "Complete code downloads & exercises",
                    "Full data sets for practice",
                    "Regular content updates",
                    "Priority email support"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-navy mb-2">What's included:</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    From Excel essentials to advanced machine learning - all 15 eBooks covering the complete data analyst journey.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Excel", "Power BI", "SQL", "Python", "GitHub", "ML", "Cloud"].map((tag) => (
                      <span key={tag} className="text-xs bg-navy/10 text-navy px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-medium">
                  Get Complete Bundle
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm max-w-3xl mx-auto animate-on-scroll" ref={addToRefs}>
          <h3 className="font-semibold text-navy mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
            Frequently Asked Questions
          </h3>
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-medium text-navy">How are the eBooks delivered?</h4>
              <p className="text-gray-600 mt-1">Immediately after purchase via secure download links. You'll also receive access to our online reader portal.</p>
            </div>
            <div>
              <h4 className="font-medium text-navy">Do you offer refunds?</h4>
              <p className="text-gray-600 mt-1">Yes, we offer a 30-day satisfaction guarantee on all purchases.</p>
            </div>
            <div>
              <h4 className="font-medium text-navy">How long do I have access?</h4>
              <p className="text-gray-600 mt-1">You get lifetime access to all purchased eBooks, including future updates.</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <a href="#" className="text-navy font-medium inline-flex items-center hover:underline">
              View all FAQs <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
