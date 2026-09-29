import React from 'react';
import { Palette, Smartphone, HeartHandshake, Clock } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      icon: <Palette className="w-5 h-5 text-brand-pink" />,
      title: 'Creative Design',
      bgGlow: 'hover:bg-pink-50/50',
    },
    {
      icon: <Smartphone className="w-5 h-5 text-brand-blue" />,
      title: 'Responsive Websites',
      bgGlow: 'hover:bg-blue-50/50',
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-brand-purple" />,
      title: 'Client-Focused',
      bgGlow: 'hover:bg-purple-50/50',
    },
    {
      icon: <Clock className="w-5 h-5 text-brand-orange" />,
      title: 'On-Time Delivery',
      bgGlow: 'hover:bg-orange-50/50',
    },
  ];

  return (
    <div className="relative py-8 bg-white border-y border-gray-100 shadow-soft-sm z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center gap-3 p-4 rounded-2xl bg-gray-50/80 border border-gray-100 ${item.bgGlow} transition-all duration-300 transform hover:-translate-y-0.5 group`}
            >
              <div className="p-2.5 rounded-xl bg-white shadow-xs group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <span className="text-sm sm:text-base font-bold text-brand-navy tracking-tight">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
