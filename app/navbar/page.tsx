"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Logo from '@public/images/logo.jpeg';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking a link
  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled 
            ? "py-3 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm" 
            : "py-6 bg-transparent"
        )}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <Link href="/" className="group flex items-center gap-2.5">
              <div className="flex items-center justify-centertransition-transform">
                <img src={Logo.src} alt="Plainworks Logo" className="w-10 h-10 object-contain rounded-lg " />
              </div>
              <span className={cn(
                "text-xl font-bold tracking-tighter text-orange-400",
                scrolled ? " text-orange-400" : "text-orange-400 md:text-white"
              )}>
                Plainworks <span>Consulting</span>
              </span>
            </Link>

            {/* Desktop Links */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-[13px] font-mono uppercase tracking-widest transition-all hover:opacity-60",
                    scrolled ? "text-slate-600" : "text-white/80 hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Toggle */}
            <button
              className={cn(
                "md:hidden p-2 transition-colors",
                scrolled ? "text-slate-900" : "text-white"
              )}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu: Expands downward below the navbar */}
     <div
  className={cn(
    "fixed left-0 right-0 bg-white/70 backdrop-blur-md shadow-lg overflow-hidden transition-all duration-500 ease-in-out md:hidden",
    "z-40",
    mobileMenuOpen
      ? "max-h-96 opacity-100 border-b border-slate-200/40"
      : "max-h-0 opacity-0"
  )}
  style={{ top: scrolled ? "68px" : "96px" }}
>
  <div className="container mx-auto px-6 lg:px-12 py-8">
    <nav className="flex flex-col gap-6 mb-8">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={closeMenu}
          className="text-3xl font-bold tracking-tight text-slate-900 hover:text-orange-400 transition-colors"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  </div>

      </div>
    </>
  );
}