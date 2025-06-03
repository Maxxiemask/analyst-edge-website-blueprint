
import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileSpreadsheet, 
  Database, 
  PieChart, 
  Code, 
  Brain, 
  Clock,
  Users,
  TrendingUp,
  CheckCircle
} from "lucide-react";

interface LearningPath {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: string;
  originalPrice?: string;
  skills: string[];
  modules: string[];
  icon: React.ReactNode;
  popular?: boolean;
  gumroadLink: string;
}

const learningPaths: LearningPath[] = [
  {
    id: "starter-pack",
    title: "Data Analyst Starter Pack",
    description: "Build foundational skills in Excel and Power BI to jumpstart your analytics career.",
    duration: "4-6 weeks",
    level: "Beginner",
    price: "£29",
    originalPrice: "£45",
    skills: ["Excel Analysis", "Power BI Dashboards", "Data Visualization", "Business Reporting"],
    modules: [
      "Excel for Analysis",
      "Guide to Power BI", 
      "Power BI - Data Cleaning and Relationships",
      "Power BI - Real World Dashboards"
    ],
    icon: <FileSpreadsheet className="h-8 w-8 text-navy" />,
    popular: true,
    gumroadLink: "https://gumroad.com/l/starter-pack"
  },
  {
    id: "sql-python-toolkit",
    title: "SQL & Python Toolkit",
    description: "Master essential coding languages for data extraction, manipulation, and analysis.",
    duration: "6-8 weeks", 
    level: "Intermediate",
    price: "£39",
    originalPrice: "£60",
    skills: ["SQL Querying", "Python Programming", "Data Wrangling", "Version Control"],
    modules: [
      "SQL for Analysis",
      "Python for Analysis", 
      "Python and SQL for Data Analysis",
      "Intro to GitHub for Data Analysts",
      "Data Wrangling and Transformation"
    ],
    icon: <Database className="h-8 w-8 text-navy" />,
    gumroadLink: "https://gumroad.com/l/sql-python-toolkit"
  },
  {
    id: "advanced-analyst-track",
    title: "Advanced Analyst Track", 
    description: "Dive into machine learning, cloud platforms, and strategic business intelligence.",
    duration: "8-12 weeks",
    level: "Advanced",
    price: "£49",
    originalPrice: "£85",
    skills: ["Machine Learning", "Cloud Analytics", "Advanced SQL", "BI Strategy"],
    modules: [
      "Advanced SQL for Analysts",
      "Data Visualization Mastery",
      "Machine Learning for Analysts", 
      "Cloud Data Platforms for Analysts",
      "Business Intelligence and Analytics Strategy",
      "Time Series Analysis and Forecasting"
    ],
    icon: <Brain className="h-8 w-8 text-navy" />,
    gumroadLink: "https://gumroad.com/l/advanced-analyst-track"
  }
];

const LearningPaths = () => {
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
    <section id="learning-paths" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 animate-on-scroll" ref={addToRefs}>
            Structured Learning Paths
          </h2>
          <p className="text-lg text-charcoal/80 animate-on-scroll" ref={addToRefs}>
            Choose your path to becoming a confident data analyst. Each track is carefully designed 
            to build your skills progressively, with practical projects and real-world applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {learningPaths.map((path) => (
            <div key={path.id} className="animate-on-scroll" ref={addToRefs}>
              <Card className="h-full flex flex-col border-t-4 border-t-navy card-hover relative">
                {path.popular && (
                  <div className="absolute top-0 right-0 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                    MOST POPULAR
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-navy/5 p-3 rounded-lg">{path.icon}</div>
                    <Badge variant={path.level === "Beginner" ? "secondary" : 
                                 path.level === "Intermediate" ? "outline" : "default"}
                           className={path.level === "Advanced" ? "bg-navy text-white" : ""}>
                      {path.level}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-navy mb-2">{path.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{path.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {path.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      {path.modules.length} modules
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <div className="mb-6">
                    <h4 className="font-semibold text-navy mb-3">Skills You'll Master:</h4>
                    <div className="flex flex-wrap gap-2">
                      {path.skills.map((skill, index) => (
                        <span key={index} className="text-xs bg-navy/10 text-navy px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-navy mb-3">Included Modules:</h4>
                    <ul className="space-y-2">
                      {path.modules.map((module, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" />
                          {module}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-end gap-2 mb-2">
                      <span className="text-2xl font-bold text-charcoal">{path.price}</span>
                      {path.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{path.originalPrice}</span>
                      )}
                    </div>
                    <div className="text-xs text-gray-500">vs. £2,000+ bootcamp cost</div>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    className="w-full bg-navy hover:bg-navy/90"
                    asChild
                  >
                    <a href={path.gumroadLink} target="_blank" rel="noopener noreferrer">
                      Get Started Today
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center animate-on-scroll" ref={addToRefs}>
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-navy mb-4">
              💡 Not sure which path to choose?
            </h3>
            <p className="text-gray-600 mb-6">
              Start with our free guide to understand your learning journey, or grab the complete bundle 
              and save over 60% on all learning paths.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" className="border-navy text-navy">
                Download Free Guide
              </Button>
              <Button className="bg-gold hover:bg-gold/90 text-navy" asChild>
                <a href="#pricing">
                  View Complete Bundle
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;
