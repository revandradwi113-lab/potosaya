import { profile } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-4 text-center">
      <div className="container">
        © {year} {profile.name}
      </div>
    </footer>
  );
}
