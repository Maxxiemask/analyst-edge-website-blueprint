
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface AddOnProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  price: string;
  ctaPrimary: string;
  ctaSecondary: string;
  details?: string[];
  onPreview: (title: string) => void;
  onPurchase: (title: string) => void;
}

const AddOnCard = ({
  title,
  icon,
  description,
  price,
  ctaPrimary,
  ctaSecondary,
  details,
  onPreview,
  onPurchase
}: AddOnProps) => {
  return (
    <Card className="animate-on-scroll card-hover">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            {icon}
            <CardTitle className="text-lg font-bold">{title}</CardTitle>
          </div>
          <span className="text-navy font-bold">{price}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        {details && (
          <ul className="space-y-1 text-sm">
            {details.map((detail, i) => (
              <li key={i} className="flex items-center">
                <CheckCircle2 className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button 
          onClick={() => onPreview(title)} 
          variant="outline" 
          className="w-full"
        >
          {ctaPrimary}
        </Button>
        <Button 
          onClick={() => onPurchase(title)} 
          className="w-full"
        >
          {ctaSecondary}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AddOnCard;
