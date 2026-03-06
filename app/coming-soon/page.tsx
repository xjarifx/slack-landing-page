"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ComingSoon() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#4a154b] px-4 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#e01e5a]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#36c5f0]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ecb22e]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className={`text-center max-w-3xl relative z-10 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Slack-style logo/icon */}
        <div className="mb-8 inline-block">
          <div className="relative">
            <div className="absolute inset-0 bg-white/30 rounded-2xl blur-2xl animate-pulse"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Image 
                src="/company_logo/slack.png" 
                alt="Slack" 
                width={80} 
                height={80}
                className="h-20 w-20"
              />
            </div>
          </div>
        </div>

        {/* Heading with gradient text */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-white mb-6 tracking-tight">
          Coming Soon
        </h1>
        
        {/* Subheading */}
        <p className="text-2xl sm:text-3xl text-white/95 mb-6 font-medium">
          We're building something amazing
        </p>
        
        {/* Description */}
        <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          This feature is currently under development. We're working hard to bring you an incredible experience. Stay tuned!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="/"
            className="group inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-bold uppercase tracking-wider text-[#611f69] hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
          >
            <svg 
              className="w-5 h-5 transition-transform group-hover:-translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
          
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-transparent border-2 border-white/40 backdrop-blur-sm px-8 py-4 text-base font-bold uppercase tracking-wider text-white hover:bg-white/10 hover:border-white/60 transition-all"
          >
            Explore Features
          </a>
        </div>

        {/* Progress indicator with better animation */}
        <div className="flex justify-center items-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-white/70 animate-bounce shadow-lg" style={{ animationDelay: '0ms', animationDuration: '1s' }}></div>
          <div className="h-2.5 w-2.5 rounded-full bg-white/70 animate-bounce shadow-lg" style={{ animationDelay: '200ms', animationDuration: '1s' }}></div>
          <div className="h-2.5 w-2.5 rounded-full bg-white/70 animate-bounce shadow-lg" style={{ animationDelay: '400ms', animationDuration: '1s' }}></div>
        </div>

        {/* Additional info */}
        <p className="mt-12 text-sm text-white/60">
          Have questions? <a href="/" className="underline hover:text-white/90 transition-colors">Contact us</a>
        </p>
      </div>
    </div>
  );
}
