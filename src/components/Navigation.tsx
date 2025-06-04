
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
          <h1 className="text-slate-900 font-bold text-xl md:text-2xl">
            The Analyst's Journey
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#featured"
            className="text-slate-700 font-medium hover:text-teal-600 transition-colors"
          >
            Resources
          </a>
          <a
            href="#about"
            className="text-slate-700 font-medium hover:text-teal-600 transition-colors"
          >
            About
          </a>
          <Button className="bg-teal-600 hover:bg-teal-700">Get Started</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-900"
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
              href="#featured"
              className="text-slate-700 font-medium py-2 hover:text-teal-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resources
            </a>
            <a
              href="#about"
              className="text-slate-700 font-medium py-2 hover:text-teal-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <Button className="w-full bg-teal-600 hover:bg-teal-700">Get Started</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
