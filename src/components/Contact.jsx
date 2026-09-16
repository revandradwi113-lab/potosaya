import { contactLinks } from "../data/content";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container text-center">
        <p className="section-label mb-2">Kontak</p>
        <h2 className="display-5 fw-bold mt-2">Yuk, terhubung!</h2>

        <p className="text-muted-custom mx-auto my-3" style={{ maxWidth: 600 }}>
          Jika ingin berdiskusi, bekerja sama, atau sekadar menyapa, kamu bisa
          menghubungi saya melalui kontak berikut.
        </p>

        <div className="row justify-content-center">
          <div className="col-auto">
            <div className="d-flex justify-content-center flex-wrap gap-2 mt-4">
              {contactLinks.map((link) => (
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="social-link"
                  key={link.label}
                >
                  <i className={`bi ${link.icon} me-1`}></i>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
