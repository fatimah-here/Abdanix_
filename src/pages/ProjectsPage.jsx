import PageHero from "../components/PageHero";
import Seo from "../components/Seo";
import {
  FaqSection,
  PortfolioShowcaseSection,
  projectAnswerCards,
  projectsFaqs,
} from "../components/Sections";
import { seoPages } from "../data/seoData";

export default function ProjectsPage() {
  return (
    <>
      <Seo {...seoPages.projects} />
      <PageHero
        className="projects-page-hero"
        title="Custom software projects with"
        accent="real business use"
      />
      <PortfolioShowcaseSection introAligned="center" showEyebrow={false} />
      <FaqSection
        title="Project and portfolio"
        accent="questions"
        description="These answers explain what kinds of work the portfolio represents and how similar systems can be scoped for a new business."
        faqs={projectsFaqs}
      />
    </>
  );
}
