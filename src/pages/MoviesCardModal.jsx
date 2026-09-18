
export default function MovieDetailsModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div
      // MovieDetailsModal outer div
className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-ink-700 bg-ink-900 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Top Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ink-950/80 text-2xl text-paper transition-colors hover:bg-marquee hover:text-ink-950 cursor-pointer"
          aria-label="Close details"
        >
          ×
        </button>

        {/* Image */}
        <div className="aspect-video w-full overflow-hidden bg-ink-800">
          {show.image?.original ? (
            <img
              src={show.image.original}
              alt={`${show.name} poster`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-paper-dim">
              No Image
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="font-display text-2xl font-bold text-paper">
            {show.name}
          </h2>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-paper-dim">
            <span>
              ⭐{" "}
              {show.rating?.average != null
                ? show.rating.average.toFixed(1)
                : "N/A"}
            </span>

            <span>•</span>

            <span>
              📅 {show.premiered?.slice(0, 4) || "N/A"}
            </span>

            {show.runtime && (
              <>
                <span>•</span>
                <span>⏱ {show.runtime} min</span>
              </>
            )}
          </div>

          {/* Genres */}
          {show.genres?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {show.genres.map((genre) => (
                <span
                  key={genre}
                  className="rounded-full border border-ink-700 px-3 py-1 text-xs text-paper-dim"
                >
                  {genre}
                </span>
              ))}
            </div>
          )}

          {/* Overview */}
          <div className="mt-5">
            <h3 className="mb-2 font-display text-lg font-semibold text-paper">
              Overview
            </h3>

            <div
              className="leading-7 text-paper-dim"
              dangerouslySetInnerHTML={{
                __html:
                  show.summary || "No description available.",
              }}
            />
          </div>

          {/* Information */}
          <div className="mt-5 grid gap-3 rounded-xl border border-ink-700 bg-ink-800 p-4 text-sm sm:grid-cols-2">
            <p className="text-paper-dim">
              <span className="font-semibold text-paper">
                Language:
              </span>{" "}
              {show.language || "N/A"}
            </p>

            <p className="text-paper-dim">
              <span className="font-semibold text-paper">
                Status:
              </span>{" "}
              {show.status || "N/A"}
            </p>

            <p className="text-paper-dim">
              <span className="font-semibold text-paper">
                Type:
              </span>{" "}
              {show.type || "N/A"}
            </p>

            <p className="text-paper-dim">
              <span className="font-semibold text-paper">
                Network:
              </span>{" "}
              {show.network?.name || "N/A"}
            </p>
          </div>

          {/* Bottom Actions */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
            {show.officialSite && (
              <a
                href={show.officialSite}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-marquee px-5 py-2.5 text-center text-sm font-semibold text-ink-950 transition-colors hover:bg-marquee-light"
              >
                Official Website ↗
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
             className="rounded-full border border-ink-700 px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-ink-800 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

