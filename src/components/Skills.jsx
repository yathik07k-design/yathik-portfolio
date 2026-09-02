import { skillCategories } from "../data/content";
import useReveal from "../hooks/useReveal";

export default function Skills() {
  const ref = useReveal();
  return (
    <section id="skills" className="section dark-section" ref={ref}>
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Technical Skills</h2>
          <span className="index">04</span>
        </div>

        <div className="skills-grid" data-reveal>
          {skillCategories.map((cat) => (
            <div className="card skill-card" key={cat.category}>
              <div className="skill-heading">
  <span
  className={
    cat.category === "Programming"
      ? "skill-icon icon-programming"
      : cat.category === "Embedded Systems"
      ? "skill-icon icon-embedded"
      : cat.category === "BMS & Data Centre Operations"
      ? "skill-icon icon-bms"
      : cat.category === "CAD & Design"
      ? "skill-icon icon-cad"
      : "skill-icon icon-electrical"
  }
>
  {cat.category === "Programming" && "⌨"}
  {cat.category === "Embedded Systems" && "⚙"}
  {cat.category === "BMS & Data Centre Operations" && "▦"}
  {cat.category === "CAD & Design" && "✎"}
  {cat.category === "AutoCAD Electrical" && "ϟ"}
</span>
  <h3>{cat.category}</h3>
</div>
              <div className="skill-tags">
                {cat.skills.map((s) => (
                  <span className="tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
