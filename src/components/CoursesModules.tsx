
import React, { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { 
  FileSpreadsheet, 
  Database, 
  PieChart, 
  BarChart2, 
  BookOpen, 
  Code, 
  Github, 
  LineChart, 
  AreaChart, 
  Brain, 
  Cloud, 
  Lightbulb, 
  Clock, 
  ChevronRight,
  Download
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Course category types
type CourseCategory = "Beginner" | "Intermediate" | "Advanced";
type CourseTrack = "Power BI Track" | "SQL & Python" | "Advanced Analysis" | "Starter";

interface Course {
  id: number;
  title: string;
  description: string;
  level: CourseCategory;
  track: CourseTrack;
  icon: React.ReactNode;
  popular: boolean;
  isFree?: boolean;
  gumroadLink?: string;
}

const coursesData: Course[] = [
  {
    id: 0,
    title: "Free Starter Guide: How to Start Your Career in Data Analysis",
    description: "Begin your data analysis journey with this comprehensive guide to required skills, tools, and career paths.",
    level: "Beginner",
    track: "Starter",
    icon: <Download className="h-8 w-8 text-navy" />,
    popular: false,
    isFree: true
  },
  {
    id: 1,
    title: "Excel for Analysis",
    description: "Master Excel functions, pivot tables, and data analysis techniques for business insights.",
    level: "Beginner",
    track: "Starter",
    icon: <FileSpreadsheet className="h-8 w-8 text-navy" />,
    popular: true,
    gumroadLink: "https://gumroad.com/l/excel-for-analysis"
  },
  {
    id: 2,
    title: "Guide to Power BI",
    description: "Learn to create interactive dashboards and visualizations with Microsoft Power BI.",
    level: "Beginner",
    track: "Power BI Track",
    icon: <PieChart className="h-8 w-8 text-navy" />,
    popular: false,
    gumroadLink: "https://gumroad.com/l/guide-to-powerbi"
  },
  {
    id: 3,
    title: "Power BI - Data Cleaning and Relationships",
    description: "Master data transformation, relationships, and cleaning in Power BI.",
    level: "Beginner",
    track: "Power BI Track",
    icon: <BarChart2 className="h-8 w-8 text-navy" />,
    popular: false,
    gumroadLink: "https://gumroad.com/l/powerbi-data-cleaning"
  },
  {
    id: 4,
    title: "Power BI - Real World Dashboards",
    description: "Build professional dashboards for sales, finance, and operations.",
    level: "Intermediate",
    track: "Power BI Track",
    icon: <PieChart className="h-8 w-8 text-navy" />,
    popular: true,
    gumroadLink: "https://gumroad.com/l/powerbi-dashboards"
  },
  {
    id: 5,
    title: "SQL for Analysis",
    description: "Query, filter, and analyze data using SQL for business intelligence.",
    level: "Beginner",
    track: "SQL & Python",
    icon: <Database className="h-8 w-8 text-navy" />,
    popular: false,
    gumroadLink: "https://gumroad.com/l/sql-analysis"
  },
  {
    id: 6,
    title: "Python for Analysis",
    description: "Learn Python fundamentals for data analysis with pandas and NumPy.",
    level: "Intermediate",
    track: "SQL & Python",
    icon: <Code className="h-8 w-8 text-navy" />,
    popular: true,
    gumroadLink: "https://gumroad.com/l/python-analysis"
  },
  {
    id: 7,
    title: "Python and SQL for Data Analysis",
    description: "Combine SQL and Python for powerful data extraction and analysis.",
    level: "Intermediate",
    track: "SQL & Python",
    icon: <Database className="h-8 w-8 text-navy" />,
    popular: false,
    gumroadLink: "https://gumroad.com/l/python-sql-analysis"
  },
  {
    id: 8,
    title: "Intro to GitHub for Data Analysts",
    description: "Version control and collaboration for data projects using GitHub.",
    level: "Intermediate",
    track: "SQL & Python",
    icon: <Github className="h-8 w-8 text-navy" />,
    popular: false,
    gumroadLink: "https://gumroad.com/l/github-for-analysts"
  },
  {
    id: 9,
    title: "Data Wrangling and Transformation",
    description: "Clean, transform, and prepare data for analysis with Python.",
    level: "Intermediate",
    track: "SQL & Python",
    icon: <BookOpen className="h-8 w-8 text-navy" />,
    popular: false,
    gumroadLink: "https://gumroad.com/l/data-wrangling"
  },
  {
    id: 10,
    title: "Advanced SQL for Analysts",
    description: "Master complex queries, window functions, and SQL optimization.",
    level: "Advanced",
    track: "Advanced Analysis",
    icon: <Database className="h-8 w-8 text-navy" />,
    popular: true,
    gumroadLink: "https://gumroad.com/l/advanced-sql"
  },
  {
    id: 11,
    title: "Data Visualization Mastery",
    description: "Create compelling visualizations with Python libraries and Tableau.",
    level: "Intermediate",
    track: "Advanced Analysis",
    icon: <AreaChart className="h-8 w-8 text-navy" />,
    popular: false,
    gumroadLink: "https://gumroad.com/l/data-visualization"
  },
  {
    id: 12,
    title: "Machine Learning for Analysts",
    description: "Apply ML algorithms to predict trends and extract insights.",
    level: "Advanced",
    track: "Advanced Analysis",
    icon: <Brain className="h-8 w-8 text-navy" />,
    popular: true,
    gumroadLink: "https://gumroad.com/l/ml-for-analysts"
  },
  {
    id: 13,
    title: "Cloud Data Platforms for Analysts",
    description: "Work with AWS, Azure, and Google Cloud for data analysis.",
    level: "Advanced",
    track: "Advanced Analysis",
    icon: <Cloud className="h-8 w-8 text-navy" />,
    popular: false,
    gumroadLink: "https://gumroad.com/l/cloud-data-platforms"
  },
  {
    id: 14,
    title: "Business Intelligence and Analytics Strategy",
    description: "Transform data into strategic business insights and action plans.",
    level: "Advanced",
    track: "Advanced Analysis",
    icon: <Lightbulb className="h-8 w-8 text-navy" />,
    popular: false,
    gumroadLink: "https://gumroad.com/l/bi-strategy"
  },
  {
    id: 15,
    title: "Time Series Analysis and Forecasting",
    description: "Predict future trends with time series models and forecasting.",
    level: "Advanced",
    track: "Advanced Analysis",
    icon: <Clock className="h-8 w-8 text-navy" />,
    popular: true,
    gumroadLink: "https://gumroad.com/l/time-series-analysis"
  },
];

const CoursesModules = () => {
  const { toast } = useToast();
  const elementsRef = useRef<HTMLDivElement[]>([]);
  const [activeFilter, setActiveFilter] = useState<CourseCategory | "All">("All");
  const [activeTrack, setActiveTrack] = useState<CourseTrack | "All">("All");

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

  const handleDownload = (course: Course) => {
    if (course.isFree) {
      toast({
        title: "Downloading Starter Guide",
        description: "Your free guide is being prepared for download",
        duration: 3000,
      });
    } else {
      window.open(course.gumroadLink, '_blank');
    }
  };

  const filteredCourses = coursesData.filter(
    course => (activeFilter === "All" || course.level === activeFilter) &&
              (activeTrack === "All" || course.track === activeTrack)
  );

  // Get unique tracks for filter
  const uniqueTracks = Array.from(new Set(coursesData.map(course => course.track)));

  return (
    <section id="courses" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 animate-on-scroll" ref={addToRefs}>
            Learning Modules
          </h2>
          <p className="text-lg text-charcoal/80 animate-on-scroll mb-8" ref={addToRefs}>
            Explore our full range of beginner-friendly, practical data analysis courses. 
            These modules will take you from complete beginner to confident analyst, with 
            real-world project skills. Each purchase includes lifetime access.
          </p>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="mr-4">
              <h3 className="text-sm font-medium mb-2 text-navy">Level:</h3>
              <div className="flex gap-2">
                <Badge 
                  variant={activeFilter === "All" ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setActiveFilter("All")}
                >
                  All
                </Badge>
                <Badge 
                  variant={activeFilter === "Beginner" ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setActiveFilter("Beginner")}
                >
                  Beginner
                </Badge>
                <Badge 
                  variant={activeFilter === "Intermediate" ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setActiveFilter("Intermediate")}
                >
                  Intermediate
                </Badge>
                <Badge 
                  variant={activeFilter === "Advanced" ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setActiveFilter("Advanced")}
                >
                  Advanced
                </Badge>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2 text-navy">Track:</h3>
              <div className="flex flex-wrap gap-2">
                <Badge 
                  variant={activeTrack === "All" ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setActiveTrack("All")}
                >
                  All Tracks
                </Badge>
                {uniqueTracks.map((track) => (
                  <Badge 
                    key={track}
                    variant={activeTrack === track ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setActiveTrack(track)}
                  >
                    {track}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Group courses by track */}
        {(activeTrack === "All" ? uniqueTracks : [activeTrack]).map((track) => {
          const trackCourses = filteredCourses.filter(course => 
            activeTrack === "All" ? course.track === track : true
          );
          
          // Only show section if it has courses
          if (trackCourses.length === 0) return null;
          
          return (
            <div key={track} className="mb-12">
              {activeTrack === "All" && (
                <h3 className="text-xl font-bold text-navy mb-6 ml-2">{track}</h3>
              )}
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {trackCourses.map((course) => (
                  <div key={course.id} className="animate-on-scroll" ref={addToRefs}>
                    <Card className="card-hover h-full flex flex-col border-t-4 border-t-navy overflow-hidden">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div className="bg-navy/5 p-3 rounded-lg">{course.icon}</div>
                          
                          <Badge 
                            variant={course.level === "Beginner" ? "outline" : 
                                  course.level === "Intermediate" ? "secondary" : "default"}
                            className={course.level === "Advanced" ? "bg-navy text-white" : ""}
                          >
                            {course.level}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-semibold mt-4 text-navy">{course.title}</h3>
                        {course.isFree && (
                          <Badge variant="secondary" className="bg-green-100 text-green-800 border-0 mt-2">
                            Free Resource
                          </Badge>
                        )}
                        {course.popular && !course.isFree && (
                          <Badge variant="secondary" className="bg-gold/20 text-gold border-0 mt-2">
                            Popular choice
                          </Badge>
                        )}
                      </CardHeader>
                      
                      <CardContent className="py-2 flex-grow">
                        <p className="text-sm text-gray-600">{course.description}</p>
                      </CardContent>
                      
                      <CardFooter className="pt-2 flex justify-center">
                        <Button 
                          className={course.isFree ? 
                            "bg-green-600 hover:bg-green-700 text-white w-full" :
                            "bg-navy hover:bg-navy/90 w-full"}
                          onClick={() => handleDownload(course)}
                        >
                          {course.isFree ? "Free Download" : "Buy Now"}
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

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

export default CoursesModules;
