"use client";

import { useState } from "react";

const items = [
  {
    id: "channel",
    title: "It all starts with a channel.",
    description:
      "Channels are the foundation of Slack. They keep conversations organized, searchable, and open to anyone who needs to be included.",
    link: "Learn about channels",
  },
  {
    id: "huddles",
    title: "When talking is easier than typing...",
    description:
      "Start a huddle for a quick voice or video chat right inside Slack. No links, no scheduling — just talk.",
    link: "Learn about huddles",
  },
  {
    id: "connect",
    title: "Bring conversations out of the inbox.",
    description:
      "Slack Connect lets you chat with clients and vendors in real-time, right from Slack. Email could never.",
    link: "Learn about Slack Connect",
  },
];

export default function PeopleSection() {
  const [active, setActive] = useState("connect");

  return (
    <section id="people" className="bg-white px-6 py-20">
      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1d1c1d]">
          Let your people{" "}
          <span className="text-[#611f69]">connect like people.</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-500 leading-relaxed">
          Slack's conversational UI makes collaborating more approachable,
          <br className="hidden sm:block" /> whether you're working with a colleague or an agent.
        </p>
      </div>

      {/* Two-column body */}
      <div className="mx-auto mt-16 max-w-5xl flex flex-col md:flex-row gap-10 items-start">
        {/* Left — accordion + testimonial */}
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

          {/* Testimonial */}
          <div className="mt-8 space-y-2">
            <p className="text-sm font-extrabold tracking-widest text-[#1d1c1d] uppercase">
              Anthropic
            </p>
            <p className="text-sm italic text-gray-500 leading-relaxed">
              "Slack has been essential to our growth, our speed, and our ability to
              stay aligned as we scale"
            </p>
            <p className="text-sm text-gray-700">
              <strong>Kate Jenson,</strong> Head of Americas, Anthropic
            </p>
          </div>
        </div>

        {/* Right — video placeholder */}
        <div className="flex-1 w-full rounded-2xl overflow-hidden shadow-xl bg-[#3b0764] relative aspect-video flex items-center justify-center">
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
