export default function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4a1260] via-[#611f69] to-[#7a2f7f] px-4">
      <div className="text-center max-w-2xl">
        {/* Animated icon */}
        <div className="mb-8 inline-block">
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse"></div>
            <svg
              className="h-24 w-24 text-white relative"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4">
          Coming Soon
        </h1>
        
        {/* Subheading */}
        <p className="text-xl sm:text-2xl text-white/90 mb-8">
          We're working hard to bring you this feature.
        </p>
        
        {/* Description */}
        <p className="text-base sm:text-lg text-white/70 mb-12 max-w-lg mx-auto">
          This page is currently under construction. Check back soon for exciting updates!
        </p>

        {/* CTA Button */}
        <a
          href="/"
          className="inline-block rounded-lg bg-white px-8 py-4 text-base font-bold uppercase tracking-wider text-[#611f69] hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
        >
          Back to Home
        </a>

        {/* Progress indicator */}
        <div className="mt-16 flex justify-center gap-2">
          <div className="h-2 w-2 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="h-2 w-2 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="h-2 w-2 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}
