import { projects } from "../data/content";
import useReveal from "../hooks/useReveal";

export default function Projects() {
  const ref = useReveal();
  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Projects</h2>
          <span className="index">07</span>
        </div>

        <div className="projects-grid" data-reveal>
          {projects.map((p) => (
            <article
  className={`project-card ${p.type === "Training Project" ? "project-card-training" : ""} ${
    p.title.includes("Image Steganography") ? "project-card-steganography" : ""
  }`}
  key={p.title}
>
              <div className="project-image">
  <img
    src={p.image}
    alt={p.title}
  />
</div>

              <div className="project-body">
                <span className="tag">{p.type}</span>
                <h3>{p.title}</h3>
                {p.date && <p className="project-date">{p.date}</p>}

                <p className="project-field-label">Objective</p>
                <p className="project-field">{p.objective}</p>

                <p className="project-field-label">Technologies Used</p>
                <div className="skill-tags">
                  {p.technologies.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
