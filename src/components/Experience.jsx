import { experience } from "../data/content";
import useReveal from "../hooks/useReveal";

export default function Experience() {
  const ref = useReveal();
  return (
    <section id="experience" className="section experience-section" ref={ref}>
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Experience</h2>
          <span className="index">05</span>
        </div>

        <p className="eyebrow" data-reveal style={{ marginBottom: 20 }}>
          Industry Experience
        </p>

        <div className="experience-card" data-reveal>
          <div className="experience-card-top">
            <div>
              <h3>{experience.role}</h3>
              <p className="experience-company">
                {experience.company} — {experience.location}
              </p>
            </div>
            <span className="tag">{experience.duration}</span>
          </div>

          <ul className="experience-list">
            {experience.responsibilities.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
