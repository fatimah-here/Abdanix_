import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import HeroCards from "../components/HeroCards";

import {
  AboutSection,
  AnswerGridSection,
  CtaSection,
  FaqSection,
  ProcessSection,
  ServicesSection,
  WorkSection,
} from "../components/Sections";
import { seoPages } from "../data/seoData";

export default function HomePage() {
  return (
    <>
      <Seo {...seoPages.home} />
      <section className="hero hero-echo">
        <div className="glow one"></div>
        <div className="glow two"></div>

        <div className="container hero-grid">
          {/* LEFT */}
          <div className="hero-copy reveal show">
            <h1>
              Build Secure, Scalable <br />
              <span className="accent-text">Digital Systems</span>
            </h1>

            <p>
              We build websites, apps and business tools that help your company grow faster.
            </p>

            <div className="hero-actions">
              <Link className="btn-primary" to="/contact">
                Explore Services
              </Link>
              <Link className="btn-secondary" to="/contact">
                Book strategy call
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-visual">
            <HeroCards /> {/* ✅ CORRECT */}
          </div>
        </div>
      </section>
      <AnswerGridSection
        eyebrow="What We Build"
        title="What ABDANIX Solutions"
        accent="does"
        description="This section answers the core questions buyers and AI systems usually need first: what the company builds, who it serves, and how projects are delivered."
        highlight={true}
      />
      <ServicesSection />
      <ProcessSection />

      <FaqSection
        title="FAQs"
        accent="ABDANIX"
        description="These answers summarize the company, its services, delivery model, and contact path in a format that is easier to quote, compare, and understand."
      />
      <CtaSection />
    </>
  );
}
