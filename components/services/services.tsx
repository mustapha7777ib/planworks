'use client';

import { motion } from 'framer-motion';
import { Minus, ArrowUpRight, Settings, HardHat, Truck, BarChart3, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    number: "01",
    title: "Design & Build Services",
    icon: <Settings size={24} />,
    description: "Fully integrated solutions combining architectural creativity, engineering precision, and construction execution under a single accountable framework.",
    details: "We manage the entire lifecycle from concept development and detailed design through construction and commissioning. By aligning design intent with construction realities from day one, we optimize cost, quality, and constructability.",
    tags: ["Integrated Delivery", "Risk Mitigation", "Lifecycle Management"]
  },
  {
    number: "02",
    title: "Construction & Infrastructure",
    icon: <HardHat size={24} />,
    description: "Comprehensive construction services for durable, compliant, and high-quality assets across residential and industrial sectors.",
    details: "Our capability spans commercial facilities, industrial plants, and public infrastructure. We emphasize rigorous project controls, safety management, and disciplined execution—delivering to the highest industry standards without excuses.",
    tags: ["Quality Assurance", "Industrial Scale", "Rigorous Controls"]
  },
  {
    number: "03",
    title: "Procurement Services",
    icon: <Truck size={24} />,
    description: "Safeguarding project value through strategic sourcing, vendor management, and supply chain optimization.",
    details: "We manage the procurement of materials and equipment with a focus on cost efficiency and transparency. Leveraging market intelligence, we mitigate supply risks while ensuring precise alignment with technical requirements.",
    tags: ["Supply Chain", "Cost Efficiency", "Market Intelligence"]
  },
  {
    number: "04",
    title: "Project Management (PMC)",
    icon: <BarChart3 size={24} />,
    description: "End-to-end consultancy providing governance, structure, and clarity throughout project execution.",
    details: "Our services cover planning, scheduling, cost control, and PMO setup. Acting as the client’s trusted representative, we enforce accountability across all stakeholders to ensure strategic objectives are met.",
    tags: ["Governance", "Contract Admin", "Risk Management"]
  },
  {
    number: "05",
    title: "Facility & Asset Management",
    icon: <ShieldCheck size={24} />,
    description: "Protecting long-term value through maintenance strategies and performance improvement for completed assets.",
    details: "We ensure facilities remain safe, efficient, and economically viable long after handover. We believe delivery is only meaningful if the asset performs consistently over its lifecycle.",
    tags: ["Lifecycle Optimization", "Operations Planning", "Asset Safety"]
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-white pt-24">
      {/* Header Section */}
      <section className="py-20 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-slate-400 font-mono text-[10px] uppercase tracking-[0.2em] mb-6">
              <Minus size={16} />
              <span>Full-Service Capabilities</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8">
              Integrated <span className="text-orange-400">Solutions.</span><br />
              <span className="text-slate-300 italic font-medium">End-to-end delivery.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
              Planwork Group provides a comprehensive ecosystem of services designed to bring certainty to complex engineering and construction environments.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section>
        {services.map((service, index) => (
          <div 
            key={service.number} 
            className="border-b border-slate-100 group hover:bg-slate-50 transition-colors duration-500"
          >
            <div className="container mx-auto px-6 py-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Number & Icon */}
                <div className="lg:col-span-1 flex flex-col justify-between">
                  <span className="font-mono text-xl text-slate-300 group-hover:text-orange-400 transition-colors">
                    {service.number}
                  </span>
                  <div className="text-slate-300 group-hover:text-slate-900 transition-colors hidden lg:block">
                    {service.icon}
                  </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-5">
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6 group-hover:translate-x-2 transition-transform duration-500">
                    {service.title}
                  </h2>
                  <p className="text-lg font-medium text-slate-600 mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-mono uppercase tracking-widest bg-slate-100 px-2 py-1 text-slate-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical Details */}
                <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-center">
                  <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                    {service.details}
                  </p>
                  <Link 
                    href="/contact" 
                    className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-orange-400 transition-colors"
                  >
                    Inquire for service <ArrowUpRight size={14} />
                  </Link>
                </div>

              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Closing CTA (Mirroring your site's style) */}
      <section className="py-24 bg-[#0A0A0A] text-white text-center">
        <div className="container mx-auto px-6">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">Need a custom framework?</h3>
            <Link 
              href="/contact" 
              className="inline-block bg-orange-400 text-black px-10 py-4 rounded-full font-bold hover:bg-white transition-all transform hover:scale-105"
            >
              Consult with our Partners
            </Link>
        </div>
      </section>
    </main>
  );
}