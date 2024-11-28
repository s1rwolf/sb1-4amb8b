import React from 'react';
import { Bot, Brain, Zap, Globe, Clock, Shield } from 'lucide-react';
import { Card } from './ui/Card';
import { SectionTitle } from './ui/SectionTitle';

const features = [
  {
    icon: Bot,
    title: 'AI-Powered Chatbot',
    description: 'Natural language processing for human-like conversations',
  },
  {
    icon: Brain,
    title: 'Smart Learning',
    description: 'Continuously improves from each interaction',
  },
  {
    icon: Zap,
    title: 'Instant Responses',
    description: 'Lightning-fast replies to customer queries',
  },
  {
    icon: Globe,
    title: 'Multi-language Support',
    description: 'Communicate in 100+ languages',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock customer support',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and data protection',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Powerful"
          highlight=" AI Chatbot Solutions"
          subtitle="Discover the features that make our AI chatbot stand out"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}