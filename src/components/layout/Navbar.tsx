import React, { useState, useEffect } from 'react';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onStartProject?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section highlight logic
      const sections = ['home', 'services', 'portfolio', 'process', 'about', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-purple rounded-full p-1"
          >
            <Logo size="md" />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-brand-navy tracking-tight group-hover:text-brand-purple transition-colors">
                SKY <span className="font-light text-gray-700">Studio</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gray-600 font-semibold -mt-1">
                Branding • Design • Web
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-gray-200/80 shadow-soft-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-brand-blue to-brand-purple shadow-sm'
                      : 'text-gray-700 hover:text-brand-navy hover:bg-gray-100/80'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              icon={<ArrowUpRight className="w-4 h-4" />}
              onClick={() => {
                if (onStartProject) onStartProject();
                handleNavClick('#contact');
              }}
            >
              Start a Project
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2.5 rounded-full bg-white/80 border border-gray-200 text-brand-navy hover:text-brand-purple focus:outline-none focus:ring-2 focus:ring-brand-purple transition-colors shadow-sm"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[70px] bg-white/95 backdrop-blur-2xl border-b border-gray-200 shadow-soft-lg transition-all duration-300 transform origin-top ${
          mobileOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        <div className="px-6 pt-4 pb-8 space-y-3 max-w-lg mx-auto">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`block px-4 py-3 text-base font-semibold rounded-2xl transition-all ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-brand-blue via-brand-purple to-brand-pink shadow-md'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-brand-navy'
                }`}
              >
                {link.name}
              </a>
            );
          })}

          <div className="pt-4 border-t border-gray-100">
            <Button
              variant="primary"
              size="md"
              className="w-full justify-center"
              icon={<ArrowUpRight className="w-5 h-5" />}
              onClick={() => {
                if (onStartProject) onStartProject();
                handleNavClick('#contact');
              }}
            >
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
