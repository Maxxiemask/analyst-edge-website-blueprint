
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-navy font-bold text-xl md:text-2xl">
            The Analyst's Edge
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="text-charcoal font-medium hover:text-navy transition-colors"
          >
            About
          </a>
          <a
            href="#courses"
            className="text-charcoal font-medium hover:text-navy transition-colors"
          >
            Courses
          </a>
          <a
            href="#pricing"
            className="text-charcoal font-medium hover:text-navy transition-colors"
          >
            Pricing
          </a>
          <a
            href="#faqs"
            className="text-charcoal font-medium hover:text-navy transition-colors"
          >
            FAQs
          </a>
          <Button className="bg-navy hover:bg-navy/90">Get Started</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 animate-fade-in z-50">
          <nav className="flex flex-col space-y-4">
            <a
              href="#about"
              className="text-charcoal font-medium py-2 hover:text-navy transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#courses"
              className="text-charcoal font-medium py-2 hover:text-navy transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Courses
            </a>
            <a
              href="#pricing"
              className="text-charcoal font-medium py-2 hover:text-navy transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#faqs"
              className="text-charcoal font-medium py-2 hover:text-navy transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQs
            </a>
            <Button className="w-full bg-navy hover:bg-navy/90">Get Started</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
