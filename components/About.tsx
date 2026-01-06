// components/about/AboutHero.tsx
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-44 overflow-hidden bg-white">
      {/* Abstract Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-100/50 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50/50 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Subtle Brand Badge */}
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-orange-50 text-orange-400 ring-1 ring-inset ring-orange-400/10 mb-8 animate-fade-in">
            Our Mission
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-8">
            Software built for <span className="text-orange-400">clarity.</span>
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-12 max-w-2xl mx-auto">
            We create project management tools that respect your time and intelligence. 
            No bloat, no friction—just the shortest path from idea to done.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            <Button 
              size="lg" 
              variant="ghost" 
              asChild 
              className="h-14 px-8 text-base font-semibold text-white hover:bg-orange-900 transition-all bg-orange-400"
            >
              <Link href="#contact">Talk to our team</Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}