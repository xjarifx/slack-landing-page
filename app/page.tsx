import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import AISection from "./components/AISection";
import SectionNav from "./components/SectionNav";
import KnowledgeSection from "./components/KnowledgeSection";
import PeopleSection from "./components/PeopleSection";
import ProcessSection from "./components/ProcessSection";
import PlatformSection from "./components/PlatformSection";
import CustomerStoriesSection from "./components/CustomerStoriesSection";
import StatsSection from "./components/StatsSection";
import SocialProofSection from "./components/SocialProofSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <VideoSection />
      <AISection />
      <SectionNav />
      <KnowledgeSection />
      <PeopleSection />
      <ProcessSection />
      <PlatformSection />
      <CustomerStoriesSection />
      <StatsSection />
      <SocialProofSection />
    </main>
  );
}
