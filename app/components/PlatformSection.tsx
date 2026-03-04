"use client";

import { useState } from "react";

const items = [
  {
    id: "integrations",
    title: "From Atlassian to Zoom.",
    description:
      "Google Drive. ChatGPT. Vercel. Box. Asana. Workday. You name it, it works in Slack.",
    link: "See all integrations",
  },
  {
    id: "customize",
    title: "Customize Slack to fit your needs.",
    description:
      "Build custom apps, workflows, and bots tailored to how your team actually works — no engineering team required.",
    link: "Learn about customization",
  },
  {
    id: "security",
    title: "Work without worry.",
    description:
      "Enterprise-grade security, compliance, and data residency options so your team can focus on work, not risk.",
    link: "Learn about security",
  },
];

export default function PlatformSection() {
  const [active, setActive] = useState("integrations");

  return (
    <section id="platform" className="bg-white px-6 py-20">
      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1d1c1d]">
          Secure. Scaleable.{" "}
          <span className="text-[#611f69]">Silo-free.</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-500 leading-relaxed max-w-lg mx-auto">
          Our flexible, open platform is purpose-built for bringing the best agents
          and AI to every business, and can be tailored to fit however your teams
          work best.
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

          {/* Vercel testimonial */}
          <div className="mt-8 space-y-2">
            <div className="flex items-center gap-1.5">
              {/* Vercel triangle */}
              <svg className="h-4 w-4 text-[#1d1c1d]" viewBox="0 0 116 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M57.5 0L115 100H0L57.5 0Z" />
              </svg>
              <p className="text-sm font-extrabold tracking-wide text-[#1d1c1d]">Vercel</p>
            </div>
            <p className="text-sm italic text-gray-500 leading-relaxed">
              "Work starts in conversation. That's why we see Slack as the natural
              place to build our agents."
            </p>
            <p className="text-sm text-gray-700">
              <strong>Guillermo Rauch,</strong> CEO, Vercel
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
