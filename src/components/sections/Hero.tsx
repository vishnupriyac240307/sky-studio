import React from 'react';
import { Button } from '../common/Button';
import { ArrowRight, Sparkles, Monitor, Smartphone, Palette, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onStartProject?: () => void;
  onViewWork?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onViewWork }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-white via-sky-50/30 to-brand-lightBg">
      {/* Decorative Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-brand-blue/15 via-brand-purple/15 to-brand-pink/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-brand-cyan/10 rounded-full blur-2xl pointer-events-none -z-10 animate-float-slow"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-orange/10 rounded-full blur-2xl pointer-events-none -z-10 animate-float-delayed"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 z-10">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-gray-200/80 shadow-soft-sm text-xs sm:text-sm font-bold text-brand-navy tracking-widest uppercase">
              <Sparkles className="w-4 h-4 text-brand-purple animate-spin-slow" />
              <span>SKY STUDIO • BRANDING • DESIGN • WEB</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-brand-navy tracking-tight leading-[1.08]">
              Building Brands <br />
              <span className="text-gradient">That Stand Out.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-gray-600 font-medium leading-relaxed max-w-2xl">
              We create memorable brand identities, beautiful digital experiences and high-converting websites for ambitious businesses.
            </p>

            {/* Quick Feature Chips */}
            <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-gray-700 pt-1">
              <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-gray-200/60 shadow-xs">
                <Palette className="w-4 h-4 text-brand-pink" />
                <span>Brand Identity</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-gray-200/60 shadow-xs">
                <Monitor className="w-4 h-4 text-brand-blue" />
                <span>Custom Websites</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-gray-200/60 shadow-xs">
                <Smartphone className="w-4 h-4 text-brand-purple" />
                <span>Responsive Apps</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                onClick={() => {
                  if (onStartProject) onStartProject();
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start a Project
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => {
                  if (onViewWork) onViewWork();
                  const el = document.getElementById('portfolio');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Our Work
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Composition (Laptop, Mobile & Business Card Mockups) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Abstract Colorful Backdrop Shapes */}
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-gradient-to-tr from-brand-cyan via-brand-blue to-brand-purple rounded-3xl opacity-20 transform rotate-6 animate-float-slow"></div>
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-gradient-to-br from-brand-pink via-brand-orange to-brand-yellow rounded-3xl opacity-20 transform -rotate-6 animate-float-delayed"></div>

              {/* Central Laptop Mockup Container */}
              <div className="relative z-10 bg-gradient-to-b from-gray-800 to-gray-950 p-2 sm:p-3 rounded-2xl shadow-soft-lg border border-gray-700/50 transform hover:-translate-y-1 transition-transform duration-500">
                {/* Laptop Header Bar */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 rounded-t-xl mb-1 border-b border-gray-800">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  <div className="ml-2 px-3 py-0.5 bg-gray-800 rounded-md text-[10px] text-gray-400 font-mono truncate max-w-[180px]">
                    https://skystudio.design
                  </div>
                </div>

                {/* Laptop Screen Content showcasing Website Development */}
                <div className="bg-white rounded-lg overflow-hidden border border-gray-200 relative aspect-[16/10] flex flex-col">
                  {/* Internal Mini Header */}
                  <div className="bg-white/90 px-4 py-2 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src="/assets/sky-studio-logo.jpg" alt="SKY Studio" className="w-5 h-5 rounded-full" />
                      <span className="text-xs font-bold text-brand-navy">SKY Studio</span>
                    </div>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-brand-blue/10 text-brand-blue font-bold">
                      WEB DEVELOPMENT
                    </span>
                  </div>

                  {/* Internal Hero View */}
                  <div className="p-4 sm:p-6 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 flex-1 flex flex-col justify-center items-start text-left">
                    <span className="text-[10px] font-extrabold text-brand-purple uppercase tracking-wider mb-1">
                      Production Web Engineering
                    </span>
                    <h4 className="text-base sm:text-xl font-extrabold text-brand-navy leading-tight mb-2">
                      High-Converting Websites <br />
                      <span className="text-gradient">Built for Modern Brands.</span>
                    </h4>
                    <p className="text-[11px] sm:text-xs text-gray-500 max-w-xs mb-3 line-clamp-2">
                      Fast, responsive &amp; beautifully styled web applications tailored for ambitious startups.
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 rounded-md bg-brand-blue text-white text-[9px] font-bold">
                        Live Preview
                      </span>
                      <span className="text-[9px] text-gray-400 font-medium">99/100 Lighthouse Speed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Mobile Phone Mockup (Front Right) showing Mobile Interface */}
              <div className="absolute -bottom-8 -right-4 sm:-right-6 z-20 w-36 sm:w-44 bg-gray-900 p-2 rounded-2xl shadow-2xl border border-gray-700 transform rotate-3 hover:rotate-0 transition-all duration-300 animate-float-slow">
                <div className="w-12 h-1 bg-gray-700 rounded-full mx-auto mb-1.5"></div>
                <div className="bg-gradient-to-b from-brand-navy via-slate-900 to-black rounded-xl p-2.5 text-white flex flex-col items-center text-center space-y-2 border border-white/10">
                  <img src="/assets/sky-studio-logo.jpg" alt="Mobile Logo" className="w-8 h-8 rounded-full border border-white/20 shadow-sm" />
                  <div className="text-[10px] font-bold tracking-tight">SKY Mobile App</div>
                  <div className="text-[8px] text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded-full font-semibold">
                    RESPONSIVE UI
                  </div>
                  <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-brand-cyan to-brand-pink h-full w-3/4"></div>
                  </div>
                </div>
              </div>

              {/* Floating Business Card Mockup (Top Left) showing Brand Design */}
              <div className="absolute -top-8 -left-4 sm:-left-6 z-20 w-44 sm:w-52 bg-white p-3.5 rounded-xl shadow-soft-lg border border-gray-100 transform -rotate-3 hover:rotate-0 transition-all duration-300 animate-float-delayed">
                <div className="flex items-start justify-between">
                  <img src="/assets/sky-studio-logo.jpg" alt="Business Card Logo" className="w-8 h-8 rounded-full border border-gray-200" />
                  <span className="text-[9px] font-bold text-gray-400 tracking-wider uppercase">BRANDING</span>
                </div>
                <div className="mt-3">
                  <div className="text-xs font-extrabold text-brand-navy">Creative Studio</div>
                  <div className="text-[10px] font-semibold text-brand-purple">Identity &amp; Graphic Design</div>
                </div>
                <div className="mt-2.5 pt-2 border-t border-gray-100 flex items-center justify-between text-[9px] text-gray-400">
                  <span>@sky._.studio._</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-pink" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
