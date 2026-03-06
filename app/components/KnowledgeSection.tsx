'use client';

import { useState } from 'react';
import SectionHeading from '@/app/components/shared/SectionHeading';
import MobileSectionTitle from '@/app/components/shared/MobileSectionTitle';
import Accordion, { AccordionItem } from '@/app/components/shared/Accordion';
import VideoPlaceholder from '@/app/components/shared/VideoPlaceholder';
import { SPACING } from '@/app/lib/constants';

const items: AccordionItem[] = [
  {
    id: "slackbot",
    title: "Meet Slackbot: Your personal agent for work.",
    description:
      "Slackbot isn't just any AI. It's AI that knows your team inside and out. It adapts to your style, finds what you need, and helps work get done faster.",
    link: "Learn more about Slackbot",
  },
  {
    id: "search",
    title: "One search to rule them all.",
    description:
      "Search across every message, file, and app in one place. Find what you need in seconds, not hours.",
    link: "Learn more about search",
  },
  {
    id: "crm",
    title: "Bring CRM data to the conversation.",
    description:
      "Connect Salesforce and other CRM tools directly in Slack. See customer data right where your team is already working.",
    link: "Learn more about integrations",
  },
];

export default function KnowledgeSection() {
  const [activeItem, setActiveItem] = useState("slackbot");

  return (
    <section id="knowledge" className={`bg-white ${SPACING.sectionPadding}`}>
      <MobileSectionTitle title="Knowledge" />
      <SectionHeading
        title={
          <>
            Give everyone <span className="text-[#611f69]">instant context.</span>
          </>
        }
        subtitle={
          <>
            Get access to every file, decision, and conversation, so you can build on
            <br className="hidden sm:block" /> past work instead of recreating it.
          </>
        }
      />

      <div className={`mx-auto mt-10 ${SPACING.maxWidthContent} flex flex-col md:flex-row gap-6 items-start`}>
        <Accordion items={items} defaultActive="slackbot" className="w-full md:w-96 shrink-0" onActiveChange={setActiveItem} />
        <VideoPlaceholder key={activeItem} className="flex-1 w-full aspect-video" />
      </div>
    </section>
  );
}
