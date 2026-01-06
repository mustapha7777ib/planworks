// components/Footer.tsx
import Link from "next/link";
import { ArrowUpRight, Github, Twitter, Linkedin } from "lucide-react";
import Logo from '@public/images/logo.jpeg';
const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Integrations", href: "/integrations" },
    { name: "Changelog", href: "/changelog" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Philosophy", href: "/philosophy" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Security", href: "/security" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="max-w-xs">
              <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="flex items-center justify-centertransition-transform">
                <img src={Logo.src} alt="Plainworks Logo" className="w-10 h-10 object-contain rounded-lg " />
              </div>
                <span className="text-xl font-bold tracking-tighter text-slate-900">
                  Plainworks Consulting
                </span>
              </Link>
              <p className="text-slate-500 leading-relaxed mb-8">
                The project operating system for teams that value deep work over shallow busywork.
              </p>
              
              {/* Trust/Status Indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full border border-emerald-100">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-700 font-semibold">
                  All Systems Operational
                </span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-6">Product</p>
              <ul className="space-y-4">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-slate-600 hover:text-orange-400 flex items-center group">
                      {link.name}
                      <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-6">Company</p>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-slate-600 hover:text- flex items-center group">
                      {link.name}
                      <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-6">Social</p>
              <div className="flex gap-4">
                <Link href="#contact" className="p-2 border border-slate-100 rounded-sm hover:border-slate-900 transition-colors text-slate-600 hover:text-slate-900">
                  <Twitter size={18} strokeWidth={1.5} />
                </Link>
                <Link href="#contact" className="p-2 border border-slate-100 rounded-sm hover:border-slate-900 transition-colors text-slate-600 hover:text-slate-900">
                  <Github size={18} strokeWidth={1.5} />
                </Link>
                <Link href="#contact" className="p-2 border border-slate-100 rounded-sm hover:border-slate-900 transition-colors text-slate-600 hover:text-slate-900">
                  <Linkedin size={18} strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} href={link.href} className="text-[11px] font-mono uppercase text-slate-400 hover:text-slate-900 tracking-widest">
                {link.name}
              </Link>
            ))}
          </div>
          <p className="text-[11px] font-mono uppercase text-slate-400 tracking-widest">
            © {new Date().getFullYear()} Plainworks <span className="mx-2 text-slate-200">|</span> Built for clarity
          </p>
        </div>
      </div>
    </footer>
  );
}