import React from 'react';
import { Settings, MessageSquare, Users, BarChart } from 'lucide-react';
import { Card } from '../components/ui/Card';

const stats = [
  {
    icon: MessageSquare,
    title: 'Total Conversations',
    value: '1,234',
    change: '+12.3%',
  },
  {
    icon: Users,
    title: 'Active Users',
    value: '456',
    change: '+8.2%',
  },
  {
    icon: BarChart,
    title: 'Response Rate',
    value: '98.5%',
    change: '+2.1%',
  },
  {
    icon: Settings,
    title: 'Automation Rate',
    value: '85.2%',
    change: '+5.4%',
  },
];

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Dashboard
            </h2>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.title} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <stat.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {stat.title}
                      </dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">
                          {stat.value}
                        </div>
                        <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                          {stat.change}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Card
            title="Recent Conversations"
            description="Your latest chat interactions"
            className="h-96"
          />
          <Card
            title="Performance Analytics"
            description="Key metrics and insights"
            className="h-96"
          />
        </div>
      </div>
    </div>
  );
}