'use client';

import { Minus, Download, CheckCircle2, Building2, HardHat, ClipboardCheck, Package } from "lucide-react";
import Link from "next/link";

const coreServices = [
  { title: "Design & Build Construction", icon: <Building2 size={18} /> },
  { title: "Building & Infrastructure Construction", icon: <HardHat size={18} /> },
  { title: "Procurement & Supply Management", icon: <Package size={18} /> },
  { title: "Project Management & Site Supervision", icon: <ClipboardCheck size={18} /> },
];

const strengths = [
  "Strong construction fundamentals",
  "Disciplined planning and execution",
  "Commitment to safety and quality",
  "Transparent project delivery",
  "Long-term client relationships"
];

export default function CorporateProfile() {
  return (
    <main className="bg-white pt-24 min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-6">
          
          {/* Header Area */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-slate-100 pb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-slate-400 font-mono text-[10px] uppercase tracking-[0.2em] mb-6">
                <Minus size={16} />
                <span>Corporate Profile</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
                Tower Nigeria <br />
                <span className="text-orange-400">Limited.</span>
              </h1>
            </div>
            <button className="flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-sm hover:bg-orange-400 transition-colors text-sm font-bold tracking-widest uppercase">
              <Download size={18} />
              Download Profile PDF
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Quick Facts & Services */}
            <div className="lg:col-span-4 space-y-12">
              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-6">Company Overview</h3>
                <dl className="space-y-4">
                  <div className="flex justify-between border-b border-slate-50 py-2">
                    <dt className="text-slate-500 text-sm">Industry</dt>
                    <dd className="text-slate-900 font-bold text-sm text-right">Construction & Infrastructure</dd>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 py-2">
                    <dt className="text-slate-500 text-sm">Headquarters</dt>
                    <dd className="text-slate-900 font-bold text-sm text-right">Nigeria</dd>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 py-2">
                    <dt className="text-slate-500 text-sm">Registration</dt>
                    <dd className="text-slate-900 font-bold text-sm text-right">Private Limited</dd>
                  </div>
                </dl>
              </div>

              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-6">Core Services</h3>
                <div className="space-y-3">
                  {coreServices.map((service, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-100 rounded-sm">
                      <div className="text-orange-400">{service.icon}</div>
                      <span className="text-sm font-bold text-slate-800">{service.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Narrative & Strengths */}
            <div className="lg:col-span-8">
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">What We Do</h3>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Tower Nigeria Limited delivers safe, reliable, and high-quality construction solutions across residential, commercial, industrial, and public sector projects. We combine disciplined execution with skilled workmanship to deliver assets that stand the test of time.
                </p>
              </div>

              <div className="bg-slate-900 p-8 md:p-12 rounded-sm text-white">
                <h3 className="text-2xl font-bold mb-10">Our Strength</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                  {strengths.map((strength, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <CheckCircle2 size={20} className="text-orange-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300 group-hover:text-white transition-colors">
                        {strength}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-16 p-8 border border-orange-100 bg-orange-50/30 rounded-sm">
                <p className="text-slate-700 italic text-center">
                  "Built on a foundation of integrity and professional discipline, 
                  we bridge the gap between complex design and reliable physical execution."
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-medium">Ready to discuss your next project?</p>
          <Link 
            href="/contact" 
            className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-400 transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}