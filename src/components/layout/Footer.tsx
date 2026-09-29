import React from 'react';
import { Logo } from '../common/Logo';
import { Instagram, Mail, ArrowUpRight, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-navy text-white relative pt-16 pb-12 overflow-hidden border-t border-gray-800">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="inline-flex items-center gap-3 group focus:outline-none"
            >
              <Logo size="md" />
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-white tracking-tight">
                  SKY <span className="font-light text-gray-400">Studio</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-brand-purple font-semibold">
                  Branding • Design • Web
                </span>
              </div>
            </a>

            <p className="text-gray-400 text-sm font-medium max-w-sm leading-relaxed">
              Building brands that stand out. Modern creative studio offering branding, graphic design, and responsive web engineering.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/sky._.studio._/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @sky._.studio._"
                className="p-2.5 rounded-full bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:bg-gradient-to-tr hover:from-amber-500 hover:to-rose-500 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="mailto:skytraderstn@gmail.com"
                aria-label="Email skytraderstn@gmail.com"
                className="p-2.5 rounded-full bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:bg-brand-blue transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xs font-black text-gray-300 uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Services', href: '#services' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'Process', href: '#process' },
                { name: 'About', href: '#about' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xs font-black text-gray-300 uppercase tracking-widest mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold text-gray-400">
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }} className="hover:text-white transition-colors">Logo Design</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }} className="hover:text-white transition-colors">Web Design</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }} className="hover:text-white transition-colors">Landing Pages</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }} className="hover:text-white transition-colors">Branding Systems</a></li>
            </ul>
          </div>

          {/* Social / Connect Column */}
          <div>
            <h4 className="text-xs font-black text-gray-300 uppercase tracking-widest mb-4">
              Connect
            </h4>
            <div className="space-y-3 text-sm font-semibold text-gray-400">
              <div>
                <span className="text-xs text-gray-500 block">Instagram</span>
                <a href="https://www.instagram.com/sky._.studio._/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-pink transition-colors inline-flex items-center gap-1">
                  @sky._.studio._
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-500" />
                </a>
              </div>
              <div>
                <span className="text-xs text-gray-500 block">Studio Email</span>
                <a href="mailto:skytraderstn@gmail.com" className="text-white hover:text-brand-cyan transition-colors">
                  skytraderstn@gmail.com
                </a>
              </div>
              <div>
                <span className="text-xs text-gray-500 block">Base Location</span>
                <span className="text-gray-300">Coimbatore, India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4 font-medium">
          <p>© {currentYear} SKY Studio. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-brand-pink fill-brand-pink" />
            <span>for growing brands</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
