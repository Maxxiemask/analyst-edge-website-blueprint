
import React, { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { FileSpreadsheet, Database, PieChart, BarChart2, BookOpen, Code, Github, LineChart, AreaChart, Brain, Cloud, Lightbulb, Clock, ChevronRight } from "lucide-react";

const ebookData = [
  {
    id: 1,
    title: "Excel for Analysis",
    description: "Master Excel functions, pivot tables, and data analysis techniques for business insights.",
    level: "Beginner",
    icon: <FileSpreadsheet className="h-8 w-8 text-navy" />,
    popular: true,
  },
  {
    id: 2,
    title: "Guide to Power BI",
    description: "Learn to create interactive dashboards and visualizations with Microsoft Power BI.",
    level: "Beginner",
    icon: <PieChart className="h-8 w-8 text-navy" />,
    popular: false,
  },
  {
    id: 3,
    title: "Power BI - Data Cleaning",
    description: "Master data transformation, relationships, and cleaning in Power BI.",
    level: "Beginner",
    icon: <BarChart2 className="h-8 w-8 text-navy" />,
    popular: false,
  },
  {
    id: 4,
    title: "Power BI - Real-World Dashboards",
    description: "Build professional dashboards for sales, finance, and operations.",
    level: "Intermediate",
    icon: <PieChart className="h-8 w-8 text-navy" />,
    popular: true,
  },
  {
    id: 5,
    title: "SQL for Analysis",
    description: "Query, filter, and analyze data using SQL for business intelligence.",
    level: "Beginner",
    icon: <Database className="h-8 w-8 text-navy" />,
    popular: false,
  },
  {
    id: 6,
    title: "Python for Analysis",
    description: "Learn Python fundamentals for data analysis with pandas and NumPy.",
    level: "Intermediate",
    icon: <Code className="h-8 w-8 text-navy" />,
    popular: true,
  },
  {
    id: 7,
    title: "Python and SQL for Data Analysis",
    description: "Combine SQL and Python for powerful data extraction and analysis.",
    level: "Intermediate",
    icon: <Database className="h-8 w-8 text-navy" />,
    popular: false,
  },
  {
    id: 8,
    title: "Intro to GitHub for Data Analysts",
    description: "Version control and collaboration for data projects using GitHub.",
    level: "Intermediate",
    icon: <Github className="h-8 w-8 text-navy" />,
    popular: false,
  },
  {
    id: 9,
    title: "Data Wrangling and Transformation",
    description: "Clean, transform, and prepare data for analysis with Python.",
    level: "Intermediate",
    icon: <BookOpen className="h-8 w-8 text-navy" />,
    popular: false,
  },
  {
    id: 10,
    title: "Advanced SQL for Analysts",
    description: "Master complex queries, window functions, and SQL optimization.",
    level: "Advanced",
    icon: <Database className="h-8 w-8 text-navy" />,
    popular: true,
  },
  {
    id: 11,
    title: "Data Visualization Mastery",
    description: "Create compelling visualizations with Python libraries and Tableau.",
    level: "Intermediate",
    icon: <AreaChart className="h-8 w-8 text-navy" />,
    popular: false,
  },
  {
    id: 12,
    title: "Machine Learning for Analysts",
    description: "Apply ML algorithms to predict trends and extract insights.",
    level: "Advanced",
    icon: <Brain className="h-8 w-8 text-navy" />,
    popular: true,
  },
  {
    id: 13,
    title: "Cloud Data Platforms for Analysts",
    description: "Work with AWS, Azure, and Google Cloud for data analysis.",
    level: "Advanced",
    icon: <Cloud className="h-8 w-8 text-navy" />,
    popular: false,
  },
  {
    id: 14,
    title: "Business Intelligence and Analytics Strategy",
    description: "Transform data into strategic business insights and action plans.",
    level: "Advanced",
    icon: <Lightbulb className="h-8 w-8 text-navy" />,
    popular: false,
  },
  {
    id: 15,
    title: "Time Series Analysis and Forecasting",
    description: "Predict future trends with time series models and forecasting.",
    level: "Advanced",
    icon: <Clock className="h-8 w-8 text-navy" />,
    popular: true,
  },
];

const EbookModules = () => {
  const elementsRef = useRef<HTMLDivElement[]>([]);

  const checkScroll = () => {
    elementsRef.current.forEach((element, index) => {
      if (!element) return;
      
      const top = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (top < windowHeight * 0.85) {
        setTimeout(() => {
          element.classList.add('animated');
        }, index * 50); // Staggered animation
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
    <section id="ebooks" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 animate-on-scroll" ref={addToRefs}>
            15 Comprehensive eBooks
          </h2>
          <p className="text-lg text-charcoal/80 animate-on-scroll" ref={addToRefs}>
            Each module carefully builds your skills from beginner to advanced levels. Start with accessible tools and progress to professional techniques.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ebookData.map((ebook, index) => (
            <div key={ebook.id} className="animate-on-scroll" ref={addToRefs}>
              <Card className="card-hover h-full flex flex-col border-t-4 border-t-navy overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="bg-navy/5 p-3 rounded-lg">{ebook.icon}</div>
                    
                    <Badge 
                      variant={ebook.level === "Beginner" ? "outline" : 
                             ebook.level === "Intermediate" ? "secondary" : "default"}
                      className={ebook.level === "Advanced" ? "bg-navy text-white" : ""}
                    >
                      {ebook.level}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mt-4 text-navy">{ebook.title}</h3>
                  {ebook.popular && (
                    <Badge variant="secondary" className="bg-gold/20 text-gold border-0 mt-2">
                      Popular choice
                    </Badge>
                  )}
                </CardHeader>
                
                <CardContent className="py-2 flex-grow">
                  <p className="text-sm text-gray-600">{ebook.description}</p>
                </CardContent>
                
                <CardFooter className="pt-2 flex justify-between">
                  <Button variant="outline" size="sm" className="text-navy border-navy">
                    Learn more
                  </Button>
                  <Button 
                    size="sm" 
                    className={ebook.popular ? "bg-gold hover:bg-gold/90 text-navy" : "bg-navy hover:bg-navy/90"}
                  >
                    Buy now
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-on-scroll" ref={addToRefs}>
          <Button
            size="lg"
            className="bg-navy hover:bg-navy/90 text-white font-medium flex items-center gap-2 mx-auto"
            asChild
          >
            <a href="#pricing">
              Get the Complete Bundle <ChevronRight size={16} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EbookModules;
