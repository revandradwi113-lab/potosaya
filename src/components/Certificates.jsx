import { certificates } from "../data/content";

export default function Certificates() {
  return (
    <section id="certificates">
      <div className="container">
        <div className="mb-5">
          <p className="section-label mb-2">Sertifikat & Prestasi</p>
          <h2 className="display-5 fw-bold">Pengakuan atas usaha belajar.</h2>
          <p className="text-muted-custom">
            Sertifikasi, pelatihan, dan pencapaian yang pernah saya ikuti.
          </p>
        </div>

        <div className="row g-3">
          {certificates.map((c) => (
            <div className="col-md-6" key={c.title}>
              <div className="cert-card">
                <div className="cert-icon">
                  <i className={`bi ${c.icon}`}></i>
                </div>
                <div>
                  <h4 className="h6 mb-1">{c.title}</h4>
                  <p className="text-muted-custom mb-0">
                    {c.issuer} • {c.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
