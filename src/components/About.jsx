import { profile } from "../data/content";
import useReveal from "../hooks/useReveal";

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">About</h2>
          <span className="index">01</span>
        </div>

        <div className="about-grid" data-reveal>
          <p className="about-text">{profile.about}</p>
          <ul className="about-points">
            <li>Electronics & Communication Engineering graduate</li>
<li>Embedded Systems training and hands-on project experience</li>
<li>Real-world BMS operations experience in a data-centre environment</li>
<li>AutoCAD & AutoCAD Electrical training with technical design exposure</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
