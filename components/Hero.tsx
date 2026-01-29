'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Use your actual image paths
import Building1 from '@public/images/building-1.webp';
import Building2 from '@public/images/building-2.webp';
import Building3 from '@public/images/building-3.webp';

const slides = [
  {
    id: 1,
    image: Building1,
    title: "From Foundation to Finish",
    highlight: "Building Structures That Endure",
    cta: "Explore Our Services",
    link: "/services"
  },
  {
    id: 2,
    image: Building2,
    title: "Built on Discipline",
    highlight: "Safe, reliable, and well-managed construction delivery",
    cta: "Discover Our Approach",
    link: "/about"
  },
  {
    id: 3,
    image: Building3,
    title: "Strength You Can Trust",
    highlight: "Construction solutions delivered with integrity and precision",
    cta: "Contact Us Today",
    link: "/contact"
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-slate-900">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6">
                {slides[currentIndex].title}
              </h1>
              
              <h2 className="text-xl md:text-3xl text-orange-400 font-medium italic mb-10">
                {slides[currentIndex].highlight}
              </h2>

              <div className="flex gap-4">
                <Link
                  href={slides[currentIndex].link}
                  className="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-sm transition-all duration-300 uppercase tracking-widest text-[10px]"
                >
                  {slides[currentIndex].cta}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-6 flex gap-4 items-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-500 ${
              index === currentIndex ? 'w-12 bg-orange-400' : 'w-3 bg-white/40'
            } h-1 rounded-full`}
          />
        ))}
      </div>
    </section>
  );
}