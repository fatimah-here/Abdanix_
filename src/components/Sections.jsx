import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  aboutPoints,
  contactFaqs,
  homeAnswerCards,
  homeFaqs,
  portfolioFilters,
  projectAnswerCards,
  projects,
  projectsFaqs,
  services,
  servicesAnswerCards,
  servicesFaqs,
  steps,
  technologies,
  team,
} from "../data/siteData";

function PortfolioIcon({ type }) {
  const icons = {
    crm: (
      <path d="M6 8.5h12M6 12h12M6 15.5h7M5 4.5h14a1.5 1.5 0 0 1 1.5 1.5v12A1.5 1.5 0 0 1 19 19.5H5A1.5 1.5 0 0 1 3.5 18V6A1.5 1.5 0 0 1 5 4.5Z" />
    ),
    support: (
      <path d="M7.5 18.5h9M12 5.5a6.5 6.5 0 0 0-6.5 6.5v1.5a2 2 0 0 0 2 2h1.5v-4H5.7M16.5 15.5H18a2 2 0 0 0 2-2V12a6.5 6.5 0 0 0-6.5-6.5" />
    ),
    testing: (
      <path d="M9 6.5h6M8 19.5h8M8.5 4.5h7A1.5 1.5 0 0 1 17 6v1.4a3 3 0 0 1-.88 2.12L14.5 11l1.62 1.48A3 3 0 0 1 17 14.6V18a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 18v-3.4a3 3 0 0 1 .88-2.12L9.5 11 7.88 9.52A3 3 0 0 1 7 7.4V6A1.5 1.5 0 0 1 8.5 4.5Z" />
    ),
    ai: (
      <path d="M12 4.5v3m0 9v3m7.5-7.5h-3m-9 0h-3m11.49 5.49-2.12-2.12m-3.74-7.74L7.01 6.99m8.48 0-2.12 2.12m-3.74 7.74-2.62 2.64M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z" />
    ),
    social: (
      <path d="M8.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM4.5 18c.9-2.1 2.6-3 4-3s3.1.9 4 3m-1 0c.8-1.6 2.1-2.5 4-2.5 1.5 0 2.9.7 4 2.5" />
    ),
    services: (
      <path d="m8.2 6.5 1.1-2h5.4l1.1 2H19a1.5 1.5 0 0 1 1.5 1.5V18A1.5 1.5 0 0 1 19 19.5H5A1.5 1.5 0 0 1 3.5 18V8A1.5 1.5 0 0 1 5 6.5h3.2ZM12 10v6m-3-3h6" />
    ),
    transport: (
      <path d="M7 16.5h10M8 16.5v1a1.5 1.5 0 0 1-3 0v-4l1.2-5a2 2 0 0 1 1.94-1.5h7.72a2 2 0 0 1 1.94 1.5l1.2 5v4a1.5 1.5 0 0 1-3 0v-1m-8-4h8M8 10.5h8" />
    ),
    taxi: (
      <path d="M6.5 16.5h11M7.5 16.5v1a1.5 1.5 0 0 1-3 0V14l1-4.3A2 2 0 0 1 7.45 8h9.1a2 2 0 0 1 1.95 1.7l1 4.3v3.5a1.5 1.5 0 0 1-3 0v-1M9 12h6M8 6.5h8" />
    ),
    web: (
      <path d="M4.5 7.5h15m-13 0a10 10 0 0 0 0 9m11-9a10 10 0 0 1 0 9M12 7.5a14.5 14.5 0 0 1 0 9m-7.5 0h15M12 4.5c4.14 0 7.5 3.36 7.5 7.5s-3.36 7.5-7.5 7.5S4.5 16.14 4.5 12 7.86 4.5 12 4.5Z" />
    ),
  };

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[type] || icons.web}
    </svg>
  );
}

function TechnologyIcon({ type }) {
  const icons = {
    mern: (
      <>
        <path d="M4.5 17.5 9 7.5l3 5 3-5 4.5 10" />
        <path d="M8 17.5h8" />
      </>
    ),
    flutter: (
      <>
        <path d="M9 4.5 15 10.5 11 14.5 7 10.5 13 4.5" />
        <path d="M11 14.5 14.5 18h-4l-2.5-2.5" />
      </>
    ),
    python: (
      <>
        <path d="M8 9.5c0-2 1.5-3.5 3.5-3.5H15v4h-4a3 3 0 0 0-3 3v1.5H5v-5Z" />
        <path d="M16 14.5c0 2-1.5 3.5-3.5 3.5H9v-4h4a3 3 0 0 0 3-3V9.5H19v5Z" />
      </>
    ),
    mongodb: (
      <>
        <path d="M12 4.5c2.6 2.4 4 5 4 8 0 3.2-1.6 5.5-4 7-2.4-1.5-4-3.8-4-7 0-3 1.4-5.6 4-8Z" />
        <path d="M12 6.5v10" />
      </>
    ),
    react: (
      <>
        <circle cx="12" cy="12" r="1.4" />
        <ellipse cx="12" cy="12" rx="7.5" ry="3.2" />
        <ellipse cx="12" cy="12" rx="7.5" ry="3.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="7.5" ry="3.2" transform="rotate(120 12 12)" />
      </>
    ),
    next: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M9 15V9l6 6V9" />
      </>
    ),
    express: (
      <>
        <path d="M5 8.5h14" />
        <path d="M5 12h10" />
        <path d="M5 15.5h14" />
      </>
    ),
    node: (
      <>
        <path d="M12 4.5 18 8v8l-6 3.5L6 16V8l6-3.5Z" />
        <path d="M10 10v4l4-2-4-2Z" />
      </>
    ),
    django: (
      <>
        <path d="M7 7.5h4.5V18H7" />
        <path d="M13.5 10.5h3.5v5.2c0 1.7-1.2 2.8-3.1 2.8h-1.4" />
      </>
    ),
    openai: (
      <>
        <path d="M12 4.8a3.5 3.5 0 0 1 3.2 2l2.1 1.2a3.5 3.5 0 0 1 .4 5.8 3.5 3.5 0 0 1-1.1 4.2 3.5 3.5 0 0 1-5 .3 3.5 3.5 0 0 1-4.4-1.4 3.5 3.5 0 0 1-1.6-4.7A3.5 3.5 0 0 1 8 6.6a3.5 3.5 0 0 1 4-.8Z" />
      </>
    ),
    firebase: (
      <>
        <path d="M9 18 12 5l3 5-2 8-4-8Z" />
        <path d="M7.5 18h9" />
      </>
    ),
    postgres: (
      <>
        <ellipse cx="12" cy="7" rx="5.5" ry="2.5" />
        <path d="M6.5 7v6c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5V7" />
        <path d="M6.5 10c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5" />
      </>
    ),
    docker: (
      <>
        <rect x="5" y="10" width="3" height="3" />
        <rect x="8.5" y="10" width="3" height="3" />
        <rect x="12" y="10" width="3" height="3" />
        <rect x="8.5" y="6.5" width="3" height="3" />
        <path d="M4.5 15.5h11.5c1.7 0 3-.9 3.5-2.5" />
      </>
    ),
    aws: (
      <>
        <path d="M5 15.5c4 2 10 2 14 0" />
        <path d="M8 11.5 10.5 8l2.5 3.5L15.5 8 18 11.5" />
      </>
    ),
    vercel: (
      <>
        <path d="M12 5.5 18.5 17h-13L12 5.5Z" />
      </>
    ),
    render: (
      <>
        <path d="M6 16.5h12" />
        <path d="M6 12h8" />
        <circle cx="16.5" cy="11.5" r="2.5" />
      </>
    ),
    gpt: (
      <>
        <path d="M12 5.5a3.2 3.2 0 0 1 2.9 1.8 3.2 3.2 0 0 1 3.2 5 3.2 3.2 0 0 1-1 4 3.2 3.2 0 0 1-4.5.3 3.2 3.2 0 0 1-4.1-1.2 3.2 3.2 0 0 1-1.4-4.3A3.2 3.2 0 0 1 9 6.3a3.2 3.2 0 0 1 3-.8Z" />
      </>
    ),
    claude: (
      <>
        <path d="M12 4.5 13.8 9l4.7.4-3.6 2.9 1.2 4.6L12 14.4 7.9 17l1.2-4.7-3.6-2.8 4.6-.4L12 4.5Z" />
      </>
    ),
    antigravity: (
      <>
        <circle cx="12" cy="12" r="2" />
        <ellipse cx="12" cy="12" rx="8" ry="3.5" />
        <path d="M12 4v3M12 17v3" />
      </>
    ),
    automation: (
      <>
        <path d="M12 6v3m0 6v3M6 12H3m18 0h-3m-1.8 4.2-2.1-2.1m-4.2-4.2L7.8 7.8m8.4 0-2.1 2.1m-4.2 4.2-2.1 2.1" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    tailwind: (
      <>
        <path d="M7 10.5c1.1-1.7 2.2-2.5 3.4-2.5 1.8 0 2.4 1.3 3.5 1.3.8 0 1.5-.4 2.1-1.3-1.1 1.7-2.2 2.5-3.4 2.5-1.8 0-2.4-1.3-3.5-1.3-.8 0-1.5.4-2.1 1.3Z" />
        <path d="M5 15.5c1.1-1.7 2.2-2.5 3.4-2.5 1.8 0 2.4 1.3 3.5 1.3.8 0 1.5-.4 2.1-1.3-1.1 1.7-2.2 2.5-3.4 2.5-1.8 0-2.4-1.3-3.5-1.3-.8 0-1.5.4-2.1 1.3Z" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[type] || icons.mern}
    </svg>
  );
}

const technologyLayouts = [
  { x: "10%", y: "18%", rotate: "-2deg", driftX: "12px", driftY: "-10px", duration: "8.4s", delay: "0s" },
  { x: "24%", y: "14%", rotate: "1deg", driftX: "-10px", driftY: "12px", duration: "9.2s", delay: ".5s" },
  { x: "38%", y: "18%", rotate: "-1deg", driftX: "10px", driftY: "-12px", duration: "9.8s", delay: "1.1s" },
  { x: "52%", y: "14%", rotate: "2deg", driftX: "-12px", driftY: "10px", duration: "8.9s", delay: ".2s" },
  { x: "66%", y: "18%", rotate: "-1deg", driftX: "12px", driftY: "-10px", duration: "9.5s", delay: "1.4s" },
  { x: "80%", y: "14%", rotate: "1deg", driftX: "-10px", driftY: "11px", duration: "10.1s", delay: ".8s" },
  { x: "16%", y: "36%", rotate: "1deg", driftX: "-12px", driftY: "10px", duration: "8.7s", delay: "1.6s" },
  { x: "30%", y: "32%", rotate: "-2deg", driftX: "10px", driftY: "-12px", duration: "9.3s", delay: ".4s" },
  { x: "44%", y: "36%", rotate: "2deg", driftX: "-10px", driftY: "12px", duration: "10.2s", delay: "1.8s" },
  { x: "60%", y: "31%", rotate: "-1deg", driftX: "12px", driftY: "-10px", duration: "8.8s", delay: ".9s" },
  { x: "76%", y: "35%", rotate: "1deg", driftX: "-12px", driftY: "11px", duration: "9.7s", delay: ".3s" },
  { x: "9%", y: "56%", rotate: "-2deg", driftX: "10px", driftY: "12px", duration: "8.6s", delay: "1.2s" },
  { x: "25%", y: "52%", rotate: "1deg", driftX: "-10px", driftY: "-12px", duration: "9.9s", delay: ".7s" },
  { x: "41%", y: "56%", rotate: "-1deg", driftX: "12px", driftY: "10px", duration: "8.5s", delay: "1.5s" },
  { x: "57%", y: "51%", rotate: "2deg", driftX: "-12px", driftY: "-10px", duration: "9.4s", delay: ".1s" },
  { x: "72%", y: "55%", rotate: "-1deg", driftX: "10px", driftY: "11px", duration: "10.3s", delay: "1.9s" },
  { x: "85%", y: "52%", rotate: "2deg", driftX: "-10px", driftY: "-12px", duration: "8.9s", delay: ".6s" },
  { x: "18%", y: "76%", rotate: "-1deg", driftX: "12px", driftY: "-10px", duration: "9.1s", delay: "1.3s" },
  { x: "34%", y: "72%", rotate: "2deg", driftX: "-10px", driftY: "12px", duration: "10.4s", delay: ".8s" },
  { x: "50%", y: "76%", rotate: "-2deg", driftX: "10px", driftY: "-11px", duration: "8.8s", delay: "1.7s" },
  { x: "67%", y: "72%", rotate: "1deg", driftX: "-12px", driftY: "10px", duration: "9.6s", delay: ".4s" },
];

function PortfolioSectionInner({ introAligned = "center", showEyebrow = true }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }
    return projects.filter((project) => project.group === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <div className={`section-heading${introAligned === "center" ? " center" : " section-heading-left"} reveal show`}>
        {showEyebrow ? (
          <div className="eyebrow"><span className="dot"></span> Previous Work</div>
        ) : null}
        <h2>Projects That Reflect <span className="accent-text">Real Business Impact</span></h2>
        <p>
          We build scalable web platforms, AI-powered systems, and mobile
          applications designed for real-world usage, performance, and growth.
        </p>
      </div>

      <div className="portfolio-filters reveal show" role="tablist" aria-label="Project filters">
        {portfolioFilters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            className={`portfolio-filter${activeFilter === filter.id ? " active" : ""}`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="portfolio-grid reveal show">
        {visibleProjects.map((project) => (
          <article
            className={`portfolio-card${project.featured ? " featured" : ""}`}
            key={project.title}
            id={`project-${project.id}`}
          >
            <div className="portfolio-card-glow"></div>
            <div className="portfolio-media">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="portfolio-card-top">
              <div className="portfolio-icon-wrap">
                <PortfolioIcon type={project.icon} />
              </div>
              <span className="portfolio-index">Project {project.id}</span>
            </div>

            <div className="portfolio-copy">
              <span className="portfolio-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

            <div className="portfolio-impact">
              <span className="portfolio-impact-label">Project Focus</span>
              <strong>{project.impact}</strong>
            </div>

            <ul className="portfolio-feature-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <div className="portfolio-footer">
              <div className="tag-list portfolio-tags">
                {project.tags.map((tag) => (
                  <span className="tag portfolio-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="portfolio-actions">
                {project.links.map((link) => (
                  link.internal ? (
                    <Link className="portfolio-link secondary" key={link.label} to={link.href}>
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      className="portfolio-link"
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  )
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export function AnswerGridSection({
  eyebrow = "",
  title = "What ABDANIX",
  accent = "delivers",
  description = "",
  items = homeAnswerCards,
}) {
  return (
    <section className="section editorial-section answer-section">
      <div className="container">
        <div className="section-heading center reveal show">
          <h2>{title} <span className="accent-text">{accent}</span></h2>
          <p>{description}</p>
        </div>

        <div className="grid answer-grid">
          {items.map((item) => (
            <article className="answer-card reveal show" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection({
  eyebrow = "FAQ",
  title = "Questions clients ask",
  accent = "before starting",
  description = "Straightforward answers help visitors qualify themselves faster and make the service offering easier to cite and summarize.",
  faqs = homeFaqs,
}) {
  return (
    <section className="section editorial-section faq-section">
      <div className="container">
        <div className="section-heading center reveal show">
          <div className="eyebrow"><span className="dot"></span>{eyebrow}</div>
          <h2>{title} <span className="accent-text">{accent}</span></h2>
          <p>{description}</p>
        </div>

        <div className="faq-list reveal show">
          {faqs.map((faq, index) => (
            <details className="faq-item" key={faq.question} open={index === 0}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesSection({ compact = false, showEyebrow = true }) {
  const items = compact ? services : services;
  return (
    <section className="section editorial-section" id="services">
      <div className="container">
        <div className="section-heading section-heading-left services-heading reveal show">
          {showEyebrow ? (
            <div className="eyebrow"><span className="dot"></span> Core Services</div>
          ) : null}
          <h2>Services Built for <span className="accent-text">Business Growth</span></h2>
          <p>From technical execution to growth strategy, ABDANIX provides integrated digital services that help brands launch, optimize and scale faster.</p>
        </div>
        <div className="grid services-grid">
          {items.map((service) => (
            <article
              className="card service-card reveal show"
              key={service.title}
              id={`service-${service.code.toLowerCase()}`}
            >
              <div className="icon-badge">{service.code}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WorkSection() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 4);

  return (null);
}

export function PortfolioShowcaseSection({ introAligned = "left", showEyebrow = true }) {
  return (
    <section className="section editorial-section">
      <div className="container">
        <PortfolioSectionInner introAligned={introAligned} showEyebrow={showEyebrow} />
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="section editorial-section process-section">
      <div className="container framework">
        <div className="section-heading center reveal show">
          <div className="eyebrow"><span className="dot"></span> Delivery Framework</div>
          <h2>How We <span className="accent-text">Deliver</span></h2>
          <p>A structured delivery model that keeps strategy, architecture, execution, and optimization aligned from day one.</p>
        </div>
        <div className="framework-line"></div>
        <div className="grid steps-grid">
          {steps.map((step) => (
            <article className="step-card reveal show" key={step.number}>
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="tech-heading reveal show">
          <h3>Technologies</h3>
          <p>
            We build with proven platforms and modern tooling to deliver
            reliable products, clean integrations and room to scale.
          </p>
        </div>

        <div className="tech-stage reveal show">
          {technologies.map((technology, index) => {
            const layout = technologyLayouts[index % technologyLayouts.length];
            return (
              <div
                className="tech-float-node"
                key={technology.label}
                style={{
                  "--tech-x": layout.x,
                  "--tech-y": layout.y,
                  "--tech-rotate": layout.rotate,
                  "--tech-drift-x": layout.driftX,
                  "--tech-drift-y": layout.driftY,
                  "--tech-duration": layout.duration,
                  "--tech-delay": layout.delay,
                }}
              >
                <span className="tech-pill tech-float-pill">
                  <span className="tech-pill-icon" aria-hidden="true">
                    <TechnologyIcon type={technology.icon} />
                  </span>
                  {technology.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function AboutSection({ showTeam = false }) {
  return (
    <>
       <section className="section editorial-section py-20" id="about">
      <div className="container">

        <div className="section-heading center reveal show max-w-3xl mx-auto">
          <h2>
            Enterprise Thinking.{" "}
            <span className="accent-text">Operational Precision.</span>
          </h2>
          <p>
            ABDANIX combines engineering discipline with business strategy so
            organizations can deploy digital systems that are reliable,
            scalable, and commercially useful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {aboutPoints.map((point) => (
            <article
              className="about-card reveal show text-center p-6 rounded-xl shadow-sm"
              key={point.title}
            >
              <div className="icon-badge">{point.code}</div>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
     {showTeam && null}
    </>
  );
}

export function CtaSection({
  eyebrow = "Initialize Project",
  title = "Start building your",
  accent = "technology architecture",
  description = "Ready to modernize your platforms, workflows, and customer systems? Partner with a team that treats software delivery like business-critical infrastructure.",
  secondaryLabel = "Explore Operations",
  secondaryTo = "/services",
}) {
  return (
    <section className="section editorial-section">
      <div className="container">
        <div className="cta-panel reveal show">
          <div className="eyebrow"><span className="dot"></span>{eyebrow}</div>
          <h2>{title} <span className="accent-text">{accent}</span></h2>
          <p>{description}</p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link className="btn-primary" to="/contact">Book Initial Consultation</Link>
            <Link className="btn-secondary" to={secondaryTo}>{secondaryLabel}</Link>
          </div>
          <div className="contact-chips">
            <span className="contact-chip">info@abdanixsolutions.com</span>
            <span className="contact-chip">+92 324 116 2060</span>
            <span className="contact-chip">Rawalpindi / Islamabad, Pakistan</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export {
  contactFaqs,
  projectAnswerCards,
  projectsFaqs,
  servicesAnswerCards,
  servicesFaqs,
};
