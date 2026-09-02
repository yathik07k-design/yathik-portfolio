import { profile } from "../data/content";
import useReveal from "../hooks/useReveal";

export default function Contact() {
  const ref = useReveal();
  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Contact</h2>
          <span className="index">11</span>
        </div>

        <div className="contact-grid" data-reveal>
          <div>
            <h3 className="contact-name">{profile.name}</h3>
            <p className="contact-role">{profile.title}</p>

            <div className="contact-actions">
              <a className="btn" href={`mailto:${profile.email}`}>
                Email
              </a>
              <a className="btn btn-outline-light" href={`tel:${profile.phone}`}>
                Call
              </a>
            </div>
          </div>

          <div className="contact-details">
            <div className="contact-row">
              <span className="eyebrow">Phone</span>
              <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            </div>
            <div className="contact-row">
              <span className="eyebrow">Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className="contact-row">
              <span className="eyebrow">LinkedIn</span>
              {profile.linkedin ? (
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  {profile.linkedin}
                </a>
              ) : (
                <span className="contact-placeholder">Add LinkedIn URL</span>
              )}
            </div>
            <div className="contact-row">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
