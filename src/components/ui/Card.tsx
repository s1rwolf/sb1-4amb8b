import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function Card({ icon: Icon, title, description, className = '' }: CardProps) {
  return (
    <div className={`bg-white p-8 rounded-2xl border border-gray-100 hover:border-purple-200 transition-colors group ${className}`}>
      {Icon && (
        <div className="bg-purple-50 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
          <Icon className="w-8 h-8 text-purple-600" />
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}