
import React from "react";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FloatingHelpButton = () => {
  const { toast } = useToast();

  const handleHelpClick = () => {
    toast({
      title: "Need Help?",
      description: "Our team is ready to assist you with any questions about our add-ons.",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <Button 
        variant="default" 
        className="h-14 w-14 rounded-full shadow-lg flex items-center justify-center"
        onClick={handleHelpClick}
      >
        <HelpCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default FloatingHelpButton;
