import React from 'react';
import { ProjectItem } from '../../types';
import { Button } from '../common/Button';
import { X, CheckCircle2, ArrowRight, Sparkles, Monitor, Smartphone, Package, Layers } from 'lucide-react';

interface PortfolioModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onStartSimilarProject: (serviceName: string) => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  project,
  onClose,
  onStartSimilarProject,
}) => {
  if (!project) return null;

  const getGalleryIcon = (type: string) => {
    switch (type) {
      case 'website':
        return <Monitor className="w-5 h-5 text-brand-blue" />;
      case 'mobile':
        return <Smartphone className="w-5 h-5 text-brand-purple" />;
      case 'packaging':
        return <Package className="w-5 h-5 text-brand-orange" />;
      default:
        return <Layers className="w-5 h-5 text-brand-pink" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-navy/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Modal Container */}
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-soft-lg border border-gray-100 overflow-hidden my-8 transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-brand-blue/10 text-brand-blue uppercase tracking-wider">
              {project.category}
            </span>
            {project.isConcept && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                Concept Project
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-gray-100 text-gray-500 hover:text-brand-navy hover:bg-gray-200 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          
          {/* Main Title & Tagline */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-navy mb-2">
              {project.title}
            </h2>
            <p className="text-lg font-medium text-brand-purple">
              {project.tagline}
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-brand-lightBg border border-gray-100 text-sm">
            <div>
              <span className="text-xs text-gray-600 block uppercase font-bold">Industry</span>
              <span className="font-extrabold text-brand-navy">{project.clientIndustry}</span>
            </div>
            <div>
              <span className="text-xs text-gray-600 block uppercase font-bold">Category</span>
              <span className="font-extrabold text-brand-navy">{project.category}</span>
            </div>
            <div>
              <span className="text-xs text-gray-600 block uppercase font-bold">Year</span>
              <span className="font-extrabold text-brand-navy">{project.year}</span>
            </div>
          </div>

          {/* Overview, Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50/40 p-6 rounded-2xl border border-blue-100/60">
              <h4 className="text-base font-extrabold text-brand-navy mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-blue" />
                The Challenge
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                {project.challenge}
              </p>
            </div>

            <div className="bg-purple-50/40 p-6 rounded-2xl border border-purple-100/60">
              <h4 className="text-base font-extrabold text-brand-navy mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-purple" />
                The Solution
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Deliverables List */}
          <div>
            <h4 className="text-lg font-extrabold text-brand-navy mb-4">
              Project Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 shadow-xs"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-sm font-semibold text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Gallery Showcase Cards */}
          <div>
            <h4 className="text-lg font-extrabold text-brand-navy mb-4">
              Visual Concept Showcase
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.visualGallery.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${item.bgGradient} border border-gray-200/60 shadow-soft-sm flex flex-col justify-between min-h-[180px] group transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-xl bg-white/90 shadow-2xs">
                      {getGalleryIcon(item.type)}
                    </div>
                    <span
                      className="w-3 h-3 rounded-full border border-white"
                      style={{ backgroundColor: item.primaryColor }}
                    ></span>
                  </div>
                  <div>
                    <h5 className="text-base font-extrabold text-brand-navy mb-1">
                      {item.title}
                    </h5>
                    <p className="text-xs text-gray-600 font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500 font-medium">
            Like what you see? We can craft something similar for your business.
          </div>
          <Button
            variant="primary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            onClick={() => {
              onClose();
              onStartSimilarProject(project.category);
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start a Similar Project
          </Button>
        </div>

      </div>
    </div>
  );
};
