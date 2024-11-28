import React from 'react';
import { Clock, Users, TrendingUp, DollarSign } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Atendimento 24/7',
    description: 'Suporte ininterrupto para seus clientes, em qualquer momento.',
  },
  {
    icon: Users,
    title: 'Experiência Personalizada',
    description: 'Atendimento adaptado ao perfil de cada cliente.',
  },
  {
    icon: TrendingUp,
    title: 'Aumento nas Conversões',
    description: 'Melhore suas taxas de conversão com atendimento eficiente.',
  },
  {
    icon: DollarSign,
    title: 'Redução de Custos',
    description: 'Otimize recursos com automação inteligente.',
  },
];

export function Benefits() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Por que escolher a Algor.IA?
          </h2>
          <p className="text-xl text-gray-600">
            Transforme seu atendimento com benefícios que fazem a diferença
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <benefit.icon className="w-12 h-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}