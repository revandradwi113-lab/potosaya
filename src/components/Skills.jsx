import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="mb-5">
          <p className="section-label mb-2">Keahlian</p>
          <h2 className="display-5 fw-bold">Skill yang saya pelajari.</h2>
          <p className="text-muted-custom">
            Beberapa teknologi yang saya gunakan untuk membuat website.
          </p>
        </div>

        <div className="row g-3">
          {skills.map((skill) => (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={skill.name}>
              <div className="skill-card">
                <div className="skill-icon mb-3">
                  <i className={`bi ${skill.icon}`}></i>
                </div>
                <h4>{skill.name}</h4>
                <p className="text-muted-custom mb-0">{skill.desc}</p>
                <div className="skill-level">
                  <span style={{ width: `${skill.level}%` }}></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
