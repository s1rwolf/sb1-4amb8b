import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../ui/Button';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export function PricingCard({ name, price, description, features, highlighted = false }: PricingCardProps) {
  return (
    <div
      className={`rounded-2xl p-8 ${
        highlighted
          ? 'bg-purple-600 text-white ring-4 ring-purple-200'
          : 'bg-white text-gray-900 border border-gray-100'
      }`}
    >
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className={highlighted ? 'text-purple-100' : 'text-gray-600'}>
        {description}
      </p>
      <p className="text-4xl font-bold my-6">{price}</p>
      <ul className="space-y-4 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <Check className="w-5 h-5 mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        variant={highlighted ? 'secondary' : 'primary'}
        className="w-full"
      >
        Get Started
      </Button>
    </div>
  );
}