import PageHero from "../components/PageHero";
import Seo from "../components/Seo";
import { seoPages } from "../data/seoData";

export default function PrivacyPage() {
  return (
    <>
      <Seo {...seoPages.privacy} />
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        accent="policy"
        description="How ABDANIX collects, uses, and protects the information shared through this website and our services."
      />
      <section className="section">
        <div className="container">
          <div className="legal-card reveal show">
            <h2>Information we collect</h2>
            <p>We may collect information submitted through contact forms, email, WhatsApp, or service inquiries, including your name, email address, phone number, business details, and project requirements.</p>
            <h2>How we use information</h2>
            <p>We use submitted information to respond to inquiries, deliver services, prepare proposals, improve communication, and maintain records related to your engagement with ABDANIX SOLUTIONS.</p>
            <h2>Third-party services</h2>
            <p>Our website may use trusted third-party services such as hosting providers, analytics tools, form processors, or communication platforms. Their own privacy policies may also apply.</p>
            <h2>Data protection</h2>
            <p>We take reasonable measures to protect your information, but no online system can guarantee complete security. Sensitive credentials should always be shared through secure channels where appropriate.</p>
            <h2>Data sharing</h2>
            <p>We do not sell personal information. We only share information when needed to provide agreed services, comply with legal obligations, or work with trusted vendors supporting project delivery.</p>
            <h2>Policy updates</h2>
            <p>This policy may be updated from time to time to reflect operational, legal, or technical changes. Continued use of our website or services indicates acceptance of the latest version.</p>
          </div>
        </div>
      </section>
    </>
  );
}
