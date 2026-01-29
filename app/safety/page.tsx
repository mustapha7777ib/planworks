'use client';

import { Minus, ShieldAlert, HardHat, CheckSquare, ClipboardList, AlertCircle, Award } from "lucide-react";

const safetyPrinciples = [
  { title: "Zero Tolerance", description: "Strict non-negotiable approach to unsafe acts and conditions.", icon: <ShieldAlert size={20} /> },
  { title: "Mandatory Induction", description: "Comprehensive safety training and site induction for all personnel.", icon: <HardHat size={20} /> },
  { title: "PPE Compliance", description: "Strict enforcement of Personal Protective Equipment at all times.", icon: <AlertCircle size={20} /> },
  { title: "Risk Monitoring", description: "Continuous hazard identification and incident prevention protocols.", icon: <ClipboardList size={20} /> },
];

export default function HealthSafetyQuality() {
  return (
    <main className="bg-white pt-24 pb-12">
      {/* --- SECTION HEADER --- */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-slate-400 font-mono text-[10px] uppercase tracking-[0.2em] mb-6">
              <Minus size={16} />
              <span>Safety & Excellence</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8">
              Duty of <span className="text-orange-400">Care.</span><br />
              <span className="text-slate-300 italic font-medium text-4xl md:text-6xl">Excellence by Design.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">
              At Tower Nigeria Limited, safety is not a policy—it is a duty. 
              We believe every worker has the right to return home safely, and every 
              client deserves an asset built to the highest standards.
            </p>
          </div>
        </div>
      </section>

      {/* --- SAFETY PRINCIPLES GRID --- */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-bold mb-6">Our Safety <br /><span className="text-orange-400">Principles.</span></h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Our operations are guided by structured Health & Safety Management Systems 
                aligned with Nigerian regulations and international best practices.
              </p>
              <div className="p-6 border border-white/10 bg-white/5 rounded-sm">
                <p className="text-xs font-mono text-orange-400 uppercase tracking-widest mb-2">Internal Culture</p>
                <p className="text-sm text-slate-300 italic">
                  "Safety induction, toolbox talks, and continuous supervision are integral to our site culture."
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {safetyPrinciples.map((item, index) => (
                  <div key={index} className="p-8 border border-white/10 hover:bg-white/5 transition-colors group">
                    <div className="text-orange-400 mb-4 transition-transform group-hover:scale-110">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2 uppercase tracking-tight">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- QUALITY ASSURANCE SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-50 rounded-full -z-10" />
              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                Quality is <span className="text-orange-400 italic">built,</span> <br />
                not inspected in.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Tower Nigeria Limited operates structured Quality Assurance and Quality Control (QA/QC) 
                processes to ensure all works conform to approved drawings, specifications, and standards.
              </p>
              
              <ul className="space-y-4">
                {["Material Selection", "Workmanship Inspection", "Rigorous Testing", "Final Handover Documentation"].map((check) => (
                  <li key={check} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckSquare size={18} className="text-orange-400" />
                    {check}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 p-10 lg:p-16 rounded-sm border border-slate-100 flex flex-col items-center text-center">
              <Award size={64} className="text-orange-400 mb-6" strokeWidth={1} />
              <h3 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Durability & Performance</h3>
              <p className="text-slate-500 leading-relaxed">
                Our quality systems ensure the long-term performance of delivered assets, 
                minimizing maintenance costs and maximizing structural lifespan for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}