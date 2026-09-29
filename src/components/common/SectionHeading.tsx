import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightText?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlightText,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignmentClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align];

  return (
    <div className={`flex flex-col max-w-3xl ${alignmentClass} mb-12 sm:mb-16 ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-brand-purple/20 text-xs sm:text-sm font-semibold text-brand-purple uppercase tracking-wider mb-4 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-pink animate-pulse"></span>
          {badge}
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight leading-[1.15]">
        {title}{' '}
        {highlightText && (
          <span className="text-gradient">
            {highlightText}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-gray-600 font-medium leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
