import { trainings } from "../data/content";
import useReveal from "../hooks/useReveal";

export default function Training() {
  const ref = useReveal();
  return (
    <section id="training" className="section training-section dark-section" ref={ref}>
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Training</h2>
          <span className="index">06</span>
        </div>

        <div className="training-grid" data-reveal>
          {trainings.map((t) => (
            <div className="card training-card" key={t.title}>
              <p className="eyebrow">Training</p>
              <h3>{t.title}</h3>
              <p className="training-org">
                {t.org}
                {t.location ? ` — ${t.location}` : ""}
              </p>
              {t.date && <span className="tag">{t.date}</span>}
              <p className="training-desc">{t.description}</p>
              {t.points && (
                <ul className="training-points">
                  {t.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
