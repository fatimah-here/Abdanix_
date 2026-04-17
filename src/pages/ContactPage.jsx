import { useState } from "react";
import PageHero from "../components/PageHero";
import Seo from "../components/Seo";
import { FaqSection, contactFaqs } from "../components/Sections";
import { seoPages } from "../data/seoData";

function ContactInfoIcon({ type }) {
  const icons = {
    mail: (
      <path d="M3.75 6.75 12 12.75l8.25-6M5.25 5.25h13.5a1.5 1.5 0 0 1 1.5 1.5v10.5a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V6.75a1.5 1.5 0 0 1 1.5-1.5Z" />
    ),
    phone: (
      <path d="M6.9 4.5h2.4a1.2 1.2 0 0 1 1.18 1l.4 2.42a1.2 1.2 0 0 1-.68 1.28l-1.48.7a12.02 12.02 0 0 0 5.4 5.4l.7-1.48a1.2 1.2 0 0 1 1.28-.68l2.42.4a1.2 1.2 0 0 1 1 1.18v2.4a1.2 1.2 0 0 1-1.3 1.2A15.45 15.45 0 0 1 5.7 5.8 1.2 1.2 0 0 1 6.9 4.5Z" />
    ),
    whatsapp: (
      <>
        <path d="M20.25 11.25A8.25 8.25 0 0 1 8.6 18.8L4.5 19.5l.76-3.76A8.25 8.25 0 1 1 20.25 11.25Z" />
        <path d="m9.5 8.8.62 1.8c.1.27.03.58-.18.78l-.54.51a6.12 6.12 0 0 0 2.74 2.74l.51-.54a.78.78 0 0 1 .78-.18l1.8.62c.34.12.55.46.5.82l-.12.92a.9.9 0 0 1-.96.78 7.97 7.97 0 0 1-7.28-7.28.9.9 0 0 1 .78-.96l.92-.12c.36-.05.7.16.83.51Z" />
      </>
    ),
    location: (
      <path d="M12 20.25c3.75-3.66 6-6.97 6-9.75a6 6 0 1 0-12 0c0 2.78 2.25 6.09 6 9.75Zm0-7.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" />
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

export default function ContactPage() {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", message: "" });

    const form = event.currentTarget;

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setStatus({
        type: "success",
        message: "Your message has been sent successfully. We will get back to you soon.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Message could not be sent right now. Please try again shortly or contact us on WhatsApp.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Seo {...seoPages.contact} />
      <PageHero
        className="contact-page-hero"
        showEyebrow={false}
        align="center"
        title="Let us build"
        accent="something together"
        description="We combine engineering precision with growth strategy. Reach out to start your discovery and architecture session."
      />
      <section className="section contact-section">
        <div className="container grid contact-grid">
          <div className="info-card reveal show">
            <h3>Direct contact</h3>
            <p>Share your goals, timeline, and system requirements. We will respond with the most practical next step.</p>
            <div className="info-item">
              <span className="info-icon"><ContactInfoIcon type="mail" /></span>
              <div className="info-item-copy"><strong>Email</strong><br /><a href="mailto:info@abdanixsolutions.com">info@abdanixsolutions.com</a></div>
            </div>
            <div className="info-item">
              <span className="info-icon"><ContactInfoIcon type="phone" /></span>
              <div className="info-item-copy"><strong>Phone</strong><br /><a href="tel:+923241162060">+92 324 116 2060</a></div>
            </div>
            <div className="info-item">
              <span className="info-icon"><ContactInfoIcon type="whatsapp" /></span>
              <div className="info-item-copy"><strong>WhatsApp</strong><br /><a href="https://wa.me/923241162060">Chat with our team</a></div>
            </div>
            <div className="info-item">
              <span className="info-icon"><ContactInfoIcon type="location" /></span>
              <div className="info-item-copy"><strong>Location</strong><br />Rawalpindi / Islamabad, Pakistan</div>
            </div>
          </div>
          <div className="contact-card reveal show">
            <h3>Send a message</h3>
            <p>Tell us what you need and we will get back to you with a suitable roadmap.</p>
            <form onSubmit={handleSubmit} action="https://formspree.io/f/mdawekeq" method="POST" acceptCharset="UTF-8">
              <input type="hidden" name="_subject" value="New Website Inquiry - ABDANIX SOLUTIONS" />
              <div className="form-grid">
                <div className="field"><input type="text" name="name" placeholder="Your Name" autoComplete="name" required /></div>
                <div className="field"><input type="email" name="email" placeholder="Your Email" autoComplete="email" required /></div>
                <div className="field"><input type="tel" name="phone" placeholder="Phone / WhatsApp" autoComplete="tel" /></div>
                <div className="field"><select name="service" defaultValue="" required><option value="" disabled>Service Interested In</option><option>Website Development</option><option>AI Integrated Websites</option><option>App Development</option><option>CRM Management</option><option>SEO Optimization</option><option>Custom Software Engineering</option><option>AI Solutions and ML</option></select></div>
                <div className="field full"><textarea name="message" placeholder="Tell us about your project..." required></textarea></div>
              </div>
              <div className={`form-status${status.message ? ` show ${status.type}` : ""}`} aria-live="polite">{status.message}</div>
              <div className="hero-actions">
                <button className="btn-primary" type="submit" disabled={submitting}>{submitting ? "Sending..." : "Send Message"}</button>
                <a className="btn-secondary" href="https://wa.me/923241162060">Chat on WhatsApp</a>
              </div>
            </form>
          </div>
        </div>
      </section>
      <FaqSection
        title="Contact and discovery"
        accent="questions"
        description="This helps visitors understand what to send, how the team responds, and which channels are available before the first conversation starts."
        faqs={contactFaqs}
      />
    </>
  );
}
