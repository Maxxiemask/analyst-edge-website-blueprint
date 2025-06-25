
import React from 'react';
import { Button } from '@/components/ui/button';

const StoreHero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products-grid');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-20 mt-20">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-teal-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)] opacity-50"></div>
      
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
