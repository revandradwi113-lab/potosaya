import { activities } from "../data/content";

export default function Activities() {
  return (
    <section id="activities">
      <div className="container">
        <div className="mb-5">
          <p className="section-label mb-2">Kegiatan</p>
          <h2 className="display-5 fw-bold">Dokumentasi kegiatan.</h2>
          <p className="text-muted-custom">
            Momen belajar, workshop, dan proyek yang pernah saya ikuti.
          </p>
        </div>

        <div className="row g-4">
          {activities.map((a) => (
            <div className="col-md-4" key={a.title}>
              <div className="activity-card">
                <div className="activity-thumb">
                  {a.image ? (
                    <img src={a.image} alt={a.title} loading="lazy" />
                  ) : (
                    <i className={`bi ${a.icon}`}></i>
                  )}
                </div>
                <h4 className="h6 mb-2">{a.title}</h4>
                <p className="text-muted-custom mb-0">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
