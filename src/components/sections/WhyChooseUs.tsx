import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { WHY_CHOOSE_US_DATA } from '../../data/mockData';
import { Target, Zap, UserCheck, TrendingUp } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-7 h-7 text-brand-pink" />;
      case 'Zap':
        return <Zap className="w-7 h-7 text-brand-blue" />;
      case 'UserCheck':
        return <UserCheck className="w-7 h-7 text-brand-purple" />;
      case 'TrendingUp':
        return <TrendingUp className="w-7 h-7 text-brand-orange" />;
      default:
        return <Target className="w-7 h-7 text-brand-blue" />;
    }
  };

  return (
    <section className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="THE SKY ADVANTAGE"
          title="Why Businesses Choose"
          highlightText="SKY."
          subtitle="We combine creative craftsmanship with technical precision to build digital experiences that drive real results."
        />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US_DATA.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-brand-lightBg border border-gray-100 hover:border-brand-blue/30 shadow-soft-sm hover:shadow-soft-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-white p-4 border border-gray-200/80 shadow-soft-sm mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {getIcon(item.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-extrabold text-brand-navy mb-3 group-hover:text-brand-purple transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Decorative Indicator */}
              <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-cyan"></span>
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                  Studio Pillar
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
