
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BundlePricing = () => {
  const { toast } = useToast();

  return (
    <section className="py-12 bg-gradient-radial from-white to-gray-50">
      <div className="container mx-auto px-4 text-center mb-12">
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
  );
};

export default BundlePricing;
