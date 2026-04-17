import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="container">
          <div className="site-header-inner">
            <Link className="brand" to="/">
              <img src="/assets/images/logo.png" alt="ABDANIX logo" />
              <span>ABDANIX SOLUTIONS</span>
            </Link>

            <ul className="nav-links nav-links-desktop">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="desktop-cta">
              <Link className="header-cta" to="/contact">
                Book Strategy Call
              </Link>
            </div>

            <button
              className={`menu-toggle${menuOpen ? " open" : ""}`}
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <div className="mobile-menu">
          <div className="mobile-menu-links">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className="mobile-link"
              >
                {item.label}
              </NavLink>
            ))}
            <Link className="mobile-cta" to="/contact">
              Book Strategy Call
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
