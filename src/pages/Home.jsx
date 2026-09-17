import { Link } from "react-router";

export default function Home() {
  return (
    <div>
      <div className="filmstrip" aria-hidden="true" />

      <section className="marquee-glow relative overflow-hidden px-5 py-24 text-center sm:py-32">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-marquee">
          Now Showing
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl font-display text-5xl font-semibold leading-tight text-paper sm:text-6xl">
          Discover your next
          <br />
          favorite movie
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-paper-dim">
          Explore thousands of shows and films from around the world, search for
          the titles you love, and find your next binge in seconds.
        </p>
        <div className="mt-10">
          <Link
            to="/movies"
            className="inline-block rounded-full bg-marquee px-8 py-3 text-base font-semibold text-ink-950 transition-transform hover:-translate-y-0.5 hover:bg-marquee-light"
          >
            Explore Now
          </Link>
        </div>
      </section>

      <div className="filmstrip" aria-hidden="true" />

      {/* <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <Feature
            title="Search anything"
            description="Find a show by title and get results as you type, pulled straight from TVMaze's catalog."
          />
          <Feature
            title="Rich detail views"
            description="See ratings, premiere dates, genres, and a full summary for every title in a single click."
          />
          <Feature
            title="Built for every screen"
            description="A grid that reflows from a single column on your phone to a full gallery on desktop."
          />
        </div>
      </section> */}
    </div>
  );
}
