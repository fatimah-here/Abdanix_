import {
  contactFaqs,
  homeFaqs,
  projects,
  projectsFaqs,
  services,
  servicesFaqs,
} from "./siteData.js";

export const SITE_NAME = "ABDANIX SOLUTIONS";
export const SITE_URL = "https://www.abdanixsolutions.com";
export const DEFAULT_OG_IMAGE = "/assets/images/hero-showcase-reference.png";
export const DEFAULT_META_DESCRIPTION =
  "ABDANIX builds websites, mobile apps, CRM systems, and AI-powered business solutions designed for speed, clarity, and scalable growth.";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const socialLinks = [
  "https://www.facebook.com/share/1Mt1T65ZPw/?mibextid=wwXIfr",
  "https://www.instagram.com/abdanixsolutions?igsh=MW95cDAzczg4dGNidw%3D%3D&utm_source=qr",
  "https://www.linkedin.com/company/abdanix-solutions/",
  "https://wa.me/923241162060",
];

export function absoluteUrl(pathname = "/") {
  if (!pathname || pathname === "/") {
    return SITE_URL;
  }

  return `${SITE_URL}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

function buildServiceAnchor(service) {
  return absoluteUrl(`/services#service-${service.code.toLowerCase()}`);
}

function buildProjectAnchor(project) {
  return absoluteUrl(`/projects#project-${project.id}`);
}

function buildWebPageSchema({ path, name, description, type = "WebPage" }) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
  };
}

export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

function buildFaqSchema({ path, name, faqs }) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name,
    url: absoluteUrl(path),
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

function buildOfferCatalog(items) {
  return {
    "@type": "OfferCatalog",
    name: "ABDANIX Services Catalog",
    itemListElement: items.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        serviceType: service.title,
        description: service.description,
        provider: { "@id": ORGANIZATION_ID },
        areaServed: "Worldwide",
        url: buildServiceAnchor(service),
      },
    })),
  };
}

function buildServiceCatalogSchema({ path, name, items }) {
  return {
    "@context": "https://schema.org",
    ...buildOfferCatalog(items),
    name,
    url: absoluteUrl(path),
  };
}

function buildProjectItemListSchema({ path, name, items }) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url: absoluteUrl(path),
    itemListElement: items.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        genre: project.category,
        keywords: project.tags.join(", "),
        url: buildProjectAnchor(project),
      },
    })),
  };
}

function buildContactPoint() {
  return {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "info@abdanixsolutions.com",
    telephone: "+92 324 116 2060",
    areaServed: "Worldwide",
    availableLanguage: ["English"],
    url: absoluteUrl("/contact"),
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": ORGANIZATION_ID,
  name: SITE_NAME,
  url: SITE_URL,
  logo: absoluteUrl("/assets/images/logo.png"),
  image: absoluteUrl(DEFAULT_OG_IMAGE),
  description: DEFAULT_META_DESCRIPTION,
  email: "info@abdanixsolutions.com",
  telephone: "+92 324 116 2060",
  priceRange: "$$",
  areaServed: "Worldwide",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rawalpindi / Islamabad",
    addressCountry: "PK",
  },
  contactPoint: [buildContactPoint()],
  sameAs: socialLinks,
  knowsAbout: [
    "Website Development",
    "Mobile App Development",
    "CRM Systems",
    "Custom Software Engineering",
    "Search Engine Optimization",
    "Generative Engine Optimization",
    "AI Integration",
    "Workflow Automation",
  ],
  hasOfferCatalog: buildOfferCatalog(services),
  serviceType: [
    "Website Development",
    "Mobile App Development",
    "CRM Systems",
    "Custom Software Engineering",
    "SEO Optimization",
    "AI Integration",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  description: DEFAULT_META_DESCRIPTION,
  publisher: { "@id": ORGANIZATION_ID },
  inLanguage: "en",
};

export function getSeoSchemaEntries({ schema = [], breadcrumbs = [] }) {
  return [
    organizationSchema,
    ...(Array.isArray(schema) ? schema : [schema]),
    breadcrumbs.length ? buildBreadcrumbSchema(breadcrumbs) : null,
  ].filter(Boolean);
}

export const seoPages = {
  home: {
    title: "ABDANIX SOLUTIONS | Web Development, Apps, CRM & AI Solutions",
    description:
      "ABDANIX builds websites, apps, CRM workflows, and AI-enabled business systems that help companies grow faster with dependable execution.",
    pathname: "/",
    type: "website",
    keywords:
      "ABDANIX Solutions, web development agency, app development, CRM development, AI integration, software company Pakistan",
    breadcrumbs: [{ name: "Home", path: "/" }],
    schema: [
      websiteSchema,
      buildWebPageSchema({
        path: "/",
        name: "ABDANIX SOLUTIONS",
        description:
          "Premium websites, apps, CRM systems, and AI-enabled business solutions for modern organizations.",
      }),
      buildServiceCatalogSchema({
        path: "/services",
        name: "ABDANIX Solutions Service Catalog",
        items: services,
      }),
      buildFaqSchema({
        path: "/",
        name: "ABDANIX Solutions FAQ",
        faqs: homeFaqs,
      }),
    ],
  },
  services: {
    title: "Services | Web Development, Apps, CRM, SEO & AI | ABDANIX",
    description:
      "Explore ABDANIX services including website development, mobile apps, CRM systems, SEO optimization, custom software, and AI integrations.",
    pathname: "/services",
    type: "website",
    keywords:
      "website development services, mobile app development, CRM management, custom software engineering, SEO services, AI integration services",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
    ],
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "ABDANIX Digital Services",
        serviceType:
          "Website development, mobile applications, CRM systems, custom software, SEO optimization, and AI integrations",
        provider: { "@id": ORGANIZATION_ID },
        areaServed: "Worldwide",
        url: absoluteUrl("/services"),
        description:
          "Integrated digital services built to support business growth, automation, scalability, and stronger online performance.",
      },
      buildServiceCatalogSchema({
        path: "/services",
        name: "ABDANIX Services",
        items: services,
      }),
      buildFaqSchema({
        path: "/services",
        name: "ABDANIX Services FAQ",
        faqs: servicesFaqs,
      }),
      buildWebPageSchema({
        path: "/services",
        name: "ABDANIX Services",
        description:
          "Website development, mobile apps, CRM systems, AI integrations, and growth-focused digital services.",
      }),
    ],
  },
  projects: {
    title: "Projects | ABDANIX Web, AI & Mobile Portfolio",
    description:
      "See ABDANIX portfolio work across enterprise CRM systems, AI automation platforms, testing tools, and mobile applications built for real business use.",
    pathname: "/projects",
    type: "website",
    keywords:
      "software agency portfolio, CRM platform portfolio, AI chatbot platform, mobile app portfolio, web app case studies",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
    ],
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "ABDANIX Projects",
        description:
          "A portfolio of web platforms, AI systems, and mobile applications delivered with business impact in mind.",
        url: absoluteUrl("/projects"),
        isPartOf: { "@id": WEBSITE_ID },
        hasPart: [
          "Enterprise CRM Platform",
          "Customer Support & Ticketing Platform",
          "Real-Time Device Testing Platform",
          "AI Chat & Automation Platform",
          "Checkin - Social App",
          "FixIt Hub - Services Platform",
          "Cas Cars - Ride Hailing",
          "Peter Pan Taxis",
        ].map((name) => ({
          "@type": "CreativeWork",
          name,
        })),
      },
      buildProjectItemListSchema({
        path: "/projects",
        name: "ABDANIX Project Portfolio",
        items: projects,
      }),
      buildFaqSchema({
        path: "/projects",
        name: "ABDANIX Projects FAQ",
        faqs: projectsFaqs,
      }),
      buildWebPageSchema({
        path: "/projects",
        name: "ABDANIX Projects",
        description:
          "Portfolio showcase of web, AI, and mobile product work shaped for real-world operations and growth.",
        type: "CollectionPage",
      }),
    ],
  },
  about: {
    title: "About | ABDANIX Solutions Team & Delivery Approach",
    description:
      "Learn about ABDANIX, our leadership team, and the delivery approach behind our websites, CRM systems, AI solutions, and software products.",
    pathname: "/about",
    type: "website",
    keywords:
      "about ABDANIX, software agency team, digital product agency, web and app development company",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
    ],
    schema: [
      buildWebPageSchema({
        path: "/about",
        name: "About ABDANIX Solutions",
        description:
          "Meet the team and delivery philosophy behind ABDANIX Solutions.",
        type: "AboutPage",
      }),
    ],
  },
  contact: {
    title: "Contact | ABDANIX Solutions",
    description:
      "Contact ABDANIX Solutions to discuss your website, app, CRM, SEO, or AI project and get a practical next step for delivery.",
    pathname: "/contact",
    type: "website",
    keywords:
      "contact ABDANIX, book strategy call, software project inquiry, website development consultation",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ],
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact ABDANIX Solutions",
        description:
          "Get in touch with ABDANIX to discuss software, web, mobile, CRM, and AI projects.",
        url: absoluteUrl("/contact"),
        mainEntity: { "@id": ORGANIZATION_ID },
      },
      {
        "@context": "https://schema.org",
        "@type": "ContactPoint",
        ...buildContactPoint(),
      },
      buildFaqSchema({
        path: "/contact",
        name: "ABDANIX Contact FAQ",
        faqs: contactFaqs,
      }),
    ],
  },
  privacy: {
    title: "Privacy Policy | ABDANIX Solutions",
    description:
      "Read the ABDANIX Solutions privacy policy covering how information is collected, used, protected, and shared.",
    pathname: "/privacy",
    type: "website",
    robots: "noindex,follow",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Privacy Policy", path: "/privacy" },
    ],
    schema: [
      buildWebPageSchema({
        path: "/privacy",
        name: "ABDANIX Privacy Policy",
        description:
          "How ABDANIX Solutions collects, uses, and protects information shared through its website and services.",
      }),
    ],
  },
  terms: {
    title: "Terms & Conditions | ABDANIX Solutions",
    description:
      "Read the ABDANIX Solutions terms and conditions covering service engagement, payments, delivery, and liability.",
    pathname: "/terms",
    type: "website",
    robots: "noindex,follow",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Terms & Conditions", path: "/terms" },
    ],
    schema: [
      buildWebPageSchema({
        path: "/terms",
        name: "ABDANIX Terms and Conditions",
        description:
          "Core terms governing ABDANIX Solutions services, pricing, delivery, and client engagement.",
      }),
    ],
  },
  notFound: {
    title: "Page Not Found | ABDANIX Solutions",
    description:
      "The page you requested could not be found. Continue exploring ABDANIX services, projects, and contact options.",
    pathname: "/404",
    type: "website",
    robots: "noindex,follow",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "404", path: "/404" },
    ],
    schema: [
      buildWebPageSchema({
        path: "/404",
        name: "Page Not Found",
        description:
          "Fallback page for broken or unavailable routes on the ABDANIX Solutions website.",
      }),
    ],
  },
};

export const prerenderPages = [
  { path: "/", seo: seoPages.home },
  { path: "/services", seo: seoPages.services },
  { path: "/projects", seo: seoPages.projects },
  { path: "/about", seo: seoPages.about },
  { path: "/contact", seo: seoPages.contact },
  { path: "/privacy", seo: seoPages.privacy },
  { path: "/terms", seo: seoPages.terms },
  { path: "/404", seo: seoPages.notFound, fileName: "404.html" },
];
