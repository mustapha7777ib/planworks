"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Logo from '@public/images/logo.png';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled 
            ? "py-3 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm" 
            : "py-6 bg-transparent"
        )}
      >
        {/* REMOVED mx-auto to move everything further to the left edge */}
        <div className="w-full px-6 lg:px-20">
          <div className="flex items-center justify-between">
            
            {/* Logo and Text Group: gap-1.5 keeps them very close */}
            <Link href="/" className="group flex items-center gap-1.5 shrink-0">
              <div className="flex items-center justify-center">
                <img 
                  src={Logo.src} 
                  alt="Tower Nigeria Limited" 
                  className="w-auto h-8 md:h-10 object-contain" 
                />
              </div>
              <span className={cn(
                "text-lg md:text-xl font-bold tracking-tighter transition-colors duration-300 text-orange-500"
              )}>
                TOWER NIGERIA
              </span>
            </Link>

            {/* Desktop Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-[12px] font-mono uppercase tracking-widest transition-all hover:text-orange-400",
                    scrolled ? "text-slate-600" : "text-slate-300"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Toggle */}
            <button
              className={cn(
                "md:hidden p-2",
                scrolled ? "text-slate-900" : "text-white"
              )}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg overflow-hidden transition-all duration-500 ease-in-out md:hidden z-40",
          mobileMenuOpen ? "max-h-96 opacity-100 border-b" : "max-h-0 opacity-0"
        )}
        style={{ top: scrolled ? "60px" : "88px" }}
      >
        <div className="px-6 py-8">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-2xl font-bold text-slate-900 hover:text-orange-400"
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