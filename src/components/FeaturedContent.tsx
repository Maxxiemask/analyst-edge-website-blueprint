
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, ShoppingCart, FileSpreadsheet, Gift } from "lucide-react";

const FeaturedContent = () => {
  return (
    <section id="featured" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 animate-on-scroll">
            Start Your Journey Here
          </h2>
          <p className="text-lg text-charcoal/80 animate-on-scroll">
            Begin with our free guide, then build your skills with practical, affordable resources.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Guide */}
          <div className="animate-on-scroll">
            <Card className="h-full border-2 border-green-200 bg-green-50/50 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
                  <Gift className="h-8 w-8 text-green-600" />
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-700 border-0 mb-2 w-fit mx-auto">
                  100% FREE
                </Badge>
                <h3 className="text-xl font-bold text-navy mb-2">
                  How to Start Your Career in Data Analysis
                </h3>
                <p className="text-gray-600 text-sm">
                  Your complete beginner's roadmap. No fluff, just practical steps to get started.
                </p>
              </CardHeader>
              
              <CardContent className="text-center">
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div>✓ Career roadmap & skill overview</div>
                  <div>✓ Industry insights & salary expectations</div>
                  <div>✓ First steps to take today</div>
                </div>
                
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
                  asChild
                >
                  <a href="https://dlahtalk.gumroad.com/l/yclpyi" target="_blank" rel="noopener noreferrer">
                    <Download size={16} />
                    Download Free Guide
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Excel for Analysts */}
          <div className="animate-on-scroll">
            <Card className="h-full border-2 border-green-300 bg-green-100/50 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-green-200 rounded-full w-fit">
                  <FileSpreadsheet className="h-8 w-8 text-green-700" />
                </div>
                <Badge variant="secondary" className="bg-green-200 text-green-800 border-0 mb-2 w-fit mx-auto">
                  FEATURED
                </Badge>
                <h3 className="text-xl font-bold text-navy mb-2">
                  Excel for Analysts
                </h3>
                <p className="text-gray-600 text-sm">
                  Master Excel functions, pivot tables, and data analysis techniques for business insights.
                </p>
              </CardHeader>
              
              <CardContent className="text-center">
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div>✓ Essential Excel functions</div>
                  <div>✓ Pivot tables & data modeling</div>
                  <div>✓ Real business case studies</div>
                </div>
                
                <div className="text-2xl font-bold text-green-700 mb-4">£7.99</div>
                
                <Button 
                  className="w-full bg-green-700 hover:bg-green-800 text-white flex items-center gap-2"
                  asChild
                >
                  <a href="https://dlahtalk.gumroad.com/l/xqdhfh" target="_blank" rel="noopener noreferrer">
                    <ShoppingCart size={16} />
                    Buy Now – £7.99
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
