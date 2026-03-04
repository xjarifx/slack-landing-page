import SectionHeading from '@/app/components/shared/SectionHeading';
import Accordion, { AccordionItem } from '@/app/components/shared/Accordion';
import VideoPlaceholder from '@/app/components/shared/VideoPlaceholder';
import { SPACING } from '@/app/lib/constants';

const items: AccordionItem[] = [
  {
    id: "automate",
    title: "Anyone can automate in Slack.",
    description:
      "Build powerful automations without writing a single line of code. Slack's workflow builder lets anyone create automations in minutes.",
    link: "Learn about Workflow Builder",
  },
  {
    id: "projects",
    title: "Manage projects and tasks.",
    description:
      "Track work, assign tasks, and hit deadlines — all without leaving Slack. Keep your team moving and accountable.",
    link: "Learn about project management",
  },
  {
    id: "templates",
    title: "A simpler way to get started.",
    description:
      "Project manager's block? Beginning a brief? There's a template for that.",
    link: "See all templates",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className={`bg-white ${SPACING.sectionPadding}`}>
      <SectionHeading
        title={
          <>
            Manage all your work from <span className="text-[#611f69]">one place.</span>
          </>
        }
        subtitle={
          <>
            Automate daily stand-ups, project updates, and approvals so your team
            <br className="hidden sm:block" /> can focus on growth instead of guesswork.
          </>
        }
      />

      <div className={`mx-auto mt-16 ${SPACING.maxWidthContent} flex flex-col md:flex-row gap-10 items-start`}>
        <Accordion items={items} defaultActive="templates" className="w-full md:w-96 shrink-0" />
        <VideoPlaceholder className="flex-1 w-full aspect-video" />
      </div>
    </section>
  );
}
