import { Link, NavLink } from "react-router";

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive
        ? "text-marquee"
        : "text-paper/80 hover:text-paper"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-ink-700 bg-ink-900/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight text-paper"
          aria-label="MovieExplorer Home"
        >
          <span aria-hidden="true" className="text-2xl">
            🎬
          </span>

          <span>MovieExplorer</span>
        </Link>

        {/* Navigation */}
        <nav
          className="flex items-center gap-4 sm:gap-6"
          aria-label="Primary navigation"
        >
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/movies" className={navLinkClass}>
            Movies
          </NavLink>

          <Link
            to="/movies"
            className="hidden rounded-full bg-marquee px-4 py-2 text-sm font-semibold text-ink-950 transition-colors hover:bg-marquee-light sm:inline-block"
          >
            Browse Movies
          </Link>
        </nav>
      </div>
    </header>
  );
}
