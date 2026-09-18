import { FaWpexplorer } from "react-icons/fa";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive
        ? "text-marquee bg-black text-white p-2 rounded-full"
        : "text-paper/80 hover:text-paper text-black p-2 rounded-full"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-ink-700 bg-ink-900/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight text-paper"
          aria-label="MovieExplorer Home"
        >
          <span aria-hidden="true" className="text-2xl">
           <FaWpexplorer />
          </span>

          <span>MovieExplorer</span>
        </Link>

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
            className="hidden bg-amber-600 text-white rounded-full bg-marquee px-4 py-2 text-sm font-semibold text-ink-950 transition-colors hover:bg-marquee-light sm:inline-block"
          >
            Browse Movies
          </Link>
        </nav>
      </div>
    </header>
  );
}
