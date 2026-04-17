import PageHero from "../components/PageHero";
import Seo from "../components/Seo";
import {
  AnswerGridSection,
  CtaSection,
  FaqSection,
  ServicesSection,
  servicesAnswerCards,
  servicesFaqs,
} from "../components/Sections";
import { seoPages } from "../data/seoData";

export default function ServicesPage() {
  return (
    <>
      <Seo {...seoPages.services} />
      <PageHero
        eyebrow="Services"
        title="Digital delivery for"
        accent="growth-focused teams"
        description="ABDANIX provides websites, product builds, CRM workflows, custom software, SEO improvements, and AI integrations shaped around practical business outcomes."
      />
      <AnswerGridSection
        eyebrow="Capabilities"
        title="How ABDANIX"
        accent="supports growth"
        description="The service mix is designed to cover customer-facing experiences, internal operations, and the optimization work that helps a system compound after launch."
        items={servicesAnswerCards}
      />
      <ServicesSection showEyebrow={false} />
      <FaqSection
        title="Service questions"
        accent="answered clearly"
        description="This FAQ gives a concise overview of scope, delivery style, and post-launch support so visitors can understand how the engagement works."
        faqs={servicesFaqs}
      />
      <CtaSection
        title="Need a system built on a"
        accent="MERN-ready foundation?"
        description="We can deliver the frontend experience you liked in the Next.js version while keeping the overall solution aligned with a MERN deployment path."
        secondaryLabel="View Projects"
        secondaryTo="/projects"
      />
    </>
  );
}
