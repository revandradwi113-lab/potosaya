import { useState } from "react";
import { profile } from "../data/content";

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <span className="badge badge-custom rounded-pill px-3 py-2 mb-4">
              ● Terbuka untuk kesempatan baru
            </span>

            <h1 className="mb-4">
              Halo, saya <span className="text-gradient">{profile.name.toUpperCase()}</span>
            </h1>

            <p className="lead text-muted-custom mb-4">{profile.tagline}</p>

            <div className="d-flex flex-wrap gap-2">
              <a href="https://batik-png.vercel.app/" className="btn btn-primary-custom px-4 py-3">
                Lihat Proyek →
              </a>
              <a href="#contact" className="btn btn-outline-light px-4 py-3">
                Hubungi Saya
              </a>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="profile-card text-center">
              {!imgError ? (
                <img
                  src={profile.photo}
                  alt={`Foto profil ${profile.name}`}
                  className="avatar mb-4"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="avatar mb-4">{initials(profile.name)}</div>
              )}

              <h3>{profile.name}</h3>
              <p className="text-muted-custom">{profile.role}</p>

              <div className="row g-2 mt-4">
                {profile.stats.map((s) => (
                  <div className="col-4" key={s.label}>
                    <div className="stat-box">
                      <strong>{s.value}</strong>
                      <small className="d-block">{s.label}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
