'use client';

import { Minus, Shield, Cpu, Timer, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const differentiators = [
  {
    title: "Structural Integrity",
    description: "Grounded in proven construction practices to ensure assets are built to last generations.",
    icon: Shield,
  },
  {
    title: "Modern Delivery",
    description: "Combining traditional discipline with digital monitoring for total project transparency.",
    icon: Cpu,
  },
  {
    title: "Accountable Leadership",
    description: "A Nigerian-owned firm focused on method and preparation over improvisation.",
    icon: CheckCircle2,
  },
  {
    title: "Economic Viability",
    description: "Strict adherence to planning to reduce risk, control costs, and ensure predictable outcomes.",
    icon: Timer,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-slate-400 font-mono text-[10px] uppercase tracking-[0.2em] mb-8">
              <Minus size={16} />
              <span>Who We Are</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
              Reliable building <br />
              <span className="text-orange-400 italic font-medium">& infrastructure</span> <br />
              solutions.
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              Tower Nigeria Limited is a Nigerian-owned construction company delivering reliable building and infrastructure solutions across the country. We specialise in Design & Build, Construction, Procurement, and Project Management, combining traditional construction discipline with modern project delivery practices.
            </p>

            <Link 
              href="/about" 
              className="group inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full hover:bg-orange-400 transition-all duration-300 shadow-xl shadow-slate-200"
            >
              <span className="font-semibold tracking-wide">Our Full Philosophy</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column: Key Differentiators Grid */}
          <div className="lg:col-span-7 bg-slate-50 p-8 md:p-12 lg:p-16 rounded-sm border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {differentiators.map((item, index) => (
                <div key={index} className="space-y-4">
                  <div className="w-10 h-10 bg-white flex items-center justify-center shadow-sm border border-slate-100 text-orange-400">
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-slate-200 flex flex-wrap gap-x-8 gap-y-4">
              <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400">Core Expertise:</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-slate-900 font-bold">Design & Build</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-slate-900 font-bold">Infrastructure</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-slate-900 font-bold">Project Management</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}