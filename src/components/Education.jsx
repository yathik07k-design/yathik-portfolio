import { education } from "../data/content";
import useReveal from "../hooks/useReveal";

export default function Education() {
  const ref = useReveal();
  return (
    <section id="education" className="section dark-section" ref={ref}>
      <div className="container">
        <div className="section-head section-head-dark">
          <h2 className="section-title section-title-dark">Education</h2>
          <span className="index">08</span>
        </div>

        <div className="edu-timeline" data-reveal>
          {education.map((e) => (
            <div className="edu-item" key={e.institution}>
              <div className="edu-node" aria-hidden="true" />
              <div className="edu-content">
                <p className="edu-date">{e.date}</p>
                <h3>{e.institution}</h3>
                <p className="edu-program">
                  {e.program} — {e.location}
                </p>
                <span className="tag">{e.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
