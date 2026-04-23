import { useEffect, useRef } from "react";

export default function TechSection({ children }) {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const stateRef = useRef({ mouse: { x: -999, y: -999 }, smoke: [], lastSmoke: 0 });

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;

    const ctx = canvas.getContext("2d");
    const s = stateRef.current;

    function resize() {
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(section);

    function spawnSmoke(x, y) {
      for (let i = 0; i < 1; i++) {
        const a = Math.random() * Math.PI * 2;
        const v = 0.5 + Math.random() * 1.2;
        s.smoke.push({
          x, y,
          vx: Math.cos(a) * v,
          vy: Math.sin(a) * v - 0.4,
          r: 10 + Math.random() * 14,
          life: 1,
          decay: 0.022 + Math.random() * 0.018,
        });
      }
    }

    function tick(now) {
      rafRef.current = requestAnimationFrame(tick);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (s.mouse.x > 0 && now - s.lastSmoke > 40) {
        spawnSmoke(s.mouse.x, s.mouse.y);
        s.lastSmoke = now;
      }

      s.smoke = s.smoke.filter(p => p.life > 0);
      for (const p of s.smoke) {
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        g.addColorStop(0, `rgba(56,189,248,${p.life * 0.20})`); // was 0.28
        g.addColorStop(0.5, `rgba(14,165,233,${p.life * 0.10})`);
        g.addColorStop(1, "rgba(14,165,233,0)");
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
        p.x += p.vx; p.y += p.vy; p.r *= 1.045; p.life -= p.decay;
      }
    }

    rafRef.current = requestAnimationFrame(tick);

    function onMove(e) {
      const r = section.getBoundingClientRect();
      s.mouse.x = e.clientX - r.left;
      s.mouse.y = e.clientY - r.top;
    }
    function onLeave() { s.mouse.x = -999; s.mouse.y = -999; }

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
      ro.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="tech-section" style={{ position: "relative" }}>
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
      {children}
    </section>
  );
}
