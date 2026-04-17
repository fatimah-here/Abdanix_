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
      <section className="hero">
        <div className="glow one"></div>
        <div className="glow two"></div>
        <div className="container hero-grid">
          <div className="hero-copy reveal show">
            <div className="hero-badge"><span className="dot"></span> Premium IT Solutions</div>
            <h1>Build secure, scalable <span className="accent-text">digital systems.</span></h1>
            <p>We build websites, apps, and business tools that help your company grow faster.</p>
            <div className="hero-metrics">
              <div className="hero-metric"><strong>Enterprise</strong><span>Execution standard</span></div>
              <div className="hero-metric"><strong>MERN</strong><span>Core delivery stack</span></div>
              <div className="hero-metric"><strong>AI</strong><span>Workflow acceleration</span></div>
            </div>
            <div className="hero-actions">
              <Link className="btn-primary" to="/services">Explore Services</Link>
              <Link className="btn-secondary" to="/contact">Book Strategy Call</Link>
            </div>
          </div>
          <div className="hero-panel reveal show">
            <div className="hero-showcase-frame">
              <img
                className="hero-showcase-image"
                src="/assets/images/hero-showcase-reference.png"
                alt="ABDANIX showcase of web and app development work"
              />
            </div>
            <div className="hero-float hero-float-one"></div>
            <div className="hero-float hero-float-two">
              <div className="hero-dot-wrap"><div className="hero-dot"></div></div>
            </div>
          </div>
        </div>
      </section>
      <AnswerGridSection
        eyebrow="What We Build"
        title="What ABDANIX Solutions"
        accent="does"
        description="This section answers the core questions buyers and AI systems usually need first: what the company builds, who it serves, and how projects are delivered."
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
