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
    <section className={`page-hero${className ? ` ${className}` : ""}`}>
      <div className="glow one"></div>
      <div className="glow two"></div>
      <div className={`container reveal show${align === "center" ? " page-hero-center" : ""}`}>
        {showEyebrow && eyebrow ? (
          <div className="eyebrow">
            <span className="dot"></span>
            {eyebrow}
          </div>
        ) : null}
        <h1>
          {title} <span className="accent-text">{accent}</span>
        </h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
