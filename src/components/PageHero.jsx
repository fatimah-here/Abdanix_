export default function PageHero({
  eyebrow,
  title,
  accent,
  description,
  showEyebrow = true,
  align = "left",
  className = "",
}) {
  return (
    <section className={`page-hero ${align} ${className}`}>
      {/* Background glow elements */}
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      <div className="container">
      
        <h1>
          {title} <span className="accent-text">{accent}</span>
        </h1>

        <p className="description">{description}</p>

        <div className="hero-actions">
          <button className="btn-primary">Schedule a free call</button>
        </div>
      </div>
    </section>
  );
}