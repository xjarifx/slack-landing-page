"use client";

import { useState, useEffect, useRef } from "react";
import SlackLogo from "@/app/components/shared/icons/SlackLogo";
import { footerColumns } from "@/app/data/footerData";

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [regionDropdownOpen, setRegionDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleSection = (heading: string) => {
    setOpenSection(openSection === heading ? null : heading);
  };

  const regions = [
    { code: "US", name: "United States", flag: "🇺🇸" },
    { code: "UK", name: "United Kingdom", flag: "🇬🇧" },
    { code: "CA", name: "Canada", flag: "🇨🇦" },
    { code: "AU", name: "Australia", flag: "🇦🇺" },
    { code: "DE", name: "Germany", flag: "🇩🇪" },
    { code: "FR", name: "France", flag: "🇫🇷" },
    { code: "JP", name: "Japan", flag: "🇯🇵" },
    { code: "IN", name: "India", flag: "🇮🇳" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setRegionDropdownOpen(false);
      }
    };

    if (regionDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [regionDropdownOpen]);

  return (
    <footer>
      {/* Pre-footer CTA */}
      <div className="relative bg-[#4a1260] px-4 pt-10 pb-0 text-center overflow-hidden">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
          See all you can accomplish in Slack.
        </h2>
        <div className="mt-4 flex flex-wrap justify-center gap-4 pb-10">
          <a
            href="#"
            className="rounded border-2 border-white px-8 py-2.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white hover:text-[#4a1260] transition-colors"
          >
            Get Started
          </a>
          <a
            href="#"
            className="rounded border-2 border-white px-8 py-2.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white hover:text-[#4a1260] transition-colors"
          >
            Request a Demo
          </a>
        </div>
        {/* White wave - Slack-style with overlapping arcs */}
        <div className="relative -mx-4 h-20">
          {/* Purple arc (concave down) */}
          <div className="absolute inset-x-0 top-0 overflow-hidden">
            <svg
              viewBox="0 0 1220 128"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="w-full h-20 block"
              style={{ transform: "translateY(-1px)" }}
            >
              <path
                d="M0 0 C305 128 915 128 1220 0 L1220 0 L0 0 Z"
                fill="#4a1260"
              />
            </svg>
          </div>
          {/* White arc (upper part) */}
          <div className="absolute inset-x-0 top-0 overflow-hidden">
            <svg
              viewBox="0 0 1220 128"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="w-full h-20 block"
            >
              <path
                d="M0 128 C305 0 915 0 1220 128 L1220 128 L0 128 Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-white px-4 pt-4 pb-8">
        {/* Region + Social */}
        <div className="mx-auto max-w-7xl flex items-center justify-between py-3 border-b border-gray-100 mb-6">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setRegionDropdownOpen(!regionDropdownOpen)}
              className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-700"
            >
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
              </svg>
              Change Region
              <svg
                className={`h-3 w-3 transition-transform ${regionDropdownOpen ? "rotate-180" : ""}`}
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M4 6l4 4 4-4" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {regionDropdownOpen && (
              <div className="absolute bottom-full left-0 mb-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                {regions.map((region) => (
                  <button
                    key={region.code}
                    onClick={() => {
                      setRegionDropdownOpen(false);
                      // Handle region change here
                    }}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-purple-50 hover:text-[#611f69] flex items-center gap-2"
                  >
                    <span className="text-lg">{region.flag}</span>
                    <span>{region.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-gray-600"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            {/* X / Twitter */}
            <a
              href="#"
              aria-label="X"
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="#"
              aria-label="YouTube"
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
              </svg>
            </a>
            {/* TikTok */}
            <a
              href="#"
              aria-label="TikTok"
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.53V6.77a4.85 4.85 0 01-1.01-.08z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="mx-auto max-w-7xl flex flex-wrap gap-8">
          {/* Columns - Desktop */}
          <div className="hidden md:flex flex-1 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 md:grid">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#1d1c1d]">
                  {col.heading}
                </p>
                <ul className="space-y-1.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-gray-500 hover:text-[#611f69] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Columns - Mobile Accordion */}
          <div className="flex-1 md:hidden w-full">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <button
                  onClick={() => toggleSection(col.heading)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <p className="text-sm font-bold uppercase tracking-wider text-[#1d1c1d]">
                    {col.heading}
                  </p>
                  <svg
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      openSection === col.heading ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M4 6l4 4 4-4" />
                  </svg>
                </button>
                {openSection === col.heading && (
                  <ul className="space-y-2 pb-4">
                    {col.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm text-gray-500 hover:text-[#611f69] transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mx-auto mt-8 max-w-7xl border-t border-gray-100 pt-4">
          {/* Mobile/Tablet: Stacked layout */}
          <div className="flex flex-col items-start gap-6 lg:hidden">
            {/* Slack Logo */}
            <SlackLogo className="h-12 w-12" />

            {/* Download Link */}
            <a
              href="#"
              className="text-[#1890d5] text-base font-semibold hover:underline flex items-center gap-2"
            >
              Download Slack
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-700">
                Privacy
              </a>
              <span>·</span>
              <a href="#" className="hover:text-gray-700">
                Terms
              </a>
              <span>·</span>
              <a href="#" className="hover:text-gray-700">
                Cookie Preferences
              </a>
              <span>·</span>
              <a
                href="#"
                className="hover:text-gray-700 flex items-center gap-1"
              >
                Your Privacy Choices
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#1890d5" />
                  <path
                    d="M8 12l2 2 4-4"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-500 leading-relaxed">
              ©2026 Slack Technologies, LLC, a Salesforce company. All rights
              reserved. Various trademarks held by their respective owners.
            </p>
          </div>

          {/* Desktop: Original horizontal layout */}
          <div className="hidden lg:flex flex-row items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
              <a
                href="#"
                className="text-[#611f69] font-semibold hover:underline flex items-center gap-1"
              >
                Download Slack
                <svg
                  className="h-3 w-3"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm-.5 11.5v-5l-2 2-1-1 3.5-3.5 3.5 3.5-1 1-2-2v5h-1z" />
                </svg>
              </a>
              <span>·</span>
              <a href="#" className="hover:text-gray-600">
                Privacy
              </a>
              <span>·</span>
              <a href="#" className="hover:text-gray-600">
                Terms
              </a>
              <span>·</span>
              <a href="#" className="hover:text-gray-600">
                Cookie Preferences
              </a>
              <span>·</span>
              <a href="#" className="hover:text-gray-600">
                Your Privacy Choices
              </a>
            </div>
            <p className="text-sm text-gray-400 text-right">
              ©2026 Slack Technologies, LLC, a Salesforce company. All rights
              reserved.
              <br />
              Various trademarks held by their respective owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
