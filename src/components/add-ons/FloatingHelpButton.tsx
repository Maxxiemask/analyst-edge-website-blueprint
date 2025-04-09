
import React from "react";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FloatingHelpButton = () => {
  const { toast } = useToast();

  const handleHelpClick = () => {
    toast({
      title: "Need Help?",
      description: "Our team is ready to assist you with any questions about our add-ons. Contact support@datacoursepro.com for immediate assistance.",
      duration: 5000,
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button 
        variant="default" 
        className="h-14 w-14 rounded-full shadow-lg flex items-center justify-center bg-primary hover:bg-primary/90"
        onClick={handleHelpClick}
      >
        <HelpCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default FloatingHelpButton;
