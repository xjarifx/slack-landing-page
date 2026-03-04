"use client";

import { useState, useEffect } from "react";

const sections = ["Knowledge", "People", "Process", "Platform"];

export default function SectionNav() {
  const [active, setActive] = useState("Knowledge");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const element = document.getElementById(section.toLowerCase());
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActive(section);
                setIsVisible(true);
              }
            });
          },
          {
            rootMargin: "-20% 0px -60% 0px",
            threshold: 0,
          }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    // Observer for the last section to detect when we've scrolled past
    const lastSection = document.getElementById("platform");
    if (lastSection) {
      const lastObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Hide navbar when platform section is no longer visible
            if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
              setIsVisible(false);
            }
          });
        },
        {
          threshold: 0,
        }
      );
      lastObserver.observe(lastSection);
      observers.push(lastObserver);
    }

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="sticky top-20 z-40 flex justify-center py-4">
      <nav className="flex items-center gap-1 rounded-full bg-[#f3e5f5] border border-[#e1bee7] px-2 py-1.5">
        {sections.map((section) => {
          const isActive = active === section;
          return (
            <button
              key={section}
      onClick={() => {
              setActive(section);
              document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
            }}
              className={`rounded-full px-5 py-1.5 text-sm font-semibold transition-all ${
                isActive
                  ? "bg-white text-[#611f69] shadow-sm border border-[#d8b4e2]"
                  : "text-[#611f69] hover:bg-white/60"
              }`}
            >
              {section}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
