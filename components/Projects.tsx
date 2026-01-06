// components/about/Projects.tsx
import { ArrowRight, ExternalLink, Minus } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Nova Dashboard",
    category: "Product Design",
    year: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Linear Integration",
    category: "Ecosystem",
    year: "2024",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Mobile App v2",
    category: "Development",
    year: "2023",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    className: "md:col-span-1 md:row-span-1",
  },
];

export default function Projects() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 space-y-4">
          <div className="flex items-center gap-2 text-slate-400 font-mono text-[10px] uppercase tracking-[0.2em]">
            <Minus size={16} />
            <span>Selected Works</span>
          </div>
          <div className="flex justify-between items-end gap-8">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
              Proof of <span className="text-orange-600">concept.</span>
            </h2>
            <Link 
              href="/projects" 
              className="hidden md:flex items-center gap-2 text-sm font-semibold group border-b border-transparent hover:border-slate-900 pb-1 transition-all"
            >
              View all projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden bg-slate-100 rounded-sm ${project.className}`}
            >
              {/* Image with subtle zoom on hover */}
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100 opacity-90 group-hover:opacity-100"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div>
                    <span className="text-orange-400 font-mono text-[10px] uppercase tracking-widest mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-full text-white">
                    <ExternalLink size={18} />
                  </div>
                </div>
              </div>

              {/* Static Label (Visible before hover) */}
              <div className="absolute top-6 left-6 group-hover:hidden transition-all">
                <div className="bg-white px-3 py-1 shadow-sm border border-slate-200 text-[10px] font-mono uppercase tracking-tighter">
                  {project.year}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-only CTA */}
        <div className="mt-10 md:hidden">
            <Link href="/projects" className="text-sm font-bold flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-sm">
                Explore archive <ArrowRight size={16} />
            </Link>
        </div>
      </div>
    </section>
  );
}