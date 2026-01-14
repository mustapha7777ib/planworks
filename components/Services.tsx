'use client';

import { 
  Plus, 
  Compass, 
  HardHat, 
  Truck, 
  BarChart3, 
  ShieldCheck 
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Design & Build",
    description: "Integrated design and construction solutions that align creativity, engineering precision, and execution certainty under one accountable framework.",
    icon: Compass,
    tag: "Integrated"
  },
  {
    title: "Construction & Infrastructure",
    description: "End-to-end construction delivery for buildings and infrastructure, executed with discipline, safety, and quality assurance.",
    icon: HardHat,
    tag: "Execution"
  },
  {
    title: "Procurement",
    description: "Strategic sourcing and supply of materials, equipment, and services to safeguard cost, quality, and schedule outcomes.",
    icon: Truck,
    tag: "Supply Chain"
  },
  {
    title: "Project Management Consultancy (PMC)",
    description: "Independent project leadership covering planning, controls, governance, and PMO setup.",
    icon: BarChart3,
    tag: "Governance"
  },
  {
    title: "Facility & Asset Management",
    description: "Operational and maintenance services that protect long-term asset value.",
    icon: ShieldCheck,
    tag: "Lifecycle"
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#FAFAFA] border-y border-slate-200">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-orange-400 font-mono text-xs uppercase tracking-widest mb-4">
              <Plus size={14} />
              <span>Full-Service Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900">
              Integrated delivery <span className="text-slate-400">across the project lifecycle.</span>
            </h2>
          </div>
          <div className="text-slate-500 text-sm font-mono leading-relaxed max-w-[280px]">
            [01] DESIGN & BUILD <br />
            [02] PMC CONSULTANCY <br />
            [03] ASSET MANAGEMENT
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 overflow-hidden rounded-sm shadow-sm">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-10 md:p-12 transition-all duration-500 hover:bg-slate-50 flex flex-col justify-between min-h-[300px]"
            >
              <div>
                <div className="flex justify-between items-start mb-10">
                  <div className="p-3 bg-slate-900 text-white rounded-none group-hover:bg-orange-400 transition-colors duration-500">
                    <service.icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 border border-slate-200 px-2 py-1">
                    {service.tag}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  {service.description}
                </p>
              </div>

              {/* Subtle accent corner */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Plus size={16} className="text-slate-300" />
              </div>
            </div>
          ))}

          {/* Call to Action Grid Square */}
          <div className="group relative bg-slate-900 p-10 md:p-12 flex flex-col justify-center items-center text-center">
            <h4 className="text-white font-medium mb-6">Need a detailed service breakdown?</h4>
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 text-orange-400 font-mono text-xs uppercase tracking-[0.2em] border-b border-orange-400/30 pb-2 hover:border-orange-400 transition-all"
            >
              Explore Services <Plus size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}