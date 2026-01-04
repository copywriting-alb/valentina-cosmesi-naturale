
export interface ServiceItem {
  id: string;
  title: string;
  promise: string;
  includes: string[];
  duration: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  name: string;
  text: string;
  role?: string;
}

export interface NavItem {
  label: string;
  href: string;
}