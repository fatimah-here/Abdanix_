import { Link } from "react-router-dom";
import Seo from "../components/Seo";
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
          {/* LEFT CONTENT */}
          <div className="hero-copy reveal show">
            

            <h1>
              Unlock the full potential <br />
              of your <span className="accent-text">Salesforce</span>
            </h1>

            <p>
              Unlock Salesforce to streamline operations, enhance customer
              relationships, and drive growth across your business.
            </p>

            <div className="hero-actions">
              <Link className="btn-primary" to="/contact">
                Schedule a free call
              </Link>
            </div>

            {/* Rating row */}
            <div className="hero-rating">
              <span>Salesforce Rating ⭐⭐⭐⭐⭐</span>
              <span>Certified Experts 👨‍💻👩‍💻</span>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="hero-visual">
            <div className="hero-circle"></div>

            <div className="hero-card">
              <span>Intelligent case routing</span>
            </div>
          </div>
        </div>
      </section>
      <AnswerGridSection
        eyebrow="What We Build"
        title="What ABDANIX Solutions"
        accent="does"
        description="This section answers the core questions buyers and AI systems usually need first: what the company builds, who it serves, and how projects are delivered."
        highlight : true
      />
      <ServicesSection showEyebrow={false} />
      <WorkSection />
      <ProcessSection />

      <FaqSection
        title="Common questions about"
        accent="ABDANIX"
        description="These answers summarize the company, its services, delivery model, and contact path in a format that is easier to quote, compare, and understand."
      />
      <CtaSection />
    </>
  );
}
