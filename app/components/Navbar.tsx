"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ChevronDown from "@/app/components/shared/icons/ChevronDown";
import SearchIcon from "@/app/components/shared/icons/SearchIcon";

const navLinks = [
  { label: "Features", hasDropdown: true },
  { label: "Solutions", hasDropdown: true },
  { label: "Enterprise", hasDropdown: false },
  { label: "Resources", hasDropdown: true },
  { label: "Pricing", hasDropdown: false },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full px-0 md:px-4 pt-0 md:pt-4 pb-0 md:pb-2">
      <div
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 bg-white transition-all duration-500 ease-in-out ${
          isScrolled
            ? "md:rounded-full md:shadow-[0_8px_30px_rgb(0,0,0,0.12)] shadow-sm"
            : "md:rounded-3xl md:shadow-[0_4px_20px_rgb(0,0,0,0.08)] shadow-sm"
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex flex-col items-start leading-none shrink-0 min-w-0">
          <div className="flex items-center gap-2">
            <Image 
              src="/company_logo/slack.png" 
              alt="Slack" 
              width={32} 
              height={32}
              className="h-7 w-7 sm:h-8 sm:w-8"
            />
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#1d1c1d]">
              slack
            </span>
          </div>
          <span className="hidden sm:flex ml-10 text-[10px] text-gray-500 tracking-wide items-center gap-1">
            from
            <Image
              src="/company_logo/salesforce.png"
              alt="Salesforce"
              width={50}
              height={12}
              className="h-2.5 w-auto opacity-60"
            />
            Salesforce
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0 ml-8">
          {navLinks.map(({ label, hasDropdown }) => (
            <a
              key={label}
              href="/coming-soon"
              className="flex items-center gap-0.5 px-2 py-2 text-xs font-medium text-[#1d1c1d] hover:text-[#611f69] transition-colors rounded"
            >
              {label}
              {hasDropdown && <ChevronDown />}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden xl:flex items-center gap-4 ml-auto">
          <button
            aria-label="Search"
            className="p-2 text-[#1d1c1d] hover:text-[#611f69] transition-colors cursor-pointer"
          >
            <SearchIcon />
          </button>

          <a
            href="/coming-soon"
            className="text-sm font-medium text-[#1d1c1d] hover:text-[#611f69] transition-colors whitespace-nowrap"
          >
            Sign in
          </a>

          <a
            href="/coming-soon"
            className="rounded border-2 border-[#611f69] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#611f69] hover:bg-[#f4ede4] transition-colors whitespace-nowrap"
          >
            Request a Demo
          </a>

          <a
            href="/coming-soon"
            className="rounded bg-[#611f69] border border-[#611f69] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#4a154b] transition-colors whitespace-nowrap"
          >
            Get Started
          </a>
        </div>

        {/* Tablet Actions (lg to xl) */}
        <div className="hidden lg:flex xl:hidden items-center gap-2 ml-auto">
          <button
            aria-label="Search"
            className="p-2 text-[#1d1c1d] hover:text-[#611f69] transition-colors cursor-pointer"
          >
            <SearchIcon />
          </button>

          <a
            href="/coming-soon"
            className="text-sm font-medium text-[#1d1c1d] hover:text-[#611f69] transition-colors whitespace-nowrap"
          >
            Sign in
          </a>

          <a
            href="/coming-soon"
            className="rounded bg-[#611f69] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#4a154b] transition-colors whitespace-nowrap"
          >
            Get Started
          </a>
        </div>

        {/* Tablet Actions (md to lg) */}
        <div className="hidden md:flex lg:hidden items-center gap-2 ml-auto">
          <button
            aria-label="Search"
            className="p-2 text-[#1d1c1d] hover:text-[#611f69] transition-colors cursor-pointer"
          >
            <SearchIcon />
          </button>

          <a
            href="/coming-soon"
            className="rounded bg-[#611f69] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#4a154b] transition-colors whitespace-nowrap"
          >
            Get Started
          </a>

          <button
            className="p-2 text-[#1d1c1d]"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Actions (below md) */}
        <div className="flex md:hidden items-center gap-2 ml-auto">
          <button
            aria-label="Search"
            className="p-1.5 text-[#1d1c1d] hover:text-[#611f69] transition-colors cursor-pointer"
          >
            <SearchIcon />
          </button>

          <a
            href="/coming-soon"
            className="rounded bg-[#611f69] px-3 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#4a154b] transition-colors whitespace-nowrap"
          >
            Get Started
          </a>

          <button
            className="p-1.5 text-[#1d1c1d]"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      {mobileOpen && (
        <div className="lg:hidden mt-2 rounded-2xl border border-gray-200 bg-white px-6 py-4 flex flex-col gap-2 shadow-lg">
          {navLinks.map(({ label, hasDropdown }) => (
            <a
              key={label}
              href="/coming-soon"
              className="flex items-center justify-between py-2 text-sm font-medium text-[#1d1c1d] hover:text-[#611f69]"
            >
              {label}
              {hasDropdown && <ChevronDown />}
            </a>
          ))}
          <hr className="my-2 border-gray-200" />
          <a
            href="/coming-soon"
            className="py-2 text-sm font-medium text-[#1d1c1d] hover:text-[#611f69]"
          >
            Sign in
          </a>
          <a
            href="/coming-soon"
            className="mt-1 rounded border border-[#611f69] px-4 py-2 text-center text-xs font-bold uppercase tracking-wider text-[#611f69] hover:bg-[#f4ede4]"
          >
            Request a Demo
          </a>
        </div>
      )}
    </header>
  );
}
