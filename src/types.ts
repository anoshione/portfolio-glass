export type Theme = 'light' | 'dark';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  metrics?: string;
  tags: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isHighlighted?: boolean;
  ctaText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  highlight?: string;
}
