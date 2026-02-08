'use client';

import { motion } from 'framer-motion';
import { 
  Minus, 
  ArrowUpRight, 
  Settings, 
  HardHat, 
  Truck, 
  ClipboardCheck, 
  Target, 
  Shield, 
  Activity, 
  Scale 
} from 'lucide-react';
import Link from 'next/link';


const values = [
  {
    title: "Excellence in Execution",
    description: "Delivering projects safely, on time, and to specification through structured execution and method.",
    icon: <Activity size={20} />,
  },
  {
    title: "Integrity",
    description: "Honest dealings with clients, partners, regulators, and communities. We take ownership of every outcome.",
    icon: <Scale size={20} />,
  },
  {
    title: "Quality & Safety",
    description: "Zero compromise on workmanship and site safety. We build correctly and responsibly from day one.",
    icon: <Shield size={20} />,
  },
  {
    title: "Sustainable Value",
    description: "Creating assets that are structurally sound and economically viable to serve for generations.",
    icon: <Target size={20} />,
  },
  {
    title: "Professional Discipline",
    description: "We are builders by trade who respect the fundamentals of construction over shortcuts.",
    icon: <HardHat size={20} />,
  },
];

export default function AboutAndServices() {
  return (
    <main className="bg-white pt-24 min-h-screen">
      
      {/* --- PHILOSOPHY (ABOUT HERO) --- */}
      <section className="relative py-20 lg:py-32 overflow-hidden border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col space-y-4 mb-8">
            <div className="flex items-center gap-2 text-slate-400 font-mono text-[10px] uppercase tracking-[0.2em]">
              <Minus size={16} />
              <span>Our Philosophy</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 leading-[0.9]">
                Method over <br />
                <span className="text-orange-400 italic font-medium">improvisation.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-xl text-slate-500 leading-relaxed border-l border-slate-200 pl-6">
                Construction excellence is achieved through preparation and accountability. We reduce risk and deliver predictable outcomes by respecting proven practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION SECTION (DARK THEME) --- */}
      <section className="py-24 text-white" style={{ backgroundColor: '#0A2540' }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-orange-400" />
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-orange-400">
                  Our Mission
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
                Reliable solutions <br />
                <span className="text-slate-400">built to last.</span>
              </h2>
            </div>
            <div className="bg-orange-500 p-8 md:p-12 border border-white/10 backdrop-blur-sm">
              <p className="text-lg md:text-xl text-white leading-relaxed">
                To deliver building and infrastructure solutions across Nigeria that combine traditional construction discipline with modern project delivery, ensuring every asset is structurally sound and economically viable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SAFETY & FOUNDATIONS (VALUES) --- */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col mb-16 space-y-4">
            <div className="flex items-center gap-2 text-slate-400 font-mono text-[10px] uppercase tracking-[0.2em]">
              <Minus size={16} />
              <span>Safety & Principles</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
              Our <span className="text-orange-400">Foundations.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group bg-white p-10 hover:bg-slate-50 transition-colors duration-500"
              >
                <div className="text-orange-400 mb-6 group-hover:scale-110 transition-transform duration-500 origin-left">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
            <div className="bg-[#0A2540] p-10 flex flex-col justify-between">
              <p className="text-white/50 font-mono text-[10px] uppercase tracking-widest">
                Commitment
              </p>
              <p className="text-white text-lg font-medium">
                We do not chase shortcuts ,we build correctly, responsibly, and for the long term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
     
      {/* --- FINAL CONTACT CTA --- */}
      <section className="py-24 text-white bg-[#0A2540]">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">
            Ready to begin your project?
          </h3>
          <Link 
            href="/contact" 
            className="inline-block border-2 border-orange-400 text-orange-400 px-12 py-5 font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:bg-white hover:text-[#0A2540]"
          >
            Partner with Tower Nigeria
          </Link>
        </div>
      </section>
    </main>
  );
}