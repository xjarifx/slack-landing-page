"use client";

import { useState } from "react";

const tabs = [
  {
    id: "plan-launches",
    label: "Plan launches",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 1v14M1 8h14M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "run-projects",
    label: "Run projects",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="9" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="1" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: "chat-with-clients",
    label: "Chat with clients",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 9.667A1.333 1.333 0 0112.667 11H4.667L2 13.667V3.333A1.333 1.333 0 013.333 2h9.334A1.333 1.333 0 0114 3.333v6.334z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "ask-an-agent",
    label: "Ask an agent",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="5.5" cy="7" r="1" fill="currentColor"/>
        <circle cx="10.5" cy="7" r="1" fill="currentColor"/>
        <path d="M5.5 10.5s.833 1 2.5 1 2.5-1 2.5-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "automate-tasks",
    label: "Automate tasks",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 2.5L9 8h4l-6.5 5.5 1.5-5H4.5L8 2.5h5.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function VideoSection() {
  const [activeTab, setActiveTab] = useState("plan-launches");

  return (
    <section className="bg-white py-16 px-6">
      {/* Video placeholder */}
      <div className="mx-auto max-w-4xl">
        <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl bg-[#3b0764] aspect-video flex items-center justify-center">
          {/* Decorative gradient blobs matching the screenshot background */}
          <div className="absolute -top-16 -left-16 h-64 w-64 rounded-full bg-purple-400 opacity-30 blur-3xl" />
          <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-green-300 opacity-20 blur-3xl" />

          {/* Placeholder content */}
          <div className="relative z-10 flex flex-col items-center gap-3 text-white/40">
            <svg className="h-16 w-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2"/>
              <polygon points="26,20 26,44 48,32" fill="currentColor"/>
            </svg>
            <span className="text-sm font-medium tracking-wide">Video coming soon</span>
          </div>
        </div>
      </div>

      {/* Tab buttons */}
      <div className="mx-auto mt-10 max-w-2xl flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold 
                transition-all duration-200 ease-in-out
                ${
                  isActive
                    ? "bg-[#2d1b3d] text-white shadow-lg scale-[1.02] ring-2 ring-[#2d1b3d]/20"
                    : "bg-white/60 text-[#611f69] hover:bg-white hover:shadow-md hover:scale-[1.01] active:scale-[0.99]"
                }
              `}
            >
              {tab.label}
              <span className={`transition-transform duration-200 ${isActive ? "text-white scale-110" : "text-[#611f69]"}`}>
                {tab.icon}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
