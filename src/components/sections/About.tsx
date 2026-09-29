import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Logo } from '../common/Logo';
import { Heart, Rocket, Compass, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-brand-lightBg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative">
            {/* Ambient Backlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 via-brand-purple/20 to-brand-pink/20 rounded-3xl blur-2xl transform rotate-3"></div>

            {/* Studio Card */}
            <div className="relative bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-soft-lg space-y-6">
              <div className="flex items-center gap-4 border-b border-gray-100 pb-6">
                <Logo size="lg" />
                <div>
                  <h3 className="text-2xl font-black text-brand-navy">SKY Studio</h3>
                  <p className="text-xs font-bold text-brand-purple uppercase tracking-wider">
                    Creative Digital Studio
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-blue-50/50 border border-blue-100/60">
                  <Compass className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-extrabold text-brand-navy block">Our Purpose</span>
                    <span className="text-xs text-gray-600 font-medium">To empower startups and growing businesses with top-tier brand aesthetics and responsive web engineering.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-purple-50/50 border border-purple-100/60">
                  <Rocket className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-extrabold text-brand-navy block">Design + Technology</span>
                    <span className="text-xs text-gray-600 font-medium">Bridging artistic design and modern React/Vite web development under one roof.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-pink-50/50 border border-pink-100/60">
                  <Heart className="w-5 h-5 text-brand-pink shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-extrabold text-brand-navy block">Personal Commitment</span>
                    <span className="text-xs text-gray-600 font-medium">Direct collaboration, swift feedback cycles, and unmatched attention to detail.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              badge="ABOUT SKY STUDIO"
              title="Small Studio."
              highlightText="Big Ideas."
              subtitle=""
              align="left"
              className="mb-6"
            />

            <div className="prose prose-lg text-gray-700 font-medium leading-relaxed space-y-4">
              <p>
                SKY Studio is a modern creative studio offering branding, graphic design, and web development services for startups, creators, and small-to-medium businesses.
              </p>
              <p>
                We believe every ambitious business deserves a strong visual identity and a fast, high-converting digital presence. Whether you are launching a new startup or refreshing an existing company, we help turn your ideas into memorable brands.
              </p>
              <p>
                By combining strategic brand design with clean, production-ready web development, we ensure your brand looks exceptional on every screen and touchpoint—from your logo and business cards to custom responsive web applications.
              </p>
            </div>

            {/* Core Values Checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2.5 text-sm font-bold text-brand-navy">
                <CheckCircle2 className="w-5 h-5 text-brand-pink" />
                <span>Helping businesses look professional</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-bold text-brand-navy">
                <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                <span>Turning ideas into memorable brands</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-bold text-brand-navy">
                <CheckCircle2 className="w-5 h-5 text-brand-purple" />
                <span>Combining creative design with technology</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-bold text-brand-navy">
                <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                <span>Quality services accessible to all</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
