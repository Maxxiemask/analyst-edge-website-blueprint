
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartBar,
  FileText,
  CheckCircle2,
  Download,
  Brain,
  Clock,
  Users,
  Tv,
  Receipt,
  Award,
  Dna,
  HelpCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AddOns = () => {
  const { toast } = useToast();

  const addOns = [
    {
      title: "Industry-Specific Case Studies",
      icon: <ChartBar className="h-8 w-8 text-navy mb-2" />,
      description: "Take your learning to the next level with real-world case studies from top industries like healthcare, retail, finance, and more. Solve data problems the way analysts do on the job.",
      price: "£9.99",
      ctaPrimary: "View Sample Case Study",
      ctaSecondary: "Add to Bundle"
    },
    {
      title: "Cheat Sheets & Quick Reference Guides",
      icon: <FileText className="h-8 w-8 text-navy mb-2" />,
      description: "Instant access to downloadable PDF cheat sheets covering Power BI, SQL, Python, and Git essentials. Perfect for interview prep and daily work.",
      details: ["SQL Syntax Cheatsheet", "Python Pandas Reference", "GitHub Command Guide", "Power BI DAX Shortcuts"],
      price: "£4.99",
      ctaPrimary: "Download Sample",
      ctaSecondary: "Buy Full Pack"
    },
    {
      title: "Quizzes & Self-Assessments",
      icon: <CheckCircle2 className="h-8 w-8 text-navy mb-2" />,
      description: "Test your skills after each module with interactive quizzes, mini-challenges, and a final capstone exam to certify your learning.",
      details: ["Topic quizzes", "Hands-on SQL/Python challenges", "Final course exam"],
      price: "£4.99",
      ctaPrimary: "Try a Sample Quiz",
      ctaSecondary: "Upgrade to Premium Access"
    },
    {
      title: "Power Templates Pack",
      icon: <Download className="h-8 w-8 text-navy mb-2" />,
      description: "A collection of ready-to-use templates for dashboards, queries, data cleaning, and more. Includes Power BI, Excel, SQL, and Python tools.",
      details: ["Power BI dashboard frameworks", "SQL starter scripts", "Excel pivot/report templates", "Python Jupyter Notebooks"],
      price: "£9.99",
      ctaPrimary: "Preview Templates",
      ctaSecondary: "Get All Templates"
    },
    {
      title: "Capstone Project",
      icon: <Brain className="h-8 w-8 text-navy mb-2" />,
      description: "Bring everything together in one final project. You'll clean, analyze, and visualize data, then push it to GitHub – a full end-to-end portfolio piece.",
      details: ["Project Example: \"Electric Vehicle Market Analysis\""],
      price: "£12.99",
      ctaPrimary: "View Capstone Brief",
      ctaSecondary: "Unlock Capstone Access"
    },
    {
      title: "Real-Time Data Projects",
      icon: <Clock className="h-8 w-8 text-navy mb-2" />,
      description: "Analyze live data using APIs or regularly updated datasets. Mimic real-world workflows with current info like stock trends, weather, or public health.",
      details: ["Stock data (Yahoo Finance API)", "COVID-19 Data Hub"],
      price: "£8.99",
      ctaPrimary: "Explore Real-Time Data",
      ctaSecondary: "Add to Your Course"
    },
    {
      title: "Peer Reviews & Community Forum",
      icon: <Users className="h-8 w-8 text-navy mb-2" />,
      description: "Join a private community of learners and analysts. Get feedback, join group challenges, and showcase your projects.",
      details: ["Platform: Private Discord / Slack / Facebook"],
      price: "£5.99/month",
      ctaPrimary: "Join the Community",
      ctaSecondary: "Premium Only Access"
    },
    {
      title: "Live Sessions & Webinars",
      icon: <Tv className="h-8 w-8 text-navy mb-2" />,
      description: "Join weekly live Q&As, project reviews, and guest talks from working data analysts. All sessions recorded for later viewing.",
      price: "£7.99/month",
      ctaPrimary: "See Upcoming Events",
      ctaSecondary: "Get Premium Webinar Access"
    },
    {
      title: "Career & Portfolio Support",
      icon: <Receipt className="h-8 w-8 text-navy mb-2" />,
      description: "Guides and templates to help you build a powerful GitHub portfolio, write your resume, and prep for interviews.",
      details: ["Resume tips", "GitHub project template", "Interview question bank"],
      price: "£6.99",
      ctaPrimary: "Preview Career Pack",
      ctaSecondary: "Unlock Now"
    },
    {
      title: "Certification",
      icon: <Award className="h-8 w-8 text-navy mb-2" />,
      description: "Upon course completion, receive a \"Certified Data Analyst\" certificate, great for showcasing on LinkedIn or your resume.",
      price: "Included in Premium",
      ctaPrimary: "View Sample Certificate",
      ctaSecondary: "Included in Premium Access"
    },
    {
      title: "Advanced Modules Access",
      icon: <Dna className="h-8 w-8 text-navy mb-2" />,
      description: "For learners ready to go further. Advanced topics in Machine Learning, Cloud Data, BI Strategy, and Time Series Forecasting.",
      price: "£29.99",
      ctaPrimary: "See Advanced Modules",
      ctaSecondary: "Upgrade Your Learning"
    },
  ];

  const handleAddOn = (title, action) => {
    toast({
      title: `${action} - ${title}`,
      description: `You selected to ${action.toLowerCase()} for ${title}`,
      duration: 3000,
    });
  };

  console.log("AddOns page rendering"); // Debug log

  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      <main className="pt-20"> {/* Added padding-top to ensure content is below navigation */}
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-navy to-[#16437E] text-white py-16 md:py-24">
          <div className="container-custom text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-on-scroll">
              Supercharge Your Learning
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 animate-on-scroll">
              Premium Add-Ons & Enhancements for Data Analysts
            </h2>
            <p className="max-w-3xl mx-auto text-gray-100 mb-8 animate-on-scroll">
              Take your data analysis skills to the next level with our carefully curated collection of 
              premium tools, resources, and learning experiences.
            </p>
          </div>
        </section>

        {/* Bundle Pricing */}
        <section className="py-12 bg-gradient-radial from-white to-gray-50">
          <div className="container mx-auto px-4 text-center mb-12"> {/* Changed to standard container class */}
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 animate-on-scroll">
              Premium Bundle Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-2 border-gray-200 hover:border-navy transition-all animate-on-scroll card-hover">
                <CardHeader>
                  <CardTitle>Individual Add-Ons</CardTitle>
                  <CardDescription>Pick and choose what you need</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-navy text-xl font-bold">£4.99 - £12.99</p>
                  <p className="text-sm text-muted-foreground mt-2">Per add-on</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button variant="outline" onClick={() => toast({
                    title: "Browse Individual Add-Ons",
                    description: "Scroll down to see all available add-ons",
                  })}>
                    Browse Below
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border-2 border-gold bg-gradient-to-b from-white to-gray-50 shadow-xl relative animate-on-scroll card-hover">
                <div className="absolute -top-3 left-0 right-0 mx-auto w-max bg-gold text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <CardHeader>
                  <CardTitle>Premium Bundle</CardTitle>
                  <CardDescription>All essential add-ons included</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-navy text-xl font-bold">£39.99</p>
                  <p className="text-sm text-muted-foreground mt-2">Save over 60%</p>
                  <ul className="text-left mt-4 space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                      All cheat sheets and templates
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                      Case studies and quizzes
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                      Certification included
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button onClick={() => toast({
                    title: "Premium Bundle Selected",
                    description: "This would add the premium bundle to your cart",
                  })}>
                    Get Premium Bundle
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border-2 border-gray-200 hover:border-navy transition-all animate-on-scroll card-hover">
                <CardHeader>
                  <CardTitle>Exclusive Bundle</CardTitle>
                  <CardDescription>Everything plus advanced modules</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-navy text-xl font-bold">£59.99</p>
                  <p className="text-sm text-muted-foreground mt-2">Ultimate value</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white" onClick={() => toast({
                    title: "Exclusive Bundle Selected",
                    description: "This would add the exclusive bundle to your cart",
                  })}>
                    Get Exclusive Bundle
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* All Add-Ons */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4"> {/* Changed to standard container class */}
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-12 text-center animate-on-scroll">
              Individual Add-Ons & Enhancements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {addOns.map((addon, index) => (
                <Card key={index} className="animate-on-scroll card-hover">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        {addon.icon}
                        <CardTitle className="text-lg font-bold">{addon.title}</CardTitle>
                      </div>
                      <span className="text-navy font-bold">{addon.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{addon.description}</p>
                    {addon.details && (
                      <ul className="space-y-1 text-sm">
                        {addon.details.map((detail, i) => (
                          <li key={i} className="flex items-center">
                            <CheckCircle2 className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-2">
                    <Button 
                      onClick={() => handleAddOn(addon.title, "Preview")} 
                      variant="outline" 
                      className="w-full"
                    >
                      {addon.ctaPrimary}
                    </Button>
                    <Button 
                      onClick={() => handleAddOn(addon.title, "Purchase")} 
                      className="w-full"
                    >
                      {addon.ctaSecondary}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Help Button */}
        <div className="fixed bottom-8 right-8 z-40">
          <Button 
            variant="default" 
            className="h-14 w-14 rounded-full shadow-lg flex items-center justify-center"
            onClick={() => toast({
              title: "Need Help?",
              description: "Our team is ready to assist you with any questions about our add-ons.",
            })}
          >
            <HelpCircle className="h-6 w-6" />
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AddOns;
