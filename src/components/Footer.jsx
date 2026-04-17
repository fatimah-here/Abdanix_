import { Link } from "react-router-dom";

const navigateLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const resourceLinks = [
  { label: "How We Work", to: "/services" },
  { label: "Project Portfolio", to: "/projects" },
  { label: "Support Standards", to: "/contact" },
];

const policyLinks = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms & Conditions", to: "/terms" },
];

const contactItems = [
  { icon: "mail", label: "info@abdanixsolutions.com", href: "mailto:info@abdanixsolutions.com" },
  { icon: "phone", label: "+92 324 116 2060", href: "tel:+923241162060" },
  { icon: "location", label: "Rawalpindi / Islamabad, Pakistan" },
  { icon: "clock", label: "Monday - Friday | 10:00 AM - 7:00 PM PKT" },
];

function FooterIcon({ type }) {
  const icons = {
    mail: (
      <path d="M3.75 6.75 12 12.75l8.25-6M5.25 5.25h13.5a1.5 1.5 0 0 1 1.5 1.5v10.5a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V6.75a1.5 1.5 0 0 1 1.5-1.5Z" />
    ),
    phone: (
      <path d="M6.9 4.5h2.4a1.2 1.2 0 0 1 1.18 1l.4 2.42a1.2 1.2 0 0 1-.68 1.28l-1.48.7a12.02 12.02 0 0 0 5.4 5.4l.7-1.48a1.2 1.2 0 0 1 1.28-.68l2.42.4a1.2 1.2 0 0 1 1 1.18v2.4a1.2 1.2 0 0 1-1.3 1.2A15.45 15.45 0 0 1 5.7 5.8 1.2 1.2 0 0 1 6.9 4.5Z" />
    ),
    location: (
      <path d="M12 20.25c3.75-3.66 6-6.97 6-9.75a6 6 0 1 0-12 0c0 2.78 2.25 6.09 6 9.75Zm0-7.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" />
    ),
    clock: (
      <path d="M12 6.75v5.25l3 1.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
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
      {icons[type]}
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-card">
          <div className="footer-grid">
            <div className="footer-column footer-brand">
              <h3 className="footer-brand-title">Abdanix Solutions</h3>
              <p className="footer-copy">
                Digital systems and product delivery built with clearer
                workflows, dependable execution, and long-term support.
              </p>

              <div className="footer-brand-block">
                <span className="footer-eyebrow">Operating Brand</span>
                <strong>Abdanix Solutions</strong>
              </div>

              <div className="footer-brand-block">
                <span className="footer-eyebrow">Service Area</span>
                <strong>Pakistan and international clients</strong>
              </div>

              <div className="footer-brand-block">
                <span className="footer-eyebrow">Support Hours</span>
                <strong>Monday - Friday | 10:00 AM - 7:00 PM PKT</strong>
              </div>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Navigate</h4>
              <ul className="footer-list">
                {navigateLinks.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Contact</h4>
              <ul className="footer-contact-list">
                {contactItems.map((item) => (
                  <li key={item.label}>
                    <span className="footer-contact-icon" aria-hidden="true">
                      <FooterIcon type={item.icon} />
                    </span>
                    {item.href ? (
                      <a href={item.href}>{item.label}</a>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-title">Resources</h4>
              <ul className="footer-list">
                {resourceLinks.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
              </ul>

              <div className="footer-policy-group">
                <span className="footer-policy-label">Policies</span>
                <ul className="footer-list">
                  {policyLinks.map((item) => (
                    <li key={item.label}>
                      <Link to={item.to}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-meta">
              Copyright 2026 Abdanix Solutions. All rights reserved.
            </div>
            <div className="footer-meta">
              Questions? Email info@abdanixsolutions.com or call +92 324 116
              2060.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
