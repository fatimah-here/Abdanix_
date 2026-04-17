import PageHero from "../components/PageHero";
import Seo from "../components/Seo";
import { AboutSection, CtaSection } from "../components/Sections";
import { seoPages } from "../data/seoData";

export default function AboutPage() {
  return (
    <>
      <Seo {...seoPages.about} />
      <PageHero
        eyebrow="About"
        title="The team behind"
        accent="ABDANIX Solutions"
        description="ABDANIX combines business systems thinking with practical engineering so digital products stay useful, scalable, and commercially aligned."
      />
      <AboutSection />
      <CtaSection
        eyebrow="Build With Us"
        title="Need a team that thinks beyond"
        accent="just code?"
        description="We help teams connect product delivery, operations, branding, and growth into one scalable system."
      />
    </>
  );
}
