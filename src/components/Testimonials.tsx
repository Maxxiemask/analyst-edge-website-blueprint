
import React, { useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Data Analyst",
    company: "TechFlow Solutions",
    content: "The SQL & Python Toolkit completely transformed my career. I went from marketing coordinator to data analyst in just 4 months. The practical projects gave me the confidence to apply for analyst roles.",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Business Intelligence Analyst", 
    company: "RetailCorp",
    content: "I tried expensive bootcamps before finding Analyst Edge. The quality here is outstanding and at a fraction of the cost. The Power BI modules landed me my dream job.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Junior Data Scientist",
    company: "FinanceFirst",
    content: "Starting with the Beginner Pack gave me the foundation I needed. Now I'm working with machine learning models daily. The progression from Excel to advanced analytics was perfect.",
    rating: 5
  },
  {
    id: 4,
    name: "David Kim", 
    role: "Operations Analyst",
    company: "LogisticsPro",
    content: "The Advanced Analyst Track pushed my skills to the next level. Cloud platforms and ML techniques I learned here are exactly what I use in my current role. Incredible value.",
    rating: 5
  }
];

const Testimonials = () => {
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
    checkScroll();
    
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 animate-on-scroll" ref={addToRefs}>
            Success Stories
          </h2>
          <p className="text-lg text-charcoal/80 animate-on-scroll" ref={addToRefs}>
            Join hundreds of learners who have successfully transitioned into data analyst roles 
            after completing our learning paths.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="animate-on-scroll" ref={addToRefs}>
              <Card className="h-full border-t-4 border-t-gold card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Quote className="h-8 w-8 text-gold shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center gap-1 mb-2">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-gold fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-4">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold text-navy">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                        <div className="text-sm text-gray-500">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="bg-navy/5 p-8 rounded-lg text-center animate-on-scroll" ref={addToRefs}>
          <h3 className="text-xl font-bold text-navy mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join our community of successful data analysts. Start with any learning path 
            and begin your transformation today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>500+ Career Transitions</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Lifetime Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
