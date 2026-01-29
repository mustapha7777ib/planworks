// components/Footer.tsx
import Link from "next/link";
import { ArrowUpRight, Linkedin, Instagram } from "lucide-react";
// Ensure this path matches your logo location
import Logo from '@public/images/logo.png'; 

const footerLinks = {
  services: [
    { name: "Design & Build", href: "/services" },
    { name: "Infrastructure", href: "/services" },
    { name: "Procurement", href: "/services" },
    { name: "Project Management", href: "/services" },
  ],
  company: [
    { name: "Who We Are", href: "/about" },
    { name: "Our Philosophy", href: "/about" },
    { name: "Institutional Readiness", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer id="footer" className="bg-white border-t border-slate-100 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="max-w-xs">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center">
                  <img src={Logo.src} alt="Tower Nigeria Limited Logo" className="w-10 h-20 object-contain rounded-lg" />
                </div>
                <span className="text-xl font-bold tracking-tighter text-slate-900 uppercase">
                  Tower Nigeria
                </span>
              </Link>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Building with strength. Delivering with integrity. A Nigerian-owned construction company committed to reliable infrastructure and disciplined project execution.
              </p>
              
              {/* Regional Status Indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-100">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                  Primary Region: Nigeria
                </span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-6">Core Services</p>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-slate-600 hover:text-orange-400 flex items-center group transition-colors">
                      {link.name}
                      <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-6">Organization</p>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-slate-600 hover:text-orange-400 flex items-center group transition-colors">
                      {link.name}
                      <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-6">Corporate</p>
              <div className="flex gap-3">
                <Link href="#" className="p-2.5 border border-slate-100 rounded-sm hover:border-orange-400 transition-colors text-slate-600 hover:text-orange-400">
                  <Linkedin size={18} strokeWidth={1.5} />
                </Link>
                <Link href="#" className="p-2.5 border border-slate-100 rounded-sm hover:border-orange-400 transition-colors text-slate-600 hover:text-orange-400">
                  <Instagram size={18} strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-mono uppercase text-slate-800 tracking-[0.15em]">
            © {new Date().getFullYear()} Tower Nigeria Limited <span className="mx-2 text-slate-200">|</span> Reliable Construction
          </p>
        </div>
      </div>
    </footer>
  );
}