import SectionHeading from '@/app/components/shared/SectionHeading';
import Accordion, { AccordionItem } from '@/app/components/shared/Accordion';
import VideoPlaceholder from '@/app/components/shared/VideoPlaceholder';
import { SPACING } from '@/app/lib/constants';

const items: AccordionItem[] = [
  {
    id: "channel",
    title: "It all starts with a channel.",
    description:
      "Channels are the foundation of Slack. They keep conversations organized, searchable, and open to anyone who needs to be included.",
    link: "Learn about channels",
  },
  {
    id: "huddles",
    title: "When talking is easier than typing...",
    description:
      "Start a huddle for a quick voice or video chat right inside Slack. No links, no scheduling — just talk.",
    link: "Learn about huddles",
  },
  {
    id: "connect",
    title: "Bring conversations out of the inbox.",
    description:
      "Slack Connect lets you chat with clients and vendors in real-time, right from Slack. Email could never.",
    link: "Learn about Slack Connect",
  },
];

export default function PeopleSection() {
  return (
    <section id="people" className={`bg-white ${SPACING.sectionPadding}`}>
      <SectionHeading
        title={
          <>
            Let your people <span className="text-[#611f69]">connect like people.</span>
          </>
        }
        subtitle={
          <>
            Slack&apos;s conversational UI makes collaborating more approachable,
            <br className="hidden sm:block" /> whether you&apos;re working with a colleague or an agent.
          </>
        }
      />

      <div className={`mx-auto mt-10 ${SPACING.maxWidthContent} flex flex-col md:flex-row gap-6 items-start`}>
        <Accordion items={items} defaultActive="connect" className="w-full md:w-96 shrink-0" />
        <VideoPlaceholder className="flex-1 w-full aspect-video" />
      </div>
    </section>
  );
}
