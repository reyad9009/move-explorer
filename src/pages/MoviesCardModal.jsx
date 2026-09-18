import { FaCalendar, FaStar } from "react-icons/fa";
import { IoTime } from "react-icons/io5";

export default function MovieDetailsModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div
      className="fixed overflow-hidden inset-0 z-9999 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-2xl rounded-2xl border border-ink-700 bg-ink-900 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 bg-white z-20 flex h-10 w-10 items-center justify-center rounded-full bg-ink-950/80 text-2xl text-paper transition-colors hover:bg-marquee hover:text-ink-950 cursor-pointer"
          aria-label="Close details"
        >
          ×
        </button>
        <div className="aspect-video w-full overflow-hidden rounded-t-2xl bg-ink-800">
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
        <div className="p-6">
          <h2 className="font-display text-2xl font-bold text-paper">
            {show.name}
          </h2>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-paper-dim">
            <div className="flex items-center gap-2">
              <FaStar />
              <span>
                {show.rating?.average != null
                  ? show.rating.average.toFixed(1)
                  : "N/A"}
              </span>
            </div>

            <span>•</span>
            <div className="flex items-center gap-2">
              <FaCalendar />
              <span>{show.premiered?.slice(0, 4) || "N/A"}</span>
            </div>

            {show.runtime && (
              <>
                <span>•</span>

                <div className="flex items-center gap-2">
                  <IoTime />
                  <span>{show.runtime} min</span>
                </div>
              </>
            )}
          </div>
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
          <div className="mt-5">
            <h3 className="mb-2 font-display text-lg font-semibold text-paper">
              Overview
            </h3>

            <div
              className="leading-7 text-paper-dim"
              dangerouslySetInnerHTML={{
                __html: show.summary || "No description available.",
              }}
            />
          </div>
          <div className="mt-5 grid gap-3 rounded-xl border border-ink-700 bg-ink-800 p-4 text-sm sm:grid-cols-2">
            <p className="text-paper-dim">
              <span className="font-semibold text-paper">Language:</span>{" "}
              {show.language || "N/A"}
            </p>

            <p className="text-paper-dim">
              <span className="font-semibold text-paper">Status:</span>{" "}
              {show.status || "N/A"}
            </p>

            <p className="text-paper-dim">
              <span className="font-semibold text-paper">Type:</span>{" "}
              {show.type || "N/A"}
            </p>

            <p className="text-paper-dim">
              <span className="font-semibold text-paper">Network:</span>{" "}
              {show.network?.name || "N/A"}
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-ink-700 px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-ink-800 cursor-pointer"
            >
              ❌ Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
