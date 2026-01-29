'use client';

import { Minus, Leaf, Users2, Recycle, Landmark } from "lucide-react";

export default function Sustainability() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-slate-400 font-mono text-[10px] uppercase tracking-[0.2em] mb-6">
            <Minus size={16} />
            <span>Responsibility</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Building for the <span className="text-orange-400">future.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Environment */}
          <div className="p-10 border border-slate-100 bg-slate-50 rounded-sm">
            <Leaf className="text-orange-400 mb-6" size={32} />
            <h3 className="text-xl font-bold text-slate-900 mb-4">Environment</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              We integrate sustainable construction practices by minimising waste, promoting efficient material use, and reducing our ecological footprint during execution.
            </p>
          </div>

          {/* Card 2: Community */}
          <div className="p-10 border border-slate-100 bg-slate-50 rounded-sm">
            <Users2 className="text-orange-400 mb-6" size={32} />
            <h3 className="text-xl font-bold text-slate-900 mb-4">Community Engagement</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              We respect host communities. Our aim is to leave a positive footprint through local engagement, open communication, and responsible site conduct.
            </p>
          </div>

          {/* Card 3: Local Value */}
          <div className="p-10 border border-slate-100 bg-slate-50 rounded-sm">
            <Landmark className="text-orange-400 mb-6" size={32} />
            <h3 className="text-xl font-bold text-slate-900 mb-4">Social Impact</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Beyond physical structures, we create value through local employment opportunities and skills transfer within the Nigerian workforce.
            </p>
          </div>

        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400 font-mono text-[11px] uppercase tracking-widest max-w-xl mx-auto">
            Tower Nigeria Limited: Creating assets that serve communities and clients for generations.
          </p>
        </div>
      </div>
    </section>
  );
}