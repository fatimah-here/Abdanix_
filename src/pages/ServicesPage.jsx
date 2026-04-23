import PageHero from "../components/PageHero";
import Seo from "../components/Seo";
import {
  AnswerGridSection,
  CtaSection,
  FaqSection,
  ServicesSection,
  servicesAnswerCards,
} from "../components/Sections";
import { seoPages } from "../data/seoData";

export default function ServicesPage() {
  return (
    <>
      <Seo {...seoPages.services} />
      <PageHero
       className="services-page-hero"
        title="Digital delivery for"
        accent="growth-focused teams"
      />
      <AnswerGridSection
        title="How ABDANIX"
        accent="supports growth"
        description="The service mix is designed to cover customer-facing experiences, internal operations, and the optimization work that helps a system compound after launch."
        items={servicesAnswerCards}
        variant="services"
      />
      <ServicesSection showEyebrow={false} />
     
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
