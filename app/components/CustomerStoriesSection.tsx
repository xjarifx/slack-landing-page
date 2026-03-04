const stories = [
  {
    id: "openai",
    company: "OpenAI",
    title: "How OpenAI Connects with Customers and Expands ChatGPT with Slack",
    featured: true,
    hasPlay: true,
    bg: "bg-gray-900",
    logo: (
      <div className="flex items-center gap-2">
        {/* OpenAI icon */}
        <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.28 9.28a5.76 5.76 0 00-.52-4.73 5.83 5.83 0 00-6.27-2.8A5.76 5.76 0 0011.2 0a5.83 5.83 0 00-5.56 4.04 5.76 5.76 0 00-3.84 2.8 5.83 5.83 0 00.72 6.84 5.76 5.76 0 00.52 4.73 5.83 5.83 0 006.27 2.8A5.76 5.76 0 0012.8 24a5.83 5.83 0 005.57-4.04 5.76 5.76 0 003.83-2.8 5.83 5.83 0 00-.72-6.84l.8.96zm-10.09 8.4a3.07 3.07 0 01-1.97-.72l.1-.05 3.27-1.89a.54.54 0 00.27-.47v-4.6l1.38.8a.05.05 0 01.03.04v3.82a3.1 3.1 0 01-3.08 3.07zm-6.6-2.84a3.07 3.07 0 01-.37-2.07l.1.06 3.27 1.89a.54.54 0 00.54 0l3.99-2.3v1.6a.05.05 0 01-.02.04L9.56 16a3.1 3.1 0 01-3.97-1.16zm-.86-7.16a3.07 3.07 0 011.6-1.35v3.9a.54.54 0 00.27.47l3.98 2.3-1.38.8a.05.05 0 01-.05 0L5.88 12a3.1 3.1 0 01-.15-4.32zm11.37 2.66l-3.99-2.3 1.38-.8a.05.05 0 01.05 0l3.27 1.88a3.09 3.09 0 01-.48 5.58v-3.9a.54.54 0 00-.23-.46zm1.37-2.08l-.1-.06-3.27-1.89a.54.54 0 00-.54 0l-3.99 2.3v-1.6a.05.05 0 01.02-.04l3.28-1.89a3.09 3.09 0 014.6 3.18zm-8.63 2.84l-1.38-.8a.05.05 0 01-.03-.04V6.94a3.09 3.09 0 015.07-2.37l-.1.05-3.27 1.89a.54.54 0 00-.27.47l-.02 4.59zm.75-1.62l1.78-1.02 1.77 1.02v2.04l-1.77 1.02-1.78-1.02V9.48z"/>
        </svg>
        <span className="text-white font-semibold text-base">OpenAI</span>
      </div>
    ),
  },
  {
    id: "box",
    company: "Box",
    featured: false,
    hasPlay: false,
    bg: "bg-[#1a1a2e]",
    logo: (
      <span className="text-white text-3xl font-bold tracking-tight" style={{ fontFamily: "sans-serif" }}>
        box
      </span>
    ),
  },
  {
    id: "caraway",
    company: "Caraway",
    featured: false,
    hasPlay: false,
    bg: "bg-[#2d1b1b]",
    logo: (
      <span className="text-white text-xl font-light tracking-widest" style={{ fontFamily: "Georgia, serif" }}>
        Caraway
      </span>
    ),
  },
  {
    id: "rivian",
    company: "Rivian",
    featured: false,
    hasPlay: false,
    bg: "bg-[#1c1c1c]",
    logo: (
      <span className="text-white text-xl font-bold tracking-[0.3em]" style={{ fontFamily: "sans-serif" }}>
        RIVIAN
      </span>
    ),
  },
];

export default function CustomerStoriesSection() {
  return (
    <section className="bg-white px-6 pt-16 pb-0">
      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1d1c1d] leading-tight">
          The most innovative companies run<br />their business in Slack.
        </h2>
      </div>

      {/* Cards grid */}
      <div className="mx-auto mt-10 max-w-5xl flex flex-col sm:flex-row gap-3 items-stretch">
        {stories.map((story) =>
          story.featured ? (
            /* Featured card — wider */
            <div
              key={story.id}
              className={`relative flex-[2] min-h-64 rounded-2xl overflow-hidden ${story.bg} cursor-pointer group`}
            >
              {/* Simulated screenshot overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Decorative "screen" lines */}
              <div className="absolute inset-0 flex flex-col gap-1 p-4 opacity-20">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="h-3 rounded bg-white/40" style={{ width: `${60 + (i % 3) * 15}%` }} />
                ))}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-5 z-10">
                <div className="mb-2">{story.logo}</div>
                <p className="text-white text-base font-semibold leading-snug max-w-xs">
                  {story.title}
                </p>
              </div>

              {/* Play button */}
              <div className="absolute bottom-5 right-5 z-10 h-10 w-10 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="h-4 w-4 text-[#1d1c1d] ml-0.5" viewBox="0 0 16 16" fill="currentColor">
                  <polygon points="4,2 14,8 4,14" />
                </svg>
              </div>
            </div>
          ) : (
            /* Regular cards */
            <div
              key={story.id}
              className={`relative flex-1 min-h-48 sm:min-h-0 rounded-2xl overflow-hidden ${story.bg} cursor-pointer group flex items-center justify-center`}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
              <div className="relative z-10">{story.logo}</div>
            </div>
          )
        )}
      </div>

      {/* CTA buttons */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#"
          className="rounded bg-[#611f69] px-8 py-3 text-sm font-bold uppercase tracking-widest text-white hover:bg-[#4a154b] transition-colors"
        >
          Get Started
        </a>
        <a
          href="#"
          className="rounded border border-[#611f69] px-8 py-3 text-sm font-bold uppercase tracking-widest text-[#611f69] hover:bg-[#f4ede4] transition-colors"
        >
          Find Your Plan
        </a>
      </div>

      {/* Bottom dark purple wave */}
      <div className="mt-16 -mx-6">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block">
          <path d="M0,0 C360,100 1080,100 1440,0 L1440,100 L0,100 Z" fill="#4a1260" />
        </svg>
      </div>
    </section>
  );
}
