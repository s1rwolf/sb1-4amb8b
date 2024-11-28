import React from 'react';

interface SectionTitleProps {
  title: string;
  highlight?: string;
  subtitle: string;
  className?: string;
}

export function SectionTitle({ title, highlight, subtitle, className = '' }: SectionTitleProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        {title}
        {highlight && <span className="text-purple-600">{highlight}</span>}
      </h2>
      <p className="text-xl text-gray-600">{subtitle}</p>
    </div>
  );
}