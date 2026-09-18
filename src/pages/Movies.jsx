import { useLoaderData } from "react-router";

export default function Movies() {
  const movies = useLoaderData();
  console.log(movies);
  const releaseYear = (date) => {
    if (!date) return "N/A";
    return new Date(date).getFullYear();
  };

  return (
    <main className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
      <h1 className="mb-6 font-display text-2xl font-bold text-paper">
        Movies
      </h1>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {movies.map((show) => {
          const poster = show.image?.medium;
          const rating = show.rating?.average;

          return (
            <article
              key={show.id}
              className="group flex flex-col overflow-hidden rounded-lg border border-ink-700 bg-ink-800 transition-colors hover:border-marquee-dark"
            >
              <div className="w-full overflow-hidden bg-ink-700">
                {poster ? (
                  <img
                    src={poster}
                    alt={`${show.name} poster`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-paper-dim">
                    No Image
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col gap-3 p-4">
                <h3 className="line-clamp-2 font-display text-base font-semibold leading-snug text-paper">
                  {show.name}
                </h3>

                <div className="flex items-center gap-3 text-sm text-paper-dim">
                  <span>⭐ {rating ? rating.toFixed(1) : "N/A"}</span>

                  <span aria-hidden="true">•</span>

                  <span>📅 {releaseYear(show.premiered)}</span>
                </div>

                <button
                  type="button"
                  className="mt-auto w-full rounded-full border border-marquee px-4 py-2 text-sm font-semibold text-marquee transition-colors hover:bg-marquee hover:text-ink-950"
                  onClick={() => console.log("Selected:", show.id)}
                >
                  See Details
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
