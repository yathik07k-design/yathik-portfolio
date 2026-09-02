import { strengths } from "../data/content";
import useReveal from "../hooks/useReveal";

export default function Strengths() {
  const ref = useReveal();
  return (
    <section className="section" ref={ref}>
      <div className="container">
        <div className="section-head">
          <h2 className="section-title"> Strengths</h2>
          <span className="index">03</span>
        </div>

        <div className="strengths-grid" data-reveal>
          {strengths.map((s) => (
            <div className="strength-card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
