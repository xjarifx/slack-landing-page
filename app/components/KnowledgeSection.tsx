"use client";

import { useState } from "react";

const items = [
  {
    id: "slackbot",
    title: "Meet Slackbot: Your personal agent for work.",
    description:
      "Slackbot isn't just any AI. It's AI that knows your team inside and out. It adapts to your style, finds what you need, and helps work get done faster.",
    link: "Learn more about Slackbot",
  },
  {
    id: "search",
    title: "One search to rule them all.",
    description:
      "Search across every message, file, and app in one place. Find what you need in seconds, not hours.",
    link: "Learn more about search",
  },
  {
    id: "crm",
    title: "Bring CRM data to the conversation.",
    description:
      "Connect Salesforce and other CRM tools directly in Slack. See customer data right where your team is already working.",
    link: "Learn more about integrations",
  },
];

export default function KnowledgeSection() {
  const [active, setActive] = useState("slackbot");

  return (
    <section id="knowledge" className="bg-white px-6 py-20">
      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1d1c1d]">
          Give everyone{" "}
          <span className="text-[#611f69]">instant context.</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-500 leading-relaxed">
          Get access to every file, decision, and conversation, so you can build on
          <br className="hidden sm:block" /> past work instead of recreating it.
        </p>
      </div>

      {/* Two-column body */}
      <div className="mx-auto mt-16 max-w-5xl flex flex-col md:flex-row gap-10 items-start">
        {/* Left — accordion */}
        <div className="w-full md:w-96 shrink-0 flex flex-col gap-4">
          {items.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`text-left border-l-4 pl-4 py-1 transition-all ${
                  isActive ? "border-[#611f69]" : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <p
                  className={`text-base font-semibold leading-snug ${
                    isActive ? "text-[#611f69]" : "text-[#1d1c1d]"
                  }`}
                >
                  {item.title}
                </p>

                {/* Expanded content */}
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

          {/* Stat */}
          <div className="mt-6">
            <p className="text-6xl font-extrabold text-[#1d1c1d] leading-none">97 min</p>
            <p className="mt-2 text-sm text-gray-500 leading-snug">
              average time users can save<br />weekly with AI in Slack<sup>1</sup>
            </p>
          </div>
        </div>

        {/* Right — video placeholder */}
        <div className="flex-1 w-full rounded-2xl overflow-hidden shadow-xl bg-[#3b0764] relative aspect-video flex items-center justify-center">
          {/* Glow blobs */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-40 w-3/4 rounded-full bg-blue-300 opacity-20 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center gap-3 text-white/40">
            <svg className="h-14 w-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" />
              <polygon points="26,20 26,44 48,32" fill="currentColor" />
            </svg>
            <span className="text-sm font-medium tracking-wide">Video coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
