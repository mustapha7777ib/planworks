// components/Testimonials.tsx
import { Quote } from "lucide-react";

const testimonials = [
  { 
    name: "Sarah Chen", 
    role: "Product Lead", 
    company: "TechCo",
    text: "Plainworks cut our planning time in half. It's the first tool our entire team actually uses daily." 
  },
  { 
    name: "Marcus Johnson", 
    role: "CEO", 
    company: "Startup Studio",
    text: "Finally—a project tool that's powerful but doesn't overwhelm. We've shipped faster than ever." 
  },
  { 
    name: "Elena Rodriguez", 
    role: "Design Director", 
    company: "Refined",
    text: "The clean interface makes collaboration feel effortless. Love the attention to detail." 
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials"  className="py-32 bg-[#0A0A0A] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px w-12 bg-orange-400" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-orange-400">
            Voices of the community
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8">
          {testimonials.map((t, i) => (
            <div key={t.name} className="flex flex-col justify-between">
              <div>
                <Quote className="text-orange-400 mb-8 opacity-50" size={32} strokeWidth={1} />
                <blockquote className="text-2xl md:text-3xl font-medium leading-tight tracking-tight mb-10 text-slate-100">
                  "{t.text}"
                </blockquote>
              </div>

              <div className="flex items-center gap-4 pt-8 border-t border-white/10">
                {/* Minimalist Avatar - Using Initials instead of generic gradient */}
                <div className="flex-shrink-0 w-10 h-10 bg-slate-800 border border-white/10 flex items-center justify-center rounded-full text-[10px] font-mono text-slate-400">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <div>
                  <p className="text-sm font-bold tracking-wide text-white">
                    {t.name}
                  </p>
                  <p className="text-xs font-mono text-slate-500 uppercase">
                    {t.role} <span className="text-orange-400/50">//</span> {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle "Trust" Bar */}
        <div className="mt-32 pt-12 border-t border-white/5 flex flex-wrap justify-center md:justify-between items-center opacity-30 grayscale gap-8">
            <span className="font-bold tracking-tighter text-2xl">TECHCO</span>
            <span className="font-serif italic text-2xl tracking-widest">Studio.</span>
            <span className="font-mono font-black text-xl">REFINED</span>
            <span className="font-sans font-light tracking-[0.4em] text-lg uppercase">Global</span>
        </div>
      </div>
    </section>
  );
}