import PageHero from "../components/PageHero";
import Seo from "../components/Seo";
import { seoPages } from "../data/seoData";

export default function TermsPage() {
  return (
    <>
      <Seo {...seoPages.terms} />
      <PageHero
        eyebrow="Legal"
        title="Terms and"
        accent="conditions"
        description="The core terms that govern our services, delivery process, pricing, and client engagement."
      />
      <section className="section">
        <div className="container">
          <div className="legal-card reveal show">
            <h2>Service engagement</h2>
            <p>By engaging ABDANIX SOLUTIONS, you agree that scope, timelines, pricing, and deliverables will be based on the approved proposal, quotation, or written agreement between both parties.</p>
            <h2>Payments</h2>
            <p>Invoices must be paid according to the agreed schedule. Delays in payment may pause work, delivery timelines, support response time, or access to project files until outstanding balances are cleared.</p>
            <h2>Non-refundable fees</h2>
            <p>Service fees, retainers, setup charges, and milestone payments are non-refundable once work has been scheduled, resources have been assigned, or delivery has started.</p>
            <h2>Client responsibilities</h2>
            <p>Clients are responsible for providing accurate information, timely approvals, content, credentials, and feedback needed for project delivery. Delays in client communication may affect timelines.</p>
            <h2>Intellectual property</h2>
            <p>Final deliverables are transferred according to the agreed scope once full payment has been received. ABDANIX may showcase completed work in its portfolio unless otherwise agreed in writing.</p>
            <h2>Limitation of liability</h2>
            <p>ABDANIX SOLUTIONS is not liable for indirect, incidental, or consequential losses arising from the use of its services, third-party platforms, integrations, hosting providers, or client-managed systems.</p>
          </div>
        </div>
      </section>
    </>
  );
}
