'use client';

import { 
  Plus, 
  Settings, 
  HardHat, 
  Truck, 
  ClipboardCheck 
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Design & Build",
    description: "Integrated design and construction solutions delivered under one accountable framework.",
    icon: Settings,
    tag: "Integrated"
  },
  {
    title: "Construction & Infrastructure",
    description: "Reliable construction delivery for buildings and infrastructure, executed with discipline and safety.",
    icon: HardHat,
    tag: "Execution"
  },
  {
    title: "Procurement & Supply",
    description: "Strategic sourcing of materials and services to safeguard cost, quality, and schedule.",
    icon: Truck,
    tag: "Supply Chain"
  },
  {
    title: "Project Management",
    description: "Structured oversight that keeps projects on track and under control.",
    icon: ClipboardCheck,
    tag: "Governance"
  },
];

export default function ServicesPage() {
  return (
    <section id="services-summary" className="py-24 bg-[#FAFAFA] border-y border-slate-200">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-orange-400 font-mono text-xs uppercase tracking-widest mb-4">
              <Plus size={14} />
              <span>OUR SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-brand-blue leading-tight">
              Integrated delivery <br />
              <span className="text-slate-400 italic">across the project lifecycle.</span>
            </h2>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 overflow-hidden rounded-sm">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-10 transition-all duration-500 hover:bg-slate-50 flex flex-col justify-between min-h-[340px]"
            >
              <div>
                <div className="flex justify-between items-start mb-10">
                  <div className="p-3 bg-brand-blue text-white rounded-none group-hover:bg-orange-400 transition-colors duration-500">
                    <service.icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 border border-slate-100 px-2 py-1">
                    {service.tag}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>

              <Link href="/services" className="mt-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-orange-500 opacity-0 group-hover:opacity-100 transition-all">
                View Details <Plus size={12} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
