
import React, { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check, BookOpen, Package, ChevronRight, Clock, AlertCircle } from "lucide-react";

const Pricing = () => {
  const elementsRef = useRef<HTMLDivElement[]>([]);
  const [timeLeft, setTimeLeft] = useState({
    days: 29,
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
    checkScroll();
    
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
        {/* Launch Offer Banner */}
        <div className="bg-gradient-to-r from-navy to-navy/80 text-white p-6 rounded-lg mb-16 animate-on-scroll" ref={addToRefs}>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              🎉 Launch Offer: Save Over £250 on the Full Data Analyst Course Bundle!
            </h2>
            <p className="text-lg mb-4 text-gray-200">
              Our complete 16-module career course (worth £300) is now available for a limited-time launch price.
            </p>
            <div className="flex items-center justify-center gap-2 text-gold mb-4">
              <Clock size={20} />
              <span className="font-semibold">Price increases in:</span>
            </div>
            <div className="flex justify-center gap-4 text-center">
              <div className="bg-white/10 p-3 rounded-lg">
                <div className="text-2xl font-bold">{timeLeft.days}</div>
                <div className="text-xs">DAYS</div>
              </div>
              <div className="bg-white/10 p-3 rounded-lg">
                <div className="text-2xl font-bold">{timeLeft.hours}</div>
                <div className="text-xs">HOURS</div>
              </div>
              <div className="bg-white/10 p-3 rounded-lg">
                <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                <div className="text-xs">MINS</div>
              </div>
              <div className="bg-white/10 p-3 rounded-lg">
                <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                <div className="text-xs">SECS</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 animate-on-scroll" ref={addToRefs}>
            Affordable Learning, Incredible Value
          </h2>
          <p className="text-lg text-charcoal/80 animate-on-scroll" ref={addToRefs}>
            Get the same quality education as expensive bootcamps at a fraction of the cost. 
            Choose the option that fits your learning style and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Free Starter Guide */}
          <div className="animate-on-scroll" ref={addToRefs}>
            <Card className="border-t-4 border-t-green-500 h-full flex flex-col card-hover">
              <CardHeader>
                <div className="bg-green-500/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy">Free Starter Guide</h3>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-green-600">£0</span>
                </div>
                <p className="text-gray-500 text-sm mt-2">100% Free Download</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {[
                    "How to Start Your Career in Data Analysis",
                    "Essential skills roadmap",
                    "Tool recommendations", 
                    "Career transition guide",
                    "Perfect for complete beginners"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Free Download
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Beginner's Bundle */}
          <div className="animate-on-scroll" ref={addToRefs}>
            <Card className="border-t-4 border-t-navy h-full flex flex-col card-hover">
              <CardHeader>
                <div className="bg-navy/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-navy" />
                </div>
                <h3 className="text-2xl font-bold text-navy">Beginner's Bundle</h3>
                <div className="mt-4 flex items-end">
                  <span className="text-3xl font-bold text-charcoal">£49</span>
                  <span className="text-gray-500 ml-2 line-through">£75</span>
                </div>
                <p className="text-gray-500 text-sm mt-2">vs. £1,500+ bootcamp</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="bg-navy/5 p-3 rounded-lg mb-4">
                  <p className="text-sm font-medium text-navy mb-2">Perfect for career switchers who want to start strong with the essential tools.</p>
                  <p className="text-xs text-gray-600">5 beginner-friendly eBooks to help you go from zero to confident analyst.</p>
                </div>
                <ul className="space-y-3">
                  {[
                    "Excel for Analysis",
                    "Guide to Power BI",
                    "SQL for Analysis", 
                    "Python for Analysis",
                    "Intro to GitHub"
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
                  Get Beginner Bundle
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Full Career Course Bundle */}
          <div className="animate-on-scroll" ref={addToRefs}>
            <Card className="border-t-4 border-t-gold h-full flex flex-col shadow-lg relative card-hover">
              <div className="absolute top-0 right-0 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                BEST VALUE
              </div>
              <CardHeader>
                <div className="bg-gold/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-navy">Full Career Course Bundle</h3>
                <div className="mt-4 flex items-end">
                  <span className="text-3xl font-bold text-charcoal">£47</span>
                  <span className="text-gray-500 ml-2 line-through">£299</span>
                  <span className="ml-2 text-sm bg-red-100 text-red-800 px-2 py-0.5 rounded-full font-medium">
                    Launch Price
                  </span>
                </div>
                <p className="text-gray-500 text-sm mt-2">vs. £2,000+ bootcamp</p>
                <div className="mt-2 flex items-center gap-1 text-red-600 text-sm">
                  <AlertCircle size={14} />
                  <span>This price won't last!</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="bg-gold/10 p-3 rounded-lg mb-4">
                  <p className="text-sm font-medium text-navy mb-2">
                    Build your skills, portfolio, and confidence from day one — no fluff, just real-world learning.
                  </p>
                  <p className="text-xs text-gray-600">Most users choose this option</p>
                </div>
                <div className="grid gap-2 mb-4">
                  {[
                    "All 16 professional modules",
                    "Beginner to advanced progression",
                    "Power BI, SQL, Python, ML & more", 
                    "Project-ready portfolio knowledge",
                    "Lifetime access & updates",
                    "Save over 70% vs individual purchase"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                      <span className="ml-3 text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-navy mb-2 text-sm">💡 Smart Price Psychology:</h4>
                  <p className="text-xs text-gray-600 mb-2">
                    Buying a few books? You'll get more value with the bundle — and save up to 70%.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {["Excel", "Power BI", "SQL", "Python", "ML", "Cloud"].map((tag) => (
                      <span key={tag} className="text-xs bg-navy/10 text-navy px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-medium">
                  Get Complete Bundle Now
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Individual Course Pricing Note */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm max-w-3xl mx-auto animate-on-scroll" ref={addToRefs}>
          <h3 className="font-semibold text-navy mb-4 flex items-center">
            <BookOpen className="mr-2" size={20} />
            Individual Course Pricing
          </h3>
          <div className="text-sm text-gray-600 mb-4">
            <p className="mb-2">
              <strong>Any single eBook: £5.99 each</strong>
            </p>
            <p className="mb-4">
              💡 <em>Buying a few books? You'll get more value with the bundle — and save up to 70%.</em>
            </p>
            <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
              <p className="text-yellow-800 text-sm">
                <strong>Price Comparison:</strong> Traditional bootcamps cost £2,000-5,000+. 
                Our complete career transformation course is just £47 during launch.
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <a href="#courses" className="text-navy font-medium inline-flex items-center hover:underline">
              Browse Individual Courses <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
