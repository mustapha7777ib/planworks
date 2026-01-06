// components/ContactCTA.tsx
import { Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          
          {/* Status Badge */}
          <div className="flex items-center gap-3 mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
              Taking on new projects
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8">
            Ready to start? <br />
            <span className="text-slate-300 italic font-medium">Get in touch.</span>
          </h2>

          <p className="text-xl text-slate-500 max-w-xl mb-12 leading-relaxed">
            Drop us a line to discuss your workflow or book a direct demo. 
            We usually respond within a few hours.
          </p>

          {/* Simplified Email Button */}
          <a 
            href="mailto:hello@planworks.com" 
            className="group inline-flex items-center gap-6 bg-slate-900 text-white p-2 pr-8 rounded-full hover:bg-orange-400 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-orange-400 transition-colors">
              <Mail size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 group-hover:text-white/80">Click to email</span>
              <span className="text-lg font-semibold tracking-tight">hello@planworks.com</span>
            </div>
            <ArrowRight size={20} className="ml-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </a>
        </div>
      </div>
    </section>
  );
}