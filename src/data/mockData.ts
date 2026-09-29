import { ServiceItem, ProjectItem, WhyChooseUsItem, ProcessItem, PricingPlan, FaqItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'logo-design',
    number: '01',
    title: 'Logo Design',
    description: 'Unique visual identities that make your brand memorable.',
    iconName: 'Palette',
    badge: 'Identity'
  },
  {
    id: 'business-card',
    number: '02',
    title: 'Business Card Design',
    description: 'Professional business cards designed to leave a lasting impression.',
    iconName: 'CreditCard',
    badge: 'Print & Digital'
  },
  {
    id: 'landing-pages',
    number: '03',
    title: 'Landing Pages',
    description: 'High-impact landing pages designed to turn visitors into customers.',
    iconName: 'Layout',
    badge: 'Conversion'
  },
  {
    id: 'website-development',
    number: '04',
    title: 'Website Development',
    description: 'Fast, responsive and modern websites tailored to your business.',
    iconName: 'Code2',
    badge: 'Full Stack'
  },
  {
    id: 'social-media-design',
    number: '05',
    title: 'Social Media Design',
    description: 'Consistent, eye-catching visuals for your social presence.',
    iconName: 'Share2',
    badge: 'Social'
  },
  {
    id: 'digital-branding',
    number: '06',
    title: 'Digital Branding',
    description: 'Build a strong and consistent identity across every digital touchpoint.',
    iconName: 'Sparkles',
    badge: 'System'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'aurelia-boutique',
    title: 'Aurelia Boutique',
    category: 'Branding',
    isConcept: true,
    image: '/assets/sky-studio-logo.jpg',
    tagline: 'Luxury Fashion & Jewelry Brand Identity',
    description: 'Complete brand identity design for Aurelia Boutique, an artisanal fashion house. Created minimalist typography, elegance-driven mark, business stationery, and luxury packaging assets.',
    challenge: 'Aurelia needed a visual system that conveyed handcrafted luxury while staying clean and accessible across Instagram and physical print collateral.',
    solution: 'We engineered a refined monogram paired with a warm metallic and muted pastel system, along with foil-stamped business cards and digital typography guidelines.',
    deliverables: ['Logo & Mark System', 'Luxury Business Cards', 'Color Palette & Typography', 'Packaging Design System'],
    clientIndustry: 'Luxury Apparel & Accessories',
    year: '2026',
    visualGallery: [
      {
        title: 'Brand Mark & Logo Grid',
        description: 'Golden ratio monogram vector geometry & brand lockup.',
        bgGradient: 'from-amber-100 via-stone-50 to-orange-100',
        type: 'branding',
        primaryColor: '#D4AF37',
        accentColor: '#1C1917'
      },
      {
        title: 'Premium Foil-Stamped Stationery',
        description: 'Cotton paper business cards with embossed gold detailing.',
        bgGradient: 'from-zinc-900 via-stone-900 to-black',
        type: 'packaging',
        primaryColor: '#F59E0B',
        accentColor: '#FFFFFF'
      },
      {
        title: 'Social Media Styleguide',
        description: 'Instagram grid layout & luxury story templates.',
        bgGradient: 'from-rose-50 via-pink-50 to-amber-50',
        type: 'branding',
        primaryColor: '#E11D48',
        accentColor: '#44403C'
      }
    ]
  },
  {
    id: 'bean-and-brew',
    title: 'Bean & Brew',
    category: 'Web Design',
    isConcept: true,
    image: '/assets/sky-studio-logo.jpg',
    tagline: 'Artisanal Coffee & Roastery Experience',
    description: 'A custom, interactive restaurant & cafe website featuring live digital menus, table reservation flow, and coffee subscription ordering.',
    challenge: 'Bean & Brew wanted to increase foot traffic and direct online coffee bag subscriptions with a fluid, mobile-first web interface.',
    solution: 'We designed a warm, sensory-driven web layout with micro-animations, interactive coffee selector tool, and instant online booking integration.',
    deliverables: ['Custom Web Design', 'Interactive Digital Menu', 'Online Subscription Flow', 'SEO & Performance Tuning'],
    clientIndustry: 'Food & Hospitality',
    year: '2026',
    visualGallery: [
      {
        title: 'Hero Desktop Concept',
        description: 'Bold typography with high-res coffee imagery and CTA.',
        bgGradient: 'from-amber-900 via-amber-950 to-neutral-900',
        type: 'website',
        primaryColor: '#F59E0B',
        accentColor: '#FEF3C7'
      },
      {
        title: 'Mobile Menu & Reservation Drawer',
        description: 'Seamless thumb-friendly ordering UI.',
        bgGradient: 'from-orange-100 via-amber-50 to-yellow-100',
        type: 'mobile',
        primaryColor: '#D97706',
        accentColor: '#1F2937'
      },
      {
        title: 'Bean Selector Interactive Quiz',
        description: 'Custom taste profile matcher for coffee lovers.',
        bgGradient: 'from-amber-800 via-stone-800 to-stone-900',
        type: 'website',
        primaryColor: '#FBBF24',
        accentColor: '#FFFFFF'
      }
    ]
  },
  {
    id: 'nestora-realty',
    title: 'Nestora Realty',
    category: 'Web Design',
    isConcept: true,
    image: '/assets/sky-studio-logo.jpg',
    tagline: 'High-Converting Real Estate Landing Page',
    description: 'Modern property showplace and lead-generation portal built for a boutique residential developer showcasing luxury apartments.',
    challenge: 'Capturing qualified high-net-worth buyers and reducing bounce rate on real estate property listings.',
    solution: 'Designed an expansive, image-forward web interface featuring interactive 3D floor plan viewers, virtual tour embeds, and instant online inquiry widgets.',
    deliverables: ['Responsive Web Development', 'Virtual Tour Integration', 'Lead Capture System', 'Property Showcase UI'],
    clientIndustry: 'Real Estate & Property Development',
    year: '2026',
    visualGallery: [
      {
        title: 'Property Showcase Hero',
        description: 'Clean full-screen property backdrop with search filters.',
        bgGradient: 'from-sky-900 via-indigo-950 to-slate-900',
        type: 'website',
        primaryColor: '#38BDF8',
        accentColor: '#F8FAFC'
      },
      {
        title: 'Interactive Floorplan Viewer',
        description: 'Dynamic room switcher with dimension overlays.',
        bgGradient: 'from-slate-100 via-indigo-50 to-blue-50',
        type: 'website',
        primaryColor: '#6366F1',
        accentColor: '#0F172A'
      },
      {
        title: 'Mobile Property Inquiry Sheet',
        description: 'One-tap schedule viewing modal.',
        bgGradient: 'from-blue-600 via-indigo-600 to-violet-600',
        type: 'mobile',
        primaryColor: '#60A5FA',
        accentColor: '#FFFFFF'
      }
    ]
  },
  {
    id: 'corefit',
    title: 'CoreFit Studio',
    category: 'Landing Page',
    isConcept: true,
    image: '/assets/sky-studio-logo.jpg',
    tagline: 'High-Energy Fitness & Personal Training Landing Page',
    description: 'Dynamic, high-conversion landing page for a fitness club offering class schedules, trainer highlights, and trial pass signups.',
    challenge: 'Drive local trial pass signups and convert social traffic into gym memberships with maximum energy and clarity.',
    solution: 'Crafted a high-contrast dark UI with neon accent gradients, class calendar filters, and 3-step membership checkout flow.',
    deliverables: ['Conversion Landing Page', 'Mobile Speed Optimization', 'Lead Capture Form', 'Brand Video Integration'],
    clientIndustry: 'Health & Fitness',
    year: '2026',
    visualGallery: [
      {
        title: 'High-Impact Hero UI',
        description: 'Dark theme with vibrant magenta & cyan accents.',
        bgGradient: 'from-zinc-950 via-slate-900 to-black',
        type: 'website',
        primaryColor: '#00C2FF',
        accentColor: '#FF2E93'
      },
      {
        title: 'Interactive Class Timetable',
        description: 'Filterable weekly schedule with instant booking.',
        bgGradient: 'from-purple-950 via-slate-900 to-cyan-950',
        type: 'website',
        primaryColor: '#A855F7',
        accentColor: '#22D3EE'
      },
      {
        title: 'Mobile Pass Signup Sheet',
        description: 'Single-screen trial pass registration form.',
        bgGradient: 'from-pink-600 via-purple-600 to-indigo-600',
        type: 'mobile',
        primaryColor: '#F472B6',
        accentColor: '#FFFFFF'
      }
    ]
  },
  {
    id: 'bloom-skincare',
    title: 'Bloom Skincare',
    category: 'Branding',
    isConcept: true,
    image: '/assets/sky-studio-logo.jpg',
    tagline: 'Organic & Clean Beauty Brand System',
    description: 'Holistic brand identity and digital packaging system for a botanical skincare line focusing on natural purity and eco-luxury.',
    challenge: 'Differentiating in a crowded skincare market with an organic yet premium aesthetic that resonates with modern conscious consumers.',
    solution: 'Developed soft pastel color harmony, minimalist botanical iconography, packaging die-lines, and a cohesive social media content grid.',
    deliverables: ['Logo & Botanical Mark', 'Eco Packaging Labels', 'Instagram Grid Kit', 'Brand Style Guidelines'],
    clientIndustry: 'Beauty & Cosmetics',
    year: '2026',
    visualGallery: [
      {
        title: 'Botanical Mark & Logotype',
        description: 'Soft organic typography paired with custom leaf emblem.',
        bgGradient: 'from-emerald-50 via-teal-50 to-pink-50',
        type: 'branding',
        primaryColor: '#059669',
        accentColor: '#DB2777'
      },
      {
        title: 'Glass Dropper Bottle Packaging',
        description: 'Clean label typography printed on frosted recyclable glass.',
        bgGradient: 'from-teal-100 via-rose-50 to-emerald-100',
        type: 'packaging',
        primaryColor: '#0D9488',
        accentColor: '#111827'
      },
      {
        title: 'Social Media Branding Grid',
        description: 'Curated 9-post Instagram aesthetic with product highlights.',
        bgGradient: 'from-rose-100 via-pink-100 to-purple-100',
        type: 'branding',
        primaryColor: '#EC4899',
        accentColor: '#4C1D95'
      }
    ]
  },
  {
    id: 'vibe-clothing',
    title: 'VIBE Clothing',
    category: 'Web Design',
    isConcept: true,
    image: '/assets/sky-studio-logo.jpg',
    tagline: 'Next-Gen Streetwear E-Commerce Experience',
    description: 'Immersive e-commerce store layout for a modern streetwear label featuring lookbooks, drop countdowns, and quick cart drawers.',
    challenge: 'Creating a fast, editorial shop experience that reflects urban streetwear culture without compromising site loading speeds.',
    solution: 'Designed a grid-breaking product layout with video hero loops, sticky quick-add drawer, and interactive drop schedule timer.',
    deliverables: ['E-Commerce UI/UX Design', 'Lookbook & Drop Page', 'Mobile First Cart UI', 'Design System'],
    clientIndustry: 'Apparel & E-Commerce',
    year: '2026',
    visualGallery: [
      {
        title: 'Editorial Drop Hero UI',
        description: 'Bold oversized typography with full-screen lookbook preview.',
        bgGradient: 'from-neutral-900 via-zinc-950 to-black',
        type: 'website',
        primaryColor: '#FF6B00',
        accentColor: '#FFFFFF'
      },
      {
        title: 'Interactive Product Grid',
        description: 'Hover hover image swappers and quick size pickers.',
        bgGradient: 'from-stone-900 via-neutral-900 to-zinc-900',
        type: 'website',
        primaryColor: '#F97316',
        accentColor: '#E5E7EB'
      },
      {
        title: 'Mobile Shopping Experience',
        description: 'Seamless swipeable product gallery with express checkout.',
        bgGradient: 'from-amber-600 via-orange-600 to-red-600',
        type: 'mobile',
        primaryColor: '#FDBA74',
        accentColor: '#FFFFFF'
      }
    ]
  }
];

export const WHY_CHOOSE_US_DATA: WhyChooseUsItem[] = [
  {
    id: 'creative-strategic',
    title: 'Creative & Strategic',
    description: "We don't just make things look good. We design with your business goals in mind.",
    iconName: 'Target'
  },
  {
    id: 'modern-technology',
    title: 'Modern Technology',
    description: 'Responsive, fast and modern digital experiences built using production-grade web stacks.',
    iconName: 'Zap'
  },
  {
    id: 'personal-approach',
    title: 'Personal Approach',
    description: 'Every project is tailored specifically to the unique story and audience behind your business.',
    iconName: 'UserCheck'
  },
  {
    id: 'built-to-grow',
    title: 'Built to Grow',
    description: 'Scalable design systems and modular websites engineered to evolve seamlessly as your business expands.',
    iconName: 'TrendingUp'
  }
];

export const PROCESS_DATA: ProcessItem[] = [
  {
    id: 'discover',
    number: '01',
    title: 'Discover',
    description: 'Understand the business, audience and goals.',
    details: [
      'In-depth brand discovery & goal mapping',
      'Competitor & target audience research',
      'Visual preference & design scope alignment'
    ]
  },
  {
    id: 'strategy',
    number: '02',
    title: 'Strategy',
    description: 'Plan the visual direction and project structure.',
    details: [
      'Moodboards & creative direction concepts',
      'Information architecture & sitemap outline',
      'Wireframing core user journeys'
    ]
  },
  {
    id: 'design',
    number: '03',
    title: 'Design',
    description: 'Create the brand identity or digital experience.',
    details: [
      'High-fidelity UI mockups & logo vectorization',
      'Typography, color palette & component design',
      'Interactive prototype review & feedback rounds'
    ]
  },
  {
    id: 'build',
    number: '04',
    title: 'Build',
    description: 'Develop responsive, production-ready websites.',
    details: [
      'Clean, component-driven React & Tailwind code',
      'Full mobile responsiveness & speed optimization',
      'Form integration & interactive micro-animations'
    ]
  },
  {
    id: 'launch',
    number: '05',
    title: 'Launch',
    description: 'Test, deploy and hand over the finished project.',
    details: [
      'Cross-browser testing & accessibility checks',
      'Domain deployment & SEO meta setup',
      'Final asset delivery & launch support'
    ]
  }
];

export const PRICING_DATA: PricingPlan[] = [
  {
    id: 'starter',
    name: 'STARTER',
    targetAudience: 'Ideal for new businesses establishing their initial visual presence.',
    features: [
      'Logo Design (2 Initial Concepts)',
      'Business Card Design (Print-Ready)',
      'Basic Brand Color & Font Palette',
      'High-Res PNG, SVG & Vector Export',
      '1 Revision Round'
    ],
    ctaText: 'Get Started'
  },
  {
    id: 'business',
    name: 'BUSINESS',
    badge: 'MOST POPULAR',
    isPopular: true,
    targetAudience: 'Perfect for growing businesses needing a polished brand and web presence.',
    features: [
      'Logo Design & Icon System',
      'Business Card Design',
      'Comprehensive Brand Guidelines PDF',
      'High-Impact Landing Page Design & Dev',
      'Instagram Direct DM Integration',
      'Mobile Responsive Optimization',
      '2 Revision Rounds'
    ],
    ctaText: 'Get Started'
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    targetAudience: 'For ambitious businesses needing a complete, high-converting digital identity.',
    features: [
      'Complete Brand Identity System',
      'Premium Business Card & Stationery',
      'Multi-Page Professional Website',
      'Full Mobile Responsive Design',
      'Custom Contact / Lead Capture Form',
      'Social Media Starter Kit (6 Templates)',
      '3 Revision Rounds'
    ],
    ctaText: 'Get Started'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How do I start a project?',
    answer: 'Starting is easy! Simply fill out our contact form below or reach out directly on Instagram @sky._.studio._. We will schedule a quick discovery chat to discuss your requirements, timeline, and goals, then send over a clear project proposal.'
  },
  {
    id: 'faq-2',
    question: 'How long does a website take?',
    answer: 'Typical landing page projects are completed in 1 to 2 weeks. Full multi-page business websites usually take 2 to 4 weeks depending on the design scope, content readiness, and feedback turnaround.'
  },
  {
    id: 'faq-3',
    question: 'Do you provide website hosting?',
    answer: 'We assist with setting up domain registration and high-speed hosting on modern platforms (such as Netlify, Vercel, Hostinger, or Firebase). We guide you through the process so you own 100% of your domain and account.'
  },
  {
    id: 'faq-4',
    question: 'Can you redesign my existing website?',
    answer: 'Yes! We frequently help businesses modernize outdated websites. We will preserve your existing content and search rankings while delivering a completely fresh, mobile-responsive, high-converting design.'
  },
  {
    id: 'faq-5',
    question: 'How many revisions are included?',
    answer: 'Our packages include 1 to 3 dedicated revision rounds (depending on the chosen package). We work closely with you at every milestone to ensure the final result aligns perfectly with your vision.'
  },
  {
    id: 'faq-6',
    question: 'Do you work with businesses outside Coimbatore?',
    answer: 'Absolutely! While SKY Studio is based in Coimbatore, we work remotely with clients across India and internationally. All communication, reviews, and handoffs are handled seamlessly via Instagram DM, Google Meet, and email.'
  },
  {
    id: 'faq-7',
    question: 'Do you provide website maintenance?',
    answer: 'Yes, we offer ongoing maintenance and support plans to keep your website updated, secure, and running fast. We can also assist with future design updates as your brand grows.'
  },
  {
    id: 'faq-8',
    question: 'How does payment work?',
    answer: 'We typically split payments into two milestones: 50% upfront deposit to commence work, and the remaining 50% balance upon final approval prior to website launch or vector asset delivery.'
  }
];
