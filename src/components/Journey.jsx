import { education, experience } from "../data/content";

function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <div className="timeline-item" key={item.title}>
          <span className="timeline-dot"></span>
          <div className="timeline-card">
            <p className="timeline-period mb-1">{item.period}</p>
            <h4 className="h5 mb-1">{item.title}</h4>
            <p className="text-muted-custom mb-2">{item.subtitle}</p>
            <p className="text-muted-custom mb-0">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Journey() {
  return (
    <section id="experience">
      <div className="container">
        <div className="mb-5">
          <p className="section-label mb-2">Perjalanan</p>
          <h2 className="display-5 fw-bold">Pendidikan & pengalaman.</h2>
          <p className="text-muted-custom">
            Riwayat pendidikan dan pengalaman belajar maupun proyek yang pernah saya jalani.
          </p>
        </div>

        <div className="row g-5">
          <div className="col-lg-6" id="education">
            <h3 className="h4 mb-4">
              <i className="bi bi-mortarboard-fill text-cyan me-2"></i>
              Pendidikan
            </h3>
            <Timeline items={education} />
          </div>

          <div className="col-lg-6">
            <h3 className="h4 mb-4">
              <i className="bi bi-briefcase-fill me-2"></i>
              Pengalaman
            </h3>
            <Timeline items={experience} />
          </div>
        </div>
      </div>
    </section>
  );
}
