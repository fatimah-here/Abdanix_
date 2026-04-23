export default function PageHero({
  eyebrow,
  title,
  accent,
  description,
  showEyebrow = true,
  align = "center",
  className = "",
}) {
  return (
    <section className={`hero ${align} ${className}`}>
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      <div className="container">
        <h1>
          {title} <span className="accent-text">{accent}</span>
        </h1>

        <p className="description">{description}</p>
      </div>
    </section>
  );
}