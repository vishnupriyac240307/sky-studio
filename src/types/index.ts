export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Branding' | 'Web Design' | 'Landing Page' | 'Social Media';
  isConcept?: boolean;
  image: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  clientIndustry: string;
  year: string;
  visualGallery: {
    title: string;
    description: string;
    bgGradient: string;
    type: 'website' | 'branding' | 'mobile' | 'packaging';
    primaryColor: string;
    accentColor: string;
  }[];
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessItem {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  targetAudience: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormData {
  fullName: string;
  businessName: string;
  email: string;
  phoneOrInstagram?: string;
  serviceRequired: string;
  budgetRange: string;
  projectDescription: string;
}
