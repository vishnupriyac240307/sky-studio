import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { FAQ_DATA } from '../../data/mockData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="FREQUENTLY ASKED QUESTIONS"
          title="Got Questions? We Have"
          highlightText="Answers."
          subtitle="Everything you need to know about working with SKY Studio on your brand and web projects."
        />

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-brand-lightBg border-brand-purple/30 shadow-soft-sm'
                    : 'bg-white border-gray-200/80 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-brand-purple/50 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-extrabold text-brand-navy flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? 'text-brand-purple' : 'text-gray-400'}`} />
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-white border border-gray-200 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-brand-purple text-white border-brand-purple' : 'text-gray-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-gray-600 font-medium leading-relaxed border-t border-gray-100/80 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
