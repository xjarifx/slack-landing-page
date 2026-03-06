"use client";

import { useState } from "react";

const tabs = [
  {
    id: "plan-launches",
    label: "Plan launches",
    icon: (
      <svg
        className="h-4 w-4"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 1v14M1 8h14M4 4l8 8M12 4l-8 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "run-projects",
    label: "Run projects",
    icon: (
      <svg
        className="h-4 w-4"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="1"
          width="6"
          height="6"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="9"
          y="1"
          width="6"
          height="6"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="1"
          y="9"
          width="6"
          height="6"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="9"
          y="9"
          width="6"
          height="6"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    id: "chat-with-clients",
    label: "Chat with clients",
    icon: (
      <svg
        className="h-4 w-4"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 9.667A1.333 1.333 0 0112.667 11H4.667L2 13.667V3.333A1.333 1.333 0 013.333 2h9.334A1.333 1.333 0 0114 3.333v6.334z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "ask-an-agent",
    label: "Ask an agent",
    icon: (
      <svg
        className="h-4 w-4"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="5.5" cy="7" r="1" fill="currentColor" />
        <circle cx="10.5" cy="7" r="1" fill="currentColor" />
        <path
          d="M5.5 10.5s.833 1 2.5 1 2.5-1 2.5-1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "automate-tasks",
    label: "Automate tasks",
    icon: (
      <svg
        className="h-4 w-4"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 2.5L9 8h4l-6.5 5.5 1.5-5H4.5L8 2.5h5.5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function VideoSection() {
  const [activeTab, setActiveTab] = useState("plan-launches");
  const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
  const activeTabData = tabs[currentIndex];

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
    setActiveTab(tabs[newIndex].id);
  };

  const handleNext = () => {
    const newIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
    setActiveTab(tabs[newIndex].id);
  };

  return (
    <section className="bg-white py-10 px-4">
      <div className="mx-auto max-w-5xl">
        {/* Active tab title above video - Mobile only */}
        <div className="mb-4 md:hidden">
          <h3 className="text-2xl font-bold text-[#2d1b3d] flex items-center gap-3">
            <span>{activeTabData.label}</span>
            <span className="text-[#611f69]">{activeTabData.icon}</span>
          </h3>
        </div>

        {/* Video with navigation */}
        <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl aspect-video bg-black group">
          <video 
            key={activeTab}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/videos/slack.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Navigation arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#2d1b3d] rounded-full p-3 shadow-lg transition-all opacity-0 group-hover:opacity-100 z-10"
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#2d1b3d] rounded-full p-3 shadow-lg transition-all opacity-0 group-hover:opacity-100 z-10"
            aria-label="Next"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider dots indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`h-2 rounded-full transition-all ${
                  activeTab === tab.id ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to ${tab.label}`}
              />
            ))}
          </div>
        </div>

        {/* Tab buttons below video - Desktop only */}
        <div className="hidden md:flex mt-6 flex-wrap items-center justify-center gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 rounded-full px-5 py-2.5 text-base font-semibold transition-all duration-200
                  ${
                    isActive
                      ? "bg-[#2d1b3d] text-white shadow-md"
                      : "bg-white text-[#2d1b3d] hover:bg-gray-100 border border-gray-200"
                  }
                `}
              >
                {tab.label}
                <span className={`transition-transform duration-200 ${isActive ? "scale-110" : ""}`}>
                  {tab.icon}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
