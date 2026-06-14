import type { NavLink, Stat, Partner, Achievement } from "@/types/website";

export const SITE_NAME = "SystomeX";
export const SITE_LOGO = "/logo.png";
export const SITE_TAGLINE =
  "Building the Future with Robotics & Automation";
export const SITE_DESCRIPTION =
  "SystomeX delivers cutting-edge robotics solutions, automation systems, IoT innovations, engineering projects, and professional robotics training.";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Courses", href: "#courses" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const HERO_STATS: Stat[] = [
  { value: "100", suffix: "+", label: "Projects Delivered" },
  { value: "500", suffix: "+", label: "Students Trained" },
  { value: "20", suffix: "+", label: "Industrial Solutions" },
  { value: "95", suffix: "%", label: "Client Satisfaction" },
];

export const PARTNERS: Partner[] = [
  { name: "TechNova Labs", initials: "TN" },
  { name: "AutoCore Systems", initials: "AC" },
  { name: "IoT Dynamics", initials: "ID" },
  { name: "RoboForge", initials: "RF" },
  { name: "STEM Academy", initials: "SA" },
  { name: "IndusTech", initials: "IT" },
];

export const ACHIEVEMENTS: Achievement[] = [
  { value: 100, suffix: "+", label: "Projects Completed" },
  { value: 500, suffix: "+", label: "Students Trained" },
  { value: 15, suffix: "+", label: "Industry Partners" },
  { value: 8, suffix: "+", label: "Years Experience" },
];

export const CONTACT_INFO = {
  email: "systomex@gmail.com",
  phone: "01732247599",
  address: "Colony, Bogura, Bangladesh",
};
