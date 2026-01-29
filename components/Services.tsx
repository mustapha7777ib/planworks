'use client';

import { motion } from 'framer-motion';
import { Minus, ArrowUpRight, Settings, HardHat, Truck, ClipboardCheck } from 'lucide-react';
import Link from 'next/link';

const fullServices = [
  {
    number: "01",
    title: "Design & Build Services",
    icon: <Settings size={24} />,
    description: "Tower Nigeria Limited provides integrated Design & Build solutions that combine architectural intent, engineering precision, and construction execution under one accountable structure.",
    details: "From concept development and detailed design through construction and commissioning, we ensure seamless coordination and accelerated delivery. Our approach aligns design decisions with construction realities to optimise cost, quality, and schedule performance.",
    tags: ["Architectural Intent", "Engineering Precision", "Interface Risk Reduction"]
  },
  {
    number: "02",
    title: "Construction of Buildings & Infrastructure",
    icon: <HardHat size={24} />,
    description: "We deliver comprehensive construction services for buildings and infrastructure, producing durable, compliant, and high-quality assets.",
    details: "Our portfolio spans residential developments, commercial facilities, and industrial works. We operate with rigorous safety management, quality assurance, and project controls—delivering on time, within budget, and to specification.",
    tags: ["Safety Management", "Quality Assurance", "Project Controls"]
  },
  {
    number: "03",
    title: "Procurement & Supply Management",
    icon: <Truck size={24} />,
    description: "Our procurement services protect project value through structured sourcing, supplier management, and logistics coordination.",
    details: "We manage materials, equipment, and specialist services with a focus on cost efficiency and transparency. By combining market knowledge with disciplined processes, we minimise supply risk and ensure technical alignment.",
    tags: ["Strategic Sourcing", "Logistics Coordination", "Cost Efficiency"]
  },
  {
    number: "04",
    title: "Project Management",
    icon: <ClipboardCheck size={24} />,
    description: "Tower Nigeria Limited provides hands-on project management services that ensure works are executed safely and efficiently.",
    details: "We coordinate contractors, manage progress, control costs, and enforce quality—acting as the client's reliable on-site representative from mobilisation to handover, ensuring adherence to approved designs and schedules.",
    tags: ["Contractor Coordination", "Progress Management", "Client Representation"]
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white pt-24 min-h-screen">
      {/* Page Header */}
      <section className="py-20 lg:py-32 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-slate-400 font-mono text-[10px] uppercase tracking-[0.2em] mb-6">
              <Minus size={16} />
              <span>OUR SERVICES</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
              Disciplined <span className="text-orange-400">Execution.</span><br />
              <span className="text-slate-300 italic font-medium">Reliable Assets.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
              Tower Nigeria Limited provides a comprehensive ecosystem of services designed to bring certainty to residential, commercial, and industrial construction environments.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detailed List */}
      <section>
        {fullServices.map((service, index) => (
          <div 
            key={service.number} 
            className="border-b border-slate-100 group hover:bg-slate-50 transition-colors duration-500"
          >
            <div className="container mx-auto px-6 py-24">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Visual Anchor */}
                <div className="lg:col-span-1 flex flex-col justify-between">
                  <span className="font-mono text-2xl text-slate-200 group-hover:text-orange-400 transition-colors">
                    {service.number}
                  </span>
                  <div className="text-slate-200 group-hover:text-slate-900 transition-colors hidden lg:block">
                    {service.icon}
                  </div>
                </div>

                {/* Primary Content */}
                <div className="lg:col-span-5">
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6 group-hover:translate-x-2 transition-transform duration-500">
                    {service.title}
                  </h2>
                  <p className="text-lg font-medium text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-mono uppercase tracking-widest bg-white border border-slate-200 px-3 py-1.5 text-slate-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Detailed Text Block */}
                <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-center">
                  <p className="text-slate-500 leading-relaxed text-base">
                    {service.details}
                  </p>
                  <Link 
                    href="/contact" 
                    className="mt-10 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-900 hover:text-orange-400 transition-colors group/link"
                  >
                     Explore Our Services <ArrowUpRight size={16} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Footer Contact CTA */}
      <section className="py-24 text-white bg-[#0A2540]" style={{ backgroundColor: '#0A2540' }}> {/* Use Tailwind HEX for consistency */}
  <div className="container mx-auto px-6 text-center">
    <h3 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight">
      Ready to begin your project?
    </h3>
    <Link 
      href="/contact" 
      className="inline-block border-2 border-orange-400 text-orange-400 px-12 py-5 font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:bg-white px-20 hover:text-[#0A2540]"
    >
      Partner with Tower Nigeria
    </Link>
  </div>
</section>
    </main>
  );
}