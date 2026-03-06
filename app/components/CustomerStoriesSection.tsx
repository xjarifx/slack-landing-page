

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '@/app/components/shared/Button';
import WaveDivider from '@/app/components/shared/WaveDivider';

export default function CustomerStoriesSection() {
  const [expandedCard, setExpandedCard] = useState('target');
const stories = [
  {
    id: "openai",
    company: "OpenAI",
    featured: false,
    hasPlay: false,
    bg: "bg-gray-900",
    logo: (
      <Image 
        src="/company_logo/openai.svg" 
        alt="OpenAI logo" 
        width={120} 
        height={32} 
        className="h-8 w-auto brightness-0 invert"
      />
    ),
  },
  {
    id: "target",
    company: "Target",
    featured: false,
    hasPlay: false,
    bg: "bg-[#1a1a2e]",
    logo: (
      <Image 
        src="/company_logo/Target.png" 
        alt="Target logo" 
        width={140} 
        height={40} 
        className="h-10 w-auto brightness-0 invert"
      />
    ),
  },
  {
    id: "ibm",
    company: "IBM",
    featured: false,
    hasPlay: false,
    bg: "bg-[#2d1b1b]",
    logo: (
      <Image 
        src="/company_logo/ibm.png" 
        alt="IBM logo" 
        width={80} 
        height={32} 
        className="h-8 w-auto brightness-0 invert"
      />
    ),
  },
  {
    id: "stripe",
    company: "Stripe",
    featured: false,
    hasPlay: false,
    bg: "bg-[#1c1c1c]",
    logo: (
      <Image 
        src="/company_logo/stripe.png" 
        alt="Stripe logo" 
        width={100} 
        height={40} 
        className="h-10 w-auto brightness-0 invert"
      />
    ),
  },
];
  return (
    <section className="bg-white pt-10 pb-0 overflow-hidden">
      <div className="px-4 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[#1d1c1d] leading-tight">
            The most innovative companies run<br />their business in Slack.
          </h2>
        </div>

        {/* Cards grid */}
        <div className="mx-auto mt-8 max-w-6xl flex flex-col sm:flex-row gap-3 items-stretch">
        {stories.map((story) => {
          const isExpanded = expandedCard === story.id;
          
          return (
            <div
              key={story.id}
              onMouseEnter={() => setExpandedCard(story.id)}
              className={`relative min-h-64 rounded-2xl overflow-hidden ${story.bg} cursor-pointer group transition-all duration-500 ease-in-out ${
                isExpanded ? 'flex-[2]' : 'flex-1'
              }`}
            >
              {/* Simulated screenshot overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${
                isExpanded ? 'opacity-100' : 'opacity-0'
              }`} />

              {/* Decorative "screen" lines */}
              <div className={`absolute inset-0 flex flex-col gap-1 p-4 opacity-20 transition-opacity duration-500 ${
                isExpanded ? 'opacity-20' : 'opacity-0'
              }`}>
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="h-3 rounded bg-white/40" style={{ width: `${60 + (i % 3) * 15}%` }} />
                ))}
              </div>

              {/* Content - shown when expanded */}
              <div className={`absolute bottom-0 left-0 p-5 z-10 transition-all duration-500 ${
                isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
              }`}>
                <div className="mb-2">{story.logo}</div>
                {story.title && (
                  <p className="text-white text-lg font-semibold leading-snug max-w-md">
                    {story.title}
                  </p>
                )}
              </div>

              {/* Logo - shown when collapsed */}
              <div className={`absolute inset-0 flex items-center justify-center z-10 transition-all duration-500 ${
                isExpanded ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'
              }`}>
                {story.logo}
              </div>

              {/* Overlay for collapsed state */}
              <div className={`absolute inset-0 bg-black/30 transition-opacity duration-500 ${
                isExpanded ? 'opacity-0' : 'opacity-100 group-hover:opacity-20'
              }`} />

              {/* Play button - only for OpenAI */}
              {story.hasPlay && (
                <div className={`absolute bottom-5 right-5 z-10 h-10 w-10 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${
                  isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}>
                  <svg className="h-4 w-4 text-[#1d1c1d] ml-0.5" viewBox="0 0 16 16" fill="currentColor">
                    <polygon points="4,2 14,8 4,14" />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* CTA buttons */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button variant="primary" href="/coming-soon">Get Started</Button>
        <Button variant="secondary" href="/coming-soon">Find Your Plan</Button>
      </div>
      </div>

      <WaveDivider className="mt-10" />
    </section>
  );
}
