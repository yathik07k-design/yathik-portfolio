import { certifications } from "../data/content";
import useReveal from "../hooks/useReveal";

export default function Certifications() {
  const ref = useReveal();
  return (
    <section className="section" ref={ref}>
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Certifications</h2>
          <span className="index">09</span>
        </div>

        <div className="cert-grid" data-reveal>
          {certifications.map((c) => (
            <div className="card cert-card" key={c.title}>
              <div className="cert-image">
                <img
                  src={c.image}
                  alt=""
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextSibling.style.display = "flex";
                  }}
                />
                <div className="cert-image-placeholder">
                  <span>Certificate Image Placeholder</span>
                  <small>Add image at {c.image}</small>
                </div>
              </div>
              <h3>{c.title}</h3>
              <p className="cert-org">{c.org}</p>
              <span className="tag">{c.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
