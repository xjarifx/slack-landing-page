const stats = [
  {
    value: "87%",
    description: (
      <>of users say Slack helps them stay more connected<sup>4</sup></>
    ),
  },
  {
    value: "42",
    description: (
      <>The average number of apps used by teams in Slack<sup>3</sup></>
    ),
  },
  {
    value: "84%",
    description: (
      <>of users say Slack helps them collaborate more efficiently<sup>4</sup></>
    ),
  },
];

export default function StatsSection() {
  return (
    <section className="bg-[#4a1260] px-6 py-20">
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-snug">
          We&apos;re in the business of growing businesses.
        </h2>
      </div>

      {/* Stats row */}
      <div className="mx-auto mt-14 max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center gap-4">
            <span className="text-6xl sm:text-7xl font-extrabold text-[#d972f5] leading-none">
              {stat.value}
            </span>
            <p className="text-sm text-white/80 leading-relaxed max-w-[160px]">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
