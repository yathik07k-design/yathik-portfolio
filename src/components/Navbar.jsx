import { useEffect, useState } from "react";
import useActiveSection from "../hooks/useActiveSection";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "training", label: "Training" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const go = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <button className="navbar-logo" onClick={() => go("home")} aria-label="Go to top">
          <span className="navbar-logo-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22">
              <circle cx="6" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="18" cy="6" r="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="18" cy="18" r="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path d="M8 12H18M18 8V16" stroke="currentColor" strokeWidth="1.4" fill="none" />
            </svg>
          </span>
          YATHIK K
        </button>

        <nav className="navbar-links" aria-label="Primary">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={active === l.id ? "active" : ""}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <a href="/resume.pdf" download className="btn navbar-cta">
          Download Resume
        </a>

        <button
          className={`navbar-burger ${menuOpen ? "open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`navbar-mobile ${menuOpen ? "open" : ""}`}>
        {LINKS.map((l) => (
          <button key={l.id} onClick={() => go(l.id)} className={active === l.id ? "active" : ""}>
            {l.label}
          </button>
        ))}
        <a href="/resume.pdf" download className="btn" onClick={() => setMenuOpen(false)}>
          Download Resume
        </a>
      </div>
    </header>
  );
}
