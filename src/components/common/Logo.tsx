import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
}) => {
  // Sizing map to maintain proper aspect ratio without distortion
  const sizeMap = {
    sm: 'h-9 w-9',
    md: 'h-11 w-11 sm:h-12 sm:w-12',
    lg: 'h-16 w-16 sm:h-20 sm:w-20',
    xl: 'h-24 w-24 sm:h-32 sm:w-32',
  };

  return (
    <div className={`flex items-center gap-3 shrink-0 ${className}`}>
      {/* Official SKY Studio Logo Image */}
      <img
        src="/assets/sky-studio-logo.jpg"
        alt="SKY Studio Logo - Branding, Design & Web"
        className={`${sizeMap[size]} object-contain rounded-full shadow-soft-sm ring-1 ring-black/5 hover:scale-105 transition-transform duration-300`}
        loading="eager"
      />
    </div>
  );
};
