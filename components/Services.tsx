// components/about/Services.tsx
import { 
  Plus, 
  Layers, 
  Workflow, 
  Fingerprint, 
  ArrowUpRight 
} from "lucide-react";

const services = [
  {
    title: "Project Architecture",
    description: "We don't just organize tasks; we build systems. Our structures adapt to your team's unique rhythm and scale.",
    icon: Layers,
    tag: "Infrastructure"
  },
  {
    title: "Process Automation",
    description: "Eliminate the 'work about work.' We automate status updates and handoffs so you can stay in flow state.",
    icon: Workflow,
    tag: "Efficiency"
  },
  {
    title: "Identity & Security",
    description: "Enterprise-grade protection that doesn't get in the way. Secure by default, transparent by design.",
    icon: Fingerprint,
    tag: "Security"
  },
  {
    title: "Performance Metrics",
    description: "Real data, no vanity. Get a clear view of your team's velocity and capacity without the spreadsheet bloat.",
    icon: ArrowUpRight,
    tag: "Analytics"
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
              <span>Core Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900">
              We focus on the essentials <span className="text-slate-400">so you can focus on the work.</span>
            </h2>
          </div>
          <div className="text-slate-500 text-sm font-mono leading-relaxed max-w-[280px]">
            [01] SIMPLE INTERFACE <br />
            [02] FAST PERFORMANCE <br />
            [03] HUMAN SUPPORT
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-slate-200 border border-slate-200 overflow-hidden rounded-sm">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-10 md:p-14 transition-colors hover:bg-slate-50"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="p-3 bg-slate-900 text-white rounded-none">
                  <service.icon size={20} strokeWidth={1.5} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-tighter text-slate-400 border border-slate-200 px-2 py-1">
                  {service.tag}
                </span>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg max-w-sm">
                  {service.description}
                </p>
              </div>

              {/* Subtle accent corner */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Plus size={16} className="text-slate-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}