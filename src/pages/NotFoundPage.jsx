import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { seoPages } from "../data/seoData";

export default function NotFoundPage() {
  return (
    <>
      <Seo {...seoPages.notFound} />
      <section className="page-hero">
        <div className="glow one"></div>
        <div className="glow two"></div>
        <div className="container page-hero-center reveal show">
          <h1>
            Page not <span className="accent-text">found</span>
          </h1>
          <p>
            The page you requested is unavailable. You can continue exploring
            our services, projects, or contact our team directly.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link className="btn-primary" to="/services">
              Explore Services
            </Link>
            <Link className="btn-secondary" to="/contact">
              Contact ABDANIX
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
