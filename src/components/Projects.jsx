import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="mb-5">
          <p className="section-label mb-2">Portofolio</p>
          <h2 className="display-5 fw-bold">Beberapa karya saya.</h2>
          <p className="text-muted-custom">
            Contoh proyek yang dapat kamu tampilkan di portfolio.
          </p>
        </div>

        <div className="row g-4">
          {projects.map((p, i) => (
            <div className="col-lg-4" key={p.title}>
              <div className="project-card">
                <p className="project-number mb-1">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3">{p.title}</h3>
                <p className="text-muted-custom">{p.desc}</p>
                <div>
                  {p.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
