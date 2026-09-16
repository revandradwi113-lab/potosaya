import { about, professionalProfile, profile } from "../data/content";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="mb-5">
          <p className="section-label mb-2">Tentang</p>
          <h2 className="display-5 fw-bold">Sedikit tentang saya.</h2>
          <p className="text-muted-custom">
            Kenali saya lebih dekat melalui informasi singkat berikut.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="custom-card h-100">
              <h3 className="mb-3">Profil</h3>
              <p className="text-muted-custom mb-0">{about.text}</p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="custom-card h-100">
              <h3 className="mb-3">Informasi</h3>

              <div className="info-row">
                <span className="text-muted-custom">Nama</span>
                <strong>{profile.name}</strong>
              </div>
              <div className="info-row">
                <span className="text-muted-custom">Pendidikan</span>
                <strong>{profile.education}</strong>
              </div>
              <div className="info-row">
                <span className="text-muted-custom">Domisili</span>
                <strong>{profile.domisili}</strong>
              </div>
              <div className="info-row">
                <span className="text-muted-custom">Email</span>
                <strong>{profile.email}</strong>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="custom-card">
              <div className="row g-4 align-items-center">
                <div className="col-md-4">
                  <p className="section-label mb-1">Profil Profesional</p>
                  <h3 className="mb-0">{professionalProfile.jabatan}</h3>
                </div>
                <div className="col-md-8">
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <small className="text-muted-custom d-block">Instansi</small>
                      <strong>{professionalProfile.instansi}</strong>
                    </div>
                    <div className="col-sm-6">
                      <small className="text-muted-custom d-block">Bidang</small>
                      <strong>{professionalProfile.bidang}</strong>
                    </div>
                    <div className="col-12">
                      <p className="text-muted-custom mb-0 mt-2">
                        {professionalProfile.deskripsi}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
