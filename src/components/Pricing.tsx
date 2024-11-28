import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { PricingCard } from './pricing/PricingCard';

const plans = [
  {
    name: 'Basic',
    price: '$0/mo',
    description: 'Perfect for getting started',
    features: [
      'Up to 1,000 messages/month',
      'Basic chatbot features',
      'Email support',
      'Community access',
    ],
  },
  {
    name: 'Pro',
    price: '$29/mo',
    description: 'For growing businesses',
    features: [
      'Up to 10,000 messages/month',
      'Advanced AI capabilities',
      'Priority support',
      'Custom integrations',
      'Analytics dashboard',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '$99/mo',
    description: 'For large organizations',
    features: [
      'Unlimited messages',
      'Custom AI training',
      'Dedicated support',
      'SLA guarantee',
      'Advanced security',
      'Custom features',
    ],
  },
];

export function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="The Right Plans For The"
          highlight=" Right Price"
          subtitle="Choose the perfect plan for your needs"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}