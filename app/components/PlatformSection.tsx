'use client';

import { useState } from 'react';
import SectionHeading from '@/app/components/shared/SectionHeading';
import MobileSectionTitle from '@/app/components/shared/MobileSectionTitle';
import Accordion, { AccordionItem } from '@/app/components/shared/Accordion';
import VideoPlaceholder from '@/app/components/shared/VideoPlaceholder';
import { SPACING } from '@/app/lib/constants';

const items: AccordionItem[] = [
  {
    id: "integrations",
    title: "From Atlassian to Zoom.",
    description:
      "Google Drive. ChatGPT. Vercel. Box. Asana. Workday. You name it, it works in Slack.",
    link: "See all integrations",
  },
  {
    id: "customize",
    title: "Customize Slack to fit your needs.",
    description:
      "Build custom apps, workflows, and bots tailored to how your team actually works — no engineering team required.",
    link: "Learn about customization",
  },
  {
    id: "security",
    title: "Work without worry.",
    description:
      "Enterprise-grade security, compliance, and data residency options so your team can focus on work, not risk.",
    link: "Learn about security",
  },
];

export default function PlatformSection() {
  const [activeItem, setActiveItem] = useState("integrations");

  return (
    <section id="platform" className={`bg-white ${SPACING.sectionPadding}`}>
      <MobileSectionTitle title="Platform" />
      <SectionHeading
        title={
          <>
            Secure. Scaleable. <span className="text-[#611f69]">Silo-free.</span>
          </>
        }
        subtitle={
          <>
            Our flexible, open platform is purpose-built for bringing the best agents
            and AI to every business, and can be tailored to fit however your teams
            work best.
          </>
        }
      />

      <div className={`mx-auto mt-10 ${SPACING.maxWidthContent} flex flex-col md:flex-row gap-6 items-start`}>
        <div className="w-full md:w-96 shrink-0 flex flex-col gap-4">
          <Accordion items={items} defaultActive="integrations" onActiveChange={setActiveItem} />
          
          {/* Vercel testimonial */}
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-[#1d1c1d]" viewBox="0 0 116 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M57.5 0L115 100H0L57.5 0Z" />
              </svg>
              <p className="text-sm font-extrabold tracking-wide text-[#1d1c1d]">Vercel</p>
            </div>
            <p className="text-base italic text-gray-500 leading-relaxed">
              &quot;Work starts in conversation. That&apos;s why we see Slack as the natural
              place to build our agents.&quot;
            </p>
            <p className="text-base text-gray-700">
              <strong>Guillermo Rauch,</strong> CEO, Vercel
            </p>
          </div>
        </div>

        <VideoPlaceholder key={activeItem} className="flex-1 w-full aspect-video" />
      </div>
    </section>
  );
}
