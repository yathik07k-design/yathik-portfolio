import { profile } from "../data/content";

export default function Hero() {
  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="hero dark-section">
      <div className="container hero-inner">

        <div className="hero-copy">
          <p className="eyebrow">{profile.subtitle}</p>

          <h1 className="hero-name">{profile.name}</h1>

          <p className="hero-role">{profile.title}</p>

          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-actions">
            <button
              className="btn"
              onClick={() => go("experience")}
            >
              View My Experience
            </button>

            <button
              className="btn btn-outline-light"
              onClick={() => go("projects")}
            >
              View My Projects
            </button>

            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download
              className="btn btn-outline-light"
            >
              Download Resume
            </a>
    
            <button
              className="btn btn-outline-light"
              onClick={() => go("contact")}
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-card">
            <img
              src={profile.photo}
              alt="Yathik K"
              className="hero-profile-photo"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
