
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Product {
  id: string;
  title: string;
  tagline: string;
  price: number;
  url: string;
  category: string;
  isBundle?: boolean;
  isFree?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    if (product.isFree) return 'Free';
    return `£${price.toFixed(2)}`;
  };

  return (
    <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-lg border-slate-200">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-lg font-semibold text-slate-900 leading-tight">
            {product.title}
          </CardTitle>
          {product.isBundle && (
            <Badge variant="secondary" className="bg-teal-100 text-teal-700">
              Bundle
            </Badge>
          )}
        </div>
        <p className="text-sm text-slate-600 line-clamp-2">{product.tagline}</p>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="text-2xl font-bold text-teal-600">
          {formatPrice(product.price)}
          {product.isFree && <span className="text-sm text-slate-500 ml-1">(Pay what you want)</span>}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button 
          asChild
          className="w-full bg-navy hover:bg-slate-800 text-white rounded-lg"
        >
          <a 
            href={product.url} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Buy Now
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
