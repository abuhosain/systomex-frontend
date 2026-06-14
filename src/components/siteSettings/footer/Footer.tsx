import { Facebook, Linkedin, Github, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { SITE_NAME, CONTACT_INFO } from "@/data/site";
import Logo from "@/components/website/shared/Logo";

const FOOTER_COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Process", href: "#home" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Robotics Solutions", href: "#services" },
      { label: "Industrial Automation", href: "#services" },
      { label: "IoT Development", href: "#services" },
      { label: "Embedded Systems", href: "#services" },
    ],
  },
  {
    title: "Courses",
    links: [
      { label: "Beginner Robotics", href: "#courses" },
      { label: "Arduino Programming", href: "#courses" },
      { label: "ESP32 & IoT", href: "#courses" },
      { label: "AI for Robotics", href: "#courses" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Products", href: "#products" },
      { label: "FAQ", href: "#home" },
      { label: "Documentation", href: "#contact" },
      { label: "Support", href: "#contact" },
    ],
  },
];

const SOCIAL_LINKS = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-dark">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.03] to-transparent pointer-events-none" />

      <div className="container relative py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <a href="#home" className="inline-block mb-4 transition-opacity hover:opacity-90">
              <Logo size="md" />
            </a>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
              Empowering innovation through robotics, automation, and intelligent systems across South Asia.
            </p>

            <div className="space-y-2 text-sm text-gray-400">
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                {CONTACT_INFO.email}
              </a>
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                {CONTACT_INFO.phone}
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                {CONTACT_INFO.address}
              </p>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-secondary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-500">
            &copy; 2026 {SITE_NAME}. All Rights Reserved.
          </p>

          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
