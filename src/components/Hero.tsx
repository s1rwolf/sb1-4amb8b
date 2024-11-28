import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { ChatDemo } from './hero/ChatDemo';

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-white min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683311-eac922347aa1?auto=format&fit=crop')] opacity-5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            The ChatBot
            <span className="block text-purple-600">AI The Future Is Here</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transform your customer experience with AI-powered conversations that feel natural and drive results
          </p>
          <div className="flex gap-4 justify-center">
            <Button icon={ArrowRight}>Get Started Free</Button>
            <Button variant="secondary">View Demo</Button>
          </div>
        </div>
        <ChatDemo />
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <div className="flex gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-purple-600 opacity-20"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}