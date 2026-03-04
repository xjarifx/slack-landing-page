import Button from '@/app/components/shared/Button';

const trustedLogos = [
  {
    name: "GM",
    svg: (
      <svg viewBox="0 0 60 40" className="h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="58" height="38" rx="4" stroke="#6b7280" strokeWidth="1.5" fill="none" />
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="16" fontWeight="700" fill="#6b7280" fontFamily="sans-serif">gm</text>
      </svg>
    ),
  },
  {
    name: "OpenAI",
    svg: (
      <span className="text-xl font-semibold tracking-tight text-gray-500" style={{ fontFamily: "sans-serif" }}>
        OpenAI
      </span>
    ),
  },
  {
    name: "Target",
    svg: (
      <svg viewBox="0 0 40 40" className="h-8 w-8" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke="#6b7280" strokeWidth="1.5" fill="none" />
        <circle cx="20" cy="20" r="11" stroke="#6b7280" strokeWidth="1.5" fill="none" />
        <circle cx="20" cy="20" r="4.5" fill="#6b7280" />
      </svg>
    ),
  },
  {
    name: "Paramount",
    svg: (
      <span className="text-xl italic font-semibold text-gray-500" style={{ fontFamily: "Georgia, serif" }}>
        Paramount
      </span>
    ),
  },
  {
    name: "Stripe",
    svg: (
      <span className="text-xl font-semibold text-gray-500" style={{ fontFamily: "sans-serif" }}>
        stripe
      </span>
    ),
  },
  {
    name: "IBM",
    svg: (
      <svg viewBox="0 0 60 24" className="h-7" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="20" fontSize="22" fontWeight="800" fill="#6b7280" fontFamily="monospace" letterSpacing="3">IBM</text>
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center px-6 pt-16 pb-12 bg-white">
      <h1 className="max-w-2xl text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight text-[#1d1c1d]">
        Slack is your team&apos;s collective{" "}
        <span role="img" aria-label="brain">🧠</span>{" "}
        brain.
      </h1>

      <p className="mt-6 max-w-md text-base sm:text-lg text-gray-600">
        Move faster and work smarter, with people, apps, and AI at your side.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button variant="primary">Get Started</Button>
        <Button variant="secondary">Find Your Plan →</Button>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
        <span className="text-xs text-gray-400 font-medium">Trusted by top teams</span>
        {trustedLogos.map(({ name, svg }) => (
          <div key={name} className="flex items-center justify-center opacity-60 hover:opacity-90 transition-opacity">
            {svg}
          </div>
        ))}
      </div>
    </section>
  );
}
