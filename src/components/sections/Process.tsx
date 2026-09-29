import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { PROCESS_DATA } from '../../data/mockData';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-32 bg-brand-lightBg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="HOW WE WORK"
          title="A Structured Process for"
          highlightText="Predictable Success."
          subtitle="From initial concept to final launch, our transparent step-by-step workflow ensures your project stays on schedule."
        />

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Horizontal Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-pink -translate-y-8 z-0 opacity-20"></div>

          {/* 5 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {PROCESS_DATA.map((step, index) => (
              <div
                key={step.id}
                className="group bg-white p-6 sm:p-8 rounded-3xl border border-gray-100/90 shadow-soft-sm hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-blue/10 via-brand-purple/10 to-brand-pink/10 border border-brand-purple/20 flex items-center justify-center font-black text-lg text-brand-purple group-hover:bg-gradient-brand group-hover:text-white transition-all duration-300 shadow-xs">
                      {step.number}
                    </div>
                    {index < PROCESS_DATA.length - 1 && (
                      <ArrowRight className="hidden lg:block w-4 h-4 text-gray-300 group-hover:text-brand-purple transform group-hover:translate-x-1 transition-all" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-brand-navy mb-2 group-hover:text-brand-purple transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm font-semibold text-gray-700 leading-snug mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Step Deliverables / Details Bullet Points */}
                <ul className="space-y-2 pt-4 border-t border-gray-100">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs font-medium text-gray-500">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
