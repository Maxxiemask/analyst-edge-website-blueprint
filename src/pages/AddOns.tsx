
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import HeroSection from "@/components/add-ons/HeroSection";
import BundlePricing from "@/components/add-ons/BundlePricing";
import AddOnsList from "@/components/add-ons/AddOnsList";
import FloatingHelpButton from "@/components/add-ons/FloatingHelpButton";

const AddOns = () => {
  const { toast } = useToast();

  const handleAddOn = (title: string, action: string) => {
    toast({
      title: `${action} - ${title}`,
      description: `You selected to ${action.toLowerCase()} for ${title}`,
      duration: 3000,
    });
  };

  console.log("AddOns page rendering"); // Debug log

  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      <main className="pt-20"> {/* Added padding-top to ensure content is below navigation */}
        <HeroSection />
        <BundlePricing />
        <AddOnsList onActionSelected={handleAddOn} />
        <FloatingHelpButton />
      </main>
      <Footer />
    </div>
  );
};

export default AddOns;
