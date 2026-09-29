import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { PRICING_DATA } from '../../data/mockData';
import { Button } from '../common/Button';
import { Check, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';

interface PricingProps {
  onSelectPlan?: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="STUDIO PACKAGES"
          title="Transparent Design &amp; Web"
          highlightText="Packages."
          subtitle="Whether you need a standalone logo or a full-scale web application, we offer structured packages crafted for growing businesses."
        />

        {/* 3 Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
          {PRICING_DATA.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-gradient-to-b from-slate-900 via-brand-navy to-black text-white shadow-soft-lg border-2 border-brand-purple scale-105 z-10'
                  : 'bg-brand-lightBg text-brand-navy border border-gray-100 shadow-soft-sm hover:shadow-soft-md'
              }`}
            >
              {/* Most Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-pink via-brand-purple to-brand-blue text-white text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                {/* Header: Name & Target */}
                <div className="mb-6">
                  <h3 className={`text-2xl font-black mb-2 ${plan.isPopular ? 'text-white' : 'text-brand-navy'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs font-medium leading-relaxed ${plan.isPopular ? 'text-gray-300' : 'text-gray-600'}`}>
                    {plan.targetAudience}
                  </p>
                </div>

                {/* Custom Quote Display (No Fake Discounts) */}
                <div className="mb-8 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <span className={`text-3xl font-black block tracking-tight ${plan.isPopular ? 'text-white' : 'text-brand-navy'}`}>
                    Custom Quote
                  </span>
                  <span className={`text-xs font-medium ${plan.isPopular ? 'text-gray-300' : 'text-gray-600'}`}>
                    Based on scope &amp; deliverables
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3.5 mb-8">
                  <span className={`text-xs uppercase font-extrabold tracking-wider block ${plan.isPopular ? 'text-brand-cyan' : 'text-brand-purple'}`}>
                    What's Included:
                  </span>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm font-semibold">
                      <div className={`p-1 rounded-full shrink-0 mt-0.5 ${
                        plan.isPopular ? 'bg-brand-purple text-white' : 'bg-brand-blue/10 text-brand-blue'
                      }`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className={plan.isPopular ? 'text-gray-200' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Button
                variant={plan.isPopular ? 'primary' : 'secondary'}
                size="md"
                className="w-full justify-center mt-4"
                icon={<ArrowRight className="w-4 h-4" />}
                onClick={() => {
                  if (onSelectPlan) onSelectPlan(plan.name);
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {plan.ctaText}
              </Button>
            </div>
          ))}
        </div>

        {/* Custom Quote Note Banner */}
        <div className="max-w-3xl mx-auto text-center p-6 rounded-2xl bg-gray-50 border border-gray-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-center gap-3">
          <HelpCircle className="w-5 h-5 text-brand-purple shrink-0" />
          <p className="text-sm font-semibold text-gray-700">
            "Every project is different. Get a custom quote based on your requirements."
          </p>
        </div>

      </div>
    </section>
  );
};
