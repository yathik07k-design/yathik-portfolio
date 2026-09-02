import { languages } from "../data/content";
import useReveal from "../hooks/useReveal";

export default function Languages() {
  const ref = useReveal();
  return (
    <section className="section languages-section dark-section" ref={ref}>
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Languages</h2>
          <span className="index">10</span>
        </div>
        <div className="languages-row" data-reveal>
          {languages.map((l) => (
            <span className="tag language-tag" key={l}>
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
