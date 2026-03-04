"use client";

import { useState, useEffect } from "react";

const SlackLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 54 54"
    className="h-8 w-8"
    aria-label="Slack logo"
  >
    {/* Green */}
    <path
      d="M19.712 28.97a3.56 3.56 0 01-3.554 3.554 3.56 3.56 0 01-3.554-3.554 3.56 3.56 0 013.554-3.554h3.554v3.554z"
      fill="#36C5F0"
    />
    <path
      d="M21.505 28.97a3.56 3.56 0 013.554-3.554 3.56 3.56 0 013.554 3.554v8.901a3.56 3.56 0 01-3.554 3.554 3.56 3.56 0 01-3.554-3.554V28.97z"
      fill="#36C5F0"
    />
    {/* Blue */}
    <path
      d="M25.059 19.712a3.56 3.56 0 01-3.554-3.554 3.56 3.56 0 013.554-3.554 3.56 3.56 0 013.554 3.554v3.554h-3.554z"
      fill="#2EB67D"
    />
    <path
      d="M25.059 21.505a3.56 3.56 0 013.554 3.554 3.56 3.56 0 01-3.554 3.554h-8.901a3.56 3.56 0 01-3.554-3.554 3.56 3.56 0 013.554-3.554h8.901z"
      fill="#2EB67D"
    />
    {/* Yellow */}
    <path
      d="M34.317 25.059a3.56 3.56 0 013.554 3.554 3.56 3.56 0 01-3.554 3.554 3.56 3.56 0 01-3.554-3.554v-3.554h3.554z"
      fill="#ECB22E"
    />
    <path
      d="M32.524 25.059a3.56 3.56 0 01-3.554-3.554 3.56 3.56 0 013.554-3.554h8.901a3.56 3.56 0 013.554 3.554 3.56 3.56 0 01-3.554 3.554h-8.901z"
      fill="#ECB22E"
    />
    {/* Red */}
    <path
      d="M28.970 34.317a3.56 3.56 0 013.554 3.554 3.56 3.56 0 01-3.554 3.554 3.56 3.56 0 01-3.554-3.554v-3.554h3.554z"
      fill="#E01E5A"
    />
    <path
      d="M28.970 32.524a3.56 3.56 0 013.554 3.554v8.901a3.56 3.56 0 01-3.554 3.554 3.56 3.56 0 01-3.554-3.554v-8.901a3.56 3.56 0 013.554-3.554z"
      fill="#E01E5A"
    />
  </svg>
);

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
    />
  </svg>
);

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
    <header className="sticky top-0 z-50 w-full px-4 pt-4 transition-all duration-300">
      <div
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between px-6 bg-white border transition-all duration-300 ${
          isScrolled
            ? "rounded-full shadow-lg border-gray-200"
            : "rounded-2xl border-transparent"
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex flex-col items-start leading-none shrink-0">
          <div className="flex items-center gap-2">
            <SlackLogo />
            <span className="text-2xl font-bold tracking-tight text-[#1d1c1d]">
              slack
            </span>
          </div>
          <span className="ml-10 text-[10px] text-gray-500 tracking-wide">
            from Salesforce
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 ml-8">
          {navLinks.map(({ label, hasDropdown }) => (
            <a
              key={label}
              href="#"
              className="flex items-center gap-0.5 px-3 py-2 text-sm font-medium text-[#1d1c1d] hover:text-[#611f69] transition-colors rounded"
            >
              {label}
              {hasDropdown && <ChevronDown />}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4 ml-auto">
          <button
            aria-label="Search"
            className="p-2 text-[#1d1c1d] hover:text-[#611f69] transition-colors cursor-pointer"
          >
            <SearchIcon />
          </button>

          <a
            href="#"
            className="text-sm font-medium text-[#1d1c1d] hover:text-[#611f69] transition-colors"
          >
            Sign in
          </a>

          <a
            href="#"
            className="rounded border border-[#611f69] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#611f69] hover:bg-[#f4ede4] transition-colors"
          >
            Request a Demo
          </a>

          <a
            href="#"
            className="rounded bg-[#611f69] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#4a154b] transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-[#1d1c1d]"
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden mt-2 rounded-2xl border border-gray-200 bg-white px-6 py-4 flex flex-col gap-2 shadow-lg">
          {navLinks.map(({ label, hasDropdown }) => (
            <a
              key={label}
              href="#"
              className="flex items-center justify-between py-2 text-sm font-medium text-[#1d1c1d] hover:text-[#611f69]"
            >
              {label}
              {hasDropdown && <ChevronDown />}
            </a>
          ))}
          <hr className="my-2 border-gray-200" />
          <a href="#" className="py-2 text-sm font-medium text-[#1d1c1d] hover:text-[#611f69]">
            Sign in
          </a>
          <a
            href="#"
            className="mt-1 rounded border border-[#611f69] px-4 py-2 text-center text-xs font-bold uppercase tracking-wider text-[#611f69] hover:bg-[#f4ede4]"
          >
            Request a Demo
          </a>
          <a
            href="#"
            className="mt-1 rounded bg-[#611f69] px-4 py-2 text-center text-xs font-bold uppercase tracking-wider text-white hover:bg-[#4a154b]"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
