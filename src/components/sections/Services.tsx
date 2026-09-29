import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { SERVICES_DATA } from '../../data/mockData';
import { Palette, CreditCard, Layout, Code2, Share2, Sparkles, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  // Map icon strings to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-6 h-6 text-brand-pink" />;
      case 'CreditCard':
        return <CreditCard className="w-6 h-6 text-brand-orange" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-brand-cyan" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-brand-blue" />;
      case 'Share2':
        return <Share2 className="w-6 h-6 text-brand-purple" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-brand-yellow" />;
      default:
        return <Palette className="w-6 h-6 text-brand-blue" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="OUR CORE CAPABILITIES"
          title="Everything Your Brand Needs to"
          highlightText="Stand Out."
          subtitle="From your first logo to your complete digital presence, we bring your brand together under one roof."
        />

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group relative bg-brand-lightBg p-8 rounded-3xl border border-gray-100 hover:border-brand-purple/30 shadow-soft-sm hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle Card Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-blue/5 via-brand-purple/5 to-transparent rounded-bl-full pointer-events-none group-hover:scale-150 transition-transform duration-500"></div>

              <div>
                {/* Header: Number & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-gray-300 group-hover:text-brand-purple transition-colors duration-300">
                    {service.number}
                  </span>
                  {service.badge && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-gray-600 border border-gray-200/80 shadow-2xs">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-white p-3.5 border border-gray-200/80 shadow-soft-sm mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {getIcon(service.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-extrabold text-brand-navy mb-3 group-hover:text-brand-purple transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                  {service.description}
                </p>
              </div>

              {/* Action Link / Arrow */}
              <button
                onClick={() => {
                  if (onSelectService) onSelectService(service.title);
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue group-hover:text-brand-pink transition-colors focus:outline-none"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
