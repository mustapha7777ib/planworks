'use client';

import { Minus, FileText, Gavel, ClipboardList, ShieldCheck } from "lucide-react";

const complianceFeatures = [
  { title: "Regulatory Approvals", icon: <Gavel size={18} /> },
  { title: "Transparent Reporting", icon: <FileText size={18} /> },
  { title: "Contract Adherence", icon: <ClipboardList size={18} /> },
  { title: "Quality Standards", icon: <ShieldCheck size={18} /> },
];

export default function Readiness() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-slate-400 font-mono text-[10px] uppercase tracking-[0.2em] mb-8">
              <Minus size={16} />
              <span>Institutional Readiness</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">
              A trusted partner for <br />
              <span className="text-orange-400">public sector</span> projects.
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              Tower Nigeria Limited is structured to support public sector and institutional projects, operating with transparency, accountability, and compliance at the core of our delivery model. 
            </p>
            
            <div className="bg-white p-8 border border-slate-200 rounded-sm">
              <p className="text-slate-600 text-sm md:text-base leading-relaxed italic">
                "We understand the rigor of government-funded projects—from documentation and reporting to stakeholder coordination. Our disciplined approach ensures strict adherence to contract conditions and safety regulations."
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 gap-4">
              {complianceFeatures.map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-white p-6 border border-slate-200 shadow-sm group hover:border-orange-400 transition-colors">
                  <div className="w-12 h-12 bg-slate-50 flex items-center justify-center text-orange-400 group-hover:bg-orange-400 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <span className="font-bold text-slate-900 tracking-tight uppercase text-xs font-mono">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}