import type { ServiceItem, ProjectItem, ProcessStep, PricingTier, FAQItem, SkillGroup, ReviewItem } from './types';

export const servicesData: ServiceItem[] = [
  {
    id: 'product-design',
    title: 'Product Design',
    description: 'Interface architecture, interactive prototyping, and design systems for web and mobile software.',
  },
  {
    id: 'interaction-dev',
    title: 'Interaction Engineering',
    description: 'Front-end development with precision physics, kinetic scroll kinematics, and accessible state management.',
  },
  {
    id: 'design-systems',
    title: 'Design Systems',
    description: 'Modular token libraries, accessible component kits, and automated documentation for product teams.',
  },
  {
    id: 'performance-audit',
    title: 'Performance & Motion Audits',
    description: 'Frame-rate optimization, bundle size trimming, and reduced-motion compliance for high-traffic sites.',
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'lumina-os',
    title: 'Lumina Workspace',
    category: 'Spatial Design System',
    year: '2025',
    description: 'Multi-window desktop interface with hardware-accelerated canvas rendering.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    tags: ['Design System', 'WebGL', 'React'],
  },
  {
    id: 'strata-analytics',
    title: 'Strata Cloud Engine',
    category: 'Data Platform',
    year: '2025',
    description: 'Real-time telemetry interface processing cluster metrics at sub-10ms render latency.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    tags: ['Dashboard', 'High Density', 'TypeScript'],
  },
  {
    id: 'kroma-audio',
    title: 'Kroma Audio Lab',
    category: 'Creative Tool',
    year: '2024',
    description: 'Browser-based parametric synthesizer interface with custom rotary controls and FFT visualization.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop',
    tags: ['Web Audio', 'Canvas', 'DSP'],
  },
  {
    id: 'vellum-reader',
    title: 'Vellum Editorial',
    category: 'Publishing Platform',
    year: '2024',
    description: 'Adaptive typography reader with fluid column pagination and typographic rhythm.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    tags: ['Typography', 'Editorial', 'CSS Grid'],
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Scope',
    description: 'Define technical constraints, system hierarchy, and deliverable milestones.',
  },
  {
    number: '02',
    title: 'Kinetic Prototyping',
    description: 'Build interactive prototypes directly in code to validate motion and ergonomics.',
  },
  {
    number: '03',
    title: 'Production Build',
    description: 'Implement typed component architecture with automated testing and accessibility standards.',
  },
  {
    number: '04',
    title: 'Hand-off & Telemetry',
    description: 'Deploy documentation, token pipelines, and production release builds.',
  },
];

export const pricingTiers: PricingTier[] = [
  {
    id: 'sprint',
    name: 'Prototype Sprint',
    price: '$4,200',
    period: 'per sprint',
    description: 'Two weeks of focused interaction prototyping and motion specification.',
    features: [
      'Interactive React prototype',
      'Motion curve specifications',
      'Responsive layout breakdown',
      'Daily async progress log',
    ],
    ctaText: 'Reserve sprint',
  },
  {
    id: 'production',
    name: 'Full Product Design',
    price: '$8,500',
    period: 'per milestone',
    description: 'End-to-end interface system with production component implementation.',
    features: [
      'Complete UI component system',
      'Accessible token architecture',
      'Scroll and gesture physics',
      'Weekly review sessions',
      'Direct codebase integration',
    ],
    isHighlighted: true,
    ctaText: 'Start project',
  },
  {
    id: 'retainer',
    name: 'Design Advisory',
    price: '$3,800',
    period: 'per month',
    description: 'Ongoing engineering guidance, design reviews, and monthly component updates.',
    features: [
      'Up to 20 advisory hours monthly',
      'PR reviews and audits',
      'Component library maintenance',
      'Direct team channel access',
    ],
    ctaText: 'Retain studio',
  },
];

export const faqItems: FAQItem[] = [
  {
    id: 'timeline',
    question: 'What is the typical project timeline?',
    answer: 'Prototype sprints complete in two weeks. Full product design and engineering milestones span four to eight weeks.',
  },
  {
    id: 'tech-stack',
    question: 'Which front-end frameworks do you support?',
    answer: 'Production deliverables are built with React, TypeScript, Tailwind CSS, and Framer Motion or GSAP.',
  },
  {
    id: 'design-files',
    question: 'Are Figma files included with code deliverables?',
    answer: 'Yes. All components include matching Figma libraries with synchronized token names and variant properties.',
  },
  {
    id: 'handoff',
    question: 'How is code integrated into existing repositories?',
    answer: 'Code is delivered via pull requests directly to your git repository with type definitions and tests.',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Design & Systems',
    skills: ['Design Systems', 'Interface Architecture', 'Motion Design', 'Typography', 'Figma Tokens', 'Information Hierarchy'],
  },
  {
    category: 'Front-end Engineering',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Canvas & WebGL', 'Web Audio API'],
  },
  {
    category: 'Quality & Optimization',
    skills: ['Accessibility (WCAG AA)', 'Frame-rate Optimization', 'Lighthouse 95+', 'Reduced-Motion Modes', 'Cross-browser Audits'],
  },
];

export const reviewsData: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Marcus Vance',
    role: 'VP of Product',
    company: 'Strata Cloud',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    quote: 'Elena delivered our core dashboard redesign two weeks ahead of schedule. The typed React components dropped straight into our monorepo with zero regressions.',
    highlight: '2 weeks ahead of schedule',
  },
  {
    id: 'rev-2',
    author: 'Sora Tanaka',
    role: 'Engineering Lead',
    company: 'Lumina OS',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    quote: 'The interaction kinematics feel extraordinarily responsive. Our sustained frame rate jumped from 48fps to a rock-solid 60fps on mobile browsers.',
    highlight: 'Rock-solid 60fps performance',
  },
  {
    id: 'rev-3',
    author: 'David Chen',
    role: 'Co-Founder',
    company: 'Kroma Audio',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    quote: 'The design system tokens bridged the gap between our Figma files and code. Engineering velocity doubled within our first sprint.',
    highlight: '2x team sprint velocity',
  },
];
