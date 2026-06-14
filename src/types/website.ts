import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface Partner {
  name: string;
  initials: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  gradient: string;
}

export interface Course {
  id: string;
  title: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  features: string[];
  gradient: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  gradient: string;
}

export type ProjectCategory =
  | "All"
  | "Robotics"
  | "IoT"
  | "Automation"
  | "Industrial";

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  review: string;
  initials: string;
  gradient: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface Achievement {
  value: number;
  suffix: string;
  label: string;
}
