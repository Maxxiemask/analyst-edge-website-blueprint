
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would integrate with your newsletter service
      setIsSubscribed(true);
      toast({
        title: "Successfully subscribed!",
        description: "You'll be the first to know about new resources and bundles.",
      });
      setEmail("");
    }
  };

  return (
    <section className="section-padding bg-blue-600 text-white">
      <div className="container-custom">
        <Card className="max-w-2xl mx-auto border-0 shadow-2xl bg-white text-charcoal animate-on-scroll">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="mx-auto mb-6 p-4 bg-blue-100 rounded-full w-fit">
              <Mail className="h-8 w-8 text-blue-600" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
              Stay Updated on the Journey
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Get notified when new eBooks, tutorials, and bundles are available. 
              Plus, receive exclusive learning tips from my own data analysis journey.
            </p>
            
            {isSubscribed ? (
              <div className="flex items-center justify-center gap-3 text-green-600">
                <CheckCircle size={20} />
                <span className="font-medium">Thanks for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 border-gray-300"
                />
                <Button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 px-6"
                >
                  <Send size={16} />
                  Subscribe
                </Button>
              </form>
            )}
            
            <p className="text-xs text-gray-500 mt-4">
              No spam, ever. Unsubscribe anytime with one click.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;
