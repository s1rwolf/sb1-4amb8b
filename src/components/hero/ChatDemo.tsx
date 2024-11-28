import React from 'react';
import { MessageCircle } from 'lucide-react';

export function ChatDemo() {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center gap-4 mb-6">
        <MessageCircle className="w-8 h-8 text-purple-600" />
        <h3 className="text-xl font-semibold">Welcome to Algor.AI</h3>
      </div>
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg max-w-[80%]">
          <p className="text-gray-800">How can I help you today?</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg max-w-[80%] ml-auto">
          <p className="text-purple-900">I'd like to learn more about your AI solutions.</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg max-w-[80%]">
          <p className="text-gray-800">I'd be happy to tell you about our AI-powered chatbot solutions...</p>
        </div>
      </div>
    </div>
  );
}