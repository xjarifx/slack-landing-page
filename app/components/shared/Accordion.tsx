'use client';

import { useState } from 'react';
import { COLORS } from '@/app/lib/constants';

export interface AccordionItem {
  id: string;
  title: string;
  description: string;
  link: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultActive?: string;
  className?: string;
}

export default function Accordion({ items, defaultActive, className = '' }: AccordionProps) {
  const [active, setActive] = useState(defaultActive || items[0]?.id);

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {items.map((item) => {
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`text-left border-l-4 pl-4 py-1 transition-all ${
              isActive ? 'border-[#611f69]' : 'border-gray-200 hover:border-gray-400'
            }`}
          >
            <p
              className={`text-base font-semibold leading-snug ${
                isActive ? 'text-[#611f69]' : 'text-[#1d1c1d]'
              }`}
            >
              {item.title}
            </p>

            {isActive && (
              <div className="mt-3 space-y-3">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#611f69] hover:underline"
                >
                  {item.link} →
                </a>
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
