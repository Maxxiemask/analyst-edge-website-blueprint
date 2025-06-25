
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const FeaturedBundle = () => {
  return (
    <div className="mb-12">
      <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-2 border-yellow-300 shadow-lg">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-2">
            <Badge className="bg-yellow-500 text-white text-sm px-3 py-1">
              Beginner Roadmap
            </Badge>
          </div>
          <CardTitle className="text-3xl font-bold text-slate-900">
            🚀 NEW! Complete Core Skills Week 1-4 Bundle
          </CardTitle>
          <div className="text-2xl font-bold text-teal-600 mt-2">
            £29.99 <span className="text-lg text-slate-600 line-through">£39.96</span>
            <span className="text-sm text-green-600 ml-2">(Save 25%)</span>
          </div>
        </CardHeader>
        
        <CardContent className="text-center">
          <p className="text-slate-700 text-lg mb-6 max-w-2xl mx-auto">
            Four structured weeks of lessons, projects, and cheat-sheets to kick-start your analyst career.
          </p>
          
          <Button 
            asChild
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 text-lg"
          >
            <a 
              href="https://journeyanalyst.gumroad.com/l/core-skills-bundle" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Get the 4-Week Bundle
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeaturedBundle;
