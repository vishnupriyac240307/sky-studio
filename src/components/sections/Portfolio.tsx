import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { PROJECTS_DATA } from '../../data/mockData';
import { ProjectItem } from '../../types';
import { PortfolioModal } from '../portfolio/PortfolioModal';
import { ArrowUpRight } from 'lucide-react';

interface PortfolioProps {
  onSelectCategoryForContact?: (category: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectCategoryForContact }) => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Branding', 'Web Design', 'Landing Page', 'Social Media'];

  const filteredProjects = activeTab === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeTab);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-brand-lightBg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="FEATURED WORK"
          title="Work That Speaks"
          highlightText="for Itself."
          subtitle="Explore selected branding and digital experiences created by SKY Studio."
        />

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-brand-navy text-white shadow-soft-md scale-105'
                    : 'bg-white text-gray-600 hover:text-brand-navy border border-gray-200/80 hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            // Pick a visual background accent based on project category/id
            const bgGradients = {
              'aurelia-boutique': 'from-amber-500/10 via-rose-500/10 to-purple-500/10',
              'bean-and-brew': 'from-amber-700/10 via-orange-500/10 to-yellow-500/10',
              'nestora-realty': 'from-sky-500/10 via-indigo-500/10 to-blue-500/10',
              'corefit': 'from-pink-500/10 via-purple-500/10 to-cyan-500/10',
              'bloom-skincare': 'from-emerald-500/10 via-teal-500/10 to-rose-500/10',
              'vibe-clothing': 'from-orange-500/10 via-red-500/10 to-amber-500/10',
            }[project.id] || 'from-blue-500/10 to-purple-500/10';

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-white rounded-3xl border border-gray-100/90 shadow-soft-sm hover:shadow-soft-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Thumbnail Frame */}
                <div className={`relative aspect-[16/11] bg-gradient-to-br ${bgGradients} p-6 flex flex-col justify-between overflow-hidden border-b border-gray-100`}>
                  
                  {/* Top Badges */}
                  <div className="flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-white/90 text-brand-navy shadow-xs border border-gray-100">
                      {project.category}
                    </span>
                    {project.isConcept && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100/90 text-amber-800 border border-amber-200">
                        Concept Project
                      </span>
                    )}
                  </div>

                  {/* Central Mockup Preview Graphic */}
                  <div className="my-auto text-center transform group-hover:scale-105 transition-transform duration-500">
                    <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-white shadow-soft-md mb-2 border border-gray-100">
                      <img
                        src="/assets/sky-studio-logo.jpg"
                        alt={project.title}
                        className="w-12 h-12 rounded-full object-contain"
                      />
                    </div>
                    <div className="text-xs font-extrabold text-brand-navy tracking-tight">
                      {project.title} Visual System
                    </div>
                  </div>

                  {/* Bottom Hover Action Cue */}
                  <div className="flex items-center justify-between z-10 text-xs font-bold text-gray-500 group-hover:text-brand-purple transition-colors">
                    <span>Click to view case study</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>

                {/* Card Content Footer */}
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-brand-navy mb-2 group-hover:text-brand-purple transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 font-medium mb-4">
                    {project.tagline}
                  </p>
                  
                  {/* Deliverable Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.deliverables.slice(0, 3).map((item, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md bg-gray-50 text-[11px] font-semibold text-gray-600 border border-gray-100">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Case Study Modal */}
      <PortfolioModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartSimilarProject={(cat) => {
          if (onSelectCategoryForContact) onSelectCategoryForContact(cat);
        }}
      />
    </section>
  );
};
