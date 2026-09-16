import { articles } from "../data/content";

export default function Blog() {
  return (
    <section id="blog">
      <div className="container">
        <div className="mb-5">
          <p className="section-label mb-2">Artikel</p>
          <h2 className="display-5 fw-bold">Tulisan & catatan belajar.</h2>
          <p className="text-muted-custom">
            Berbagi pengalaman dan tutorial singkat seputar proses belajar coding.
          </p>
        </div>

        <div className="row g-4">
          {articles.map((post) => (
            <div className="col-md-6" key={post.title}>
              <div className="blog-card">
                <p className="blog-date mb-2">{post.date}</p>
                <h3 className="h5 mb-2">{post.title}</h3>
                <p className="text-muted-custom">{post.excerpt}</p>
                <a href="#" className="blog-link">
                  Baca selengkapnya →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
