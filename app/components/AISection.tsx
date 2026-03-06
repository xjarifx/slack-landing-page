"use client";

import { useState } from "react";

const aiTabs = [
  { id: "slackbot",    label: "Organize your day with Slackbot" },
  { id: "summarize",   label: "Summarize a conversation you missed" },
  { id: "claude",      label: "Get fast answers with Claude" },
  { id: "huddles",     label: "Turn on AI note-taking in huddles" },
  { id: "copilot",     label: "Review code with Github Copilot" },
  { id: "agentforce",  label: "Lookup customer data in Agentforce" },
];

const Sparkles = () => (
  <>
    {/* top-left cluster */}
    <svg className="absolute top-8 left-8 opacity-70" width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="50" r="3" fill="white"/>
      <circle cx="4"  cy="20" r="2" fill="white"/>
      <path d="M50 10 L52 16 L58 18 L52 20 L50 26 L48 20 L42 18 L48 16Z" fill="white"/>
      <path d="M90 5  L91.5 9.5 L96 11 L91.5 12.5 L90 17 L88.5 12.5 L84 11 L88.5 9.5Z" fill="white"/>
      <path d="M75 40 L76 43 L79 44 L76 45 L75 48 L74 45 L71 44 L74 43Z" fill="white"/>
      <circle cx="105" cy="30" r="1.5" fill="white"/>
    </svg>
    {/* bottom-right cluster */}
    <svg className="absolute bottom-16 right-8 opacity-70" width="140" height="100" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="130" cy="30" r="3"   fill="white"/>
      <circle cx="120" cy="70" r="2"   fill="white"/>
      <path d="M90 60 L92 66 L98 68 L92 70 L90 76 L88 70 L82 68 L88 66Z" fill="white"/>
      <path d="M50 80 L51.5 84.5 L56 86 L51.5 87.5 L50 92 L48.5 87.5 L44 86 L48.5 84.5Z" fill="white"/>
      <path d="M110 10 L111 13 L114 14 L111 15 L110 18 L109 15 L106 14 L109 13Z" fill="white"/>
    </svg>
  </>
);

export default function AISection() {
  const [activeTab, setActiveTab] = useState("slackbot");
  const currentIndex = aiTabs.findIndex(tab => tab.id === activeTab);
  const activeTabData = aiTabs[currentIndex];

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : aiTabs.length - 1;
    setActiveTab(aiTabs[newIndex].id);
  };

  const handleNext = () => {
    const newIndex = currentIndex < aiTabs.length - 1 ? currentIndex + 1 : 0;
    setActiveTab(aiTabs[newIndex].id);
  };

  return (
    <section className="relative bg-[#4a1260] pt-12 pb-0 text-white overflow-hidden">
      <Sparkles />
      
      <div className="px-4 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight">
            Reimagine what&apos;s possible<br />with AI and agents.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl mx-auto">
            AI in Slack doesn&apos;t make you think, it helps you do. It summarizes and searches based
            on actual conversations, and with it, makes every app and agent more helpful and
            contextually aware than ever.
          </p>
        </div>

        {/* Video slider */}
        <div className="relative z-10 mx-auto mt-8 max-w-5xl">
          {/* Active tab title above video - Mobile only */}
          <div className="mb-4 md:hidden">
            <h3 className="text-2xl font-bold text-white">
              {activeTabData.label}
            </h3>
          </div>

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
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#611f69] rounded-full p-3 shadow-lg transition-all opacity-0 group-hover:opacity-100 z-10"
              aria-label="Previous"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#611f69] rounded-full p-3 shadow-lg transition-all opacity-0 group-hover:opacity-100 z-10"
              aria-label="Next"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slider dots indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {aiTabs.map((tab) => (
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
            {aiTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    rounded-full px-5 py-2.5 text-base font-semibold transition-all duration-200 border
                    ${
                      isActive
                        ? "bg-white text-[#611f69] border-white shadow-md"
                        : "bg-white/20 text-white hover:bg-white/30 border-white/30"
                    }
                  `}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom white curve - Slack-style with overlapping arcs */}
      <div className="relative mt-16 -mx-4 h-20">
        {/* Purple arc (concave down) */}
        <div className="absolute inset-x-0 top-0 overflow-hidden">
          <svg viewBox="0 0 1220 128" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-20 block" style={{ transform: 'translateY(-1px)' }}>
            <path d="M0 0 C305 128 915 128 1220 0 L1220 0 L0 0 Z" fill="#4a1260"/>
          </svg>
        </div>
        {/* White arc (upper part) */}
        <div className="absolute inset-x-0 top-0 overflow-hidden">
          <svg viewBox="0 0 1220 128" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-20 block">
            <path d="M0 128 C305 0 915 0 1220 128 L1220 128 L0 128 Z" fill="white"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
