
import React from 'react';
import { Button } from '@/components/ui/button';

const StoreHero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products-grid');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-navy via-slate-800 to-slate-900 text-white py-20 mt-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M20 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0-20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Level-Up Your Data Skills—
          <span className="text-teal-400">One Download at a Time</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Instant-access e-books & mini-courses for every step of your data journey.
        </p>
        
        <Button 
          onClick={scrollToProducts}
          size="lg"
          className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg"
        >
          Browse All Titles
        </Button>
      </div>
    </section>
  );
};

export default StoreHero;
