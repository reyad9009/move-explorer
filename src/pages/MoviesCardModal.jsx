import { FaCalendar, FaStar } from "react-icons/fa";
import { IoTime } from "react-icons/io5";

export default function MovieDetailsModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/70 p-3 sm:p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[95vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-ink-700 bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-2xl text-black transition-colors hover:bg-marquee"
          aria-label="Close details"
        >
          ×
        </button>

        <div className="aspect-video w-full shrink-0 overflow-hidden rounded-t-2xl bg-ink-800">
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

        <div className="overflow-y-auto p-4 sm:p-6">
          <h2 className="font-display text-xl font-bold text-black sm:text-2xl">
            {show.name}
          </h2>

          {/* Rating / Date / Runtime */}
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-600 sm:gap-3 sm:text-sm">
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
                  className="rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-600"
                >
                  {genre}
                </span>
              ))}
            </div>
          )}

          <div className="mt-5">
            <h3 className="mb-2 font-display text-base font-semibold text-black sm:text-lg">
              Overview
            </h3>

            <div
              className="text-sm leading-6 text-gray-600 sm:text-base sm:leading-7"
              dangerouslySetInnerHTML={{
                __html: show.summary || "No description available.",
              }}
            />
          </div>

          <div className="mt-5 grid gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm sm:grid-cols-2">
            <p className="text-gray-600">
              <span className="font-semibold text-black">Language:</span>{" "}
              {show.language || "N/A"}
            </p>

            <p className="text-gray-600">
              <span className="font-semibold text-black">Status:</span>{" "}
              {show.status || "N/A"}
            </p>

            <p className="text-gray-600">
              <span className="font-semibold text-black">Type:</span>{" "}
              {show.type || "N/A"}
            </p>

            <p className="text-gray-600">
              <span className="font-semibold text-black">Network:</span>{" "}
              {show.network?.name || "N/A"}
            </p>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="w-full cursor-pointer rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-gray-100 sm:w-auto"
            >
              ❌ Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
