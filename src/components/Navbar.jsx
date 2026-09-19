import { FaWpexplorer } from "react-icons/fa";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `text-xs sm:text-sm font-medium transition-colors px-2 sm:px-3 py-2 rounded-full ${
      isActive ? "bg-black text-white" : "text-black hover:bg-black/10"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-ink-700 bg-ink-900/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-3 sm:px-8 sm:py-4">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-1 sm:gap-2 font-display font-semibold tracking-tight text-paper"
          aria-label="MovieExplorer Home"
        >
          <span aria-hidden="true" className="text-xl sm:text-2xl">
            <FaWpexplorer />
          </span>

          <span className="text-sm font-bold sm:text-xl">
            MovieExplorer
          </span>
        </Link>
        <nav
          className="flex items-center gap-1 sm:gap-4 md:gap-6"
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
            className="hidden rounded-full bg-amber-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-amber-500 sm:inline-block"
          >
            Browse Movies
          </Link>
        </nav>
      </div>
    </header>
  );
}
