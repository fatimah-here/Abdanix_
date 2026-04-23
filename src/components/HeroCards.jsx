import { useState } from "react";

export default function HeroCards() {
  const [animate, setAnimate] = useState(false);

  return (
    <div
      className="cards-stack"
      onMouseEnter={() => setAnimate(true)}
      onMouseLeave={() => setAnimate(false)}
    >
      <div className={`float-card card-1 ${animate ? "animate" : ""}`}>
        <img src="/assets/images/herocard1.png" alt="" />
      </div>

      <div className={`float-card card-2 ${animate ? "animate" : ""}`}>
        <img src="/assets/images/herocard2.png" alt="" />
      </div>

      <div className={`float-card card-3 ${animate ? "animate" : ""}`}>
        <img src="/assets/images/herocard3.png" alt="" />
      </div>
    </div>
  );
}