import PageHero from "../components/PageHero";
import Seo from "../components/Seo";
import {
  AnswerGridSection,
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
        title="Custom software projects with"
        accent="real business use"

      />
      <AnswerGridSection
        title="What these projects"
        accent="show"
        description="The portfolio is meant to show the kinds of systems ABDANIX can architect and deliver, not just visual samples without operational depth."
        items={projectAnswerCards}
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
