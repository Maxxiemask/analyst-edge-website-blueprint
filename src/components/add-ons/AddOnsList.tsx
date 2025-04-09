
import React from "react";
import AddOnCard from "@/components/add-ons/AddOnCard";
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
} from "lucide-react";

interface AddOnsListProps {
  onActionSelected: (title: string, action: string) => void;
}

const AddOnsList = ({ onActionSelected }: AddOnsListProps) => {
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

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-12 text-center animate-on-scroll">
          Individual Add-Ons & Enhancements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {addOns.map((addon, index) => (
            <AddOnCard 
              key={index}
              title={addon.title}
              icon={addon.icon}
              description={addon.description}
              price={addon.price}
              ctaPrimary={addon.ctaPrimary}
              ctaSecondary={addon.ctaSecondary}
              details={addon.details}
              onPreview={() => onActionSelected(addon.title, "Preview")}
              onPurchase={() => onActionSelected(addon.title, "Purchase")}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddOnsList;
