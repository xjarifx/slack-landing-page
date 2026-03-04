const footerColumns = [
  {
    heading: "Product",
    links: ["Watch Demo", "Pricing", "Paid vs. Free", "Accessibility", "Featured Releases", "Changelog", "Status"],
  },
  {
    heading: "Features",
    links: ["Channels", "Slack Connect", "Workflow Builder", "Messaging", "Huddles", "Canvas", "Lists", "Clips", "Apps & Integrations", "File Sharing", "Slack AI", "Agentforce", "Enterprise Search", "Security", "Enterprise Key Management", "Slack Atlas", "See all features"],
  },
  {
    heading: "Why Slack?",
    links: ["Slack vs. Email", "Slack vs. Teams", "Enterprise", "Small Business", "Productivity", "Task Management", "Scale", "Trust"],
  },
  {
    heading: "Solutions",
    links: ["Engineering", "IT", "Customer Service", "Sales", "Project Management", "Marketing", "Security", "Manufacturing, Auto & Energy", "Technology", "Media", "Financial Services", "Retail", "Public Sector", "Education", "Health & Life Sciences", "See all solutions"],
  },
  {
    heading: "Resources",
    links: ["Help Center", "What's New", "Resources Library", "Slack Blog", "Community", "Customer Stories", "Events", "Developers", "Partners", "Partner Offers", "Slack Marketplace", "Slack Certified"],
  },
  {
    heading: "Company",
    links: ["About Us", "News", "Media Kit", "Brand Center", "Careers", "Swag Store", "Engineering Blog", "Design Blog", "Contact Us"],
  },
];

const SlackLogoMark = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54" className="h-10 w-10">
    <path d="M19.712 28.97a3.56 3.56 0 01-3.554 3.554 3.56 3.56 0 01-3.554-3.554 3.56 3.56 0 013.554-3.554h3.554v3.554z" fill="#36C5F0"/>
    <path d="M21.505 28.97a3.56 3.56 0 013.554-3.554 3.56 3.56 0 013.554 3.554v8.901a3.56 3.56 0 01-3.554 3.554 3.56 3.56 0 01-3.554-3.554V28.97z" fill="#36C5F0"/>
    <path d="M25.059 19.712a3.56 3.56 0 01-3.554-3.554 3.56 3.56 0 013.554-3.554 3.56 3.56 0 013.554 3.554v3.554h-3.554z" fill="#2EB67D"/>
    <path d="M25.059 21.505a3.56 3.56 0 013.554 3.554 3.56 3.56 0 01-3.554 3.554h-8.901a3.56 3.56 0 01-3.554-3.554 3.56 3.56 0 013.554-3.554h8.901z" fill="#2EB67D"/>
    <path d="M34.317 25.059a3.56 3.56 0 013.554 3.554 3.56 3.56 0 01-3.554 3.554 3.56 3.56 0 01-3.554-3.554v-3.554h3.554z" fill="#ECB22E"/>
    <path d="M32.524 25.059a3.56 3.56 0 01-3.554-3.554 3.56 3.56 0 013.554-3.554h8.901a3.56 3.56 0 013.554 3.554 3.56 3.56 0 01-3.554 3.554h-8.901z" fill="#ECB22E"/>
    <path d="M28.970 34.317a3.56 3.56 0 013.554 3.554 3.56 3.56 0 01-3.554 3.554 3.56 3.56 0 01-3.554-3.554v-3.554h3.554z" fill="#E01E5A"/>
    <path d="M28.970 32.524a3.56 3.56 0 013.554 3.554v8.901a3.56 3.56 0 01-3.554 3.554 3.56 3.56 0 01-3.554-3.554v-8.901a3.56 3.56 0 013.554-3.554z" fill="#E01E5A"/>
  </svg>
);

export default function Footer() {
  return (
    <footer>
      {/* Pre-footer CTA */}
      <div className="relative bg-[#4a1260] px-6 pt-16 pb-0 text-center overflow-hidden">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          See all you can accomplish in Slack.
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-4 pb-16">
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
        <div className="relative -mx-6 h-20">
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
      </div>

      {/* Main footer */}
      <div className="bg-white px-6 pt-6 pb-10">
        {/* Region + Social */}
        <div className="mx-auto max-w-6xl flex items-center justify-between py-4 border-b border-gray-100 mb-10">
          <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-700">
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
            </svg>
            Change Region
            <svg className="h-3 w-3" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4 6l4 4 4-4"/>
            </svg>
          </button>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-gray-600">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-gray-600">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-gray-600">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            {/* X / Twitter */}
            <a href="#" aria-label="X" className="text-gray-400 hover:text-gray-600">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            {/* YouTube */}
            <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-gray-600">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
            </a>
            {/* TikTok */}
            <a href="#" aria-label="TikTok" className="text-gray-400 hover:text-gray-600">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.53V6.77a4.85 4.85 0 01-1.01-.08z"/></svg>
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="mx-auto max-w-6xl flex flex-wrap gap-8">
          {/* Logo */}
          <div className="w-16 shrink-0 pt-1">
            <SlackLogoMark />
          </div>

          {/* Columns */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#1d1c1d]">
                  {col.heading}
                </p>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-xs text-gray-500 hover:text-[#611f69] transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mx-auto mt-12 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-gray-100 pt-6">
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
            <a href="#" className="text-[#611f69] font-semibold hover:underline flex items-center gap-1">
              Download Slack
              <svg className="h-3 w-3" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0a8 8 0 100 16A8 8 0 008 0zm-.5 11.5v-5l-2 2-1-1 3.5-3.5 3.5 3.5-1 1-2-2v5h-1z"/></svg>
            </a>
            <span>·</span>
            <a href="#" className="hover:text-gray-600">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-600">Terms</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-600">Cookie Preferences</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-600">Your Privacy Choices</a>
          </div>
          <p className="text-xs text-gray-400 text-center sm:text-right">
            ©2026 Slack Technologies, LLC, a Salesforce company. All rights reserved.<br />
            Various trademarks held by their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
