
import React from 'react';
import Navigation from '@/components/Navigation';
import StoreHero from '@/components/store/StoreHero';
import FeaturedBundle from '@/components/store/FeaturedBundle';
import ProductGrid from '@/components/store/ProductGrid';
import Footer from '@/components/Footer';

const Store = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <StoreHero />
      <div className="container mx-auto px-4 py-12">
        <FeaturedBundle />
        <ProductGrid />
      </div>
      <Footer />
    </div>
  );
};

export default Store;
