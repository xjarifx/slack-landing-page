import Button from '@/app/components/shared/Button';
import Image from 'next/image';

const trustedLogos = [
  { name: "OpenAI", src: "/company_logo/openai.svg" },
  { name: "Target", src: "/company_logo/Target.png" },
  { name: "Paramount", src: "/company_logo/paramount.png" },
  { name: "Stripe", src: "/company_logo/stripe.png" },
  { name: "IBM", src: "/company_logo/ibm.png" },
];

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center px-4 pt-12 pb-8 bg-white">
      <h1 className="max-w-4xl text-6xl sm:text-7xl font-extrabold leading-tight tracking-tight text-[#1d1c1d]">
        Slack is your team&apos;s collective{" "}
        <span role="img" aria-label="brain">🧠</span>{" "}
        brain.
      </h1>

      <p className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-600">
        Move faster and work smarter, with people, apps, and AI at your side.
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
        <Button variant="primary">Get Started</Button>
        <Button variant="secondary">Find Your Plan →</Button>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
        <span className="text-sm text-gray-400 font-medium">Trusted by top teams</span>
        {trustedLogos.map(({ name, src }) => (
          <div key={name} className="flex items-center justify-center opacity-60 hover:opacity-90 transition-opacity h-8">
            <Image 
              src={src} 
              alt={`${name} logo`} 
              width={100} 
              height={32} 
              className="h-8 w-auto object-contain grayscale"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
