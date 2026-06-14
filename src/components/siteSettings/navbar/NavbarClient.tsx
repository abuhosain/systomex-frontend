"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/site";
import Logo from "@/components/website/shared/Logo";
import GradientButton from "@/components/website/shared/GradientButton";
import { cn } from "@/utils/utils";

export default function NavbarClient() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  function handleNavClick(href: string) {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "border-b border-transparent",
        "transition-[background-color,border-color,box-shadow] duration-300 ease-out",
        scrolled
          ? "bg-dark/95 border-secondary/20 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          : "bg-transparent",
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="group transition-opacity hover:opacity-90"
          >
            <Logo size="md" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA — desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors px-4 py-2"
            >
              Sign In
            </Link>
            <GradientButton
              size="sm"
              onClick={() => handleNavClick("#contact")}
            >
              Get Started
            </GradientButton>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors outline-none ring-0 focus:outline-none focus:ring-0"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-16 bg-dark/95 transition-opacity duration-300",
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none",
        )}
      >
        <nav className="container py-6 flex flex-col gap-1" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="border-t border-white/10 mt-4 pt-4 flex flex-col gap-3">
            <Link
              href="/login"
              className="px-4 py-3 text-base font-medium text-gray-300 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </Link>
            <GradientButton
              className="mx-4"
              onClick={() => handleNavClick("#contact")}
            >
              Get Started
            </GradientButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
