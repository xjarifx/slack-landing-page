// Common types used across the application

export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface FooterColumn {
  heading: string;
  links: string[];
}

export interface Stat {
  value: string;
  description: React.ReactNode;
}

export interface Resource {
  type: string;
  title: string;
  cta: string;
  bg: string;
}

export interface CustomerStory {
  id: string;
  company: string;
  title?: string;
  featured: boolean;
  hasPlay: boolean;
  bg: string;
  logo: React.ReactNode;
}
