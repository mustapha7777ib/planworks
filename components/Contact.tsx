// components/ContactCTA.tsx
import { Mail, ArrowRight, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section id="contact-cta" className="py-24 lg:py-32 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side: Direct Engagement */}
          <div className="lg:col-span-8">
            {/* Project Status Indicator */}
            <div className="flex items-center gap-3 mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                Currently accepting project inquiries
              </span>
            </div>

            {/* Main Call to Action */}
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8">
              Let’s build <br />
              <span className="text-orange-400 italic font-medium">together.</span>
            </h2>

            <p className="text-xl text-slate-500 max-w-xl mb-12 leading-relaxed">
              Tower Nigeria Limited partners with clients seeking 
              reliable construction delivery rooted in discipline and integrity.
            </p>

            {/* High-Impact Email Button */}
            <Link 
              href="mailto:info@towernigeria.com" 
              className="group inline-flex items-center gap-6 bg-slate-900 text-white p-2 pr-8 rounded-full hover:bg-orange-400 transition-all duration-300 shadow-xl shadow-slate-100"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-orange-400 transition-colors">
                <Mail size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 group-hover:text-white/80">Start a Conversation</span>
                <span className="font-bold tracking-tight">info@towernigeria.com</span>
              </div>
              <ArrowRight size={20} className="ml-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </Link>
          </div>

          {/* Right Side: Quick Reference Info */}
          <div className="lg:col-span-4 lg:border-l lg:border-slate-100 lg:pl-16 flex flex-col justify-center space-y-10">
            {/* Phone Info */}
            <div className="group">
              <div className="flex items-center gap-3 text-orange-400 mb-2 transition-transform group-hover:translate-x-1">
                <Phone size={18} />
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Direct Line</span>
              </div>
              <p className="text-lg font-bold text-slate-900">+2349069101050 +2349133228324</p>
            </div>

            {/* Location Info */}
            <div className="group">
              <div className="flex items-center gap-3 text-orange-400 mb-2 transition-transform group-hover:translate-x-1">
                <MapPin size={18} />
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Headquarters</span>
              </div>
              <p className="text-lg font-bold text-slate-900">Abuja, Nigeria</p>
            </div>

            {/* Brand Signature */}
            <div className="pt-8 border-t border-slate-100">
              <p className="text-sm text-slate-400 leading-relaxed italic">
                Tower Nigeria Limited, <br />
                Building Structures  <br />
               That Endure The Test of Time
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}