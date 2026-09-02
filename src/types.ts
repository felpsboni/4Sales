export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface VideoCase {
  id: string;
  company: string;
  segment: string;
  title: string;
  summary: string;
  youtubeId: string;
  highlights: string[];
}

export interface FeatureItem {
  id: string;
  title: string;
  category: 'gestao' | 'inteligencia' | 'operacao';
  description: string;
  iconName: string;
  tags: string[];
}

export interface SystemModule {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  features: string[];
  mockupType: 'vendas' | 'analytics' | 'busca' | 'pedidos' | 'layout' | 'multi';
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  summary: string;
  readingTimeMinutes: number;
  publishedDate: string;
  content: string[];
  keyTakeaways: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface DemoFormData {
  fullName: string;
  workEmail: string;
  phone: string;
  company: string;
  role: string;
  segment: string;
  teamSize: string;
  currentErp: string;
  commercialChallenge: string;
  privacyConsent: boolean;
}
