const metrics = [
  {
    value: "700M",
    label: (
      <>
        Messages sent daily<sup>2</sup>
      </>
    ),
  },
  {
    value: "4M",
    label: (
      <>
        Slack Connect users working directly with external teams each week
        <sup>3</sup>
      </>
    ),
  },
  {
    value: "3M",
    label: (
      <>
        Daily Workflows<sup>3</sup>
      </>
    ),
  },
  {
    value: "1.7M",
    label: (
      <>
        Apps actively used each week<sup>3</sup>
      </>
    ),
  },
];

const g2Badges = [
  { title: "Best Results", color: "#f59e0b" },
  { title: "Easiest To Use", color: "#f59e0b" },
  { title: "Highest User Adoption", color: "#3b82f6" },
  { title: "Leader\nSmall Business", color: "#f59e0b" },
  { title: "Leader\nMid-Market", color: "#f59e0b" },
  { title: "Leader\nEnterprise", color: "#3b82f6" },
];

const resources = [
  {
    type: "Event",
    title: "Ready for the future of AI in Slack?",
    cta: "Watch On-Demand",
    bg: "bg-teal-800",
  },
  {
    type: "Webinar",
    title: "Unlock Agentic Productivity for Every Employee",
    cta: "Watch Now",
    bg: "bg-blue-200",
  },
  {
    type: "Blog",
    title: "Agentforce 2.0: Agentforce Arrives in Slack",
    cta: "Read Now",
    bg: "bg-purple-100",
  },
  {
    type: "Guide",
    title: "10 Ways to Replace Ineffective Meetings with Slack",
    cta: "Read More",
    bg: "bg-green-100",
  },
];

const G2Badge = () => (
  <div className="flex items-center justify-center">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/badge/G2.png" alt="G2 Badge" className="w-full h-auto" />
  </div>
);

export default function SocialProofSection() {
  return (
    <section className="bg-white px-6 py-20">
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1d1c1d]">
          Millions of people love to work in Slack.
        </h2>
      </div>

      {/* Metrics + G2 */}
      <div className="mx-auto mt-12 max-w-4xl flex flex-col md:flex-row gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {/* Left — stacked metrics */}
        <div className="flex-1 flex flex-col gap-6 pr-0 md:pr-12 pb-8 md:pb-0">
          {metrics.map((m, i) => (
            <div key={i} className="flex items-center gap-5">
              <span className="text-4xl font-extrabold text-[#1d1c1d] w-24 shrink-0 flex justify-end">
                {m.value}
              </span>
              <span className="text-sm text-black leading-snug flex justify-start items-center">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Right — G2 */}
        <div className="flex-1 flex flex-col gap-4 pl-0 md:pl-12 pt-8 md:pt-0">
          <p className="text-lg font-bold text-[#1d1c1d]">
            Don&apos;t just take our word for it.
          </p>
          <p className="text-sm text-gray-500">
            Slack is a leader in over 314 G2 market reports.<sup>5</sup>
          </p>
          <div className="grid grid-cols-3 gap-2">
            {g2Badges.map((badge, index) => (
              <G2Badge key={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Deep dive heading */}
      <div className="mx-auto mt-20 max-w-3xl text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1d1c1d]">
          Your Slack deep dive starts here.
        </h2>
      </div>

      {/* Resource cards */}
      <div className="mx-auto mt-8 max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {resources.map((r) => (
          <div
            key={r.title}
            className="flex flex-col rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Thumbnail placeholder */}
            <div className={`h-36 ${r.bg} flex items-center justify-center`}>
              <div className="h-10 w-10 rounded-full bg-white/30 flex items-center justify-center">
                <svg
                  className="h-5 w-5 text-white/70"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
            </div>
            {/* Body */}
            <div className="flex flex-col flex-1 p-4 gap-2">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                {r.type}
              </span>
              <p className="text-sm font-bold text-[#1d1c1d] leading-snug flex-1">
                {r.title}
              </p>
              <a
                href="#"
                className="mt-2 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#611f69] hover:underline"
              >
                {r.cta}
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Footnotes */}
      <div className="mx-auto mt-16 max-w-3xl">
        <p className="text-[10px] text-gray-400 leading-relaxed">
          <sup>1</sup>Based on an internal analysis during the pilot of AI in
          Slack features (channel recap, thread summaries, and AI search
          answers).
          <br />
          <sup>2</sup>FY24 Customer Success Metrics. Base: Total n = 247-1,696;
          Slack internal data.
          <br />
          <sup>3</sup>FY25 Slack internal data, product usage analysis.
          <br />
          <sup>4</sup>FY25 Slack Customer Tracking Survey. Internal survey of
          weekly active Slack users in the US, UK, CA, and AU. Total n = 2,610.
          <br />
          <sup>5</sup>G2 Winter 2026 market reports for work management,
          workflow management, project collaboration software, enterprise
          search, knowledge base, employee Q&amp;A, audio conferencing, business
          instant messaging, unified workspaces and more.
        </p>
      </div>
    </section>
  );
}
