import { FaCalendar, FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router";
import MovieDetailsModal from "./MoviesCardModal";
import { useState } from "react";

export default function Movies() {
  const movies = useLoaderData();
  console.log(movies)
  const [selectedShow, setSelectedShow] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (value) => {
    setSearchText(value);

    const query = value.trim();
    if (!query) {
      setSearchResults(null);
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`,
      );
      const data = await res.json();
      const shows = data.map((item) => item.show);
      setSearchResults(shows);
    } catch (error) {
      console.error("Search error:", error);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };
  const displayMovies = searchResults ?? movies;

  return (
    <div>
      <main className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        {/* Header + Search */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="font-display text-2xl font-bold text-paper">
            Browse Movies
          </h1>

          <input
            type="text"
            value={searchText}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search Shows"
            className="w-full max-w-md rounded-full border border-ink-700 bg-ink-800 px-5 py-3 text-sm text-paper outline-none placeholder:text-paper-dim focus:border-marquee"
          />
        </div>

        {loading && (
          <div className="py-10 text-center text-paper-dim">Searching...</div>
        )}

        {!loading && searchResults && searchResults.length === 0 && (
          <div className="py-16 text-center">
            <h2 className="text-xl font-semibold text-paper">No shows found</h2>

            <p className="mt-2 text-sm text-paper-dim">
              Try another show name.
            </p>
          </div>
        )}

        {!loading && displayMovies.length > 0 && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {displayMovies.map((show) => {
              return (
                <article
                  key={show.id}
                  className="group flex flex-col overflow-hidden rounded-lg border border-ink-700 bg-ink-800 transition-colors hover:border-marquee-dark"
                >
                  <div className="w-full overflow-hidden bg-ink-700">
                    {show.image?.medium ? (
                      <img
                        src={show.image.medium}
                        alt={`${show.name} poster`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-sm text-paper-dim">
                        No Image
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col gap-3 p-4">
                    <h3 className="line-clamp-2 font-display text-base font-semibold leading-snug text-paper">
                      {show.name}
                    </h3>

                    <div className="flex items-center gap-3 text-sm text-paper-dim">
                      <div className="flex items-center gap-2">
                        <FaStar />
                        <span>{show.rating?.average?.toFixed(1) || "N/A"}</span>
                      </div>

                      <span aria-hidden="true">•</span>

                      <div className="flex items-center gap-2">
                        <FaCalendar />
                        <span>{show.premiered?.slice(0, 4) || "N/A"}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedShow(show)}
                      className="mt-auto w-full cursor-pointer rounded-full border border-marquee px-4 py-2 text-sm font-semibold text-marquee transition-colors hover:bg-marquee hover:text-ink-950"
                    >
                      See Details
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </main>
      <MovieDetailsModal
        show={selectedShow}
        onClose={() => setSelectedShow(null)}
      />
    </div>
  );
}
