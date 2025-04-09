
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
      description: `You selected to ${action.toLowerCase()} for ${title}. This would ${action === "Preview" ? "show a demo" : "add this item to your cart"}`,
      duration: 4000,
    });
  };

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20 pb-16"> {/* Added padding-top and bottom */}
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
