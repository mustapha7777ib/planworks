'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Import your images (adjust paths as needed)
import Building1 from '@public/images/building-1.webp';
import Building2 from '@public/images/building-2.webp';
import Building3 from '@public/images/building-3.webp';

const slides = [
  {
    id: 1,
    image: Building1,
    title: "From Concept to Completion",
    highlight: "Seamless Design, Construction, and Project Delivery for Every Sector",
    description: "Planwork Group delivers fully integrated Design & Build solutions for complex infrastructure, managed under a single accountable framework.",
    cta: "Explore Our Services",
    link: "/services"
  },
  {
    id: 2,
    image: Building2,
    title: "Precision in Every Project",
    highlight: "Technology-driven planning, monitoring, and execution that ensures results on time and on budget",
    description: "Technology-driven planning and disciplined execution that ensures structural integrity and financial certainty across every sector.",
    cta: "Discover How",
    link: "/services"
  },
  {
    id: 3,
    image: Building3,
    title: "Building Value, Delivering Excellence",
    highlight: "End-to-end solutions across construction, procurement, and project management consultancy",
    description: "From strategic procurement to facility management, we provide end-to-end solutions that protect and optimize your physical assets.",
    cta: "Get in Touch Today",
    link: "/contact"
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full shrink-0 h-full relative">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={slide.id === 1}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left text-white"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                {currentSlide.title}
              </h1>
              
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-orange-400 mt-4 font-semibold">
                {currentSlide.highlight}
              </h2>

              <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0">
                {currentSlide.description}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href={currentSlide.link}
                  className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-md transition-colors duration-300"
                >
                  {currentSlide.cta}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-orange-400 scale-125'
                : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}