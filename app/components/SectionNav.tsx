"use client";

import { useState } from "react";

const sections = ["Knowledge", "People", "Process", "Platform"];

export default function SectionNav() {
  const [active, setActive] = useState("Knowledge");

  return (
    <div className="sticky top-16 z-40 flex justify-center bg-white py-4">
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
