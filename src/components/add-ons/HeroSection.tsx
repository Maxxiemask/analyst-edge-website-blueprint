
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-navy to-[#16437E] text-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
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
  );
};

export default HeroSection;
