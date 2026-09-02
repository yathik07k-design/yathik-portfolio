import { journey } from "../data/content";
import useReveal from "../hooks/useReveal";

export default function CareerSnapshot() {
  const ref = useReveal();
  return (
    <section id="journey" className="section snapshot-section dark-section" ref={ref}>
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Professional Journey</h2>
          <span className="index">02</span>
        </div>

        <div className="journey" data-reveal>
          <div className="journey-track">
            {journey.map((j, i) => (
              <div className="journey-step" key={j.stage}>
                <div className="journey-node">
                  <span>{i + 1}</span>
                </div>
                <div className="journey-text">
                  <div className="journey-heading">
                    <h4>{j.stage}</h4>
                    <span className="tag journey-type">{j.type}</span>
                  </div>
                  <p className="journey-note">{j.note}</p>
                  {j.date && <p className="journey-date">{j.date}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
