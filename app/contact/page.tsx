'use client';

import React from 'react';
import { Mail, Phone, MapPin, Minus, Send, Linkedin, Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white pt-32 pb-24">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-20">
          <div className="flex items-center gap-2 text-slate-400 font-mono text-[10px] uppercase tracking-[0.2em] mb-6">
            <Minus size={16} />
            <span>Project Inquiry</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8">
            Let's build <br />
            <span className="text-orange-400 italic font-medium">with integrity.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            Tower Nigeria Limited partners with clients seeking reliable construction delivery rooted in discipline and professional workmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: Contact Form */}
          <div className="lg:col-span-7">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    className="w-full bg-slate-50 border-b border-slate-200 p-4 focus:border-orange-400 focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="email@company.com"
                    className="w-full bg-slate-50 border-b border-slate-200 p-4 focus:border-orange-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Service Required</label>
                <select className="w-full bg-slate-50 border-b border-slate-200 p-4 focus:border-orange-400 focus:outline-none transition-colors appearance-none">
                  <option>Building & Infrastructure Construction</option>
                  <option>Design & Build Services</option>
                  <option>Procurement & Supply Management</option>
                  <option>Project Management</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Project Details</label>
                <textarea 
                  rows={5}
                  placeholder="Describe your construction or infrastructure requirements..."
                  className="w-full bg-slate-50 border-b border-slate-200 p-4 focus:border-orange-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button className="group flex items-center gap-3 bg-brand-blue text-white px-10 py-5 rounded-full hover:bg-orange-400 transition-all duration-300">
                <span className="font-bold tracking-wide uppercase text-xs">Submit Inquiry</span>
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Right: Contact Information */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Office Info */}
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-orange-400 mb-6">Office</h3>
              <div className="flex gap-4">
                <MapPin className="text-slate-900 shrink-0" size={24} strokeWidth={1.5} />
                <p className="text-lg text-slate-600 leading-relaxed">
                  Abuja, Nigeria <br />
                  <span className="text-sm text-slate-400 font-medium">Committed to reliable building solutions across the country.</span>
                </p>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="space-y-6">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-orange-400 mb-6">Direct Channels</h3>
              
              <a href="mailto:info@towernigerialtd.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-slate-50 flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                  <Mail className="text-slate-900 group-hover:text-orange-400 transition-colors" size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-slate-400">Email Us</p>
                  <p className="text-lg font-semibold text-slate-900">info@towernigerialtd.com</p>
                </div>
              </a>

              <a href="tel:+2349069101050" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-slate-50 flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                  <Phone className="text-slate-900 group-hover:text-orange-400 transition-colors" size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase text-slate-400">Call Us</p>
                  <p className="text-lg font-semibold text-slate-900">+2349069101050</p>
                </div>
              </a>
            </div>

            {/* Business Commitment Badge */}
            <div className="bg-brand-blue p-8 text-white rounded-sm">
              <p className="font-mono text-[10px] uppercase tracking-widest text-orange-400 mb-4">Our Commitment</p>
              <p className="text-sm leading-relaxed text-slate-300">
                Tower Nigeria Limited stands apart through structured execution, accountable leadership, and respect for the fundamentals of construction. 
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}